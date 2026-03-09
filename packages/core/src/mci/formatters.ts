/**
 * Format Modifiers
 * @module runtime/mci/formatters
 * @summary Synchronet-style format modifiers (L/R/C/Z/W/T/U)
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

export type FormatModifier = "L" | "R" | "C" | "Z" | "W" | "T" | "U" | ">"

export interface FormatOptions {
    modifier?: FormatModifier
    width?: number
    allowWrap?: boolean
}

export interface ParsedFormat {
    code: string
    modifier?: FormatModifier
    width?: number
    param?: string
}

export function parseFormatModifier(codeWithModifier: string): ParsedFormat {
    const pipeMatch = codeWithModifier.match(/^([A-Z_][A-Z0-9_]*)\|([LRCZWTU>])(\d*)$/i)
    if (pipeMatch) {
        return {
            code: pipeMatch[1].toUpperCase(),
            modifier: pipeMatch[2].toUpperCase() as FormatModifier,
            width: pipeMatch[3] ? parseInt(pipeMatch[3], 10) : undefined
        }
    }

    const hyphenMatch = codeWithModifier.match(/^([A-Z_][A-Z0-9_]*)-([LRCZWTU>])(\d*)$/i)
    if (hyphenMatch) {
        return {
            code: hyphenMatch[1].toUpperCase(),
            modifier: hyphenMatch[2].toUpperCase() as FormatModifier,
            width: hyphenMatch[3] ? parseInt(hyphenMatch[3], 10) : undefined
        }
    }

    const colonMatch = codeWithModifier.match(/^([A-Z_][A-Z0-9_]*):(.+)$/i)
    if (colonMatch) {
        return {
            code: colonMatch[1].toUpperCase(),
            param: colonMatch[2]
        }
    }

    return { code: codeWithModifier.toUpperCase() }
}

export function applyFormat(value: string, options: FormatOptions): string {
    let result = value

    if (options.modifier === "U") {
        result = result.toUpperCase()
    }

    if (options.modifier === "T") {
        result = addThousandsSeparator(result)
    }

    if (options.modifier === "W") {
        result = toFullWidth(result)
    }

    if (options.width && options.width > 0) {
        switch (options.modifier) {
            case "L":
                result = leftJustify(result, options.width)
                break
            case "R":
                result = rightJustify(result, options.width)
                break
            case "C":
                result = center(result, options.width)
                break
            case "Z":
                result = zeroPad(result, options.width)
                break
            default:
                if (!options.allowWrap && result.length > options.width) {
                    result = result.substring(0, options.width)
                }
        }
    }

    return result
}

export function leftJustify(text: string, width: number): string {
    if (text.length >= width) {
        return text.substring(0, width)
    }
    return text + " ".repeat(width - text.length)
}

export function rightJustify(text: string, width: number): string {
    if (text.length >= width) {
        return text.substring(0, width)
    }
    return " ".repeat(width - text.length) + text
}

export function center(text: string, width: number): string {
    if (text.length >= width) {
        return text.substring(0, width)
    }
    const totalPadding = width - text.length
    const leftPadding = Math.floor(totalPadding / 2)
    const rightPadding = totalPadding - leftPadding
    return " ".repeat(leftPadding) + text + " ".repeat(rightPadding)
}

export function zeroPad(text: string, width: number): string {
    const numericPart = text.replace(/[^0-9.-]/g, "")
    const isNegative = numericPart.startsWith("-")
    const absValue = isNegative ? numericPart.substring(1) : numericPart

    if (absValue.length >= width) {
        return (isNegative ? "-" : "") + absValue.substring(0, width)
    }

    const padded = "0".repeat(width - absValue.length) + absValue
    return isNegative ? "-" + padded : padded
}

export function addThousandsSeparator(text: string, separator: string = ","): string {
    const num = parseFloat(text)
    if (isNaN(num)) return text

    const parts = num.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return parts.join(".")
}

const FULLWIDTH_MAP: Record<string, string> = {
    " ": "\u3000",
    "!": "\uFF01",
    '"': "\uFF02",
    "#": "\uFF03",
    $: "\uFF04",
    "%": "\uFF05",
    "&": "\uFF06",
    "'": "\uFF07",
    "(": "\uFF08",
    ")": "\uFF09",
    "*": "\uFF0A",
    "+": "\uFF0B",
    ",": "\uFF0C",
    "-": "\uFF0D",
    ".": "\uFF0E",
    "/": "\uFF0F",
    "0": "\uFF10",
    "1": "\uFF11",
    "2": "\uFF12",
    "3": "\uFF13",
    "4": "\uFF14",
    "5": "\uFF15",
    "6": "\uFF16",
    "7": "\uFF17",
    "8": "\uFF18",
    "9": "\uFF19",
    ":": "\uFF1A",
    ";": "\uFF1B",
    "<": "\uFF1C",
    "=": "\uFF1D",
    ">": "\uFF1E",
    "?": "\uFF1F",
    "@": "\uFF20",
    A: "\uFF21",
    B: "\uFF22",
    C: "\uFF23",
    D: "\uFF24",
    E: "\uFF25",
    F: "\uFF26",
    G: "\uFF27",
    H: "\uFF28",
    I: "\uFF29",
    J: "\uFF2A",
    K: "\uFF2B",
    L: "\uFF2C",
    M: "\uFF2D",
    N: "\uFF2E",
    O: "\uFF2F",
    P: "\uFF30",
    Q: "\uFF31",
    R: "\uFF32",
    S: "\uFF33",
    T: "\uFF34",
    U: "\uFF35",
    V: "\uFF36",
    W: "\uFF37",
    X: "\uFF38",
    Y: "\uFF39",
    Z: "\uFF3A",
    "[": "\uFF3B",
    "\\": "\uFF3C",
    "]": "\uFF3D",
    "^": "\uFF3E",
    _: "\uFF3F",
    "`": "\uFF40",
    a: "\uFF41",
    b: "\uFF42",
    c: "\uFF43",
    d: "\uFF44",
    e: "\uFF45",
    f: "\uFF46",
    g: "\uFF47",
    h: "\uFF48",
    i: "\uFF49",
    j: "\uFF4A",
    k: "\uFF4B",
    l: "\uFF4C",
    m: "\uFF4D",
    n: "\uFF4E",
    o: "\uFF4F",
    p: "\uFF50",
    q: "\uFF51",
    r: "\uFF52",
    s: "\uFF53",
    t: "\uFF54",
    u: "\uFF55",
    v: "\uFF56",
    w: "\uFF57",
    x: "\uFF58",
    y: "\uFF59",
    z: "\uFF5A",
    "{": "\uFF5B",
    "|": "\uFF5C",
    "}": "\uFF5D",
    "~": "\uFF5E"
}

export function toFullWidth(text: string): string {
    let result = ""
    for (const char of text) {
        result += FULLWIDTH_MAP[char] || char
    }
    return result
}

export function toHalfWidth(text: string): string {
    const reverseMap: Record<string, string> = {}
    for (const [half, full] of Object.entries(FULLWIDTH_MAP)) {
        reverseMap[full] = half
    }

    let result = ""
    for (const char of text) {
        result += reverseMap[char] || char
    }
    return result
}

export function truncate(text: string, maxLength: number, ellipsis: string = "..."): string {
    if (text.length <= maxLength) return text
    if (maxLength <= ellipsis.length) return text.substring(0, maxLength)
    return text.substring(0, maxLength - ellipsis.length) + ellipsis
}

export function stripAnsi(text: string): string {
    return text.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, "")
}

export function visibleLength(text: string): number {
    return stripAnsi(text).length
}

export function padToVisibleWidth(text: string, width: number, align: "left" | "right" | "center" = "left"): string {
    const visible = visibleLength(text)
    if (visible >= width) return text

    const padding = width - visible
    switch (align) {
        case "right":
            return " ".repeat(padding) + text
        case "center":
            const left = Math.floor(padding / 2)
            const right = padding - left
            return " ".repeat(left) + text + " ".repeat(right)
        default:
            return text + " ".repeat(padding)
    }
}
