/**
 * Menu System
 * @module core/menu
 * @summary Interactive command-driven menu system for BBS applications
 */

import { IQOutput } from "./output"
import { ANSI } from "./ansi"
import { events } from "./events"
import { Measure } from "./decorators-runtime"
import { CTerm } from "./cterm"
import { visibleLength } from "./string-utils"

/** Sentinel for mouse events from Session (format \u0000MOUSE:x:y, 1-based column and row) */
const MOUSE_EVENT_PREFIX = "\u0000MOUSE:"

export interface IMenuCommand {
    (): any | Promise<any>
}

export interface IMenuCommands {
    [key: string]: IMenuCommand
}

export interface IQMenuArtOptions {
    filename: string
    mode?: "line" | "character" | "@-codes" | "mci"
    speed?: number
    clearScreenBefore?: boolean
    /**
     * Centering mode for artwork positioning based on screen resolution.
     * - 'auto': Center if artwork is smaller than screen (default)
     * - 'horizontal': Center horizontally only
     * - 'vertical': Center vertically only
     * - 'both': Always center both axes
     * - 'none': No centering, render at 1,1 (legacy behavior)
     */
    center?: "auto" | "horizontal" | "vertical" | "both" | "none"
    /** Explicit X position (1-indexed). Overrides centering. */
    x?: number
    /** Explicit Y position (1-indexed). Overrides centering. */
    y?: number
}

export interface IQMenuOptions {
    name: string
    description?: string
    commands?: IMenuCommands & { default?: IMenuCommand }
    data?: any
    art?: IQMenuArtOptions
    basepath?: string
    prompt?: string
    promptX?: number
    promptY?: number
    itemsX?: number
    itemsY?: number
    autoRenderItems?: boolean
    itemFormat?: string
    /** Enable keyboard hotkeys for menu items (default true) */
    hotkeys?: boolean
    /** Enable SGR mouse for clicking items (default true) */
    mouse?: boolean
    /** MCI string for "pressed" look when an item is clicked (e.g. "|15|16"). If omitted, reverse video is used. */
    mouseHighlightFormat?: string
}

export interface IQMenuLoopOptions {
    maxInterval?: number
    data?: any
}

export interface IQMenuLoopMessageResponse {
    command?: string
    data?: any
}

export interface IQMenuPromptOptions {
    x?: number
    y?: number
    text?: string
}

export interface IQMenuPromptFunctions {
    command(cmdkey: Function): void
}

/**
 * Menu item for display
 */
export interface IQMenuItem {
    key: string
    label: string
    x?: number
    y?: number
    action?: () => any | Promise<any>
    submenu?: IQMenu
    /** Bounds for mouse hit-testing (1-based x, y, endX); set by displayItems() when positioned */
    bounds?: { x: number; y: number; endX: number }
}

/**
 * IQMenu - Interactive menu system
 */
export class IQMenu {
    public name: string
    public description: string
    public commands: IMenuCommands
    public data: any
    public art?: IQMenuArtOptions
    public basepath?: string
    public promptText: string
    public promptX?: number
    public promptY?: number
    public itemsX?: number
    public itemsY?: number
    public autoRenderItems: boolean
    public itemFormat: string
    public items: IQMenuItem[] = []
    public hotkeys: boolean
    public mouse: boolean
    public mouseHighlightFormat: string | undefined
    private output: IQOutput
    private promptOptions: IQMenuPromptOptions | null = null
    private parent: IQMenu | null = null
    private running: boolean = true
    private artworkFn?: (options?: { basepath?: string }) => { render: (opts: any) => Promise<any> }
    private getRuntime?: () => {
        processSnacks(): void
        setPromptPosition(x: number, y: number): void
        getLastRenderedMenuArtKey(): string | null
        setLastRenderedMenuArtKey(key: string): void
    }

    constructor(
        options: IQMenuOptions,
        output: IQOutput,
        artworkFn?: (options?: { basepath?: string }) => { render: (opts: any) => Promise<any> },
        getRuntime?: () => {
            processSnacks(): void
            setPromptPosition(x: number, y: number): void
            getLastRenderedMenuArtKey(): string | null
            setLastRenderedMenuArtKey(key: string): void
        }
    ) {
        this.name = options.name
        this.description = options.description || ""
        this.commands = options.commands || {}
        this.data = options.data || {}
        this.art = options.art
        this.basepath = options.basepath
        this.promptText = options.prompt || `${options.name} » `
        this.promptX = options.promptX
        this.promptY = options.promptY
        this.itemsX = options.itemsX
        this.itemsY = options.itemsY
        this.autoRenderItems = options.autoRenderItems ?? true
        this.itemFormat = options.itemFormat || "|11[|15{key}|11] |07{label}"
        this.hotkeys = options.hotkeys ?? true
        this.mouse = options.mouse ?? true
        this.mouseHighlightFormat = options.mouseHighlightFormat
        this.output = output
        this.artworkFn = artworkFn
        this.getRuntime = getRuntime
    }

    /**
     * Add a menu item
     */
    addItem(item: IQMenuItem): IQMenu {
        this.items.push(item)
        if (item.action) {
            this.commands[item.key.toUpperCase()] = item.action
        }
        if (item.submenu) {
            item.submenu.setParent(this)
            this.commands[item.key.toUpperCase()] = async () => {
                await item.submenu!.show()
            }
        }
        return this
    }

    /**
     * Add multiple menu items
     */
    addItems(items: IQMenuItem[]): IQMenu {
        items.forEach((item) => this.addItem(item))
        return this
    }

    /**
     * Set parent menu (for back navigation)
     */
    setParent(parent: IQMenu): IQMenu {
        this.parent = parent
        return this
    }

    /**
     * Get parent menu
     */
    getParent(): IQMenu | null {
        return this.parent
    }

    /**
     * Set up a prompt for user input
     */
    prompt(options: IQMenuPromptOptions): IQMenuPromptFunctions {
        this.promptOptions = options

        return {
            command: (cmdkey: Function) => {
                this.waitForCommand(cmdkey)
            }
        }
    }

    /**
     * Resolve (cx, cy) 1-based to a menu item key, or null if no hit.
     */
    private resolveMouseToKey(cx: number, cy: number): string | null {
        for (const item of this.items) {
            const b = item.bounds
            if (b && b.y === cy && cx >= b.x && cx <= b.endX) {
                return item.key.toUpperCase()
            }
        }
        return null
    }

    /**
     * Parse \u0000MOUSE:x:y string to item key or null.
     */
    private parseMouseInput(input: string): string | null {
        if (!input.startsWith(MOUSE_EVENT_PREFIX)) return null
        const rest = input.slice(MOUSE_EVENT_PREFIX.length)
        const parts = rest.split(":")
        if (parts.length < 2) return null
        const cx = parseInt(parts[0], 10)
        const cy = parseInt(parts[1], 10)
        if (isNaN(cx) || isNaN(cy)) return null
        return this.resolveMouseToKey(cx, cy)
    }

    /**
     * Draw click highlight on an item line, then restore after a short delay.
     */
    private async drawClickHighlight(item: IQMenuItem): Promise<void> {
        const b = item.bounds
        if (!b) return
        const line = this.itemFormat.replace("{key}", item.key).replace("{label}", item.label)
        const processed = this.output.processMCI(line)
        const highlightStart = this.mouseHighlightFormat
            ? this.output.processMCI(this.mouseHighlightFormat)
            : "\x1b[7m"
        const reset = "\x1b[0m"

        this.output.write(ANSI.gotoxy(b.x, b.y))
        this.output.write(highlightStart + processed + reset)
        await new Promise((r) => setTimeout(r, 100))
        this.output.write(ANSI.gotoxy(b.x, b.y))
        this.output.write(processed + reset)
    }

    /**
     * Wait for user command input and return the key
     * Uses non-blocking input with event processing loop
     */
    async waitForKey(): Promise<string> {
        const immediateInput = this.output.readKeyNonBlocking()
        if (immediateInput) {
            if (this.mouse && immediateInput.startsWith(MOUSE_EVENT_PREFIX)) {
                const key = this.parseMouseInput(immediateInput)
                if (key !== null) {
                    const item = this.items.find((i) => i.key.toUpperCase() === key)
                    if (item) await this.drawClickHighlight(item)
                    return key
                }
            }
            if (this.hotkeys || immediateInput.toUpperCase() === "Q") {
                return immediateInput.toUpperCase()
            }
            // hotkeys false and not Q: ignore, fall through to loop
        }

        while (true) {
            await events.processQueue()
            this.getRuntime?.().processSnacks()
            const input = this.output.readKeyNonBlocking()
            if (input) {
                const key = await this.handleInput(input)
                if (key !== null) return key
                continue
            }
            if (this.output.hasInput()) {
                const k = this.output.readKeyNonBlocking()
                if (k) {
                    const key = await this.handleInput(k)
                    if (key !== null) return key
                }
            }
            await new Promise((resolve) => setTimeout(resolve, 10))
        }
    }

    private async handleInput(input: string): Promise<string | null> {
        if (this.mouse && input.startsWith(MOUSE_EVENT_PREFIX)) {
            const key = this.parseMouseInput(input)
            if (key !== null) {
                const item = this.items.find((i) => i.key.toUpperCase() === key)
                if (item) await this.drawClickHighlight(item)
                return key
            }
            return null
        }
        if (!this.hotkeys && input.toUpperCase() !== "Q") return null
        return input.toUpperCase()
    }

    private normalizeInput(input: string): string {
        if (this.mouse && input.startsWith(MOUSE_EVENT_PREFIX)) {
            const key = this.parseMouseInput(input)
            if (key !== null) return key
        }
        if (!this.hotkeys && input.toUpperCase() !== "Q") return input
        return input.toUpperCase()
    }

    /**
     * Wait for user command input
     */
    private async waitForCommand(cmdkey: Function): Promise<void> {
        if (!this.promptOptions) {
            throw new Error("Prompt options not set. Call prompt() first.")
        }

        if (this.promptOptions.x && this.promptOptions.y) {
            this.output.write(ANSI.gotoxy(this.promptOptions.x, this.promptOptions.y))
        }
        if (this.promptOptions.text) {
            this.output.writeMCI(this.promptOptions.text)
        }

        const input = await this.output.readKey()
        const command = input.toUpperCase()

        cmdkey(command)
    }

    /**
     * Execute a command by key
     */
    @Measure()
    async executeCommand(key: string): Promise<any> {
        const upperKey = key.toUpperCase()

        if (this.commands[upperKey]) {
            return await this.commands[upperKey]()
        } else if (this.commands.default) {
            return await this.commands.default()
        }

        return null
    }

    /**
     * Display the menu and wait for input
     */
    @Measure()
    async show(): Promise<string> {
        this.running = true

        // Clear any pending input and partial escape sequences from previous operations
        if (typeof this.output.clearInputQueue === "function") {
            this.output.clearInputQueue()
        }
        while (this.output.hasInput()) {
            this.output.readKeyNonBlocking()
        }
        await new Promise((resolve) => setTimeout(resolve, 50))
        if (typeof this.output.clearInputQueue === "function") {
            this.output.clearInputQueue()
        }
        while (this.output.hasInput()) {
            this.output.readKeyNonBlocking()
        }

        if (this.mouse) {
            this.output.write(CTerm.mouseSgrModeSequence(true))
            this.output.write(CTerm.mouseTrackingSequence(true))
        }
        try {
            while (this.running) {
                // Re-enable mouse each iteration so it stays on after returning from a submenu
                // (submenu's finally turns it off when we Q/back)
                if (this.mouse) {
                    this.output.write(CTerm.mouseSgrModeSequence(true))
                    this.output.write(CTerm.mouseTrackingSequence(true))
                }

                const myArtKey = this.getArtKey()
                const contentBounds = this.getContentBounds()
                const sameArtAsLast =
                    myArtKey !== null &&
                    this.getRuntime?.().getLastRenderedMenuArtKey?.() === myArtKey &&
                    contentBounds !== null

                if (sameArtAsLast) {
                    // Same artwork: redraw it without clearing (re-output line/char by line so full ANSI is on screen)
                    if (this.art && this.artworkFn) {
                        const artInstance = this.artworkFn({ basepath: this.basepath })
                        await artInstance.render({
                            filename: this.art.filename,
                            mode: this.art.mode || "line",
                            speed: 0,
                            clearScreenBefore: false,
                            center: this.art.center,
                            x: this.art.x,
                            y: this.art.y
                        })
                    }
                    this.clearContentRows(this.getContentRows())
                } else {
                    // Full redraw: clear screen and optionally render artwork
                    this.output.write(ANSI.clearScreen())
                    if (this.art && this.artworkFn) {
                        const artInstance = this.artworkFn({ basepath: this.basepath })
                        await artInstance.render({
                            filename: this.art.filename,
                            mode: this.art.mode || "line",
                            speed: this.art.speed || 30,
                            clearScreenBefore: this.art.clearScreenBefore ?? true,
                            center: this.art.center,
                            x: this.art.x,
                            y: this.art.y
                        })
                        if (myArtKey !== null) this.getRuntime?.().setLastRenderedMenuArtKey?.(myArtKey)
                    }
                }

                // Display menu items if any
                if (this.items.length > 0 && this.autoRenderItems) {
                    this.displayItems()
                }

                // Position cursor for prompt if specified
                if (this.promptX !== undefined && this.promptY !== undefined) {
                    this.output.write(ANSI.gotoxy(this.promptX, this.promptY))
                    this.getRuntime?.().setPromptPosition?.(this.promptX, this.promptY)
                }

                // Show prompt and get input (uses writeMCI for pipe code support)
                this.output.writeMCI(this.promptText)
                const key = await this.waitForKey()

                // Handle quit/back
                if (key === "Q") {
                    this.running = false
                    return "Q"
                }

                // Execute command
                const result = await this.executeCommand(key)

                // If command returns 'back' or 'quit', handle navigation
                if (result === "back" || result === "quit") {
                    this.running = false
                    return result
                }
            }
            return "quit"
        } finally {
            if (this.mouse) {
                this.output.write(CTerm.mouseTrackingSequence(false))
                this.output.write(CTerm.mouseSgrModeSequence(false))
            }
        }
    }

    /**
     * Build art key for same-art skip comparison (filename|center|x|y).
     */
    private getArtKey(): string | null {
        if (!this.art) return null
        const a = this.art
        return `${a.filename}|${a.center ?? ""}|${a.x ?? ""}|${a.y ?? ""}`
    }

    /**
     * Bounding box (1-based Y) for menu items + prompt. Used to clear only that region when skipping art redraw.
     * Returns the distinct sorted list of row numbers we draw on, so we don't clear rows that might be part of the art.
     */
    private getContentBounds(): { contentTopY: number; contentBottomY: number } | null {
        const ys: number[] = []
        this.items.forEach((item, index) => {
            if (item.y !== undefined) ys.push(item.y!)
            else if (this.itemsY !== undefined) ys.push(this.itemsY + index)
        })
        if (this.promptY !== undefined) ys.push(this.promptY)
        if (ys.length === 0) return null
        return { contentTopY: Math.min(...ys), contentBottomY: Math.max(...ys) }
    }

    /**
     * Sorted distinct row numbers that have menu items or prompt. Clears only these rows when skipping art.
     */
    private getContentRows(): number[] {
        const set = new Set<number>()
        this.items.forEach((item, index) => {
            if (item.y !== undefined) set.add(item.y!)
            else if (this.itemsY !== undefined) set.add(this.itemsY! + index)
        })
        if (this.promptY !== undefined) set.add(this.promptY)
        return Array.from(set).sort((a, b) => a - b)
    }

    /**
     * Clear full-width lines for the given row numbers (1-based). Used when skipping art to avoid clearing artwork.
     */
    private clearContentRows(rows: number[]): void {
        const w = this.output.getWidth()
        for (const y of rows) {
            this.output.write(ANSI.gotoxy(1, y))
            this.output.write(" ".repeat(w))
        }
    }

    /**
     * Display menu items in a formatted list (uses writeMCI for pipe code support)
     * Items can have individual x,y positions, or use itemsX/itemsY as starting point
     * Computes and stores bounds (x, y, endX) per item for mouse hit-testing when positioned.
     */
    private displayItems(): void {
        // If no global positioning and no per-item positioning, add a newline
        if (this.itemsX === undefined && this.itemsY === undefined && !this.items.some((i) => i.x !== undefined)) {
            this.output.writeMCI("\r\n")
        }

        let currentY = this.itemsY || 0
        for (const item of this.items) {
            const line = this.itemFormat.replace("{key}", item.key).replace("{label}", item.label)
            const processed = this.output.processMCI(line)
            const len = visibleLength(processed)

            // Per-item positioning takes priority
            if (item.x !== undefined && item.y !== undefined) {
                this.output.write(ANSI.gotoxy(item.x, item.y))
                item.bounds = { x: item.x, y: item.y, endX: item.x + len - 1 }
            }
            // Otherwise use global itemsX/itemsY with auto-incrementing Y
            else if (this.itemsX !== undefined && this.itemsY !== undefined) {
                this.output.write(ANSI.gotoxy(this.itemsX, currentY))
                item.bounds = { x: this.itemsX!, y: currentY, endX: this.itemsX! + len - 1 }
                currentY++
            } else {
                item.bounds = undefined
            }

            this.output.writeMCI(line + "\r\n")
        }

        // Only add trailing newline if not using positioning
        if (this.itemsX === undefined && this.itemsY === undefined && !this.items.some((i) => i.x !== undefined)) {
            this.output.writeMCI("\r\n")
        }
    }

    /**
     * Stop the menu loop
     */
    stop(): void {
        this.running = false
    }

    /**
     * Go back to parent menu
     */
    back(): string {
        this.running = false
        return "back"
    }

    /**
     * Render the menu with a loop (legacy API)
     */
    async render(callback: (res: IQMenuLoopMessageResponse, cmdkey: Function, data?: any) => void, options?: IQMenuLoopOptions): Promise<void> {
        const maxInterval = options?.maxInterval || Infinity
        const startTime = Date.now()

        this.running = true

        const cmdkey = async (key: string) => {
            const result = await this.executeCommand(key)

            if (key === "Q" || key === "H") {
                this.running = false
            }

            return result
        }

        const response: IQMenuLoopMessageResponse = {
            data: options?.data || this.data
        }

        while (this.running) {
            if (Date.now() - startTime > maxInterval) {
                break
            }

            try {
                callback(response, cmdkey, options?.data || this.data)
                await new Promise((resolve) => setTimeout(resolve, 100))
            } catch (err) {
                console.error("Menu render error:", err)
                break
            }
        }
    }
}
