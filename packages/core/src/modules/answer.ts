import { BBS } from "../index"

const bbs = new BBS()

const welcomeArt = bbs.artwork({ basepath: "/iniquity/archive/src/textmode" })
welcomeArt.render({ filename: "sm_iniq2", clearScreenBefore: true, speed: 100 })

bbs.print({
    text: `You just connected to an iniquity bbs. It's still pretty new. Likely has bugs. Real talk, it's not even finished. But maybe you'll still think it's cool.`
        .newlines()
        .color("background red")
        .center()
}).pause({ colorReset: true, newlines: 2, center: true })
