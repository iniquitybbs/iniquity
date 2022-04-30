#!/usr/bin/env node
/**
 *
 * Iniquity App
 * @module App
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
 * Iniquity CLI
 * @summary The main entry into all iniquity cli commands that are available.
 * @implements {yargs.CommandModule}
 */
export class App implements yargs.CommandModule {
    public command = "init [options]"
    public describe = "Use iniquity's built in terminal client."

    public builder = (yargs: yargs.Argv) => {
        return yargs
            .options("name", {
                type: "string",
                describe: "Provide a name for your iniquity system.",
                demandOption: false
            })
            .options("template", {
                type: "string",
                choices: ["eternity", "euphoria"],
                describe: "Specify a template to use when constructing your new iniquity bbs.",
                demandOption: false
            })
            .options("install", {
                type: "string",
                describe: "Install iniquity and npm packages.",
                demandOption: false
            })
            .options("packages", {
                type: "string",
                choices: ["available", "installed"],
                describe: "Displays a list of all packages available for use with iniquity.",
                demandOption: false
            })
            .pkgConf("iniquity", path.join(__dirname))
    }
    public handler(argv: yargs.Arguments) {
        if (!argv.help) console.log("Iniquity system initialized.")

        if (argv.init === "food") {
            console.log("yay")
            console.log("yay")
            console.log("yay")
        }

        if (argv.install) {
            exec(`npm install @iniquitybbs/${argv.install}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`)
                    return
                }
                console.info(stdout)
                console.error(stderr)
            })
        }
    }
}

const app: yargs.CommandModule = new App()

// if (process.argv.length > 2) yargs.command(app).pkgConf("iniquity").help().argv
export default app
