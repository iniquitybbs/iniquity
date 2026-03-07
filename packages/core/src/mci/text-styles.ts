/**
 * Text Styles
 * @module runtime/mci/text-styles
 * @summary ENiGMA-inspired text transformations (l33t, title, upper, etc.)
 */

export type TextStyleName =
    | "normal"
    | "upper"
    | "lower"
    | "title"
    | "firstLower"
    | "smallVowels"
    | "bigVowels"
    | "smallI"
    | "mixed"
    | "l33t"
    | "reverse"
    | "alternating"
    | "wave"

export type TextStyleFunction = (text: string) => string

const VOWELS = "aeiouAEIOU"

const L33T_MAP: Record<string, string> = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5",
    t: "7",
    T: "7",
    b: "8",
    B: "8",
    g: "9",
    G: "9",
    l: "1",
    L: "1"
}

export function styleNormal(text: string): string {
    return text
}

export function styleUpper(text: string): string {
    return text.toUpperCase()
}

export function styleLower(text: string): string {
    return text.toLowerCase()
}

export function styleTitle(text: string): string {
    return text.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    })
}

export function styleFirstLower(text: string): string {
    return text.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toLowerCase() + word.substring(1).toUpperCase()
    })
}

export function styleSmallVowels(text: string): string {
    let result = ""
    for (const char of text) {
        if (VOWELS.includes(char)) {
            result += char.toLowerCase()
        } else {
            result += char.toUpperCase()
        }
    }
    return result
}

export function styleBigVowels(text: string): string {
    let result = ""
    for (const char of text) {
        if (VOWELS.includes(char)) {
            result += char.toUpperCase()
        } else {
            result += char.toLowerCase()
        }
    }
    return result
}

export function styleSmallI(text: string): string {
    let result = ""
    for (const char of text) {
        if (char === "i" || char === "I") {
            result += "i"
        } else {
            result += char.toUpperCase()
        }
    }
    return result
}

export function styleMixed(text: string): string {
    let result = ""
    for (const char of text) {
        if (/[a-zA-Z]/.test(char)) {
            result += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
        } else {
            result += char
        }
    }
    return result
}

export function styleL33t(text: string): string {
    let result = ""
    for (const char of text) {
        result += L33T_MAP[char] || char.toLowerCase()
    }
    return result
}

export function styleReverse(text: string): string {
    return text.split("").reverse().join("")
}

export function styleAlternating(text: string): string {
    let result = ""
    let upper = true
    for (const char of text) {
        if (/[a-zA-Z]/.test(char)) {
            result += upper ? char.toUpperCase() : char.toLowerCase()
            upper = !upper
        } else {
            result += char
        }
    }
    return result
}

export function styleWave(text: string): string {
    let result = ""
    let letterIndex = 0
    for (const char of text) {
        if (/[a-zA-Z]/.test(char)) {
            const phase = Math.sin(letterIndex * 0.5)
            result += phase > 0 ? char.toUpperCase() : char.toLowerCase()
            letterIndex++
        } else {
            result += char
        }
    }
    return result
}

export const TEXT_STYLES: Record<TextStyleName, TextStyleFunction> = {
    normal: styleNormal,
    upper: styleUpper,
    lower: styleLower,
    title: styleTitle,
    firstLower: styleFirstLower,
    smallVowels: styleSmallVowels,
    bigVowels: styleBigVowels,
    smallI: styleSmallI,
    mixed: styleMixed,
    l33t: styleL33t,
    reverse: styleReverse,
    alternating: styleAlternating,
    wave: styleWave
}

const STYLE_ALIASES: Record<string, TextStyleName> = {
    toUpperCase: "upper",
    styleUpper: "upper",
    UPPER: "upper",
    toLowerCase: "lower",
    styleLower: "lower",
    LOWER: "lower",
    styleTitle: "title",
    TITLE: "title",
    titleCase: "title",
    styleFirstLower: "firstLower",
    FIRSTLOWER: "firstLower",
    styleSmallVowels: "smallVowels",
    SMALLVOWELS: "smallVowels",
    styleBigVowels: "bigVowels",
    BIGVOWELS: "bigVowels",
    styleSmallI: "smallI",
    SMALLI: "smallI",
    styleMixed: "mixed",
    MIXED: "mixed",
    random: "mixed",
    styleL33t: "l33t",
    L33T: "l33t",
    leet: "l33t",
    LEET: "l33t",
    styleReverse: "reverse",
    REVERSE: "reverse",
    backwards: "reverse",
    styleAlternating: "alternating",
    ALTERNATING: "alternating",
    styleWave: "wave",
    WAVE: "wave"
}

export function getTextStyle(name: string): TextStyleFunction | undefined {
    const normalizedName = name.toLowerCase() as TextStyleName
    if (TEXT_STYLES[normalizedName]) {
        return TEXT_STYLES[normalizedName]
    }

    const aliasedName = STYLE_ALIASES[name]
    if (aliasedName) {
        return TEXT_STYLES[aliasedName]
    }

    return undefined
}

export function applyTextStyle(text: string, styleName: string): string {
    const style = getTextStyle(styleName)
    if (style) {
        return style(text)
    }
    return text
}

export function listTextStyles(): TextStyleName[] {
    return Object.keys(TEXT_STYLES) as TextStyleName[]
}

export function isValidTextStyle(name: string): boolean {
    return getTextStyle(name) !== undefined
}

export class TextStyleProcessor {
    private customStyles: Map<string, TextStyleFunction> = new Map()

    apply(text: string, styleName: string): string {
        const customStyle = this.customStyles.get(styleName.toLowerCase())
        if (customStyle) {
            return customStyle(text)
        }

        return applyTextStyle(text, styleName)
    }

    registerStyle(name: string, fn: TextStyleFunction): void {
        this.customStyles.set(name.toLowerCase(), fn)
    }

    unregisterStyle(name: string): boolean {
        return this.customStyles.delete(name.toLowerCase())
    }

    listStyles(): string[] {
        const builtIn = listTextStyles()
        const custom = Array.from(this.customStyles.keys())
        return [...builtIn, ...custom]
    }

    hasStyle(name: string): boolean {
        return this.customStyles.has(name.toLowerCase()) || isValidTextStyle(name)
    }
}
