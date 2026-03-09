/**
 * Frame System
 * @module core/frame
 * @summary Windowed content areas with borders and isolated drawing
 */

/*
-$a. ------------------ .a$ ---------------------------- %$!, ----------------%
 `$¸   .%$$^¸$$aa.     .¸$`        .        .a$a$$.      `¸$%  $a$.        .
-.aaa$ $$$$'- $$$$$.- $aaa. -.a%$^"$$aa -- .$$$$$'- $$a. $aaa. `$,$ ----------%
;$$$$',a$a$  d$%$$$$$,'$$$$;$$$$$  $$$$$., $$%$$"  d$a$$ '$$$$; $$$   .a%$  $$a
:$$$$;$$$$%; Z$$$$$$$$;$$$$:$$$$$. $$$$^$,;$$&$$   Z$$$$,;$$$$.a$$$a..$$$   $$$
.$$$$ `$$$$.  $$$%$$$' $$$$.`$$$$  $$%$$$$ `$$$$.   $%$$$ $$$$""$$$" $$$$:  a$$
 `$$$a.$$%$   $$$$$$';a$$$`  `¸$$aa$$$$&$': `$$$$a. $$$$'a$$$`.$$'$  $$$$;  $$$
%-----.------ $$$$'--------------- $$%$$' -- `¸$$$$$%$¸' ---- $$¸$a. `"$&$$//$%$
dz      .   .:'¸'     .        .   $$$$'     .        .       `¸$$$$y.     `$$&
%--------- a`-----------.--------- $$¸' -----.------------.---------------- $$$
   .      !a    . .    .      .   .:'   .  .                  .        .:.a$$$¸
.      .  '$a,          .        a` .   'a          .   .             s` .  . .
      .    ¸$Aa         .       !a       a!      .    .         ..   %s      .s
   .         ¸¸'     . .        '$$Aa.aA$$'        . .               `!$%a.a%//$
==============================================================================
   t h e    i n i q u i t y    b u l l e t i n   b o a r d   s y s t e m
==============================================================================
*/

import { IQOutput } from "./output"
import { ANSI } from "./ansi"
import { screen } from "./screen"
import { Lifecycle } from "./decorators-runtime"

export enum IQFrameColorOptions {
    black = "black",
    red = "red",
    green = "green",
    yellow = "yellow",
    blue = "blue",
    magenta = "magenta",
    cyan = "cyan",
    white = "white",
    brightBlack = "bright black",
    brightRed = "bright red",
    brightGreen = "bright green",
    brightYellow = "bright yellow",
    brightBlue = "bright blue",
    brightMagenta = "bright magenta",
    brightCyan = "bright cyan",
    brightWhite = "bright white"
}

export type IQFrameBorderStyle = "single" | "double" | "rounded" | "heavy" | "ascii" | "none"

export interface IQFrameOptions {
    x: number
    y: number
    width: number
    height: number
    color?: IQFrameColorOptions | string
    title?: string
    titleAlign?: "left" | "center" | "right"
    titleColor?: IQFrameColorOptions | string
    border?: IQFrameBorderStyle
    shadow?: boolean
    shadowColor?: IQFrameColorOptions | string
}

/**
 * Border character sets for different styles
 * Using CP437 byte values for compatibility with BBS terminals
 */
const BORDER_CHARS: Record<
    IQFrameBorderStyle,
    {
        topLeft: string
        topRight: string
        bottomLeft: string
        bottomRight: string
        horizontal: string
        vertical: string
    }
> = {
    single: {
        topLeft: "\xDA", // ┌ CP437: 218
        topRight: "\xBF", // ┐ CP437: 191
        bottomLeft: "\xC0", // └ CP437: 192
        bottomRight: "\xD9", // ┘ CP437: 217
        horizontal: "\xC4", // ─ CP437: 196
        vertical: "\xB3" // │ CP437: 179
    },
    double: {
        topLeft: "\xC9", // ╔ CP437: 201
        topRight: "\xBB", // ╗ CP437: 187
        bottomLeft: "\xC8", // ╚ CP437: 200
        bottomRight: "\xBC", // ╝ CP437: 188
        horizontal: "\xCD", // ═ CP437: 205
        vertical: "\xBA" // ║ CP437: 186
    },
    rounded: {
        // Rounded corners don't exist in CP437, use single line
        topLeft: "\xDA", // ┌ CP437: 218
        topRight: "\xBF", // ┐ CP437: 191
        bottomLeft: "\xC0", // └ CP437: 192
        bottomRight: "\xD9", // ┘ CP437: 217
        horizontal: "\xC4", // ─ CP437: 196
        vertical: "\xB3" // │ CP437: 179
    },
    heavy: {
        // Heavy lines don't exist in CP437, use double line
        topLeft: "\xC9", // ╔ CP437: 201
        topRight: "\xBB", // ╗ CP437: 187
        bottomLeft: "\xC8", // ╚ CP437: 200
        bottomRight: "\xBC", // ╝ CP437: 188
        horizontal: "\xCD", // ═ CP437: 205
        vertical: "\xBA" // ║ CP437: 186
    },
    ascii: {
        topLeft: "+",
        topRight: "+",
        bottomLeft: "+",
        bottomRight: "+",
        horizontal: "-",
        vertical: "|"
    },
    none: {
        topLeft: " ",
        topRight: " ",
        bottomLeft: " ",
        bottomRight: " ",
        horizontal: " ",
        vertical: " "
    }
}

/**
 * IQFrame - Windowed content area
 */
@Lifecycle("open", "close")
export class IQFrame {
    private x: number
    private y: number
    private width: number
    private height: number
    private color: string
    private title: string
    private titleAlign: "left" | "center" | "right"
    private titleColor: string
    private borderStyle: IQFrameBorderStyle
    private shadow: boolean
    private shadowColor: string
    private output: IQOutput
    private content: string[] = []
    private savedRegion: boolean = false

    constructor(options: IQFrameOptions, output: IQOutput) {
        this.x = options.x
        this.y = options.y
        this.width = options.width
        this.height = options.height
        this.color = options.color || IQFrameColorOptions.white
        this.title = options.title || ""
        this.titleAlign = options.titleAlign || "center"
        this.titleColor = options.titleColor || options.color || IQFrameColorOptions.brightWhite
        this.borderStyle = options.border || "single"
        this.shadow = options.shadow || false
        this.shadowColor = options.shadowColor || "bright black"
        this.output = output
    }

    /**
     * Open the frame (draw border)
     * Automatically saves the background region if screen buffer is available
     */
    open(): void {
        // Save the region we're about to overwrite (including shadow area)
        const saveWidth = this.shadow ? this.width + 2 : this.width
        const saveHeight = this.shadow ? this.height + 1 : this.height
        const saved = screen.saveRegion(this.x, this.y, saveWidth, saveHeight)
        this.savedRegion = saved !== null

        const chars = BORDER_CHARS[this.borderStyle]
        const colorCode = ANSI.color(this.color)
        const titleColorCode = ANSI.color(this.titleColor)

        // Draw shadow first if enabled
        if (this.shadow) {
            const shadowColorCode = ANSI.color(this.shadowColor)
            // Right shadow
            for (let i = 1; i < this.height + 1; i++) {
                this.output.write(ANSI.gotoxy(this.x + this.width, this.y + i))
                this.output.write(shadowColorCode + "░░" + ANSI.reset())
            }
            // Bottom shadow
            this.output.write(ANSI.gotoxy(this.x + 2, this.y + this.height))
            this.output.write(shadowColorCode + "░".repeat(this.width) + ANSI.reset())
        }

        // Draw top border with optional title
        this.output.write(ANSI.gotoxy(this.x, this.y))

        if (this.title) {
            const titleText = ` ${this.title} `
            const availableWidth = this.width - 2 // Minus corners
            const titleLen = titleText.length

            let leftPad: number
            let rightPad: number

            if (this.titleAlign === "left") {
                leftPad = 1
                rightPad = availableWidth - titleLen - 1
            } else if (this.titleAlign === "right") {
                leftPad = availableWidth - titleLen - 1
                rightPad = 1
            } else {
                leftPad = Math.floor((availableWidth - titleLen) / 2)
                rightPad = availableWidth - titleLen - leftPad
            }

            this.output.write(colorCode + chars.topLeft)
            this.output.write(chars.horizontal.repeat(Math.max(0, leftPad)))
            this.output.write(titleColorCode + titleText)
            this.output.write(colorCode + chars.horizontal.repeat(Math.max(0, rightPad)))
            this.output.write(chars.topRight + ANSI.reset())
        } else {
            this.output.write(colorCode + chars.topLeft + chars.horizontal.repeat(this.width - 2) + chars.topRight + ANSI.reset())
        }

        // Draw sides and clear interior
        for (let i = 1; i < this.height - 1; i++) {
            this.output.write(ANSI.gotoxy(this.x, this.y + i))
            this.output.write(colorCode + chars.vertical + ANSI.reset())
            this.output.write(" ".repeat(this.width - 2))
            this.output.write(colorCode + chars.vertical + ANSI.reset())
        }

        // Draw bottom border
        this.output.write(ANSI.gotoxy(this.x, this.y + this.height - 1))
        this.output.write(colorCode + chars.bottomLeft + chars.horizontal.repeat(this.width - 2) + chars.bottomRight + ANSI.reset())
    }

    /**
     * Close the frame and restore the background
     * If screen buffer management is active, redraws the saved region
     */
    close(): void {
        this.content = []

        // If we saved the region, restore it from the background
        if (this.savedRegion) {
            screen.restoreRegion()
            this.savedRegion = false
        } else {
            // Fallback: just clear the area with spaces
            const clearWidth = this.shadow ? this.width + 2 : this.width
            const clearHeight = this.shadow ? this.height + 1 : this.height

            for (let i = 0; i < clearHeight; i++) {
                this.output.write(ANSI.gotoxy(this.x, this.y + i))
                this.output.write(" ".repeat(clearWidth))
            }
        }
    }

    /**
     * Add content to the frame buffer
     */
    say(text: string): IQFrame {
        const lines = text.split(/\r?\n/)
        this.content.push(...lines)
        return this
    }

    /**
     * Add content with MCI processing
     */
    sayMCI(text: string): IQFrame {
        const processed = this.output.processMCI(text)
        return this.say(processed)
    }

    /**
     * Draw the buffered content inside the frame
     */
    draw(): void {
        const contentWidth = this.width - 2
        const contentHeight = this.height - 2

        for (let i = 0; i < Math.min(this.content.length, contentHeight); i++) {
            const line = this.content[i]

            const stripped = line.replace(/\x1b\[[0-9;]*m/g, "").replace(/\|[0-9]{2}/g, "")

            let displayLine = line
            if (stripped.length > contentWidth) {
                let visibleChars = 0
                let actualPos = 0

                for (let j = 0; j < line.length && visibleChars < contentWidth; j++) {
                    if (line[j] === "\x1b") {
                        const seqEnd = line.indexOf("m", j)
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
            this.output.writeMCI(displayLine)

            const paddingNeeded = contentWidth - stripped.length
            if (paddingNeeded > 0) {
                this.output.write(" ".repeat(paddingNeeded))
            }
        }
    }

    /**
     * Center text within the frame
     */
    center(text: string): IQFrame {
        const contentWidth = this.width - 2
        const stripped = text.replace(/\x1b\[[0-9;]*m/g, "").replace(/\|[0-9]{2}/g, "")
        const padding = Math.floor((contentWidth - stripped.length) / 2)
        return this.say(" ".repeat(Math.max(0, padding)) + text)
    }

    /**
     * Add a blank line
     */
    blank(): IQFrame {
        return this.say("")
    }

    /**
     * Add a horizontal separator line
     */
    separator(char: string = "\xC4", color?: string): IQFrame {
        // CP437: ─
        const contentWidth = this.width - 2
        const line = color ? ANSI.color(color) + char.repeat(contentWidth) + ANSI.reset() : char.repeat(contentWidth)
        return this.say(line)
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
     * Clear the frame content (but keep frame open)
     */
    clear(): IQFrame {
        this.content = []

        const contentWidth = this.width - 2
        const contentHeight = this.height - 2

        for (let i = 0; i < contentHeight; i++) {
            this.output.write(ANSI.gotoxy(this.x + 1, this.y + 1 + i))
            this.output.write(" ".repeat(contentWidth))
        }

        return this
    }

    /**
     * Get the interior content area dimensions
     */
    getContentArea(): { x: number; y: number; width: number; height: number } {
        return {
            x: this.x + 1,
            y: this.y + 1,
            width: this.width - 2,
            height: this.height - 2
        }
    }

    /**
     * Position cursor inside the frame at relative coordinates
     */
    gotoxy(relX: number, relY: number): IQFrame {
        this.output.write(ANSI.gotoxy(this.x + relX, this.y + relY))
        return this
    }

    /**
     * Wait for a key press (convenience method)
     */
    async waitKey(): Promise<string> {
        return await this.output.waitKey()
    }

    /**
     * Show a popup message and wait for key press
     * Convenience method for quick modal dialogs
     */
    async popup(): Promise<string> {
        this.open()
        this.draw()
        const key = await this.waitKey()
        this.close()
        return key
    }

    /**
     * Get text input within the frame at current content position
     * @param prompt - Optional prompt text to display before input
     * @param maxLength - Maximum input length (defaults to content width)
     * @returns The user's input
     */
    async input(prompt?: string, maxLength?: number): Promise<string> {
        // Draw any buffered content first
        this.draw()

        const contentArea = this.getContentArea()
        const currentLine = this.content.length
        const inputY = this.y + 1 + currentLine

        // Draw prompt if provided
        if (prompt) {
            this.output.write(ANSI.gotoxy(contentArea.x, inputY))
            this.output.writeMCI(prompt)
        }

        // Calculate input position and max length
        const promptLen = prompt ? prompt.replace(/\x1b\[[0-9;]*m/g, "").replace(/\|[0-9]{2}/g, "").length : 0
        const inputX = contentArea.x + promptLen
        const effectiveMaxLength = maxLength ?? contentArea.width - promptLen

        // Position cursor for input
        this.output.write(ANSI.gotoxy(inputX, inputY))

        // Read input character by character
        let input = ""
        while (true) {
            const char = await this.output.waitKey()

            // Enter - submit
            if (char === "\r" || char === "\n") {
                this.content.push((prompt || "") + input)
                return input
            }

            // Backspace
            if (char === "\x7f" || char === "\b") {
                if (input.length > 0) {
                    input = input.slice(0, -1)
                    this.output.write("\b \b")
                }
                continue
            }

            // Escape - cancel
            if (char === "\x1b") {
                return ""
            }

            // Printable character
            if (char >= " " && char <= "~" && input.length < effectiveMaxLength) {
                input += char
                this.output.write(char)
            }
        }
    }

    /**
     * Get password input (masked with asterisks)
     * @param prompt - Optional prompt text
     * @param maxLength - Maximum input length
     * @returns The user's input
     */
    async inputPassword(prompt?: string, maxLength?: number): Promise<string> {
        // Draw any buffered content first
        this.draw()

        const contentArea = this.getContentArea()
        const currentLine = this.content.length
        const inputY = this.y + 1 + currentLine

        // Draw prompt if provided
        if (prompt) {
            this.output.write(ANSI.gotoxy(contentArea.x, inputY))
            this.output.writeMCI(prompt)
        }

        // Calculate input position and max length
        const promptLen = prompt ? prompt.replace(/\x1b\[[0-9;]*m/g, "").replace(/\|[0-9]{2}/g, "").length : 0
        const inputX = contentArea.x + promptLen
        const effectiveMaxLength = maxLength ?? contentArea.width - promptLen

        // Position cursor for input
        this.output.write(ANSI.gotoxy(inputX, inputY))

        // Read input character by character
        let input = ""
        while (true) {
            const char = await this.output.waitKey()

            // Enter - submit
            if (char === "\r" || char === "\n") {
                this.content.push((prompt || "") + "*".repeat(input.length))
                return input
            }

            // Backspace
            if (char === "\x7f" || char === "\b") {
                if (input.length > 0) {
                    input = input.slice(0, -1)
                    this.output.write("\b \b")
                }
                continue
            }

            // Escape - cancel
            if (char === "\x1b") {
                return ""
            }

            // Printable character - show asterisk
            if (char >= " " && char <= "~" && input.length < effectiveMaxLength) {
                input += char
                this.output.write("*")
            }
        }
    }
}
