/**
 * eternity bbs
 * @file iniquity.ts
 */

import { IQ, IQReactor, IQModuleACLS } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import { setInterval, Promise } from "./.iniquity/node_modules/@iniquitybbs/core/src/pollyfills"
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
        this.data.observe("alert", () => {
            const alert = this.data.model.alert as string
            this.artwork().render({ filename: "as-ini.cp437.ans", clearScreenBefore: true })

            alert.color("white").center()

            this.gotoxy(1, 1)
        })

        this.data.observe("message", () => {
            const message = this.data.model.message as string
            this.artwork().render({ filename: "newuser.cp437.ans", mode: "@-codes", clearScreenBefore: true })

            message.color("background bright green").center()

            this.gotoxy(1, 1)
        })

        this.artwork().render({ filename: "iqascii.ans", clearScreenBefore: false }).colorReset()
        this.wait(2000)

        this.data.model.alert = "Loading iniquity..."

        this.wait(2000)

        "".color("reset")

        this.artwork().render({ filename: "cx-iqwfc.ans", mode: "character", speed: 40, clearScreenBefore: false }).colorReset()

        this.wait(4000)

        this.welcome()
    }

    /**
     * Welcome screen
     */
    public welcome() {
        this.data.model.alert = "Welcome to eternity bbs ... "

        this.wait(2000)

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
        this.data.model.message =
            "welcome to eternity bbs ... please read the following if you are calling long distance you will be automatically validated now otherwise..."

        this.wait(2000)
        this.data.model.message = "please read the following if you are calling long distance you will be automatically validated now otherwise..."
        this.wait(3000)

        this.ask("Enter your handle".gotoxy(30, 15).color("reset"), (handle: string) => {
            if (handle !== "") {
                this.data.model.user = { handle: handle, password: "", access: IQModuleACLS.low }

                this.data.model.message = `welcome ${handle}!`
                this.wait(2000)
                this.data.model.message = "you are now validated and ready to go!"
                this.wait(2000)
                this.data.model.message = "loading main menu..."
                this.wait(2000)

                this.main()
            }
        })
    }

    public main() {
        this.data.model.message = "Loading main menu..."

        this.artwork().render({ filename: "us-wfc.ans", clearScreenBefore: true })

        this.wait(10000)

        this.logoff()
    }

    public logoff() {
        this.artwork().render({ filename: "4d-iniq1.ans", clearScreenBefore: true })

        this.say(`Goodbye ${this.data.model.user.handle}, and thanks for calling!`.gotoxy(20, 20).color("reset"))
        this.gotoxy(1, 1)
    }
}

new Eternity().start()
