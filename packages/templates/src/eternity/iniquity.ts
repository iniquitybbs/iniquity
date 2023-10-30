/** eternity bbs
 * @file iniquity.ts
 */

import { IQ, IQReactor, IQModuleACLS } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import { setInterval, Promise } from "./.iniquity/node_modules/@iniquitybbs/core/src/pollyfills"
import config from "./iniquity.json"

export class Eternity extends IQ {

    basepath = "/dist/assets"
    access = IQModuleACLS.low
    data =  IQReactor({
        config: config,
        user: { handle: "", password: "", access: IQModuleACLS.low},
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

        this.ask("Welcome to eternity bbs. Would you like to come inside? (y/n)".gotoxy(22,22).color("reset"), (answer: string) => {

            if (answer == "y") this.login()
            else this.logoff()            
        })
    }

    /** Login user screen
     */
    public login() {

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

        this.ask("What's your handle: ".gotoxy(20,20).color("reset"), (handle: string) => {

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
            
            this.artwork().render({ filename: "us-wfc.ans", clearScreenBefore: true })
    
            ":_".color("background bright green").center()

            this.wait(10000)

            this.logoff()
    }

    public logoff() {
                
        this.artwork().render({ filename: "4d-iniq1.ans", clearScreenBefore: true })

        this.say(`Goodbye ${this.data.model.user.handle}, and thanks for calling!`.gotoxy(20,20).color("reset"))
        this.gotoxy(1,1)
    }
}

new Eternity().start()