/**
 * A whole bunch of functions core to iniquity
 */
/**
 * Render options
 */
export interface IArtworkRenderOptions {
    file?: string;
    speed?: number;
    encoding?: "CP437" | "UTF8";
    mode?: "line" | "character";
    clearScreenBefore?: boolean;
}
export interface IBBSPauseOptions {
    colorReset?: boolean | false;
    newlines?: number | 0;
    center?: boolean | false;
}
export interface IBBSPrintOptions {
}
export interface IBBSSayOptions {
}
export interface IArtworkOptions {
    filename: string;
}
export interface IUserOptions {
    name: string;
    password: string;
}
/**
 * Additional functions exported by render
 * @function pause What pause does
 */
export interface IArtworkRenderFunctions {
    pause(options?: IBBSPauseOptions): void;
}
export interface IBBSSayFunctions {
    pause(options?: IBBSPauseOptions): void;
}
export interface IBBSPrintFunctions {
    pause(options?: IBBSPauseOptions): void;
}
export interface IMenuOptions {
    key: string;
    options: object[];
}
export interface IMenuCommands {
    command: IMenuCommand;
}
export interface IMenuCommand {
    key: number;
    name: string;
}
/**
 * Ibbsconfig params
 * @param name Means this
 */
export interface IBBSConfigParams {
    name: string;
    sysop: string;
}
export default class Iniquity {
    name: string;
    /**
     *
     */
    constructor();
    /**
     * Says something to the user. Does not parse MCI/@- codes.
     * @param text
     */
    say(text: string): IBBSSayFunctions;
    /**
     * Prints something to the user. Parses Renegade MCI/Synchronet @- codes.
     * @param text
     * @returns IBBSPrintFunctions
     */
    print(text: string): IBBSPrintFunctions;
    /**
     * Pauses the client screen
     * @param options
     */
    pause(options?: IBBSPauseOptions): void;
    /**
     * Halt the screen for a specified period of time.
     * @param speed In miliseconds
     */
    sleep(speed: number): void;
    /**
     * Displays a prompt (value) and returns a string of user input (ala clent-side JS)
     * @param question
     * @returns response
     */
    ask(question: string): string;
    /**
     * Will disconnect the user immediately.
     * @returns void
     */
    disconnect(): void;
    /**
     * Iniquity User
     * @param IUserOptions
     * @param IUserOptions.name The users name.
     * @param IUserOptions.password The users password.
     * @returns User
     */
    user(options: IUserOptions): User;
    /**
     * Iniquity Artwork
     * @param IArtworkOptions
     * @param IArtworkOptions.filename The relative path to a text document.
     * @returns Artwork
     */
    artwork(options: IArtworkOptions): Artwork;
    /**
     * Menu instance
     * @param IMenuOptions
     * @param IMenuOptions.name The users name
     * @param IMenuOptions.password The users password
     * @returns Menu
     */
    menu(options: IMenuOptions): Menu;
}
export declare class Menu {
    constructor(options: IMenuOptions);
    /**
     *
     */
    prompt(): void;
}
export declare class Group {
}
/**
 * Core networking possibilities
 */
export declare class Network {
}
/**
 * Core user management functionality
 */
export declare class User {
    name: string;
    password: string;
    logins: number;
    /**
     * Mechanisms for working with an individual iniquity user
     * @param options.name
     * @param options.password
     */
    constructor(options: IUserOptions);
}
/**
 * Core text file display and manipulation capabilities
 */
export declare class Text {
}
/**
 * Core artwork display and manipulation capabilities
 */
export declare class Artwork {
    filename: string;
    private fileHandle;
    /**
     * The Iniquity Artwork Class
     * @param IArtworkOptions
     * @param IArtworkOptions.filename
     */
    constructor(options: IArtworkOptions);
    /**
     * Render a ANSI/ASCII/PETSCII file to the screen
     * @param IArtworkRenderOptions
     * @config IArtworkRenderOptions.file Override the filename set in the Artwork constructor
     * @config IArtworkRenderOptions.mode Choose between "character" or "line" at a time rendering. Defaults to line.
     * @config IArtworkRenderOptions.speed Choose the speed. Can adjust in milliseconds.
     * @config IArtworkRenderOptions.clearScreenBefore Clear the screen first before rendering the artwork
     * @returns {IArtworkRenderFunctions} pause Will apply a pause prompt after rendering the artwork
     */
    render(options?: IArtworkRenderOptions): IArtworkRenderFunctions;
}
export declare function load(library: string): void;
export declare function alert(text: string): void;
export declare function prompt(text: string): string;
export declare function sleep(duration: number): void;
export declare let console: ISSBSConsole;
export declare let system: ISBBSSystem;
export declare let bbs: ISBBSBbs;
/**
 * Issbsconsole
 */
export interface ISSBSConsole {
    log: any;
    print: any;
    inactivity_warning: number;
    inactivity_hangup: number;
    putmsg: any;
    line_counter: number;
    clear: any;
    pause: any;
}
/**
 * Isbbssystem
 */
export interface ISBBSSystem {
    name: string;
    operator: string;
}
export interface ISBBSBbs {
    logout: any;
    logoff: any;
    hangup: any;
}
