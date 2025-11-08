/**
 * MCP Door Games - AI Agent-Powered Interactive Experiences
 * @module MCPDoorGame
 * @summary Base class for building door games that spawn AI agents
 *
 * This brings the future of AI orchestration into the classic BBS door game format.
 * Each door game can spawn specialized AI agents (Claude, Codex, Gemini) that interact
 * with users in containerized, secure sessions.
 *
 * Think: AI Dungeon Master for MUDs, AI trader for Trade Wars, AI opponent for chess,
 * AI storyteller for interactive fiction, etc.
 */

import {
    IQ,
    IQModuleACLS,
    IQReactor,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse
} from "../index"

import {
    MCPAgentType,
    MCPAgentConfig,
    MCPDoorSession,
    MCPMessage,
    SysopMood
} from "./mcp"

/**
 * MCP Door Game Configuration
 */
export interface MCPDoorGameConfig {
    /** Game name */
    name: string

    /** Game description */
    description: string

    /** Game type identifier */
    gameType: string

    /** Default AI agent to use */
    defaultAgent: MCPAgentConfig

    /** Optional AI sysop mood for this game */
    sysopMood?: SysopMood

    /** Max turns per session (0 = unlimited) */
    maxTurns?: number

    /** Session timeout in minutes */
    sessionTimeout?: number

    /** ANSI art for game header */
    headerArt?: string

    /** Enable conversation history */
    saveHistory?: boolean
}

/**
 * MCP Door Game Base Class
 * Extend this to create AI-powered door games
 *
 * @example
 * ```typescript
 * @IQModuleRuntime({ mcp: true, aiSysop: SysopMood.Elite })
 * class AIDungeonMaster extends MCPDoorGame {
 *   constructor() {
 *     super({
 *       name: "AI Dungeon Master",
 *       gameType: "interactive-fiction",
 *       defaultAgent: {
 *         type: MCPAgentType.Claude,
 *         systemPrompt: "You are a dungeon master for a text-based RPG..."
 *       }
 *     })
 *   }
 * }
 * ```
 */
export abstract class MCPDoorGame extends IQ {
    protected config: MCPDoorGameConfig
    protected session: MCPDoorSession | null = null
    protected turnCount: number = 0

    constructor(config: MCPDoorGameConfig) {
        super()
        this.config = {
            maxTurns: 0,
            sessionTimeout: 30,
            saveHistory: true,
            ...config
        }
    }

    /**
     * Initialize a new game session
     */
    protected initSession(userHandle: string): MCPDoorSession {
        this.session = {
            sessionId: this.generateSessionId(),
            userHandle: userHandle,
            gameType: this.config.gameType,
            agent: this.config.defaultAgent,
            startTime: new Date(),
            history: [],
            metadata: {}
        }
        this.turnCount = 0
        return this.session
    }

    /**
     * Generate a unique session ID
     */
    private generateSessionId(): string {
        return `mcp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }

    /**
     * Spawn an AI agent for this game
     * In production, this creates an actual MCP connection
     */
    protected async spawnAgent(agentConfig?: MCPAgentConfig): Promise<boolean> {
        const config = agentConfig || this.config.defaultAgent

        // In production:
        // 1. Spawn Docker container for agent isolation
        // 2. Establish MCP connection
        // 3. Initialize agent with system prompt
        // 4. Set up rate limiting and security
        //
        // For now, we'll simulate this with a simple flag
        this.say(`\n╔═══════════════════════════════════════════╗`.color("bright cyan"))
        this.say(`║  Spawning ${config.type.toUpperCase()} agent...`.color("bright cyan") + " ".repeat(23 - config.type.length) + "║".color("bright cyan"))
        this.say(`╚═══════════════════════════════════════════╝`.color("bright cyan"))
        this.wait(1000)
        this.say(`✓ Agent initialized`.color("bright green"))
        this.say(`✓ MCP connection established`.color("bright green"))
        this.say(`✓ Security sandbox active\n`.color("bright green"))
        this.wait(500)

        return true
    }

    /**
     * Send a message to the AI agent and get a response
     */
    protected async sendToAgent(message: string): Promise<string> {
        if (!this.session) {
            throw new Error("No active session. Call initSession() first.")
        }

        // Add user message to history
        const userMsg: MCPMessage = {
            role: "user",
            content: message,
            timestamp: new Date()
        }
        this.session.history.push(userMsg)

        // In production: Call actual MCP agent
        // const response = await mcpClient.send(this.session.agent, message, this.session.history)

        // For now, return a mock response
        const response = await this.getMockAgentResponse(message)

        // Add agent response to history
        const agentMsg: MCPMessage = {
            role: "assistant",
            content: response,
            timestamp: new Date()
        }
        this.session.history.push(agentMsg)

        this.turnCount++

        return response
    }

    /**
     * Mock agent response (override this with real MCP calls)
     * Each game type can customize this behavior
     */
    protected async getMockAgentResponse(message: string): Promise<string> {
        // Base implementation - override in subclasses for game-specific logic
        return `[AI Agent]: Received your message: "${message}"`
    }

    /**
     * Display game header
     */
    protected showHeader(): void {
        if (this.config.headerArt) {
            this.say(this.config.headerArt)
        } else {
            this.say("\n" + "═".repeat(60).color("bright cyan"))
            this.say(this.config.name.center().color("bright white"))
            this.say(this.config.description.center().color("white"))
            this.say("═".repeat(60).color("bright cyan") + "\n")
        }
    }

    /**
     * Display turn counter
     */
    protected showTurnInfo(): void {
        const maxTurns = this.config.maxTurns || "∞"
        this.say(`\nTurn ${this.turnCount}/${maxTurns}`.color("bright black"))
    }

    /**
     * Check if session should end
     */
    protected shouldEndSession(): boolean {
        if (this.config.maxTurns && this.turnCount >= this.config.maxTurns) {
            return true
        }

        if (this.config.sessionTimeout && this.session) {
            const elapsed = Date.now() - this.session.startTime.getTime()
            const timeoutMs = this.config.sessionTimeout * 60 * 1000
            if (elapsed > timeoutMs) {
                return true
            }
        }

        return false
    }

    /**
     * Save session history
     */
    protected saveSession(): void {
        if (!this.config.saveHistory || !this.session) return

        // In production: Save to database or file
        this.say(`\nSession saved: ${this.session.sessionId}`.color("bright black"))
    }

    /**
     * Display conversation history
     */
    protected showHistory(): void {
        if (!this.session) return

        this.say("\n" + "═".repeat(60).color("bright cyan"))
        this.say("Game History".center().color("bright white"))
        this.say("═".repeat(60).color("bright cyan") + "\n")

        this.session.history.forEach((msg, idx) => {
            if (msg.role === "system") return // Skip system messages

            const prefix = msg.role === "user" ? "You:" : "Agent:"
            const color = msg.role === "user" ? "bright green" : "bright magenta"
            this.say(`${prefix.color(color)} ${msg.content}`)
        })

        this.say("\n" + "─".repeat(60).color("bright black"))
        this.pause()
    }

    /**
     * Abstract method - Implement game logic in subclasses
     */
    public abstract start(): void
}

/**
 * Example: AI Interactive Fiction Door Game
 */
@IQ.Decorators.Module({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    assets: "",
    encoding: "CP437",
    data: IQReactor({
        currentStory: "",
        playerChoices: []
    }),
    computed: {}
})
export class AIInteractiveFiction extends MCPDoorGame {
    constructor() {
        super({
            name: "AI INTERACTIVE FICTION",
            description: "Claude-powered text adventure",
            gameType: "interactive-fiction",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: `You are a masterful storyteller and dungeon master.
Create engaging, immersive interactive fiction experiences.
Present vivid scenes, meaningful choices, and respond to player actions dynamically.
Keep responses to 3-5 sentences. End each response with 2-3 clear action options.
Maintain continuity with previous player choices.
Style: Cyberpunk BBS underground meets classic Zork.`,
                temperature: 0.8,
                maxTokens: 300
            },
            sysopMood: SysopMood.Elite,
            headerArt: `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║      ▄▀█ █   █ █▄ █ ▀█▀ █▀▀ █▀▄ ▄▀█ █▀▀ ▀█▀ █ █ █ █▀▀      ║
║      █▀█ █   █ █ ▀█  █  ██▄ █▀▄ █▀█ █▄▄  █  █ ▀▄▀ ██▄      ║
║                                                              ║
║           █▀▀ █ █▀▀ ▀█▀ █ █▀█ █▄ █                         ║
║           █▀  █ █▄▄  █  █ █▄█ █ ▀█                         ║
║                                                              ║
║              Claude-Powered Interactive Fiction              ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
            `
        })
    }

    @IQ.Decorators.ModuleRuntime({ debug: true })
    public start(): void {
        this.showHeader()

        // Get username (in production, this comes from BBS system)
        const username = user.alias || "Traveler"
        this.initSession(username)

        // Spawn the AI agent
        const agentReady = this.spawnAgent()

        const menu = this.menu({
            name: "Interactive Fiction",
            description: "AI-powered text adventure",
            commands: {
                default: async (metadata = {}) => {
                    const userInput = this.ask(`\n> `.color("bright green"))

                    if (!userInput || userInput.toLowerCase() === "quit") {
                        this.saveSession()
                        this.say(`\nThanks for playing! ${SysopMood.Ghost}`.color("bright cyan"))
                        this.disconnect()
                        return { metadata, exit: true }
                    }

                    if (userInput.toLowerCase() === "history") {
                        this.showHistory()
                        return { metadata }
                    }

                    // Send to AI agent
                    const response = await this.sendToAgent(userInput)

                    // Display AI response with cool formatting
                    this.say("\n" + "─".repeat(60).color("bright black"))
                    this.say(response.color("white"))
                    this.say("─".repeat(60).color("bright black"))

                    this.showTurnInfo()

                    if (this.shouldEndSession()) {
                        this.say(`\nSession time limit reached.`.color("yellow"))
                        this.saveSession()
                        this.pause()
                        this.disconnect()
                        return { metadata, exit: true }
                    }

                    return { metadata }
                }
            }
        })

        // Initial story prompt
        this.say("\nType your actions, or 'history' to review, 'quit' to exit.".color("bright yellow"))

        menu.render((res: IQMenuLoopMessageResponse, cmdkey: Function) => {
            menu.prompt({ text: "" }).command(cmdkey)
        })
    }

    protected async getMockAgentResponse(message: string): Promise<string> {
        // Mock interactive fiction responses
        const responses = [
            `You venture deeper into the neon-lit underbelly of the BBS network.
Flickering terminals line the walls, each running forgotten door games from the 90s.
A mysterious sysop appears in the corner, their avatar glitching between moods.

What do you do?
1. Talk to the sysop
2. Examine the terminals
3. Download a file from the archives`,

            `The sysop's avatar stabilizes. They look at you with a knowing grin.
"You found the hidden MCP door," they say. "Most users never even know it exists.
The real question is... are you ready to jack in?"

How do you respond?
1. "What's MCP?"
2. "I'm ready. Let's do this."
3. "This feels like a trap..."`,

            `Data streams flood your vision as you jack into the MCP network.
AI agents swirl around you like digital ghosts, each one a different personality.
One approaches - it's wearing the ANSI art of a classic BBS welcome screen.

The agent speaks in your mind:
1. Accept the agent's quest
2. Ask about the other agents
3. Disconnect immediately`
        ]

        // Cycle through mock responses
        return responses[this.turnCount % responses.length]
    }
}

export { MCPDoorGame, AIInteractiveFiction }
export default MCPDoorGame
