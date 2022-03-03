import { BBS } from "../index"

const bbs = new BBS()

bbs.say("You've connected to a prototype of the new iniquity BBS Development Platform.".newlines(2).color("bright red").center()).pause()

bbs.artwork({ basepath: "/iniquity/core/assets/", filename: "5m-hodl4a.ans" }).render({ speed: 100 })
const login = bbs.ask("What is your login: ".newlines(1))
switch (login) {
    case "new":
    case "signup":
        bbs.artwork({ basepath: "/iniquity/core/assets/", filename: "5m-ink2menu.ans" }).render({ clearScreenBefore: true })

        let newUser = bbs.user({
            name: bbs.ask("What would you like your handle to be?".newlines(2).color("white")),
            password: bbs.ask("And your password?".newlines(2).color("white"))
        })

        bbs.say(`Welcome ${newUser.name}. And goodbye!`.newlines().center())
        bbs.disconnect()
        break
    default:
        if (bbs.user({ name: login, password: bbs.ask("And your password?".newlines(2).color("white")) })) {
            alert("somethingsync")
        }

        bbs.pause()

        bbs.artwork({ basepath: "/iniquity/core/assets/", filename: "5m-matrix-1b2.ans" }).render({ clearScreenBefore: true })
        break
}
