/**
 * Session State
 * @module lib/session
 * @summary Per-connection session state and management implementing IQOutput
 */

import { Socket } from "net"
import { ANSI, MCIProcessor, MCIProcessorOptions, MCIContext, IQOutput, ControlCodeAction, cp437ToUtf8 } from "@iniquitybbs/core"

export type TerminalEncoding = "cp437" | "utf8"

export interface SessionInfo {
    terminalType: string
    encoding: TerminalEncoding
    width: number
    height: number
    client: {
        name: string
        version: string
        isSyncTerm: boolean
        isVtx: boolean
        supportsIceColors: boolean
        supportsFonts: boolean
    }
}

export interface WriteOptions {
    processMCI?: boolean
    trackLines?: boolean
}

/**
 * Input mode determines how incoming characters are handled
 */
export type InputMode = "line" | "key" | "raw"

/**
 * Session class implements IQOutput interface for use with core Runtime
 */
export class Session implements IQOutput {
    private socket: Socket
    private inputBuffer: string = ""
    private inputCallback: ((input: string) => void) | null = null
    private inputMode: InputMode = "line"
    private mciProcessor: MCIProcessor
    private pendingActions: ControlCodeAction[] = []
    private lineCount: number = 0
    private pauseEnabled: boolean = true
    private pauseAborted: boolean = false
    private pendingInputQueue: string[] = [] // Queue for non-blocking reads
    private escapeSequenceBuffer: number[] = [] // Incomplete escape sequence across packets

    /** Sentinel for mouse events in the queue (followed by "x:y") */
    static readonly MOUSE_PREFIX = "\u0000MOUSE:"

    /** Node number assigned by the server */
    public nodeNumber: number = 0

    /** Connection timestamp */
    public connectedAt: Date = new Date()

    public info: SessionInfo = {
        terminalType: "ansi-bbs",
        encoding: "cp437",
        width: 80,
        height: 24,
        client: {
            name: "unknown",
            version: "unknown",
            isSyncTerm: false,
            isVtx: false,
            supportsIceColors: false,
            supportsFonts: false
        }
    }

    constructor(socket: Socket, mciOptions?: MCIProcessorOptions) {
        this.socket = socket
        this.mciProcessor = new MCIProcessor({
            terminalWidth: this.info.width,
            terminalHeight: this.info.height,
            ...mciOptions
        })
        this.setupSocket()
    }

    private setupSocket() {
        this.socket.on("data", (data) => {
            this.handleData(data)
        })

        this.negotiate()
    }

    private negotiate() {
        this.socket.write(ANSI.telnetCommand(ANSI.telnet.WILL, ANSI.telnet.ECHO))
        this.socket.write(ANSI.telnetCommand(ANSI.telnet.WILL, ANSI.telnet.SUPPRESS_GO_AHEAD))
        this.socket.write(ANSI.telnetCommand(ANSI.telnet.DO, ANSI.telnet.TERMINAL_TYPE))
        this.socket.write(ANSI.telnetCommand(ANSI.telnet.DO, ANSI.telnet.NAWS))
        this.socket.write(ANSI.enableIceColors(), "binary")
    }

    private handleData(data: Buffer) {
        // Prepend any incomplete escape sequence from previous chunk
        let buf: Buffer = data
        if (this.escapeSequenceBuffer.length > 0) {
            buf = Buffer.concat([Buffer.from(this.escapeSequenceBuffer), data])
            this.escapeSequenceBuffer = []
        }

        let i = 0
        while (i < buf.length) {
            if (buf[i] === ANSI.telnet.IAC) {
                if (i + 1 < buf.length) {
                    const command = buf[i + 1]

                    if (command === ANSI.telnet.SB && i + 2 < buf.length) {
                        const option = buf[i + 2]
                        let j = i + 3
                        while (j < buf.length - 1) {
                            if (buf[j] === ANSI.telnet.IAC && buf[j + 1] === ANSI.telnet.SE) {
                                this.handleSubnegotiation(option, buf.slice(i + 3, j))
                                i = j + 2
                                break
                            }
                            j++
                        }
                        if (j >= buf.length - 1) break
                    } else if (i + 2 < buf.length) {
                        i += 3
                    } else {
                        break
                    }
                    continue
                }
            }

            // ESC starts an escape sequence - buffer and parse (e.g. SGR 1006 mouse or other CSI)
            if (buf[i] === 0x1b) {
                const seq: number[] = [buf[i]]
                i++
                while (i < buf.length) {
                    seq.push(buf[i])
                    i++
                    const result = this.parseEscapeSequence(seq)
                    if (result === "complete") {
                        const mouse = this.tryParseSGR1006Mouse(seq)
                        if (mouse !== null) {
                            const event = `${Session.MOUSE_PREFIX}${mouse.x}:${mouse.y}`
                            if (this.inputCallback) {
                                const callback = this.inputCallback
                                this.inputCallback = null
                                this.inputMode = "line"
                                callback(event)
                            } else {
                                this.pendingInputQueue.push(event)
                            }
                        }
                        break
                    }
                    if (result === "incomplete" && i >= buf.length) {
                        this.escapeSequenceBuffer = [...seq]
                        return
                    }
                    if (result === "incomplete") continue
                    // unknown/other CSI - consumed, break
                    break
                }
                continue
            }

            const char = String.fromCharCode(buf[i])

            if (this.inputCallback) {
                if (this.inputMode === "key" || this.inputMode === "raw") {
                    const callback = this.inputCallback
                    this.inputCallback = null
                    this.inputMode = "line"
                    callback(char)
                } else {
                    if (char === "\r" || char === "\n") {
                        const input = this.inputBuffer
                        this.inputBuffer = ""
                        const callback = this.inputCallback
                        this.inputCallback = null
                        this.write("\r\n")
                        callback(input)
                    } else if (char === "\x7f" || char === "\b") {
                        if (this.inputBuffer.length > 0) {
                            this.inputBuffer = this.inputBuffer.slice(0, -1)
                            this.write("\b \b")
                        }
                    } else if (char >= " " && char <= "~") {
                        this.inputBuffer += char
                        this.write(char)
                    }
                }
            } else {
                // No callback waiting - queue for non-blocking reads
                this.pendingInputQueue.push(char)
            }

            i++
        }
    }

    /**
     * Parse escape sequence buffer.
     * @returns "complete" when we have a full CSI (or SGR) sequence, "incomplete" when we need more bytes, "other" when we consumed a non-mouse sequence
     */
    private parseEscapeSequence(seq: number[]): "complete" | "incomplete" | "other" {
        if (seq.length < 2) return "incomplete"
        if (seq[0] !== 0x1b) return "other"
        if (seq[1] !== 0x5b) {
            // ESC + single char (e.g. ESC O or ESC [)
            if (seq.length >= 2) return "other"
            return "incomplete"
        }
        // CSI: ESC [ ... (letter or 0x7e)
        if (seq.length < 3) return "incomplete"
        // SGR 1006: ESC [ < digits ; digits ; digits M or m
        if (seq[2] === 0x3c) {
            const s = Buffer.from(seq).toString("ascii")
            if (/^\x1b\[<\d+;\d+;\d+[Mm]$/.test(s)) return "complete"
            if (/^\x1b\[<\d*;\d*;\d*$/.test(s) || /^\x1b\[<\d+;\d+;\d+$/.test(s)) return "incomplete"
            if (s.length > 32) return "other"
            return "incomplete"
        }
        // Other CSI: ESC [ (params) final byte (0x40-0x7e)
        const last = seq[seq.length - 1]
        if (last >= 0x40 && last <= 0x7e) return "complete"
        if (seq.length > 64) return "other"
        return "incomplete"
    }

    /**
     * If seq is SGR 1006 mouse (press or release), return { x, y } (1-based). Otherwise null.
     */
    private tryParseSGR1006Mouse(seq: number[]): { x: number; y: number } | null {
        const s = Buffer.from(seq).toString("ascii")
        const match = s.match(/^\x1b\[<(\d+);(\d+);(\d+)[Mm]$/)
        if (!match) return null
        const x = parseInt(match[2], 10)
        const y = parseInt(match[3], 10)
        return { x, y }
    }

    private handleSubnegotiation(option: number, data: Buffer) {
        if (option === ANSI.telnet.NAWS && data.length >= 4) {
            this.info.width = (data[0] << 8) | data[1]
            this.info.height = (data[2] << 8) | data[3]
            this.mciProcessor.setTerminal({
                width: this.info.width,
                height: this.info.height
            })
        } else if (option === ANSI.telnet.TERMINAL_TYPE && data.length > 0) {
            if (data[0] === 0) {
                this.info.terminalType = data.slice(1).toString("ascii").toLowerCase()
                this.detectTerminalClient()
            }
        }
    }

    private detectTerminalClient() {
        const termType = this.info.terminalType.toLowerCase()

        if (termType.includes("syncterm")) {
            this.info.client.name = "syncterm"
            this.info.client.isSyncTerm = true
            this.info.client.supportsIceColors = true
            this.info.client.supportsFonts = true

            const versionMatch = termType.match(/syncterm[- ]?(\d+\.\d+[a-z]?)/)
            if (versionMatch) {
                this.info.client.version = versionMatch[1]
            }
        } else if (termType.includes("vtx") || termType.includes("ftelnet")) {
            this.info.client.name = "vtx"
            this.info.client.isVtx = true
            this.info.client.supportsIceColors = true
        } else if (termType.includes("netrunner")) {
            this.info.client.name = "netrunner"
            this.info.client.supportsIceColors = true
        } else if (termType.includes("ansi-bbs") || termType.includes("pc-ansi") || termType.includes("ansi")) {
            this.info.client.name = "ansi-bbs"
            this.info.client.supportsIceColors = true
        }

        if (this.info.client.isSyncTerm || this.info.client.isVtx) {
            this.socket.write(ANSI.queryDeviceAttributes(), "binary")
        }
    }

    // IQOutput interface implementation

    /**
     * Write data to socket (converts to UTF-8 when session encoding is utf8)
     */
    write(data: string): void {
        if (this.info.encoding === "utf8") {
            this.socket.write(cp437ToUtf8(data), "utf8")
        } else {
            this.socket.write(data, "binary")
        }
    }

    /**
     * Get terminal encoding preference (set at connect)
     */
    getEncoding(): "cp437" | "utf8" {
        return this.info.encoding
    }

    /**
     * Set terminal encoding; updates MCI context for @CHARSET@ etc.
     */
    setEncoding(encoding: "cp437" | "utf8"): void {
        this.info.encoding = encoding
        const utf8 = encoding === "utf8"
        this.mciProcessor.setTerminal({ utf8, cp437: !utf8 })
    }

    /**
     * Write with MCI processing enabled (respects session encoding)
     */
    writeMCI(data: string): void {
        const result = this.mciProcessor.processWithDetails(data)
        this.pendingActions.push(...result.actions)

        const newlines = (result.text.match(/\r?\n/g) || []).length
        this.mciProcessor.incrementLineCount(newlines)

        this.write(result.text)
    }

    /**
     * Get pending actions from MCI processing
     */
    getPendingActions(): ControlCodeAction[] {
        const actions = [...this.pendingActions]
        this.pendingActions = []
        return actions
    }

    /**
     * Check if there are pending actions
     */
    hasPendingActions(): boolean {
        return this.pendingActions.length > 0
    }

    /**
     * Get the MCI processor instance
     */
    getMCIProcessor(): MCIProcessor {
        return this.mciProcessor
    }

    /**
     * Set MCI context
     */
    setMCIContext(ctx: Partial<MCIContext>): void {
        this.mciProcessor.setContext(ctx)
    }

    /**
     * Process MCI codes in text without writing
     */
    processMCI(text: string): string {
        return this.mciProcessor.process(text)
    }

    /**
     * Read a line of input from the user
     */
    async readLine(): Promise<string> {
        return new Promise((resolve) => {
            this.inputMode = "line"
            this.inputCallback = resolve
        })
    }

    /**
     * Wait for any key press (does not echo)
     */
    async waitKey(): Promise<string> {
        return new Promise((resolve) => {
            this.inputMode = "key"
            this.inputCallback = (char: string) => resolve(char)
        })
    }

    /**
     * Read a single key press (returns the character)
     */
    async readKey(): Promise<string> {
        return new Promise((resolve) => {
            this.inputMode = "key"
            this.inputCallback = (char: string) => resolve(char)
        })
    }

    /**
     * Get current line count (for auto-pause)
     */
    getLineCount(): number {
        return this.lineCount
    }

    /**
     * Reset line count (after pause)
     */
    resetLineCount(): void {
        this.lineCount = 0
    }

    /**
     * Increment line count
     */
    incrementLineCount(count: number = 1): void {
        this.lineCount += count
    }

    /**
     * Check if pause was aborted
     */
    isPauseAborted(): boolean {
        return this.pauseAborted
    }

    /**
     * Set pause aborted state
     */
    setPauseAborted(aborted: boolean): void {
        this.pauseAborted = aborted
    }

    /**
     * Check if pause is enabled
     */
    isPauseEnabled(): boolean {
        return this.pauseEnabled
    }

    /**
     * Enable/disable pause
     */
    setPauseEnabled(enabled: boolean): void {
        this.pauseEnabled = enabled
    }

    /**
     * Get terminal width
     */
    getWidth(): number {
        return this.info.width
    }

    /**
     * Get terminal height
     */
    getHeight(): number {
        return this.info.height
    }

    /**
     * Set SyncTERM font (if supported)
     */
    setSyncTermFont(fontNameOrAlias: string, page: number = 0): boolean {
        if (this.info.client.supportsFonts) {
            const fontSequence = ANSI.setSyncTermFontWithAlias(fontNameOrAlias, page)
            if (fontSequence) {
                this.write(fontSequence)
                return true
            }
        }
        return false
    }

    /**
     * Set emulated baud rate (if supported)
     */
    setEmulatedBaudRate(rate: number | string) {
        if (this.info.client.isSyncTerm || this.info.client.isVtx) {
            this.write(ANSI.setEmulatedBaudRate(rate))
        }
    }

    /**
     * Set cursor style (if supported)
     */
    setCursorStyle(style: string) {
        const sequence = ANSI.setCursorStyle(style)
        if (sequence) {
            this.write(sequence)
        }
    }

    /**
     * Check if client supports iCE colors
     */
    supportsIceColors(): boolean {
        return this.info.client.supportsIceColors
    }

    /**
     * Check if client supports font switching
     */
    supportsFonts(): boolean {
        return this.info.client.supportsFonts
    }

    /**
     * Non-blocking key read - returns immediately
     * @returns The key pressed, or null if no input available
     */
    readKeyNonBlocking(): string | null {
        if (this.pendingInputQueue.length > 0) {
            return this.pendingInputQueue.shift()!
        }
        return null
    }

    /**
     * Check if input is available without blocking
     */
    hasInput(): boolean {
        return this.pendingInputQueue.length > 0
    }

    /**
     * Clear the pending input queue
     */
    clearInputQueue(): void {
        this.pendingInputQueue = []
        this.escapeSequenceBuffer = []
    }

    /**
     * Close the session
     */
    close(): void {
        this.socket.end()
    }
}
