/**
 * Simplified BBS API
 * @module core/bbs
 * @summary High-level declarative API for building BBS applications
 *
 * This module provides a simplified, declarative API that wraps the existing
 * core functionality, enabling cleaner and more expressive BBS development.
 */

/*
-$a. ------------------ .a$ ---------------------------- %$!, ----------------%
 `$¸   .%$$^¸$$aa.     .¸$`        .        .a$a$$.      `¸$%  $a$.        .
-.aaa$ $$$$'- $$$$$.- $aaa. -.a%$^"$$aa -- .$$$$$'- $$a. $aaa. `$,$ ----------%
;$$$$',a$a$  d$%$$$$$,'$$$$;$$$$$  $$$$$., $$%$$"  d$a$$ '$$$$; $$$   .a%$  $$a
:$$$$;$$$$%; Z$$$$$$$$;$$$$:$$$$$. $$$$^$,;$$&$$   Z$$$$,;$$$$.a$$$a..$$$   $$$
.$$$$ `$$$$.  $$$%$$$' $$$$.`$$$$  $$%$$$$ `$$$$.   $%$$$ $$$$""$$$" $$$$:  a$$
 `$$$a.$$%$   $$$$$$';a$$$`  `¸$$aa$$$$&$': `$$$$a. $$$$'a$$$`.$$'$  $$$$;  $$$
%-----.------ $$$$'--------------- $$%$$' -- `¸$$$$$%$¸' ---- $$¸$a. `"$&$$//$%$
dz      .   .:'¸'     .        .   $$$$'     .        .       `¸$$$$y.     `$$&
%--------- a`-----------.--------- $$¸' -----.------------.---------------- $$$
   .      !a    . .    .      .   .:'   .  .                  .        .:.a$$$¸
.      .  '$a,          .        a` .   'a          .   .             s` .  . .
      .    ¸$Aa         .       !a       a!      .    .         ..   %s      .s
   .         ¸¸'     . .        '$$Aa.aA$$'        . .               `!$%a.a%//$
==============================================================================
   t h e    i n i q u i t y    b u l l e t i n   b o a r d   s y s t e m
==============================================================================
*/

import { getGlobalRuntime, Runtime, Artwork } from "./core"
import { getConfig } from "./config"
import { IQMenu, IQMenuOptions, IMenuCommands } from "./menu"
import { IQFrame } from "./frame"
import { screen } from "./screen"
import { ANSI } from "./ansi"
import { events, IQEventHandler, IQEventOptions } from "./events"
import { IQUser, IQUserList, IUserOptions, UserAccessLevel } from "./user"
import { IQGroup, IQGroupList, IGroupOptions } from "./group"
import type { SnackCorner, SnackPayload } from "./snack"

/**
 * Menu item definition for declarative menus
 */
export interface BBSMenuItem {
    /** Hotkey for this menu item */
    key: string
    /** Display label */
    label: string
    /** Action to perform: "back", "quit", or a function */
    action?: "back" | "quit" | (() => any | Promise<any>)
    /** Name of another menu to navigate to */
    goto?: string
    /** Explicit X position for this item (bypasses layout system) */
    x?: number
    /** Explicit Y position for this item (bypasses layout system) */
    y?: number
}

/**
 * Options for declarative menu definition
 */
export interface BBSMenuOptions {
    /** Artwork filename to display */
    art?: string
    /**
     * Centering mode for menu artwork positioning based on screen resolution.
     * - 'auto': Center if artwork is smaller than screen (default)
     * - 'horizontal': Center horizontally only
     * - 'vertical': Center vertically only
     * - 'both': Always center both axes
     * - 'none': No centering, render at 1,1 (legacy behavior)
     */
    artCenter?: "auto" | "horizontal" | "vertical" | "both" | "none"
    /** Explicit X position for artwork (1-indexed). Overrides centering. */
    artX?: number
    /** Explicit Y position for artwork (1-indexed). Overrides centering. */
    artY?: number
    /** Custom prompt text (supports MCI/pipe codes) */
    prompt?: string
    /** X position for prompt (if not specified, auto-centered) */
    promptX?: number
    /** Y position for prompt (if not specified, uses layout default) */
    promptY?: number
    /** Layout mode for auto-positioning */
    layout?: "single" | "two-column"
    /** Base path for artwork files */
    basepath?: string
    /** Format string for menu items (e.g., "|11[|15{key}|11] |07{label}") */
    itemFormat?: string
    /** Menu items */
    items: BBSMenuItem[]

    // Column positioning options for flexible layout control

    /** Column 1 (left) X position for two-column layout */
    col1X?: number
    /** Column 1 (left) starting Y position */
    col1Y?: number
    /** Column 2 (right) X position for two-column layout */
    col2X?: number
    /** Column 2 (right) starting Y position */
    col2Y?: number
    /** Starting X position for single-column layout */
    itemsX?: number
    /** Starting Y position for items (used by both layouts if col1Y/col2Y not set) */
    itemsY?: number
    /** Enable keyboard hotkeys for menu items (default true) */
    hotkeys?: boolean
    /** Enable SGR mouse for clicking items (default true) */
    mouse?: boolean
    /** MCI string for "pressed" look when an item is clicked (e.g. "|15|16") */
    mouseHighlightFormat?: string
}

/**
 * Options for popup dialogs
 */
export interface BBSPopupOptions {
    /** Type affects color scheme */
    type?: "info" | "warning" | "error" | "success"
    /** Width of the popup */
    width?: number
    /** Message to show when data is empty (for dataPopup) */
    emptyMessage?: string
}

/** Target for snack delivery: current session, broadcast, or specific node/user */
export type SnackTarget = "current" | "broadcast" | { node: number } | { user: string }

/** Options for snack (toast) notifications */
export interface BBSSnackOptions {
    /** Corner of the terminal (default 'bottom-right') */
    corner?: SnackCorner
    /** Duration in ms before the snack fades (default 3000) */
    durationMs?: number
    /** Who receives the snack (default 'current') */
    target?: SnackTarget
}

/**
 * Options for artwork rendering via bbs.art()
 */
export interface BBSArtOptions {
    /** Clear screen before rendering */
    clearScreen?: boolean
    /** Display mode: 'line' (line-by-line), 'character' (char-by-char), 'instant' (all at once) */
    display?: "line" | "character" | "instant"
    /** Speed in milliseconds (for line/character modes) */
    speed?: number
    /** Data for MCI code interpolation (accessible as @KEY@ in artwork) */
    data?: Record<string, any>
    /** Centering mode for artwork positioning */
    center?: "auto" | "horizontal" | "vertical" | "both" | "none"
    /** Explicit X position (1-indexed) */
    x?: number
    /** Explicit Y position (1-indexed) */
    y?: number
    /** Pause after rendering (true for default pause, string for custom prompt) */
    pauseAfter?: boolean | string
    /** Override session encoding for this artwork (default: use session preference) */
    encoding?: "cp437" | "utf8"
}

/**
 * Option for choice popup menus
 */
export interface BBSChoiceOption {
    /** Hotkey for this choice */
    key: string
    /** Display label */
    label: string
    /** Optional description shown below the label */
    description?: string
}

/**
 * Options for bulletin display
 */
export interface BBSBulletinOptions {
    /** Lines per page for pagination */
    pageLength?: number
    /** Clear screen before display */
    clearScreen?: boolean
    /** Pause after display */
    pauseAfter?: boolean
}

/**
 * Stored menu definition
 */
interface MenuDefinition {
    name: string
    options: BBSMenuOptions
}

/**
 * Color schemes for popup types
 */
const POPUP_COLORS: Record<string, { border: string; title: string }> = {
    info: { border: "cyan", title: "bright white" },
    warning: { border: "yellow", title: "bright yellow" },
    error: { border: "bright red", title: "bright white" },
    success: { border: "green", title: "bright white" }
}

/**
 * Get layout configuration based on current screen dimensions
 * This replaces hardcoded constants with responsive calculations
 * @param layout - Layout type ('single' or 'two-column')
 * @returns Layout configuration with calculated positions
 */
function getLayoutConfig(layout: "single" | "two-column") {
    const w = screen.width
    const h = screen.height

    if (layout === "two-column") {
        return {
            col1X: Math.floor(w * 0.22), // ~22% from left
            col2X: Math.floor(w * 0.57), // ~57% from left
            startY: Math.floor(h * 0.32), // ~32% from top
            promptY: Math.floor(h * 0.81) // ~81% from top
        }
    }
    return {
        startX: Math.floor(w * 0.22),
        startY: Math.floor(h * 0.32),
        promptY: Math.floor(h * 0.76)
    }
}

/**
 * The BBS API object
 */
class BBS {
    private menuRegistry: Map<string, MenuDefinition> = new Map()
    private startCallback: (() => Promise<void>) | null = null
    private basepath: string = "assets"
    private globalHotkeys: Record<string, () => Promise<void>> = {}

    /**
     * Register a global hotkey that works on every menu. When the user presses the key,
     * the handler runs (e.g. popup flow); the menu then redraws and waits for input again.
     * @param key - Single key (e.g. "/" for quick AI chat)
     * @param handler - Async function to run when key is pressed
     */
    setGlobalHotkey(key: string, handler: () => Promise<void>): void {
        this.globalHotkeys[key] = handler
    }

    /**
     * Register a declarative menu definition
     * @param name - Unique name for this menu
     * @param options - Menu configuration
     */
    menu(name: string, options: BBSMenuOptions): void {
        this.menuRegistry.set(name, { name, options })
    }

    /**
     * Display a registered menu by name
     * @param name - Name of the menu to show
     * @returns The exit key pressed
     */
    async showMenu(name: string): Promise<string> {
        const definition = this.menuRegistry.get(name)
        if (!definition) {
            throw new Error(`Menu "${name}" not found. Did you forget to register it with bbs.menu()?`)
        }

        const runtime = getGlobalRuntime()
        const { options } = definition

        // Calculate positions based on layout using dynamic screen-responsive values
        const layout = options.layout || "single"
        const layoutConfig = getLayoutConfig(layout)

        // Build IQMenu options
        const menuOptions: IQMenuOptions = {
            name: name,
            basepath: options.basepath || this.basepath,
            prompt: options.prompt || `|14${name} |07» |15`,
            promptX: options.promptX ?? screen.centerX(20),
            promptY: options.promptY ?? layoutConfig.promptY,
            autoRenderItems: true,
            itemFormat: options.itemFormat || "|11[|15{key}|11] |07{label}",
            commands: this.buildCommands(options.items),
            hotkeys: options.hotkeys ?? true,
            mouse: options.mouse ?? true,
            mouseHighlightFormat: options.mouseHighlightFormat,
            globalHotkeys: Object.keys(this.globalHotkeys).length > 0 ? { ...this.globalHotkeys } : undefined
        }

        // Add artwork if specified
        if (options.art) {
            menuOptions.art = {
                filename: options.art,
                mode: "line",
                speed: 30,
                center: options.artCenter,
                x: options.artX,
                y: options.artY
            }
        }

        // Create the menu
        const iqMenu = runtime.menu(menuOptions)

        // Add items with calculated positions
        this.addItemsWithLayout(iqMenu, options.items, layout, options)

        // Show the menu
        return await iqMenu.show()
    }

    /**
     * Build command handlers from menu items
     */
    private buildCommands(items: BBSMenuItem[]): IMenuCommands {
        const commands: IMenuCommands = {}

        for (const item of items) {
            const key = item.key.toUpperCase()

            if (item.goto) {
                // Navigate to another menu
                const targetMenu = item.goto
                commands[key] = async () => {
                    await this.showMenu(targetMenu)
                    return "continue"
                }
            } else if (item.action === "back") {
                commands[key] = () => "back"
            } else if (item.action === "quit") {
                commands[key] = () => "quit"
            } else if (typeof item.action === "function") {
                commands[key] = item.action
            }
        }

        // Always add Q as quit/back if not defined
        if (!commands["Q"]) {
            commands["Q"] = () => "back"
        }

        return commands
    }

    /**
     * Add items to menu with auto-calculated positions
     */
    private addItemsWithLayout(menu: IQMenu, items: BBSMenuItem[], layout: "single" | "two-column", options: BBSMenuOptions): void {
        // Get dynamic layout configuration based on current screen dimensions
        const layoutConfig = getLayoutConfig(layout)

        if (layout === "two-column") {
            // Use custom column positions if provided, otherwise use dynamic defaults
            const twoColConfig = layoutConfig as { col1X: number; col2X: number; startY: number; promptY: number }
            const col1X = options.col1X ?? twoColConfig.col1X
            const col2X = options.col2X ?? twoColConfig.col2X
            const col1Y = options.col1Y ?? options.itemsY ?? twoColConfig.startY
            const col2Y = options.col2Y ?? options.itemsY ?? twoColConfig.startY

            const col1Items: BBSMenuItem[] = []
            const col2Items: BBSMenuItem[] = []

            // Split items into two columns (items with explicit x/y are handled separately)
            items.forEach((item, index) => {
                // If item has explicit positioning, add it directly
                if (item.x !== undefined && item.y !== undefined) {
                    menu.addItem({
                        key: item.key,
                        label: item.label,
                        x: item.x,
                        y: item.y
                    })
                } else if (index % 2 === 0) {
                    col1Items.push(item)
                } else {
                    col2Items.push(item)
                }
            })

            // Add column 1 items
            col1Items.forEach((item, index) => {
                menu.addItem({
                    key: item.key,
                    label: item.label,
                    x: col1X,
                    y: col1Y + index
                })
            })

            // Add column 2 items
            col2Items.forEach((item, index) => {
                menu.addItem({
                    key: item.key,
                    label: item.label,
                    x: col2X,
                    y: col2Y + index
                })
            })
        } else {
            // Single column layout - use dynamic defaults
            const singleConfig = layoutConfig as { startX: number; startY: number; promptY: number }
            const startX = options.itemsX ?? singleConfig.startX
            const startY = options.itemsY ?? singleConfig.startY

            items.forEach((item, index) => {
                // If item has explicit positioning, use it
                if (item.x !== undefined && item.y !== undefined) {
                    menu.addItem({
                        key: item.key,
                        label: item.label,
                        x: item.x,
                        y: item.y
                    })
                } else {
                    menu.addItem({
                        key: item.key,
                        label: item.label,
                        x: startX,
                        y: startY + index
                    })
                }
            })
        }
    }

    /**
     * Display a popup dialog
     * @param title - Title for the popup
     * @param message - Message to display
     * @param options - Popup options
     * @returns The key pressed to dismiss
     */
    async popup(title: string, message: string, options?: BBSPopupOptions): Promise<string> {
        const runtime = getGlobalRuntime()
        const type = options?.type || "info"
        const width = options?.width || 50
        const colors = POPUP_COLORS[type] || POPUP_COLORS.info

        // Calculate height based on message lines
        const lines = message.split("\n")
        const height = Math.max(7, lines.length + 5)

        const popup = runtime.frame({
            x: screen.centerX(width),
            y: screen.centerY(height),
            width: width,
            height: height,
            color: colors.border,
            border: "double",
            title: title,
            titleColor: colors.title,
            shadow: true
        })

        popup.blank()
        for (const line of lines) {
            popup.center(`|15${line}`)
        }
        popup.blank()
        popup.center("|08Press any key to continue...")

        return await popup.popup()
    }

    /**
     * Display welcome artwork with pause
     * @param artFile - Artwork filename
     */
    async welcome(artFile: string): Promise<void> {
        const runtime = getGlobalRuntime()
        const art = runtime.artwork({ basepath: this.basepath })

        await art.render({
            filename: artFile,
            clearScreenBefore: true,
            mode: "line",
            speed: 50
        })

        await runtime.pause({ removePause: true })
    }

    /**
     * Display goodbye artwork with pause
     * @param artFile - Artwork filename
     */
    async goodbye(artFile: string): Promise<void> {
        const runtime = getGlobalRuntime()
        runtime.clearLastRenderedMenuArtKey()
        const art = runtime.artwork({ basepath: this.basepath })

        await art.render({
            filename: artFile,
            clearScreenBefore: true,
            mode: "line",
            speed: 50
        })

        await runtime.pause("|07Thanks for visiting! Press any key to disconnect...")
    }

    /**
     * Set the base path for artwork files
     * @param path - Base path for assets
     */
    setBasepath(path: string): void {
        this.basepath = path
    }

    /**
     * Get the current basepath
     */
    getBasepath(): string {
        return this.basepath
    }

    /**
     * Register the main entry point callback
     * @param callback - Async function to run when BBS starts
     */
    start(callback: () => Promise<void>): void {
        this.startCallback = callback
    }

    /**
     * Execute the registered start callback
     * Called by the runtime executor after initialization
     */
    async executeStart(): Promise<void> {
        if (this.startCallback) {
            try {
                await this.startCallback()
            } catch (error) {
                console.error("BBS start callback error:", error)
                throw error
            }
        }
    }

    /**
     * Check if a start callback is registered
     */
    hasStartCallback(): boolean {
        return this.startCallback !== null
    }

    /**
     * Clear screen utility
     */
    cls(): void {
        const runtime = getGlobalRuntime()
        runtime.getOutput().write(ANSI.clearScreen())
    }

    /**
     * Say text with MCI processing
     */
    say(text: string): void {
        getGlobalRuntime().say(text)
    }

    /**
     * Ask for user input
     * @param prompt - The prompt to display
     * @returns The user's input
     */
    async ask(prompt: string): Promise<string> {
        return await getGlobalRuntime().ask(prompt)
    }

    /**
     * Pause and wait for keypress
     */
    async pause(prompt?: string): Promise<string> {
        return await getGlobalRuntime().pause(prompt)
    }

    /**
     * Wait for specified milliseconds
     */
    async wait(ms: number): Promise<void> {
        await getGlobalRuntime().wait(ms)
    }

    /**
     * Disconnect/hangup
     */
    hangup(): void {
        getGlobalRuntime().disconnect()
    }

    /**
     * Get terminal encoding (CP437 or UTF-8) chosen at connect
     */
    getEncoding(): "cp437" | "utf8" {
        return getGlobalRuntime().getOutput().getEncoding?.() ?? "cp437"
    }

    /**
     * Set terminal encoding for this session (affects all subsequent output)
     */
    setEncoding(encoding: "cp437" | "utf8"): void {
        getGlobalRuntime().getOutput().setEncoding?.(encoding)
    }

    /**
     * Apply encoding policy from config: detect (auto UTF-8), ask (prompt), or force cp437/utf8.
     * Call once after login, before main menu. No-op if client does not suggest UTF-8 or encoding is already utf8.
     */
    async promptEncodingPreference(): Promise<void> {
        const out = getGlobalRuntime().getOutput()
        const suggestsUtf8 = out.getClientSuggestsUtf8?.() === true
        const encoding = out.getEncoding?.() ?? "cp437"
        if (!suggestsUtf8 || encoding === "utf8") return

        const cfg = getConfig()
        const raw = cfg.display.encodingPrompt
        const policy = (raw === "detect" || raw === "ask" || raw === "cp437" || raw === "utf8") ? raw : "ask"

        if (policy === "utf8" || policy === "cp437") {
            out.setEncoding?.(policy)
            return
        }
        if (policy === "detect") {
            out.setEncoding?.("utf8")
            return
        }
        out.write("Your terminal supports UTF-8. Use UTF-8 for the whole BBS? (Y/n) ")
        const line = await getGlobalRuntime().getOutput().readLine()
        const answer = (line ?? "").trim().toLowerCase()
        if (answer === "y" || answer === "yes" || answer === "") {
            out.setEncoding?.("utf8")
        }
    }

    // =========================================================================
    // Event System Methods
    // =========================================================================

    /**
     * Subscribe to an event
     * @param event - Event type to listen for (use '*' for all events)
     * @param handler - Function to call when event is emitted
     * @param options - Subscription options
     * @returns Unsubscribe function
     */
    on(event: string, handler: IQEventHandler, options?: IQEventOptions): () => void {
        return events.on(event, handler, options)
    }

    /**
     * Subscribe to an event (fires only once)
     * @param event - Event type to listen for
     * @param handler - Function to call when event is emitted
     * @returns Unsubscribe function
     */
    once(event: string, handler: IQEventHandler): () => void {
        return events.once(event, handler)
    }

    /**
     * Unsubscribe from an event
     * @param event - Event type to unsubscribe from
     * @param handler - Specific handler to remove (if omitted, removes all handlers for event)
     */
    off(event: string, handler?: IQEventHandler): void {
        events.off(event, handler)
    }

    /**
     * Emit an event (queues for processing)
     * @param event - Event type to emit
     * @param data - Optional data payload
     * @param source - Optional source identifier
     */
    emit(event: string, data?: any, source?: string): void {
        events.emit(event, data, source)
    }

    /**
     * Emit an event and process immediately (synchronous dispatch)
     * @param event - Event type to emit
     * @param data - Optional data payload
     * @param source - Optional source identifier
     */
    async emitSync(event: string, data?: any, source?: string): Promise<void> {
        await events.emitSync(event, data, source)
    }

    // =========================================================================
    // Server Info Provider
    // =========================================================================

    private serverInfoProvider: (() => ServerInfo | null) | null = null

    /**
     * Register a server info provider (called by the server implementation)
     * @param provider - Function that returns server info
     */
    setServerInfoProvider(provider: () => ServerInfo | null): void {
        this.serverInfoProvider = provider
    }

    /**
     * Get information about connected sessions
     * @returns Server info including online users, or null if not available
     */
    getServerInfo(): ServerInfo | null {
        if (this.serverInfoProvider) {
            return this.serverInfoProvider()
        }
        return null
    }

    /**
     * Get list of online users/sessions
     * @returns Array of session info objects
     */
    getOnlineUsers(): SessionInfo[] {
        const info = this.getServerInfo()
        return info?.sessions || []
    }

    /**
     * Get count of online users
     * @returns Number of connected users
     */
    getOnlineCount(): number {
        const info = this.getServerInfo()
        return info?.sessions.length || 0
    }

    // =========================================================================
    // User and Group Management
    // =========================================================================

    private currentUser: IQUser | null = null

    /**
     * Get or create a user by handle
     * @param handleOrOptions - User handle string or options object
     * @returns IQUser instance
     */
    user(handleOrOptions: string | IUserOptions): IQUser {
        if (typeof handleOrOptions === "string") {
            return new IQUser({ handle: handleOrOptions })
        }
        return new IQUser(handleOrOptions)
    }

    /**
     * Get the user list utility
     * @returns IQUserList instance for querying users
     */
    users(): IQUserList {
        return new IQUserList()
    }

    /**
     * Get or create a group by name
     * @param nameOrOptions - Group name string or options object
     * @returns IQGroup instance
     */
    group(nameOrOptions: string | IGroupOptions): IQGroup {
        if (typeof nameOrOptions === "string") {
            return new IQGroup(nameOrOptions)
        }
        return new IQGroup(nameOrOptions)
    }

    /**
     * Get the group list utility
     * @returns IQGroupList instance for querying groups
     */
    groups(): IQGroupList {
        return new IQGroupList()
    }

    /**
     * Set the current logged-in user for this session
     * @param user - The user to set as current
     */
    setCurrentUser(user: IQUser | null): void {
        this.currentUser = user
        const handle = user?.getRawData()?.handle
        const output = getGlobalRuntime().getOutput()
        output.setUsername?.(handle ?? undefined)
    }

    /**
     * Get the current logged-in user for this session
     * @returns The current user or null if not logged in
     */
    getCurrentUser(): IQUser | null {
        return this.currentUser
    }

    /**
     * Check if a user is currently logged in
     * @returns true if a user is logged in
     */
    isLoggedIn(): boolean {
        return this.currentUser !== null && this.currentUser.loggedIn
    }

    // =========================================================================
    // Form Methods - Popup forms for user input
    // =========================================================================

    /**
     * Display a login form popup
     * @returns The logged-in user, or null if cancelled/failed
     */
    async loginForm(): Promise<IQUser | null> {
        const runtime = getGlobalRuntime()
        const width = 50
        const height = 10

        // Clear screen so the form is drawn on a clean canvas (avoids shift after choice menu)
        runtime.getOutput().write(ANSI.clearScreen())

        const form = runtime.frame({
            x: screen.centerX(width),
            y: screen.centerY(height),
            width: width,
            height: height,
            color: "cyan",
            border: "double",
            title: "Login",
            titleColor: "bright white",
            shadow: true
        })

        form.open()
        form.blank()
        form.center("|15Enter your credentials|07")
        form.blank()

        const handle = await form.input("|14Handle: |15")
        if (!handle) {
            form.close()
            return null
        }

        const password = await form.inputPassword("|14Password: |15")
        if (!password) {
            form.close()
            return null
        }

        form.close()

        // Attempt login
        const user = this.user(handle.trim())
        if (!user.exists()) {
            await this.popup("Login Failed", `User "${handle}" not found.\nTry registering as a new user.`, { type: "error" })
            return null
        }

        if (user.login(password)) {
            this.setCurrentUser(user)
            await this.popup(
                "Welcome Back!",
                `|11${user.handle}|07\n\nTotal calls: |15${user.stats.totalCalls}|07\nLast login: |15${
                    user.stats.lastLogin ? new Date(user.stats.lastLogin).toLocaleString() : "First time!"
                }|07`,
                { type: "success" }
            )
            return user
        } else {
            await this.popup("Login Failed", "Invalid password.\nPlease try again.", { type: "error" })
            return null
        }
    }

    /**
     * Display a registration form popup
     * @returns The newly registered user, or null if cancelled/failed
     */
    async registerForm(): Promise<IQUser | null> {
        const runtime = getGlobalRuntime()
        const width = 55
        const height = 16

        // Clear screen so the form is drawn on a clean canvas (avoids shift after choice menu)
        runtime.getOutput().write(ANSI.clearScreen())

        const form = runtime.frame({
            x: screen.centerX(width),
            y: screen.centerY(height),
            width: width,
            height: height,
            color: "green",
            border: "double",
            title: "New User Registration",
            titleColor: "bright white",
            shadow: true
        })

        form.open()
        form.blank()
        form.center("|15Create your account|07")
        form.blank()

        const handle = await form.input("|14Handle: |15")
        if (!handle || handle.trim() === "") {
            form.close()
            await this.popup("Registration", "No handle entered.", { type: "warning" })
            return null
        }

        // Check if handle exists
        const existingUser = this.user(handle.trim())
        if (existingUser.exists()) {
            form.close()
            await this.popup("Registration Failed", `The handle "${handle}" is already taken.\nPlease choose a different one.`, { type: "error" })
            return null
        }

        const password = await form.inputPassword("|14Password: |15")
        if (!password || password.length < 4) {
            form.close()
            await this.popup("Registration Failed", "Password must be at least 4 characters.", { type: "error" })
            return null
        }

        const confirmPassword = await form.inputPassword("|14Confirm: |15")
        if (password !== confirmPassword) {
            form.close()
            await this.popup("Registration Failed", "Passwords do not match.", { type: "error" })
            return null
        }

        form.blank()
        form.say("|08Optional information:|07")

        const realName = await form.input("|14Real Name: |07")
        const location = await form.input("|14Location: |07")
        const email = await form.input("|14Email: |07")

        form.close()

        // Create the user
        const newUser = this.user({
            handle: handle.trim(),
            password: password,
            realName: realName || "",
            location: location || "",
            email: email || "",
            access: UserAccessLevel.normal
        })

        if (newUser.register(password)) {
            newUser.login(password)
            this.setCurrentUser(newUser)
            await this.popup("Welcome!", `Account created successfully!\n\nWelcome to the BBS, |11${newUser.handle}|07!`, { type: "success" })
            return newUser
        } else {
            await this.popup("Registration Failed", "An error occurred creating your account.\nPlease try again.", { type: "error" })
            return null
        }
    }

    /**
     * Create a frame for custom forms
     * @param title - Frame title
     * @param options - Frame options
     * @returns IQFrame instance
     */
    frame(title: string, options?: { width?: number; height?: number; color?: string }): IQFrame {
        const runtime = getGlobalRuntime()
        const width = options?.width || 50
        const height = options?.height || 12

        return runtime.frame({
            x: screen.centerX(width),
            y: screen.centerY(height),
            width: width,
            height: height,
            color: options?.color || "cyan",
            border: "double",
            title: title,
            titleColor: "bright white",
            shadow: true
        })
    }

    // =========================================================================
    // Artwork Methods
    // =========================================================================

    /**
     * Render artwork with simplified options
     * Eliminates the need to call getGlobalRuntime() directly
     * @param filename - Artwork filename (relative to basepath)
     * @param options - Rendering options
     */
    async art(filename: string, options?: BBSArtOptions): Promise<void> {
        const runtime = getGlobalRuntime()
        const art = runtime.artwork({ basepath: this.basepath })
        const encoding = options?.encoding ?? runtime.getOutput().getEncoding?.() ?? "cp437"

        await art.render({
            filename: filename,
            clearScreenBefore: options?.clearScreen ?? false,
            display: options?.display ?? "line",
            speed: options?.speed ?? 30,
            data: options?.data,
            center: options?.center ?? "auto",
            x: options?.x,
            y: options?.y,
            encoding
        })

        if (options?.pauseAfter) {
            if (typeof options.pauseAfter === "string") {
                await runtime.pause(options.pauseAfter)
            } else {
                await runtime.pause({ removePause: true })
            }
        }
    }

    // =========================================================================
    // Choice Popup Methods
    // =========================================================================

    /**
     * Display a choice popup menu (for login-style selection menus)
     * @param title - Title for the popup
     * @param choices - Array of choice options
     * @param options - Optional popup styling
     * @returns The key pressed (uppercase)
     */
    async choice(title: string, choices: BBSChoiceOption[], options?: { width?: number; color?: string }): Promise<string> {
        const runtime = getGlobalRuntime()
        const width = options?.width || 45

        // Calculate height based on choices (each choice is 1-2 lines)
        const hasDescriptions = choices.some((c) => c.description)
        const linesPerChoice = hasDescriptions ? 2 : 1
        const height = Math.max(8, choices.length * linesPerChoice + 7)

        const frame = runtime.frame({
            x: screen.centerX(width),
            y: screen.centerY(height),
            width: width,
            height: height,
            color: options?.color || "cyan",
            border: "double",
            title: title,
            titleColor: "bright white",
            shadow: true
        })

        frame.open()
        frame.blank()
        frame.center("|15Please select an option:|07")
        frame.blank()

        // Display choices
        for (const choice of choices) {
            frame.say(`    |11[|15${choice.key}|11]|07 ${choice.label}`)
            if (choice.description) {
                frame.say(`        |08${choice.description}|07`)
            }
        }

        frame.blank()
        frame.separator("\xC4", "bright black")
        frame.blank()

        const input = await frame.input("|14Your choice: |15", 1)
        frame.close()

        return (input || "").toUpperCase()
    }

    // =========================================================================
    // Data Display Methods
    // =========================================================================

    /**
     * Display a formatted data popup (for user lists, who's online, etc.)
     * @param title - Title for the popup
     * @param items - Array of data items to display
     * @param formatter - Function to format each item into a display string
     * @param options - Popup options including emptyMessage
     */
    async dataPopup<T>(title: string, items: T[], formatter: (item: T, index: number) => string, options?: BBSPopupOptions): Promise<void> {
        const width = options?.width || 50
        const emptyMessage = options?.emptyMessage || "No data available."

        if (!items || items.length === 0) {
            await this.popup(title, emptyMessage, options)
            return
        }

        // Format all items
        const formattedLines: string[] = []
        for (let i = 0; i < items.length; i++) {
            const formatted = formatter(items[i], i)
            formattedLines.push(...formatted.split("\n"))
        }

        // Build the message with header
        const header = `|15${items.length} item${items.length !== 1 ? "s" : ""}|07\n|08${"─".repeat(width - 6)}|07\n`
        const message = header + "\n" + formattedLines.join("\n")

        await this.popup(title, message, options)
    }

    /**
     * Show a snack (toast) notification in a corner of the terminal.
     * Use target 'current' (default), 'broadcast', { node: n }, or { user: handle }.
     */
    snack(message: string, options?: BBSSnackOptions): void {
        const corner = options?.corner ?? "bottom-right"
        const durationMs = options?.durationMs ?? 3000
        const target = options?.target ?? "current"
        const payload: SnackPayload & { target?: SnackTarget } = {
            message,
            corner,
            durationMs,
            target
        }

        if (target === "current") {
            const runtime = getGlobalRuntime()
            const output = runtime.getOutput()
            output.pushSnack?.({ message, corner, durationMs })
            runtime.processSnacks()
        } else {
            events.emit("snack:push", payload)
        }
    }

    /**
     * Show a data-driven snack (e.g. "3 new messages") in a corner.
     */
    dataSnack<T>(
        title: string,
        items: T[],
        formatter: (item: T, index: number) => string,
        options?: BBSSnackOptions
    ): void {
        if (!items || items.length === 0) {
            this.snack(`${title}: 0 items`, options)
            return
        }
        const line =
            items.length === 1
                ? formatter(items[0], 0)
                : `|15${items.length}|07 ${title}: ${items.length} items`
        const message = `|14${title}|07\n${line}`
        this.snack(message, options)
    }

    // =========================================================================
    // Bulletin/Text File Methods
    // =========================================================================

    /**
     * Display a text file or bulletin with optional pagination
     * @param filename - Text file to display (relative to basepath)
     * @param options - Display options
     */
    async bulletin(filename: string, options?: BBSBulletinOptions): Promise<void> {
        const runtime = getGlobalRuntime()
        const art = runtime.artwork({ basepath: this.basepath })

        if (options?.clearScreen) {
            this.cls()
        }

        await art.render({
            filename: filename,
            display: "instant",
            pageLength: options?.pageLength,
            autoPause: options?.pageLength !== undefined
        })

        if (options?.pauseAfter !== false) {
            await runtime.pause()
        }
    }
}

/**
 * Session info for online users display
 */
export interface SessionInfo {
    node: number
    connectedAt: Date
    idleSeconds: number
    terminalType: string
    location?: string
    username?: string
}

/**
 * Server info structure
 */
export interface ServerInfo {
    port: number
    host: string
    uptime: number
    sessions: SessionInfo[]
}

/**
 * Singleton BBS instance
 */
export const bbs = new BBS()

export type BBSType = typeof bbs
