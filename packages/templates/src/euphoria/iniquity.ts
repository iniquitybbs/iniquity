/**
 * Euphoria BBS Template
 * @author ispyhumanfly
 * @license MIT
 */
import { artwork, say, wait, pause, hangup } from "@iniquitybbs/core"

say("A 132x37 terminal resolution is required to view this BBS.")

pause("Welcome to the Euphoria BBS! Press any key to continue...")

hangup()

artwork({ basepath: "assets" }).render({ filename: "ep_welcome.ans", clearScreenBefore: true, mode: "line", speed: 30 })

// pause()

// artwork({ basepath: "assets" }).render({ filename: "ep_main_menu.ans", clearScreenBefore: true, mode: "line", speed: 30 })

// say("The new euphoria bbs is coming soon. Written from scratch using iniquity 3.".gotoxy(29, 28))

wait(15000)

// artwork({ basepath: "assets" }).render({ filename: "ep_logoff.ans", mode: "line", clearScreenBefore: true, speed: 30 })
