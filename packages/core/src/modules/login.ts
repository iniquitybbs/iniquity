import iq, { IQModule, IQModuleTemplate, IQModuleScript, IQModuleACLS, IQCoreAssets, IQCoreModules } from "../index"

/**
 * Iniquity Login Module
 * @description A simple login module.
 * @module
 */
@IQModule({ basepath: "/iniquity/core/src/assets/", access: IQModuleACLS.low })
export class Login extends IQModuleTemplate {
    @IQModuleScript({ clearScreenBefore: true, debug: true })
    _() {
        const art = iq.artwork({ basepath: this.basepath })

        art.render({ filename: IQCoreAssets._5m_hodl4a, speed: 100 }).pause()

        iq.say(this.access.toString())

        iq.say("You've connected to a prototype of the new iniquity BBS Development Platform.".newlines(2).color("bright red").center()).pause()

        art.render({ filename: IQCoreAssets._5m_hodl4a, speed: 100 })

        const login = iq.ask("What is your login: ".newlines(1))

        switch (login) {
            case "new":
            case "signup":
            case "apply":
                IQCoreModules.apply()
                iq.disconnect()
                break
            default:
                if (iq.user({ name: login, password: iq.ask("And your password?".newlines(2).color("white")) })) {
                    alert("somethingsync")
                }

                iq.pause()

                art.render({ filename: IQCoreAssets._5m_matrix_1b2, clearScreenBefore: true })

                break
        }
    }
}
