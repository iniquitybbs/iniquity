/**
 * Iniquity Core
 * @module Core
 * @summary This is the Iniquity core bbs library. It's the foundation of any Iniquity application.
 * @example
 * ```typescript
 * import BBS from "@iniquitybbs/core"
 *
 * const mybbs = new BBS()
 *
 * myIniquity.artwork({ filename: "./path/to/textfile.ans" }).render({ speed: 10 })
 *
 * myIniquity.say("Pretty cool, right???".newlines(2).color("bright cyan").center()).pause()
 *
 * myIniquity.disconnect()
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
load("frame.js")
load("funclib.js")

js.do_callbacks = true

if (!Object.entries) {
    Object.entries = function (obj: any) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i)
        while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]

        return resArray
    }
}

export interface IArtworkRenderOptions {
    basepath?: string | undefined
    filename?: string | undefined
    speed?: number | undefined
    encoding?: "CP437" | "UTF8"
    mode?: "line" | "character" | "@-codes" | "reactive"
    clearScreenBefore?: boolean
    data?: unknown
}

/**
 * Iniquity bbs string operations
 * @interface
 * @summary Some pretty typical operations most sysops end up wanting apply to strings. Got more ideas? Let me know.
 * @param {boolean} colorReset Make sure that colors don't bleed on to the terminal after displaying the text.
 * @param {number} newlines How many newlines to display after the text has been displayed.
 * @param {boolean} center Will attempt to center the text on the clients terminal.
 */

export interface IQStringUtils {
    colorReset?: boolean | false
    newlines?: number | 0
    center?: boolean | false
}
export interface IQPauseOptions extends IQStringUtils {}
export interface IQPrintOptions extends IQStringUtils {
    text: string
}
interface IBBSSayOptions {
    text: string
}
export interface IArtworkOptions {
    basepath?: string
    filename?: string
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
     * @param {IQPauseOptions} options
     * @see {@link IQPauseOptions}
     */
    pause(options?: IQPauseOptions): void
    /**
     * Resets the screen color
     */
    colorReset(): void

    gotoxy(x: number, y: number): void
    prompt(x: number, y: number, text?: string): void
    cursor(x: number, y: number): void
}

export interface IQMenuPromptFunctions {
    /**
     * Go to the specified coordinates on the terminal.
     * @param x Width coordinates.
     * @param y Height coordinates.
     */
    gotoxy(x: number, y: number): void | any
    /**
     * Await a response from the user.
     * @param cmdkeys The list of acceptable keys to accept from the keyboard.
     */
    keypressed(cmdkeys: string): string
    keypressed(cmdkeys?: string): string | void
}

export interface IBBSSayFunctions {
    /**
     * @param {IQPauseOptions} options
     * {@link IQPauseOptions}
     */
    pause(options?: IQPauseOptions): void
    wait(options?: IQWaitOptions): void
}
export interface IBBSPrintFunctions {
    /**
     * @param {IQPauseOptions} options
     * @see {@link IQPauseOptions}
     */
    pause(options?: IQPauseOptions): void
    wait(options?: IQWaitOptions): void
}

/**
 * Menu options
 * @param {IQMenuOptions} options Some options.
 * @see {@link IQMenuOptions}
 */
export interface IQMenuOptions {
    name?: string
    description?: string
    prompt?: IMenuPromptOptions
    cmdkeys?: string
    commands?: {
        [s: string]: (...args: any) => any
    }

    frame?: IQFrameOptions
}
export interface IQMenuLoopMessageResponse {
    [x: string]: any
}

export interface IQFrameOptions {
    x: number
    y: number
    width: number
    height: number
    color: IQFrameColorOptions
    artwork?: string
    parent?: any
}
export interface IMenuCommands {
    command: IMenuCommand
}

export interface IMenuCommand {
    key: number
    name: string
}

export interface IMenuPromptOptions {
    x: string
    y: string
    text?: string
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
 * Iniquity Core BBS
 * @summary The main class you will use as it wraps all the other classes in a unified API.
 * @example
 * ```typescript
 * import BBS from "@iniquitybbs/core/dist/iniquity"
 *
 * const mybbs = new BBS()
 *
 * myIniquity.say("Say hi!").pause()
 *
 * myIniquity.hangup()
 *
 * ```
 */
export class Iniquity {
    public basepath!: string
    public name!: string

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
     * @see {@link IQPrintOptions} to learn more about the available options.
     * @returns {IBBSSayFunctions}
     * @example
     * ```typescript
     * iq.say("Say something to the terminal!")
     * iq.say("This time say something but do some cool string manipulation.".newlines(2).color("bright red").center()).pause()
     * ```
     */
    public say(options: IBBSSayOptions | string | object | any): IBBSSayFunctions {
        switch (typeof options) {
            case "string":
                console.writeln(options)
                break
            case "object":
                console.writeln(JSON.stringify(options))
                break
            default:
                console.writeln(options)
                break
        }

        let iq = this

        return {
            pause(options?: IQPauseOptions): void {
                iq.pause(options)
            },
            wait(options?: IQWaitOptions): void {
                iq.wait(options?.milliseconds || 100)
            }
        }
    }

    /**
     * Prints something to the user. Parses Renegade MCI/Synchronet @- codes.
     * @param {IQPrintOptions | string} options you would like to print on the screen.
     * @see {@link IQPrintOptions} to learn more about the available options.
     * @returns {IBBSPrintFunctions}
     * @example
     * ```typescript
     * iq.print("Display some text on the screen that can parse @ codes.").center()
     * iq.print("Display some text on the screen that can parse @ codes.".newlines(2).color("background red"))
     * iq.print("Display some text on the screen that can parse @ codes.".color("cyan")).pause()
     * ```
     */
    public print(options: IQPrintOptions | string): IBBSPrintFunctions {
        typeof options === "string" ? console.putmsg(options) : console.putmsg(options.text || new Error("Sometthing is wrong with this string."))

        let iq = this

        return {
            pause(options?: IQPauseOptions): void {
                if (options) iq.pause({ colorReset: options?.colorReset || false, center: options?.center || false })
                else iq.say("".color("reset"))
                iq.pause()
            },
            wait(options?: IQWaitOptions): void {
                iq.wait(options?.milliseconds || 100)
            }
        }
    }

    /**
     * Display a pause prompt on the screen.
     * @summary This pause prompt does the usual stuff. It also provides a few helpers via its return functions.
     * @param {IQPauseOptions}
     * @see {@link IQPauseOptions} to learn more about the available options.
     */
    public pause(options?: IQPauseOptions): void {
        if (options?.colorReset) console.putmsg("".color("reset"))
        console.putmsg("".newlines(options?.newlines || 0))
        console.pause()
    }

    public gotoxy(x: number, y: number): void {
        console.gotoxy(x, y)
    }

    /**
     * Halt the screen for a specified period of time.
     * @param {IQWaitOptions} options In miliseconds
     * @returns void
     */

    public wait(options?: IQWaitOptions | number): void {
        if (typeof options === "number") sleep(options)
        else if (options?.milliseconds !== undefined) sleep(options.milliseconds)
        else sleep(100)
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
        bbs.hangup()
    }

    public logoff(): void {
        bbs.logoff()
    }

    public logout(): void {
        bbs.logout()
    }

    public terminfo: IQTermInfoObject = {
        // @ts-ignore asd
        // @ts-ignore asd
        x: console.screen_columns,
        // @ts-ignore asd
        y: console.screen_rows,
        // @ts-ignore asd
        terminal: console.terminal,
        // @ts-ignore asd
        type: console.type,
        // @ts-ignore asd
        charset: console.charset,
        // @ts-ignore asd
        getdimensions: console.getdimensions()
    }

    /**
     * User stuff
     * @summary It doesn't do much right now. But it does create new users and store them in the SBBS backend.
     * @param {IUserOptions} options An object containing the various configuration properties.
     * @see {@link IUserOptions} to learn more about the available options.
     * @returns {User} An instance of User and its return functions.
     */
    public user(options: IUserOptions): User {
        return new User(options)
    }

    /**
     * Will allow you to
     * render artwork to the screen
     * @param {IArtworkOptions} options An object containing the various configuration properties.
     * @see {@link IArtworkOptions} to learn more about the available options.
     * @returns {Artwork} An instance of Artwork and its return functions.
     * @example
     * ```typescript
     * const artwork = iq.artwork({ basepath: "/iniquity/core/src/assets/" })
     * artwork.render({ filename: Assets.we_iniq3 })
     *
     * iq.artwork({ basepath: "/iniquity/core/src/assets/", filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
     * ```
     */
    public artwork(options: IArtworkOptions): Artwork {
        return new Artwork({ basepath: options.basepath || this.basepath || undefined, filename: options.filename || undefined })
    }

    /**
     * Menu instance
     * @param {IQMenuOptions} options An object containing the various configuration properties.
     * @returns {IQMenu} An instance of Menu
     */
    public menu(options: IQMenuOptions): IQMenu {
        return new IQMenu(options)
    }
    /**
     * Frame instance
     * @param {IQFrameOptions} options An object containing the various configuration properties.
     * @returns {IQFrame} An instance of Menu
     */
    public frame(options: IQFrameOptions): IQFrame {
        return new IQFrame(options)
    }
}

export interface IQWaitOptions {
    milliseconds?: number
}

export interface IQTermInfoObject {
    x: number
    y: number
}

export interface IQMenuLoopOptions {
    wait?: number
    maxInterval?: number
}
export class IQMenu {
    private cmdkeys: string | null = null
    public commands: IQMenuOptions["commands"]

    constructor(options: IQMenuOptions) {
        if (options.commands) this.commands = options.commands

        for (const [cmdkey, command] of Object.entries(this.commands!)) if (cmdkey != "default") this.cmdkeys += cmdkey
    }

    public render(runtime: Function, options?: IQMenuLoopOptions): void {
        let count = 0

        do {
            count++
            bbs.nodesync()

            let message: IQMenuLoopMessageResponse = {
                options: options,
                interval: count,
                system: system
            }

            runtime(message)

            iq.wait(options?.wait || 100)
            if (options?.maxInterval! >= count) continue
            else break
        } while (bbs.online && !js.terminated)
    }

    public prompt(options: any): IQMenuPromptFunctions {
        if (!this.commands) throw new Error("No commands appear to be configured for this menu.")

        let commands = Object.keys(this.commands)
            .filter((cmdkey) => cmdkey != "default")
            .join(",")

        if (options.x && options.y) iq.gotoxy(options.x, options.y)
        if (options.text !== undefined) iq.say(commands + ":" + options.text)
        if (typeof options === "string") iq.say(commands + ":" + options)

        return {
            gotoxy(x: number, y: number) {
                console.gotoxy(x, y)
                return {
                    keypressed(cmdkeys?: string) {
                        return this.keypressed(cmdkeys || this.cmdkeys)
                    }
                }
            },
            keypressed(cmdkeys: string) {
                return this.keypressed(cmdkeys)
            }
        }
    }

    public keypressed(cmdkeys: string | null = this.cmdkeys): string {
        // @ts-expect-error
        // return console.getkeys(cmdkeys || this.cmdkeys, K_UPPER)
        var char = console.inkey(K_UPPER)
        // console.putmsg(char)
        return char
    }
}

export class IQFrame {
    private frame: any | null = null
    public is_open!: boolean
    public transparent!: boolean
    public scrollbars!: boolean

    /**
     * toggle true/false to restrict/allow frame movement outside display
     *
     */
    public checkbounds!: boolean

    constructor(options: IQFrameOptions) {
        // @ts-ignore
        this.frame = new Frame(options.x, options.y, options.width, options.height, options.color, options.parent)
        if (options.artwork) this.frame.load(options.artwork)
    }
    public open(): void {
        this.frame!.open()
    }
    public draw(): void {
        this.frame!.draw()
    }
    public delete(): void {
        this.frame!.delete()
    }
    public cycle(): void {
        this.frame!.cycle()
    }
    public refresh(): void {
        this.frame!.refresh()
    }
    public close(): void {
        this.frame!.close()
    }
    public print(message: string): void {
        this.frame!.putmsg(message)
    }
    public say(message: string): void {
        this.frame!.putmsg(message)
    }
    public gotoxy(x: number, y: number): void {
        this.frame!.gotoxy(x, y)
    }
    public loop(runtime: Function, interval?: number): void {
        // @ts-ignore
        if (!this.is_open) this.open()
        do {
            runtime()
            this.cycle()
            sleep(interval || 100)
        } while (bbs.online && !js.terminated)
    }
    public load(filename: any) {
        this.frame.load(filename)
    }
}

export enum IQFrameColorOptions {
    // @ts-ignore
    black = BG_BLACK,
    // @ts-ignore
    blue = BG_BLUE
}

export enum IQFrameColorOptions {
    // @ts-ignore
    black = BG_BLACK,
    // @ts-ignore
    blue = BG_BLUE
}
export class Group {}

/**
 * Network
 * @summary I can't wait to get started on this!
 */
export class Network {}

/**
 * User
 * @summary Some basic user utils. More to follow.
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
 * Text
 * @summary Core text file display and manipulation capabilities
 */
export class Text {}

/**
 * Iniquity Core Artwork
 * @summary Core artwork display and manipulation capabilities
 * @example
 * ```typescript
 * import { Artwork } from "@iniquitybbs/core"
 *
 * const art = new Artwork({ filename: "./path/to/file.ans"})
 *
 * art.render({ speed: 50}).pause()
 *
 * art.render({ mode: "line", clearScreenBefore: true }).colorReset().pause()
 *
 * ```
 */
export class Artwork {
    public basepath: string | undefined
    public filename: string | undefined
    private fileHandle: any

    /**
     * The Iniquity Artwork rendering class
     * @param {IArtworkOptions} options An object containing the various configuration properties.
     * @see {@link IArtworkOptions}
     * @returns {Artwork} An instance of Artwork
     */
    constructor(options: IArtworkOptions) {
        this.basepath = options.basepath || Iniquity.prototype.basepath || undefined
        this.filename = options.filename || undefined
    }

    /**
     * Render
     * @summary Display ANSI/ASCII/PETSCII text files onto the screen
     * @param {IArtworkRenderOptions} options An object containing the various configuration parameters.
     * @see {@link IArtworkRenderOptions}
     * @returns {IArtworkRenderFunctions} Will render the artwork on the screen as well as provide various render functions.
     * @example
     * ```typescript
     * import { Artwork } from "@iniquitybbs/core"
     *
     * const art = new Artwork()
     * art.render({ mode: "line", speed: 100 }).clearScreen().pause()
     * ```
     */

    render(options?: IArtworkRenderOptions): IArtworkRenderFunctions {
        if (options?.clearScreenBefore === true) console.putmsg("@POFF@@CLS@@PON@".color("reset"))

        let basepath = options?.basepath || this.basepath || new Error("I need to know where the archives folder is located!")
        let filename = options?.filename || this.filename || new Error("I need to know what file to display!")
        let mode = options?.mode || "line"
        let speed = options?.speed || 30
        let data = options?.data || {}

        switch (mode) {
            case "reactive":
                // @ts-ignore asd
                console.printfile(`${this.basepath}/${filename}`, P_WORDWRAP, 4, data)
                break

            case "@-codes":
                // @ts-ignore these damn constants.
                console.putmsg(`@TYPE:${this.basepath}/${filename}@`, P_WORDWRAP, 4, data)
                break
            case "line":
                console.line_counter = 0
                // @ts-ignore Using Synchronet's JS File operations
                this.fileHandle = new File(`${this.basepath}/${filename}`)
                if (!this.fileHandle.open("r")) alert("Iniquity: Error opening file: " + `${this.basepath}/${filename}`)
                let text = this.fileHandle.readAll()

                for (let i = 0; i < text.length; i++) {
                    console.putmsg(text[i])
                    sleep(speed)
                    if (i < text.length - 1) console.putmsg("\r\n")
                    console.line_counter = 0
                }
                this.fileHandle.close()
                break

            case "character":
                break
            default:
            // nothing...
        }

        return {
            pause(options?: IQPauseOptions): void {
                if (options) this.pause({ colorReset: options?.colorReset || false, center: options?.center || false })
                else console.putmsg("".color("reset"))
                console.pause()
            },
            colorReset(): void {
                console.putmsg("".color("reset"))
            },
            cursor(x: number, y: number): void {
                console.gotoxy(x, y)
            },
            gotoxy(x: number, y: number): void {
                console.gotoxy(x, y)
            },
            prompt(x: number, y: number, text?: string): void {
                console.gotoxy(x, y)
                if (text) console.putmsg(text)
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
        case "clear":
            return "\u001b[0m" + this

        default:
            return "\u001b[0m" + this
    }
}

String.prototype.gotoxy = function (x: number, y: number): string {
    console.gotoxy(x, y)
    return this as string
}

String.prototype.center = function (): string {
    console.center(this as string)
    return this as string
}

String.prototype.newlines = function (count?: number | 0): string {
    let string = ""
    for (let i = 0; i <= count!; i++) {
        string += "\r\n"
    }
    return string + this
}

export function say(string: string): IBBSSayFunctions {
    return {
        pause(options?: IQPauseOptions): void {
            iq.pause(options)
        },
        wait(options?: IQWaitOptions | number): void {
            iq.wait(options || 100)
        }
    }
}

export function gotoxy(x: number, y: number): void {
    iq.gotoxy(x, y)
}

export function pause(options?: IQPauseOptions): void {
    iq.pause()
}
export function wait(options?: IQWaitOptions): void {
    iq.wait(options)
}

export namespace IQ {
    export function gotoxy(x: number, y: number): void {
        iq.gotoxy(x, y)
    }
    export function say(options: IBBSSayOptions | string): void {
        iq.say(options)
    }
    export function pause(options?: IQPauseOptions): void {
        iq.pause(options)
    }
    export function wait(options?: IQWaitOptions): void {
        iq.wait(options)
    }

    export namespace Core {
        export class Iniquity {}
        // export class Module imp IQModule {}
        export class Menu extends IQMenu {}
        export class Frame extends IQFrame {}
    }
}

declare let console: ISSBSConsole

interface ISBBSServer {
    [x: string]: any
}
interface ISBBSUser {
    [x: string]: any
}
interface ISBBSClient {
    [x: string]: any
}
interface ISBBSGlobal {
    [x: string]: any
}

/**
 * Issbsconsole
 */
declare interface ISSBSConsole {
    writeln: any
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
    getkeys(commands: string, constant?: String): void
    inkey: any
}
/**
 * Isbbssystem
 */
interface ISBBSSystem {
    name: string
    operator: string
    node_list: any
    stats: any
}

interface ISBBSBbs {
    [x: string]: any
}

// import * as path from "path"
// import yargs from "yargs"

// /**
//  * Os
//  * @class
//  * @implements yargs.CommandModule
//  */
// class Core implements yargs.CommandModule {
//     public command = "core [command]"
//     public describe = "make a get HTTP request"
//     public builder = (yargs: yargs.Argv) => {
//         return yargs.commandDir(path.join(__dirname + "/commands"), { recurse: true, exclude: RegExp("/*.spec.*/") }).pkgConf("iniquity")
//     }
//     public handler(argv: yargs.Arguments) {}
// }

// const cmds: yargs.CommandModule = new Core()

// if (process.argv.length > 2) yargs.command(cmds).help().argv

const iq = new Iniquity()
export default iq

/** Decorators  */

/**
 * An experimental Iniquity module decorator for bbs modules
 * @author ispyhumanfly
 * @param constructor
 */

export enum IQModuleACLS {
    low = 1,
    medium = 2,
    high = 3,
    superHigh = 4
}
export interface IQModuleOptions {
    basepath?: string
    assets?: string
    access?: IQModuleACLS
}
export function IQModule(options?: IQModuleOptions) {
    return function (constructor: Function) {
        constructor.prototype.basepath = options?.basepath
        constructor.prototype.assets = options?.assets
        constructor.prototype.access = options?.access

        // if (options?.access === IQModuleACLS.low) {
        //     iq.say("You do can't access this module.".color("red")).pause()
        //     // iq.disconnect()
        // }
    }
}

/**
 * The IQ script executed as part of a module.
 * @param {IQModuleRuntimeOptions} options
 * @returns
 */
export function IQModuleRuntime(options?: IQModuleRuntimeOptions): any {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor): any {
        if (options?.clearScreenBefore === true) iq.print("@POFF@@CLS@@PON@".color("reset"))
    }
}
export interface IQModuleRuntimeOptions {
    debug?: boolean
    clearScreenBefore?: boolean
}

export class IQModuleContainer {
    public basepath!: string
    public assets!: string
    public access!: IQModuleACLS
}

export { Assets as IQCoreAssets } from "./assets/index"
export { IQCoreModules } from "./modules/index"

declare global {
    export namespace js {
        export function setImmediate(callback: (...args: any) => void, ...args: any): void
        export function setTimeout(handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]): number
        export function setInterval(handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]): object
        export function addEventListener(event: string, handler: Function): number
        export function removeEventListener(): number
        export function dispatchEvent(event: string, thisObj: object): void
        export let terminated: boolean
        export let do_callbacks: boolean
    }

    export function load(library: string): void
    export function alert(text: string): void
    export function prompt(text: string): string
    export function sleep(miliseconds: number): void
    export function yield(forced: boolean): number

    export function random(max_number: number): number

    export let client: ISBBSClient
    export let system: ISBBSSystem
    export let server: ISBBSServer

    export let user: ISBBSUser
    export let bbs: ISBBSBbs
    export let time: number
}
