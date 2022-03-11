import { Answer, Hangup, Login, Apply } from "."

export const answer = () => new Answer().start()
export { Answer } from "./answer"

export const login = () => new Login().start()
export { Login } from "./login"

export const hangup = () => new Hangup().start()
export { Hangup } from "./hangup"

export const apply = () => new Apply().start()
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
        return new Answer().start()
    },
    hangup() {
        return new Hangup().start()
    },
    login() {
        return new Login().start()
    },
    apply() {
        return new Apply().start()
    }
}
