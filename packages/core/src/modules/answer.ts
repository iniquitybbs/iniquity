import { IQCoreAssets, IQFrameColorOptions, IQMenuLoopMessageResponse, IQModule, IQModuleRuntime, IQDataModel, IQ } from "@iniquitybbs/core"

@IQModule({
    basepath: "/iniquity/core/src/assets",
    data: IQDataModel({
        message: "Umm, yeah this needs to change",
        number: 1,
        time: time(),
        system: system.stats
    })
})
export class Answer extends IQ {
    @IQModuleRuntime({
        debug: true
    })
    _() {
        this.data.observe("message", () => {
            this.artwork({ filename: IQCoreAssets.iq3_apply }).render({ speed: 1, clearScreenBefore: true }).colorReset()
            this.say(this.data.model.message).wait(1000)
            this.pause()
        })
        this.data.observe("number", () => {
            this.say(this.data.model.number).wait(1000)
        })

        while (this.terminfo.x < 132 || this.terminfo.y < 37) {
            const menu = this.menu({
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
                        this.data.model.number + 1
                    },
                    H: () => {
                        this.data.model.message = this.ask("What should I change the message to?")
                    },
                    default: () => {
                        // this.say("please try again.".gotoxy(1, 1))
                    }
                }
            })

            menu.render(
                (res: IQMenuLoopMessageResponse, cmdkey: Function) => {
                    this.artwork({ filename: IQCoreAssets.sm_iniq2 }).render({
                        clearScreenBefore: true,
                        speed: 1,
                        data: this.data.model
                    })
                    menu.prompt({ text: "Enter your command: ".color("bright cyan"), x: 20, y: 20 }).command(cmdkey)
                },
                {
                    maxInterval: 3000,
                    data: this.data.model
                }
            )

            this.wait(100)
        }

        alert(this.data.model.message)

        alert(this.basepath)

        this.data.model.message = this.ask("So what's the new message?")

        this.artwork({ filename: IQCoreAssets.iq3_welcome })
            .render({
                speed: 100,
                data: this.data,
                mode: "@-codes"
            })
            .pause()

        const frame = this.frame({
            x: 10,
            y: 10,
            width: 30,
            height: 15,
            color: IQFrameColorOptions.blue
        })

        const menu = this.menu({
            name: "Iniquity answer menu.",
            description: "Really I just get to rattle off more non-sense.",
            commands: {
                L: (help = "Sit cillum consequat qui quis dolore Lorem.") => {
                    this.gotoxy(23, 63)
                    this.data.model.message = this.ask("Oh so you wanna change it?")
                    this.data.model.number++
                },
                O: () => {
                    frame.open()

                    while (true) {
                        frame.say(JSON.stringify(this.data.model))
                        frame.cycle()

                        this.data.model.number++

                        if (this.data.model.number > 20) break

                        this.wait(10)
                    }

                    frame.close()
                },
                H: () => {
                    this.cursor().down().left(22)
                    this.data.model.number++
                },
                default: () => {
                    this.say("please try again.".gotoxy(1, 1))
                }
            },
            data: this.data.model
        })

        menu.render(
            (res: IQMenuLoopMessageResponse, cmdkey: Function, data?: any) => {
                this.artwork().render({
                    clearScreenBefore: true,
                    filename: IQCoreAssets.sm_iniq2,
                    data: this.data.model
                })

                this.data.model.number++

                menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey)
            },
            {
                maxInterval: 1000000
            }
        )
    }
}
