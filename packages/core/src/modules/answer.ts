import iq, { IQModule, IQModuleTemplate, IQModuleScript, IQModuleACLS, IQCoreAssets, IQCoreModules } from "@iniquitybbs/core/src/index"

/**
 * The Iniquity Answwer Module
 * @description Does the most basic thing... answers the phone.
 * @module
 */
@IQModule({
    basepath: "/iniquity/core/src/assets/",
    access: IQModuleACLS.low
})
export class Answer extends IQModuleTemplate {
    @IQModuleScript({
        clearScreenBefore: true,
        debug: true
    })
    _() {
        const art = iq.artwork({ basepath: this.basepath })

        art.render({ filename: IQCoreAssets._5m_hodl4a, speed: 100 })

        iq.print({
            text: `You just connected to an iniquity bbs. It's still pretty new. Likely has bugs. Real talk, it's not even finished. But maybe you'll still think it's cool.`
                .newlines()
                .color("background red")
                .center()
        }).pause({ colorReset: true, newlines: 2, center: true })

        IQCoreModules.login()
    }
}
