/** eternity bbs
 * @file iniquity.ts
 */

import { IQ } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import config from "./iniquity.json"

const iq = new IQ.Core()

iq.basepath = "/dist/assets"

iq.say(`Welcome to ${config.name}.`).pause()

iq.artwork().render({ filename: "4d-iniq1.ans" }).pause()
