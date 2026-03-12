#!/usr/bin/env node
/**
 * IQ term Desktop
 * @module commands/desktop
 * @summary Launch the Electron desktop app (BBS term in a window).
 * @example
 * iq desktop
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

import { spawn } from "child_process"
import * as path from "path"

// From packages/cli/dist/src/commands -> packages/desktop (four levels up to packages, then desktop)
const desktopDir = path.resolve(__dirname, "..", "..", "..", "..", "desktop")

export const command = "desktop"
export const describe = "Launch IQ term Desktop (Electron app with BBS term in a window)."

export function builder(y: import("yargs").Argv) {
    return y
}

export function handler() {
    const child = spawn("npx", ["electron", "."], {
        cwd: desktopDir,
        stdio: "inherit",
        shell: true
    })
    child.on("error", (err) => {
        console.error("Failed to start desktop:", err.message)
        process.exit(1)
    })
    child.on("exit", (code) => {
        process.exit(code ?? 0)
    })
}

const desktop: import("yargs").CommandModule = {
    command,
    describe,
    builder,
    handler
}

export default desktop
