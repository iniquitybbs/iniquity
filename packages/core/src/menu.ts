/**
 * Menu System
 * @module core/menu
 * @summary Interactive command-driven menu system for BBS applications
 */

import { IQOutput } from './output'
import { ANSI } from './ansi'

export interface IMenuCommand {
    (): any | Promise<any>
}

export interface IMenuCommands {
    [key: string]: IMenuCommand
}

export interface IQMenuArtOptions {
    filename: string
    mode?: 'line' | 'character' | '@-codes' | 'mci'
    speed?: number
    clearScreenBefore?: boolean
}

export interface IQMenuOptions {
    name: string
    description?: string
    commands?: IMenuCommands & { default?: IMenuCommand }
    data?: any
    art?: IQMenuArtOptions
    basepath?: string
    prompt?: string
    autoRenderItems?: boolean
    itemFormat?: string
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
    action?: () => any | Promise<any>
    submenu?: IQMenu
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
    public autoRenderItems: boolean
    public itemFormat: string
    public items: IQMenuItem[] = []
    private output: IQOutput
    private promptOptions: IQMenuPromptOptions | null = null
    private parent: IQMenu | null = null
    private running: boolean = true
    private artworkFn?: (options?: { basepath?: string }) => { render: (opts: any) => Promise<any> }
    
    constructor(options: IQMenuOptions, output: IQOutput, artworkFn?: (options?: { basepath?: string }) => { render: (opts: any) => Promise<any> }) {
        this.name = options.name
        this.description = options.description || ''
        this.commands = options.commands || {}
        this.data = options.data || {}
        this.art = options.art
        this.basepath = options.basepath
        this.promptText = options.prompt || `${options.name} » `
        this.autoRenderItems = options.autoRenderItems ?? true
        this.itemFormat = options.itemFormat || '|11[|15{key}|11] |07{label}'
        this.output = output
        this.artworkFn = artworkFn
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
        items.forEach(item => this.addItem(item))
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
     * Wait for user command input and return the key
     */
    async waitForKey(): Promise<string> {
        const input = await this.output.readKey()
        return input.toUpperCase()
    }
    
    /**
     * Wait for user command input
     */
    private async waitForCommand(cmdkey: Function): Promise<void> {
        if (!this.promptOptions) {
            throw new Error('Prompt options not set. Call prompt() first.')
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
    async show(): Promise<string> {
        this.running = true
        
        while (this.running) {
            // Clear screen
            this.output.write(ANSI.clearScreen())
            
            // Display artwork if specified
            if (this.art && this.artworkFn) {
                const artInstance = this.artworkFn({ basepath: this.basepath })
                await artInstance.render({
                    filename: this.art.filename,
                    mode: this.art.mode || 'line',
                    speed: this.art.speed || 30,
                    clearScreenBefore: this.art.clearScreenBefore
                })
            }
            
            // Display menu items if any
            if (this.items.length > 0 && this.autoRenderItems) {
                this.displayItems()
            }
            
            // Show prompt and get input (uses writeMCI for pipe code support)
            this.output.writeMCI(this.promptText)
            const key = await this.waitForKey()
            
            // Handle quit/back
            if (key === 'Q') {
                this.running = false
                return 'Q'
            }
            
            // Execute command
            const result = await this.executeCommand(key)
            
            // If command returns 'back' or 'quit', handle navigation
            if (result === 'back' || result === 'quit') {
                this.running = false
                return result
            }
        }
        
        return 'quit'
    }
    
    /**
     * Display menu items in a formatted list (uses writeMCI for pipe code support)
     */
    private displayItems(): void {
        this.output.writeMCI('\r\n')
        for (const item of this.items) {
            const line = this.itemFormat
                .replace('{key}', item.key)
                .replace('{label}', item.label)
            this.output.writeMCI(line + '\r\n')
        }
        this.output.writeMCI('\r\n')
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
        return 'back'
    }
    
    /**
     * Render the menu with a loop (legacy API)
     */
    async render(
        callback: (res: IQMenuLoopMessageResponse, cmdkey: Function, data?: any) => void,
        options?: IQMenuLoopOptions
    ): Promise<void> {
        const maxInterval = options?.maxInterval || Infinity
        const startTime = Date.now()
        
        this.running = true
        
        const cmdkey = async (key: string) => {
            const result = await this.executeCommand(key)
            
            if (key === 'Q' || key === 'H') {
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
                await new Promise(resolve => setTimeout(resolve, 100))
            } catch (err) {
                console.error('Menu render error:', err)
                break
            }
        }
    }
}
