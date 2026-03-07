/**
 * Iniquity Core Runtime
 * @module core
 * @summary Complete BBS runtime with IQ base class, menus, frames, and reactive data
 */

import { IQOutput, ControlCodeAction } from './output'
import { ANSI } from './ansi'
import { IQMenu, IQMenuOptions, IQMenuLoopOptions, IQMenuLoopMessageResponse, IQMenuPromptOptions } from './menu'
import { IQFrame, IQFrameOptions, IQFrameColorOptions } from './frame'
import { IQReactor, IQReactorOptions } from './reactor'
import { MCIProcessor, MCIContext, MCIProcessorOptions } from './mci'
import { IQUser, IUserOptions, UserAccessLevel, IUserData, IUserStats, IQUserList } from './user'
import { IQGroup, IGroupOptions, IGroupData, IGroupPermissions, IQGroupList } from './group'
import { IQNetwork, INetworkNode, IFidoAddress, INetworkMessage } from './network'
import { IQText, ITextWrapOptions, ITextBoxOptions, TextAlignment } from './text'
import { IQConfig, IBBSConfig, getConfig } from './config'
import * as fs from 'fs'
import * as path from 'path'

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
 * String extension utilities
 */
declare global {
    interface String {
        color(color: string): string
        newlines(count?: number): string
        center(width?: number): string
        left(width?: number): string
        right(width?: number): string
        gotoxy(x: number, y: number): string
        truncate(maxLength: number, suffix?: string): string
        pad(length: number, char?: string, side?: 'left' | 'right' | 'both'): string
        upper(): string
        lower(): string
        title(): string
        repeat(count: number): string
        stripAnsi(): string
        visibleLength(): number
    }
}

/**
 * Apply color to a string
 */
String.prototype.color = function (color: string): string {
    return ANSI.color(color) + this + ANSI.reset()
}

/**
 * Add newlines before the string
 */
String.prototype.newlines = function (count: number = 1): string {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += '\r\n'
    }
    return result + this
}

/**
 * Strip ANSI codes from string
 */
String.prototype.stripAnsi = function (): string {
    return (this as string).replace(/\x1b\[[0-9;]*m/g, '')
}

/**
 * Get visible length (excluding ANSI codes)
 */
String.prototype.visibleLength = function (): number {
    return this.stripAnsi().length
}

/**
 * Center text within width (uses runtime width if not specified)
 */
String.prototype.center = function (width?: number): string {
    const w = width ?? (globalRuntime ? globalRuntime.getOutput().getWidth() : 80)
    const visible = this.stripAnsi()
    if (visible.length >= w) return this as string
    
    const padding = Math.floor((w - visible.length) / 2)
    return ' '.repeat(padding) + this
}

/**
 * Left align text within width
 */
String.prototype.left = function (width?: number): string {
    const w = width ?? (globalRuntime ? globalRuntime.getOutput().getWidth() : 80)
    const visible = this.stripAnsi()
    if (visible.length >= w) return this as string
    
    return this + ' '.repeat(w - visible.length)
}

/**
 * Right align text within width
 */
String.prototype.right = function (width?: number): string {
    const w = width ?? (globalRuntime ? globalRuntime.getOutput().getWidth() : 80)
    const visible = this.stripAnsi()
    if (visible.length >= w) return this as string
    
    return ' '.repeat(w - visible.length) + this
}

/**
 * Position cursor before displaying text
 */
String.prototype.gotoxy = function (x: number, y: number): string {
    return ANSI.gotoxy(x, y) + this
}

/**
 * Truncate text to max length
 */
String.prototype.truncate = function (maxLength: number, suffix: string = '...'): string {
    const visible = this.stripAnsi()
    if (visible.length <= maxLength) return this as string
    
    return visible.substring(0, maxLength - suffix.length) + suffix
}

/**
 * Pad text to length
 */
String.prototype.pad = function (length: number, char: string = ' ', side: 'left' | 'right' | 'both' = 'right'): string {
    const visible = this.stripAnsi()
    if (visible.length >= length) return this as string
    
    const padding = length - visible.length
    
    if (side === 'left') {
        return char.repeat(padding) + this
    } else if (side === 'right') {
        return this + char.repeat(padding)
    } else {
        const leftPad = Math.floor(padding / 2)
        const rightPad = padding - leftPad
        return char.repeat(leftPad) + this + char.repeat(rightPad)
    }
}

/**
 * Convert to uppercase
 */
String.prototype.upper = function (): string {
    return (this as string).toUpperCase()
}

/**
 * Convert to lowercase
 */
String.prototype.lower = function (): string {
    return (this as string).toLowerCase()
}

/**
 * Convert to title case
 */
String.prototype.title = function (): string {
    return (this as string).replace(/\b\w/g, c => c.toUpperCase())
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
 * Artwork render options
 */
export interface IQArtworkOptions {
    filename?: string
    basepath?: string
}

export interface IQArtworkRenderOptions {
    filename?: string
    clearScreenBefore?: boolean
    mode?: 'line' | 'character' | '@-codes' | 'mci'
    speed?: number
    data?: any
    processMCI?: boolean
    autoPause?: boolean
    pageLength?: number
}

export interface IQArtworkRenderFunctions extends Promise<void> {
    pause(): Promise<string>
    gotoxy(x: number, y: number): void
    colorReset(): void
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
 * SAUCE metadata structure
 */
export interface SAUCEInfo {
    version: string
    title: string
    author: string
    group: string
    date: string
    fileSize: number
    dataType: number
    fileType: number
    tinfo1: number
    tinfo2: number
    tinfo3: number
    tinfo4: number
    comments: string[]
    flags: number
    fontName: string
    width: number
    hasIceColors: boolean
    letterSpacing: string
}

/**
 * Artwork class for rendering ANSI art files
 */
export class Artwork {
    private basepath: string
    private output: IQOutput
    private programDir: string
    private sauceInfo: SAUCEInfo | null = null
    private mciProcessor: MCIProcessor

    constructor(basepath: string, output: IQOutput, programDir: string = '') {
        this.basepath = basepath
        this.output = output
        this.programDir = programDir
        this.mciProcessor = output.getMCIProcessor()
    }

    /**
     * Get SAUCE metadata for the last rendered artwork
     */
    getSauceInfo(): SAUCEInfo | null {
        return this.sauceInfo
    }

    /**
     * Render ANSI artwork to the screen
     */
    render(options: IQArtworkRenderOptions): IQArtworkRenderFunctions {
        const filename = options.filename || ''
        const { 
            clearScreenBefore = false, 
            mode = 'line', 
            speed = 30, 
            data, 
            processMCI = false,
            autoPause = false,
            pageLength
        } = options

        const fullPath = this.resolvePath(filename)

        let content: string
        let rawBuffer: Buffer
        try {
            rawBuffer = fs.readFileSync(fullPath)
            content = rawBuffer.toString('latin1')
        } catch (err) {
            console.error(`Failed to read artwork file: ${fullPath}`, err)
            throw new Error(`Artwork file not found: ${fullPath}`)
        }

        this.sauceInfo = this.parseSauce(rawBuffer)
        content = this.stripSauce(content)

        if (this.sauceInfo?.fontName && this.output.supportsFonts?.()) {
            this.output.setSyncTermFont?.(this.sauceInfo.fontName)
        }

        if (mode === '@-codes' && data) {
            content = this.interpolateData(content, data)
        }

        if (processMCI || mode === 'mci') {
            if (data) {
                for (const [key, value] of Object.entries(data)) {
                    this.mciProcessor.setCustom(key, value)
                }
            }
            content = this.mciProcessor.process(content)
        }

        if (clearScreenBefore) {
            this.output.write(ANSI.clearScreen())
        }

        let renderPromise: Promise<void>
        if (mode === 'line') {
            renderPromise = this.renderLineByLine(content, speed, autoPause, pageLength)
        } else if (mode === 'character') {
            renderPromise = this.renderCharByChar(content, speed)
        } else {
            this.output.write(content)
            renderPromise = Promise.resolve()
        }

        const self = this
        
        // Create a thenable object that is both a Promise and has chainable methods
        const result = renderPromise.then(() => {}) as IQArtworkRenderFunctions
        
        // Add chainable methods
        result.pause = async () => {
            await renderPromise
            return await getGlobalRuntime().pause()
        }
        result.gotoxy = (x: number, y: number) => {
            self.output.write(ANSI.gotoxy(x, y))
        }
        result.colorReset = () => {
            self.output.write(ANSI.reset())
        }
        
        return result
    }

    private interpolateData(content: string, data: any): string {
        content = content.replace(/@([A-Za-z_][A-Za-z0-9_]*)@/g, (match, varName) => {
            const value = this.getNestedValue(data, varName)
            return value !== undefined ? String(value) : match
        })

        content = content.replace(/@\{([^}]+)\}/g, (match, expression) => {
            try {
                const value = this.evaluateExpression(expression, data)
                return value !== undefined ? String(value) : match
            } catch {
                return match
            }
        })

        return content
    }

    private getNestedValue(obj: any, path: string): any {
        const parts = path.split('.')
        let current = obj

        for (const part of parts) {
            if (current && typeof current === 'object' && part in current) {
                current = current[part]
            } else {
                return undefined
            }
        }

        return current
    }

    private evaluateExpression(expression: string, data: any): any {
        const parts = expression.split('.')
        return this.getNestedValue(data, parts.join('.'))
    }

    private resolvePath(filename: string): string {
        let resolvedBasepath = this.basepath

        if (resolvedBasepath.startsWith('/dist/')) {
            resolvedBasepath = resolvedBasepath.replace('/dist/', '')
        }

        if (path.isAbsolute(resolvedBasepath)) {
            return path.join(resolvedBasepath, filename)
        }

        if (this.programDir) {
            return path.join(this.programDir, resolvedBasepath, filename)
        }

        return path.join(process.cwd(), resolvedBasepath, filename)
    }

    private stripSauce(content: string): string {
        const sauceIndex = content.indexOf('SAUCE00')
        if (sauceIndex !== -1) {
            const eofIndex = sauceIndex > 0 ? sauceIndex - 1 : sauceIndex
            if (eofIndex >= 0 && content.charCodeAt(eofIndex) === 0x1A) {
                return content.substring(0, eofIndex)
            }
            return content.substring(0, sauceIndex)
        }
        return content
    }

    private parseSauce(buffer: Buffer): SAUCEInfo | null {
        const minSize = 128
        if (buffer.length < minSize) return null

        const sauceStart = buffer.length - 128
        const signature = buffer.toString('ascii', sauceStart, sauceStart + 7)
        
        if (signature !== 'SAUCE00') {
            const searchStart = Math.max(0, buffer.length - 256)
            const sauceIndex = buffer.indexOf('SAUCE00', searchStart, 'ascii')
            if (sauceIndex === -1) return null
        }

        const offset = buffer.length - 128

        const version = buffer.toString('ascii', offset + 5, offset + 7).trim()
        const title = buffer.toString('ascii', offset + 7, offset + 42).trim().replace(/\0/g, '')
        const author = buffer.toString('ascii', offset + 42, offset + 62).trim().replace(/\0/g, '')
        const group = buffer.toString('ascii', offset + 62, offset + 82).trim().replace(/\0/g, '')
        const date = buffer.toString('ascii', offset + 82, offset + 90).trim()
        
        const fileSize = buffer.readUInt32LE(offset + 90)
        const dataType = buffer.readUInt8(offset + 94)
        const fileType = buffer.readUInt8(offset + 95)
        
        const tinfo1 = buffer.readUInt16LE(offset + 96)
        const tinfo2 = buffer.readUInt16LE(offset + 98)
        const tinfo3 = buffer.readUInt16LE(offset + 100)
        const tinfo4 = buffer.readUInt16LE(offset + 102)
        
        const commentLines = buffer.readUInt8(offset + 104)
        const flags = buffer.readUInt8(offset + 105)
        
        const fontName = buffer.toString('ascii', offset + 106, offset + 128).trim().replace(/\0/g, '')

        const comments: string[] = []
        if (commentLines > 0) {
            const commentBlockSize = commentLines * 64 + 5
            const commentStart = buffer.length - 128 - commentBlockSize
            
            if (commentStart >= 0) {
                const commentId = buffer.toString('ascii', commentStart, commentStart + 5)
                if (commentId === 'COMNT') {
                    for (let i = 0; i < commentLines; i++) {
                        const lineStart = commentStart + 5 + (i * 64)
                        const line = buffer.toString('ascii', lineStart, lineStart + 64).trim().replace(/\0/g, '')
                        if (line) comments.push(line)
                    }
                }
            }
        }

        let width = tinfo1 || 80
        let hasIceColors = false
        let letterSpacing = 'none'

        if (dataType === 1) {
            hasIceColors = (flags & 0x01) === 0
            const spacingBits = (flags >> 1) & 0x03
            if (spacingBits === 0) letterSpacing = 'none'
            else if (spacingBits === 1) letterSpacing = '8px'
            else if (spacingBits === 2) letterSpacing = '9px'
        }

        return {
            version,
            title,
            author,
            group,
            date,
            fileSize,
            dataType,
            fileType,
            tinfo1,
            tinfo2,
            tinfo3,
            tinfo4,
            comments,
            flags,
            fontName,
            width,
            hasIceColors,
            letterSpacing
        }
    }

    private async renderLineByLine(
        content: string, 
        speed: number, 
        autoPause: boolean = false,
        pageLength?: number
    ): Promise<void> {
        const lines = content.split('\n')
        const effectivePageLength = pageLength ?? (this.output.getHeight() - 1)
        
        for (const line of lines) {
            if (line.includes('SAUCE00')) continue
            
            if (autoPause && this.output.getLineCount() >= effectivePageLength) {
                const runtime = getGlobalRuntime()
                await runtime.pause()
                
                if (this.output.isPauseAborted()) {
                    break
                }
            }
            
            this.output.write(line + '\r\n')
            this.output.incrementLineCount(1)
            
            if (speed > 0) {
                await new Promise(resolve => setTimeout(resolve, speed))
            }
        }
    }

    private async renderCharByChar(content: string, speed: number): Promise<void> {
        for (const char of content) {
            this.output.write(char)
            if (speed > 0) {
                await new Promise(resolve => setTimeout(resolve, speed))
            }
        }
    }
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
export class IQ {
    protected output: IQOutput
    protected basepath: string = ''
    protected programDirectory: string = ''
    public data: IQReactorOptions = IQReactor({})

    constructor(output?: IQOutput) {
        if (output) {
            this.output = output
        } else if (globalRuntime) {
            this.output = globalRuntime.getOutput()
        } else {
            throw new Error('No output available. IQ must be constructed with an output or within a runtime context.')
        }
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
     * Process pending MCI actions (pause, delay, abort)
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
     * By default, processes MCI/pipe codes (|XX format)
     * @param text - Text to display
     * @param options - Optional settings: mci (true by default), newline, center
     */
    say(text: string | any, options?: IQSayOptions): IBBSSayFunctions {
        const output = typeof text === 'string' ? text : JSON.stringify(text)
        const opts = { mci: true, newline: true, center: false, ...options }
        
        let finalText = output
        
        // Add newline if requested (default true)
        if (opts.newline) {
            finalText = output + '\r\n'
        }
        
        // Process MCI codes if enabled (default true)
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
     * @param text - Text to display
     */
    sayRaw(text: string | any): IBBSSayFunctions {
        return this.say(text, { mci: false })
    }

    /**
     * Display text with MCI processing (alias for say() which does MCI by default)
     * @deprecated Use say() instead - MCI processing is now the default
     */
    async sayMCI(text: string): Promise<IBBSSayFunctions> {
        return this.say(text, { mci: true })
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
                const key = await this.pause()
                
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
     * Print text with MCI processing and automatic pause at page length
     */
    async printMCI(text: string, pageLength?: number): Promise<IBBSPrintFunctions> {
        const processed = this.processMCI(text)
        return await this.print(processed, pageLength)
    }

    /**
     * Ask the user a question and return their input
     */
    async ask(question: string): Promise<string> {
        this.output.write(question + ' ')
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
        const promptLength = prompt.replace(/\x1b\[[0-9;]*m/g, '').length
        
        this.output.write(prompt)
        
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

        // Determine colors based on type
        const colors: Record<string, { border: string; text: string }> = {
            info: { border: 'cyan', text: 'white' },
            warning: { border: 'yellow', text: 'bright yellow' },
            error: { border: 'red', text: 'bright red' },
            success: { border: 'green', text: 'bright green' }
        }
        const color = colors[type] || colors.info

        // Create the alert box
        const text = new IQText(message, width - 4)
        text.wrap({ width: width - 4 })
        text.box({
            width,
            border,
            borderColor: color.border,
            title: title || type.charAt(0).toUpperCase() + type.slice(1),
            titleAlign: 'center'
        })

        // Position and display
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
 * Runtime context for BBS execution
 */
export class Runtime extends IQ {
    constructor(output: IQOutput) {
        super(output)
    }

    /**
     * Get current output
     */
    getOutput(): IQOutput {
        return this.output
    }

    /**
     * Async version of pause (same as pause, kept for compatibility)
     */
    async pauseAsync(options?: IQPauseOptions): Promise<string> {
        return await this.pause(options)
    }

    /**
     * Async version of wait
     */
    async waitAsync(ms: number = 100): Promise<void> {
        await this.wait(ms)
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

/**
 * Standalone functions that use global runtime
 */
export function say(text: string | any, options?: IQSayOptions): IBBSSayFunctions {
    return getGlobalRuntime().say(text, options)
}

export function sayRaw(text: string | any): IBBSSayFunctions {
    return getGlobalRuntime().sayRaw(text)
}

export async function ask(question: string): Promise<string> {
    return await getGlobalRuntime().ask(question)
}

export async function getKey(): Promise<string> {
    return await getGlobalRuntime().getOutput().readKey()
}

export async function pause(optionsOrPrompt?: IQPauseOptions | string): Promise<string> {
    return await getGlobalRuntime().pause(optionsOrPrompt)
}

export async function wait(ms: number = 100): Promise<void> {
    await getGlobalRuntime().wait(ms)
}

export async function print(text: string | any, pageLength?: number): Promise<IBBSPrintFunctions> {
    return await getGlobalRuntime().print(text, pageLength)
}

export async function printMCI(text: string, pageLength?: number): Promise<IBBSPrintFunctions> {
    return await getGlobalRuntime().printMCI(text, pageLength)
}

export function gotoxy(x: number, y: number): void {
    getGlobalRuntime().gotoxy(x, y)
}

export function cls(): void {
    getGlobalRuntime().getOutput().write(ANSI.clearScreen())
}

export function disconnect(): void {
    getGlobalRuntime().disconnect()
}

export function hangup(): void {
    getGlobalRuntime().disconnect()
}

export function cursor(options?: IQCursorOptions): IQCursorChainableMethods {
    return getGlobalRuntime().cursor(options)
}

export function menu(options: IQMenuOptions): IQMenu {
    return getGlobalRuntime().menu(options)
}

export function frame(options: IQFrameOptions): IQFrame {
    return getGlobalRuntime().frame(options)
}

export function artwork(options?: IQArtworkOptions): Artwork {
    return getGlobalRuntime().artwork(options)
}

export function user(options: IUserOptions): IQUser {
    return getGlobalRuntime().user(options)
}

export function users(): IQUserList {
    return getGlobalRuntime().users()
}

export function group(options: IGroupOptions | string): IQGroup {
    return getGlobalRuntime().group(options)
}

export function groups(): IQGroupList {
    return getGlobalRuntime().groups()
}

export function network(): IQNetwork {
    return getGlobalRuntime().network()
}

export function text(content: string = ''): IQText {
    return getGlobalRuntime().text(content)
}

export function config(): IQConfig {
    return getGlobalRuntime().config()
}

export async function alert(message: string, options?: IAlertOptions): Promise<void> {
    return await getGlobalRuntime().alert(message, options)
}

// Re-export types and classes
export { IQReactor, IQReactorOptions } from './reactor'
export { IQMenu, IQMenuOptions, IQMenuLoopOptions, IQMenuLoopMessageResponse } from './menu'
export { IQFrame, IQFrameOptions, IQFrameColorOptions } from './frame'
export { IQModule, IQModuleRuntime, IQModuleACLS } from './decorators'
export { MCIProcessor, MCIContext, MCIProcessorOptions } from './mci'
export { IQOutput, ControlCodeAction } from './output'

// Re-export user system
export { 
    IQUser, 
    IUserOptions, 
    UserAccessLevel, 
    IUserData, 
    IUserStats, 
    IQUserList,
    IUserDatabase,
    JSONUserDatabase,
    setUserDatabase,
    getUserDatabase
} from './user'

// Re-export group system
export {
    IQGroup,
    IGroupOptions,
    IGroupData,
    IGroupPermissions,
    IQGroupList,
    IGroupDatabase,
    JSONGroupDatabase,
    setGroupDatabase,
    getGroupDatabase,
    DEFAULT_PERMISSIONS
} from './group'

// Re-export network system
export {
    IQNetwork,
    INetworkNode,
    IFidoAddress,
    INetworkMessage,
    INetworkConnectionOptions,
    getNetwork,
    setNetwork
} from './network'

// Re-export text utilities
export {
    IQText,
    ITextWrapOptions,
    ITextBoxOptions,
    TextAlignment
} from './text'

// Re-export configuration
export {
    IQConfig,
    IBBSConfig,
    IServerConfig,
    IPathsConfig,
    IDisplayConfig,
    ISecurityConfig,
    INetworkConfig,
    ILoggingConfig,
    DEFAULT_CONFIG,
    getConfig,
    setConfig,
    loadConfig
} from './config'

export * from './mci'
