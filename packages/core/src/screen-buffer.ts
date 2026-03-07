/**
 * Screen Buffer Management
 * @module core/screen-buffer
 * @summary Screen buffer stack and background management for popup overlays
 */

import { Graphic } from "./graphic"
import { IQOutput } from "./output"

// Screen buffer stack for popup/overlay management
let screenStack: Graphic[] = []
let currentOutput: IQOutput | null = null
let currentBackground: Graphic | null = null

// Current screen dimensions (accessed from parent screen module)
let currentWidth = 132
let currentHeight = 37

/**
 * Update the current screen dimensions (called by screen module)
 * @internal
 */
export function setScreenDimensions(width: number, height: number): void {
    currentWidth = width
    currentHeight = height
}

/**
 * Screen buffer management object
 */
export const screenBuffer = {
    /**
     * Set the output interface for screen operations
     * @param output - The IQOutput to use for drawing
     */
    setOutput(output: IQOutput): void {
        currentOutput = output
    },

    /**
     * Get the current output interface
     */
    getOutput(): IQOutput | null {
        return currentOutput
    },

    /**
     * Set the current background graphic (e.g., from artwork rendering)
     * This is the base layer that popups overlay on top of
     * @param graphic - The background Graphic, or ANSI string to parse
     * @param processMCI - If true and graphic is a string, process MCI/pipe codes before parsing
     */
    setBackground(graphic: Graphic | string, processMCI: boolean = false): void {
        if (typeof graphic === "string") {
            currentBackground = new Graphic({ width: currentWidth, height: currentHeight })
            currentBackground.setANSI(graphic, processMCI)
        } else {
            currentBackground = graphic
        }
    },

    /**
     * Get the current background graphic
     */
    getBackground(): Graphic | null {
        return currentBackground
    },

    /**
     * Clear the background
     */
    clearBackground(): void {
        currentBackground = null
    },

    /**
     * Save the current screen region before showing a popup
     * @param x - X position (1-based)
     * @param y - Y position (1-based)
     * @param width - Width of region
     * @param height - Height of region
     * @returns Saved region data for restoration
     */
    saveRegion(x: number, y: number, width: number, height: number): { x: number; y: number; graphic: Graphic } | null {
        if (!currentBackground) {
            return null
        }

        // Create a graphic to hold the saved region
        const saved = new Graphic({ width, height })

        // Copy the region from the background
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                const cell = currentBackground.getData(x - 1 + col, y - 1 + row)
                if (cell.ch !== undefined && cell.attr !== undefined) {
                    saved.setData(col, row, cell.ch, cell.attr)
                }
            }
        }

        // Push to stack
        screenStack.push(saved)

        return { x, y, graphic: saved }
    },

    /**
     * Restore the most recently saved screen region
     * @returns true if a region was restored
     */
    restoreRegion(): boolean {
        if (screenStack.length === 0 || !currentOutput) {
            return false
        }

        // For now, just redraw the entire background
        // A more sophisticated implementation would track regions
        if (currentBackground) {
            currentBackground.draw(currentOutput, 1, 1)
        }

        screenStack.pop()
        return true
    },

    /**
     * Redraw the background (or a region of it)
     * @param x - Optional X position (1-based)
     * @param y - Optional Y position (1-based)
     * @param width - Optional width
     * @param height - Optional height
     */
    redraw(x?: number, y?: number, width?: number, height?: number): void {
        if (!currentBackground || !currentOutput) {
            return
        }

        if (x !== undefined && y !== undefined && width !== undefined && height !== undefined) {
            // Redraw specific region
            currentBackground.draw(currentOutput, x, y, width, height, x - 1, y - 1)
        } else {
            // Redraw entire background
            currentBackground.draw(currentOutput, 1, 1)
        }
    },

    /**
     * Get the number of saved regions on the stack
     */
    get stackDepth(): number {
        return screenStack.length
    },

    /**
     * Clear the saved region stack
     */
    clearStack(): void {
        screenStack = []
    },

    /**
     * Create a new Graphic buffer matching current screen dimensions
     * @returns A new Graphic instance
     */
    createBuffer(): Graphic {
        return new Graphic({ width: currentWidth, height: currentHeight })
    }
}

export type ScreenBuffer = typeof screenBuffer
