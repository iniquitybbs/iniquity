# MCP Integration - AI Agents for Iniquity BBS

> *"The lost boys found their place... and now they have AI agents."*

This document describes the Model Context Protocol (MCP) integration for Iniquity BBS, bringing multi-agent AI orchestration into the classic BBS experience.

## 🎨 The Vision

The MCP integration captures that raw BBS scene energy while modernizing it with AI:

- **AI Sysop Personalities** - Multiple mood states (Goofy, Grumpy, Ghost, Elite) that shift and appear
- **MCP Door Games** - Spawn Claude/Codex/Gemini agents for interactive experiences
- **ANSI Aerosol Ghosts** - Animated terminal effects that appear based on events, moods, and user interactions
- **Containerized Agents** - Each AI agent runs isolated in Docker for security and scalability

## 📦 What's Included

### Core Modules

| Module | Purpose | File |
|--------|---------|------|
| `mcp.ts` | Type definitions and interfaces | `packages/core/src/modules/mcp.ts` |
| `ai-sysop.ts` | AI Sysop personality system | `packages/core/src/modules/ai-sysop.ts` |
| `mcp-door.ts` | Base class for MCP door games | `packages/core/src/modules/mcp-door.ts` |
| `ansi-ghosts.ts` | ANSI aerosol ghost effects | `packages/core/src/modules/ansi-ghosts.ts` |
| `ai-code-assistant.ts` | Example code help door game | `packages/core/src/modules/ai-code-assistant.ts` |

### Features

- ✅ **AI Sysop Moods** - Goofy, Grumpy, Ghost, Elite personalities
- ✅ **Agent Spawning** - Claude, Codex, Gemini, and local models
- ✅ **Door Game Framework** - Extend `MCPDoorGame` for custom games
- ✅ **ANSI Ghost Effects** - Fade in/out, timed appearances, event-triggered
- ✅ **Conversation History** - Track user-agent interactions
- ✅ **Session Management** - Save/load game sessions
- ✅ **Mock Responses** - Works without API keys for testing
- 🚧 **Production MCP Calls** - Integrate your own API endpoints
- 🚧 **Docker Agent Isolation** - Coming with your TLS/Swarm work
- 🚧 **Rate Limiting** - Security features you're building separately

## 🚀 Quick Start

### 1. Use AI Sysop in Your BBS

```typescript
import { IQCoreModules, SysopMood } from "@iniquitybbs/core"

// Launch AI sysop with a specific mood
IQCoreModules.aiSysop(SysopMood.Elite)

// Or use a random sysop encounter
import { randomSysopEncounter } from "@iniquitybbs/core"
randomSysopEncounter()
```

### 2. Add ANSI Ghost Effects

```typescript
import { spawnMoodGhost, randomGhost } from "@iniquitybbs/core"

// Show a mood-based ghost
spawnMoodGhost(SysopMood.Ghost)

// Random ghost encounter
randomGhost()
```

### 3. Launch MCP Door Games

```typescript
import { IQCoreModules } from "@iniquitybbs/core"

// AI Interactive Fiction
IQCoreModules.aiInteractiveFiction()

// AI Code Assistant
IQCoreModules.aiCodeAssistant()

// ANSI Ghosts Demo
IQCoreModules.ansiGhosts()
```

## 🎮 Creating Your Own MCP Door Game

Extend the `MCPDoorGame` base class to create custom AI-powered experiences:

```typescript
import { MCPDoorGame, MCPAgentType, SysopMood } from "@iniquitybbs/core"

@IQ.Decorators.Module({
    basepath: "/iniquity/core/src/assets",
    access: IQModuleACLS.low,
    encoding: "CP437",
    data: IQReactor({ gameData: {} })
})
export class MyAIDoorGame extends MCPDoorGame {
    constructor() {
        super({
            name: "MY AI DOOR GAME",
            description: "Claude-powered adventure",
            gameType: "my-game",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: "You are a helpful game master...",
                temperature: 0.8,
                maxTokens: 300
            },
            sysopMood: SysopMood.Elite,
            maxTurns: 0,  // 0 = unlimited
            sessionTimeout: 30  // minutes
        })
    }

    @IQ.Decorators.ModuleRuntime({ debug: true })
    public start(): void {
        this.showHeader()

        const username = user.alias || "Player"
        this.initSession(username)

        this.spawnAgent()

        // Your game logic here
        // Use this.sendToAgent(message) to interact with AI
        // Use this.say(), this.ask(), etc. for terminal I/O
    }

    // Optional: Override for custom AI responses
    protected async getMockAgentResponse(message: string): Promise<string> {
        // Your mock response logic here
        // In production, this calls real MCP endpoints
        return "Agent response..."
    }
}
```

## 🤖 AI Sysop Personalities

### Available Moods

```typescript
enum SysopMood {
    Goofy = "🤪",    // Helpful, playful, enthusiastic
    Grumpy = "😤",   // Sarcastic, minimal, old-school
    Ghost = "👻",    // Cryptic, mysterious, hidden knowledge
    Elite = "⚡"     // Technical, scene-aware, deep magic
}
```

### Using AI Sysop

```typescript
import { AISysop, AISysopPresets, SysopMood } from "@iniquitybbs/core"

// Use a preset
const sysop = new AISysop(AISysopPresets.elite)

// Or create custom config
const customSysop = new AISysop({
    mood: SysopMood.Ghost,
    name: "MYSTERY",
    appearanceRate: 0.2,
    agent: {
        type: MCPAgentType.Claude,
        systemPrompt: "You are mysterious...",
        temperature: 0.9
    }
})

// Check if should appear (based on appearance rate)
if (sysop.shouldAppear()) {
    sysop.showBanner()
    const response = await sysop.sendMessage("Hello!")
    console.writeln(response)
}
```

### Ghost Messages

The Ghost mood has cryptic pre-written messages:

```typescript
const ghost = new AISysop(SysopMood.Ghost)
const message = ghost.getGhostMessage()
// Returns random messages like:
// "The password is... wait, who are you?"
// "3V3RY7H1NG 1S C0NN3C73D"
// "Have you checked the hidden door on port 1337?"
```

## 👻 ANSI Aerosol Ghosts

### Ghost Art Library

Pre-defined ANSI art for different events:

- `GhostArtLibrary.goofy` - Goofy sysop appearance
- `GhostArtLibrary.grumpy` - Grumpy sysop appearance
- `GhostArtLibrary.ghost` - Mystery ghost
- `GhostArtLibrary.elite` - Elite sysop
- `GhostArtLibrary.welcome` - Welcome screen
- `GhostArtLibrary.goodbye` - Goodbye message
- `GhostArtLibrary.mcpActive` - MCP agent online
- `GhostArtLibrary.secretFound` - Easter egg discovered
- `GhostArtLibrary.glitch` - System glitch effect
- `GhostArtLibrary.dataStream` - Data streaming effect

### Ghost Manager

```typescript
import { ANSIGhostManager, ANSIGhostEffect } from "@iniquitybbs/core"

const manager = new ANSIGhostManager()

// Register a custom ghost
const ghost: ANSIGhostEffect = {
    artwork: `
    ░░░▒▒▒▓▓▓
     HELLO!
    ▓▓▓▒▒▒░░░
    `,
    trigger: "event",
    eventName: "user_login",
    position: { x: 10, y: 5 },
    fadeSpeed: 100,
    duration: 3000
}

manager.registerGhost("welcome", ghost)

// Trigger it
manager.triggerEvent("user_login")

// Or trigger directly
manager.triggerGhost("welcome")

// Mood-based ghost
manager.moodGhost(SysopMood.Elite)

// Random encounter (15% chance)
manager.randomEncounter()
```

### Ghost Effect Options

```typescript
interface ANSIGhostEffect {
    artwork: string              // ANSI art content
    trigger: "time" | "event" | "random" | "mood"
    position?: { x: number; y: number }
    fadeSpeed?: number           // ms per line for fade-in
    duration?: number            // ms to display (0 = manual)
    linkedMood?: SysopMood       // Link to AI sysop mood
    eventName?: string           // Event name to trigger on
}
```

## 🔧 MCP Agent Configuration

### Agent Types

```typescript
enum MCPAgentType {
    Claude = "claude",    // Anthropic Claude
    Codex = "codex",      // OpenAI Codex
    Gemini = "gemini",    // Google Gemini
    Local = "local"       // Self-hosted models
}
```

### Agent Config

```typescript
interface MCPAgentConfig {
    type: MCPAgentType
    model?: string                 // e.g., "claude-3-opus"
    systemPrompt?: string          // Agent personality
    temperature?: number           // 0-1, creativity
    maxTokens?: number             // Response length limit
    endpoint?: string              // Custom API endpoint
    apiKey?: string                // API key (use Docker secrets!)
}
```

### Example: Custom Agent

```typescript
const customAgent: MCPAgentConfig = {
    type: MCPAgentType.Claude,
    model: "claude-3-sonnet",
    systemPrompt: `You are the sysop of a legendary underground BBS.
You remember the warez scene, demo parties, and ANSI art contests.
Help users with coding, but keep that 90s hacker mystique.`,
    temperature: 0.7,
    maxTokens: 400
}
```

## 📚 Example Use Cases

### 1. AI Dungeon Master (Interactive Fiction)

```typescript
class AIDungeonMaster extends MCPDoorGame {
    constructor() {
        super({
            name: "AI DUNGEON",
            gameType: "rpg",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: "You are a creative dungeon master..."
            }
        })
    }
}
```

### 2. AI Trade Wars Opponent

```typescript
class AITradeWars extends MCPDoorGame {
    constructor() {
        super({
            name: "TRADE WARS AI",
            gameType: "strategy",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: "You are a cunning space trader..."
            }
        })
    }
}
```

### 3. AI Trivia Host

```typescript
class AITrivia extends MCPDoorGame {
    constructor() {
        super({
            name: "AI TRIVIA",
            gameType: "trivia",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: "You host a trivia game about BBS history..."
            }
        })
    }
}
```

### 4. AI File Librarian

```typescript
class AILibrarian extends MCPDoorGame {
    constructor() {
        super({
            name: "AI LIBRARIAN",
            gameType: "files",
            defaultAgent: {
                type: MCPAgentType.Claude,
                systemPrompt: "You help users find files in the archives..."
            }
        })
    }
}
```

## 🔐 Security Notes

### Current State (Mock Mode)

The current implementation uses **mock responses** for development and testing. No API keys required.

### Production Integration

When you're ready to integrate real MCP agents:

1. **Update `sendToAgent()` method** in your door game class
2. **Add API endpoint calls** to Claude, Codex, or your custom agents
3. **Use Docker secrets** for API keys (never hardcode!)
4. **Enable rate limiting** (interfaces already defined in `mcp.ts`)
5. **Add input sanitization** (ANSIValidator interface ready)

Example production implementation:

```typescript
protected async sendToAgent(message: string): Promise<string> {
    // In production: Call actual MCP API
    const response = await fetch(this.config.defaultAgent.endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.MCP_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: this.config.defaultAgent.model,
            messages: this.session?.history.map(m => ({
                role: m.role,
                content: m.content
            })),
            temperature: this.config.defaultAgent.temperature,
            max_tokens: this.config.defaultAgent.maxTokens
        })
    })

    const data = await response.json()
    return data.content
}
```

### Security Interfaces

Already defined in `mcp.ts`:

```typescript
interface SecureMCPConnection {
    tls?: {
        cert: string
        key: string
        ca?: string
        rejectUnauthorized: boolean
    }
    rateLimiting?: ConnectionThrottle
    inputSanitization?: ANSIValidator
}
```

Layer these on when you integrate your TLS/Docker Swarm work!

## 🎨 Integration with Your Existing Code

### Use in Main BBS Flow

```typescript
// In your main BBS entry point
import { IQCoreModules, randomSysopEncounter, randomGhost } from "@iniquitybbs/core"

// Random AI sysop encounter (15% chance)
randomSysopEncounter()

// Random ANSI ghost (15% chance)
randomGhost()

// Add to menu system
const menu = iq.menu({
    commands: {
        G: () => {
            IQCoreModules.aiInteractiveFiction()
        },
        C: () => {
            IQCoreModules.aiCodeAssistant()
        },
        S: () => {
            IQCoreModules.aiSysop(SysopMood.Elite)
        }
    }
})
```

### Mix with Classic Door Games

```typescript
// Classic door game menu
const doorMenu = {
    "1": "Trade Wars 2002",
    "2": "LORD",
    "3": "AI Interactive Fiction",  // New!
    "4": "AI Code Assistant",       // New!
    "5": "BBS Simulation"
}
```

## 📖 API Reference

### Core Exports

```typescript
// From @iniquitybbs/core
import {
    // Types
    SysopMood,
    MCPAgentType,
    MCPAgentConfig,
    AISysopConfig,
    MCPDoorSession,
    ANSIGhostEffect,

    // Classes
    AISysop,
    MCPDoorGame,
    ANSIGhostManager,
    AIInteractiveFiction,
    AICodeAssistant,
    ANSIGhosts,

    // Utilities
    randomSysopEncounter,
    spawnGhost,
    spawnMoodGhost,
    randomGhost,

    // Presets
    AISysopPresets,
    GhostArtLibrary,

    // Core modules
    IQCoreModules
} from "@iniquitybbs/core"
```

## 🎯 Next Steps

1. **Try the examples** - Run the included door games
2. **Create custom agents** - Build your own MCPDoorGame subclasses
3. **Customize personalities** - Modify AI sysop moods and prompts
4. **Add ANSI ghosts** - Create custom ghost effects for your BBS
5. **Integrate production APIs** - When ready, connect real MCP endpoints

## 🔗 Related Files

- Security types: `packages/core/src/modules/mcp.ts`
- AI Sysop: `packages/core/src/modules/ai-sysop.ts`
- Door games: `packages/core/src/modules/mcp-door.ts`
- ANSI effects: `packages/core/src/modules/ansi-ghosts.ts`
- Examples: `packages/core/src/modules/ai-code-assistant.ts`

## 💡 The Scene Energy

This isn't just about adding AI to a BBS. It's about capturing that moment when you first connected to a board at 2 AM, and the sysop popped into chat to welcome you. It's about finding ANSI art that someone spent hours on in TheDraw. It's about those "lost boys" who found community through 300 baud modems.

Now imagine that energy, but the sysop is an AI that shifts personalities, the ANSI art appears like digital ghosts, and the door games spawn containerized agents that can tell stories, write code, or just vibe with you about the old scene.

That's what this is. 🎨👻⚡

---

**Built with love for the scene by someone who definitely needs a hug** 🤗

*Now go make some sidewalk chalk art and then come back to spawn some AI agents!*
