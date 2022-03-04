import { Login } from "./login"
import { Answer } from "./answer"
import { Hangup } from "./hangup"
import { Apply } from "./apply"

export const login = function () {
    new Login()._()
}
export { Login } from "./login"

export const answer = function () {
    new Answer()._()
}
export { Answer } from "./answer"

export const hangup = function () {
    new Hangup()._()
}
export { Hangup } from "./hangup"

export const apply = function () {
    new Apply()._()
}
export { Apply } from "./apply"

/**
 * A simple wrapper around the core iniquity modules.
 *
 */
export const IQCoreModules = {
    /**
     * Answer
     */
    answer() {
        return new Answer()._()
    },
    hangup() {
        return new Hangup()._()
    },
    login() {
        return new Login()._()
    },
    apply() {
        return new Apply()._()
    }
}
