/**
 * Output Interface
 * @module core/output
 * @summary Abstract output interface for decoupling core from Session
 */

import { MCIProcessor } from "./mci"

/**
 * Control code action from MCI processing
 */
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

/**
 * IQOutput - Abstract interface for output operations
 * This allows the core package to be decoupled from the Session implementation
 */
export interface IQOutput {
    // Basic I/O
    write(data: string): void
    writeMCI(data: string): void

    // Terminal dimensions
    getWidth(): number
    getHeight(): number

    // Input operations
    waitKey(): Promise<string>
    readKey(): Promise<string>
    readLine(): Promise<string>

    /**
     * Non-blocking key read - returns immediately
     * @returns The key pressed, or null if no input available
     */
    readKeyNonBlocking(): string | null

    /**
     * Check if input is available without blocking
     */
    hasInput(): boolean

    /**
     * Clear pending input and any partial escape sequence (optional; Session implements it).
     */
    clearInputQueue?(): void

    // MCI processing
    getMCIProcessor(): MCIProcessor
    processMCI(text: string): string
    setMCIContext(ctx: any): void

    // Pause state management
    getLineCount(): number
    resetLineCount(): void
    incrementLineCount(count: number): void
    isPauseAborted(): boolean
    setPauseAborted(aborted: boolean): void
    isPauseEnabled(): boolean
    setPauseEnabled(enabled: boolean): void
    getPendingActions(): ControlCodeAction[]

    // Font support (optional)
    supportsFonts?(): boolean
    setSyncTermFont?(fontName: string): void

    // Terminal encoding (optional) - CP437 for classic BBS, UTF-8 for modern terminals
    getEncoding?(): "cp437" | "utf8"
    setEncoding?(encoding: "cp437" | "utf8"): void

    // Connection management
    close(): void
}
