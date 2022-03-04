import iq, { IQModule, IQModuleTemplate, IQModuleScript, IQModuleACLS, IQCoreAssets } from "../index"

@IQModule({
    basepath: "/iniquity/core/src/assets/",
    access: IQModuleACLS.medium
})
export class Apply extends IQModuleTemplate {
    @IQModuleScript({
        clearScreenBefore: true,
        debug: true
    })
    _() {
        iq.artwork({ basepath: this.basepath, filename: IQCoreAssets._5m_hodl4a }).render()

        let newUser = iq.user({
            name: iq.ask("What would you like your handle to be?".newlines(2).color("white")),
            password: iq.ask("And your password?".newlines(2).color("white"))
        })

        iq.say(`Welcome ${newUser.name}. And goodbye!`.newlines().center())
    }
}
