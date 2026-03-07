/**
 * String Utilities
 * @module core/string-utils
 * @summary Opt-in string manipulation utilities (no global pollution)
 */

import { ANSI } from "./ansi"

/**
 * Add ANSI color to text
 * @param text - Text to colorize
 * @param color - Color name (e.g., 'cyan', 'bright red')
 * @returns Colorized text with ANSI codes
 *
 * @example
 * ```typescript
 * import { colorText } from '@iniquitybbs/core/utils'
 * const colored = colorText("Hello", "cyan")
 * ```
 */
export function colorText(text: string, color: string): string {
    return ANSI.color(color) + text + ANSI.reset()
}

/**
 * Center text within specified width
 * @param text - Text to center
 * @param width - Target width (defaults to 80)
 * @returns Centered text with padding
 *
 * @example
 * ```typescript
 * import { centerText } from '@iniquitybbs/core/utils'
 * const centered = centerText("Hello", 80)
 * ```
 */
export function centerText(text: string, width: number = 80): string {
    const visible = stripAnsi(text)
    if (visible.length >= width) return text

    const padding = Math.floor((width - visible.length) / 2)
    return " ".repeat(padding) + text
}

/**
 * Left-align text within specified width
 * @param text - Text to align
 * @param width - Target width (defaults to 80)
 * @returns Left-aligned text with right padding
 */
export function leftAlign(text: string, width: number = 80): string {
    const visible = stripAnsi(text)
    if (visible.length >= width) return text

    return text + " ".repeat(width - visible.length)
}

/**
 * Right-align text within specified width
 * @param text - Text to align
 * @param width - Target width (defaults to 80)
 * @returns Right-aligned text with left padding
 */
export function rightAlign(text: string, width: number = 80): string {
    const visible = stripAnsi(text)
    if (visible.length >= width) return text

    return " ".repeat(width - visible.length) + text
}

/**
 * Add newlines before text
 * @param text - Text to prepend newlines to
 * @param count - Number of newlines (defaults to 1)
 * @returns Text with newlines prepended
 */
export function addNewlines(text: string, count: number = 1): string {
    let result = ""
    for (let i = 0; i < count; i++) {
        result += "\r\n"
    }
    return result + text
}

/**
 * Strip ANSI escape codes from text
 * @param text - Text containing ANSI codes
 * @returns Text with ANSI codes removed
 *
 * @example
 * ```typescript
 * import { stripAnsi } from '@iniquitybbs/core/utils'
 * const plain = stripAnsi("\x1b[1;37mHello\x1b[0m")  // "Hello"
 * ```
 */
export function stripAnsi(text: string): string {
    return text.replace(/\x1b\[[0-9;]*m/g, "")
}

/**
 * Get visible length of text (excluding ANSI codes)
 * @param text - Text to measure
 * @returns Visible character count
 *
 * @example
 * ```typescript
 * import { visibleLength } from '@iniquitybbs/core/utils'
 * const len = visibleLength("\x1b[1;37mHello\x1b[0m")  // 5
 * ```
 */
export function visibleLength(text: string): number {
    return stripAnsi(text).length
}

/**
 * Truncate text to maximum length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add if truncated (defaults to '...')
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number, suffix: string = "..."): string {
    const visible = stripAnsi(text)
    if (visible.length <= maxLength) return text

    return visible.substring(0, maxLength - suffix.length) + suffix
}

/**
 * Pad text to specified length
 * @param text - Text to pad
 * @param length - Target length
 * @param char - Character to use for padding (defaults to space)
 * @param side - Side to pad ('left', 'right', or 'both')
 * @returns Padded text
 *
 * @example
 * ```typescript
 * import { padText } from '@iniquitybbs/core/utils'
 * const padded = padText("Hello", 10, ' ', 'right')  // "Hello     "
 * ```
 */
export function padText(text: string, length: number, char: string = " ", side: "left" | "right" | "both" = "right"): string {
    const visible = stripAnsi(text)
    if (visible.length >= length) return text

    const padding = length - visible.length

    if (side === "left") {
        return char.repeat(padding) + text
    } else if (side === "right") {
        return text + char.repeat(padding)
    } else {
        const leftPad = Math.floor(padding / 2)
        const rightPad = padding - leftPad
        return char.repeat(leftPad) + text + char.repeat(rightPad)
    }
}

/**
 * Position cursor at coordinates before displaying text
 * @param text - Text to display
 * @param x - X coordinate (1-based)
 * @param y - Y coordinate (1-based)
 * @returns Text with cursor positioning
 */
export function gotoxyText(text: string, x: number, y: number): string {
    return ANSI.gotoxy(x, y) + text
}

/**
 * Convert text to uppercase
 * @param text - Text to convert
 * @returns Uppercase text
 */
export function upperText(text: string): string {
    return text.toUpperCase()
}

/**
 * Convert text to lowercase
 * @param text - Text to convert
 * @returns Lowercase text
 */
export function lowerText(text: string): string {
    return text.toLowerCase()
}

/**
 * Convert text to title case
 * @param text - Text to convert
 * @returns Title-cased text
 */
export function titleText(text: string): string {
    return text.replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * Repeat text multiple times
 * @param text - Text to repeat
 * @param count - Number of repetitions
 * @returns Repeated text
 */
export function repeatText(text: string, count: number): string {
    return text.repeat(count)
}
