/** eternity bbs
 * @file iniquity.ts
 */

import { IQ, IQModule, IQReactor, IQModuleACLS, IQModuleRuntime, IQFrameColorOptions } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import config from "./iniquity.json"

export class Eternity extends IQ {

    basepath = "/dist/assets"
    access = IQModuleACLS.low
    assets = ""
    data =  IQReactor({
        message: "",
        number: 1,
        time: time(),
        system: system.stats
    })

    @IQModuleRuntime({
        debug: true
    })
    public start() {

        this.artwork().render({ filename: "as-ini.cp437.ans", mode: "@-codes", clearScreenBefore: false })
        this.wait(2000)

        this.data.observe("message", () => {

            const message = this.data.model.message as string

            this.say(message.color("background black").color("bright white").color("cyan"))
        })

        this.data.model.message = "Hello World!"
        this.data.model.message = "Hello World! 2"
        this.data.model.message = "Hello World! And around and around we go!"

    }   
}

new Eternity().start()