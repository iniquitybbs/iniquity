import iq, { IQModule, IQModuleTemplate, IQModuleScript, IQModuleACLS } from "../index"

@IQModule({
    access: IQModuleACLS.low
})
export class Hangup extends IQModuleTemplate {
    @IQModuleScript({ debug: true })
    _() {
        iq.print("@POFF@ @CLS@ Nice knowing yuh! @PON@".color("background blue"))
        iq.disconnect()
    }
}
