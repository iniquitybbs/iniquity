/**
 * IQ Configuration System
 * @module config
 * @summary BBS configuration management and system settings
 */

import * as fs from "fs"
import * as path from "path"
import { Transaction, Cached, Validate, Measure } from "./decorators-runtime"

/**
 * Server configuration
 */
export interface IServerConfig {
    name: string
    host: string
    telnetPort: number
    sshPort?: number
    webPort?: number
    maxConnections: number
    idleTimeout: number
    newUserAccess: number
    guestAccess: boolean
    requireEmail: boolean
    requireRealName: boolean
}

/**
 * Paths configuration
 */
export interface IPathsConfig {
    data: string
    users: string
    groups: string
    messages: string
    files: string
    logs: string
    temp: string
    assets: string
    scripts: string
    doors: string
}

/**
 * Display configuration
 */
export interface IDisplayConfig {
    defaultWidth: number
    defaultHeight: number
    defaultEncoding: "CP437" | "UTF8"
    defaultFont: string
    iceColors: boolean
    blinkingText: boolean
    ansiMusic: boolean
}

/**
 * Security configuration
 */
export interface ISecurityConfig {
    maxLoginAttempts: number
    lockoutDuration: number
    passwordMinLength: number
    passwordRequireNumbers: boolean
    passwordRequireSpecial: boolean
    sessionTimeout: number
    allowMultipleLogins: boolean
    logFailedLogins: boolean
    logSuccessfulLogins: boolean
}

/**
 * Network configuration
 */
export interface INetworkConfig {
    fidoEnabled: boolean
    fidoAddress?: string
    qwkEnabled: boolean
    ticEnabled: boolean
    binkpPort?: number
}

/**
 * Logging configuration
 */
export interface ILoggingConfig {
    level: "debug" | "info" | "warn" | "error"
    console: boolean
    file: boolean
    maxFileSize: number
    maxFiles: number
    logCalls: boolean
    logMessages: boolean
    logFiles: boolean
}

/**
 * Complete BBS configuration
 */
export interface IBBSConfig {
    server: IServerConfig
    paths: IPathsConfig
    display: IDisplayConfig
    security: ISecurityConfig
    network: INetworkConfig
    logging: ILoggingConfig
    custom: Record<string, any>
}

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: IBBSConfig = {
    server: {
        name: "Iniquity BBS",
        host: "0.0.0.0",
        telnetPort: 23,
        sshPort: 22,
        webPort: 8080,
        maxConnections: 10,
        idleTimeout: 300,
        newUserAccess: 2,
        guestAccess: true,
        requireEmail: false,
        requireRealName: false
    },
    paths: {
        data: "./data",
        users: "./data/users",
        groups: "./data/groups",
        messages: "./data/messages",
        files: "./data/files",
        logs: "./logs",
        temp: "./temp",
        assets: "./assets",
        scripts: "./scripts",
        doors: "./doors"
    },
    display: {
        defaultWidth: 80,
        defaultHeight: 24,
        defaultEncoding: "CP437",
        defaultFont: "IBM VGA",
        iceColors: true,
        blinkingText: false,
        ansiMusic: false
    },
    security: {
        maxLoginAttempts: 3,
        lockoutDuration: 300,
        passwordMinLength: 6,
        passwordRequireNumbers: false,
        passwordRequireSpecial: false,
        sessionTimeout: 3600,
        allowMultipleLogins: false,
        logFailedLogins: true,
        logSuccessfulLogins: true
    },
    network: {
        fidoEnabled: false,
        qwkEnabled: false,
        ticEnabled: false
    },
    logging: {
        level: "info",
        console: true,
        file: true,
        maxFileSize: 10485760,
        maxFiles: 5,
        logCalls: true,
        logMessages: true,
        logFiles: true
    },
    custom: {}
}

/**
 * IQConfig class for managing BBS configuration
 */
export class IQConfig {
    private config: IBBSConfig
    private configPath: string
    private loaded: boolean = false

    constructor(configPath: string = "./iniquity.json") {
        this.configPath = configPath
        this.config = this.deepClone(DEFAULT_CONFIG)
        this.load()
    }

    /**
     * Deep clone an object
     */
    private deepClone<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj))
    }

    /**
     * Deep merge objects with proper typing
     */
    private deepMerge<T extends object>(target: T, source: Partial<T>): T {
        const result = { ...target }

        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const sourceValue = source[key]
                const targetValue = target[key]

                if (sourceValue && typeof sourceValue === "object" && !Array.isArray(sourceValue)) {
                    result[key] = this.deepMerge(targetValue || ({} as any), sourceValue as any) as T[Extract<keyof T, string>]
                } else if (sourceValue !== undefined) {
                    result[key] = sourceValue as T[Extract<keyof T, string>]
                }
            }
        }

        return result
    }

    /**
     * Load configuration from file
     */
    @Transaction()
    @Measure()
    load(): boolean {
        try {
            if (fs.existsSync(this.configPath)) {
                const fileContent = fs.readFileSync(this.configPath, "utf-8")
                const fileConfig = JSON.parse(fileContent)
                this.config = this.deepMerge(DEFAULT_CONFIG, fileConfig)
                this.loaded = true
                return true
            }
        } catch (err) {
            console.error("Failed to load config:", err)
        }
        return false
    }

    /**
     * Save configuration to file
     */
    @Transaction()
    @Measure()
    save(): boolean {
        try {
            const dir = path.dirname(this.configPath)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true })
            }
            fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2))
            return true
        } catch (err) {
            console.error("Failed to save config:", err)
            return false
        }
    }

    /**
     * Check if config was loaded from file
     */
    isLoaded(): boolean {
        return this.loaded
    }

    /**
     * Get full configuration
     */
    @Cached({ ttl: 5000 })
    getAll(): IBBSConfig {
        return this.deepClone(this.config)
    }

    /**
     * Set full configuration
     */
    setAll(config: Partial<IBBSConfig>): void {
        this.config = this.deepMerge(this.config, config)
    }

    /**
     * Get server configuration
     */
    get server(): IServerConfig {
        return this.deepClone(this.config.server)
    }

    /**
     * Set server configuration
     */
    set server(config: Partial<IServerConfig>) {
        this.config.server = this.deepMerge(this.config.server, config)
    }

    /**
     * Get paths configuration
     */
    get paths(): IPathsConfig {
        return this.deepClone(this.config.paths)
    }

    /**
     * Set paths configuration
     */
    set paths(config: Partial<IPathsConfig>) {
        this.config.paths = this.deepMerge(this.config.paths, config)
    }

    /**
     * Get display configuration
     */
    get display(): IDisplayConfig {
        return this.deepClone(this.config.display)
    }

    /**
     * Set display configuration
     */
    set display(config: Partial<IDisplayConfig>) {
        this.config.display = this.deepMerge(this.config.display, config)
    }

    /**
     * Get security configuration
     */
    get security(): ISecurityConfig {
        return this.deepClone(this.config.security)
    }

    /**
     * Set security configuration
     */
    set security(config: Partial<ISecurityConfig>) {
        this.config.security = this.deepMerge(this.config.security, config)
    }

    /**
     * Get network configuration
     */
    get network(): INetworkConfig {
        return this.deepClone(this.config.network)
    }

    /**
     * Set network configuration
     */
    set network(config: Partial<INetworkConfig>) {
        this.config.network = this.deepMerge(this.config.network, config)
    }

    /**
     * Get logging configuration
     */
    get logging(): ILoggingConfig {
        return this.deepClone(this.config.logging)
    }

    /**
     * Set logging configuration
     */
    set logging(config: Partial<ILoggingConfig>) {
        this.config.logging = this.deepMerge(this.config.logging, config)
    }

    /**
     * Get custom configuration value
     */
    getCustom<T = any>(key: string): T | undefined {
        return this.config.custom[key]
    }

    /**
     * Set custom configuration value
     */
    setCustom(key: string, value: any): void {
        this.config.custom[key] = value
    }

    /**
     * Delete custom configuration value
     */
    deleteCustom(key: string): boolean {
        if (key in this.config.custom) {
            delete this.config.custom[key]
            return true
        }
        return false
    }

    /**
     * Get a specific config value by path (e.g., 'server.name')
     */
    get<T = any>(path: string): T | undefined {
        const parts = path.split(".")
        let current: any = this.config

        for (const part of parts) {
            if (current && typeof current === "object" && part in current) {
                current = current[part]
            } else {
                return undefined
            }
        }

        return current as T
    }

    /**
     * Set a specific config value by path (e.g., 'server.name')
     */
    set(path: string, value: any): boolean {
        const parts = path.split(".")
        let current: any = this.config

        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i]
            if (!(part in current)) {
                current[part] = {}
            }
            current = current[part]
        }

        const lastPart = parts[parts.length - 1]
        current[lastPart] = value
        return true
    }

    /**
     * Reset configuration to defaults
     */
    reset(): void {
        this.config = this.deepClone(DEFAULT_CONFIG)
    }

    /**
     * Reset a specific section to defaults
     */
    resetSection(section: keyof IBBSConfig): void {
        if (section in DEFAULT_CONFIG) {
            this.config[section] = this.deepClone(DEFAULT_CONFIG[section]) as any
        }
    }

    /**
     * Validate configuration
     */
    validate(): { valid: boolean; errors: string[] } {
        const errors: string[] = []

        // Server validation
        if (!this.config.server.name) {
            errors.push("Server name is required")
        }
        if (this.config.server.telnetPort < 1 || this.config.server.telnetPort > 65535) {
            errors.push("Telnet port must be between 1 and 65535")
        }
        if (this.config.server.maxConnections < 1) {
            errors.push("Max connections must be at least 1")
        }

        // Security validation
        if (this.config.security.passwordMinLength < 1) {
            errors.push("Password minimum length must be at least 1")
        }
        if (this.config.security.maxLoginAttempts < 1) {
            errors.push("Max login attempts must be at least 1")
        }

        // Display validation
        if (this.config.display.defaultWidth < 40 || this.config.display.defaultWidth > 200) {
            errors.push("Default width must be between 40 and 200")
        }
        if (this.config.display.defaultHeight < 20 || this.config.display.defaultHeight > 100) {
            errors.push("Default height must be between 20 and 100")
        }

        return {
            valid: errors.length === 0,
            errors
        }
    }

    /**
     * Ensure all required directories exist
     */
    ensureDirectories(): void {
        const dirs = [
            this.config.paths.data,
            this.config.paths.users,
            this.config.paths.groups,
            this.config.paths.messages,
            this.config.paths.files,
            this.config.paths.logs,
            this.config.paths.temp,
            this.config.paths.assets,
            this.config.paths.scripts,
            this.config.paths.doors
        ]

        for (const dir of dirs) {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true })
            }
        }
    }

    /**
     * Export configuration as JSON string
     */
    toJSON(): string {
        return JSON.stringify(this.config, null, 2)
    }

    /**
     * Import configuration from JSON string
     */
    fromJSON(json: string): boolean {
        try {
            const parsed = JSON.parse(json)
            this.config = this.deepMerge(DEFAULT_CONFIG, parsed)
            return true
        } catch (err) {
            return false
        }
    }
}

/**
 * Global configuration instance
 */
let globalConfig: IQConfig | null = null

export function getConfig(): IQConfig {
    if (!globalConfig) {
        globalConfig = new IQConfig()
    }
    return globalConfig
}

export function setConfig(config: IQConfig): void {
    globalConfig = config
}

export function loadConfig(configPath: string): IQConfig {
    globalConfig = new IQConfig(configPath)
    return globalConfig
}
