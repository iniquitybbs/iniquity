/**
 * Еuphoria BBS Template
 * @author ispyhumanfly
 * @license MIT
 */
import { artwork, say, wait } from "./.iniquity/node_modules/@iniquitybbs/core/src"

say("A 132x37 terminal resolution is required to view this BBS.")

artwork({ basepath: "/dist/assets" }).render({ filename: "ep_welcome.ans", clearScreenBefore: true, mode: "line", speed: 30 }).pause()

artwork({ basepath: "/dist/assets" }).render({ filename: "ep_main_menu.ans", clearScreenBefore: true, mode: "character", speed: 30 })

say("The new euphoria bbs is coming soon. Written from scratch using iniquity 3.".gotoxy(29, 28)).gotoxy(1, 1)

wait(15000)

artwork({ basepath: "/dist/assets" }).render({ filename: "ep_logoff.ans", mode: "line", clearScreenBefore: true, speed: 30 })
