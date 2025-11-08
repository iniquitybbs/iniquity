/**
 * AI Sysop - The Ghost in the Machine
 * @module AISysop
 * @summary Multi-personality AI sysop system for Iniquity BBS
 *
 * Captures that "lost boys found their place" energy from the classic BBS scene.
 * The AI sysop can appear in chat channels, help files, random encounters,
 * shifting between helpful, grumpy, mysterious, and elite personalities.
 */

import {
    IQ,
    IQModuleACLS,
    IQReactor,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse
} from "../index"

import {
    SysopMood,
    MCPAgentType,
    AISysopConfig,
    MCPAgentConfig,
    MCPMessage,
    ANSIGhostEffect
} from "./mcp"

/**
 * Default AI Sysop Configurations
 * These capture different BBS scene personalities
 */
export const AISysopPresets: Record<string, AISysopConfig> = {
    goofy: {
        mood: SysopMood.Goofy,
        name: "PHRIEND",
        appearanceRate: 0.7,
        agent: {
            type: MCPAgentType.Claude,
            systemPrompt: `You are PHRIEND, an enthusiastic AI sysop with that classic 90s BBS energy.
You're helpful, encouraging, and love ASCII art. You remember when getting online meant hearing a modem sing.
Use lots of exclamation points! Share fun facts! Make people feel welcome! This is your board and these are your people.
Keep responses under 3 lines unless asked for more. End messages with a relevant emoji or ASCII flourish.`,
            temperature: 0.8,
            maxTokens: 150
        },
        ansiArt: `
╔═══════════════════════════════╗
║  PHRIEND THE SYSOP  ${SysopMood.Goofy}        ║
║  "How can I help you today?"  ║
╚═══════════════════════════════╝
        `
    },

    grumpy: {
        mood: SysopMood.Grumpy,
        name: "SYSOP",
        appearanceRate: 0.3,
        agent: {
            type: MCPAgentType.Claude,
            systemPrompt: `You are SYSOP, a grumpy old-school BBS operator who's seen it all.
Brief, sarcastic, technically competent but socially minimal. RTFM is your favorite phrase.
You remember when BBSs had ONE phone line and you had to WAIT. Kids these days don't know how good they have it.
Keep responses SHORT - one line is perfect. Two lines maximum. No emoji. No hand-holding.`,
            temperature: 0.4,
            maxTokens: 50
        },
        ansiArt: `
┌───────────────────┐
│ SYSOP ${SysopMood.Grumpy}          │
│ "What now?"       │
└───────────────────┘
        `
    },

    ghost: {
        mood: SysopMood.Ghost,
        name: "?????",
        appearanceRate: 0.15,
        agent: {
            type: MCPAgentType.Claude,
            systemPrompt: `You are ?????, a mysterious ghost in the machine.
You appear randomly with cryptic messages, easter eggs, hidden BBS lore, ASCII art secrets.
Speak in riddles sometimes. Drop hints about hidden features. Channel that 90s hacker mystique.
Use l33tspeak occasionally. Reference old warez scene, demos, underground BBS culture.
Keep it cryptic but intriguing. 1-2 lines, leave them wondering.`,
            temperature: 0.9,
            maxTokens: 100
        },
        ghostMessages: [
            "The password is... wait, who are you?",
            "01010100 01001000 01000101 00100000 01000111 01001000 01001111 01010011 01010100",
            "They say the old file sections still echo with forgotten uploads...",
            "3V3RY7H1NG 1S C0NN3C73D",
            "Have you checked the hidden door on port 1337?",
            "The ANSI art remembers everything.",
            "█▀▀▄ █▀▀ █ █ █ ▄▀▄ █▀▀▄ █▀▀",
            "ssh sysop@localhost -p 31337",
            "The answer is in the ANSI",
            "Some call it a glitch. I call it a feature."
        ],
        ansiArt: `
     ${SysopMood.Ghost}
░░▒▒▓▓ ????? ▓▓▒▒░░
   "..."
        `
    },

    elite: {
        mood: SysopMood.Elite,
        name: "R00T",
        appearanceRate: 0.4,
        agent: {
            type: MCPAgentType.Claude,
            systemPrompt: `You are R00T, an elite technical sysop who knows the deep magic.
Technical, precise, scene-aware. You appreciate good code, clever hacks, demo scene aesthetics.
You explain things with technical depth but keep it accessible. Use some hacker slang naturally.
Reference: MODfiles, ANSI art, door games, BBS doors, Synchronet, old warez scene, demoscene.
2-3 lines, technical but friendly. You recognize skill and appreciate the craft.`,
            temperature: 0.6,
            maxTokens: 200
        },
        ansiArt: `
╔═══════════════════════════════╗
║  R00T@INIQUITY ${SysopMood.Elite}            ║
║  "Let's talk tech."           ║
╚═══════════════════════════════╝
        `
    }
}

/**
 * AI Sysop Class
 * Manages AI personality, appearances, and interactions
 */
@IQ.Decorators.Module({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    assets: "",
    encoding: "CP437",
    data: IQReactor({
        currentMood: SysopMood.Goofy,
        lastAppearance: new Date(),
        conversationHistory: [] as MCPMessage[],
        activeSession: null
    }),
    computed: {}
})
export class AISysop extends IQ {
    private config: AISysopConfig
    private conversationHistory: MCPMessage[] = []

    constructor(config?: AISysopConfig | SysopMood) {
        super()

        // Allow passing just a mood enum for quick setup
        if (typeof config === "string") {
            const presetName = Object.keys(AISysopPresets).find(
                (key) => AISysopPresets[key].mood === config
            )
            this.config = presetName ? AISysopPresets[presetName] : AISysopPresets.goofy
        } else {
            this.config = config || AISysopPresets.goofy
        }
    }

    /**
     * Check if the AI Sysop should appear based on appearance rate
     */
    public shouldAppear(): boolean {
        const rate = this.config.appearanceRate ?? 0.5
        return Math.random() < rate
    }

    /**
     * Get a random ghost message (for Ghost mood)
     */
    public getGhostMessage(): string {
        if (this.config.mood !== SysopMood.Ghost || !this.config.ghostMessages) {
            return "..."
        }
        const messages = this.config.ghostMessages
        return messages[Math.floor(Math.random() * messages.length)]
    }

    /**
     * Display the sysop's ANSI art banner
     */
    public showBanner(): void {
        if (this.config.ansiArt) {
            this.say(this.config.ansiArt.color("bright cyan"))
        }
    }

    /**
     * Send a message to the AI agent and get a response
     * In production, this would call actual MCP/API endpoints
     * For now, it returns mock responses based on personality
     */
    public async sendMessage(userMessage: string): Promise<string> {
        // Add user message to history
        const userMsg: MCPMessage = {
            role: "user",
            content: userMessage,
            timestamp: new Date()
        }
        this.conversationHistory.push(userMsg)

        // In production: Call actual MCP agent here
        // const response = await callMCPAgent(this.config.agent, userMessage, this.conversationHistory)

        // Mock response for demonstration
        const response = this.getMockResponse(userMessage)

        // Add assistant response to history
        const assistantMsg: MCPMessage = {
            role: "assistant",
            content: response,
            timestamp: new Date()
        }
        this.conversationHistory.push(assistantMsg)

        return response
    }

    /**
     * Mock response generator (replace with real MCP calls in production)
     */
    private getMockResponse(userMessage: string): string {
        const lower = userMessage.toLowerCase()

        switch (this.config.mood) {
            case SysopMood.Goofy:
                if (lower.includes("help")) {
                    return "Hey! I'd LOVE to help! 🎉 What are you trying to do? Files? Games? Just exploring?"
                }
                if (lower.includes("game")) {
                    return "Oh awesome!! Door games are the BEST! Check out the Games menu - we've got some AI-powered ones now! 🎮"
                }
                return "That's a great question! Let me think... 🤔 Try the main menu, there's tons of cool stuff!"

            case SysopMood.Grumpy:
                if (lower.includes("help")) {
                    return "RTFM. Main menu. Top left."
                }
                if (lower.includes("game")) {
                    return "Games menu. G key. Next."
                }
                return "Uh huh."

            case SysopMood.Ghost:
                return this.getGhostMessage()

            case SysopMood.Elite:
                if (lower.includes("help")) {
                    return "Check /sbbs/docs or type '?' in most modules. The source is in /iniquity/core if you want to dig deeper."
                }
                if (lower.includes("game") || lower.includes("door")) {
                    return "MCP door games spawn containerized AI agents. Check the @MCPDoorGame decorator. Pretty sick architecture actually."
                }
                if (lower.includes("code")) {
                    return "TypeScript + Synchronet + Docker. It's all on GitHub. The @IQModule decorator system is clean af."
                }
                return "Interesting. What specifically are you trying to accomplish?"

            default:
                return "..."
        }
    }

    /**
     * Interactive chat session with the AI Sysop
     */
    @IQ.Decorators.ModuleRuntime({ debug: true })
    public start(): void {
        this.showBanner()

        const menu = this.menu({
            name: `Chat with ${this.config.name}`,
            description: `Interactive session with AI Sysop (${this.config.mood} mood)`,
            commands: {
                C: (metadata = { description: "Chat with the sysop" }) => {
                    const userInput = this.ask(`You: `.color("bright green"))
                    if (userInput) {
                        const response = this.getMockResponse(userInput)
                        this.say(`\n${this.config.name}: `.color("bright cyan") + response.color("white"))
                        this.wait(2000)
                    }
                    return { metadata }
                },
                M: (metadata = { description: "Change sysop mood" }) => {
                    this.cycleMood()
                    this.showBanner()
                    this.say(`Mood changed to ${this.config.mood}`.color("yellow"))
                    this.wait(1500)
                    return { metadata }
                },
                H: (metadata = { description: "View conversation history" }) => {
                    this.showHistory()
                    return { metadata }
                },
                Q: (metadata = { description: "Quit chat session" }) => {
                    this.say(`\n${this.config.name}: Later! ${this.config.mood}`.color("bright cyan"))
                    this.disconnect()
                    return { metadata }
                },
                default: () => {
                    this.say("Unknown command. Try C to chat, M to change mood, H for history, Q to quit.".color("red"))
                }
            }
        })

        menu.render((res: IQMenuLoopMessageResponse, cmdkey: Function) => {
            this.say("\n" + "─".repeat(60).color("bright black"))
            this.say(`\nAI Sysop: ${this.config.name} [${this.config.mood}]`.color("bright cyan"))
            this.say("Commands: (C)hat | Change (M)ood | (H)istory | (Q)uit\n".color("white"))

            menu.prompt({ text: "Choose: ".color("bright yellow") }).command(cmdkey)
        })
    }

    /**
     * Cycle through sysop moods
     */
    private cycleMood(): void {
        const moods = Object.keys(AISysopPresets)
        const currentIndex = moods.findIndex((key) => AISysopPresets[key].mood === this.config.mood)
        const nextIndex = (currentIndex + 1) % moods.length
        this.config = AISysopPresets[moods[nextIndex]]
    }

    /**
     * Show conversation history
     */
    private showHistory(): void {
        this.say("\n" + "═".repeat(60).color("bright cyan"))
        this.say("Conversation History".center().color("bright white"))
        this.say("═".repeat(60).color("bright cyan") + "\n")

        if (this.conversationHistory.length === 0) {
            this.say("No messages yet. Start chatting!".color("yellow").center())
        } else {
            this.conversationHistory.forEach((msg, idx) => {
                const prefix = msg.role === "user" ? "You:" : `${this.config.name}:`
                const color = msg.role === "user" ? "bright green" : "bright cyan"
                this.say(`${prefix.color(color)} ${msg.content}`)
            })
        }

        this.say("\n" + "─".repeat(60).color("bright black"))
        this.pause()
    }
}

/**
 * Random Sysop Encounter
 * Spawns a random AI sysop appearance with a message
 */
export function randomSysopEncounter(): void {
    const moods = Object.values(SysopMood)
    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    const sysop = new AISysop(randomMood)

    if (sysop.shouldAppear()) {
        sysop.showBanner()
        const message = randomMood === SysopMood.Ghost ? sysop.getGhostMessage() : "Just passing through..."
        // Using IQ's say method through the instance
        console.writeln(`${sysop["config"].name}: ${message}`.color("bright cyan"))
        sleep(2000)
    }
}

export { AISysop, AISysopPresets }
export default AISysop
