/**
 * Menu System
 * @module core/menu
 * @summary Interactive command-driven menu system for BBS applications
 */

import { IQOutput } from './output'
import { ANSI } from './ansi'

export interface IMenuCommand {
    (): any
}

export interface IMenuCommands {
    [key: string]: IMenuCommand
}

export interface IQMenuOptions {
    name: string
    description?: string
    commands: IMenuCommands & { default?: IMenuCommand }
    data?: any
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
    x: number
    y: number
    text: string
}

export interface IQMenuPromptFunctions {
    command(cmdkey: Function): void
}

/**
 * IQMenu - Interactive menu system
 */
export class IQMenu {
    public name: string
    public description: string
    public commands: IMenuCommands
    public data: any
    private output: IQOutput
    private promptOptions: IQMenuPromptOptions | null = null
    
    constructor(options: IQMenuOptions, output: IQOutput) {
        this.name = options.name
        this.description = options.description || ''
        this.commands = options.commands
        this.data = options.data || {}
        this.output = output
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
     * Wait for user command input
     */
    private async waitForCommand(cmdkey: Function): Promise<void> {
        if (!this.promptOptions) {
            throw new Error('Prompt options not set. Call prompt() first.')
        }
        
        this.output.write(ANSI.gotoxy(this.promptOptions.x, this.promptOptions.y))
        this.output.write(this.promptOptions.text)
        
        const input = await this.output.readKey()
        const command = input.toUpperCase()
        
        cmdkey(command)
    }
    
    /**
     * Execute a command by key
     */
    executeCommand(key: string): any {
        const upperKey = key.toUpperCase()
        
        if (this.commands[upperKey]) {
            return this.commands[upperKey]()
        } else if (this.commands.default) {
            return this.commands.default()
        }
        
        return null
    }
    
    /**
     * Render the menu with a loop
     */
    async render(
        callback: (res: IQMenuLoopMessageResponse, cmdkey: Function, data?: any) => void,
        options?: IQMenuLoopOptions
    ): Promise<void> {
        const maxInterval = options?.maxInterval || Infinity
        const startTime = Date.now()
        
        let running = true
        
        const cmdkey = (key: string) => {
            const result = this.executeCommand(key)
            
            if (key === 'Q' || key === 'H') {
                running = false
            }
            
            return result
        }
        
        const response: IQMenuLoopMessageResponse = {
            data: options?.data || this.data
        }
        
        while (running) {
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
