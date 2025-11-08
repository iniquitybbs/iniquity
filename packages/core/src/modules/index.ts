import answer, { Answer } from "./answer"
import hangup, { Hangup } from "./hangup"
import wfc, { WFC } from "./wfc"

// MCP Integration Modules
import { AISysop } from "./ai-sysop"
import { AIInteractiveFiction } from "./mcp-door"
import { AICodeAssistant } from "./ai-code-assistant"
import { ANSIGhosts } from "./ansi-ghosts"

export * from "./answer"
export * from "./hangup"
export * from "./wfc"

// Export MCP modules
export * from "./mcp"
export * from "./ai-sysop"
export * from "./mcp-door"
export * from "./ai-code-assistant"
export * from "./ansi-ghosts"

export const IQCoreModules = {
    answer() {
        return answer.start()
    },
    hangup() {
        return hangup.start()
    },
    wfc() {
        return wfc.start()
    },
    // MCP Door Games
    aiSysop(config?: any) {
        return new AISysop(config).start()
    },
    aiInteractiveFiction() {
        return new AIInteractiveFiction().start()
    },
    aiCodeAssistant() {
        return new AICodeAssistant().start()
    },
    ansiGhosts() {
        return new ANSIGhosts().start()
    }
}
