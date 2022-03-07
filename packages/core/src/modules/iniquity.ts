import { IQCoreModules } from "@iniquitybbs/core/src/modules"
import iq, { IQCoreAssets, IQMenuLoopMessageResponse } from "@iniquitybbs/core"

say("Hold for just a second").wait(12)
gotoxy(1, 2)

"What happens when I do this?".color("red")

pause()

while (iq.terminfo.x < 132 || iq.terminfo.y < 37) {
    // const frame = iq.frame({
    //     x: 1,
    //     y: 1,
    //     width: iq.terminfo.x,
    //     height: iq.terminfo.y,
    //     color: IQFrameColorOptions.black,
    //     artwork: "/iniquity/core/src/assets/" + IQCoreAssets.sm_iniq2
    // })

    // frame.open()

    // const border = iq.frame({ x: 10, y: 10, width: iq.terminfo.x - 20, height: iq.terminfo.y - 20, color: IQFrameColorOptions.blue, parent: frame })
    // border.open()

    // border.gotoxy(2, 2)

    // const subframe = iq.frame({
    //     x: 12,
    //     y: 12,
    //     width: iq.terminfo.x - 22,
    //     height: iq.terminfo.y - 22,
    //     color: IQFrameColorOptions.black,
    //     parent: border
    // })

    // subframe.gotoxy(2, 2)

    // subframe.loop((cleared: boolean, ugly: string, counter = 0) => {
    //     counter++
    //     subframe.print("12".color("white"))
    //     frame.cycle()
    //     border.cycle()
    //     cleared = true
    // }, 1000)

    // frame.close()

    // js.addEventListener("foodie", () => {
    //     iq.say("whoa isn't this crazy?!!!")
    // })

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
                iq.say(menu.commands["R"]())
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
                .gotoxy(1, 2)
                .keypressed()
        },
        { wait: 1000, maxInterval: 3000 }
    )

    iq.wait(100)
}

iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.iq3_welcome }).render({ speed: 100 }).pause()

IQCoreModules.answer()
IQCoreModules.hangup()

gotoxy(1, 2)
