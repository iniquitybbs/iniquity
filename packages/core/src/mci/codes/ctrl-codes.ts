/**
 * Control Codes Handler
 * @module runtime/mci/codes/ctrl-codes
 * @summary Screen and flow control codes (|CS, |PA, |DE, etc.)
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

const ESC = "\x1b"

export type ControlCodeAction =
    | { type: "ansi"; sequence: string }
    | { type: "pause" }
    | { type: "pause_message"; message?: string }
    | { type: "delay"; ms: number }
    | { type: "pause_off" }
    | { type: "pause_on" }
    | { type: "pause_reset" }
    | { type: "abort" }
    | { type: "noop" }

export interface ControlCodeDefinition {
    code: string
    aliases?: string[]
    description: string
    action: ControlCodeAction
}

export const controlCodes: ControlCodeDefinition[] = [
    { code: "CS", aliases: ["CLS", "L"], description: "Clear screen", action: { type: "ansi", sequence: `${ESC}[2J${ESC}[H` } },
    { code: "CL", aliases: ["CLRLINE"], description: "Clear line", action: { type: "ansi", sequence: `\r${ESC}[K` } },
    { code: "CE", aliases: ["CLR2EOL", "CLREOL"], description: "Clear to end of line", action: { type: "ansi", sequence: `${ESC}[K` } },
    { code: "CJ", aliases: ["CLR2EOS", "CLREOS"], description: "Clear to end of screen", action: { type: "ansi", sequence: `${ESC}[J` } },
    { code: "CR", description: "Carriage return", action: { type: "ansi", sequence: "\r" } },
    { code: "NL", aliases: ["CRLF"], description: "New line", action: { type: "ansi", sequence: "\r\n" } },
    { code: "LF", description: "Line feed", action: { type: "ansi", sequence: "\n" } },
    { code: "HM", aliases: ["HOME"], description: "Home cursor", action: { type: "ansi", sequence: `${ESC}[H` } },
    { code: "PA", aliases: ["PAUSE", "MORE", "P"], description: "Pause (press any key)", action: { type: "pause" } },
    { code: "PW", description: "Pause with message", action: { type: "pause_message" } },
    { code: "PK", aliases: ["GETKEY", "CONTINUE"], description: "Wait for key", action: { type: "pause" } },
    { code: "DE", description: "Short delay (500ms)", action: { type: "delay", ms: 500 } },
    { code: "DM", description: "Medium delay (1000ms)", action: { type: "delay", ms: 1000 } },
    { code: "DL", description: "Long delay (2000ms)", action: { type: "delay", ms: 2000 } },
    { code: "PO", aliases: ["POFF", "NOPAUSE"], description: "Pause off", action: { type: "pause_off" } },
    { code: "PN", aliases: ["PON", "AUTOMORE"], description: "Pause on", action: { type: "pause_on" } },
    { code: "RP", aliases: ["RESETPAUSE"], description: "Reset pause counter", action: { type: "pause_reset" } },
    { code: "RS", aliases: ["RESET", "N"], description: "Reset attributes", action: { type: "ansi", sequence: `${ESC}[0m` } },
    { code: "BL", aliases: ["BEEP", "BELL"], description: "Terminal beep", action: { type: "ansi", sequence: "\x07" } },
    { code: "BS", aliases: ["BCKSPC"], description: "Backspace", action: { type: "ansi", sequence: "\x08" } },
    { code: "TB", aliases: ["TAB"], description: "Tab", action: { type: "ansi", sequence: "\t" } },
    { code: "AB", aliases: ["ABORT", "EOF", "Z"], description: "Abort/end of file", action: { type: "abort" } },
    { code: "SV", aliases: ["PUSHXY"], description: "Save cursor position", action: { type: "ansi", sequence: `${ESC}[s` } },
    { code: "RT", aliases: ["POPXY"], description: "Restore cursor position", action: { type: "ansi", sequence: `${ESC}[u` } },
    { code: "HC", aliases: ["HIDECURSOR"], description: "Hide cursor", action: { type: "ansi", sequence: `${ESC}[?25l` } },
    { code: "SC", aliases: ["SHOWCURSOR"], description: "Show cursor", action: { type: "ansi", sequence: `${ESC}[?25h` } }
]

export class ControlCodeProcessor {
    private codeMap: Map<string, ControlCodeDefinition> = new Map()
    private pauseEnabled: boolean = true
    private lineCount: number = 0
    private pageLength: number = 23

    constructor() {
        this.buildCodeMap()
    }

    private buildCodeMap(): void {
        for (const def of controlCodes) {
            this.codeMap.set(def.code.toUpperCase(), def)
            if (def.aliases) {
                for (const alias of def.aliases) {
                    this.codeMap.set(alias.toUpperCase(), def)
                }
            }
        }
    }

    getAction(code: string): ControlCodeAction | null {
        const def = this.codeMap.get(code.toUpperCase())
        return def?.action || null
    }

    processCode(code: string): ControlCodeAction | null {
        const action = this.getAction(code)
        if (!action) return null

        switch (action.type) {
            case "pause_off":
                this.pauseEnabled = false
                return { type: "noop" }
            case "pause_on":
                this.pauseEnabled = true
                return { type: "noop" }
            case "pause_reset":
                this.lineCount = 0
                return { type: "noop" }
            default:
                return action
        }
    }

    processParameterizedCode(code: string, param: string): ControlCodeAction | null {
        const upperCode = code.toUpperCase()
        const num = parseInt(param, 10)

        switch (upperCode) {
            case "UP":
                return { type: "ansi", sequence: `${ESC}[${num || 1}A` }
            case "DOWN":
            case "DN":
                return { type: "ansi", sequence: `${ESC}[${num || 1}B` }
            case "RIGHT":
            case "FW":
                return { type: "ansi", sequence: `${ESC}[${num || 1}C` }
            case "LEFT":
            case "BK":
                return { type: "ansi", sequence: `${ESC}[${num || 1}D` }
            case "POS":
            case "COL":
                return { type: "ansi", sequence: `${ESC}[${num || 1}G` }
            case "ROW":
                return { type: "ansi", sequence: `${ESC}[${num || 1}d` }
            case "DELAY":
            case "WAIT":
                return { type: "delay", ms: (num || 1) * 100 }
            default:
                return null
        }
    }

    processGotoxy(x: number, y: number): ControlCodeAction {
        return { type: "ansi", sequence: `${ESC}[${y};${x}H` }
    }

    isPauseEnabled(): boolean {
        return this.pauseEnabled
    }

    setPauseEnabled(enabled: boolean): void {
        this.pauseEnabled = enabled
    }

    getLineCount(): number {
        return this.lineCount
    }

    incrementLineCount(lines: number = 1): void {
        this.lineCount += lines
    }

    resetLineCount(): void {
        this.lineCount = 0
    }

    shouldAutoPause(): boolean {
        return this.pauseEnabled && this.lineCount >= this.pageLength
    }

    setPageLength(length: number): void {
        this.pageLength = length
    }

    getPageLength(): number {
        return this.pageLength
    }

    listCodes(): string[] {
        return Array.from(this.codeMap.keys())
    }
}

export function cursorUp(n: number = 1): string {
    return `${ESC}[${n}A`
}

export function cursorDown(n: number = 1): string {
    return `${ESC}[${n}B`
}

export function cursorRight(n: number = 1): string {
    return `${ESC}[${n}C`
}

export function cursorLeft(n: number = 1): string {
    return `${ESC}[${n}D`
}

export function cursorPosition(x: number, y: number): string {
    return `${ESC}[${y};${x}H`
}

export function clearScreen(): string {
    return `${ESC}[2J${ESC}[H`
}

export function clearLine(): string {
    return `\r${ESC}[K`
}

export function clearToEndOfLine(): string {
    return `${ESC}[K`
}

export function clearToEndOfScreen(): string {
    return `${ESC}[J`
}

export function saveCursor(): string {
    return `${ESC}[s`
}

export function restoreCursor(): string {
    return `${ESC}[u`
}

export function hideCursor(): string {
    return `${ESC}[?25l`
}

export function showCursor(): string {
    return `${ESC}[?25h`
}

export function resetAttributes(): string {
    return `${ESC}[0m`
}
