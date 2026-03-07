/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * eternity bbs
 * @file iniquity.ts
 */

import { bbs, screen } from "@iniquitybbs/core"
import config from "./iniquity.json"

// Set terminal resolution
screen.setResolution(132, 37)

bbs.start(async () => {
    if (screen.width < 132 || screen.height < 37) {
        bbs.say("Your terminal is too small. Please set to 132x37.")
        await bbs.wait(3000)
        bbs.hangup()
        return
    }

    await bbs.art("iqascii.ans", { clearScreen: false })
    await bbs.wait(2000)

    await bbs.art("cx-iqwfc.ans", { display: "character", speed: 40, clearScreen: false })
    await bbs.wait(4000)

    bbs.say("|07Welcome to Eternity BBS!")
    await bbs.pause()
})
        })

        menu.render(
            // eslint-disable-next-line @typescript-eslint/ban-types
            (res: IQMenuLoopMessageResponse, cmdkey: Function) => {
                this.artwork().render({
                    clearScreenBefore: true,
                    filename: "we-iniq3.ans"
                })

                "Random optoin name 1".center()
                "Random option asda as da sda ".center()
                "asdasdasdasds 3".center()
                "ggggwfwefwefwef  wf wfewef wef wefw 1".center()
                "Option 1".center()

                menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey, () => {
                    this.say("You just pressed: " + JSON.stringify(res)).wait(3000)
                })
            }
        )

        this.artwork().render({ filename: "zv_iniq-132.ans", clearScreenBefore: true, mode: "line", speed: 50 }).pause({ newlines: 2 })

        this.artwork().render({ filename: "we-iniq3.ans", clearScreenBefore: true })

        this.ask("Would you like to come inside? (y/n)".gotoxy(40, 18).color("reset"), (answer: string) => {
            if (answer === "y") this.login()
            else this.logoff()
        })
    }

    /**
      Login user screen
     */
    public login() {
        const handle = this.ask("Enter your handle".gotoxy(20, 18).color("reset")) || ""
        const password = this.ask("Enter your password".gotoxy(20, 18).color("reset")) || ""

        if (!this.user({ name: handle, password: password }).login()) {
            this.data.model.message = "invalid login"
            this.data.model.message = "logging off..."

            // TODO add new user registration
            this.disconnect()
        }

        this.data.model.message = "you are now validated and ready to go!"
        this.data.model.message = "loading main menu..."

        this.main()
    }

    public main() {
        this.data.model.message = "Loading main menu..."

        this.artwork().render({ filename: "us-wfc.ans", clearScreenBefore: true })

        this.wait(10000)

        this.logoff()
    }

    public logoff() {
        this.artwork().render({ filename: "4d-iniq1.ans", clearScreenBefore: true })

        this.say(`Goodbye, ${this.data.model.user.handle}, and thanks for calling!`.gotoxy(20, 20).color("reset")).gotoxy(1, 1)
    }
}

new Eternity().start()
