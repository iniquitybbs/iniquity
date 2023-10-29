/** eternity bbs
 * @file iniquity.ts
 */

import iq, { IQ, IQReactor, IQModuleACLS } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import { setInterval, Promise } from "./.iniquity/node_modules/@iniquitybbs/core/src/pollyfills"
import config from "./iniquity.json"

export class Eternity extends IQ {

    basepath = "/dist/assets"
    access = IQModuleACLS.low
    data =  IQReactor({
        config: config,
        message: "",
        number: 1,
        system: system.stats
    })

    /** 
     * Start the bbs
     * 
     */
    public start() {

        this.artwork().render({ filename: "as-ini.cp437.ans", clearScreenBefore: false })
        this.gotoxy(1,1)
        this.wait(2000)

        this.welcome()

    }

    /** 
     * Welcome screen
     */
    public welcome() {
            
        this.artwork().render({ filename: "we-iniq3.ans", clearScreenBefore: true })

        "welcome to eternity bbs ... ".color("background blue").center()

        this.ask("Are you a new users? (y/n)".color("reset"), (answer: string) => {

            if (answer == "y") {

                this.newuser()

            } else {

               "asdasd".color("background bright red").center()

            }
        })
    }

    /** New user screen
     */
    public newuser() {

        this.data.observe("message", () => {

            const message = this.data.model.message as string
            this.artwork().render({ filename: "newuser.cp437.ans", mode: "@-codes", clearScreenBefore: true })

            message.color("background bright green").center()

            this.gotoxy(1,1)
        })

        this.data.model.message = "welcome to eternity bbs ... "
        this.wait(2000)
        this.data.model.message = "please read the following if you are calling long distance you will be automatically validated now otherwise..."
        this.wait(3000) 
        this.data.model.message = "you must wait to be manually validated by the sysop."  
        this.wait(2000)
        this.data.model.message = "this process can take anywhere from 12 to 48 hours."
        this.wait(2000)
        this.data.model.message = "there are currently no upload/download or post/call ratios active on."
        this.wait(2000)
        this.data.model.message = "however, there is a limit of files/kb that you may in one day. (max 10 files, 1.6 meg for normal access users)."
        this.wait(2000)
        this.data.model.message = `feel free to mail the sysop/iniq author, ${this.data.model.config.sysop} with any comments you may have.`

        setInterval(() => {

            this.data.model.message = new Date().toISOString()

        }, 1000)
    }
}

new Eternity().start()