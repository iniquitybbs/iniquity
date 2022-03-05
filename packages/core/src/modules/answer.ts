import iq, { IQModule, IQModuleTemplate, IQModuleScript, IQModuleACLS, IQCoreAssets, IQCoreModules, Menu } from "@iniquitybbs/core"

@IQModule({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low
})
export class Answer extends IQModuleTemplate {
    @IQModuleScript({
        debug: true
    })
    _() {
        const menu = new Menu({
            name: "Iniquity answer menu.",
            description: "Really I just get to rattle off more non-sense."
        })
        menu.start(
            (/** Display */) => {
                const art = iq.artwork({ basepath: this.basepath })

                art.render({
                    mode: "@-codes",
                    clearScreenBefore: true,
                    filename: IQCoreAssets.iq3_hello
                }).prompt(33, 19, "[L] ogin? or [A] sk for help? Or [G] for goodbye?".color("blue"))
            },
            (/** Command Handler */) => {
                switch (menu.keypressed("LAGB")) {
                    case "L":
                        iq.gotoxy(23, 63)
                        IQCoreModules.login()
                        break
                    case "A":
                        iq.gotoxy(23, 63)
                        break
                    case "G":
                    case "H":
                        IQCoreModules.hangup()
                        break
                    case "P":
                        iq.print("Another wow.")
                        break
                    default:
                        break
                }
            }
        )
    }
}
