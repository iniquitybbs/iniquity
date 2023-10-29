/** eternity bbs
 * @file iniquity.ts
 */

import { IQ } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import config from "./iniquity.json"

const iq = new IQ.Core()

iq.basepath = "/dist/assets"

iq.artwork().render({ filename: "as-ini.cp437.ans", mode: "@-codes", clearScreenBefore: false })
iq.wait(2000)

iq.say(`Welcome to ${config.name}.`).pause()

iq.artwork().render({ filename: "newuser.cp437.ans", mode: "character", speed: 40 }).pause()

iq.wait(3000)

iq.say("Ok, logging off. Thanks for visiting!")
iq.artwork().render({ filename: "4d-iniq1.ans", clearScreenBefore: false })
iq.pause()

