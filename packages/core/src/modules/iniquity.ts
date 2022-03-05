import { IQCoreModules } from "@iniquitybbs/core/src/modules"
import iq, { IQCoreAssets } from "../index"

import { Reflection as Reflect } from "@abraham/reflection"

while (iq.terminfo().x < 132 || iq.terminfo().y < 36) {
    iq.say("Wow, you sure do have a small terminal").pause()
}

iq.artwork({ basepath: "/iniquity/core/src/assets", filename: IQCoreAssets.iq3_welcome }).render({ speed: 100 }).pause()

IQCoreModules.answer()
IQCoreModules.hangup()
