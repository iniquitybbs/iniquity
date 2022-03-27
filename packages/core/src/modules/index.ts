import answer, { Answer } from "./answer"
import hangup, { Hangup } from "./hangup"
import wfc, { WFC } from "./wfc"

export * from "./answer"
export * from "./hangup"
export * from "./wfc"

export const IQCoreModules = {
    answer() {
        return answer.start()
    },
    hangup() {
        return hangup.start()
    },
    wfc() {
        return wfc.start()
    }
}
