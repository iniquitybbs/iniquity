import iq, { IQModule, IQModuleTemplate, IQModuleScript, IQModuleACLS, IQCoreAssets } from "@iniquitybbs/core"

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
        iq.artwork({ basepath: this.basepath, filename: IQCoreAssets.iq3_apply }).render({ clearScreenBefore: true })

        let newUser = iq.user({
            name: iq.ask("What would you like your handle to be?".color("reset").color("blue")),
            password: iq.ask("And your password?".color("reset").color("blue"))
        })

        iq.say(`Welcome ${newUser.name}. And goodbye!`.newlines().center())
    }
}
