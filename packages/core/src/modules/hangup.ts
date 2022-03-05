import iq, { IQModule, IQModuleTemplate, IQModuleScript, IQModuleACLS, IQCoreAssets } from "@iniquitybbs/core"

@IQModule({
    access: IQModuleACLS.low
})
export class Hangup extends IQModuleTemplate {
    @IQModuleScript({ debug: true })
    _() {
        iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.iq3_logoff }).render({ speed: 10 }).pause({ newlines: 2 })

        iq.print("@POFF@ @CLS@ Nice knowing yuh! @PON@".color("background blue"))
        iq.disconnect()
    }
}
