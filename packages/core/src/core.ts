/**
 * Iniquity Core Runtime
 * @module core
 * @summary IQ base class and Runtime for BBS applications
 */

import { IQOutput } from './output'
import { ANSI } from './ansi'
import { IQMenu, IQMenuOptions } from './menu'
import { IQFrame, IQFrameOptions } from './frame'
import { IQReactor, IQReactorOptions } from './reactor'
import { IQUser, IUserOptions } from './user'
import { IQUserList } from './user'
import { IQGroup, IGroupOptions } from './group'
import { IQGroupList } from './group'
import { IQNetwork } from './network'
import { IQText } from './text'
import { IQConfig, getConfig } from './config'
import { Artwork, IQArtworkOptions } from './artwork'
import { MCIProcessor, MCIContext } from './mci'
/**
 * Alert options
 */
export interface IAlertOptions {
    title?: string
    type?: 'info' | 'warning' | 'error' | 'success'
    timeout?: number
    x?: number
    y?: number
    width?: number
    border?: 'single' | 'double' | 'ascii' | 'none'
}

/**
 * Terminal info interface
 */
export interface IQTermInfoObject {
    x: number
    y: number
}

/**
 * Chainable functions returned by say/print
 */
export interface IBBSSayFunctions {
    pause(optionsOrPrompt?: IQPauseOptions | string): Promise<string>
    wait(ms?: number): Promise<void>
    gotoxy(x: number, y: number): void
}

export interface IBBSPrintFunctions {
    pause(optionsOrPrompt?: IQPauseOptions | string): Promise<string>
    wait(ms?: number): Promise<void>
}

export interface IQPauseOptions {
    colorReset?: boolean
    newlines?: number
    center?: boolean
    prompt?: string
    removePause?: boolean
    abortKeys?: string[]
    continueKey?: string
    mci?: boolean | 'pipe' | 'at-codes' | 'all'
}

/**
 * Options for say() function
 */
export interface IQSayOptions {
    mci?: boolean | 'pipe' | 'at-codes' | 'all'
    newline?: boolean
    center?: boolean
}

export interface IQWaitOptions {
    ms?: number
}

/**
 * Cursor control options
 */
export interface IQCursorOptions {
    // Reserved for future options
}

export interface IQCursorChainableMethods {
    up(n?: number): IQCursorChainableMethods
    down(n?: number): IQCursorChainableMethods
    left(n?: number): IQCursorChainableMethods
    right(n?: number): IQCursorChainableMethods
    hide(): IQCursorChainableMethods
    show(): IQCursorChainableMethods
}

/**
 * Cursor control implementation
 */
class CursorControl implements IQCursorChainableMethods {
    private output: IQOutput

    constructor(output: IQOutput) {
        this.output = output
    }

    up(n: number = 1): IQCursorChainableMethods {
        this.output.write(ANSI.cursor.up(n))
        return this
    }

    down(n: number = 1): IQCursorChainableMethods {
        this.output.write(ANSI.cursor.down(n))
        return this
    }

    left(n: number = 1): IQCursorChainableMethods {
        this.output.write(ANSI.cursor.left(n))
        return this
    }

    right(n: number = 1): IQCursorChainableMethods {
        this.output.write(ANSI.cursor.right(n))
        return this
    }

    hide(): IQCursorChainableMethods {
        this.output.write(ANSI.cursor.hide())
        return this
    }

    show(): IQCursorChainableMethods {
        this.output.write(ANSI.cursor.show())
        return this
    }
}

/**
 * IQ Base Class - Foundation for all BBS modules
 */
/**
 * Runtime context for BBS execution
 * Primary coordinator for all runtime components
 */
export class Runtime {
    protected output: IQOutput
    protected basepath: string = ''
    protected programDirectory: string = ''
    public data: IQReactorOptions = IQReactor({})

    constructor(output: IQOutput) {
        this.output = output
    }

    /**
     * Get current output
     */
    getOutput(): IQOutput {
        return this.output
    }

    /**
     * Get terminal dimensions
     */
    get terminfo(): IQTermInfoObject {
        return {
            x: this.output.getWidth(),
            y: this.output.getHeight()
        }
    }

    /**
     * Get the MCI processor
     */
    get mci(): MCIProcessor {
        return this.output.getMCIProcessor()
    }

    /**
     * Process MCI codes in text
     */
    processMCI(text: string): string {
        return this.output.processMCI(text)
    }

    /**
     * Set MCI context
     */
    setMCIContext(ctx: Partial<MCIContext>): void {
        this.output.setMCIContext(ctx)
    }

    /**
     * Set custom MCI variable
     */
    setMCIVar(key: string, value: any): void {
        this.mci.setCustom(key, value)
    }

    /**
     * Get custom MCI variable
     */
    getMCIVar(key: string): any {
        return this.mci.getCustom(key)
    }

    /**
     * Process pending MCI actions
     */
    async processPendingActions(): Promise<boolean> {
        const actions = this.output.getPendingActions()
        
        for (const action of actions) {
            switch (action.type) {
                case 'ansi':
                    this.output.write(action.sequence)
                    break
                case 'pause':
                case 'pause_message':
                    await this.pause()
                    if (this.output.isPauseAborted()) {
                        return false
                    }
                    break
                case 'delay':
                    await this.wait(action.ms)
                    break
                case 'abort':
                    return false
                case 'pause_off':
                    this.output.setPauseEnabled(false)
                    break
                case 'pause_on':
                    this.output.setPauseEnabled(true)
                    break
                case 'pause_reset':
                    this.output.resetLineCount()
                    break
                case 'noop':
                    break
            }
        }
        
        return true
    }

    /**
     * Display text to the user
     */
    say(text: string | any, options?: IQSayOptions): IBBSSayFunctions {
        const output = typeof text === 'string' ? text : JSON.stringify(text)
        const opts = { mci: true, newline: true, center: false, ...options }
        
        let finalText = output
        
        if (opts.newline) {
            finalText = output + '\r\n'
        }
        
        if (opts.mci) {
            this.output.writeMCI(finalText)
        } else {
            this.output.write(finalText)
        }
        
        const lines = output.split('\n')
        this.output.incrementLineCount(lines.length)

        return this.createChainableFunctions()
    }

    /**
     * Display raw text without MCI processing
     */
    sayRaw(text: string | any): IBBSSayFunctions {
        return this.say(text, { mci: false })
    }

    /**
     * Print text with automatic pause at page length
     */
    async print(text: string | any, pageLength?: number): Promise<IBBSPrintFunctions> {
        const outputText = typeof text === 'string' ? text : JSON.stringify(text)
        const lines = outputText.split('\n')
        const effectivePageLength = pageLength ?? (this.output.getHeight() - 1)
        
        for (const line of lines) {
            if (this.output.getLineCount() >= effectivePageLength) {
                await this.pause()
                
                if (this.output.isPauseAborted()) {
                    break
                }
            }
            
            this.output.write(line + '\r\n')
            this.output.incrementLineCount(1)
        }
        
        return {
            pause: async (optionsOrPrompt?: IQPauseOptions | string) => {
                return await this.pause(optionsOrPrompt)
            },
            wait: async (ms: number = 100) => {
                await this.wait(ms)
            }
        }
    }

    /**
     * Print text with MCI processing
     */
    async printMCI(text: string, pageLength?: number): Promise<IBBSPrintFunctions> {
        const processed = this.processMCI(text)
        return await this.print(processed, pageLength)
    }

    /**
     * Ask the user a question and return their input
     */
    async ask(question: string): Promise<string> {
        this.output.writeMCI(question + ' ')
        return await this.output.readLine()
    }

    /**
     * Display pause prompt and wait for key
     */
    async pause(optionsOrPrompt?: IQPauseOptions | string): Promise<string> {
        let options: IQPauseOptions | undefined
        if (typeof optionsOrPrompt === 'string') {
            options = { prompt: optionsOrPrompt }
        } else {
            options = optionsOrPrompt
        }

        if (!this.output.isPauseEnabled()) {
            return ''
        }

        if (options?.colorReset) {
            this.output.write(ANSI.reset())
        }
        if (options?.newlines) {
            for (let i = 0; i < options.newlines; i++) {
                this.output.write('\r\n')
            }
        }
        
        const prompt = options?.prompt ?? 'Press any key to continue...'
        const promptLength = prompt.replace(/\x1b\[[0-9;]*m/g, '').replace(/\|[0-9]{2}/g, '').length
        
        const mciEnabled = options?.mci !== false
        if (mciEnabled) {
            this.output.writeMCI(prompt)
        } else {
            this.output.write(prompt)
        }
        
        const key = await this.output.waitKey()
        const upperKey = key.toUpperCase()
        
        const abortKeys = options?.abortKeys ?? ['Q', 'S', 'N', '\x1b']
        if (abortKeys.includes(upperKey) || abortKeys.includes(key)) {
            this.output.setPauseAborted(true)
        }
        
        const continueKey = options?.continueKey ?? 'C'
        if (upperKey === continueKey) {
            this.output.setPauseEnabled(false)
        }
        
        if (options?.removePause) {
            this.output.write('\r' + ' '.repeat(promptLength) + '\r')
        } else {
            this.output.write('\r\n')
        }
        
        this.output.resetLineCount()
        
        return key
    }

    /**
     * Wait for specified milliseconds
     */
    async wait(ms: number = 100): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    /**
     * Move cursor to position
     */
    gotoxy(x: number, y: number): void {
        this.output.write(ANSI.gotoxy(x, y))
    }

    /**
     * Disconnect the user
     */
    disconnect(): void {
        this.output.close()
    }

    /**
     * Create a menu
     */
    menu(options: IQMenuOptions): IQMenu {
        return new IQMenu(options, this.output, (opts) => this.artwork(opts))
    }

    /**
     * Create a frame
     */
    frame(options: IQFrameOptions): IQFrame {
        return new IQFrame(options, this.output)
    }

    /**
     * Create artwork instance
     */
    artwork(options?: IQArtworkOptions): Artwork {
        const basepath = options?.basepath || this.basepath || '/dist/assets'
        return new Artwork(basepath, this.output, this.programDirectory)
    }

    /**
     * Get cursor control
     */
    cursor(options?: IQCursorOptions): IQCursorChainableMethods {
        return new CursorControl(this.output)
    }

    /**
     * Create or load a user
     */
    user(options: IUserOptions): IQUser {
        return new IQUser(options)
    }

    /**
     * Get user list utilities
     */
    users(): IQUserList {
        return new IQUserList()
    }

    /**
     * Create or load a group
     */
    group(options: IGroupOptions | string): IQGroup {
        return new IQGroup(options)
    }

    /**
     * Get group list utilities
     */
    groups(): IQGroupList {
        return new IQGroupList()
    }

    /**
     * Get network utilities
     */
    network(): IQNetwork {
        return new IQNetwork()
    }

    /**
     * Create text manipulation instance
     */
    text(content: string = ''): IQText {
        return new IQText(content, this.output.getWidth())
    }

    /**
     * Get configuration
     */
    config(): IQConfig {
        return getConfig()
    }

    /**
     * Display an alert box
     */
    async alert(message: string, options?: IAlertOptions): Promise<void> {
        const {
            title,
            type = 'info',
            timeout,
            x,
            y,
            width = 40,
            border = 'double'
        } = options || {}

        const colors: Record<string, { border: string; text: string }> = {
            info: { border: 'cyan', text: 'white' },
            warning: { border: 'yellow', text: 'bright yellow' },
            error: { border: 'red', text: 'bright red' },
            success: { border: 'green', text: 'bright green' }
        }
        const color = colors[type] || colors.info

        const text = new IQText(message, width - 4)
        text.wrap({ width: width - 4 })
        text.box({
            width,
            border,
            borderColor: color.border,
            title: title || type.charAt(0).toUpperCase() + type.slice(1),
            titleAlign: 'center'
        })

        const posX = x ?? Math.floor((this.output.getWidth() - width) / 2)
        const posY = y ?? Math.floor(this.output.getHeight() / 3)

        this.output.write(ANSI.cursor.save())
        this.output.write(ANSI.gotoxy(posX, posY))
        
        const lines = text.toString().split('\r\n')
        for (let i = 0; i < lines.length; i++) {
            this.output.write(ANSI.gotoxy(posX, posY + i))
            this.output.write(lines[i])
        }

        if (timeout) {
            await this.wait(timeout)
        } else {
            await this.pause({ removePause: true })
        }

        this.output.write(ANSI.cursor.restore())
    }

    /**
     * Set program directory for asset resolution
     */
    setProgramDirectory(dir: string): void {
        this.programDirectory = dir
    }

    /**
     * Get program directory
     */
    getProgramDirectory(): string {
        return this.programDirectory
    }

    /**
     * Check if pause was aborted by user
     */
    isPauseAborted(): boolean {
        return this.output.isPauseAborted()
    }

    /**
     * Reset pause aborted state
     */
    resetPauseAborted(): void {
        this.output.setPauseAborted(false)
    }

    /**
     * Enable pause
     */
    enablePause(): void {
        this.output.setPauseEnabled(true)
    }

    /**
     * Disable pause
     */
    disablePause(): void {
        this.output.setPauseEnabled(false)
    }

    /**
     * Create chainable functions for say/print
     */
    private createChainableFunctions(): IBBSSayFunctions {
        return {
            pause: async (optionsOrPrompt?: IQPauseOptions | string) => {
                return await this.pause(optionsOrPrompt)
            },
            wait: async (ms: number = 100) => {
                await this.wait(ms)
            },
            gotoxy: (x: number, y: number) => {
                this.gotoxy(x, y)
            }
        }
    }
}

/**
 * Global runtime instance (set by executor)
 */
let globalRuntime: Runtime | null = null

export function setGlobalRuntime(runtime: Runtime) {
    globalRuntime = runtime
}

export function getGlobalRuntime(): Runtime {
    if (!globalRuntime) {
        throw new Error('Runtime not initialized')
    }
    return globalRuntime
}

// Re-export Artwork for convenience
export { Artwork } from './artwork'

