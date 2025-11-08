/**
 * Example: Complete BBS with MCP Integration
 * @example
 * @summary This example shows how to build a complete BBS that integrates:
 * - AI Sysop personalities
 * - MCP door games
 * - ANSI aerosol ghosts
 * - Classic BBS features
 *
 * This captures that "lost boys" BBS scene energy with modern AI agents.
 */

import {
    IQ,
    IQModuleACLS,
    IQReactor,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse,
    IQCoreModules,
    SysopMood,
    randomSysopEncounter,
    randomGhost,
    spawnMoodGhost,
    ANSIGhostManager,
    GhostArtLibrary,
    ANSIGhostEffect
} from "../index"

/**
 * Main BBS with MCP Integration
 * This is your custom BBS that uses AI agents and ANSI ghosts
 */
@IQ.Decorators.Module({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    assets: "",
    encoding: "CP437",
    data: IQReactor({
        username: "",
        lastLogin: new Date(),
        ghostsEnabled: true,
        currentMood: SysopMood.Goofy
    }),
    computed: {}
})
export class MCPExampleBBS extends IQ {
    private ghostManager: ANSIGhostManager

    constructor() {
        super()
        this.ghostManager = new ANSIGhostManager()
        this.setupGhostEvents()
    }

    /**
     * Set up ANSI ghost effects for various BBS events
     */
    private setupGhostEvents(): void {
        // Welcome ghost when user logs in
        const welcomeGhost: ANSIGhostEffect = {
            artwork: GhostArtLibrary.welcome,
            trigger: "event",
            eventName: "login",
            position: { x: 10, y: 8 },
            fadeSpeed: 100,
            duration: 5000
        }
        this.ghostManager.registerGhost("welcome", welcomeGhost)

        // MCP active ghost when entering door games
        const mcpGhost: ANSIGhostEffect = {
            artwork: GhostArtLibrary.mcpActive,
            trigger: "event",
            eventName: "door_game_enter",
            position: { x: 15, y: 5 },
            fadeSpeed: 80,
            duration: 3000
        }
        this.ghostManager.registerGhost("mcp_active", mcpGhost)

        // Goodbye ghost on disconnect
        const goodbyeGhost: ANSIGhostEffect = {
            artwork: GhostArtLibrary.goodbye,
            trigger: "event",
            eventName: "logout",
            fadeSpeed: 150,
            duration: 3000
        }
        this.ghostManager.registerGhost("goodbye", goodbyeGhost)
    }

    /**
     * Show BBS header with optional ghost effect
     */
    private showHeader(): void {
        console.clear()

        const header = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ██ ███  █ █ █▀█ █ █ █ ▀█▀ █ █                            ║
║   ██ █ █  █ █ █ █ █ █ █  █   █                             ║
║   ██ █ █ ▄█ ▄ █ █ ▄█ █  █   █                             ║
║                                                              ║
║              THE BBS THAT REMEMBERS                          ║
║          Est. 1996 • Reborn 2024 • AI-Powered                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
        `
        this.say(header.color("bright cyan"))

        // Trigger welcome ghost
        this.ghostManager.triggerEvent("login")
        this.wait(5500) // Let the ghost finish

        // Maybe show a random sysop encounter (15% chance)
        randomSysopEncounter()
    }

    /**
     * Main menu
     */
    private mainMenu(): void {
        const menu = this.menu({
            name: "Main Menu",
            description: "The hub of your BBS experience",
            commands: {
                // AI-powered door games
                G: (metadata = { description: "Door Games Menu" }) => {
                    this.doorGamesMenu()
                    return { metadata }
                },

                // AI Sysop Chat
                S: (metadata = { description: "Chat with AI Sysop" }) => {
                    spawnMoodGhost(this.data.model.currentMood)
                    this.wait(3000)
                    IQCoreModules.aiSysop(this.data.model.currentMood)
                    return { metadata }
                },

                // Change sysop mood
                M: (metadata = { description: "Change Sysop Mood" }) => {
                    this.changeMoodMenu()
                    return { metadata }
                },

                // ANSI Ghosts Demo
                A: (metadata = { description: "ANSI Ghosts Demo" }) => {
                    IQCoreModules.ansiGhosts()
                    return { metadata }
                },

                // File Areas (classic BBS feature)
                F: (metadata = { description: "File Areas" }) => {
                    this.say("\n[File areas would go here]".color("yellow"))
                    this.say("In production, integrate with file management system.".color("white"))
                    randomGhost() // Maybe show a ghost
                    this.pause()
                    return { metadata }
                },

                // Message Areas (classic BBS feature)
                E: (metadata = { description: "Message Areas" }) => {
                    this.say("\n[Message areas would go here]".color("yellow"))
                    this.say("In production, integrate with message system.".color("white"))
                    this.pause()
                    return { metadata }
                },

                // User Stats
                U: (metadata = { description: "User Statistics" }) => {
                    this.showUserStats()
                    return { metadata }
                },

                // Help
                H: (metadata = { description: "Help & Info" }) => {
                    this.showHelp()
                    return { metadata }
                },

                // Disconnect
                Q: (metadata = { description: "Quit / Logoff" }) => {
                    this.ghostManager.triggerEvent("logout")
                    this.wait(3500)
                    this.disconnect()
                    return { metadata }
                },

                default: () => {
                    this.say("\nInvalid command. Press H for help.".color("red"))
                    this.wait(1500)
                }
            }
        })

        menu.render((res: IQMenuLoopMessageResponse, cmdkey: Function) => {
            console.clear()
            this.say("\n" + "═".repeat(60).color("bright cyan"))
            this.say(`INIQUITY MAIN MENU [AI Sysop: ${this.data.model.currentMood}]`.center().color("bright white"))
            this.say("═".repeat(60).color("bright cyan") + "\n")

            this.say("(G) Door Games".color("white"))
            this.say("(S) Chat with AI Sysop".color("white"))
            this.say("(M) Change Sysop Mood".color("white"))
            this.say("(A) ANSI Ghosts Demo".color("white"))
            this.say("(F) File Areas".color("white"))
            this.say("(E) Message Areas".color("white"))
            this.say("(U) User Statistics".color("white"))
            this.say("(H) Help & Info".color("white"))
            this.say("(Q) Quit\n".color("white"))

            menu.prompt({ text: "Command: ".color("bright yellow") }).command(cmdkey)
        })
    }

    /**
     * Door games submenu
     */
    private doorGamesMenu(): void {
        // Trigger MCP active ghost
        this.ghostManager.triggerEvent("door_game_enter")
        this.wait(3500)

        const menu = this.menu({
            name: "Door Games",
            description: "AI-powered interactive experiences",
            commands: {
                "1": (metadata = { description: "AI Interactive Fiction" }) => {
                    IQCoreModules.aiInteractiveFiction()
                    return { metadata }
                },
                "2": (metadata = { description: "AI Code Assistant" }) => {
                    IQCoreModules.aiCodeAssistant()
                    return { metadata }
                },
                "3": (metadata = { description: "Classic Door Game" }) => {
                    this.say("\n[Classic door game would load here]".color("yellow"))
                    this.say("In production, launch Trade Wars, LORD, etc.".color("white"))
                    this.pause()
                    return { metadata }
                },
                Q: (metadata = { description: "Return to Main Menu" }) => {
                    return { metadata, exit: true }
                },
                default: () => {
                    this.say("\nInvalid selection.".color("red"))
                }
            }
        })

        menu.render((res: IQMenuLoopMessageResponse, cmdkey: Function) => {
            console.clear()
            this.say("\n" + "═".repeat(60).color("bright cyan"))
            this.say("DOOR GAMES MENU".center().color("bright white"))
            this.say("═".repeat(60).color("bright cyan") + "\n")

            this.say("1. AI Interactive Fiction (Claude-powered)".color("white"))
            this.say("2. AI Code Assistant (Coding help)".color("white"))
            this.say("3. Classic Door Game (Coming soon)".color("white"))
            this.say("Q. Return to Main Menu\n".color("white"))

            menu.prompt({ text: "Select: ".color("bright yellow") }).command(cmdkey)
        })
    }

    /**
     * Change AI sysop mood
     */
    private changeMoodMenu(): void {
        const menu = this.menu({
            name: "Change Sysop Mood",
            description: "Select AI personality",
            commands: {
                "1": (metadata = { description: "Goofy - Helpful & Fun" }) => {
                    this.data.model.currentMood = SysopMood.Goofy
                    spawnMoodGhost(SysopMood.Goofy)
                    this.wait(3000)
                    this.say("\nSysop mood changed to Goofy!".color("bright green"))
                    this.pause()
                    return { metadata, exit: true }
                },
                "2": (metadata = { description: "Grumpy - Old School" }) => {
                    this.data.model.currentMood = SysopMood.Grumpy
                    spawnMoodGhost(SysopMood.Grumpy)
                    this.wait(3000)
                    this.say("\nSysop mood changed to Grumpy.".color("bright green"))
                    this.pause()
                    return { metadata, exit: true }
                },
                "3": (metadata = { description: "Ghost - Mysterious" }) => {
                    this.data.model.currentMood = SysopMood.Ghost
                    spawnMoodGhost(SysopMood.Ghost)
                    this.wait(3000)
                    this.say("\nSysop mood changed to Ghost...".color("bright green"))
                    this.pause()
                    return { metadata, exit: true }
                },
                "4": (metadata = { description: "Elite - Technical" }) => {
                    this.data.model.currentMood = SysopMood.Elite
                    spawnMoodGhost(SysopMood.Elite)
                    this.wait(3000)
                    this.say("\nSysop mood changed to Elite.".color("bright green"))
                    this.pause()
                    return { metadata, exit: true }
                },
                Q: (metadata = { description: "Cancel" }) => {
                    return { metadata, exit: true }
                },
                default: () => {
                    this.say("\nInvalid selection.".color("red"))
                }
            }
        })

        menu.render((res: IQMenuLoopMessageResponse, cmdkey: Function) => {
            console.clear()
            this.say("\n" + "═".repeat(60).color("bright cyan"))
            this.say("SELECT SYSOP MOOD".center().color("bright white"))
            this.say("═".repeat(60).color("bright cyan") + "\n")

            this.say(`1. ${SysopMood.Goofy} Goofy - Helpful, enthusiastic, fun`.color("white"))
            this.say(`2. ${SysopMood.Grumpy} Grumpy - Brief, sarcastic, old-school`.color("white"))
            this.say(`3. ${SysopMood.Ghost} Ghost - Mysterious, cryptic, hidden knowledge`.color("white"))
            this.say(`4. ${SysopMood.Elite} Elite - Technical, scene-aware, deep magic`.color("white"))
            this.say("Q. Cancel\n".color("white"))

            this.say(`Current mood: ${this.data.model.currentMood}\n`.color("bright yellow"))

            menu.prompt({ text: "Select: ".color("bright yellow") }).command(cmdkey)
        })
    }

    /**
     * Show user statistics
     */
    private showUserStats(): void {
        console.clear()
        this.say("\n" + "═".repeat(60).color("bright cyan"))
        this.say("USER STATISTICS".center().color("bright white"))
        this.say("═".repeat(60).color("bright cyan") + "\n")

        this.say(`Username: ${user.alias || "Anonymous"}`.color("white"))
        this.say(`Last Login: ${this.data.model.lastLogin.toLocaleString()}`.color("white"))
        this.say(`Current Sysop Mood: ${this.data.model.currentMood}`.color("white"))
        this.say(`Ghosts Enabled: ${this.data.model.ghostsEnabled ? "Yes" : "No"}`.color("white"))
        this.say(`Terminal: ${console.screen_columns}x${console.screen_rows}`.color("white"))

        // Maybe show a random ghost
        randomGhost()

        this.say("\n" + "─".repeat(60).color("bright black"))
        this.pause()
    }

    /**
     * Show help information
     */
    private showHelp(): void {
        console.clear()
        this.say("\n" + "═".repeat(60).color("bright cyan"))
        this.say("HELP & INFORMATION".center().color("bright white"))
        this.say("═".repeat(60).color("bright cyan") + "\n")

        this.say("Welcome to the MCP-enabled Iniquity BBS!".color("bright white"))
        this.say("")
        this.say("What's new:".color("bright yellow"))
        this.say("• AI Sysop with 4 personality moods".color("white"))
        this.say("• MCP door games powered by Claude/Codex/Gemini".color("white"))
        this.say("• ANSI aerosol ghosts - animated terminal art".color("white"))
        this.say("• Interactive fiction, code assistance, and more".color("white"))
        this.say("")
        this.say("The scene energy:".color("bright yellow"))
        this.say('This captures that "lost boys found their place" vibe'.color("white"))
        this.say("from the classic BBS era, but modernized with AI agents.".color("white"))
        this.say("")
        this.say("Navigation:".color("bright yellow"))
        this.say("• Use single letter commands (case insensitive)".color("white"))
        this.say("• Press Q to go back or quit".color("white"))
        this.say("• Watch for ANSI ghosts that appear randomly".color("white"))
        this.say("• Chat with the AI sysop - their mood affects responses".color("white"))

        this.say("\n" + "─".repeat(60).color("bright black"))
        this.pause()
    }

    /**
     * Main entry point
     */
    @IQ.Decorators.ModuleRuntime({ debug: true })
    public start(): void {
        // Show header with welcome ghost
        this.showHeader()

        // Get/set username
        this.data.model.username = user.alias || "Traveler"
        this.data.model.lastLogin = new Date()

        // Maybe show a random ghost on entry
        if (Math.random() < 0.3) {
            randomGhost()
            this.wait(3500)
        }

        // Launch main menu
        this.mainMenu()
    }
}

/**
 * Export for use in other modules
 */
export default new MCPExampleBBS()
