/**
 *
 * Iniquity Runtime
 * @summary The super cool command line interface to Iniquity.
 * @example Invoking via the shell
 * ```shell
 * iq runtime --help
 * ```
 * @example Invoking via yargs programatically
 * ```typescript
 * import Runtime from "@iniquitybbs/iniquity/src/commands/runtime"
 * const runtime: yargs.CommandModule = new Runtime()
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
import fs from "fs"
import { exec } from "child_process"

import * as compose from "docker-compose"
import * as dotenv from "dotenv"
dotenv.config()

process.env["COMPOSE_PROJECT_NAME"] = "iniquity"
process.env["COMPOSE_HTTP_TIMEOUT"] = process.env["COMPOSE_HTTP_TIMEOUT"] || "120"
process.env["COMPOSE_INTERACTIVE_NO_CLI"] = "true"

const composeOptions: compose.IDockerComposeOptions = {
    composeOptions: ["-f", path.join(".iniquity/docker-compose.yml") || process.env["COMPOSE_FILE"] || ""],
    log: true,
    env: process.env
}

/**
 * Iniquity Runtime
 * @summary The main entry into all iniquity cli commands that are available.
 * @implements {yargs.CommandModule}
 */
export class App implements yargs.CommandModule {
    public command = "app [action]"
    public describe = "Control your iniquity bbs runtime."

    public builder = (yargs: yargs.Argv) => {
        return yargs
            .options("install_deps", {
                type: "boolean",
                default: false,
                describe: "Install dependencies for the iniquity bbs app."
            })
            .options("watch", {
                type: "boolean",
                default: false,
                describe: "Watch for changes in the iniquity bbs app."
            })
            .positional("start", {
                type: "string",
                description: "Starts the iniquity bbs app on this machine."
            })
            .positional("stop", {
                type: "string",
                description: "Brings the iniquity bbs environment down."
            })
            .positional("restart", {
                type: "string",
                description: "Restart your iniquity bbs environment."
            })
            .pkgConf("iniquity", path.join(__dirname))
    }
    public handler(argv: yargs.Arguments) {
        if (argv.install_deps || argv.watch) {
            if (fs.existsSync(".iniquity")) {
                process.chdir(".iniquity")

                if (argv.install_deps) {
                    exec("npm install", (err, stdout, stderr) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        console.log(stdout)
                    })
                }

                if (argv.watch) {
                    exec("npx rollup -cw", (err, stdout, stderr) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        console.log(stdout)
                    })
                }
            }
        }

        switch (argv.action) {
            case "start":
                compose.upAll(composeOptions).then(
                    (response: compose.IDockerComposeResult) => {
                        if (response.out) console.log(response.out)
                    },
                    (err) => {
                        console.error("something went wrong:", err)
                    }
                )

                break
            case "stop":
                compose.down(composeOptions).then(
                    (response: compose.IDockerComposeResult) => {
                        if (response.out) console.log(response.out)
                    },
                    (err) => {
                        console.error("something went wrong:", err)
                    }
                )

                break
            case "restart":
                compose.restartOne("server", composeOptions).then(
                    (response: compose.IDockerComposeResult) => {
                        if (response.out) console.log(response.out)
                    },
                    (err) => {
                        console.error("something went wrong:", err)
                    }
                )

                break
        }
    }
}

export default new App()
