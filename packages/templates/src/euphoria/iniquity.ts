/**
 * Euphoria BBS Template
 * @author ispyhumanfly
 * @license MIT
 */
import { artwork, say, wait, pause, hangup } from "@iniquitybbs/core"

async function main() {
    say("A 132x37 terminal resolution is required to view this BBS.")

    await pause("Welcome to the Euphoria BBS! Press any key to continue...")

    await artwork({ basepath: "assets" }).render({ filename: "ep_welcome.ans", clearScreenBefore: true, mode: "line", speed: 30 })

    await pause()

    hangup()
}

main()
