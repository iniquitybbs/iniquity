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
import { terminal as term, Terminal } from "terminal-kit"
import { program } from "commander"

program
    .command("rm <dir>")
    .option("-r, --recursive", "Remove recursively")
    .action(function (dir, cmdObj) {
        console.log("remove " + dir + (cmdObj.recursive ? " recursively" : ""))

        term.red("Hi")

        var items = ["File", "Edit", "View", "History", "Bookmarks", "Tools", "Help"]

        var options: Terminal.SingleLineMenuOptions = {
            y: 1, // the menu will be on the top of the terminal
            style: term.inverse,
            selectedStyle: term.dim.blue.bgGreen
        }

        term.clear()

        term.singleLineMenu(items, options, (error, response) => {
            term("\n").eraseLineAfter.green("#%s selected: %s (%s,%s)\n", response.selectedIndex, response.selectedText, response.x, response.y)
            process.exit()
        })
    })
//NOSONAR
program.parse(process.argv)
