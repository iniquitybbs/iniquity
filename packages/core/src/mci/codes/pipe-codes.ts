/**
 * Pipe Color Codes Handler
 * @module runtime/mci/codes/pipe-codes
 * @summary Oblivion/2 and Synchronet compatible pipe color codes
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

const FOREGROUND_COLORS: Record<number, string> = {
    0: `${ESC}[0;30m`, // Black
    1: `${ESC}[0;34m`, // Dark Blue
    2: `${ESC}[0;32m`, // Dark Green
    3: `${ESC}[0;36m`, // Dark Cyan
    4: `${ESC}[0;31m`, // Dark Red
    5: `${ESC}[0;35m`, // Dark Magenta
    6: `${ESC}[0;33m`, // Brown/Dark Yellow
    7: `${ESC}[0;37m`, // Light Gray
    8: `${ESC}[1;30m`, // Dark Gray (bright black)
    9: `${ESC}[1;34m`, // Light Blue
    10: `${ESC}[1;32m`, // Light Green
    11: `${ESC}[1;36m`, // Light Cyan
    12: `${ESC}[1;31m`, // Light Red
    13: `${ESC}[1;35m`, // Light Magenta
    14: `${ESC}[1;33m`, // Yellow
    15: `${ESC}[1;37m` // White
}

const BACKGROUND_COLORS: Record<number, string> = {
    16: `${ESC}[40m`, // Black background
    17: `${ESC}[44m`, // Blue background
    18: `${ESC}[42m`, // Green background
    19: `${ESC}[46m`, // Cyan background
    20: `${ESC}[41m`, // Red background
    21: `${ESC}[45m`, // Magenta background
    22: `${ESC}[43m`, // Brown/Yellow background
    23: `${ESC}[47m` // Light Gray background
}

const CTRL_A_FOREGROUND: Record<string, string> = {
    K: `${ESC}[0;30m`, // Black
    R: `${ESC}[0;31m`, // Red
    G: `${ESC}[0;32m`, // Green
    Y: `${ESC}[0;33m`, // Yellow/Brown
    B: `${ESC}[0;34m`, // Blue
    M: `${ESC}[0;35m`, // Magenta
    C: `${ESC}[0;36m`, // Cyan
    W: `${ESC}[0;37m` // White/Gray
}

const CTRL_A_BACKGROUND: Record<string, string> = {
    "0": `${ESC}[40m`, // Black
    "1": `${ESC}[41m`, // Red
    "2": `${ESC}[42m`, // Green
    "3": `${ESC}[43m`, // Yellow/Brown
    "4": `${ESC}[44m`, // Blue
    "5": `${ESC}[45m`, // Magenta
    "6": `${ESC}[46m`, // Cyan
    "7": `${ESC}[47m` // White/Gray
}

const CTRL_A_ATTRIBUTES: Record<string, string> = {
    H: `${ESC}[1m`, // High intensity (bold)
    I: `${ESC}[5m`, // Blink
    N: `${ESC}[0m`, // Normal (reset)
    E: `${ESC}[5m`, // Bright background (ICE colors via blink)
    "-": `${ESC}[0m`, // Optimized normal
    _: `${ESC}[0m` // Optimized normal (blink/bg only)
}

export interface PipeCodeResult {
    ansi: string
    length: number
}

export class PipeCodeProcessor {
    private currentForeground: number = 7
    private currentBackground: number = 0
    private highIntensity: boolean = false
    private blinking: boolean = false

    processPipeCode(code: string): PipeCodeResult | null {
        if (code.length < 2) return null

        const num = parseInt(code, 10)
        if (!isNaN(num)) {
            if (num >= 0 && num <= 15) {
                this.currentForeground = num
                this.highIntensity = num >= 8
                return { ansi: FOREGROUND_COLORS[num], length: 2 }
            }
            if (num >= 16 && num <= 23) {
                this.currentBackground = num - 16
                return { ansi: BACKGROUND_COLORS[num], length: 2 }
            }
        }

        const letter = code.charAt(0).toUpperCase()

        if (CTRL_A_FOREGROUND[letter]) {
            return { ansi: CTRL_A_FOREGROUND[letter], length: 1 }
        }
        if (CTRL_A_BACKGROUND[letter]) {
            return { ansi: CTRL_A_BACKGROUND[letter], length: 1 }
        }
        if (CTRL_A_ATTRIBUTES[letter]) {
            if (letter === "H") this.highIntensity = true
            if (letter === "I") this.blinking = true
            if (letter === "N" || letter === "-" || letter === "_") {
                this.highIntensity = false
                this.blinking = false
            }
            return { ansi: CTRL_A_ATTRIBUTES[letter], length: 1 }
        }

        return null
    }

    process(text: string): string {
        let result = ""
        let i = 0

        while (i < text.length) {
            if (text[i] === "|" && i + 1 < text.length) {
                const remaining = text.substring(i + 1)

                if (remaining.length >= 2 && /^\d{2}/.test(remaining)) {
                    const code = remaining.substring(0, 2)
                    const processed = this.processPipeCode(code)
                    if (processed) {
                        result += processed.ansi
                        i += 1 + processed.length
                        continue
                    }
                }

                const processed = this.processPipeCode(remaining)
                if (processed) {
                    result += processed.ansi
                    i += 1 + processed.length
                    continue
                }
            }

            result += text[i]
            i++
        }

        return result
    }

    reset(): void {
        this.currentForeground = 7
        this.currentBackground = 0
        this.highIntensity = false
        this.blinking = false
    }

    getResetSequence(): string {
        return `${ESC}[0m`
    }
}

export function pipeToAnsi(code: number): string {
    if (code >= 0 && code <= 15) {
        return FOREGROUND_COLORS[code]
    }
    if (code >= 16 && code <= 23) {
        return BACKGROUND_COLORS[code]
    }
    return ""
}

export function ctrlAToAnsi(code: string): string {
    const upper = code.toUpperCase()
    return CTRL_A_FOREGROUND[upper] || CTRL_A_BACKGROUND[upper] || CTRL_A_ATTRIBUTES[upper] || ""
}
