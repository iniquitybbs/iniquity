/**
 * ANSI Aerosol Ghosts - Animated Terminal Effects
 * @module ANSIGhosts
 * @summary Ephemeral ANSI art that appears and disappears based on events, moods, and user interactions
 *
 * Inspired by the concept of "ansi aerosol" - digital graffiti that fades in and out of the terminal.
 * These ghosts can be triggered by AI sysop moods, system events, random encounters, or user actions.
 *
 * Think: Flickering ANSI art, fade-in/fade-out effects, mood-based visuals,
 * hidden messages that only appear under certain conditions.
 */

import {
    IQ,
    IQModuleACLS,
    IQReactor,
    IQFrameColorOptions
} from "../index"

import {
    ANSIGhostEffect,
    SysopMood
} from "./mcp"

/**
 * ANSI Ghost Artwork Library
 * Pre-defined ghost effects for different moods and events
 */
export const GhostArtLibrary = {
    goofy: `
    ${SysopMood.Goofy}  ╔═══════════════╗
       ║  HELLO THERE! ║
       ║   ^‿^         ║
       ╚═══════════════╝
    `,

    grumpy: `
    ${SysopMood.Grumpy}  ┌─────────────┐
       │  BUSY. GO   │
       │  AWAY.      │
       └─────────────┘
    `,

    ghost: `
       ${SysopMood.Ghost}
    ░░▒▒▓▓ ????? ▓▓▒▒░░
      ▒▒▓▓ ? ? ? ▓▓▒▒
       ░▒▓  ? ?  ▓▒░
         ░▒ ? ▒░
           ░░
    `,

    elite: `
    ${SysopMood.Elite}  ╔═══════════════════╗
       ║  R00T@LOCALHOST  ║
       ║  >_              ║
       ╚═══════════════════╝
    `,

    welcome: `
    ╔══════════════════════════════╗
    ║   WELCOME TO INIQUITY BBS   ║
    ║   Est. 1996 - Reborn 2024   ║
    ║                              ║
    ║   ${SysopMood.Ghost} The ghosts remember ${SysopMood.Ghost}  ║
    ╚══════════════════════════════╝
    `,

    goodbye: `
    ┌────────────────────────────┐
    │  Connection terminated...  │
    │  See you in the shadows.   │
    │            ${SysopMood.Ghost}               │
    └────────────────────────────┘
    `,

    newFile: `
    ▓▒░ NEW FILE UPLOADED ░▒▓
         ${SysopMood.Elite}
    `,

    chatJoin: `
    >>> USER CONNECTED ${SysopMood.Goofy}
    `,

    chatLeave: `
    <<< USER DISCONNECTED ${SysopMood.Grumpy}
    `,

    secretFound: `
    ░░░▒▒▒▓▓▓███ SECRET UNLOCKED ███▓▓▓▒▒▒░░░
                ${SysopMood.Ghost}
    You found a hidden area...
    ░░░▒▒▒▓▓▓███████████████████▓▓▓▒▒▒░░░
    `,

    mcpActive: `
    ╔═══════════════════════════════╗
    ║   MCP AGENT ONLINE ${SysopMood.Elite}        ║
    ║   █▀█ █▀▀ ▄▀█ █▀▄ █▄█         ║
    ║   █▀▄ ██▄ █▀█ █▄▀  █          ║
    ╚═══════════════════════════════╝
    `,

    glitch: `
    ▓▒░█▀▀ ██░▒▓█▓▒░██ ▀▀█░▒▓
    ░▒▓ ${SysopMood.Ghost} ░▒▓ ${SysopMood.Ghost} ░▒▓ ${SysopMood.Ghost} ░▒▓
    ▓▒░ SYSTEM GLITCH ░▒▓
    `,

    dataStream: `
    ║ 01001001 01001110 01010001 ║
    ║ ${SysopMood.Ghost} DATA STREAMING ${SysopMood.Ghost}     ║
    ║ 01010101 01001001 01010100 ║
    `,

    easter_egg: `
    ╔════════════════════════════════╗
    ║  CONGRATULATIONS!              ║
    ║  You found an easter egg ${SysopMood.Ghost}    ║
    ║                                ║
    ║  The old BBS ways live on...   ║
    ╚════════════════════════════════╝
    `
}

/**
 * ANSI Ghost Effect Manager
 * Manages the lifecycle of ghost effects
 */
export class ANSIGhostManager {
    private activeGhosts: Map<string, ANSIGhostEffect> = new Map()
    private eventHandlers: Map<string, Function[]> = new Map()

    /**
     * Register a new ghost effect
     */
    public registerGhost(id: string, effect: ANSIGhostEffect): void {
        this.activeGhosts.set(id, effect)

        // If event-triggered, register the event handler
        if (effect.trigger === "event" && effect.eventName) {
            if (!this.eventHandlers.has(effect.eventName)) {
                this.eventHandlers.set(effect.eventName, [])
            }
            this.eventHandlers.get(effect.eventName)?.push(() => this.triggerGhost(id))
        }
    }

    /**
     * Trigger a ghost effect
     */
    public triggerGhost(id: string): void {
        const ghost = this.activeGhosts.get(id)
        if (!ghost) return

        this.displayGhost(ghost)
    }

    /**
     * Display a ghost with fade effects
     */
    private displayGhost(ghost: ANSIGhostEffect): void {
        const pos = ghost.position || { x: 1, y: 1 }

        // Move cursor to position
        console.gotoxy(pos.x, pos.y)

        // Fade in effect (simulate with delays)
        if (ghost.fadeSpeed) {
            this.fadeIn(ghost.artwork, ghost.fadeSpeed)
        } else {
            console.writeln(ghost.artwork.color("bright cyan"))
        }

        // Auto-dismiss after duration
        if (ghost.duration && ghost.duration > 0) {
            sleep(ghost.duration)
            if (ghost.fadeSpeed) {
                this.fadeOut(ghost.artwork.split("\n").length, ghost.fadeSpeed)
            }
        }
    }

    /**
     * Fade in effect (character by character)
     */
    private fadeIn(artwork: string, speed: number): void {
        const lines = artwork.split("\n")
        lines.forEach((line, idx) => {
            sleep(speed)
            console.writeln(line.color("bright cyan"))
        })
    }

    /**
     * Fade out effect (clear lines)
     */
    private fadeOut(lineCount: number, speed: number): void {
        for (let i = 0; i < lineCount; i++) {
            sleep(speed)
            console.up(1)
            console.clearline()
        }
    }

    /**
     * Random ghost encounter
     * Randomly triggers a ghost effect
     */
    public randomEncounter(probability: number = 0.15): void {
        if (Math.random() > probability) return

        const ghostKeys = Object.keys(GhostArtLibrary)
        const randomKey = ghostKeys[Math.floor(Math.random() * ghostKeys.length)]
        const artwork = GhostArtLibrary[randomKey as keyof typeof GhostArtLibrary]

        const ghost: ANSIGhostEffect = {
            artwork: artwork,
            trigger: "random",
            position: { x: 1, y: console.screen_rows - 10 },
            fadeSpeed: 100,
            duration: 3000
        }

        this.displayGhost(ghost)
    }

    /**
     * Mood-triggered ghost
     * Show a ghost based on AI sysop mood
     */
    public moodGhost(mood: SysopMood): void {
        let artwork: string

        switch (mood) {
            case SysopMood.Goofy:
                artwork = GhostArtLibrary.goofy
                break
            case SysopMood.Grumpy:
                artwork = GhostArtLibrary.grumpy
                break
            case SysopMood.Ghost:
                artwork = GhostArtLibrary.ghost
                break
            case SysopMood.Elite:
                artwork = GhostArtLibrary.elite
                break
            default:
                artwork = GhostArtLibrary.ghost
        }

        const ghost: ANSIGhostEffect = {
            artwork: artwork,
            trigger: "mood",
            linkedMood: mood,
            position: { x: console.screen_columns - 30, y: 2 },
            fadeSpeed: 150,
            duration: 4000
        }

        this.displayGhost(ghost)
    }

    /**
     * Event-triggered ghost
     */
    public triggerEvent(eventName: string): void {
        const handlers = this.eventHandlers.get(eventName)
        if (!handlers) return

        handlers.forEach((handler) => handler())
    }

    /**
     * Clear all active ghosts
     */
    public clearAll(): void {
        this.activeGhosts.clear()
        this.eventHandlers.clear()
    }
}

/**
 * ANSI Ghost Module
 * Interactive demonstration of ghost effects
 */
@IQ.Decorators.Module({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    assets: "",
    encoding: "CP437",
    data: IQReactor({
        ghostManager: new ANSIGhostManager(),
        demonstrationMode: true
    }),
    computed: {}
})
export class ANSIGhosts extends IQ {
    private ghostManager: ANSIGhostManager

    constructor() {
        super()
        this.ghostManager = new ANSIGhostManager()
    }

    @IQ.Decorators.ModuleRuntime({ debug: true })
    public start(): void {
        this.say("\n" + "═".repeat(60).color("bright cyan"))
        this.say("ANSI AEROSOL GHOSTS - DEMONSTRATION".center().color("bright white"))
        this.say("Ephemeral art in the terminal".center().color("white"))
        this.say("═".repeat(60).color("bright cyan") + "\n")

        const menu = this.menu({
            name: "ANSI Ghosts Demo",
            description: "Interactive ghost effect demonstration",
            commands: {
                "1": (metadata = { description: "Random ghost encounter" }) => {
                    this.ghostManager.randomEncounter(1.0) // Force appearance
                    this.wait(4000)
                    return { metadata }
                },
                "2": (metadata = { description: "Goofy mood ghost" }) => {
                    this.ghostManager.moodGhost(SysopMood.Goofy)
                    this.wait(4000)
                    return { metadata }
                },
                "3": (metadata = { description: "Grumpy mood ghost" }) => {
                    this.ghostManager.moodGhost(SysopMood.Grumpy)
                    this.wait(4000)
                    return { metadata }
                },
                "4": (metadata = { description: "Ghost mood ghost" }) => {
                    this.ghostManager.moodGhost(SysopMood.Ghost)
                    this.wait(4000)
                    return { metadata }
                },
                "5": (metadata = { description: "Elite mood ghost" }) => {
                    this.ghostManager.moodGhost(SysopMood.Elite)
                    this.wait(4000)
                    return { metadata }
                },
                "6": (metadata = { description: "MCP Active ghost" }) => {
                    const ghost: ANSIGhostEffect = {
                        artwork: GhostArtLibrary.mcpActive,
                        trigger: "event",
                        fadeSpeed: 100,
                        duration: 3000
                    }
                    this.ghostManager["displayGhost"](ghost)
                    this.wait(4000)
                    return { metadata }
                },
                "7": (metadata = { description: "Secret found easter egg" }) => {
                    const ghost: ANSIGhostEffect = {
                        artwork: GhostArtLibrary.secretFound,
                        trigger: "event",
                        fadeSpeed: 50,
                        duration: 5000
                    }
                    this.ghostManager["displayGhost"](ghost)
                    this.wait(6000)
                    return { metadata }
                },
                "8": (metadata = { description: "Glitch effect" }) => {
                    // Rapid glitch effect
                    for (let i = 0; i < 3; i++) {
                        const ghost: ANSIGhostEffect = {
                            artwork: GhostArtLibrary.glitch,
                            trigger: "random",
                            position: {
                                x: Math.floor(Math.random() * (console.screen_columns - 30)),
                                y: Math.floor(Math.random() * (console.screen_rows - 10))
                            },
                            fadeSpeed: 0,
                            duration: 200
                        }
                        this.ghostManager["displayGhost"](ghost)
                        this.wait(300)
                    }
                    this.wait(2000)
                    return { metadata }
                },
                Q: (metadata = { description: "Quit demonstration" }) => {
                    const ghost: ANSIGhostEffect = {
                        artwork: GhostArtLibrary.goodbye,
                        trigger: "event",
                        fadeSpeed: 100,
                        duration: 3000
                    }
                    this.ghostManager["displayGhost"](ghost)
                    this.wait(3500)
                    this.disconnect()
                    return { metadata }
                },
                default: () => {
                    this.say("Invalid option. Try 1-8 or Q to quit.".color("red"))
                }
            }
        })

        menu.render((res, cmdkey) => {
            this.say("\n" + "─".repeat(60).color("bright black"))
            this.say("\nChoose a ghost effect:".color("bright yellow"))
            this.say("1. Random Ghost Encounter".color("white"))
            this.say("2. Goofy Mood Ghost".color("white"))
            this.say("3. Grumpy Mood Ghost".color("white"))
            this.say("4. Mystery Ghost".color("white"))
            this.say("5. Elite Mood Ghost".color("white"))
            this.say("6. MCP Agent Active".color("white"))
            this.say("7. Secret Found!".color("white"))
            this.say("8. System Glitch".color("white"))
            this.say("Q. Quit\n".color("white"))

            menu.prompt({ text: "Select: ".color("bright cyan") }).command(cmdkey)
        })
    }
}

/**
 * Utility functions for easy ghost spawning
 */

/**
 * Quick ghost spawn
 */
export function spawnGhost(artwork: string, duration: number = 3000): void {
    const manager = new ANSIGhostManager()
    const ghost: ANSIGhostEffect = {
        artwork: artwork,
        trigger: "random",
        fadeSpeed: 100,
        duration: duration
    }
    manager["displayGhost"](ghost)
}

/**
 * Quick mood ghost
 */
export function spawnMoodGhost(mood: SysopMood): void {
    const manager = new ANSIGhostManager()
    manager.moodGhost(mood)
}

/**
 * Random ghost encounter
 */
export function randomGhost(): void {
    const manager = new ANSIGhostManager()
    manager.randomEncounter()
}

export {
    ANSIGhostManager,
    ANSIGhosts,
    GhostArtLibrary
}

export default ANSIGhostManager
