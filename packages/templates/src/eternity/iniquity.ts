/**
 * eternity bbs
 * @file iniquity.ts
 */

import { IQ, IQReactor, IQModuleACLS, IQMenuLoopMessageResponse } from "./.iniquity/node_modules/@iniquitybbs/core/src"
// import { setInterval, Promise } from "./.iniquity/node_modules/@iniquitybbs/core/src/pollyfills"
import config from "./iniquity.json"

export class Eternity extends IQ {
    basepath = "/dist/assets"
    access = IQModuleACLS.low
    data = IQReactor({
        config: config,
        alert: "",
        user: { handle: "", password: "", access: IQModuleACLS.low },
        message: "",
        number: 1,
        system: system.stats
    })

    /**
     * Start the bbs
     *
     */
    public start() {
        if (this.terminfo.x < 132 || this.terminfo.y < 37) {
            this.say("Your terminal is too small to call this bbs. Please set your terminal scale to 132x37. It's way cooler.").wait(3000)
            this.disconnect()
        }

        this.data.observe("alert", () => {
            this.artwork().render({ filename: "as-ini.cp437.ans", mode: "reactive", clearScreenBefore: true })

            this.data.model.alert()

            this.gotoxy(1, 1)
            this.wait(2000)
        })

        this.data.observe("message", () => {
            const message = this.data.model.message as string
            this.artwork().render({ filename: "newuser.cp437.ans", mode: "reactive", clearScreenBefore: true })

            message.color("background bright green").center()

            this.gotoxy(1, 1)
            this.wait(2000)
        })

        this.artwork().render({ filename: "iqascii.ans", clearScreenBefore: false }).colorReset()
        this.wait(2000)

        this.data.model.alert = () => {
            "Loading iniquity...".center()
        }

        "".color("reset")

        this.artwork().render({ filename: "cx-iqwfc.ans", mode: "character", speed: 40, clearScreenBefore: false }).colorReset()

        this.wait(4000)

        this.welcome()
    }

    /**
     * Welcome screen
     */
    public welcome() {
        "You just connected to an iniquity bbs. The artwork you are seeing above is called. It's still pretty new. Likely has bugs. Real talk, it's not even finished. But maybe you'll still think it's cool."
            .newlines(2)
            .color("background red")

        const menu = this.menu({
            name: "Iniquity answer menu.",
            description: "Really I just get to rattle off more non-sense.",
            commands: {
                L: (description = "Sit cillum consequat qui quis dolore Lorem.") => {
                    this.say("Hey, don't touch that!").wait(3000)
                },
                O: () => {
                    this.say("Nothing to see here, move along...").wait(3000)
                },
                H: () => {
                    if (this.ask("Are you sure you want to hangup?")) this.disconnect()
                },
                default: () => {
                    this.say("That command key doesn't do anything, try again.".gotoxy(1, 1)).wait(3000)
                }
            }
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
