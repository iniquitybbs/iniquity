import { IQ, IQModule, IQModuleRuntime, IQModuleACLS, IQCoreAssets, IQReactor, IQFrameColorOptions } from "@iniquitybbs/core"
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
        system: system.stats,
        user: {}
    }),
    computed: {}
})
class Login extends IQ {
    @IQModuleRuntime({ debug: true })
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

        const art = this.artwork({ basepath: this.basepath })

        art.render({ filename: IQCoreAssets.iq3_login, clearScreenBefore: true, mode: "character" })

        const login = this.ask("Enter your handle, or type 'new' to apply".color("green").color("reset").gotoxy(15, 23))

        switch (login) {
            case "new":
                IQCoreModules.apply()
                break
            default:
                if (this.user({ name: login, password: this.ask("And your password?".color("white")) }).login()) {
                    this.data.model.message = "Welcome back!"
                } else {
                    this.data.model.message = "You do not appear to have an account, or your, password is wrong."
                }
                break
        }
        exit
    }
}

export { Login }
export default new Login()
