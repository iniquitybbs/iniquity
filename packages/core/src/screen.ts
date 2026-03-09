/**
 * Screen Utilities
 * @module core/screen
 * @summary Terminal dimensions and centering utilities
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

import { screenBuffer, setScreenDimensions, ScreenBuffer } from "./screen-buffer"

/**
 * Default Iniquity terminal dimensions
 */
export const DEFAULT_WIDTH = 132
export const DEFAULT_HEIGHT = 37

// Mutable state for current resolution
let currentWidth = DEFAULT_WIDTH
let currentHeight = DEFAULT_HEIGHT

/**
 * Screen object providing terminal constants and positioning utilities
 */
export const screen = {
    /**
     * Get terminal width
     */
    get width(): number {
        return currentWidth
    },

    /**
     * Get terminal height
     */
    get height(): number {
        return currentHeight
    },

    /**
     * Set the terminal resolution
     * @param width - Terminal width in columns
     * @param height - Terminal height in rows
     */
    setResolution(width: number, height: number): void {
        currentWidth = width
        currentHeight = height
        setScreenDimensions(width, height)
    },

    /**
     * Reset to default Iniquity resolution (132x37)
     */
    resetResolution(): void {
        currentWidth = DEFAULT_WIDTH
        currentHeight = DEFAULT_HEIGHT
        setScreenDimensions(DEFAULT_WIDTH, DEFAULT_HEIGHT)
    },

    /**
     * Calculate X position to center an element horizontally
     * @param elementWidth - Width of the element to center
     * @returns X coordinate for centered positioning
     */
    centerX(elementWidth: number): number {
        return Math.floor((currentWidth - elementWidth) / 2)
    },

    /**
     * Calculate Y position to center an element vertically
     * @param elementHeight - Height of the element to center
     * @returns Y coordinate for centered positioning
     */
    centerY(elementHeight: number): number {
        return Math.floor((currentHeight - elementHeight) / 2)
    },

    /**
     * Calculate both X and Y positions to center an element
     * @param width - Width of the element
     * @param height - Height of the element
     * @returns Object with x and y coordinates for centered positioning
     */
    center(width: number, height: number): { x: number; y: number } {
        return {
            x: this.centerX(width),
            y: this.centerY(height)
        }
    },

    /**
     * Get the horizontal center point of the screen
     */
    get midX(): number {
        return Math.floor(currentWidth / 2)
    },

    /**
     * Get the vertical center point of the screen
     */
    get midY(): number {
        return Math.floor(currentHeight / 2)
    },

    // Re-export buffer management methods for backward compatibility
    ...screenBuffer
}

// Legacy exports for backwards compatibility
export const TERM_WIDTH = DEFAULT_WIDTH
export const TERM_HEIGHT = DEFAULT_HEIGHT

export type Screen = typeof screen
