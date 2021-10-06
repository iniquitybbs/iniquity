#!/bin/env node
/**
 * Iniquity CLI
 * @module CLI
 * @summary The super cool command line interface to Iniquity.
 * @example
 * ```typescript
 *
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

/**
 * Iniquity CLI
 * @class
 * @implements yargs.CommandModule
 */
class Init implements yargs.CommandModule {
    public command = "cli [command]"
    public describe = "make a get HTTP request"

    public builder = (yargs: yargs.Argv) => {
        return yargs
            .options("test", {
                type: "string",
                describe: "This is a test.",
                demandOption: true
            })
            .pkgConf("iniquity", path.join(__dirname))
    }
    public handler(argv: yargs.Arguments) {
        console.log("here")

        if (argv.test === "yes") {
            console.log("yay")
            console.log("yay")
            console.log("yay")
        }
    }
}

const init: yargs.CommandModule = new Init()

if (process.argv.length > 2) yargs.command(init).pkgConf("iniquity").help().argv
export default init
