import iq, {
    cursor,
    IQCoreAssets,
    IQCoreModules,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse,
    IQModule,
    IQModuleACLS,
    IQModuleContainer,
    IQModuleRuntime,
    IQDataModel,
    say,
    wait,
    ReactiveDataFunctions,
    pause
} from "@iniquitybbs/core"

@IQModule({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    data: IQDataModel({
        message: "Umm, yeah this needs to change",
        number: 1,
        time: time()
    })
})
export class Answer extends IQModuleContainer {
    @IQModuleRuntime({
        debug: true
    })
    _() {
        this.data.observe("message", () => {
            iq.artwork({ basepath: this.basepath, filename: IQCoreAssets.iq3_apply }).render({ speed: 1, clearScreenBefore: true }).colorReset()
            say(this.data.data.message).wait(1000)
            pause()
        })
        this.data.observe("number", () => {
            say(this.data.data.number).wait(1000)
        })

        while (iq.terminfo.x < 132 || iq.terminfo.y < 37) {
            const menu = iq.menu({
                name: "Unsupported",
                description: "A simple menu for letting the user know their terminal settings are not supported.",
                commands: {
                    /**
                     * Unsupported.R
                     * @param description
                     * @returns
                     */
                    R: (description = "Sit cillum consequat qui quis dolore Lorem.") => {
                        return {
                            description
                        }
                    },
                    G: () => {
                        this.data.data.number + 1
                    },
                    H: () => {
                        this.data.data.message = iq.ask("What should I change the message to?")
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
                        speed: 1,
                        data: this.data.data
                    })
                    menu.prompt({ text: "Enter your command: ".color("bright cyan"), x: 20, y: 20 }).command(cmdkey)
                },
                {
                    maxInterval: 3000,
                    data: this.data.data
                }
            )

            iq.wait(100)
        }

        this.data.data.message = iq.ask("So what's the new message?")

        iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.iq3_welcome })
            .render({
                speed: 100,
                data: {
                    message: "food is " + this.data.data.message
                },
                mode: "@-codes"
            })
            .pause()

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
                    this.data.data.message = iq.ask("Oh so you wanna change it?")
                    this.data.data.number++
                },
                O: () => {
                    frame.open()

                    while (true) {
                        frame.say(JSON.stringify(this.data.data))
                        frame.cycle()

                        this.data.data.number++

                        if (this.data.data.number > 20) break

                        iq.wait(10)
                    }

                    frame.close()
                },
                H: () => {
                    iq.cursor().down().left(22)
                    this.data.data.number++
                },
                default: () => {
                    iq.say("please try again.".gotoxy(1, 1))
                }
            },
            data: this.data.data
        })

        menu.render(
            (res: IQMenuLoopMessageResponse, cmdkey: Function, data?: any) => {
                const art = iq.artwork({ basepath: this.basepath })

                art.render({
                    // mode: "@-codes",
                    clearScreenBefore: true,
                    filename: IQCoreAssets.sm_iniq2,
                    data: this.data.data
                })

                this.data.data.number++

                menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey)
            },
            {
                maxInterval: 1000000
            }
        )
    }
}
