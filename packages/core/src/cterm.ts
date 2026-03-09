/**
 * CTerm Utilities - Terminal Capability Detection
 * @module core/cterm
 * @summary CTerm/SyncTERM feature detection and terminal queries
 *
 * Inspired by Synchronet's cterm_lib.js, this provides:
 * - Query terminal capabilities
 * - Detect CTerm version
 * - Check for specific feature support (fonts, sixel, palette)
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

/**
 * CTerm version constants for feature support
 */
export const CTermVersions = {
    FONTS: 1155,
    MODE_QUERY: 1160,
    FONTSTATE_QUERY: 1161,
    PALETTE: 1167,
    SIXEL: 1189,
    FONTDIM_QUERY: 1198,
    XTSRGA: 1208,
    B64_FONTS: 1213,
    COPY_BUFFERS: 1316,
    JPEGXL: 1318
} as const

/**
 * CTerm device attribute flags
 */
export const CTermDeviceAttributes = {
    VALID: "0",
    LOADABLE_FONTS: "1",
    BRIGHT_BACKGROUND: "2",
    PALETTE_SETTABLE: "3",
    PIXELOPS_SUPPORTED: "4",
    FONT_SELECTABLE: "5",
    EXTENDED_PALETTE: "6",
    MOUSE_AVAILABLE: "7"
} as const

/**
 * Terminal capabilities structure
 */
export interface CTermCapabilities {
    version: number
    supportsFonts: boolean
    supportsSixel: boolean
    supportsPalette: boolean
    supportsMouseTracking: boolean
    supportsFontDimQuery: boolean
    supportsB64Fonts: boolean
    supportsCopyBuffers: boolean
    supportsJpegXl: boolean
    deviceAttributes: string[]
}

/**
 * Font state information
 */
export interface CTermFontState {
    firstSlot: number
    result: number
    styles: number[]
}

/**
 * Font dimensions
 */
export interface CTermFontDimensions {
    width: number
    height: number
}

/**
 * Graphics dimensions
 */
export interface CTermGraphicsDimensions {
    width: number
    height: number
}

/**
 * CTerm class for terminal capability detection
 */
export class CTerm {
    /**
     * Version constants
     */
    static readonly VERSION_FONTS = CTermVersions.FONTS
    static readonly VERSION_SIXEL = CTermVersions.SIXEL
    static readonly VERSION_PALETTE = CTermVersions.PALETTE
    static readonly VERSION_MODE_QUERY = CTermVersions.MODE_QUERY
    static readonly VERSION_FONTSTATE_QUERY = CTermVersions.FONTSTATE_QUERY
    static readonly VERSION_FONTDIM_QUERY = CTermVersions.FONTDIM_QUERY
    static readonly VERSION_B64_FONTS = CTermVersions.B64_FONTS
    static readonly VERSION_COPY_BUFFERS = CTermVersions.COPY_BUFFERS
    static readonly VERSION_JPEGXL = CTermVersions.JPEGXL

    /**
     * Font slot range
     */
    static readonly FONT_SLOT_FIRST = 43
    static readonly FONT_SLOT_LAST = 255

    /**
     * Font styles
     */
    static readonly FONT_STYLES = {
        NORMAL: 0,
        HIGH: 1,
        BLINK: 2,
        HIGHBLINK: 3
    } as const

    /**
     * Check if a specific feature is supported based on version
     */
    static supportsFeature(version: number, feature: keyof typeof CTermVersions): boolean {
        return version >= CTermVersions[feature]
    }

    /**
     * Check if fonts are supported
     */
    static supportsFonts(version: number): boolean {
        return version >= CTermVersions.FONTS
    }

    /**
     * Check if Sixel graphics are supported
     */
    static supportsSixel(version: number): boolean {
        return version >= CTermVersions.SIXEL
    }

    /**
     * Check if palette manipulation is supported
     */
    static supportsPalette(version: number): boolean {
        return version >= CTermVersions.PALETTE
    }

    /**
     * Query device attributes (DA) sequence
     * Response format: ESC[=67;84;101;114;109;MAJOR;MINOR;ATTRIBUTESc
     */
    static queryDeviceAttributesSequence(): string {
        return "\x1b[c"
    }

    /**
     * Query font state sequence
     * Response format: ESC[=1;FIRST;RESULT;STYLE0;STYLE1;STYLE2;STYLE3n
     */
    static queryFontStateSequence(): string {
        return "\x1b[=1n"
    }

    /**
     * Query enabled modes sequence
     * Response format: ESC[=2;MODE1;MODE2;...n
     */
    static queryModesSequence(): string {
        return "\x1b[=2n"
    }

    /**
     * Query font dimensions sequence
     * Response format: ESC[=3;HEIGHT;WIDTHn
     */
    static queryFontDimensionsSequence(): string {
        return "\x1b[=3n"
    }

    /**
     * Query graphics dimensions (XTSRGA) sequence
     * Response format: ESC[?2;0;WIDTH;HEIGHTS
     */
    static queryGraphicsDimensionsSequence(): string {
        return "\x1b[?2;1S"
    }

    /**
     * Parse device attributes response
     * Returns version number or -1 if not CTerm
     */
    static parseDeviceAttributesResponse(response: string): number {
        // CTerm response: ESC[=67;84;101;114;109;MAJOR;MINORc
        // 67;84;101;114;109 = "CTerm" in ASCII
        const match = response.match(/\x1b\[=67;84;101;114;109;(\d+);(\d+)/)
        if (match) {
            const major = parseInt(match[1], 10)
            const minor = parseInt(match[2], 10)
            return major * 1000 + minor
        }
        return -1
    }

    /**
     * Parse font state response
     */
    static parseFontStateResponse(response: string): CTermFontState | null {
        // Response: ESC[=1;FIRST;RESULT;STYLE0;STYLE1;STYLE2;STYLE3n
        const match = response.match(/\x1b\[=1;(\d+);(\d+);(\d+);(\d+);(\d+);(\d+)n/)
        if (match) {
            return {
                firstSlot: parseInt(match[1], 10),
                result: parseInt(match[2], 10),
                styles: [parseInt(match[3], 10), parseInt(match[4], 10), parseInt(match[5], 10), parseInt(match[6], 10)]
            }
        }
        return null
    }

    /**
     * Parse font dimensions response
     */
    static parseFontDimensionsResponse(response: string): CTermFontDimensions | null {
        // Response: ESC[=3;HEIGHT;WIDTHn
        const match = response.match(/\x1b\[=3;(\d+);(\d+)n/)
        if (match) {
            return {
                height: parseInt(match[1], 10),
                width: parseInt(match[2], 10)
            }
        }
        return null
    }

    /**
     * Parse graphics dimensions response
     */
    static parseGraphicsDimensionsResponse(response: string): CTermGraphicsDimensions | null {
        // Response: ESC[?2;0;WIDTH;HEIGHTS
        const match = response.match(/\x1b\[\?2;0;(\d+);(\d+)S/)
        if (match) {
            return {
                width: parseInt(match[1], 10),
                height: parseInt(match[2], 10)
            }
        }
        return null
    }

    /**
     * Parse enabled modes response
     */
    static parseModesResponse(response: string): string[] {
        // Response: ESC[=2;MODE1;MODE2;...n or ESC[=2n (no modes)
        if (response === "\x1b[=2n") {
            return []
        }
        const match = response.match(/\x1b\[=2;(.+)n/)
        if (match) {
            return match[1].split(";")
        }
        return []
    }

    /**
     * Generate sequence to load a font
     * @param slot Font slot (43-255)
     * @param fontData Base64-encoded font data
     */
    static loadFontSequence(slot: number, fontData: string): string {
        if (slot < this.FONT_SLOT_FIRST || slot > this.FONT_SLOT_LAST) {
            return ""
        }
        return `\x1b[=${slot};1;0;${fontData} D`
    }

    /**
     * Generate sequence to select a font for a style
     * @param style Font style (0-3)
     * @param slot Font slot
     */
    static selectFontSequence(style: number, slot: number): string {
        if (style < 0 || style > 3) {
            return ""
        }
        return `\x1b[${style};${slot} D`
    }

    /**
     * Generate sequence to set palette color
     * @param index Color index (0-255)
     * @param r Red component (0-255)
     * @param g Green component (0-255)
     * @param b Blue component (0-255)
     */
    static setPaletteColorSequence(index: number, r: number, g: number, b: number): string {
        return `\x1b]4;${index};rgb:${r.toString(16).padStart(2, "0")}/${g.toString(16).padStart(2, "0")}/${b.toString(16).padStart(2, "0")}\x1b\\`
    }

    /**
     * Generate sequence to reset palette to defaults
     */
    static resetPaletteSequence(): string {
        return "\x1b[=0;0;0 D"
    }

    /**
     * Generate sequence to enable/disable mouse tracking
     */
    static mouseTrackingSequence(enable: boolean): string {
        return enable ? "\x1b[?1000h" : "\x1b[?1000l"
    }

    /**
     * Generate sequence to enable/disable mouse button events
     */
    static mouseButtonEventsSequence(enable: boolean): string {
        return enable ? "\x1b[?1002h" : "\x1b[?1002l"
    }

    /**
     * Generate sequence to enable/disable mouse motion events
     */
    static mouseMotionEventsSequence(enable: boolean): string {
        return enable ? "\x1b[?1003h" : "\x1b[?1003l"
    }

    /**
     * Generate sequence to enable/disable SGR mouse mode
     */
    static mouseSgrModeSequence(enable: boolean): string {
        return enable ? "\x1b[?1006h" : "\x1b[?1006l"
    }

    /**
     * Build capabilities object from version number
     */
    static getCapabilitiesFromVersion(version: number): CTermCapabilities {
        return {
            version,
            supportsFonts: version >= CTermVersions.FONTS,
            supportsSixel: version >= CTermVersions.SIXEL,
            supportsPalette: version >= CTermVersions.PALETTE,
            supportsMouseTracking: version >= CTermVersions.MODE_QUERY,
            supportsFontDimQuery: version >= CTermVersions.FONTDIM_QUERY,
            supportsB64Fonts: version >= CTermVersions.B64_FONTS,
            supportsCopyBuffers: version >= CTermVersions.COPY_BUFFERS,
            supportsJpegXl: version >= CTermVersions.JPEGXL,
            deviceAttributes: []
        }
    }

    /**
     * Get human-readable version string
     */
    static versionToString(version: number): string {
        const major = Math.floor(version / 1000)
        const minor = version % 1000
        return `${major}.${minor}`
    }

    /**
     * Parse version from string (e.g., "1.189")
     */
    static parseVersionString(versionStr: string): number {
        const parts = versionStr.split(".")
        if (parts.length >= 2) {
            const major = parseInt(parts[0], 10) || 0
            const minor = parseInt(parts[1], 10) || 0
            return major * 1000 + minor
        }
        return 0
    }
}
