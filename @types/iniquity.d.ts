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

/** 
 * Additional functions exported by render
 * @function pause What pause does
*/
interface IArtworkRenderFunctions {
    pause(options?: IBBSPauseOptions ): void 
}
/**
 * Ibbsconfig params
 * @param name Means this
 */
interface IBBSConfigParams {
    name: string
    sysop: string
}
