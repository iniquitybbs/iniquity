import iq, { IQModule, IQModuleContainer, IQModuleRuntime, IQModuleACLS, IQCoreAssets, IQCoreModules } from "@iniquitybbs/core"

@IQModule({ basepath: "/iniquity/core/src/assets/", access: IQModuleACLS.low })
export class Login extends IQModuleContainer {
    @IQModuleRuntime({ debug: true })
    _() {
        const art = iq.artwork({ basepath: this.basepath })

        art.render({ filename: IQCoreAssets.iq3_login }).cursor(40, 25)

        const login = iq.ask("Enter your handle, or type 'new' to apply".color("green"))

        switch (login) {
            case "new":
                IQCoreModules.apply()
                break
            default:
                if (iq.user({ name: login, password: iq.ask("And your password?".color("white")) })) {
                    iq.say("Welcome back!").pause()
                } else {
                    iq.say("You do not appear to have an account, or your, password is wrong.")
                }

                art.render({ filename: IQCoreAssets.iq3_hello, clearScreenBefore: true })
                break
        }
    }
}
