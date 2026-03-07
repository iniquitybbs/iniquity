/**
 * IQ User System
 * @module user
 * @summary User management, authentication, and data persistence
 */

import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import { Transaction, Validate, Measure } from './decorators-runtime'

/**
 * User access levels
 */
export enum UserAccessLevel {
    guest = 0,
    low = 1,
    normal = 2,
    high = 3,
    sysop = 4,
    admin = 5
}

/**
 * User options for creating/loading users
 */
export interface IUserOptions {
    name?: string
    handle?: string
    password?: string
    email?: string
    realName?: string
    location?: string
    access?: UserAccessLevel
}

/**
 * User data structure stored in database
 */
export interface IUserData {
    id: number
    handle: string
    passwordHash: string
    email: string
    realName: string
    location: string
    access: UserAccessLevel
    createdAt: string
    lastLogin: string
    totalCalls: number
    totalPosts: number
    totalUploads: number
    totalDownloads: number
    uploadBytes: number
    downloadBytes: number
    timeOnline: number
    flags: number
    note: string
    signature: string
    protocol: string
    editor: string
    menuSet: string
    screenWidth: number
    screenHeight: number
    birthDate: string
    gender: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
    custom: Record<string, any>
}

/**
 * User statistics
 */
export interface IUserStats {
    totalCalls: number
    totalPosts: number
    totalUploads: number
    totalDownloads: number
    uploadBytes: number
    downloadBytes: number
    timeOnline: number
    lastLogin: string
}

/**
 * User database interface
 */
export interface IUserDatabase {
    load(handle: string): IUserData | null
    save(user: IUserData): boolean
    create(user: Partial<IUserData>): IUserData | null
    delete(handle: string): boolean
    exists(handle: string): boolean
    list(): IUserData[]
    findByEmail(email: string): IUserData | null
    getNextId(): number
}

/**
 * JSON file-based user database
 */
export class JSONUserDatabase implements IUserDatabase {
    private dataPath: string
    private users: Map<string, IUserData> = new Map()
    private nextId: number = 1

    constructor(dataPath: string = './data/users') {
        this.dataPath = dataPath
        this.ensureDataDir()
        this.loadAllUsers()
    }

    private ensureDataDir(): void {
        if (!fs.existsSync(this.dataPath)) {
            fs.mkdirSync(this.dataPath, { recursive: true })
        }
    }

    private getUserFilePath(handle: string): string {
        const safeHandle = handle.toLowerCase().replace(/[^a-z0-9]/g, '_')
        return path.join(this.dataPath, `${safeHandle}.json`)
    }

    private loadAllUsers(): void {
        try {
            const files = fs.readdirSync(this.dataPath)
            for (const file of files) {
                if (file.endsWith('.json')) {
                    const filePath = path.join(this.dataPath, file)
                    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
                    this.users.set(data.handle.toLowerCase(), data)
                    if (data.id >= this.nextId) {
                        this.nextId = data.id + 1
                    }
                }
            }
        } catch (err) {
            // Directory might not exist yet
        }
    }

    load(handle: string): IUserData | null {
        return this.users.get(handle.toLowerCase()) || null
    }

    save(user: IUserData): boolean {
        try {
            const filePath = this.getUserFilePath(user.handle)
            fs.writeFileSync(filePath, JSON.stringify(user, null, 2))
            this.users.set(user.handle.toLowerCase(), user)
            return true
        } catch (err) {
            console.error('Failed to save user:', err)
            return false
        }
    }

    create(userData: Partial<IUserData>): IUserData | null {
        if (!userData.handle) return null
        if (this.exists(userData.handle)) return null

        const user: IUserData = {
            id: this.getNextId(),
            handle: userData.handle,
            passwordHash: userData.passwordHash || '',
            email: userData.email || '',
            realName: userData.realName || '',
            location: userData.location || '',
            access: userData.access ?? UserAccessLevel.normal,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            totalCalls: 0,
            totalPosts: 0,
            totalUploads: 0,
            totalDownloads: 0,
            uploadBytes: 0,
            downloadBytes: 0,
            timeOnline: 0,
            flags: 0,
            note: '',
            signature: '',
            protocol: 'zmodem',
            editor: 'internal',
            menuSet: 'default',
            screenWidth: 80,
            screenHeight: 24,
            birthDate: '',
            gender: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
            custom: {}
        }

        if (this.save(user)) {
            this.nextId++
            return user
        }
        return null
    }

    delete(handle: string): boolean {
        try {
            const filePath = this.getUserFilePath(handle)
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
            this.users.delete(handle.toLowerCase())
            return true
        } catch (err) {
            return false
        }
    }

    exists(handle: string): boolean {
        return this.users.has(handle.toLowerCase())
    }

    list(): IUserData[] {
        return Array.from(this.users.values())
    }

    findByEmail(email: string): IUserData | null {
        const lowerEmail = email.toLowerCase()
        for (const user of this.users.values()) {
            if (user.email.toLowerCase() === lowerEmail) {
                return user
            }
        }
        return null
    }

    getNextId(): number {
        return this.nextId
    }
}

/**
 * Global user database instance
 */
let globalUserDatabase: IUserDatabase | null = null

export function setUserDatabase(db: IUserDatabase): void {
    globalUserDatabase = db
}

export function getUserDatabase(): IUserDatabase {
    if (!globalUserDatabase) {
        globalUserDatabase = new JSONUserDatabase()
    }
    return globalUserDatabase
}

/**
 * Initialize the user database with a BBS-specific data path
 * @param bbsPath - The root directory of the BBS (where iniquity.ts lives)
 */
export function initUserDatabase(bbsPath: string): void {
    const dataPath = path.join(bbsPath, 'data', 'users')
    globalUserDatabase = new JSONUserDatabase(dataPath)
}

/**
 * User class for managing individual users
 */
export class IQUser {
    private data: IUserData | null = null
    private options: IUserOptions
    private db: IUserDatabase
    private isLoggedIn: boolean = false
    private loginTime: Date | null = null

    constructor(options: IUserOptions) {
        this.options = options
        this.db = getUserDatabase()
        
        // Try to load existing user
        const handle = options.handle || options.name
        if (handle) {
            this.data = this.db.load(handle)
        }
    }

    /**
     * Get user handle
     */
    get handle(): string {
        return this.data?.handle || this.options.handle || this.options.name || ''
    }

    /**
     * Get user ID
     */
    get id(): number {
        return this.data?.id || 0
    }

    /**
     * Get user access level
     */
    get access(): UserAccessLevel {
        return this.data?.access ?? this.options.access ?? UserAccessLevel.guest
    }

    /**
     * Set user access level
     */
    @Transaction()
    set access(level: UserAccessLevel) {
        if (this.data) {
            this.data.access = level
        }
    }

    /**
     * Get user email
     */
    get email(): string {
        return this.data?.email || this.options.email || ''
    }

    /**
     * Get user real name
     */
    get realName(): string {
        return this.data?.realName || this.options.realName || ''
    }

    /**
     * Get user location
     */
    get location(): string {
        return this.data?.location || this.options.location || ''
    }

    /**
     * Get user statistics
     */
    get stats(): IUserStats {
        return {
            totalCalls: this.data?.totalCalls || 0,
            totalPosts: this.data?.totalPosts || 0,
            totalUploads: this.data?.totalUploads || 0,
            totalDownloads: this.data?.totalDownloads || 0,
            uploadBytes: this.data?.uploadBytes || 0,
            downloadBytes: this.data?.downloadBytes || 0,
            timeOnline: this.data?.timeOnline || 0,
            lastLogin: this.data?.lastLogin || ''
        }
    }

    /**
     * Check if user exists in database
     */
    exists(): boolean {
        return this.data !== null
    }

    /**
     * Check if user is currently logged in
     */
    get loggedIn(): boolean {
        return this.isLoggedIn
    }

    /**
     * Hash a password
     */
    private hashPassword(password: string): string {
        return crypto.createHash('sha256').update(password).digest('hex')
    }

    /**
     * Verify password
     */
    private verifyPassword(password: string): boolean {
        if (!this.data) return false
        return this.data.passwordHash === this.hashPassword(password)
    }

    /**
     * Attempt to login
     */
    login(password?: string): boolean {
        const pwd = password || this.options.password
        
        if (!this.data) {
            return false
        }

        if (!pwd) {
            return false
        }

        if (!this.verifyPassword(pwd)) {
            return false
        }

        this.isLoggedIn = true
        this.loginTime = new Date()
        
        // Update login stats
        this.data.lastLogin = new Date().toISOString()
        this.data.totalCalls++
        this.save()

        return true
    }

    /**
     * Logout user
     */
    logout(): void {
        if (this.isLoggedIn && this.loginTime && this.data) {
            const sessionTime = Math.floor((Date.now() - this.loginTime.getTime()) / 1000)
            this.data.timeOnline += sessionTime
            this.save()
        }
        this.isLoggedIn = false
        this.loginTime = null
    }

    /**
     * Register a new user
     */
    register(password?: string): boolean {
        const handle = this.options.handle || this.options.name
        const pwd = password || this.options.password

        if (!handle || !pwd) {
            return false
        }

        if (this.db.exists(handle)) {
            return false
        }

        const userData: Partial<IUserData> = {
            handle: handle,
            passwordHash: this.hashPassword(pwd),
            email: this.options.email || '',
            realName: this.options.realName || '',
            location: this.options.location || '',
            access: this.options.access ?? UserAccessLevel.normal
        }

        this.data = this.db.create(userData)
        return this.data !== null
    }

    /**
     * Save user data
     */
    save(): boolean {
        if (!this.data) return false
        return this.db.save(this.data)
    }

    /**
     * Delete user
     */
    delete(): boolean {
        if (!this.data) return false
        const result = this.db.delete(this.data.handle)
        if (result) {
            this.data = null
            this.isLoggedIn = false
        }
        return result
    }

    /**
     * Get custom user property
     */
    getCustom(key: string): any {
        return this.data?.custom?.[key]
    }

    /**
     * Set custom user property
     */
    setCustom(key: string, value: any): void {
        if (this.data) {
            if (!this.data.custom) {
                this.data.custom = {}
            }
            this.data.custom[key] = value
            this.save()
        }
    }

    /**
     * Check if user has required access level
     */
    hasAccess(requiredLevel: UserAccessLevel): boolean {
        return this.access >= requiredLevel
    }

    /**
     * Increment post count
     */
    incrementPosts(): void {
        if (this.data) {
            this.data.totalPosts++
            this.save()
        }
    }

    /**
     * Record upload
     */
    recordUpload(bytes: number): void {
        if (this.data) {
            this.data.totalUploads++
            this.data.uploadBytes += bytes
            this.save()
        }
    }

    /**
     * Record download
     */
    recordDownload(bytes: number): void {
        if (this.data) {
            this.data.totalDownloads++
            this.data.downloadBytes += bytes
            this.save()
        }
    }

    /**
     * Get raw user data
     */
    getRawData(): IUserData | null {
        return this.data ? { ...this.data } : null
    }

    /**
     * Update user data
     */
    update(updates: Partial<IUserData>): boolean {
        if (!this.data) return false
        
        // Don't allow updating certain fields directly
        const { id, handle, passwordHash, ...safeUpdates } = updates
        
        Object.assign(this.data, safeUpdates)
        return this.save()
    }

    /**
     * Change password
     */
    changePassword(oldPassword: string, newPassword: string): boolean {
        if (!this.data) return false
        if (!this.verifyPassword(oldPassword)) return false
        
        this.data.passwordHash = this.hashPassword(newPassword)
        return this.save()
    }

    /**
     * Reset password (admin function)
     */
    resetPassword(newPassword: string): boolean {
        if (!this.data) return false
        this.data.passwordHash = this.hashPassword(newPassword)
        return this.save()
    }
}

/**
 * User list utilities
 */
export class IQUserList {
    private db: IUserDatabase

    constructor() {
        this.db = getUserDatabase()
    }

    /**
     * Get all users
     */
    all(): IUserData[] {
        return this.db.list()
    }

    /**
     * Get user count
     */
    count(): number {
        return this.db.list().length
    }

    /**
     * Find user by handle
     */
    findByHandle(handle: string): IQUser | null {
        if (this.db.exists(handle)) {
            return new IQUser({ handle })
        }
        return null
    }

    /**
     * Find user by email
     */
    findByEmail(email: string): IQUser | null {
        const data = this.db.findByEmail(email)
        if (data) {
            return new IQUser({ handle: data.handle })
        }
        return null
    }

    /**
     * Get users by access level
     */
    byAccessLevel(level: UserAccessLevel): IUserData[] {
        return this.db.list().filter(u => u.access === level)
    }

    /**
     * Get top users by calls
     */
    topByCalls(limit: number = 10): IUserData[] {
        return this.db.list()
            .sort((a, b) => b.totalCalls - a.totalCalls)
            .slice(0, limit)
    }

    /**
     * Get top users by posts
     */
    topByPosts(limit: number = 10): IUserData[] {
        return this.db.list()
            .sort((a, b) => b.totalPosts - a.totalPosts)
            .slice(0, limit)
    }

    /**
     * Get recently active users
     */
    recentlyActive(limit: number = 10): IUserData[] {
        return this.db.list()
            .sort((a, b) => new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime())
            .slice(0, limit)
    }

    /**
     * Get new users
     */
    newest(limit: number = 10): IUserData[] {
        return this.db.list()
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, limit)
    }
}
