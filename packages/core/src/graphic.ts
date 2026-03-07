/**
 * Graphic Class - In-Memory ANSI Buffer
 * @module core/graphic
 * @summary Cell-based ANSI manipulation for storing and rendering graphics
 *
 * Inspired by Synchronet's graphic.js library, this class provides:
 * - Cell-based data structure (character + attribute per cell)
 * - Load ANS/BIN files into memory
 * - Draw to screen at specific coordinates
 * - Partial region drawing
 * - Scroll, clear, putmsg operations
 * - Export to ANSI string or BIN format
 */

import * as fs from "fs"
import * as path from "path"
import { IQOutput } from "./output"
import { ANSI, CGA } from "./ansi"
import { MCIProcessor, PipeCodeProcessor } from "./mci"
import { Cached, Validate, Measure } from "./decorators-runtime"

// Re-export CGA from ansi.ts for backwards compatibility
export { CGA }

/**
 * A single cell in the graphic buffer
 */
export interface GraphicCell {
    ch: string | undefined
    attr: number | undefined
}

/**
 * Options for creating a Graphic
 */
export interface GraphicOptions {
    width?: number
    height?: number
    attr?: number
    ch?: string
    doorwayMode?: boolean
}

/**
 * Graphic class for in-memory ANSI manipulation
 */
export class Graphic {
    private _data: GraphicCell[][]
    private _width: number
    private _height: number
    private _attr: number
    private _ch: string
    private _doorwayMode: boolean
    private _attrMask: number = 0xff
    private _cpmEof: boolean = true
    private _ansiCrlf: boolean = true
    private _autoExtend: boolean = false

    private readonly illegalCharacters = [0, 7, 8, 9, 10, 12, 13, 27]

    constructor(options: GraphicOptions = {}) {
        this._width = options.width ?? 80
        this._height = options.height ?? 24
        this._attr = options.attr ?? CGA.LIGHTGRAY
        this._ch = options.ch ?? " "
        this._doorwayMode = options.doorwayMode ?? false

        this._data = this.createEmptyData()
    }

    /**
     * Create empty data array
     */
    private createEmptyData(): GraphicCell[][] {
        const data: GraphicCell[][] = []
        for (let y = 0; y < this._height; y++) {
            data[y] = []
            for (let x = 0; x < this._width; x++) {
                data[y][x] = { ch: this._ch, attr: this._attr }
            }
        }
        return data
    }

    /**
     * Width of the graphic
     */
    get width(): number {
        return this._width
    }

    /**
     * Height of the graphic
     */
    get height(): number {
        return this._height
    }

    /**
     * Default attribute
     */
    get attr(): number {
        return this._attr
    }

    set attr(value: number) {
        this._attr = value
    }

    /**
     * Attribute mask for filtering attributes during draw
     */
    get attrMask(): number {
        return this._attrMask
    }

    set attrMask(value: number) {
        this._attrMask = value
    }

    /**
     * Raw data array
     */
    get data(): GraphicCell[][] {
        return this._data
    }

    /**
     * True height of content (may be less than allocated height)
     */
    get dataHeight(): number {
        return this._data.length
    }

    /**
     * True width of content
     */
    get dataWidth(): number {
        let longest = 0
        for (const row of this._data) {
            if (row && row.length > longest) {
                longest = row.length
            }
        }
        return longest
    }

    /**
     * Get cell data at position
     */
    @Validate((args) => (args[0] >= 0 && args[1] >= 0) || "Coordinates must be non-negative")
    getData(x: number, y: number): GraphicCell {
        if (!this._data[y] || !this._data[y][x]) {
            return { ch: undefined, attr: undefined }
        }
        return this._data[y][x]
    }

    /**
     * Set cell data at position
     */
    @Validate((args) => (args[0] >= 0 && args[1] >= 0) || "Coordinates must be non-negative")
    setData(x: number, y: number, ch: string, attr: number): void {
        if (!this._data[y]) {
            this._data[y] = []
        }
        if (!this._data[y][x]) {
            this._data[y][x] = { ch: undefined, attr: undefined }
        }

        if (this._data[y][x].ch === ch && this._data[y][x].attr === attr) {
            return
        }

        this._data[y][x].ch = ch
        this._data[y][x].attr = attr
    }

    /**
     * Clear cell data at position
     */
    clearData(x: number, y: number): void {
        if (!this._data[y] || !this._data[y][x]) {
            return
        }
        this._data[y][x].ch = undefined
        this._data[y][x].attr = undefined
    }

    /**
     * Clear the entire graphic
     */
    clear(attr?: number): void {
        const clearAttr = attr ?? this._attr
        this._data = []
        for (let y = 0; y < this._height; y++) {
            this._data[y] = []
            for (let x = 0; x < this._width; x++) {
                this._data[y][x] = { ch: this._ch, attr: clearAttr }
            }
        }
    }

    /**
     * Scroll the graphic content
     */
    scroll(direction: "up" | "down" = "up", lines: number = 1): void {
        if (lines < 1) return

        if (direction === "up") {
            for (let i = 0; i < lines; i++) {
                this._data.shift()
                this._data.push(this.createEmptyRow())
            }
        } else {
            for (let i = 0; i < lines; i++) {
                this._data.pop()
                this._data.unshift(this.createEmptyRow())
            }
        }
    }

    /**
     * Create an empty row
     */
    private createEmptyRow(): GraphicCell[] {
        const row: GraphicCell[] = []
        for (let x = 0; x < this._width; x++) {
            row[x] = { ch: this._ch, attr: this._attr }
        }
        return row
    }

    /**
     * Put a message at position with optional attribute
     */
    putmsg(x: number, y: number, text: string, attr?: number): void {
        const useAttr = attr ?? this._attr
        let curX = x
        let curY = y

        for (const char of text) {
            if (char === "\r") {
                curX = 0
                continue
            }
            if (char === "\n") {
                curY++
                continue
            }
            if (char === "\t") {
                curX += 8 - (curX % 8)
                continue
            }
            if (char === "\b") {
                if (curX > 0) curX--
                continue
            }

            if (curY >= this._height) {
                if (this._autoExtend) {
                    this._data.push(this.createEmptyRow())
                    this._height++
                } else {
                    this.scroll("up")
                    curY--
                }
            }

            if (curX < this._width && curY < this._height) {
                this.setData(curX, curY, char, useAttr)
                curX++
            }

            if (curX >= this._width) {
                curX = 0
                curY++
            }
        }
    }

    /**
     * Load a file into the graphic
     */
    load(filename: string, offset?: number): boolean {
        const ext = path.extname(filename).toLowerCase()

        try {
            const buffer = fs.readFileSync(filename)

            switch (ext) {
                case ".ans":
                    this.ANSI = buffer.toString("latin1")
                    return true
                case ".bin":
                    if (offset !== undefined) {
                        const frameSize = this._height * this._width * 2
                        const start = offset * frameSize
                        this.BIN = buffer.subarray(start, start + frameSize)
                    } else {
                        this.BIN = buffer
                    }
                    return true
                case ".asc":
                    this.putmsg(0, 0, buffer.toString("latin1"))
                    return true
                default:
                    this.ANSI = buffer.toString("latin1")
                    return true
            }
        } catch (err) {
            return false
        }
    }

    /**
     * Draw the graphic to output at specified position
     */
    @Measure()
    draw(
        output: IQOutput,
        xpos: number = 1,
        ypos: number = 1,
        width?: number,
        height?: number,
        xoff: number = 0,
        yoff: number = 0,
        delay?: number
    ): boolean {
        const drawWidth = width ?? this._width
        const drawHeight = height ?? this._height

        if (xoff + drawWidth > this._width || yoff + drawHeight > this._height) {
            return false
        }

        let lastAttr = -1

        for (let y = 0; y < drawHeight; y++) {
            output.write(ANSI.gotoxy(xpos, ypos + y))

            for (let x = 0; x < drawWidth; x++) {
                const cell = this.getData(xoff + x, yoff + y)
                const attr = (cell.attr ?? this._attr) & this._attrMask
                let ch = cell.ch ?? this._ch

                if (this.illegalCharacters.includes(ch.charCodeAt(0))) {
                    if (this._doorwayMode) {
                        ch = "\x00" + ch
                    } else {
                        ch = this._ch
                    }
                }

                if (attr !== lastAttr) {
                    output.write(this.attrToAnsi(attr))
                    lastAttr = attr
                }

                output.write(ch)
            }

            if (delay && delay > 0) {
                // Note: In async context, caller should handle delays
            }
        }

        return true
    }

    /**
     * Convert CGA attribute to ANSI escape sequence
     */
    @Cached()
    attrToAnsi(attr: number): string {
        const fg = attr & 0x0f
        const bg = (attr >> 4) & 0x07
        const blink = (attr & CGA.BLINK) !== 0

        const fgMap: { [key: number]: number } = {
            0: 30,
            1: 34,
            2: 32,
            3: 36,
            4: 31,
            5: 35,
            6: 33,
            7: 37,
            8: 90,
            9: 94,
            10: 92,
            11: 96,
            12: 91,
            13: 95,
            14: 93,
            15: 97
        }

        const bgMap: { [key: number]: number } = {
            0: 40,
            1: 44,
            2: 42,
            3: 46,
            4: 41,
            5: 45,
            6: 43,
            7: 47
        }

        const codes: number[] = [0]

        if (fg >= 8) {
            codes.push(1)
            codes.push(fgMap[fg - 8] ?? 37)
        } else {
            codes.push(fgMap[fg] ?? 37)
        }

        codes.push(bgMap[bg] ?? 40)

        if (blink) {
            codes.push(5)
        }

        return `\x1b[${codes.join(";")}m`
    }

    /**
     * Get ANSI representation of the graphic
     */
    get ANSI(): string {
        let result = ""
        let lastAttr = -1

        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                const cell = this.getData(x, y)
                const attr = cell.attr ?? this._attr
                let ch = cell.ch ?? this._ch

                if (this.illegalCharacters.includes(ch.charCodeAt(0))) {
                    if (this._doorwayMode) {
                        ch = "\x00" + ch
                    } else {
                        ch = this._ch
                    }
                }

                if (attr !== lastAttr) {
                    result += this.attrToAnsi(attr)
                    lastAttr = attr
                }

                result += ch
            }

            if (this._ansiCrlf) {
                result += "\x1b[0m\r\n"
                lastAttr = -1
            }
        }

        return result
    }

    /**
     * Parse ANSI data into the graphic
     */
    set ANSI(data: string) {
        this.parseANSI(data)
    }

    /**
     * Set ANSI content with optional MCI pre-processing
     * @param data - ANSI content (may contain MCI/pipe codes)
     * @param processMCI - If true, process all MCI codes (pipe codes, @-codes, control codes) before parsing ANSI
     */
    setANSI(data: string, processMCI: boolean = false): void {
        let content = data
        if (processMCI) {
            content = this.processMCICodes(content)
        }
        this.parseANSI(content)
    }

    /**
     * Process MCI codes in content, converting them to ANSI escape sequences
     * Uses the full MCIProcessor for comprehensive code handling including:
     * - Pipe codes (|07, |15, etc.)
     * - @-codes (@USER@, @TIME@, etc.)
     * - Control codes (|CS, |PA, etc.)
     */
    private processMCICodes(content: string): string {
        const processor = new MCIProcessor()
        return processor.process(content)
    }

    /**
     * Internal method to parse ANSI data into the graphic buffer
     */
    private parseANSI(data: string): void {
        this.clear()

        let x = 0
        let y = 0
        let attr = this._attr
        let savedX = 0
        let savedY = 0
        let i = 0

        while (i < data.length) {
            if (this._cpmEof && data[i] === "\x1a") {
                break
            }

            if (data[i] === "\x1b" && data[i + 1] === "[") {
                i += 2
                let params = ""

                while (i < data.length && ((data[i] >= "0" && data[i] <= "?") || data[i] === ";")) {
                    params += data[i]
                    i++
                }

                const cmd = data[i]
                i++

                const paramList = params.split(";").map((p) => parseInt(p, 10) || 0)

                switch (cmd) {
                    case "H":
                    case "f":
                        y = (paramList[0] || 1) - 1
                        x = (paramList[1] || 1) - 1
                        break
                    case "A":
                        y -= paramList[0] || 1
                        if (y < 0) y = 0
                        break
                    case "B":
                        y += paramList[0] || 1
                        if (y >= this._height) y = this._height - 1
                        break
                    case "C":
                        x += paramList[0] || 1
                        if (x >= this._width) x = this._width - 1
                        break
                    case "D":
                        x -= paramList[0] || 1
                        if (x < 0) x = 0
                        break
                    case "J":
                        if (paramList[0] === 2) {
                            this.clear()
                            x = 0
                            y = 0
                        }
                        break
                    case "s":
                        savedX = x
                        savedY = y
                        break
                    case "u":
                        x = savedX
                        y = savedY
                        break
                    case "m":
                        attr = this.parseAnsiColors(paramList, attr)
                        break
                }
                continue
            }

            const ch = data[i]
            i++

            switch (ch) {
                case "\r":
                    x = 0
                    break
                case "\n":
                    y++
                    break
                case "\t":
                    x += 8 - (x % 8)
                    break
                case "\b":
                    if (x > 0) x--
                    break
                default:
                    if (y < this._height && x < this._width) {
                        this.setData(x, y, ch, attr)
                        x++
                    }

                    if (x >= this._width) {
                        x = 0
                        y++
                    }

                    while (y >= this._height) {
                        if (this._autoExtend) {
                            this._data.push(this.createEmptyRow())
                            this._height++
                        } else {
                            this.scroll("up")
                            y--
                        }
                    }
                    break
            }
        }
    }

    /**
     * Parse ANSI SGR parameters into attribute
     */
    private parseAnsiColors(params: number[], currentAttr: number): number {
        let attr = currentAttr

        for (const param of params) {
            switch (param) {
                case 0:
                    attr = CGA.LIGHTGRAY
                    break
                case 1:
                    attr |= CGA.HIGH
                    break
                case 5:
                    attr |= CGA.BLINK
                    break
                case 22:
                    attr &= ~CGA.HIGH
                    break
                case 25:
                    attr &= ~CGA.BLINK
                    break
                case 30:
                    attr = (attr & 0xf8) | CGA.BLACK
                    break
                case 31:
                    attr = (attr & 0xf8) | CGA.RED
                    break
                case 32:
                    attr = (attr & 0xf8) | CGA.GREEN
                    break
                case 33:
                    attr = (attr & 0xf8) | CGA.BROWN
                    break
                case 34:
                    attr = (attr & 0xf8) | CGA.BLUE
                    break
                case 35:
                    attr = (attr & 0xf8) | CGA.MAGENTA
                    break
                case 36:
                    attr = (attr & 0xf8) | CGA.CYAN
                    break
                case 37:
                    attr = (attr & 0xf8) | CGA.LIGHTGRAY
                    break
                case 90:
                    attr = (attr & 0xf0) | CGA.DARKGRAY
                    break
                case 91:
                    attr = (attr & 0xf0) | CGA.LIGHTRED
                    break
                case 92:
                    attr = (attr & 0xf0) | CGA.LIGHTGREEN
                    break
                case 93:
                    attr = (attr & 0xf0) | CGA.YELLOW
                    break
                case 94:
                    attr = (attr & 0xf0) | CGA.LIGHTBLUE
                    break
                case 95:
                    attr = (attr & 0xf0) | CGA.LIGHTMAGENTA
                    break
                case 96:
                    attr = (attr & 0xf0) | CGA.LIGHTCYAN
                    break
                case 97:
                    attr = (attr & 0xf0) | CGA.WHITE
                    break
                case 40:
                    attr = (attr & 0x8f) | CGA.BG_BLACK
                    break
                case 41:
                    attr = (attr & 0x8f) | CGA.BG_RED
                    break
                case 42:
                    attr = (attr & 0x8f) | CGA.BG_GREEN
                    break
                case 43:
                    attr = (attr & 0x8f) | CGA.BG_BROWN
                    break
                case 44:
                    attr = (attr & 0x8f) | CGA.BG_BLUE
                    break
                case 45:
                    attr = (attr & 0x8f) | CGA.BG_MAGENTA
                    break
                case 46:
                    attr = (attr & 0x8f) | CGA.BG_CYAN
                    break
                case 47:
                    attr = (attr & 0x8f) | CGA.BG_LIGHTGRAY
                    break
            }
        }

        return attr
    }

    /**
     * Get BIN representation (raw character + attribute pairs)
     */
    get BIN(): Buffer {
        const buffer = Buffer.alloc(this._width * this._height * 2)
        let offset = 0

        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                const cell = this.getData(x, y)
                const ch = cell.ch ?? this._ch
                const attr = cell.attr ?? this._attr

                buffer[offset++] = ch.charCodeAt(0) & 0xff
                buffer[offset++] = attr & 0xff
            }
        }

        return buffer
    }

    /**
     * Load from BIN data
     */
    set BIN(data: Buffer) {
        this.clear()

        let offset = 0
        for (let y = 0; y < this._height && offset < data.length; y++) {
            for (let x = 0; x < this._width && offset + 1 < data.length; x++) {
                const ch = String.fromCharCode(data[offset++])
                const attr = data[offset++]
                this.setData(x, y, ch, attr)
            }
        }
    }

    /**
     * Get MSG representation (Ctrl-A codes for Synchronet compatibility)
     */
    get MSG(): string {
        let result = ""
        let lastAttr: number = CGA.LIGHTGRAY

        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                const cell = this.getData(x, y)
                const attr = cell.attr ?? this._attr
                let ch = cell.ch ?? this._ch

                if (this.illegalCharacters.includes(ch.charCodeAt(0))) {
                    if (this._doorwayMode) {
                        ch = "\x00" + ch
                    } else {
                        ch = this._ch
                    }
                }

                result += this.ctrlASequence(attr, lastAttr)
                lastAttr = attr
                result += ch
            }
            result += "\x01N\r\n"
            lastAttr = CGA.LIGHTGRAY
        }

        return result
    }

    /**
     * Generate Ctrl-A sequence for attribute change
     */
    private ctrlASequence(attr: number, curAttr: number): string {
        if (attr === curAttr) return ""

        let str = ""

        if ((curAttr & CGA.BLINK && !(attr & CGA.BLINK)) || (curAttr & CGA.HIGH && !(attr & CGA.HIGH))) {
            str += "\x01N"
            curAttr = CGA.LIGHTGRAY
        }

        if ((attr & 0xf0) !== (curAttr & 0xf0)) {
            if (attr & CGA.BLINK && !(curAttr & CGA.BLINK)) {
                str += "\x01I"
            }

            const bgColors = ["0", "4", "2", "6", "1", "5", "3", "7"]
            str += "\x01" + bgColors[(attr >> 4) & 0x07]
        }

        if ((attr & 0x0f) !== (curAttr & 0x0f)) {
            if (attr & CGA.HIGH && !(curAttr & CGA.HIGH)) {
                str += "\x01H"
            }

            const fgColors = ["K", "B", "G", "C", "R", "M", "Y", "W"]
            str += "\x01" + fgColors[attr & 0x07]
        }

        return str
    }

    /**
     * Create a copy of this graphic
     */
    clone(): Graphic {
        const copy = new Graphic({
            width: this._width,
            height: this._height,
            attr: this._attr,
            ch: this._ch,
            doorwayMode: this._doorwayMode
        })

        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                const cell = this.getData(x, y)
                if (cell.ch !== undefined && cell.attr !== undefined) {
                    copy.setData(x, y, cell.ch, cell.attr)
                }
            }
        }

        return copy
    }

    /**
     * Resize the graphic
     */
    resize(newWidth: number, newHeight: number): void {
        const oldData = this._data
        const oldWidth = this._width
        const oldHeight = this._height

        this._width = newWidth
        this._height = newHeight
        this._data = this.createEmptyData()

        for (let y = 0; y < Math.min(oldHeight, newHeight); y++) {
            for (let x = 0; x < Math.min(oldWidth, newWidth); x++) {
                if (oldData[y] && oldData[y][x]) {
                    this._data[y][x] = oldData[y][x]
                }
            }
        }
    }
}

/**
 * Helper function to create attribute from components
 */
export function makeAttr(fg: number, bg: number = 0, blink: boolean = false): number {
    let attr = (fg & 0x0f) | ((bg & 0x07) << 4)
    if (blink) attr |= CGA.BLINK
    return attr
}

/**
 * Helper function to extract foreground from attribute
 */
export function getForeground(attr: number): number {
    return attr & 0x0f
}

/**
 * Helper function to extract background from attribute
 */
export function getBackground(attr: number): number {
    return (attr >> 4) & 0x07
}

/**
 * Helper function to check if blink is set
 */
export function hasBlink(attr: number): boolean {
    return (attr & CGA.BLINK) !== 0
}
