/**
 * XBin Image Format Support
 * @module core/xbin
 * @summary Read and display XBin image format files
 *
 * Inspired by Synchronet's xbin_lib.js and xbimage_lib.js, this provides:
 * - Read XBin files (custom font + character data)
 * - Parse XBin header (width, height, font data, flags)
 * - Display XBin images (requires font loading)
 *
 * XBin is an extended BIN format that can include:
 * - Custom palettes
 * - Custom fonts
 * - Compressed data
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
import { ANSI, CGA } from "./ansi"
import { Graphic } from "./graphic"
import { CTerm } from "./cterm"

/**
 * XBin file signature
 */
export const XBIN_ID = "XBIN\x1a"
export const XBIN_ID_LENGTH = 5

/**
 * XBin flag constants
 */
export const XBinFlags = {
    PALETTE: 0x01,
    FONT: 0x02,
    COMPRESS: 0x04,
    NONBLINK: 0x08,
    FONT_512: 0x10,

    // Font slot flags (for multi-font XBin images)
    FONT_NORMAL: 0x02,
    FONT_HIGH: 0x04,
    FONT_BLINK: 0x08,
    FONT_HIGHBLINK: 0x10,
    NONHIGH: 0x20
} as const

/**
 * XBin header structure
 */
export interface XBinHeader {
    width: number
    height: number
    charHeight: number
    flags: number
    hasPalette: boolean
    hasFont: boolean
    isCompressed: boolean
    hasNonBlink: boolean
    has512Chars: boolean
}

/**
 * XBin palette (48 bytes - 16 colors x 3 RGB values)
 */
export interface XBinPalette {
    colors: Array<{ r: number; g: number; b: number }>
}

/**
 * XBin image structure
 */
export interface XBinImage {
    header: XBinHeader
    palette?: XBinPalette
    fonts: Buffer[]
    data: Buffer
    graphic?: Graphic
}

/**
 * XBin class for reading and displaying XBin images
 */
export class XBin {
    /**
     * XBin file signature
     */
    static readonly ID = XBIN_ID
    static readonly ID_LENGTH = XBIN_ID_LENGTH

    /**
     * Flag constants
     */
    static readonly FLAG_PALETTE = XBinFlags.PALETTE
    static readonly FLAG_FONT = XBinFlags.FONT
    static readonly FLAG_COMPRESS = XBinFlags.COMPRESS
    static readonly FLAG_NONBLINK = XBinFlags.NONBLINK
    static readonly FLAG_FONT_512 = XBinFlags.FONT_512

    /**
     * Read an XBin file
     */
    static read(filename: string): XBinImage | null {
        try {
            const buffer = fs.readFileSync(filename)
            return this.parse(buffer)
        } catch {
            return null
        }
    }

    /**
     * Parse XBin data from a buffer
     */
    static parse(buffer: Buffer): XBinImage | null {
        if (buffer.length < 11) {
            return null
        }

        // Check signature
        const signature = buffer.toString("ascii", 0, 5)
        if (signature !== XBIN_ID) {
            return null
        }

        // Parse header
        const width = buffer.readUInt16LE(5)
        const height = buffer.readUInt16LE(7)
        const charHeight = buffer.readUInt8(9)
        const flags = buffer.readUInt8(10)

        const header: XBinHeader = {
            width,
            height,
            charHeight,
            flags,
            hasPalette: (flags & XBinFlags.PALETTE) !== 0,
            hasFont: (flags & XBinFlags.FONT) !== 0,
            isCompressed: (flags & XBinFlags.COMPRESS) !== 0,
            hasNonBlink: (flags & XBinFlags.NONBLINK) !== 0,
            has512Chars: (flags & XBinFlags.FONT_512) !== 0
        }

        let offset = 11
        let palette: XBinPalette | undefined

        // Read palette if present
        if (header.hasPalette) {
            if (buffer.length < offset + 48) {
                return null
            }

            palette = { colors: [] }
            for (let i = 0; i < 16; i++) {
                palette.colors.push({
                    r: buffer.readUInt8(offset++),
                    g: buffer.readUInt8(offset++),
                    b: buffer.readUInt8(offset++)
                })
            }
        }

        // Read fonts if present
        const fonts: Buffer[] = []
        if (header.hasFont) {
            const numChars = header.has512Chars ? 512 : 256
            const fontSize = numChars * charHeight

            // Count number of fonts based on flags
            let numFonts = 1
            if (flags & XBinFlags.FONT_HIGH) numFonts++
            if (flags & XBinFlags.FONT_BLINK) numFonts++
            if (flags & XBinFlags.FONT_HIGHBLINK) numFonts++

            for (let i = 0; i < numFonts; i++) {
                if (buffer.length < offset + fontSize) {
                    break
                }
                fonts.push(buffer.subarray(offset, offset + fontSize))
                offset += fontSize
            }
        }

        // Read character data
        let data: Buffer

        if (header.isCompressed) {
            // Decompress RLE data
            data = this.decompress(buffer.subarray(offset), width * height * 2)
        } else {
            const dataSize = width * height * 2
            if (buffer.length < offset + dataSize) {
                // Partial data
                data = buffer.subarray(offset)
            } else {
                data = buffer.subarray(offset, offset + dataSize)
            }
        }

        // Create Graphic from data
        const graphic = new Graphic({ width, height })
        let dataOffset = 0
        for (let y = 0; y < height && dataOffset + 1 < data.length; y++) {
            for (let x = 0; x < width && dataOffset + 1 < data.length; x++) {
                const ch = String.fromCharCode(data[dataOffset++])
                const attr = data[dataOffset++]
                graphic.setData(x, y, ch, attr)
            }
        }

        return {
            header,
            palette,
            fonts,
            data,
            graphic
        }
    }

    /**
     * Decompress RLE-compressed XBin data
     */
    private static decompress(compressed: Buffer, expectedSize: number): Buffer {
        const output = Buffer.alloc(expectedSize)
        let inPos = 0
        let outPos = 0

        while (inPos < compressed.length && outPos < expectedSize) {
            const byte = compressed[inPos++]

            if ((byte & 0xc0) === 0xc0) {
                // Run of same character/attribute pair
                const count = (byte & 0x3f) + 1
                if (inPos + 1 >= compressed.length) break

                const ch = compressed[inPos++]
                const attr = compressed[inPos++]

                for (let i = 0; i < count && outPos + 1 < expectedSize; i++) {
                    output[outPos++] = ch
                    output[outPos++] = attr
                }
            } else if ((byte & 0x80) === 0x80) {
                // Run of same character, different attributes
                const count = (byte & 0x3f) + 1
                if (inPos >= compressed.length) break

                const ch = compressed[inPos++]

                for (let i = 0; i < count && outPos + 1 < expectedSize; i++) {
                    if (inPos >= compressed.length) break
                    output[outPos++] = ch
                    output[outPos++] = compressed[inPos++]
                }
            } else if ((byte & 0x40) === 0x40) {
                // Run of different characters, same attribute
                const count = (byte & 0x3f) + 1
                if (inPos >= compressed.length) break

                const attr = compressed[inPos++]

                for (let i = 0; i < count && outPos + 1 < expectedSize; i++) {
                    if (inPos >= compressed.length) break
                    output[outPos++] = compressed[inPos++]
                    output[outPos++] = attr
                }
            } else {
                // Literal run
                const count = (byte & 0x3f) + 1

                for (let i = 0; i < count && outPos + 1 < expectedSize; i++) {
                    if (inPos + 1 >= compressed.length) break
                    output[outPos++] = compressed[inPos++]
                    output[outPos++] = compressed[inPos++]
                }
            }
        }

        return output.subarray(0, outPos)
    }

    /**
     * Display an XBin image
     */
    static display(output: IQOutput, image: XBinImage, x: number = 1, y: number = 1, loadFonts: boolean = true): boolean {
        if (!image.graphic) {
            return false
        }

        // Apply palette if present and supported
        if (image.palette) {
            for (let i = 0; i < image.palette.colors.length; i++) {
                const color = image.palette.colors[i]
                // Scale from 0-63 to 0-255 (VGA palette format)
                const r = Math.round((color.r / 63) * 255)
                const g = Math.round((color.g / 63) * 255)
                const b = Math.round((color.b / 63) * 255)
                output.write(CTerm.setPaletteColorSequence(i, r, g, b))
            }
        }

        // Load fonts if present and supported
        if (loadFonts && image.fonts.length > 0) {
            const fontSlot = CTerm.FONT_SLOT_FIRST

            for (let i = 0; i < image.fonts.length; i++) {
                const fontData = image.fonts[i].toString("base64")
                output.write(CTerm.loadFontSequence(fontSlot + i, fontData))
            }

            // Select fonts for different styles
            if (image.fonts.length >= 1) {
                output.write(CTerm.selectFontSequence(CTerm.FONT_STYLES.NORMAL, fontSlot))
            }
            if (image.fonts.length >= 2) {
                output.write(CTerm.selectFontSequence(CTerm.FONT_STYLES.HIGH, fontSlot + 1))
            }
            if (image.fonts.length >= 3) {
                output.write(CTerm.selectFontSequence(CTerm.FONT_STYLES.BLINK, fontSlot + 2))
            }
            if (image.fonts.length >= 4) {
                output.write(CTerm.selectFontSequence(CTerm.FONT_STYLES.HIGHBLINK, fontSlot + 3))
            }
        }

        // Draw the graphic
        return image.graphic.draw(output, x, y)
    }

    /**
     * Check if a file is an XBin file
     */
    static isXBin(filename: string): boolean {
        try {
            const buffer = Buffer.alloc(5)
            const fd = fs.openSync(filename, "r")
            fs.readSync(fd, buffer, 0, 5, 0)
            fs.closeSync(fd)
            return buffer.toString("ascii") === XBIN_ID
        } catch {
            return false
        }
    }

    /**
     * Check if buffer contains XBin data
     */
    static isXBinData(data: Buffer): boolean {
        if (data.length < 5) return false
        return data.toString("ascii", 0, 5) === XBIN_ID
    }

    /**
     * Get info about an XBin file without fully parsing it
     */
    static getInfo(filename: string): XBinHeader | null {
        try {
            const buffer = Buffer.alloc(11)
            const fd = fs.openSync(filename, "r")
            fs.readSync(fd, buffer, 0, 11, 0)
            fs.closeSync(fd)

            if (buffer.toString("ascii", 0, 5) !== XBIN_ID) {
                return null
            }

            const flags = buffer.readUInt8(10)

            return {
                width: buffer.readUInt16LE(5),
                height: buffer.readUInt16LE(7),
                charHeight: buffer.readUInt8(9),
                flags,
                hasPalette: (flags & XBinFlags.PALETTE) !== 0,
                hasFont: (flags & XBinFlags.FONT) !== 0,
                isCompressed: (flags & XBinFlags.COMPRESS) !== 0,
                hasNonBlink: (flags & XBinFlags.NONBLINK) !== 0,
                has512Chars: (flags & XBinFlags.FONT_512) !== 0
            }
        } catch {
            return null
        }
    }

    /**
     * Create an XBin file from a Graphic
     */
    static create(graphic: Graphic, charHeight: number = 16, palette?: XBinPalette, fonts?: Buffer[]): Buffer {
        const width = graphic.width
        const height = graphic.height

        // Calculate flags
        let flags = 0
        if (palette) flags |= XBinFlags.PALETTE
        if (fonts && fonts.length > 0) {
            flags |= XBinFlags.FONT
            if (fonts.length >= 2) flags |= XBinFlags.FONT_HIGH
            if (fonts.length >= 3) flags |= XBinFlags.FONT_BLINK
            if (fonts.length >= 4) flags |= XBinFlags.FONT_HIGHBLINK
        }

        // Calculate total size
        let size = 11 // Header
        if (palette) size += 48 // Palette
        if (fonts) {
            for (const font of fonts) {
                size += font.length
            }
        }
        size += width * height * 2 // Character data

        const buffer = Buffer.alloc(size)
        let offset = 0

        // Write header
        buffer.write(XBIN_ID, 0, "ascii")
        offset = 5
        buffer.writeUInt16LE(width, offset)
        offset += 2
        buffer.writeUInt16LE(height, offset)
        offset += 2
        buffer.writeUInt8(charHeight, offset)
        offset += 1
        buffer.writeUInt8(flags, offset)
        offset += 1

        // Write palette
        if (palette) {
            for (const color of palette.colors) {
                buffer.writeUInt8(color.r, offset++)
                buffer.writeUInt8(color.g, offset++)
                buffer.writeUInt8(color.b, offset++)
            }
        }

        // Write fonts
        if (fonts) {
            for (const font of fonts) {
                font.copy(buffer, offset)
                offset += font.length
            }
        }

        // Write character data
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const cell = graphic.getData(x, y)
                buffer.writeUInt8((cell.ch ?? " ").charCodeAt(0), offset++)
                buffer.writeUInt8(cell.attr ?? CGA.LIGHTGRAY, offset++)
            }
        }

        return buffer
    }

    /**
     * Clean up after displaying XBin (reset fonts and palette)
     */
    static cleanup(output: IQOutput): void {
        // Reset palette
        output.write(CTerm.resetPaletteSequence())

        // Reset to default font
        output.write(ANSI.setSyncTermFont("cp437", 0))
    }
}
