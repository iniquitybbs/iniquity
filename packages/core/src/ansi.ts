/**
 * ANSI Escape Sequence Utilities
 * @module runtime/ansi
 * @summary Utilities for generating ANSI escape sequences for terminal control
 */

/**
 * CGA Color attribute constants for cell-based graphics
 */
export const CGA = {
    BLACK: 0,
    BLUE: 1,
    GREEN: 2,
    CYAN: 3,
    RED: 4,
    MAGENTA: 5,
    BROWN: 6,
    LIGHTGRAY: 7,
    DARKGRAY: 8,
    LIGHTBLUE: 9,
    LIGHTGREEN: 10,
    LIGHTCYAN: 11,
    LIGHTRED: 12,
    LIGHTMAGENTA: 13,
    YELLOW: 14,
    WHITE: 15,
    
    HIGH: 0x08,
    BLINK: 0x80,
    
    BG_BLACK: 0x00,
    BG_BLUE: 0x10,
    BG_GREEN: 0x20,
    BG_CYAN: 0x30,
    BG_RED: 0x40,
    BG_MAGENTA: 0x50,
    BG_BROWN: 0x60,
    BG_LIGHTGRAY: 0x70
} as const

export class ANSI {
    /**
     * CGA attribute constants (re-exported for convenience)
     */
    static readonly CGA = CGA

    /**
     * Create a CGA attribute from foreground, background, and flags
     */
    static attr(fg: number, bg: number = 0, blink: boolean = false, high: boolean = false): number {
        let attr = (fg & 0x07) | ((bg & 0x07) << 4)
        if (high || fg >= 8) attr |= CGA.HIGH
        if (blink) attr |= CGA.BLINK
        return attr
    }

    /**
     * Convert CGA attribute to ANSI escape sequence
     */
    static attrToAnsi(attr: number): string {
        const fg = attr & 0x0f
        const bg = (attr >> 4) & 0x07
        const blink = (attr & CGA.BLINK) !== 0
        
        const fgMap: { [key: number]: number } = {
            0: 30, 1: 34, 2: 32, 3: 36, 4: 31, 5: 35, 6: 33, 7: 37,
            8: 90, 9: 94, 10: 92, 11: 96, 12: 91, 13: 95, 14: 93, 15: 97
        }
        
        const bgMap: { [key: number]: number } = {
            0: 40, 1: 44, 2: 42, 3: 46, 4: 41, 5: 45, 6: 43, 7: 47
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
        
        return `\x1b[${codes.join(';')}m`
    }

    /**
     * Clear the entire screen and move cursor to home position
     */
    static clearScreen(): string {
        return '\x1b[2J\x1b[H'
    }

    /**
     * Move cursor to specific position (1-indexed)
     */
    static gotoxy(x: number, y: number): string {
        return `\x1b[${y};${x}H`
    }

    /**
     * Reset all attributes
     */
    static reset(): string {
        return '\x1b[0m'
    }

    /**
     * Foreground colors
     */
    static colors = {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
        brightBlack: '\x1b[30;1m',
        brightRed: '\x1b[31;1m',
        brightGreen: '\x1b[32;1m',
        brightYellow: '\x1b[33;1m',
        brightBlue: '\x1b[34;1m',
        brightMagenta: '\x1b[35;1m',
        brightCyan: '\x1b[36;1m',
        brightWhite: '\x1b[37;1m'
    }

    /**
     * Background colors
     */
    static bgColors = {
        black: '\x1b[40m',
        red: '\x1b[41m',
        green: '\x1b[42m',
        yellow: '\x1b[43m',
        blue: '\x1b[44m',
        magenta: '\x1b[45m',
        cyan: '\x1b[46m',
        white: '\x1b[47m',
        brightBlack: '\x1b[40;1m',
        brightRed: '\x1b[41;1m',
        brightGreen: '\x1b[42;1m',
        brightYellow: '\x1b[43;1m',
        brightBlue: '\x1b[44;1m',
        brightMagenta: '\x1b[45;1m',
        brightCyan: '\x1b[46;1m',
        brightWhite: '\x1b[47;1m'
    }

    /**
     * Get color code by name
     */
    static color(name: string): string {
        const lowerName = name.toLowerCase()
        
        // Handle background colors
        if (lowerName.startsWith('background ')) {
            const colorName = lowerName.replace('background ', '').replace(' ', '')
            const camelCase = colorName.replace(/bright(\w)/, (_, c) => 'bright' + c.toUpperCase())
            return (ANSI.bgColors as Record<string, string>)[camelCase] || ANSI.reset()
        }
        
        // Handle foreground colors
        const camelCase = lowerName.replace(/bright\s+(\w)/, (_, c) => 'bright' + c.toUpperCase())
        return (ANSI.colors as Record<string, string>)[camelCase] || ANSI.reset()
    }

    /**
     * Cursor movement
     */
    static cursor = {
        up: (n: number = 1) => `\x1b[${n}A`,
        down: (n: number = 1) => `\x1b[${n}B`,
        right: (n: number = 1) => `\x1b[${n}C`,
        left: (n: number = 1) => `\x1b[${n}D`,
        hide: () => '\x1b[?25l',
        show: () => '\x1b[?25h',
        save: () => '\x1b[s',
        restore: () => '\x1b[u'
    }

    /**
     * Telnet protocol commands
     */
    static telnet = {
        IAC: 255,   // Interpret As Command
        DONT: 254,
        DO: 253,
        WONT: 252,
        WILL: 251,
        SB: 250,    // Subnegotiation Begin
        SE: 240,    // Subnegotiation End
        ECHO: 1,
        SUPPRESS_GO_AHEAD: 3,
        TERMINAL_TYPE: 24,
        NAWS: 31,   // Negotiate About Window Size
        LINEMODE: 34
    }

    /**
     * Create Telnet negotiation sequence
     */
    static telnetCommand(command: number, option: number): Buffer {
        return Buffer.from([ANSI.telnet.IAC, command, option])
    }

    /**
     * iCE Colors - Blink to Bright Intensity
     * Converts blink attribute (bit 7) to bright background colors
     * Essential for most modern BBS ANSI art
     */
    static enableIceColors(): string {
        return '\x1b[?33h'
    }

    static disableIceColors(): string {
        return '\x1b[?33l'
    }

    /**
     * SyncTERM/CTerm Font Table
     * Maps font names to their ESC sequence codes
     * See: https://github.com/protomouse/synchronet/blob/master/src/conio/cterm.txt
     */
    static syncTermFonts: { [key: string]: number } = {
        'cp437': 0,
        'cp1251': 1,
        'koi8_r': 2,
        'iso8859_2': 3,
        'iso8859_4': 4,
        'cp866': 5,
        'iso8859_9': 6,
        'haik8': 7,
        'iso8859_8': 8,
        'koi8_u': 9,
        'iso8859_15': 10,
        'koi8_r_b': 12,
        'iso8859_5': 14,
        'armscii_8': 15,
        'cp850': 17,
        'cp885': 19,
        'iso8859_7': 21,
        'koi8_r_c': 22,
        'iso8859_1': 24,
        'cp1131': 31,
        'c64_upper': 32,
        'c64_lower': 33,
        'c128_upper': 34,
        'c128_lower': 35,
        'atari': 36,
        'pot_noodle': 37,
        'mo_soul': 38,
        'microknight_plus': 39,
        'topaz_plus': 40,
        'microknight': 41,
        'topaz': 42
    }

    /**
     * Font alias mapping for SAUCE compatibility
     * Maps common SAUCE font names to SyncTERM font names
     */
    static fontAliases: { [key: string]: string } = {
        'cp437': 'cp437',
        'ibm vga': 'cp437',
        'ibm_vga': 'cp437',
        'ibmpc': 'cp437',
        'ibm pc': 'cp437',
        'ibm_pc': 'cp437',
        'pc': 'cp437',
        'cp437 art': 'cp437',
        'ibmpc art': 'cp437',
        'ibm pc art': 'cp437',
        'msdos art': 'cp437',
        'pc art': 'cp437',
        'ibm vga50': 'cp437',
        'ibm vga25g': 'cp437',
        'ibm ega': 'cp437',
        'ibm ega43': 'cp437',
        'topaz': 'topaz',
        'amiga topaz 1': 'topaz',
        'amiga topaz 1+': 'topaz_plus',
        'topaz plus': 'topaz_plus',
        'topaz+': 'topaz_plus',
        'amiga topaz 2': 'topaz',
        'amiga topaz 2+': 'topaz_plus',
        'pot noodle': 'pot_noodle',
        'p0t noodle': 'pot_noodle',
        'p0tnoodle': 'pot_noodle',
        'amiga p0t-noodle': 'pot_noodle',
        'mo soul': 'mo_soul',
        'mosoul': 'mo_soul',
        "mo'soul": 'mo_soul',
        'amiga mosoul': 'mo_soul',
        'amiga microknight': 'microknight',
        'amiga microknight+': 'microknight_plus',
        'microknight+': 'microknight_plus',
        'atari': 'atari',
        'atarist': 'atari',
        'c64': 'c64_upper',
        'commodore 64': 'c64_upper',
        'c128': 'c128_upper',
        'commodore 128': 'c128_upper'
    }

    /**
     * Set SyncTERM font
     * @param fontName Font name (from syncTermFonts table)
     * @param page Font page (0-3, default 0)
     */
    static setSyncTermFont(fontName: string, page: number = 0): string {
        const fontCode = ANSI.syncTermFonts[fontName.toLowerCase()]
        if (fontCode !== undefined && page >= 0 && page <= 3) {
            return `\x1b[${page};${fontCode} D`
        }
        return ''
    }

    /**
     * Get SyncTERM font name from alias (e.g., SAUCE font name)
     */
    static getFontFromAlias(alias: string): string | undefined {
        const normalized = alias.toLowerCase().replace(/\s+/g, ' ')
        return ANSI.fontAliases[normalized]
    }

    /**
     * Set SyncTERM font using alias (handles SAUCE font names)
     */
    static setSyncTermFontWithAlias(aliasOrName: string, page: number = 0): string {
        const fontName = ANSI.getFontFromAlias(aliasOrName) || aliasOrName
        return ANSI.setSyncTermFont(fontName, page)
    }

    /**
     * Set emulated baud rate (CTerm/SyncTERM)
     * @param rate Baud rate (300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 76800, 115200, or 0/'unlimited')
     */
    static setEmulatedBaudRate(rate: number | string): string {
        const speedMap: { [key: string]: number } = {
            'unlimited': 0, 'off': 0, '0': 0,
            '300': 1, '600': 2, '1200': 3, '2400': 4,
            '4800': 5, '9600': 6, '19200': 7,
            '38400': 8, '57600': 9, '76800': 10, '115200': 11
        }
        
        const speed = speedMap[String(rate)] || 0
        return speed === 0 ? '\x1b[*r' : `\x1b[1;${speed}*r`
    }

    /**
     * Cursor style control (DEC)
     */
    static cursorStyles: { [key: string]: number } = {
        'blinking block': 0,
        'default': 1,
        'steady block': 2,
        'blinking underline': 3,
        'steady underline': 4,
        'blinking bar': 5,
        'steady bar': 6
    }

    static setCursorStyle(style: string): string {
        const code = ANSI.cursorStyles[style.toLowerCase()]
        if (code !== undefined) {
            return `\x1b[${code} q`
        }
        return ''
    }

    /**
     * Query device attributes (for terminal detection)
     */
    static queryDeviceAttributes(): string {
        return '\x1b[c'
    }

    /**
     * Hide cursor (non-standard, widely supported)
     */
    static hideCursor(): string {
        return '\x1b[?25l'
    }

    /**
     * Show cursor (non-standard, widely supported)
     */
    static showCursor(): string {
        return '\x1b[?25h'
    }
}
