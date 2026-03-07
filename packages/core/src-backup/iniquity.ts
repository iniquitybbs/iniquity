import { IQCoreModules } from "./modules"

do {
    IQCoreModules.answer()
    IQCoreModules.hangup()
    sleep(10)
} while (bbs.online && !js.terminated)
