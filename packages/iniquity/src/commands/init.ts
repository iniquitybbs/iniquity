#!/usr/bin/env node
/**
 *
 * Iniquity Init
 * @module Init
 * @summary The super cool command line interface to Iniquity.
 * @example Invoking via the shell
 * ```shell
 * iq init --help
 * ```
 * @example Invoking via yargs programatically
 * ```typescript
 * import Init from "@iniquitybbs/iniquity/dist/src/commands/init"
 * const init: yargs.CommandModule = new Init()
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
import path from "path"
import fs from "fs"
import { exec } from "child_process"

/**
 * Iniquity CLI
 * @summary The main entry into all iniquity cli commands that are available.
 * @implements {yargs.CommandModule}
 */
export class Init implements yargs.CommandModule {
    public command = "init [options]"
    public describe = "Initialize the current directory as an iniquity 3 application."

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
        if (!argv.help) {
            console.log("Iniquity system initialized.")
            if (!fs.existsSync(".iniquity")) {
                fs.mkdirSync(".iniquity")
                fs.createWriteStream(".iniquity/docker-compose.yml")
                fs.createWriteStream(".iniquity/Dockerfile")
                fs.createWriteStream(".iniquity/package.json")
            }

            if (!fs.existsSync(`iniquity.ts`)) {
                fs.createWriteStream(`iniquity.ts`)
            }
            if (!fs.existsSync(`iniquity.hjson`)) {
                fs.writeFileSync(`iniquity.hjson`, JSON.stringify(argv, null, 4))
            }
        }
    }
}

const init: yargs.CommandModule = new Init()
export default init
