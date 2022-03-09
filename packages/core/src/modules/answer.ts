import iq, {
    IQCoreAssets,
    IQCoreModules,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse,
    IQModule,
    IQModuleACLS,
    IQModuleContainer,
    IQModuleRuntime,
    say,
    wait
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
                        // iq.say("please try again.".gotoxy(1, 1))
                    }
                }
            })

            menu.render(
                (res: IQMenuLoopMessageResponse, cmdkey: Function) => {
                    iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.sm_iniq2 }).render({
                        clearScreenBefore: true,
                        mode: "@-codes",
                        data: {
                            message: "Something I want said in here.",
                            data: {
                                message: "test"
                            }
                        }
                    })
                    menu.prompt({ text: "Enter your command: ".color("bright cyan"), x: 20, y: 20 }).command(cmdkey)
                },
                { maxInterval: 3000 }
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
                    iq.cursor().down()
                },
                default: () => {
                    iq.say("please try again.".gotoxy(1, 1))
                }
            }
        })

        menu.render(
            (res: IQMenuLoopMessageResponse, cmdkey: Function) => {
                const art = iq.artwork({ basepath: this.basepath })

                art.render({
                    mode: "@-codes",
                    clearScreenBefore: true,
                    filename: IQCoreAssets.iq3_hello
                })

                menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey)
            },
            { maxInterval: 1000000 }
        )
    }
}
