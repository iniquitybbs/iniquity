/**
 * Avatar System - Small User Graphics
 * @module core/avatar
 * @summary 10x6 cell user avatars with validation and identicon generation
 *
 * Inspired by Synchronet's avatar_lib.js, this provides:
 * - Fixed size: 10 columns x 6 rows (120 bytes)
 * - Store as base64-encoded BIN data
 * - Draw at absolute screen position
 * - Validate avatar data (no control characters)
 * - Auto-generate identicons for users without avatars
 */

import { IQOutput } from "./output"
import { ANSI, CGA } from "./ansi"
import { Graphic, GraphicOptions } from "./graphic"

/**
 * Avatar dimension constants
 */
export const AvatarDefs = {
    width: 10,
    height: 6,
    size: 120 // 10 * 6 * 2 bytes (char + attr per cell)
} as const

/**
 * Avatar data structure
 */
export interface AvatarData {
    data: string // base64-encoded BIN
    disabled?: boolean
    created?: Date
    updated?: Date
}

/**
 * Characters that are invalid in avatars
 */
const INVALID_CHARS = [
    0x00, // NUL
    0x07, // BEL
    0x08, // BS
    0x09, // TAB
    0x0a, // LF
    0x0c, // FF
    0x0d, // CR
    0x1b, // ESC
    0xff // Telnet IAC
]

/**
 * Avatar class for small user graphics
 */
export class Avatar {
    /**
     * Avatar dimension constants
     */
    static readonly defs = AvatarDefs

    /**
     * Validate avatar data
     * Returns true if the data is valid for use as an avatar
     */
    static isValid(data: Buffer): boolean {
        if (!data || data.length !== AvatarDefs.size) {
            return false
        }

        for (let i = 0; i < data.length; i += 2) {
            const ch = data[i]
            const attr = data[i + 1]

            // Check for invalid characters
            if (INVALID_CHARS.includes(ch)) {
                return false
            }

            // Check for blink attribute (not allowed in avatars)
            if (attr & CGA.BLINK) {
                return false
            }
        }

        return true
    }

    /**
     * Draw avatar at absolute screen position using Graphic.draw()
     */
    static draw(output: IQOutput, data: string, x: number, y: number, right: boolean = false, top: boolean = false): boolean {
        try {
            const buffer = Buffer.from(data, "base64")
            if (!this.isValid(buffer)) {
                return false
            }

            const graphic = new Graphic({
                width: AvatarDefs.width,
                height: AvatarDefs.height
            })

            // Disable blink attribute
            graphic.attrMask = ~CGA.BLINK & 0xff

            graphic.BIN = buffer

            // Calculate position
            let drawX = x
            let drawY = y

            if (top) {
                drawY = 1
            }

            if (right) {
                drawX = output.getWidth() - AvatarDefs.width
            }

            return graphic.draw(output, drawX, drawY)
        } catch {
            return false
        }
    }

    /**
     * Show avatar at current cursor position using console output
     */
    static show(output: IQOutput, data: string): boolean {
        try {
            const buffer = Buffer.from(data, "base64")
            if (!this.isValid(buffer)) {
                return false
            }

            const graphic = new Graphic({
                width: AvatarDefs.width,
                height: AvatarDefs.height
            })

            graphic.attrMask = ~CGA.BLINK & 0xff
            graphic.BIN = buffer

            // Output as MSG format (line by line)
            output.write(graphic.MSG)
            return true
        } catch {
            return false
        }
    }

    /**
     * Convert a Graphic to avatar data (base64-encoded BIN)
     * The graphic must be exactly 10x6 or will be cropped/padded
     */
    static fromGraphic(graphic: Graphic): string {
        const avatarGraphic = new Graphic({
            width: AvatarDefs.width,
            height: AvatarDefs.height
        })

        // Copy data from source graphic
        for (let y = 0; y < AvatarDefs.height; y++) {
            for (let x = 0; x < AvatarDefs.width; x++) {
                if (y < graphic.height && x < graphic.width) {
                    const cell = graphic.getData(x, y)
                    if (cell.ch !== undefined && cell.attr !== undefined) {
                        // Remove blink attribute
                        const attr = cell.attr & ~CGA.BLINK
                        avatarGraphic.setData(x, y, cell.ch, attr)
                    }
                }
            }
        }

        return avatarGraphic.BIN.toString("base64")
    }

    /**
     * Generate an identicon avatar from a seed string
     * Creates a simple symmetric pattern based on the hash
     */
    static generateIdenticon(seed: string): string {
        const graphic = new Graphic({
            width: AvatarDefs.width,
            height: AvatarDefs.height
        })

        // Simple hash function
        let hash = 0
        for (let i = 0; i < seed.length; i++) {
            hash = (hash << 5) - hash + seed.charCodeAt(i)
            hash = hash & hash
        }

        // Use hash to determine colors
        const fgColor = Math.abs(hash % 15) + 1 // 1-15 (avoid black)
        const bgColor = Math.abs((hash >> 4) % 8) // 0-7

        // Block characters for pattern
        const blocks = [" ", "▀", "▄", "█", "▌", "▐", "░", "▒", "▓"]

        // Generate symmetric pattern
        const halfWidth = Math.floor(AvatarDefs.width / 2)

        for (let y = 0; y < AvatarDefs.height; y++) {
            for (let x = 0; x < halfWidth; x++) {
                // Use different bits of hash for each cell
                const cellHash = Math.abs(hash + (y * halfWidth + x) * 31)
                const blockIndex = cellHash % blocks.length
                const useBlock = (cellHash >> 8) % 3 !== 0 // 2/3 chance of block

                const ch = useBlock ? blocks[blockIndex] : " "
                const attr = (fgColor & 0x0f) | ((bgColor & 0x07) << 4)

                // Set left side
                graphic.setData(x, y, ch, attr)

                // Mirror to right side
                graphic.setData(AvatarDefs.width - 1 - x, y, ch, attr)
            }
        }

        return graphic.BIN.toString("base64")
    }

    /**
     * Load avatar from a BIN file
     */
    static loadFromFile(filename: string, offset: number = 0): string | null {
        try {
            const graphic = new Graphic({
                width: AvatarDefs.width,
                height: AvatarDefs.height
            })

            if (!graphic.load(filename, offset)) {
                return null
            }

            const bin = graphic.BIN
            if (!this.isValid(bin)) {
                return null
            }

            return bin.toString("base64")
        } catch {
            return null
        }
    }

    /**
     * Create avatar data object
     */
    static createAvatarData(data: string): AvatarData {
        return {
            data,
            disabled: false,
            created: new Date(),
            updated: new Date()
        }
    }

    /**
     * Check if avatar data is enabled and valid
     */
    static isEnabled(avatar: AvatarData | null | undefined): boolean {
        return !!(avatar && typeof avatar === "object" && typeof avatar.data === "string" && avatar.data.length > 0 && !avatar.disabled)
    }

    /**
     * Create a blank avatar with specified colors
     */
    static createBlank(fgColor: number = CGA.LIGHTGRAY, bgColor: number = CGA.BLACK): string {
        const graphic = new Graphic({
            width: AvatarDefs.width,
            height: AvatarDefs.height,
            attr: (fgColor & 0x0f) | ((bgColor & 0x07) << 4),
            ch: " "
        })

        return graphic.BIN.toString("base64")
    }

    /**
     * Create avatar from text (simple text rendering)
     */
    static fromText(text: string, fgColor: number = CGA.WHITE, bgColor: number = CGA.BLUE): string {
        const graphic = new Graphic({
            width: AvatarDefs.width,
            height: AvatarDefs.height,
            attr: (fgColor & 0x0f) | ((bgColor & 0x07) << 4),
            ch: " "
        })

        // Center the text
        const lines = text.split("\n").slice(0, AvatarDefs.height)
        const startY = Math.floor((AvatarDefs.height - lines.length) / 2)

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].slice(0, AvatarDefs.width)
            const startX = Math.floor((AvatarDefs.width - line.length) / 2)

            for (let j = 0; j < line.length; j++) {
                graphic.setData(startX + j, startY + i, line[j], (fgColor & 0x0f) | ((bgColor & 0x07) << 4))
            }
        }

        return graphic.BIN.toString("base64")
    }
}
