import iq, { IQModule, IQModuleContainer, IQModuleRuntime, IQModuleACLS, IQCoreAssets, IQCoreModules, IQFrameColorOptions } from "@iniquitybbs/core"

@IQModule({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low
})
export class Answer extends IQModuleContainer {
    @IQModuleRuntime({
        debug: true
    })
    _() {
        const menu = iq.menu({
            name: "Iniquity answer menu.",
            description: "Really I just get to rattle off more non-sense.",
            cmdkeys: "LAGHO",
            commands: {}
        })

        const frame = iq.frame({
            x: 10,
            y: 10,
            width: 30,
            height: 15,
            color: IQFrameColorOptions.blue
        })

        menu.render(
            () => {
                const art = iq.artwork({ basepath: this.basepath })

                art.render({
                    mode: "@-codes",
                    clearScreenBefore: true,
                    filename: IQCoreAssets.iq3_hello
                }).prompt(33, 19, "[L] ogin? or [A] sk for help? Or [G] for goodbye?".color("blue"))

                switch (menu.keypressed()) {
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
                    case "O":
                        frame.open()

                        while (true) {
                            frame.say(time().toString())
                            frame.cycle()

                            if (iq.menu().keypressed("Q")) break
                            iq.wait(10)
                        }

                        frame.close()

                        break
                    default:
                        break
                }
            },
            { wait: 100, maxInterval: 1000000 }
        )
    }
}
