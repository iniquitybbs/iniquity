/**
 * Frame System
 * @module core/frame
 * @summary Windowed content areas with borders and isolated drawing
 */

import { IQOutput } from './output'
import { ANSI } from './ansi'

export enum IQFrameColorOptions {
    black = 'black',
    red = 'red',
    green = 'green',
    yellow = 'yellow',
    blue = 'blue',
    magenta = 'magenta',
    cyan = 'cyan',
    white = 'white',
    brightBlack = 'bright black',
    brightRed = 'bright red',
    brightGreen = 'bright green',
    brightYellow = 'bright yellow',
    brightBlue = 'bright blue',
    brightMagenta = 'bright magenta',
    brightCyan = 'bright cyan',
    brightWhite = 'bright white'
}

export interface IQFrameOptions {
    x: number
    y: number
    width: number
    height: number
    color?: IQFrameColorOptions | string
}

/**
 * IQFrame - Windowed content area
 */
export class IQFrame {
    private x: number
    private y: number
    private width: number
    private height: number
    private color: string
    private output: IQOutput
    private content: string[] = []
    private isOpen: boolean = false
    private savedScreen: string | null = null
    
    constructor(options: IQFrameOptions, output: IQOutput) {
        this.x = options.x
        this.y = options.y
        this.width = options.width
        this.height = options.height
        this.color = options.color || IQFrameColorOptions.white
        this.output = output
    }
    
    /**
     * Open the frame (draw border)
     */
    open(): void {
        this.isOpen = true
        this.content = []
        
        const topLeft = '┌'
        const topRight = '┐'
        const bottomLeft = '└'
        const bottomRight = '┘'
        const horizontal = '─'
        const vertical = '│'
        
        const colorCode = ANSI.color(this.color)
        
        this.output.write(ANSI.gotoxy(this.x, this.y))
        this.output.write(colorCode + topLeft + horizontal.repeat(this.width - 2) + topRight + ANSI.reset())
        
        for (let i = 1; i < this.height - 1; i++) {
            this.output.write(ANSI.gotoxy(this.x, this.y + i))
            this.output.write(colorCode + vertical + ANSI.reset())
            this.output.write(ANSI.gotoxy(this.x + this.width - 1, this.y + i))
            this.output.write(colorCode + vertical + ANSI.reset())
        }
        
        this.output.write(ANSI.gotoxy(this.x, this.y + this.height - 1))
        this.output.write(colorCode + bottomLeft + horizontal.repeat(this.width - 2) + bottomRight + ANSI.reset())
    }
    
    /**
     * Close the frame
     */
    close(): void {
        this.isOpen = false
        this.content = []
        
        for (let i = 0; i < this.height; i++) {
            this.output.write(ANSI.gotoxy(this.x, this.y + i))
            this.output.write(' '.repeat(this.width))
        }
    }
    
    /**
     * Add content to the frame buffer
     */
    say(text: string): void {
        const lines = text.split(/\r?\n/)
        this.content.push(...lines)
    }
    
    /**
     * Draw the buffered content inside the frame
     */
    draw(): void {
        if (!this.isOpen) {
            this.open()
        }
        
        const contentWidth = this.width - 2
        const contentHeight = this.height - 2
        
        for (let i = 0; i < Math.min(this.content.length, contentHeight); i++) {
            const line = this.content[i]
            
            const stripped = line.replace(/\x1b\[[0-9;]*m/g, '')
            
            let displayLine = line
            if (stripped.length > contentWidth) {
                let visibleChars = 0
                let actualPos = 0
                
                for (let j = 0; j < line.length && visibleChars < contentWidth; j++) {
                    if (line[j] === '\x1b') {
                        const seqEnd = line.indexOf('m', j)
                        if (seqEnd !== -1) {
                            actualPos = seqEnd + 1
                            j = seqEnd
                            continue
                        }
                    }
                    visibleChars++
                    actualPos = j + 1
                }
                
                displayLine = line.substring(0, actualPos)
            }
            
            this.output.write(ANSI.gotoxy(this.x + 1, this.y + 1 + i))
            this.output.write(displayLine)
            
            const paddingNeeded = contentWidth - stripped.length
            if (paddingNeeded > 0) {
                this.output.write(' '.repeat(paddingNeeded))
            }
        }
    }
    
    /**
     * Cycle through content (for animation effects)
     */
    cycle(): void {
        if (this.content.length > 0) {
            const firstLine = this.content.shift()
            if (firstLine) {
                this.content.push(firstLine)
            }
        }
        
        this.draw()
    }
    
    /**
     * Clear the frame content
     */
    clear(): void {
        this.content = []
        
        if (this.isOpen) {
            const contentWidth = this.width - 2
            const contentHeight = this.height - 2
            
            for (let i = 0; i < contentHeight; i++) {
                this.output.write(ANSI.gotoxy(this.x + 1, this.y + 1 + i))
                this.output.write(' '.repeat(contentWidth))
            }
        }
    }
}
