/**
 *
 * Iniquity Server
 * @summary The super cool command line interface to Iniquity.
 * @example Invoking via the shell
 * ```shell
 * iq server --help
 * ```
 * @example Invoking via yargs programatically
 * ```typescript
 * import Server from "@iniquitybbs/iniquity/src/commands/server"
 * const server: yargs.CommandModule = new Server()
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
import { TelnetServer } from "../lib/telnet"

import copyfiles from "copyfiles"
import * as dotenv from "dotenv"
dotenv.config()

/**
 * Iniquity Server
 * @summary The main entry into all iniquity cli commands that are available.
 * @implements {yargs.CommandModule}
 */
export class Server implements yargs.CommandModule {
    public command = "server [action]"
    public describe = "Control your iniquity bbs server."
    private telnetServer: TelnetServer | null = null

    public builder = (yargs: yargs.Argv) => {
        return yargs
            .options("port", {
                type: "number",
                default: 23,
                describe: "Port to listen on for Telnet connections."
            })
            .options("program", {
                type: "string",
                default: "./iniquity.ts",
                describe: "Path to the BBS program to execute."
            })
            .options("install", {
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
                description: "Stops the iniquity bbs server."
            })
            .positional("restart", {
                type: "string",
                description: "Restart your iniquity bbs server."
            })
            .pkgConf("iniquity", path.join(__dirname))
    }
    
    public async handler(argv: yargs.Arguments) {
        if (argv.install || argv.watch) {
            if (fs.existsSync(".iniquity")) {
                process.chdir(".iniquity")

                if (argv.install) {
                    exec("npm install", (err, stdout, stderr) => {
                        if (err) {
                            console.error(err)
                            return
                        }

                        console.log(stdout)
                    })
                }

                if (argv.watch) {
                    copyfiles([path.join(".", "./assets/*"), ".iniquity/dist/assets"], { up: true, all: true }, (err) => {
                        // console.error(err)
                    })

                    exec("npx rollup -cw", (err, stdout, stderr) => {
                        if (err) {
                            console.error(err)
                            return
                        }

                        console.log(stdout)
                    })
                }

                process.chdir("../")
            }
        }

        switch (argv.action) {
            case "start":
                const port = argv.port as number || 23
                const programPath = argv.program as string || "./iniquity.ts"
                
                // Find the actual program path
                let resolvedPath = programPath
                if (!path.isAbsolute(programPath)) {
                    // Check current directory
                    if (fs.existsSync(programPath)) {
                        resolvedPath = path.resolve(programPath)
                    }
                    // Check src/example directory
                    else if (fs.existsSync(path.join("src", "example", "iniquity.ts"))) {
                        resolvedPath = path.resolve("src", "example", "iniquity.ts")
                    }
                    // Check packages/iniquity/src/example
                    else if (fs.existsSync(path.join("packages", "iniquity", "src", "example", "iniquity.ts"))) {
                        resolvedPath = path.resolve("packages", "iniquity", "src", "example", "iniquity.ts")
                    }
                }

                this.telnetServer = new TelnetServer({
                    port: port,
                    programPath: resolvedPath
                })

                try {
                    await this.telnetServer.start()
                    
                    // Keep process alive
                    process.on('SIGINT', async () => {
                        console.log('\nShutting down...')
                        if (this.telnetServer) {
                            await this.telnetServer.stop()
                        }
                        process.exit(0)
                    })
                } catch (err) {
                    console.error('Failed to start server:', err)
                    process.exit(1)
                }

                break
                
            case "stop":
                if (this.telnetServer) {
                    await this.telnetServer.stop()
                    this.telnetServer = null
                } else {
                    console.log('Server is not running')
                }
                break
                
            case "restart":
                if (this.telnetServer) {
                    await this.telnetServer.stop()
                    await this.telnetServer.start()
                } else {
                    console.log('Server is not running')
                }
                break
        }
    }
}

export default new Server()
