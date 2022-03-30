import { IQCoreModules } from "@iniquitybbs/core/src/modules"

do {
    IQCoreModules.answer()
    IQCoreModules.hangup()
    sleep(10)
} while (bbs.online && !js.terminated)
