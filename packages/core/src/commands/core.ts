#!/usr/bin/env node
/**
 *
 * Iniquity Core
 * @module Core
 * @summary The super cool command line interface to Iniquity.
 * @example Invoking via the shell
 * ```shell
 * iq cli -h
 * ```
 * @example Invoking via yargs programatically
 * ```typescript
 * import CLI from "@iniquitybbs/cli"
 * const cli: yargs.CommandModule = new CLI()
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
import * as path from "path"
import { exec } from "child_process"

/**
 * Iniquity Core CLI
 * @summary The main entry into all iniquity cli commands that are available.
 * @implements {yargs.CommandModule}
 */
export class Core implements yargs.CommandModule {
    public command = "core [options]"
    public describe = "Invoke CLI commands."

    public builder = (yargs: yargs.Argv) => {
        return yargs
            .options("name", {
                type: "string",
                describe: "The name of your bbs.",
                demandOption: false
            })
            .options("packages", {
                type: "string",
                choices: ["available", "installed"],
                describe: "Displays a list of all packages available for use with Iniquity.",
                demandOption: false
            })
            .pkgConf("iniquity", path.join(__dirname))
    }
    public handler(argv: yargs.Arguments) {
        if (argv.init === "food") {
            console.log("yay")
            console.log("yay")
            console.log("yay")
        }
        if (argv.packages) {
            switch (argv.packages) {
                case "available":
                    exec("npm search @iniquitybbs", (error, stdout, stderr) => {
                        if (error) {
                            console.error(`exec error: ${error}`)
                            return
                        }
                        console.info(stdout)
                        console.error(stderr)
                    })
                    break
                case "installed": {
                    exec("npm list --depth 0", (error, stdout, stderr) => {
                        if (error) {
                            console.error(`exec error: ${error}`)
                            return
                        }
                        console.info(stdout)
                        console.error(stderr)
                    })
                    break
                }
            }
        }
    }
}

const app: yargs.CommandModule = new Core()

if (process.argv.length > 2) yargs.command(app).pkgConf("iniquity").help().argv
export default app
