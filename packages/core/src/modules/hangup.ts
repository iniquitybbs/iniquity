import iq, { IQ, IQModule, IQModuleACLS, IQCoreAssets, IQModuleRuntime, IQReactor } from "@iniquitybbs/core"

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
export class Hangup extends IQ {
    @IQModuleRuntime({ debug: true })
    start() {
        iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.iq3_logoff }).render({ speed: 10 }).pause({ newlines: 2 })

        iq.print("@POFF@ @CLS@ Nice knowing yuh! @PON@".color("background blue"))
        iq.disconnect()
    }
}

export default new Hangup()
