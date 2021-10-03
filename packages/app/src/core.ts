// @ts-ignore just hiding this
load("sbbsdefs.js")

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

/**
 * A whole bunch of functions core to iniquity
 */
/**
 * Render options
 */
export interface IArtworkRenderOptions {
    file?: string
    speed?: number
    encoding?: "CP437" | "UTF8"
    mode?: "line" | "character"
    clearScreenBefore?: boolean
}

export interface IBBSPauseOptions {
    colorReset?: boolean | false
    newlines?: number | 0
    center?: boolean | false
}
export interface IBBSPrintOptions {}
export interface IBBSSayOptions {}
export interface IArtworkOptions {
    filename: string
}
export interface IUserOptions {
    name: string
    password: string
}
/**
 * Additional functions exported by render
 * @function pause What pause does
 */
export interface IArtworkRenderFunctions {
    pause(options?: IBBSPauseOptions): void
}

export interface IBBSSayFunctions {
    pause(options?: IBBSPauseOptions): void
}
export interface IBBSPrintFunctions {
    pause(options?: IBBSPauseOptions): void
}
export interface IMenuOptions {
    key: string
    options: object[]
}

export interface IMenuCommands {
    command: IMenuCommand
}

export interface IMenuCommand {
    key: number
    name: string
}
/**
 * Ibbsconfig params
 * @param name Means this
 */
export interface IBBSConfigParams {
    name: string
    sysop: string
}

export default class Iniquity {
    public name: string

    /**
     *
     */
    constructor() {
        console.inactivity_warning = 9999
        console.inactivity_hangup = 99999
        this.name = system.name
    }

    /**
     * Says something to the user. Does not parse MCI/@- codes.
     * @param text
     */
    public say(text: string): IBBSSayFunctions {
        console.print(text)
        return {
            pause(options?: IBBSPauseOptions): void {
                if (options) Iniquity.prototype.pause({ colorReset: options?.colorReset || false, center: options?.center || false })
                else Iniquity.prototype.say("".color("reset"))
                console.pause()
            }
        }
    }

    /**
     * Prints something to the user. Parses Renegade MCI/Synchronet @- codes.
     * @param text
     * @returns IBBSPrintFunctions
     */
    public print(text: string): IBBSPrintFunctions {
        console.putmsg(text)

        return {
            pause(options?: IBBSPauseOptions): void {
                if (options) Iniquity.prototype.pause({ colorReset: options?.colorReset || false, center: options?.center || false })
                else Iniquity.prototype.say("".color("reset"))
                console.pause()
            }
        }
    }

    /**
     * Pauses the client screen
     * @param options
     */
    public pause(options?: IBBSPauseOptions): void {
        if (options?.colorReset) this.say("".color("reset"))
        this.say("".newlines(options?.newlines || 0))
        console.pause()
    }

    /**
     * Halt the screen for a specified period of time.
     * @param speed In miliseconds
     */

    public sleep(speed: number): void {
        sleep(speed)
    }

    /**
     * Displays a prompt (value) and returns a string of user input (ala clent-side JS)
     * @param question
     * @returns response
     */
    public ask(question: string): string {
        return prompt(question)
    }

    /**
     * Will disconnect the user immediately.
     * @returns void
     */
    public disconnect(): void {
        bbs.logout()
    }

    /**
     * Iniquity User
     * @param IUserOptions
     * @param IUserOptions.name The users name.
     * @param IUserOptions.password The users password.
     * @returns User
     */
    public user(options: IUserOptions): User {
        return new User(options)
    }

    /**
     * Iniquity Artwork
     * @param IArtworkOptions
     * @param IArtworkOptions.filename The relative path to a text document.
     * @returns Artwork
     */
    public artwork(options: IArtworkOptions): Artwork {
        return new Artwork(options)
    }

    /**
     * Menu instance
     * @param IMenuOptions
     * @param IMenuOptions.name The users name
     * @param IMenuOptions.password The users password
     * @returns Menu
     */
    public menu(options: IMenuOptions): Menu {
        return new Menu(options)
    }
}

export class Menu {
    constructor(options: IMenuOptions) {}

    /**
     *
     */
    public prompt(): void {}
}

export class Group {}

/**
 * Core networking possibilities
 */
export class Network {}

/**
 * Core user management functionality
 */
export class User {
    public name: string = ""
    public password: string = ""
    public logins: number = 0

    /**
     * Mechanisms for working with an individual iniquity user
     * @param options.name
     * @param options.password
     */
    constructor(options: IUserOptions) {
        this.name = options.name
        this.password = options.password
    }
}

/**
 * Core text file display and manipulation capabilities
 */
export class Text {}

/**
 * Core artwork display and manipulation capabilities
 */
export class Artwork {
    public filename: string
    private fileHandle: any

    /**
     * The Iniquity Artwork Class
     * @param IArtworkOptions
     * @param IArtworkOptions.filename
     */
    constructor(options: IArtworkOptions) {
        this.filename = options.filename
    }

    /**
     * Render a ANSI/ASCII/PETSCII file to the screen
     * @param IArtworkRenderOptions
     * @config IArtworkRenderOptions.file Override the filename set in the Artwork constructor
     * @config IArtworkRenderOptions.mode Choose between "character" or "line" at a time rendering. Defaults to line.
     * @config IArtworkRenderOptions.speed Choose the speed. Can adjust in milliseconds.
     * @config IArtworkRenderOptions.clearScreenBefore Clear the screen first before rendering the artwork
     * @returns {IArtworkRenderFunctions} pause Will apply a pause prompt after rendering the artwork
     */

    render(options?: IArtworkRenderOptions): IArtworkRenderFunctions {
        if (options?.clearScreenBefore === true) console.clear()

        let filename = options?.file || this.filename
        let mode = options?.mode || "line"
        let speed = options?.speed || 30

        console.line_counter = 0

        // @ts-ignore
        this.fileHandle = new File(`/iniquity/app/${filename}`)
        if (!this.fileHandle.open("r")) alert("Iniquity: Error opening file: " + filename)
        let text = this.fileHandle.readAll()

        for (let i = 0; i < text.length; i++) {
            switch (mode) {
                // For character-at-a-time rendering...
                case "character": {
                    text[i].split(" ").forEach((character: any) => {
                        console.putmsg(character)
                        Iniquity.prototype.sleep(speed)
                    })
                }

                // For line-at-a-time rendering...
                case "line": {
                    console.putmsg(text[i])
                    Iniquity.prototype.sleep(speed)
                }
            }
            if (i < text.length - 1) console.putmsg("\r\n")
            console.line_counter = 0
        }

        // @ts-ignore
        this.fileHandle.close()

        return {
            pause(options?: IBBSPauseOptions): void {
                if (options) Iniquity.prototype.pause({ colorReset: options?.colorReset || false, center: options?.center || false })
                else Iniquity.prototype.say("".color("reset"))
                console.pause()
            }
        }
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
            | "background black"
            | "background red"
            | "background green"
            | "background yellow"
            | "background blue"
            | "background magenta"
            | "background cyan"
            | "background white"
            | "background bright black"
            | "background bright red"
            | "background bright green"
            | "background bright yellow"
            | "background bright blue"
            | "background bright magenta"
            | "background bright cyan"
            | "background bright white"
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
        // 16 colors...
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

        // background colors...
        case "background black":
            return "\u001b[40m" + this
        case "background red":
            return "\u001b[41m" + this
        case "background green":
            return "\u001b[42m" + this
        case "background yellow":
            return "\u001b[43m" + this
        case "background blue":
            return "\u001b[44m" + this
        case "background magenta":
            return "\u001b[45m" + this
        case "background cyan":
            return "\u001b[46m" + this
        case "background white":
            return "\u001b[46m" + this

        // background bright colors
        case "background bright black":
            return "\u001b[40;1m" + this
        case "background bright red":
            return "\u001b[41;1m" + this
        case "background bright green":
            return "\u001b[42;1m" + this
        case "background bright yellow":
            return "\u001b[43;1m" + this
        case "background bright blue":
            return "\u001b[44;1m" + this
        case "background bright magenta":
            return "\u001b[45;1m" + this
        case "background bright cyan":
            return "\u001b[46;1m" + this
        case "background bright white":
            return "\u001b[47;1m" + this

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

export declare function load(library: string): void
export declare function alert(text: string): void
export declare function prompt(text: string): string
export declare function sleep(duration: number): void
export declare let console: ISSBSConsole
export declare let system: ISBBSSystem
export declare let bbs: ISBBSBbs

/**
 * Issbsconsole
 */
export interface ISSBSConsole {
    log: any
    print: any
    inactivity_warning: number
    inactivity_hangup: number
    putmsg: any
    line_counter: number
    clear: any
    pause: any
}
/**
 * Isbbssystem
 */
export interface ISBBSSystem {
    name: string
    operator: string
}

export interface ISBBSBbs {
    logout: any
    logoff: any
    hangup: any
}
