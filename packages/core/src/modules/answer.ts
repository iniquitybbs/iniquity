import iq, {
    IQCoreAssets,
    IQCoreModules,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse,
    IQModule,
    IQModuleACLS,
    IQModuleContainer,
    IQModuleRuntime,
    say
} from "@iniquitybbs/core"

@IQModule({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low
})
export class Answer extends IQModuleContainer {
    @IQModuleRuntime({
        debug: true
    })
    _() {
        while (iq.terminfo.x < 132 || iq.terminfo.y < 37) {
            const menu = iq.menu({
                name: "Unsupported",
                description: "A simple menu for letting the user know their terminal settings are not supported.",
                commands: {
                    R: (description = "Sit cillum consequat qui quis dolore Lorem.") => {
                        return {
                            description
                        }
                    },
                    G: () => {
                        iq.disconnect()
                    },
                    H: () => {
                        if (iq.ask("Are you sure?")) iq.disconnect()
                    },
                    default: () => {
                        iq.say("please try again.".gotoxy(1, 1))
                    }
                }
            })

            menu.render(
                (messages: IQMenuLoopMessageResponse) => {
                    iq.print("The Unsupported menu... :/".newlines(1))
                    iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.sm_iniq2 }).render()

                    menu.prompt({ text: "Enter your command: ".color("bright cyan"), x: 20, y: 20 })
                    menu.keypressed()
                },
                { wait: 1000, maxInterval: 3000 }
            )

            iq.wait(100)
        }

        iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.iq3_welcome }).render({ speed: 100 }).pause()

        const frame = iq.frame({
            x: 10,
            y: 10,
            width: 30,
            height: 15,
            color: IQFrameColorOptions.blue
        })

        const menu = iq.menu({
            name: "Iniquity answer menu.",
            description: "Really I just get to rattle off more non-sense.",
            commands: {
                L: (help = "Sit cillum consequat qui quis dolore Lorem.") => {
                    iq.gotoxy(23, 63)
                    IQCoreModules.login()
                },
                O: () => {
                    frame.open()

                    while (true) {
                        frame.say("ok")
                        frame.cycle()

                        if (menu.keypressed("Q")) break
                        iq.wait(10)
                    }

                    frame.close()
                },
                H: () => {
                    if (iq.ask("Are you sure?")) iq.disconnect()
                },
                default: () => {
                    iq.say("please try again.".gotoxy(1, 1))
                }
            }
        })

        menu.render(
            () => {
                const art = iq.artwork({ basepath: this.basepath })

                art.render({
                    mode: "@-codes",
                    clearScreenBefore: true,
                    filename: IQCoreAssets.iq3_hello
                })

                // @ts-expect-error
                say(console.inkey(K_UPPER)).pause()

                // if (cmdkey) menu.commands![cmdkey]()
            },
            { wait: 100, maxInterval: 1000000 }
        )
    }
}
