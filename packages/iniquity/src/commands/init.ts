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
import copyfiles from "copyfiles"
import { cwd } from "process"

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
                default: "iniquity",
                describe: "Provide a name for your iniquity system.",
                demandOption: false
            })
            .options("template", {
                type: "string",
                default: "eternity",
                choices: ["eternity", "euphoria"],
                describe: "Specify a template to use when constructing your new iniquity bbs.",
                demandOption: false
            })
            .options("theme", {
                type: "string",
                default: "iq3theme",
                choices: ["iq3theme", "bookauh"],
                describe: "Specify a theme to use when constructing your new iniquity bbs.",
                demandOption: false
            })
            .pkgConf("iniquity", path.join(__dirname))
    }
    public handler(argv: yargs.Arguments) {
        if (!argv.help || !argv.version) {
            if (argv.template === "eternity") {
                copyfiles([path.join(__dirname, "../../../../templates/src/eternity/*"), "."], { up: true, all: true }, (err) => {})
                copyfiles([path.join(__dirname, "../../../../templates/src/eternity/.iniquity/*"), ".iniquity"], { up: true, all: true }, (err) => {})
                copyfiles([path.join(__dirname, "../../../../templates/src/eternity/.vscode/*"), ".vscode"], { up: true, all: true }, (err) => {})
                copyfiles([path.join(__dirname, "../../../../templates/src/euphoria/assets/*"), "assets"], { up: true, all: true }, (err) => {})
            }

            if (argv.template === "euphoria") {
                copyfiles([path.join(__dirname, "../../../../templates/src/euphoria/*"), "."], { up: true, all: true }, (err) => {})
                copyfiles([path.join(__dirname, "../../../../templates/src/euphoria/.iniquity/*"), ".iniquity"], { up: true, all: true }, (err) => {})
                copyfiles([path.join(__dirname, "../../../../templates/src/euphoria/.vscode/*"), ".vscode"], { up: true, all: true }, (err) => {})
                copyfiles([path.join(__dirname, "../../../../templates/src/euphoria/assets/*"), "assets"], { up: true, all: true }, (err) => {})
            }

            console.log(`Iniquity template ${argv.template} installed.`)

            setTimeout(() => {
                if (fs.existsSync(".iniquity")) {
                    process.chdir(".iniquity")

                    exec("npm install", (err, stdout, stderr) => {
                        if (err) {
                            console.error(err)
                            return
                        }

                        console.log(`Template ${argv.template} npm dependencies installed.`)
                    })
                }
            }, 3000)
        }
    }
}

const init: yargs.CommandModule = new Init()
export default init
