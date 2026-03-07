/**
 * IQ Text Utilities
 * @module text
 * @summary Text manipulation, formatting, and display utilities
 */

import { ANSI } from './ansi'

/**
 * Text alignment options
 */
export type TextAlignment = 'left' | 'center' | 'right'

/**
 * Text wrapping options
 */
export interface ITextWrapOptions {
    width: number
    indent?: number
    hangingIndent?: number
    preserveNewlines?: boolean
}

/**
 * Text box options
 */
export interface ITextBoxOptions {
    width: number
    height?: number
    padding?: number
    border?: 'single' | 'double' | 'ascii' | 'none'
    borderColor?: string
    fillColor?: string
    title?: string
    titleAlign?: TextAlignment
}

/**
 * Border character sets
 */
const BORDERS = {
    single: {
        topLeft: '┌',
        topRight: '┐',
        bottomLeft: '└',
        bottomRight: '┘',
        horizontal: '─',
        vertical: '│'
    },
    double: {
        topLeft: '╔',
        topRight: '╗',
        bottomLeft: '╚',
        bottomRight: '╝',
        horizontal: '═',
        vertical: '║'
    },
    ascii: {
        topLeft: '+',
        topRight: '+',
        bottomLeft: '+',
        bottomRight: '+',
        horizontal: '-',
        vertical: '|'
    },
    none: {
        topLeft: ' ',
        topRight: ' ',
        bottomLeft: ' ',
        bottomRight: ' ',
        horizontal: ' ',
        vertical: ' '
    }
}

/**
 * IQText class for advanced text manipulation
 */
export class IQText {
    private content: string
    private width: number

    constructor(content: string = '', width: number = 80) {
        this.content = content
        this.width = width
    }

    /**
     * Get the text content
     */
    toString(): string {
        return this.content
    }

    /**
     * Get visible length (excluding ANSI codes)
     */
    get visibleLength(): number {
        return IQText.stripAnsi(this.content).length
    }

    /**
     * Set content
     */
    set(content: string): IQText {
        this.content = content
        return this
    }

    /**
     * Append content
     */
    append(content: string): IQText {
        this.content += content
        return this
    }

    /**
     * Prepend content
     */
    prepend(content: string): IQText {
        this.content = content + this.content
        return this
    }

    /**
     * Apply color
     */
    color(color: string): IQText {
        this.content = ANSI.color(color) + this.content + ANSI.reset()
        return this
    }

    /**
     * Center text
     */
    center(width?: number): IQText {
        const w = width || this.width
        const visible = IQText.stripAnsi(this.content)
        if (visible.length >= w) return this
        
        const padding = Math.floor((w - visible.length) / 2)
        this.content = ' '.repeat(padding) + this.content
        return this
    }

    /**
     * Left align text
     */
    left(width?: number): IQText {
        const w = width || this.width
        const visible = IQText.stripAnsi(this.content)
        if (visible.length >= w) return this
        
        this.content = this.content + ' '.repeat(w - visible.length)
        return this
    }

    /**
     * Right align text
     */
    right(width?: number): IQText {
        const w = width || this.width
        const visible = IQText.stripAnsi(this.content)
        if (visible.length >= w) return this
        
        this.content = ' '.repeat(w - visible.length) + this.content
        return this
    }

    /**
     * Truncate text
     */
    truncate(maxLength: number, suffix: string = '...'): IQText {
        const visible = IQText.stripAnsi(this.content)
        if (visible.length <= maxLength) return this
        
        // Simple truncation - doesn't preserve ANSI codes
        this.content = visible.substring(0, maxLength - suffix.length) + suffix
        return this
    }

    /**
     * Pad text
     */
    pad(length: number, char: string = ' ', side: 'left' | 'right' | 'both' = 'right'): IQText {
        const visible = IQText.stripAnsi(this.content)
        if (visible.length >= length) return this
        
        const padding = length - visible.length
        
        if (side === 'left') {
            this.content = char.repeat(padding) + this.content
        } else if (side === 'right') {
            this.content = this.content + char.repeat(padding)
        } else {
            const leftPad = Math.floor(padding / 2)
            const rightPad = padding - leftPad
            this.content = char.repeat(leftPad) + this.content + char.repeat(rightPad)
        }
        
        return this
    }

    /**
     * Repeat text
     */
    repeat(count: number): IQText {
        this.content = this.content.repeat(count)
        return this
    }

    /**
     * Convert to uppercase
     */
    upper(): IQText {
        this.content = this.content.toUpperCase()
        return this
    }

    /**
     * Convert to lowercase
     */
    lower(): IQText {
        this.content = this.content.toLowerCase()
        return this
    }

    /**
     * Title case
     */
    title(): IQText {
        this.content = this.content.replace(/\b\w/g, c => c.toUpperCase())
        return this
    }

    /**
     * Reverse text
     */
    reverse(): IQText {
        this.content = this.content.split('').reverse().join('')
        return this
    }

    /**
     * Add newlines
     */
    newlines(count: number = 1, position: 'before' | 'after' | 'both' = 'after'): IQText {
        const nl = '\r\n'.repeat(count)
        
        if (position === 'before') {
            this.content = nl + this.content
        } else if (position === 'after') {
            this.content = this.content + nl
        } else {
            this.content = nl + this.content + nl
        }
        
        return this
    }

    /**
     * Word wrap text
     */
    wrap(options: ITextWrapOptions): IQText {
        const { width, indent = 0, hangingIndent = 0, preserveNewlines = true } = options
        const lines: string[] = []
        const paragraphs = preserveNewlines ? this.content.split(/\r?\n/) : [this.content]
        
        for (let i = 0; i < paragraphs.length; i++) {
            const paragraph = paragraphs[i]
            const words = paragraph.split(/\s+/)
            let currentLine = ' '.repeat(indent)
            let isFirstLine = true
            
            for (const word of words) {
                const testLine = currentLine + (currentLine.trim() ? ' ' : '') + word
                const visibleLength = IQText.stripAnsi(testLine).length
                
                if (visibleLength > width && currentLine.trim()) {
                    lines.push(currentLine)
                    currentLine = ' '.repeat(isFirstLine ? hangingIndent : hangingIndent) + word
                    isFirstLine = false
                } else {
                    currentLine = testLine
                }
            }
            
            if (currentLine.trim()) {
                lines.push(currentLine)
            }
        }
        
        this.content = lines.join('\r\n')
        return this
    }

    /**
     * Create a text box
     */
    box(options: ITextBoxOptions): IQText {
        const { 
            width, 
            height, 
            padding = 1, 
            border = 'single',
            borderColor,
            fillColor,
            title,
            titleAlign = 'center'
        } = options
        
        const chars = BORDERS[border]
        const innerWidth = width - 2 - (padding * 2)
        const lines: string[] = []
        
        // Apply border color
        const bc = borderColor ? ANSI.color(borderColor) : ''
        const reset = borderColor ? ANSI.reset() : ''
        
        // Top border with optional title
        let topBorder = chars.horizontal.repeat(width - 2)
        if (title) {
            const titleText = ` ${title} `
            const titleLen = titleText.length
            if (titleLen < width - 4) {
                if (titleAlign === 'center') {
                    const pos = Math.floor((width - 2 - titleLen) / 2)
                    topBorder = chars.horizontal.repeat(pos) + titleText + chars.horizontal.repeat(width - 2 - pos - titleLen)
                } else if (titleAlign === 'left') {
                    topBorder = chars.horizontal + titleText + chars.horizontal.repeat(width - 3 - titleLen)
                } else {
                    topBorder = chars.horizontal.repeat(width - 3 - titleLen) + titleText + chars.horizontal
                }
            }
        }
        lines.push(bc + chars.topLeft + topBorder + chars.topRight + reset)
        
        // Content lines
        const contentLines = this.content.split(/\r?\n/)
        const paddingLine = bc + chars.vertical + reset + ' '.repeat(width - 2) + bc + chars.vertical + reset
        
        // Top padding
        for (let i = 0; i < padding; i++) {
            lines.push(paddingLine)
        }
        
        // Content
        for (const line of contentLines) {
            const visible = IQText.stripAnsi(line)
            const padded = line + ' '.repeat(Math.max(0, innerWidth - visible.length))
            const paddedLine = ' '.repeat(padding) + padded + ' '.repeat(padding)
            lines.push(bc + chars.vertical + reset + paddedLine + bc + chars.vertical + reset)
        }
        
        // Fill remaining height if specified
        if (height) {
            const currentHeight = lines.length + 1 + padding // +1 for bottom border, +padding for bottom padding
            const remaining = height - currentHeight
            for (let i = 0; i < remaining; i++) {
                lines.push(paddingLine)
            }
        }
        
        // Bottom padding
        for (let i = 0; i < padding; i++) {
            lines.push(paddingLine)
        }
        
        // Bottom border
        lines.push(bc + chars.bottomLeft + chars.horizontal.repeat(width - 2) + chars.bottomRight + reset)
        
        this.content = lines.join('\r\n')
        return this
    }

    /**
     * Create horizontal line
     */
    static line(width: number, char: string = '─', color?: string): string {
        let line = char.repeat(width)
        if (color) {
            line = ANSI.color(color) + line + ANSI.reset()
        }
        return line
    }

    /**
     * Strip ANSI codes from text
     */
    static stripAnsi(text: string): string {
        return text.replace(/\x1b\[[0-9;]*m/g, '')
    }

    /**
     * Get visible length of text (excluding ANSI codes)
     */
    static visibleLength(text: string): number {
        return IQText.stripAnsi(text).length
    }

    /**
     * Center text within width
     */
    static center(text: string, width: number): string {
        const visible = IQText.stripAnsi(text)
        if (visible.length >= width) return text
        
        const padding = Math.floor((width - visible.length) / 2)
        return ' '.repeat(padding) + text
    }

    /**
     * Right align text within width
     */
    static right(text: string, width: number): string {
        const visible = IQText.stripAnsi(text)
        if (visible.length >= width) return text
        
        return ' '.repeat(width - visible.length) + text
    }

    /**
     * Left align text within width
     */
    static left(text: string, width: number): string {
        const visible = IQText.stripAnsi(text)
        if (visible.length >= width) return text
        
        return text + ' '.repeat(width - visible.length)
    }

    /**
     * Truncate text to max length
     */
    static truncate(text: string, maxLength: number, suffix: string = '...'): string {
        const visible = IQText.stripAnsi(text)
        if (visible.length <= maxLength) return text
        
        return visible.substring(0, maxLength - suffix.length) + suffix
    }

    /**
     * Word wrap text to width
     */
    static wrap(text: string, width: number): string[] {
        const words = text.split(/\s+/)
        const lines: string[] = []
        let currentLine = ''
        
        for (const word of words) {
            const testLine = currentLine + (currentLine ? ' ' : '') + word
            if (IQText.visibleLength(testLine) > width && currentLine) {
                lines.push(currentLine)
                currentLine = word
            } else {
                currentLine = testLine
            }
        }
        
        if (currentLine) {
            lines.push(currentLine)
        }
        
        return lines
    }

    /**
     * Create a progress bar
     */
    static progressBar(
        current: number, 
        total: number, 
        width: number = 20,
        options?: {
            filled?: string
            empty?: string
            leftCap?: string
            rightCap?: string
            showPercent?: boolean
            filledColor?: string
            emptyColor?: string
        }
    ): string {
        const {
            filled = '█',
            empty = '░',
            leftCap = '[',
            rightCap = ']',
            showPercent = true,
            filledColor,
            emptyColor
        } = options || {}
        
        const percent = Math.min(100, Math.max(0, (current / total) * 100))
        const barWidth = width - leftCap.length - rightCap.length
        const filledWidth = Math.round((percent / 100) * barWidth)
        const emptyWidth = barWidth - filledWidth
        
        let filledPart = filled.repeat(filledWidth)
        let emptyPart = empty.repeat(emptyWidth)
        
        if (filledColor) {
            filledPart = ANSI.color(filledColor) + filledPart + ANSI.reset()
        }
        if (emptyColor) {
            emptyPart = ANSI.color(emptyColor) + emptyPart + ANSI.reset()
        }
        
        let bar = leftCap + filledPart + emptyPart + rightCap
        
        if (showPercent) {
            bar += ` ${percent.toFixed(0)}%`
        }
        
        return bar
    }

    /**
     * Create a table
     */
    static table(
        headers: string[],
        rows: string[][],
        options?: {
            border?: 'single' | 'double' | 'ascii' | 'none'
            headerColor?: string
            cellPadding?: number
            columnWidths?: number[]
        }
    ): string {
        const {
            border = 'single',
            headerColor,
            cellPadding = 1,
            columnWidths
        } = options || {}
        
        const chars = BORDERS[border]
        
        // Calculate column widths
        const widths = columnWidths || headers.map((h, i) => {
            const headerWidth = IQText.visibleLength(h)
            const maxRowWidth = Math.max(...rows.map(r => IQText.visibleLength(r[i] || '')))
            return Math.max(headerWidth, maxRowWidth) + (cellPadding * 2)
        })
        
        const lines: string[] = []
        const totalWidth = widths.reduce((a, b) => a + b, 0) + widths.length + 1
        
        // Top border
        lines.push(chars.topLeft + widths.map(w => chars.horizontal.repeat(w)).join(chars.horizontal) + chars.topRight)
        
        // Header row
        let headerRow = chars.vertical
        for (let i = 0; i < headers.length; i++) {
            const cell = IQText.center(headers[i], widths[i])
            headerRow += (headerColor ? ANSI.color(headerColor) + cell + ANSI.reset() : cell) + chars.vertical
        }
        lines.push(headerRow)
        
        // Header separator
        lines.push(chars.vertical + widths.map(w => chars.horizontal.repeat(w)).join(chars.horizontal) + chars.vertical)
        
        // Data rows
        for (const row of rows) {
            let dataRow = chars.vertical
            for (let i = 0; i < widths.length; i++) {
                const cell = ' '.repeat(cellPadding) + (row[i] || '') + ' '.repeat(cellPadding)
                dataRow += IQText.left(cell, widths[i]) + chars.vertical
            }
            lines.push(dataRow)
        }
        
        // Bottom border
        lines.push(chars.bottomLeft + widths.map(w => chars.horizontal.repeat(w)).join(chars.horizontal) + chars.bottomRight)
        
        return lines.join('\r\n')
    }

    /**
     * Format bytes to human readable
     */
    static formatBytes(bytes: number, decimals: number = 2): string {
        if (bytes === 0) return '0 B'
        
        const k = 1024
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i]
    }

    /**
     * Format duration to human readable
     */
    static formatDuration(seconds: number): string {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        
        const parts: string[] = []
        if (hours > 0) parts.push(`${hours}h`)
        if (minutes > 0) parts.push(`${minutes}m`)
        if (secs > 0 || parts.length === 0) parts.push(`${secs}s`)
        
        return parts.join(' ')
    }

    /**
     * Format number with thousands separator
     */
    static formatNumber(num: number, separator: string = ','): string {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    }

    /**
     * Format date
     */
    static formatDate(date: Date | string, format: string = 'YYYY-MM-DD'): string {
        const d = typeof date === 'string' ? new Date(date) : date
        
        const year = d.getFullYear()
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const hours = String(d.getHours()).padStart(2, '0')
        const minutes = String(d.getMinutes()).padStart(2, '0')
        const seconds = String(d.getSeconds()).padStart(2, '0')
        
        return format
            .replace('YYYY', String(year))
            .replace('MM', month)
            .replace('DD', day)
            .replace('HH', hours)
            .replace('mm', minutes)
            .replace('ss', seconds)
    }
}
