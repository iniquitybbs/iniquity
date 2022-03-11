import { IQCoreModules } from "@iniquitybbs/core/src/modules"

do {
    IQCoreModules.answer()
    IQCoreModules.hangup()
    sleep(100)
} while (bbs.online && bbs.nodesync() && bbs.user_sync() && !js.terminated)
