#!/usr/bin/env node
/**
 *
 * Iniquity Term
 * @module Term
 * @summary Built-in terminal client to connect to an Iniquity BBS.
 * @example Invoking via the shell
 * ```shell
 * iq term
 * iq term localhost --port 2323
 * ```
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

import yargs from "yargs"
import * as net from "net"

function restoreStdin(): void {
    if (process.stdin.isTTY && process.stdin.setRawMode) {
        process.stdin.setRawMode(false)
    }
    process.stdin.pause()
}

export const command = "term [host]"
export const describe = "Connect to an Iniquity BBS with the built-in terminal client."

export function builder(yargs: yargs.Argv) {
    return yargs
        .positional("host", {
            type: "string",
            default: "localhost",
            describe: "Host to connect to."
        })
        .option("port", {
            type: "number",
            default: 23,
            describe: "Port to connect to."
        })
}

export function handler(argv: yargs.Arguments) {
    const host = (argv.host as string) || "localhost"
    const port = (argv.port as number) || 23

    const socket = net.createConnection(port, host, () => {
        if (process.stderr.isTTY) {
            process.stderr.write(`Connecting to ${host}:${port}...\r\n`)
        }
        if (process.stdin.isTTY && process.stdin.setRawMode) {
            process.stdin.setRawMode(true)
        }
        process.stdin.resume()

        process.stdin.on("data", (chunk: Buffer | string) => {
            if (socket.writable) {
                socket.write(chunk)
            }
        })
    })

    socket.pipe(process.stdout)

    socket.on("close", (hadError: boolean) => {
        restoreStdin()
        process.exit(hadError ? 1 : 0)
    })

    socket.on("error", (err: Error) => {
        restoreStdin()
        console.error(`Connection error: ${err.message}`)
        process.exit(1)
    })
}

const term: yargs.CommandModule = {
    command,
    describe,
    builder,
    handler
}

export default term
