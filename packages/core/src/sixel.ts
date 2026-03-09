/**
 * Sixel Graphics Support
 * @module core/sixel
 * @summary Display sixel graphics in compatible terminals
 *
 * Inspired by Synchronet's showsixel.js, this provides:
 * - Detect Sixel support via CTerm version check
 * - Display pre-rendered Sixel files
 * - Basic sixel sequence generation
 *
 * Sixel is a bitmap graphics format for terminals, supported by:
 * - SyncTERM (CTerm 1.189+)
 * - xterm (with sixel support compiled in)
 * - mlterm
 * - mintty
 * - foot
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

import * as fs from "fs"
import { IQOutput } from "./output"
import { ANSI } from "./ansi"
import { CTerm, CTermVersions } from "./cterm"

/**
 * Sixel display options
 */
export interface SixelOptions {
    filename: string
    x?: number
    y?: number
    clearScreen?: boolean
}

/**
 * Sixel color definition
 */
export interface SixelColor {
    index: number
    r: number
    g: number
    b: number
}

/**
 * Sixel image info
 */
export interface SixelImageInfo {
    width: number
    height: number
    colors: number
}

/**
 * Sixel class for terminal graphics
 */
export class Sixel {
    /**
     * Minimum CTerm version for Sixel support
     */
    static readonly MIN_VERSION = CTermVersions.SIXEL

    /**
     * Sixel escape sequence markers
     */
    static readonly DCS = "\x1bP" // Device Control String
    static readonly ST = "\x1b\\" // String Terminator
    static readonly SIXEL_START = "\x1bPq" // Start sixel data

    /**
     * Check if Sixel is supported based on CTerm version
     */
    static isSupported(ctermVersion: number): boolean {
        return ctermVersion >= CTermVersions.SIXEL
    }

    /**
     * Display a pre-rendered Sixel file
     */
    static async display(output: IQOutput, options: SixelOptions): Promise<boolean> {
        const { filename, x, y, clearScreen = false } = options

        try {
            // Read the sixel file
            const data = fs.readFileSync(filename)

            if (clearScreen) {
                output.write(ANSI.clearScreen())
            }

            // Position cursor if specified
            if (x !== undefined && y !== undefined) {
                output.write(ANSI.gotoxy(x, y))
            }

            // Write sixel data
            // Sixel files typically contain the full DCS...ST sequence
            output.write(data.toString("binary"))

            return true
        } catch {
            return false
        }
    }

    /**
     * Display sixel data from a buffer
     */
    static displayBuffer(output: IQOutput, data: Buffer, x?: number, y?: number): boolean {
        try {
            if (x !== undefined && y !== undefined) {
                output.write(ANSI.gotoxy(x, y))
            }

            output.write(data.toString("binary"))
            return true
        } catch {
            return false
        }
    }

    /**
     * Generate sixel header sequence
     * @param aspectRatio Pixel aspect ratio (0=default, 1=1:1, 2=5:4, etc.)
     * @param bgSelect Background select (0=device default, 1=no change, 2=set to 0)
     * @param horizontalGrid Horizontal grid size
     */
    static header(aspectRatio: number = 0, bgSelect: number = 0, horizontalGrid?: number): string {
        let seq = this.DCS

        if (aspectRatio > 0) {
            seq += aspectRatio.toString()
        }

        seq += ";"

        if (bgSelect > 0) {
            seq += bgSelect.toString()
        }

        seq += ";"

        if (horizontalGrid !== undefined) {
            seq += horizontalGrid.toString()
        }

        seq += "q"

        return seq
    }

    /**
     * Generate sixel color definition
     * @param index Color index (0-255)
     * @param r Red (0-100)
     * @param g Green (0-100)
     * @param b Blue (0-100)
     */
    static colorDefinition(index: number, r: number, g: number, b: number): string {
        return `#${index};2;${r};${g};${b}`
    }

    /**
     * Generate sixel color selection
     */
    static colorSelect(index: number): string {
        return `#${index}`
    }

    /**
     * Generate sixel terminator
     */
    static terminator(): string {
        return this.ST
    }

    /**
     * Generate carriage return (move to start of next sixel row)
     */
    static carriageReturn(): string {
        return "$"
    }

    /**
     * Generate line feed (move down one sixel row)
     */
    static lineFeed(): string {
        return "-"
    }

    /**
     * Encode a sixel character
     * A sixel character represents 6 vertical pixels
     * @param bits 6-bit value (0-63) representing pixel pattern
     */
    static encodeSixel(bits: number): string {
        return String.fromCharCode(63 + (bits & 0x3f))
    }

    /**
     * Encode repeated sixel character
     * @param count Repeat count
     * @param bits 6-bit value
     */
    static encodeRepeat(count: number, bits: number): string {
        if (count <= 3) {
            return this.encodeSixel(bits).repeat(count)
        }
        return `!${count}${this.encodeSixel(bits)}`
    }

    /**
     * Parse sixel image info from data
     * Returns basic info about the sixel image
     */
    static parseInfo(data: Buffer | string): SixelImageInfo | null {
        const str = typeof data === "string" ? data : data.toString("binary")

        // Look for raster attributes "width;height
        const rasterMatch = str.match(/"(\d+);(\d+)/)
        if (rasterMatch) {
            return {
                width: parseInt(rasterMatch[1], 10),
                height: parseInt(rasterMatch[2], 10),
                colors: (str.match(/#\d+;2;\d+;\d+;\d+/g) || []).length
            }
        }

        // Estimate from data if no raster attributes
        let width = 0
        let height = 0
        let currentWidth = 0
        let colors = 0

        for (let i = 0; i < str.length; i++) {
            const ch = str[i]

            if (ch === "#") {
                // Color definition or selection
                colors++
            } else if (ch === "$") {
                // Carriage return
                if (currentWidth > width) width = currentWidth
                currentWidth = 0
            } else if (ch === "-") {
                // Line feed
                height += 6
                if (currentWidth > width) width = currentWidth
                currentWidth = 0
            } else if (ch >= "?" && ch <= "~") {
                // Sixel data
                currentWidth++
            } else if (ch === "!") {
                // Repeat
                const repeatMatch = str.slice(i).match(/^!(\d+)/)
                if (repeatMatch) {
                    currentWidth += parseInt(repeatMatch[1], 10) - 1
                }
            }
        }

        if (currentWidth > width) width = currentWidth
        if (width > 0 || height > 0) {
            return { width, height: height + 6, colors }
        }

        return null
    }

    /**
     * Check if data appears to be sixel format
     */
    static isSixelData(data: Buffer | string): boolean {
        const str = typeof data === "string" ? data : data.toString("binary")

        // Check for DCS q sequence
        return str.includes("\x1bPq") || str.includes("\x1bP0;0;0q") || str.includes("\x1bP;")
    }

    /**
     * Strip sixel data from a string (for text extraction)
     */
    static stripSixel(data: string): string {
        // Remove everything between DCS and ST
        return data.replace(/\x1bP[^\\]*\x1b\\/g, "")
    }

    /**
     * Generate a simple test pattern
     * Useful for testing sixel support
     */
    static generateTestPattern(width: number = 60, height: number = 36): string {
        let sixel = this.header(0, 0)

        // Define some colors
        sixel += this.colorDefinition(0, 100, 0, 0) // Red
        sixel += this.colorDefinition(1, 0, 100, 0) // Green
        sixel += this.colorDefinition(2, 0, 0, 100) // Blue
        sixel += this.colorDefinition(3, 100, 100, 0) // Yellow
        sixel += this.colorDefinition(4, 100, 0, 100) // Magenta
        sixel += this.colorDefinition(5, 0, 100, 100) // Cyan

        const rows = Math.ceil(height / 6)

        for (let row = 0; row < rows; row++) {
            for (let color = 0; color < 6; color++) {
                sixel += this.colorSelect(color)

                const segmentWidth = Math.floor(width / 6)
                const startX = color * segmentWidth

                // Draw segment for this color
                if (startX > 0) {
                    sixel += this.encodeRepeat(startX, 0)
                }
                sixel += this.encodeRepeat(segmentWidth, 0x3f)

                sixel += this.carriageReturn()
            }

            if (row < rows - 1) {
                sixel += this.lineFeed()
            }
        }

        sixel += this.terminator()

        return sixel
    }
}
