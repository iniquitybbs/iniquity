/**
 * AI Code Assistant Door Game
 * @module AICodeAssistant
 * @summary A door game that spawns a coding assistant AI agent
 *
 * This is an example of using MCP agents for practical purposes on a BBS.
 * Users can get coding help, debug assistance, and learn programming
 * through an interactive AI session.
 *
 * Perfect for that "learn to code on a BBS" energy from the 90s scene.
 */

import {
    IQ,
    IQModuleACLS,
    IQReactor,
    IQMenuLoopMessageResponse
} from "../index"

import { MCPDoorGame, MCPDoorGameConfig } from "./mcp-door"
import { MCPAgentType, SysopMood } from "./mcp"
import { spawnMoodGhost } from "./ansi-ghosts"

/**
 * AI Code Assistant Door Game
 * Helps users with coding questions via Claude/Codex
 */
@IQ.Decorators.Module({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    assets: "",
    encoding: "CP437",
    data: IQReactor({
        currentQuestion: "",
        codeSnippets: []
    }),
    computed: {}
})
export class AICodeAssistant extends MCPDoorGame {
    constructor() {
        const config: MCPDoorGameConfig = {
            name: "AI CODE ASSISTANT",
            description: "Claude-powered coding help for sysops and modders",
            gameType: "code-assistant",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: `You are an expert coding assistant specializing in BBS development.
You know TypeScript, JavaScript, Node.js, Synchronet, and classic BBS door game programming.
Help users with code, debug issues, explain concepts, and encourage learning.
Keep responses concise but thorough. Use code examples when helpful.
Format code with proper indentation. Be encouraging and patient.
Remember: you're helping the next generation of BBS modders and sysops.`,
                temperature: 0.4,
                maxTokens: 500
            },
            sysopMood: SysopMood.Elite,
            maxTurns: 0, // Unlimited
            sessionTimeout: 60, // 1 hour
            headerArt: `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║      ▄▀█ █   █▀▀ █▀█ █▀▄ █▀▀   ▄▀█ █▀ █▀ █ █▀ ▀█▀          ║
║      █▀█ █   █▄▄ █▄█ █▄▀ ██▄   █▀█ ▄█ ▄█ █ ▄█  █           ║
║                                                              ║
║              Claude-Powered Coding Help ${SysopMood.Elite}              ║
║                                                              ║
║     Learn • Debug • Build • Mod • Create                     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
            `
        }
        super(config)
    }

    @IQ.Decorators.ModuleRuntime({ debug: true })
    public start(): void {
        this.showHeader()

        // Show elite mood ghost on entry
        spawnMoodGhost(SysopMood.Elite)
        this.wait(2000)

        // Get username
        const username = user.alias || "Coder"
        this.initSession(username)

        // Spawn the AI coding agent
        this.spawnAgent()

        // Show quick help
        this.say("\n" + "═".repeat(60).color("bright black"))
        this.say("Ask coding questions, share code for review, or get debugging help.".color("white"))
        this.say("Commands: 'help' for tips | 'examples' for samples | 'quit' to exit".color("bright yellow"))
        this.say("═".repeat(60).color("bright black") + "\n")

        const menu = this.menu({
            name: "Code Assistant",
            description: "AI-powered coding help",
            commands: {
                default: async (metadata = {}) => {
                    const userInput = this.ask(`\n${"CODE>".color("bright green")} `)

                    if (!userInput) {
                        return { metadata }
                    }

                    const lower = userInput.toLowerCase()

                    // Handle special commands
                    if (lower === "quit" || lower === "exit") {
                        this.saveSession()
                        this.say(`\nHappy coding! ${SysopMood.Elite}`.color("bright cyan"))
                        this.say("Session saved for future reference.".color("bright black"))
                        this.pause()
                        this.disconnect()
                        return { metadata, exit: true }
                    }

                    if (lower === "help") {
                        this.showHelp()
                        return { metadata }
                    }

                    if (lower === "examples") {
                        this.showExamples()
                        return { metadata }
                    }

                    if (lower === "history") {
                        this.showHistory()
                        return { metadata }
                    }

                    // Send to AI agent
                    const response = await this.sendToAgent(userInput)

                    // Display response
                    this.say("\n" + "─".repeat(60).color("bright black"))
                    this.say(response.color("white"))
                    this.say("─".repeat(60).color("bright black"))

                    return { metadata }
                }
            }
        })

        menu.render((res: IQMenuLoopMessageResponse, cmdkey: Function) => {
            menu.prompt({ text: "" }).command(cmdkey)
        })
    }

    /**
     * Show help information
     */
    private showHelp(): void {
        this.say("\n" + "═".repeat(60).color("bright cyan"))
        this.say("AI CODE ASSISTANT - HELP".center().color("bright white"))
        this.say("═".repeat(60).color("bright cyan") + "\n")

        this.say("What you can ask:".color("bright yellow"))
        this.say("  • How do I implement [feature] in Iniquity?".color("white"))
        this.say("  • Debug this code: [paste your code]".color("white"))
        this.say("  • Explain [concept] in simple terms".color("white"))
        this.say("  • Show me an example of [pattern]".color("white"))
        this.say("  • What's the best way to [task]?".color("white"))
        this.say("")
        this.say("Special topics:".color("bright yellow"))
        this.say("  • Iniquity module development".color("white"))
        this.say("  • Synchronet door game programming".color("white"))
        this.say("  • TypeScript/JavaScript for BBS".color("white"))
        this.say("  • ANSI art and terminal graphics".color("white"))
        this.say("  • MCP agent integration".color("white"))
        this.say("")
        this.say("Commands:".color("bright yellow"))
        this.say("  help     - Show this help".color("white"))
        this.say("  examples - See example questions".color("white"))
        this.say("  history  - View conversation history".color("white"))
        this.say("  quit     - Exit and save session".color("white"))

        this.say("\n" + "─".repeat(60).color("bright black"))
        this.pause()
    }

    /**
     * Show example questions
     */
    private showExamples(): void {
        this.say("\n" + "═".repeat(60).color("bright cyan"))
        this.say("EXAMPLE QUESTIONS".center().color("bright white"))
        this.say("═".repeat(60).color("bright cyan") + "\n")

        const examples = [
            "How do I create a new Iniquity module with the @IQModule decorator?",
            "Show me how to use the IQReactor for reactive data",
            "What's the best way to handle user input in a door game?",
            "How can I display ANSI art with fade-in effects?",
            "Explain how MCP agents work in the Iniquity architecture",
            "Debug this: [paste TypeScript error or code snippet]",
            "Create a simple menu system with lightbar selection",
            "How do I spawn an AI agent for a door game?",
            "What are the String extensions available in Iniquity?",
            "Show me how to create a frame with custom colors"
        ]

        examples.forEach((example, idx) => {
            this.say(`${(idx + 1).toString().color("bright yellow")}. ${example.color("white")}`)
        })

        this.say("\n" + "─".repeat(60).color("bright black"))
        this.say("Try copying one of these or ask your own question!".color("bright cyan"))
        this.pause()
    }

    /**
     * Mock agent responses for code assistant
     */
    protected async getMockAgentResponse(message: string): Promise<string> {
        const lower = message.toLowerCase()

        // Iniquity module creation
        if (lower.includes("module") && lower.includes("create")) {
            return `To create an Iniquity module, use the @IQModule decorator:

${"```typescript".color("bright black")}
@IQModule({
    basepath: "/your/assets/path",
    access: IQModuleACLS.low,
    encoding: "CP437",
    data: IQReactor({ yourData: "value" })
})
class MyModule extends IQ {
    @IQModuleRuntime({ debug: true })
    start() {
        this.say("Hello from my module!")
        this.pause()
    }
}
${"```".color("bright black")}

The module will automatically have access to all IQ methods like say(), ask(), artwork(), etc.`
        }

        // Reactive data
        if (lower.includes("reactor") || lower.includes("reactive")) {
            return `IQReactor creates observable data that triggers updates when changed:

${"```typescript".color("bright black")}
data: IQReactor({
    score: 0,
    playerName: "Anonymous"
})

// In your module:
this.data.observe("score", () => {
    this.say(\`Score updated: \${this.data.model.score}\`)
})

// Updating triggers observers:
this.data.model.score = 100  // Triggers the observer!
${"```".color("bright black")}

Perfect for real-time BBS interfaces that react to changes.`
        }

        // MCP agents
        if (lower.includes("mcp") || lower.includes("agent")) {
            return `MCP agents spawn AI assistants in your door games:

${"```typescript".color("bright black")}
class MyDoorGame extends MCPDoorGame {
    constructor() {
        super({
            name: "My Game",
            gameType: "adventure",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: "You are a helpful game master"
            }
        })
    }

    async playTurn(input: string) {
        const response = await this.sendToAgent(input)
        this.say(response)
    }
}
${"```".color("bright black")}

Check packages/core/src/modules/mcp-door.ts for the full API.`
        }

        // ANSI art
        if (lower.includes("ansi") || lower.includes("artwork")) {
            return `Display ANSI art with the artwork() method:

${"```typescript".color("bright black")}
this.artwork({
    filename: "welcome.ans"
}).render({
    mode: "line",              // or "character" for slower
    speed: 10,                 // ms delay between lines
    clearScreenBefore: true
})
${"```".color("bright black")}

For animated effects, check out the ANSIGhostManager in ansi-ghosts.ts.
It handles fade-in/fade-out and timed appearances.`
        }

        // Default helpful response
        return `That's a great question! In production, Claude would analyze your specific code and provide detailed help.

For now, try:
• "help" - See what I can assist with
• "examples" - View example questions
• Check /iniquity/packages/core/src/ for source code

The Iniquity framework is built on:
- TypeScript + Node.js
- Synchronet BBS backend
- @IQModule decorator pattern
- Reactive data with IQReactor
- MCP agent integration for AI features

What specific aspect would you like to explore?`
    }
}

export { AICodeAssistant }
export default AICodeAssistant
