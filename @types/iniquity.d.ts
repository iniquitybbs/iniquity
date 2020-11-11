/**
 * Render options
 */
interface IArtworkRenderOptions {
    file?: string
    speed?: number
    encoding?: "CP437" | "UTF8"
    mode?: "line" | "character"
    clearScreenBefore?: boolean
}

interface IBBSPauseOptions {
    colorReset?: boolean | false
    newlines?: number | 0
    center?: boolean  | false

}
interface IBBSPrintOptions {
    [string]

}
interface IBBSSayOptions {
}
interface  IArtworkOptions {
    filename: string
}
interface IUserOptions {
    name: string
    password: string
}
/** 
 * Additional functions exported by render
 * @function pause What pause does
*/
interface IArtworkRenderFunctions {
    pause(options?: IBBSPauseOptions ): void 
}

interface IBBSSayFunctions {
    pause(options?: IBBSPauseOptions): void
}
interface IBBSPrintFunctions {
    pause(options?: IBBSPauseOptions): void
}
interface IMenuOptions {
    key: string
    options: object[]
}

interface IMenuCommands {
    command: IMenuCommand

}

interface IMenuCommand {
    key: number
    name: string
}
/**
 * Ibbsconfig params
 * @param name Means this
 */
interface IBBSConfigParams {
    name: string
    sysop: string
}
