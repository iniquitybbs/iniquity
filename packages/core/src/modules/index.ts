import answer, { Answer } from "./answer"
import apply, { Apply } from "./apply"
import hangup, { Hangup } from "./hangup"
import login, { Login } from "./login"
import wfc, { WFC } from "./wfc"

export * from "./login"
export * from "./files"
export * from "./connections"
export * from "./apply"
export * from "./logon"
export * from "./messages"
export * from "./wfc"

/**
 * A simple wrapper around the core iniquity modules.
 *
 */
export const IQCoreModules = {
    /**
     * Answer
     */
    answer() {
        return answer.start()
    },
    hangup() {
        return hangup.start()
    },
    login() {
        return login.start()
    },
    apply() {
        return apply.start()
    },
    wfc() {
        return wfc.start()
    }
}
