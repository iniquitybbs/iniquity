/**
 * Snack (toast) notifications
 * @module core/snack
 * @summary Corner toast notifications with queue and optional event delivery
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

import { IQOutput } from "./output"
import { ANSI } from "./ansi"
import { visibleLength } from "./string-utils"

export type SnackCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right"

export interface SnackPayload {
    message: string
    corner: SnackCorner
    durationMs: number
}

const DEFAULT_DURATION_MS = 3000

/**
 * Compute (x, y) 1-based for the given corner and message dimensions.
 */
function positionForCorner(
    corner: SnackCorner,
    width: number,
    height: number,
    msgWidth: number,
    msgLines: number
): { x: number; y: number } {
    const padding = 1
    switch (corner) {
        case "top-left":
            return { x: padding, y: padding }
        case "top-right":
            return { x: Math.max(1, width - msgWidth - padding), y: padding }
        case "bottom-left":
            return { x: padding, y: Math.max(1, height - msgLines) }
        case "bottom-right":
            return {
                x: Math.max(1, width - msgWidth - padding),
                y: Math.max(1, height - msgLines)
            }
        default:
            return {
                x: Math.max(1, width - msgWidth - padding),
                y: Math.max(1, height - msgLines)
            }
    }
}

/**
 * Draw a snack in the given corner, then after durationMs clear the region and call onCleared.
 * Uses a single line; if message contains newlines, only first line is used for positioning (or we could take first line for size).
 */
export function showSnack(
    output: IQOutput,
    payload: SnackPayload,
    onCleared: () => void
): void {
    const width = output.getWidth()
    const height = output.getHeight()
    const lines = payload.message.split(/\r?\n/).filter((l) => l.length > 0)
    const firstLine = lines[0] || ""
    const processed = output.processMCI(firstLine)
    const msgWidth = Math.min(visibleLength(processed), width - 2)
    const msgLines = Math.min(lines.length, height)
    const corner = payload.corner ?? "bottom-right"
    const durationMs = payload.durationMs ?? DEFAULT_DURATION_MS

    const { x, y } = positionForCorner(corner, width, height, msgWidth, msgLines)

    output.write(ANSI.cursor.save())
    for (let i = 0; i < msgLines; i++) {
        const line = lines[i] || ""
        const processedLine = output.processMCI(line)
        const lineLen = visibleLength(processedLine)
        output.write(ANSI.gotoxy(x, y + i))
        output.writeMCI(line)
        if (lineLen < msgWidth) {
            output.write(" ".repeat(msgWidth - lineLen))
        }
    }

    const clearRegion = () => {
        for (let i = 0; i < msgLines; i++) {
            output.write(ANSI.gotoxy(x, y + i))
            output.write(" ".repeat(msgWidth))
        }
        output.write(ANSI.cursor.restore())
        onCleared()
    }

    setTimeout(clearRegion, durationMs)
}
