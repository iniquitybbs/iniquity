import apply, { Apply } from "./eternity/apply"
import login, { Login } from "./eternity/login"

export * from "./eternity/apply"
export * from "./eternity/login"

export const IQTemplatesModules = {
    apply() {
        return apply.start()
    },
    login() {
        return login.start()
    }
}
