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

import { IQCoreAssets } from "./assets/index"

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
load("layout.js")
load("lightbar.js")
load("progress-bar.js")
load("scrollbar.js")
load("tree.js")
load("funclib.js")
load("event-timer.js")
load("event-emitter.js")
load("termsetup.js")
load("cterm_lib.js")
load("qengine.js")
load("utf8_cp437.js")
load("utf8_ascii.js")
load("utf8_utf16.js")
load("ansiterm_lib.js")
load("ansiedit.js")
load("loadfonts.js")
load("graphic.js")

console.inactivity_warning = 9999
console.inactivity_hangup = 99999

if (!Object.entries) {
    Object.entries = function (obj: any) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i)
        while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]

        return resArray
    }
}

// TODO get core.js in here and use all those pollifills instead of making my own.
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        // @ts-expect-error
        if (search instanceof RegExp) {
            throw TypeError("first argument must not be a RegExp")
        }
        if (start === undefined) {
            start = 0
        }
        return this.indexOf(search, start) !== -1
    }
}

export interface IQReactorOptions {
    model: any
    observe: Function
    notify: Function
}

/**
 * Iniquity reactive data model
 * @see https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects
 * @param dataObj
 * @returns
 */
export function IQReactor(dataObj: any): IQReactorOptions {
    let signals = {}

    observeData(dataObj)

    // Besides the reactive data object, we also want to return and thus expose the observe and notify functions.
    return {
        model: dataObj,
        observe,
        notify
    }

    function makeReactive(obj: any, key: any) {
        let val = obj[key]

        Object.defineProperty(obj, key, {
            get() {
                return val // Simply return the cached value
            },
            set(newVal) {
                val = newVal // Save the newVal
                notify(key) // Ignore for now
            }
        })
    }

    // Iterate through our object keys
    function observeData(obj: any) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                makeReactive(obj, key)
            }
        }
    }

    function observe(property: any, signalHandler: any) {
        alert(property)
        // @ts-expect-error
        if (!signals[property]) signals[property] = [] // If there is NO signal for the given property, we create it and set it to a new array to store the signalHandlers
        // @ts-expect-error
        signals[property].push(signalHandler) // We push the signalHandler into the signal array, which effectively gives us an array of callback functions
    }

    function notify(signal: any, newVal?: any) {
        // @ts-expect-error
        if (!signals[signal] || signals[signal].length < 1) return // Early return if there are no signal handlers

        // @ts-expect-error
        signals[signal].forEach((signalHandler) => signalHandler()) // We call each signalHandler that’s observing the given property
    }
}

/**
 * Artwork render options
 */
export interface IQArtworkRenderOptions {
    /**
     * The full path to your art folder
     */
    basepath?: string | undefined
    /**
     * The file name of the artwork you would like to render to the screen
     */
    filename?: string | undefined
    /**
     * How fast you would like the artwork rendered to the screen.
     */
    speed?: number | undefined
    /**
     * Supported character encodings are CP437 and UTF8.
     */
    encoding?: "CP437" | "UTF8"
    /**
     * The rendering mode to use. e.g. Line at a time, character at a time, etc.
     */
    mode?: "line" | "character" | "@-codes" | "reactive"
    /**
     * A boolean representing if you want the screen cleared before.
     */
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
export interface IQArtworkOptions {
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
export interface IQArtworkRenderFunctions {
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

export interface IQMenuPromptOptions {}

export interface IQMenuPromptFunctions {
    /**
     * Go to the specified coordinates on the terminal.
     * This function can also be chained with .command()
     * @param x Width coordinates.
     * @param y Height coordinates.
     */
    gotoxy(x: number, y: number): void | any

    /**
     * Execute a menu command, with optional callback for working with response data.
     * This function can also be chained with .gotoxy()
     * @param command
     * @param callback
     */
    command(command: Function, callback?: Function): void
}

export interface IBBSSayFunctions {
    /**
     * @param {IQPauseOptions} options
     * {@link IQPauseOptions}
     */
    pause(options?: IQPauseOptions): void
    wait(options?: IQWaitOptions | number): void
    gotoxy(x: number, y: number): void
}
export interface IBBSPrintFunctions {
    /**
     * @param {IQPauseOptions} options
     * @see {@link IQPauseOptions}
     */
    pause(options?: IQPauseOptions): void
    wait(options?: IQWaitOptions | number): void
    gotoxy(x: number, y: number): void
}

/**
 * Menu options
 * @param {IQMenuOptions} options Some options.
 * @see {@link IQMenuOptions}
 */
export interface IQMenuOptions {
    name?: string
    description?: string
    prompt?: IQMenuPromptOptions
    cmdkeys?: string
    commands: {
        [s: string]: (...args: any) => any
    }

    frame?: IQFrameOptions
    data?: any
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
    transparent?: boolean
    scrollbars?: boolean
}
export interface IMenuCommands {
    command: IMenuCommand
}

export interface IMenuCommand {
    key: number
    name: string
}

export interface IQMenuPromptOptions {
    x?: number
    y?: number
    text?: string
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

export abstract class IQBaseConfig {
    public basepath!: string
    public assets!: string
    public access!: IQModuleACLS
    public encoding!: "CP437" | "UTF8"
    public data!: IQReactorOptions
    public computed!: any
}

export class Iniquity extends IQBaseConfig {
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

        return {
            pause(options?: IQPauseOptions): void {
                pause(options)
            },
            wait(options?: IQWaitOptions): void {
                wait(options)
            },
            gotoxy(x: number, y: number): void {
                gotoxy(x, y)
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

        return {
            pause(options?: IQPauseOptions): void {
                pause(options)
            },
            wait(options?: IQWaitOptions): void {
                wait(options)
            },
            gotoxy(x: number, y: number): void {
                gotoxy(x, y)
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

    /**
     * Sends the cursor to a particular coordinates on the screen
     * @param x
     * @param y
     */
    public gotoxy(x: number, y: number): void {
        console.gotoxy(x, y)
    }

    /**
     * Sends the cursor to a particular coordinates on the screen
     * @param {IQCursorOptions} options
     */
    public cursor(options?: IQCursorOptions): IQCursorChainableMethods {
        let actions: IQCursorChainableMethods = {
            errors: [],
            up(rows = 1): IQCursorChainableMethods {
                console.up(rows)
                return this
            },
            down(rows = 1): IQCursorChainableMethods {
                console.down(rows)
                return this
            },
            left(cols = 1): IQCursorChainableMethods {
                console.left(cols)
                return this
            },
            right(cols = 1): IQCursorChainableMethods {
                console.right(cols)
                return this
            }
        }

        return actions
    }

    /**
     * Halt the screen for a specified period of time.
     * @param {IQWaitOptions} options In miliseconds
     * @returns void
     * @example
     * iq.wait(100)
     * wait(10)
     * this.wait(1000)
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

    /**
     * Terminal information available to iniquity
     */
    public terminfo: IQTermInfoObject = {
        x: console.screen_columns,
        y: console.screen_rows,
        terminal: console.terminal,
        type: console.type,
        charset: console.charset
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
     * @param {IQArtworkOptions} options An object containing the various configuration properties.
     * @see {@link IQArtworkOptions} to learn more about the available options.
     * @returns {Artwork} An instance of Artwork and its return functions.
     * @example
     * ```typescript
     * const artwork = iq.artwork({ basepath: "/iniquity/core/src/assets/" })
     * artwork.render({ filename: Assets.we_iniq3 })
     *
     * iq.artwork({ basepath: "/iniquity/core/src/assets/", filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
     * ```
     */
    public artwork(options?: IQArtworkOptions): Artwork {
        return new Artwork({ basepath: options?.basepath || this.basepath || undefined, filename: options?.filename || undefined })
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

export abstract class IQ extends Iniquity {
    public abstract start(): any
}

export interface IQCursorOptions {
    [s: string]: any
}

export interface IQCursorChainableMethods {
    errors: []
    up: (rows?: number) => IQCursorChainableMethods
    down: (rows?: number) => IQCursorChainableMethods
    left: (cols?: number) => IQCursorChainableMethods
    right: (cols?: number) => IQCursorChainableMethods
}
export interface IQWaitOptions {
    milliseconds?: number
}

export interface IQAskOptions {
    text?: string
}

export interface IQTermInfoObject {
    x: number
    y: number
    terminal: any
    type: any
    charset: any
}

export interface IQMenuLoopOptions {
    /**
     * Basically halt everything for the specified period of milliseconds.
     * @param milliseconds
     */
    wait?: number

    /**
     * The maximum number of the menu event loop that can run.
     */
    maxInterval?: number

    /**
     * Data you would like to be reactive in the menu
     */
    data?: any
}
export class IQMenu {
    public name?: string
    public description?: string
    protected cmdkeys: string | null = null
    public commands!: IQMenuOptions["commands"]

    constructor(options: IQMenuOptions) {
        if (options.name) this.name = options.name
        if (options.description) this.description = options.name
        if (options.commands) this.commands = options.commands
        for (const [cmdkey, command] of Object.entries(this.commands!)) if (cmdkey != "default") this.cmdkeys += cmdkey
    }

    public render(module: Function, options?: IQMenuLoopOptions): void {
        let count = 0
        let cache: IQMenuLoopMessageResponse = {}
        const maxInterval = options?.maxInterval || 10000000

        do {
            count++
            bbs.nodesync()
            bbs.user_sync()

            let res: IQMenuLoopMessageResponse = {
                options: options,
                interval: count,
                system: system,
                // @ts-expect-error
                cmdkey: console.inkey(K_UPPER).toString() || null
            }

            if (res.cmdkey === cache.cmdkey) continue
            else this.commands[res.cmdkey] ? module(res, this.commands[res.cmdkey]()) : module(res, null)

            cache = res

            iq.wait(options?.wait)
            if (maxInterval! >= count) continue
            else break
        } while (bbs.online && !js.terminated)
    }

    /**
     * Will render a prompt to the screen.
     * @param {IQMenuPromptOptions} options
     * @returns {IQMenuPromptFunctions} Functions that can be chained to the prompt.
     * @example
     * menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey)
     * menu.prompt({ text: "Enter your command: ".color("bright cyan"), x: 20, y: 20 }).command(cmdkey)
     * menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey, (response, error) => {
     *      if (response.error) {
     *          alert(errors)
     *      }
     *  })
     */
    public prompt(options?: IQMenuPromptOptions | string): IQMenuPromptFunctions {
        if (!this.commands) throw new Error("No commands appear to be configured for this menu.")

        let commands = Object.keys(this.commands)
            .filter((cmdkey) => cmdkey != "default")
            .join(",")
        // @ts-expect-error
        if (typeof options === "string") console.putmsg(commands + ":" + options, P_NONE, 4)
        if (typeof options === "object") {
            if (options.x && options.y) console.gotoxy(options.x, options.y)
            // @ts-expect-error
            if (options.text !== undefined) console.putmsg(commands + ":" + options.text, P_NONE, 4)
        }

        return {
            gotoxy(x: number, y: number) {
                iq.gotoxy(x, y)
                return {
                    command(command: Function, callback?: Function) {
                        this.command(command, callback)
                    }
                }
            },
            command(command: Function, callback?: Function) {
                if (typeof command !== "function") return
                if (typeof callback !== "function") return

                if (callback) callback(command)
                else command()
            }
        }
    }

    public keypressed(cmdkeys: string | null = this.cmdkeys): string {
        // @ts-expect-error
        return console.getkeys(cmdkeys || this.cmdkeys, K_UPPER)
        // var char = console.inkey(K_UPPER)
        // console.putmsg(char)
    }
}

export class IQFrame implements IQFrameOptions {
    private frame: any | null = null
    public is_open!: boolean
    public transparent!: boolean
    public scrollbars!: boolean
    public x!: number
    public y!: number
    public width!: number
    public height!: number
    public color!: IQFrameColorOptions

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
export class User extends Iniquity {
    public name: string = ""
    public password: string = ""

    /**
     * Mechanisms for working with an individual iniquity user
     * @param options.name
     * @param options.password
     */
    constructor(options: IUserOptions) {
        super()
        this.name = options.name
        this.password = options.password
    }

    login() {
        const user = bbs.login(this.name, null, this.password)
        if (user) return user
    }

    new() {
        const user = system.new_user(this.name)
        if (user) {
            say(JSON.stringify(user)).pause()
            // @ts-expect-error
            user.password = this.password
        }
        return user
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
export class Artwork extends Iniquity {
    public filename: string | undefined
    private fileHandle: any

    /**
     * The Iniquity Artwork rendering class
     * @param {IQArtworkOptions} options An object containing the various configuration properties.
     * @see {@link IQArtworkOptions}
     * @returns {Artwork} An instance of Artwork
     */
    constructor(options: IQArtworkOptions) {
        super()
        this.basepath = options?.basepath || this.basepath
        this.filename = options.filename || undefined
    }

    /**
     * Render
     * @summary Display ANSI/ASCII/PETSCII text files onto the screen
     * @param {IQArtworkRenderOptions} options An object containing the various configuration parameters.
     * @see {@link IQArtworkRenderOptions}
     * @returns {IQArtworkRenderFunctions} Will render the artwork on the screen as well as provide various render functions.
     * @example
     * ```typescript
     * import { Artwork } from "@iniquitybbs/core"
     *
     * const art = new Artwork()
     * art.render({ mode: "line", speed: 100 }).clearScreen().pause()
     * ```
     */

    render(options?: IQArtworkRenderOptions): IQArtworkRenderFunctions {
        if (options?.clearScreenBefore === true) console.putmsg("@POFF@@CLS@@PON@".color("reset"))

        let basepath = options?.basepath || this.basepath
        let filename = options?.filename || this.filename || new Error("I need to know what file to display!")
        let encoding = options?.encoding || this.encoding
        let mode = options?.mode || "@-codes"
        let speed = options?.speed || 30
        let data = options?.data || { message: "test" }

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
                    // // @ts-ignore these damn constants.
                    // if (encoding === "CP437") console.putmsg(text[i], null, null, data)
                    // // @ts-ignore these damn constants.
                    // if (encoding === "UTF8") console.putmsg(utf8_cp437(text[i]), null, null, data)

                    if (text[i].includes("SAUCE")) continue
                    // @ts-ignore
                    else console.putmsg(text[i], P_NONE, 4, data)

                    wait(speed)
                    if (i < text.length - 1) console.putmsg("\r\n")
                    console.line_counter = 0
                }
                this.fileHandle.close()
                break

            case "character":
                // @ts-expect-error
                const graphic = new Graphic(iq.terminfo.x, iq.terminfo.y)
                graphic.cpm_eof = false
                if (!graphic.load(`${this.basepath}/${filename}`)) alert("Load failure")
                else {
                    let normalized = graphic.normalize()
                    normalized.draw(undefined, undefined, undefined, undefined, undefined, undefined, options?.speed || undefined)
                }
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

/**
 * Say whatever you want, but to the screen
 * @param {IBBSSayOptions} options
 * @returns {IBBSSayFunctions}
 * @example
 * say("are we making it here?").pause()
 */
export function say(options?: IBBSSayOptions | string | object | any): IBBSSayFunctions {
    iq.say(options)
    return {
        pause(options?: IQPauseOptions): void {
            pause(options)
        },
        wait(options?: IQWaitOptions): void {
            wait(options)
        },
        gotoxy(x: number, y: number): void {
            gotoxy(x, y)
        }
    }
}

/**
 * A pretty cool method for working with cursor movement.
 * @param {IQCursorOptions} options
 * @returns {IQCursorChainableMethods}
 * @example
 * cursor().down(10).up(12).down().up().down().left(1).right(20).down(12).up(14)
 */
export function cursor(options?: IQCursorOptions): IQCursorChainableMethods {
    return iq.cursor(options)
}

export function gotoxy(x: number, y: number): void {
    iq.gotoxy(x, y)
}

export function pause(options?: IQPauseOptions): void {
    iq.pause()
}
export function wait(options?: IQWaitOptions | number): void {
    iq.wait(options)
}
export function ask(question: string): string {
    return iq.ask(question)
}

export function artwork(options: IQArtworkOptions): Artwork {
    return iq.artwork(options)
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
    export function ask(question: string): string {
        return iq.ask(question)
    }

    export function artwork(options: IQArtworkOptions): Artwork {
        return iq.artwork(options)
    }

    export class Core extends Iniquity {}

    export namespace Core {
        // export class Module imp IQModule {}
        export class Menu extends IQMenu {}
        export class Frame extends IQFrame {}
        // export function Module(options: IQModuleOptions): (constructor: Function) => void {
        //     return IQModule(options)
        // }

        export function Reactor(options: IQReactorOptions): any {
            return IQReactor(options)
        }
    }

    // NOTE this all sucks, need to find a better home for this.
    export namespace Decorators {
        export function Module(options: IQModuleOptions): (constructor: Function) => void {
            return IQModule(options)
        }
        export function ModuleRuntime(options: IQModuleRuntimeOptions): any {
            return IQModuleRuntime(options)
        }
    }

    export enum IQFrameColorOptions {}
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
    screen_rows: number
    type: any
    terminal: any
    charset: any
    screen_columns: number
    up(arg0: number): void
    down(arg0: number): void
    left(arg0: number): void
    right(arg0: number): void
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
    new_user(name: string): object
    newuser_password: string
    put_node_message(index: number, arg1: string): boolean
    nodes: number
    get_node(node: number): ISBBSSystemNodeListProperties
    name: string
    operator: string
    node_list: ISBBSSystemNodeListProperties[]
    stats: any
}
interface ISBBSSystemNodeListProperties {
    status: number
    errors: number
    action: number
    useron: number
    connection: number
    misc: number
    aux: number
    extaux: number
    dir: string
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

/**
 * The globally scoped intance of iniquity
 */
const iq = new Iniquity()
export default iq

/** Decorators  */

export enum IQModuleACLS {
    low = 1,
    medium = 2,
    high = 3,
    superHigh = 4
}
export interface IQModuleOptions extends IQBaseConfig {}

/**
 * An experimental Iniquity module decorator for bbs modules
 * @author ispyhumanfly
 * @param {IQModuleOptions} options
 */

export function IQModule(options: IQModuleOptions) {
    return function (constructor: Function) {
        constructor.prototype.basepath = options?.basepath
        constructor.prototype.assets = options?.assets
        constructor.prototype.access = options?.access
        constructor.prototype.data = options?.data
        constructor.prototype.computed = options?.computed

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

export { Assets as IQCoreAssets } from "./assets/index"

declare global {
    export namespace js {
        export function setImmediate(callback: (...args: any) => void, ...args: any): void
        export function setTimeout(handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]): number
        export function setInterval(handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]): object
        export function addEventListener(event: string, handler: Function): number
        export function removeEventListener(id: number): number
        export function dispatchEvent(event: string, thisObj?: object): void
        export let terminated: boolean
        export let do_callbacks: boolean
        export let scope: object
        export let global: object
        export let version: string
    }

    /**
     * add a line of text to the server and/or system log, values are typically string constants or variables, level is the debug level/priority (default: LOG_INFO)
     * @param level
     * @param value
     */
    export function log(level: any, value: string): string
    /**
     * stop script execution, optionally setting the global property exit_code to the specified numeric value
     * @param exit_code
     */
    export function exit(exit_code: number): void

    /**
     * produce a tone on the local speaker at specified frequency for specified duration (in milliseconds)
     * @param frequency
     * @param duration
     */
    export function beep(frequency: number, duration: number): void

    export function load(library: string): void
    export function alert(text: string): void
    export function prompt(text: string): string
    export function sleep(miliseconds: number): void
    export function yield(forced: boolean): number
    export function random(max_number: number): number
    export function time(): number

    export let client: ISBBSClient
    export let system: ISBBSSystem
    export let server: ISBBSServer

    export let user: ISBBSUser
    export let bbs: ISBBSBbs
}

/**
 * Utf8s cp437
 * @param arg0
 * @returns cp437
 */

declare function utf8_cp437(string: any): string
/**
 * Utf8s ascii
 * @param string
 * @returns ascii
 */
declare function utf8_ascii(string: any): string
/**
 * Utf8s utf16
 * @param string
 * @returns utf16
 */
declare function utf8_utf16(string: any): string

// export let K_UPPER: any

/**
 * Return a single asset random selected from an array of IQCoreAssets
 * @param {IQCoreAssets[]} assets An array of IQCoreAssets to choose from
 * @returns {IQCoreAssets} The randomly selected asset
 */
export function randomAsset(assets: string[]): string {
    return assets[Math.floor(Math.random() * assets.length)]
}
