import { IQ, IQModule, IQModuleRuntime, IQModuleACLS, IQReactor, IQCoreAssets } from "@iniquitybbs/core"

@IQModule({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    assets: "",
    encoding: "CP437",
    data: IQReactor({
        message: "Umm, yeah this needs to change",
        number: 1,
        time: time(),
        system: system.stats
    }),
    computed: {}
})
export class Apply extends IQ {
    @IQModuleRuntime({ debug: true })
    start() {
        this.artwork({ filename: IQCoreAssets.iq3_apply }).render({ clearScreenBefore: true }).cursor(40, 10)

        let newUser = this.user({
            name: this.ask("What would you like your handle to be?".center().newlines(0).color("white")),
            password: this.ask("And your password?".newlines(2).color("white"))
        }).new()

        alert(JSON.stringify(newUser))
    }
}

export default new Apply()
