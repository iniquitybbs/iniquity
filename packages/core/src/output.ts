/**
 * Output Interface
 * @module core/output
 * @summary Abstract output interface for decoupling core from Session
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

    /**
     * Push a snack onto the session queue (optional; Session implements it).
     */
    pushSnack?(payload: { message: string; corner: string; durationMs: number }): void

    /**
     * Pop and return the next snack from the session queue (optional; Session implements it).
     */
    getNextSnack?(): { message: string; corner: string; durationMs: number } | null

    /**
     * Set the session username for snack targeting by user (optional; Session implements it).
     */
    setUsername?(handle: string | undefined): void

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

    /** Whether the client suggested UTF-8 (iq term handshake or TERM type); optional for core compatibility */
    getClientSuggestsUtf8?(): boolean

    // Connection management
    close(): void
}
