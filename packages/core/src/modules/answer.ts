import {
    IQCoreAssets,
    IQModuleACLS,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse,
    IQModule,
    IQModuleRuntime,
    IQReactor,
    randomAsset,
    IQ
} from "@iniquitybbs/core"

import { IQCoreModules } from "@iniquitybbs/core/src/modules"

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
class Answer extends IQ {
    @IQModuleRuntime({
        debug: true
    })
    start() {
        /** Observe changes to "message" and react */
        this.data.observe("message", () => {
            const box = { width: 40, height: 5 }

            const frame = this.frame({
                x: (this.terminfo.x - box.width) / 2,
                y: (this.terminfo.y - box.height) / 2,
                width: box.width,
                height: box.height,
                color: IQFrameColorOptions.blue
            })
            // let scrollbar = new ScrollBar(frame, { autohide: true })

            frame.open()

            let counter = 0

            while (counter < 100) {
                counter++
                frame.say(this.data.model.message)

                frame.cycle()
                // scrollbar.cycle()

                this.wait(10)
            }

            frame.close()
        })

        // For terminals that are too small e.g 80x25.
        while (this.terminfo.x < 132 || this.terminfo.y < 37) {
            const menu = this.menu({
                name: "Unsupported terminal scale.",
                description: "A simple menu for letting the user know their terminal settings are not supported.",
                commands: {
                    /**
                     * Perhaps you want to be able to capture some data from a command once it's hit.
                     * Maybe there is information you have generated and you want it available nicely as
                     * a data structure.
                     * @param options
                     * @returns
                     */
                    Q: (options = { description: "Go wide screen bbs with 132x37!" }) => {
                        return { options }
                    },
                    E: (options = { description: "Disconnect from iniquity." }) => {
                        // this.data.model.message = this.ask("What should I change the message to?")
                        return { options }
                    },
                    default: (options = { description: "Disconnect from iniquity." }) => {
                        // this.say("please try again.".gotoxy(1, 1))
                        return { options }
                    }
                }
            })

            menu.render(
                (res: IQMenuLoopMessageResponse, cmdkey: Function) => {
                    this.artwork({ filename: IQCoreAssets.sm_iniq2 })
                        .render({ mode: "character", data: { ...this.data.model, ...menu } })
                        .cursor(10, 22)

                    let frame = this.frame({
                        x: 32,
                        y: 10,
                        width: 40,
                        height: 4,
                        color: IQFrameColorOptions.black
                    })

                    for (const [cmdkey, command] of Object.entries(menu.commands)) {
                        frame.say(`${cmdkey} : ${command().options.description}\r\n`.color("white"))
                    }
                    frame.draw()

                    menu.prompt({ text: "commands: ".color("bright cyan"), x: 24, y: 15 }).command(cmdkey)
                },
                {
                    maxInterval: 3000,
                    data: this.data
                }
            )

            this.wait(100)
        }

        IQCoreModules.wfc()
    }
}

export { Answer }
export default new Answer()
