declare function load(library: string): void
declare function alert(text: string): void
declare function prompt(text: string): string
declare function sleep(duration: number): void
declare let console: ISSBSConsole = {}
declare let system: ISBBSSystem = {}
declare let bbs: ISBBSBbs = {}

/**
 * Issbsconsole
 */
interface ISSBSConsole {
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
