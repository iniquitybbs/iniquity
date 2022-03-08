import { Answer, Hangup, Login, Apply } from "."

export const answer = () => new Answer()._()
export { Answer } from "./answer"

export const login = () => new Login()._()
export { Login } from "./login"

export const hangup = () => new Hangup()._()
export { Hangup } from "./hangup"

export const apply = () => new Apply()._()
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
