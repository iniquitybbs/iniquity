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
   t h e    i n i q u i t y    p r o g r a m m i n g   l a n g u a g e
==============================================================================
*/


function load (library){}

interface load {library: Object}

interface RenderOptions {
    text?: string,
    encoding?: string,
    menu?: string,
    speed?: number,
    mode?: string,
    align?: string,
    file?: string
}

function screen {
    this.print = Object
}

console.prototype.print = console.log

declare namespace screen {
    function print(string): string
}

/**
 * Iniquity
 */
export default class Iniquity {
    public root: string

    constructor(root) {
        this.root = root
    }

    render(options: RenderOptions) {

        let mode = options.mode || "line"
        let encoding = options.encoding || "CP437"
        let speed = options.speed || 30

        if (options.text) {

            let file = new File(`${this.root}/text/${options.text}`)

            if(!file.open("r")) {
                alert("error opening file: " + options.text)
                return
            }

            let text = file.readAll();

            text.forEach( line => {

                switch(mode) {

                    // For character-at-a-time rendering...
                    case "character": {

                        line.split("").forEach(character => {

                            console.print(character)
                            sleep(speed)
                        })
                    }

                    // For line-at-a-time rendering...
                    case "line": {

                        console.print(line)
                        sleep(speed)
                    }
                }
            })

            file.close();
        }
    }
}
