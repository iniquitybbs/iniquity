import { IQCoreModules } from "src/modules"

do {
    IQCoreModules.answer()
    IQCoreModules.hangup()
    sleep(100)
} while (bbs.online && bbs.nodesync() && !js.terminated)
