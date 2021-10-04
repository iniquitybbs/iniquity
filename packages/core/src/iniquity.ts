/**
 * Iniquity BBS
 * @module Iniquity
 * @example
 * ```typescript
 * const iq = new Iniquity()
 *
 * iq.artwork({ filename: "./path/to/textfile.ans" }).render({ speed: 10 })
 *
 * iq.say("Pretty cool, right???".newlines(2).color("bright cyan").center()).pause()
 *
 * iq.disconnect()
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

load("sbbsdefs.js")

/**
 * Artwork rendering options
 */
export interface IArtworkRenderOptions {
    basepath?: string
    file?: string
    speed?: number
    encoding?: "CP437" | "UTF8"
    mode?: "line" | "character"
    clearScreenBefore?: boolean
}

/**
 * BBS pause options
 * @param {boolean} colorReset Reset the screen colors
 * @param {number} newlines How many newlines to display after the pause.
 * @param {boolean} center Shall we center the text?
 */

export interface IBBSEnhancements {
    colorReset?: boolean | false
    newlines?: number | 0
    center?: boolean | false
}
export interface IBBSPauseOptions extends IBBSEnhancements {}
export interface IBBSPrintOptions extends IBBSEnhancements {
    text: string
}
export interface IBBSSayOptions {
    text: string
}
export interface IArtworkOptions {
    basepath?: string
    filename: string
}

/**
 * User options
 * @param name The name of the user.
 * @param password The users password.
 */
export interface IUserOptions {
    name: string
    password: string
}
/**
 * Additional functions exported by render
 * @function pause What pause does.
 * @function colorReset Resets the current lines screen color back to normal.
 */
export interface IArtworkRenderFunctions {
    /**
     * @param {IBBSPauseOptions} options
     * @see {@link IBBSPauseOptions}
     */
    pause(options?: IBBSPauseOptions): void
    /**
     * Resets the screen color
     */
    colorReset(): void
}

export interface IBBSSayFunctions {
    /**
     * @param {IBBSPauseOptions} options
     * {@link IBBSPauseOptions}
     */
    pause(options?: IBBSPauseOptions): void
}
export interface IBBSPrintFunctions {
    /**
     * @param {IBBSPauseOptions} options
     * @see {@link IBBSPauseOptions}
     */
    pause(options?: IBBSPauseOptions): void
}

/**
 * Menu options
 * @param {string} key The key for the thing.
 * @param {object} object An object containing a bunch of stuff.
 */
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

export interface IIniquityOptions {
    basepath?: string
}

/**
 * Iniquity BBS
 * @class
 * @global
 */
export class Iniquity {
    public basepath: string
    public name: string

    /**
     * Iniquity BBS core class
     * @param {IIniquityOptions} options An object containing the various configuration properties.
     * @param {string} options.basepath The BBS project root.
     * @example
     * ```typescript
     * const iq = new Iniquity()
     * const iq = new Iniquity({ basepath: "/iniquity/bbs/path" })
     * ```
     */
    constructor(options?: IIniquityOptions) {
        console.inactivity_warning = 9999
        console.inactivity_hangup = 99999
        this.name = system.name // NOTE should consider this being set at the constructor level (and how to tell SBBS about it)
        this.basepath = options?.basepath || "/"
    }

    /**
     * Says something to the user. Does not parse MCI/@- codes.
     * @param {IBBSSayOptions | string} options What you would like to say on the screen.
     * @see {@link IBBSPrintOptions}
     * @returns {IBBSSayFunctions}
     * @example
     * ```typescript
     * iq.say("Say something to the terminal!")
     * iq.say("This time say something but do some cool string manipulation.".newlines(2).color("bright red").center()).pause()
     * ```
     */
    public say(options: IBBSSayOptions | string): IBBSSayFunctions {
        typeof options === "string" ? console.print(options) : console.print(options.text)
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
     * @param {IBBSPrintOptions | string} options you would like to print on the screen.
     * @see {@link IBBSPrintOptions}
     * @returns {IBBSPrintFunctions}
     * @example
     * ```typescript
     * iq.print("Display some text on the screen that can parse @ codes.").center()
     * iq.print("Display some text on the screen that can parse @ codes.".newlines(2).color("background red"))
     * iq.print("Display some text on the screen that can parse @ codes.".color("cyan")).pause()
     * ```
     */
    public print(options: IBBSPrintOptions | string): IBBSPrintFunctions {
        typeof options === "string" ? console.putmsg(options) : console.putmsg(options.text || new Error("Sometthing is wrong with this string."))

        return {
            pause(options?: IBBSPauseOptions): void {
                if (options) Iniquity.prototype.pause({ colorReset: options?.colorReset || false, center: options?.center || false })
                else Iniquity.prototype.say("".color("reset"))
                console.pause()
            }
        }
    }

    /**
     * Pause the cursor
     * @param {IBBSPauseOptions}
     * @see {@link IBBSPauseOptions}
     */
    public pause(options?: IBBSPauseOptions): void {
        if (options?.colorReset) this.say("".color("reset"))
        this.say("".newlines(options?.newlines || 0))
        console.pause()
    }

    /**
     * Halt the screen for a specified period of time.
     * @param speed In miliseconds
     * @returns void
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
     * Will allow you to work with user data.
     * @param {IUserOptions} options An object containing the various configuration properties.
     * @see {@link IUserOptions}
     * @returns {User} An instance of User and its return functions.
     */
    public user(options: IUserOptions): User {
        return new User(options)
    }

    /**
     * Will allow you to render artwork to the screen
     * @param {IArtworkOptions} options An object containing the various configuration properties.
     * @see {@link IArtworkOptions}
     * @returns {Artwork} An instance of Artwork and its return functions.
     * @example
     * ```typescript
     * iq.artwork({ filename: Assets.we_iniq3 })
     * iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
     * ```
     */
    public artwork(options: IArtworkOptions): Artwork {
        return new Artwork({ basepath: options.basepath || this.basepath, filename: options.filename })
    }

    /**
     * Menu instance
     * @param {IMenuOptions} options An object containing the various configuration properties.
     * @param {string} options.name The users name
     * @param {string} options.password The users password
     * @returns {Menu} An instance of Menu
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
    public basepath: string
    public filename: string
    private fileHandle: any

    /**
     * The Iniquity Artwork rendering class
     * @param {IArtworkOptions} options An object containing the various configuration properties.
     * @param {string} options.basepath The base path to where the assets are located
     * @param {string} options.filename The name of the specific asset to display
     * @returns {Artwork} An instance of Artwork
     */
    constructor(options: IArtworkOptions) {
        this.basepath = options.basepath || Iniquity.prototype.basepath || ""
        this.filename = options.filename
    }

    /**
     * Render a ANSI/ASCII/PETSCII file to the screen
     * @param {IArtworkRenderOptions} options An object containing the various configuration parameters.
     * @see @{link IArtworkRenderOptions}
     * @returns {IArtworkRenderFunctions} Will render the artwork on the screen as well as provide various render functions.
     */

    render(options?: IArtworkRenderOptions): IArtworkRenderFunctions {
        if (options?.clearScreenBefore === true) console.clear()

        let basepath = options?.basepath || this.basepath
        let filename = options?.file || this.filename
        let mode = options?.mode || "line"
        let speed = options?.speed || 30

        console.line_counter = 0

        // @ts-ignore Using Synchronet's JS File operations
        this.fileHandle = new File(`${this.basepath}/${filename}`)
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

        this.fileHandle.close()

        return {
            pause(options?: IBBSPauseOptions): void {
                if (options) this.pause({ colorReset: options?.colorReset || false, center: options?.center || false })
                else Iniquity.prototype.say("".color("reset"))
                console.pause()
            },
            colorReset(): void {
                Iniquity.prototype.say("".color("reset"))
            }
        }
    }
}

declare global {
    export interface String {
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
    console.gotoxy(x, y)
    return ""
}

String.prototype.center = function (): string {
    console.center(this as string)
    return ""
}

String.prototype.newlines = function (count?: number | 0): string {
    let string = ""
    for (let i = 0; i <= count!; i++) {
        string += "\r\n"
    }
    return string + this
}

declare global {
    /**
     * Synchronet JS library loader
     * @param library
     */
    function load(library: string): void
    function alert(text: string): void
}

declare function prompt(text: string): string
declare function sleep(duration: number): void
declare let console: ISSBSConsole
declare let system: ISBBSSystem
declare let bbs: ISBBSBbs

/**
 * Issbsconsole
 */
declare interface ISSBSConsole {
    center(arg0: string): void
    gotoxy(x: number, y: number): void
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
interface ISBBSSystem {
    name: string
    operator: string
}

interface ISBBSBbs {
    logout: any
    logoff: any
    hangup: any
}

export default Iniquity
