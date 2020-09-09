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

load("sbbsdefs.js")

/**
 * A whole bunch of functions
 */
class BBS {
    // public config: IBBSConfigParams

    public name: string

    constructor() {
        console.inactivity_warning = 9999
        console.inactivity_hangup = 99999
        this.name = system.name
    }
    /**
     * Renders ANSI/ASCII/PETSCII artwork to the client screen.
     * @param options
     * @returns nothing, but displays the text to the console.
     */
    renderArtwork(options: IRenderOptions): void {
        let mode = options.mode || "line"
        let encoding = options.encoding || "CP437"
        let speed = options.speed || 30

        if (options.clearScreenBefore === true) {
            console.line_counter = 0
            console.clear()
        }

        if (options.file) {
            // @ts-ignore
            let file = new File(`/iniquity/app/${options.file}`)

            console.line_counter = 0

            // @ts-ignore
            if (!file.open("r")) {
                alert("error opening file: " + options.file)
                return
            }
            // @ts-ignore
            let text = file.readAll()

            for (let i = 0; i < text.length; i++) {
                switch (mode) {
                    // For character-at-a-time rendering...
                    case "character": {
                        text[i].split(" ").forEach((character: any) => {
                            console.putmsg(character)
                            this.sleep(speed)
                        })
                    }

                    // For line-at-a-time rendering...
                    case "line": {
                        console.putmsg(text[i])
                        this.sleep(speed)
                    }
                }
                if (i < text.length - 1) console.putmsg("\r\n")
                console.line_counter = 0
            }

            // @ts-ignore
            file.close()
        }
    }

    /**
     * Says something to the user. Does not parse MCI/@- codes.
     * @param text
     */
    say(text: string): void {
        // @ts-ignore
        console.print(text)
    }

    /**
     * Prints something to the user. Parses Renegade MCI/Synchronet @- codes.
     * @param text
     */
    print(text: string): void {
        // @ts-ignore
        console.putmsg(text)
    }

    /**
     * Pauses the client screen
     * @param options
     */
    pause(options: { newlines?: number | 0; center?: true }): void {
        this.say("".newlines(options.newlines!))
        // @ts-ignore
        console.pause()
    }

    sleep(speed: number): void {
        // @ts-ignore
        sleep(speed)
    }

    /**
     * Displays a prompt (value) and returns a string of user input (ala clent-side JS)
     * @param question
     * @returns response
     */
    ask(question: string): string {
        // @ts-ignore
        return prompt(question)
    }
    /**
     * execScriptPopen
     * @param script
     * @returns Output from script executed as an array of strings
     */
    execScriptPopen(script: string): string[] {
        // @ts-ignore
        return system.popen(`node /euphoria/scripts/${script}.js`)
    }

    /**
     * Execs script
     * @param script
     */
    execScript(script: string): void {
        // @ts-ignore
        system.exec(`node /euphoria/scripts/${script}.js`)
        return
    }
}

interface String {
    /**
     * Sets the color of the text in the string.
     * @param color Choose from any capable ANSI escape sequence which defines a color.
     * @returns The newly formatted string.
     */
    color(
        color:
            | "black"
            | "red"
            | "green"
            | "yellow"
            | "blue"
            | "magenta"
            | "cyan"
            | "white"
            | "bright black"
            | "bright red"
            | "bright green"
            | "bright yellow"
            | "bright blue"
            | "bright magenta"
            | "bright cyan"
            | "bright white"
            | "reset"
    ): string
    gotoxy(x: number, y: number): string
    /**
     * Prepends a newline to the beginning of the text
     * @param count The total number of newlines. Default to 1.
     * @returns The newly formatted string
     */
    newlines(count?: number): string
    /**
     * Will center the text between the available columns on the screen
     * @returns The newly formatted string
     */
    center(): string
}
String.prototype.color = function (color: string): string {
    switch (color) {
        case "black":
            return "\u001b[30m" + this
        case "bright black":
            return "\u001b[30;1m" + this
        case "red":
            return "\u001b[31m" + this
        case "bright red":
            return "\u001b[31;1m" + this
        case "green":
            return "\u001b[32m" + this
        case "bright green":
            return "\u001b[32;1m" + this
        case "yellow":
            return "\u001b[33m" + this
        case "bright yellow":
            return "\u001b[33;1m" + this
        case "blue":
            return "\u001b[34m" + this
        case "bright blue":
            return "\u001b[34;1m" + this
        case "magenta":
            return "\u001b[35m" + this
        case "bright magenta":
            return "\u001b[35;1m" + this
        case "cyan":
            return "\u001b[36m" + this
        case "bright cyan":
            return "\u001b[36;1m" + this
        case "white":
            return "\u001b[37m" + this
        case "bright white":
            return "\u001b[37;1m" + this
        case "reset":
            return "\u001b[0m" + this

        default:
            return "\u001b[0m" + this
    }
}

String.prototype.gotoxy = function (x: number, y: number): string {
    // @ts-ignore
    console.gotoxy(x, y)
    return ""
}

String.prototype.center = function (): string {
    // @ts-ignore
    console.center(this)
    return ""
}

String.prototype.newlines = function (count?: number | 0): string {
    let string = ""
    for (let i = 0; i <= count!; i++) {
        string += "\r\n"
    }
    return string + this
}

function Iniquity(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

BBS.prototype.pause.prototype.center = function (): object {
    // @ts-ignore
    console.center(this)
    return {}
}
