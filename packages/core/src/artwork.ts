/**
 * Artwork Rendering
 * @module core/artwork
 * @summary ANSI artwork rendering with SAUCE metadata support and CP437 encoding
 */

import { IQOutput } from './output'
import { ANSI } from './ansi'
import { screen } from './screen'
import { MCIProcessor } from './mci'
import { Graphic } from './graphic'
import { Cached, Measure, Validate } from './decorators-runtime'
import * as fs from 'fs'
import * as path from 'path'

/**
 * CP437 to UTF-8 conversion table
 * Maps CP437 byte values (0x00-0xFF) to their Unicode equivalents
 * Characters 0x00-0x7F are standard ASCII, 0x80-0xFF are the extended CP437 characters
 */
const CP437_TO_UTF8: string[] = [
    // 0x00-0x1F: Control characters and special symbols
    '\u0000', '\u263A', '\u263B', '\u2665', '\u2666', '\u2663', '\u2660', '\u2022',
    '\u25D8', '\u25CB', '\u25D9', '\u2642', '\u2640', '\u266A', '\u266B', '\u263C',
    '\u25BA', '\u25C4', '\u2195', '\u203C', '\u00B6', '\u00A7', '\u25AC', '\u21A8',
    '\u2191', '\u2193', '\u2192', '\u2190', '\u221F', '\u2194', '\u25B2', '\u25BC',
    // 0x20-0x7F: Standard ASCII (space through DEL)
    ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?',
    '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_',
    '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', '\u2302',
    // 0x80-0x9F: International characters
    '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7',
    '\u00EA', '\u00EB', '\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5',
    '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9',
    '\u00FF', '\u00D6', '\u00DC', '\u00A2', '\u00A3', '\u00A5', '\u20A7', '\u0192',
    // 0xA0-0xBF: More international and box-drawing
    '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1', '\u00AA', '\u00BA',
    '\u00BF', '\u2310', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB',
    '\u2591', '\u2592', '\u2593', '\u2502', '\u2524', '\u2561', '\u2562', '\u2556',
    '\u2555', '\u2563', '\u2551', '\u2557', '\u255D', '\u255C', '\u255B', '\u2510',
    // 0xC0-0xDF: Box-drawing characters
    '\u2514', '\u2534', '\u252C', '\u251C', '\u2500', '\u253C', '\u255E', '\u255F',
    '\u255A', '\u2554', '\u2569', '\u2566', '\u2560', '\u2550', '\u256C', '\u2567',
    '\u2568', '\u2564', '\u2565', '\u2559', '\u2558', '\u2552', '\u2553', '\u256B',
    '\u256A', '\u2518', '\u250C', '\u2588', '\u2584', '\u258C', '\u2590', '\u2580',
    // 0xE0-0xFF: Greek letters and math symbols
    '\u03B1', '\u00DF', '\u0393', '\u03C0', '\u03A3', '\u03C3', '\u00B5', '\u03C4',
    '\u03A6', '\u0398', '\u03A9', '\u03B4', '\u221E', '\u03C6', '\u03B5', '\u2229',
    '\u2261', '\u00B1', '\u2265', '\u2264', '\u2320', '\u2321', '\u00F7', '\u2248',
    '\u00B0', '\u2219', '\u00B7', '\u221A', '\u207F', '\u00B2', '\u25A0', '\u00A0'
]

/**
 * Convert a CP437-encoded string to UTF-8
 * Preserves ANSI escape sequences (they use only ASCII characters)
 * @param cp437String String with CP437 character codes (read as latin1)
 * @returns UTF-8 encoded string
 */
function cp437ToUtf8(cp437String: string): string {
    let result = ''
    let i = 0
    
    while (i < cp437String.length) {
        const charCode = cp437String.charCodeAt(i)
        
        // Check for ANSI escape sequence start (ESC = 0x1B)
        if (charCode === 0x1B && i + 1 < cp437String.length && cp437String.charCodeAt(i + 1) === 0x5B) {
            // Found ESC[, copy the entire escape sequence as-is
            result += cp437String[i++] // ESC
            result += cp437String[i++] // [
            
            // Copy until we hit a letter (the command terminator)
            while (i < cp437String.length) {
                const c = cp437String[i]
                result += c
                i++
                // ANSI sequences end with a letter (A-Z, a-z)
                if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                    break
                }
            }
        } else {
            // Regular character - convert from CP437 to UTF-8
            result += CP437_TO_UTF8[charCode] || cp437String[i]
            i++
        }
    }
    
    return result
}

/**
 * Artwork constructor options
 */
export interface IQArtworkOptions {
    filename?: string
    basepath?: string
}

/**
 * Artwork render options
 */
export interface IQArtworkRenderOptions {
    filename?: string
    clearScreenBefore?: boolean
    /** Display style: 'line' renders line-by-line, 'character' renders char-by-char, 'instant' renders all at once */
    display?: 'line' | 'character' | 'instant'
    /** @deprecated Use 'display' instead */
    mode?: 'line' | 'character' | 'instant'
    speed?: number
    data?: any
    /** Process MCI/pipe codes in artwork. Defaults to true for BBS compatibility. */
    processMCI?: boolean
    autoPause?: boolean
    pageLength?: number
    /** 
     * Output encoding for the artwork.
     * - 'cp437': Send raw CP437 bytes (for BBS terminals like SyncTERM)
     * - 'utf8': Convert CP437 to UTF-8 (for modern terminals like xterm)
     * Defaults to 'cp437' for traditional BBS compatibility.
     */
    encoding?: 'cp437' | 'utf8'
    /** Explicit X position (1-indexed). Overrides centering. */
    x?: number
    /** Explicit Y position (1-indexed). Overrides centering. */
    y?: number
    /**
     * Centering mode for artwork positioning based on screen resolution.
     * - 'auto': Center if artwork is smaller than screen (default)
     * - 'horizontal': Center horizontally only
     * - 'vertical': Center vertically only
     * - 'both': Always center both axes
     * - 'none': No centering, render at 1,1 (legacy behavior)
     */
    center?: 'auto' | 'horizontal' | 'vertical' | 'both' | 'none'
}

/**
 * Chainable functions returned by artwork render
 */
export interface IQArtworkRenderFunctions extends Promise<void> {
    pause(): Promise<string>
    gotoxy(x: number, y: number): void
    colorReset(): void
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
 * Artwork class for rendering ANSI art files with SAUCE metadata support
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
    @Measure()
    render(options: IQArtworkRenderOptions): IQArtworkRenderFunctions {
        const filename = options.filename || ''
        const { 
            clearScreenBefore = false, 
            display = options.mode || 'line',
            speed = 30, 
            data, 
            processMCI = true,
            autoPause = false,
            pageLength,
            encoding = 'cp437',
            x: explicitX,
            y: explicitY,
            center: centerMode = 'auto'
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

        if (processMCI) {
            if (data) {
                for (const [key, value] of Object.entries(data)) {
                    this.mciProcessor.setCustom(key.toUpperCase(), value)
                }
            }
            content = this.mciProcessor.process(content)
        }

        if (encoding === 'utf8') {
            content = cp437ToUtf8(content)
        }

        const artWidth = this.sauceInfo?.width ?? this.detectWidth(content)
        const artHeight = this.sauceInfo?.tinfo2 ?? this.detectHeight(content)

        let startX = explicitX ?? 1
        let startY = explicitY ?? 1

        if (explicitX === undefined && explicitY === undefined && centerMode !== 'none') {
            const screenW = screen.width
            const screenH = screen.height

            const shouldCenterH = centerMode === 'both' || centerMode === 'horizontal' ||
                (centerMode === 'auto' && artWidth < screenW)
            const shouldCenterV = centerMode === 'both' || centerMode === 'vertical' ||
                (centerMode === 'auto' && artHeight < screenH)

            if (shouldCenterH) {
                startX = Math.max(1, screen.centerX(artWidth))
            }
            if (shouldCenterV) {
                startY = Math.max(1, screen.centerY(artHeight))
            }
        }

        if (clearScreenBefore) {
            this.output.write(ANSI.clearScreen())
        }

        const rawContent = content

        let renderPromise: Promise<void>
        if (display === 'line') {
            renderPromise = this.renderLineByLine(content, speed, autoPause, pageLength, startX, startY)
        } else if (display === 'character') {
            if (startX > 1 || startY > 1) {
                this.output.write(ANSI.gotoxy(startX, startY))
            }
            renderPromise = this.renderCharByChar(content, speed)
        } else {
            if (startX > 1 || startY > 1) {
                const lines = content.split(/\r?\n/)
                for (let i = 0; i < lines.length; i++) {
                    this.output.write(ANSI.gotoxy(startX, startY + i))
                    this.output.write(lines[i])
                }
            } else {
                this.output.write(content)
            }
            renderPromise = Promise.resolve()
        }

        const self = this
        
        const result = renderPromise.then(() => {
            screen.setBackground(rawContent, true)
            screen.setOutput(self.output)
        }) as IQArtworkRenderFunctions
        
        result.pause = async () => {
            await renderPromise
            // Note: This requires getGlobalRuntime to be imported where needed
            const { getGlobalRuntime } = require('./core')
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

    @Cached({ keyGenerator: (args) => `sauce_${args[0].length}` })
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
        pageLength?: number,
        startX: number = 1,
        startY: number = 1
    ): Promise<void> {
        const lines = content.split('\n')
        const effectivePageLength = pageLength ?? (this.output.getHeight() - 1)
        let currentLine = 0
        
        for (const line of lines) {
            if (line.includes('SAUCE00')) continue
            
            if (autoPause && this.output.getLineCount() >= effectivePageLength) {
                const { getGlobalRuntime } = require('./core')
                const runtime = getGlobalRuntime()
                await runtime.pause()
                
                if (this.output.isPauseAborted()) {
                    break
                }
            }
            
            if (startX > 1 || startY > 1) {
                this.output.write(ANSI.gotoxy(startX, startY + currentLine))
                this.output.write(line)
            } else {
                this.output.write(line + '\r\n')
            }
            
            currentLine++
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

    /**
     * Load artwork into a Graphic object instead of rendering
     */
    toGraphic(filename: string, width?: number, height?: number, processMCI: boolean = false): Graphic {
        const fullPath = this.resolvePath(filename)
        const rawBuffer = fs.readFileSync(fullPath)
        let content = rawBuffer.toString('latin1')
        
        this.sauceInfo = this.parseSauce(rawBuffer)
        content = this.stripSauce(content)
        
        const graphicWidth = width ?? this.sauceInfo?.width ?? 80
        const graphicHeight = height ?? this.sauceInfo?.tinfo2 ?? 25
        
        const graphic = new Graphic({
            width: graphicWidth,
            height: graphicHeight
        })
        
        graphic.setANSI(content, processMCI)
        
        return graphic
    }

    /**
     * Get raw content of artwork file without rendering
     */
    getContent(filename: string): string {
        const fullPath = this.resolvePath(filename)
        const rawBuffer = fs.readFileSync(fullPath)
        let content = rawBuffer.toString('latin1')
        
        this.sauceInfo = this.parseSauce(rawBuffer)
        content = this.stripSauce(content)
        
        return content
    }

    private detectWidth(content: string): number {
        const lines = content.split(/\r?\n/)
        let maxWidth = 0
        for (const line of lines) {
            const stripped = line.replace(/\x1b\[[0-9;]*[A-Za-z]/g, '')
            maxWidth = Math.max(maxWidth, stripped.length)
        }
        return maxWidth || 80
    }

    private detectHeight(content: string): number {
        const lines = content.split(/\r?\n/)
        let height = 0
        for (const line of lines) {
            if (line.includes('SAUCE00')) break
            height++
        }
        return height || 25
    }
}
