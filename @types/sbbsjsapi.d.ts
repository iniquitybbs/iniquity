declare function load(library: string): void
declare function alert(library: string): void

declare function log(level: LOG_INFO | LOG_WARN, value: string): string
declare let console: ISSBSConsole = {}
declare let system: ISBBSSystem = {}
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
}
/**
 * Isbbssystem
 */
interface ISBBSSystem {
    name: string
    operator: string
}