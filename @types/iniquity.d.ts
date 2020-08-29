/**
 * Render options
 */
interface IRenderOptions {
    file: string
    speed?: number
    encoding?: "CP437" | "UTF8"
    mode?: "line" | "character"
    clearScreenBefore?: boolean
}

/**
 * Ibbsconfig params
 * @param name Means this
 */
interface IBBSConfigParams {
    name: string
    sysop: string
}
