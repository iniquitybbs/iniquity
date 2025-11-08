/**
 * Model Context Protocol (MCP) Integration for Iniquity
 * @module MCP
 * @summary AI agent orchestration for door games, sysop personalities, and interactive experiences
 *
 * The MCP integration brings multi-agent AI systems into the classic BBS experience,
 * allowing Claude, Codex, Gemini and other AI models to spawn as interactive agents
 * within door games, chat channels, and system operations.
 */

/**
 * AI Sysop Mood States
 * Each mood affects response style, appearance frequency, and personality
 */
export enum SysopMood {
    /** Helpful, playful, enthusiastic responses with ASCII art and encouragement */
    Goofy = "🤪",

    /** Sarcastic, minimal, old-school sysop energy - brief and to the point */
    Grumpy = "😤",

    /** Appears randomly with cryptic messages, easter eggs, hidden knowledge */
    Ghost = "👻",

    /** Technical deep dives, scene-style responses, hacker aesthetic */
    Elite = "⚡"
}

/**
 * MCP Agent Types
 * Different AI models/agents that can be spawned for various purposes
 */
export enum MCPAgentType {
    /** Claude (Anthropic) - Best for conversation, creative writing, code */
    Claude = "claude",

    /** GPT (OpenAI) - Codex-style coding assistance */
    Codex = "codex",

    /** Gemini (Google) - Multimodal capabilities */
    Gemini = "gemini",

    /** Custom local agent - For self-hosted models */
    Local = "local"
}

/**
 * MCP Agent Configuration
 */
export interface MCPAgentConfig {
    /** Type of AI agent to spawn */
    type: MCPAgentType

    /** Optional model override (e.g., "claude-3-opus", "gpt-4") */
    model?: string

    /** System prompt/personality for the agent */
    systemPrompt?: string

    /** Temperature for response generation (0-1) */
    temperature?: number

    /** Maximum tokens for responses */
    maxTokens?: number

    /** Optional API endpoint override */
    endpoint?: string

    /** Optional API key (use Docker secrets in production!) */
    apiKey?: string
}

/**
 * AI Sysop Personality Configuration
 */
export interface AISysopConfig {
    /** Current mood state */
    mood: SysopMood

    /** Sysop name/handle */
    name: string

    /** Appearance frequency (0-1, where 1 = always appears) */
    appearanceRate?: number

    /** Underlying MCP agent config */
    agent?: MCPAgentConfig

    /** Custom ANSI art for this sysop mood */
    ansiArt?: string

    /** Random messages pool for ghost mode */
    ghostMessages?: string[]
}

/**
 * MCP Door Game Session
 * Represents an active AI-powered door game session
 */
export interface MCPDoorSession {
    /** Unique session ID */
    sessionId: string

    /** User handle playing the game */
    userHandle: string

    /** Game type identifier */
    gameType: string

    /** Active MCP agent instance */
    agent: MCPAgentConfig

    /** Session start time */
    startTime: Date

    /** Conversation history */
    history: MCPMessage[]

    /** Session metadata */
    metadata?: Record<string, any>
}

/**
 * MCP Message
 * Represents a message in an MCP conversation
 */
export interface MCPMessage {
    /** Message role (user, assistant, system) */
    role: "user" | "assistant" | "system"

    /** Message content */
    content: string

    /** Optional ANSI formatting applied */
    ansiFormatted?: string

    /** Timestamp */
    timestamp: Date

    /** Optional metadata */
    metadata?: Record<string, any>
}

/**
 * ANSI Ghost Effect Configuration
 * For animated ANSI art that appears/disappears based on events
 */
export interface ANSIGhostEffect {
    /** ANSI art content */
    artwork: string

    /** Trigger condition (time-based, event-based, random) */
    trigger: "time" | "event" | "random" | "mood"

    /** Position on screen */
    position?: { x: number; y: number }

    /** Fade in/out animation speed (ms) */
    fadeSpeed?: number

    /** Duration before disappearing (ms, 0 = manual dismiss) */
    duration?: number

    /** Linked to AI sysop mood? */
    linkedMood?: SysopMood

    /** Event name to trigger on */
    eventName?: string
}

/**
 * MCP Runtime Options
 * Extended decorator options for MCP-enabled modules
 */
export interface MCPModuleRuntimeOptions {
    /** Enable MCP agent integration */
    mcp?: boolean

    /** AI Sysop personality to use */
    aiSysop?: SysopMood | AISysopConfig

    /** Enable ANSI ghost effects */
    ansiGhosts?: boolean

    /** Debug mode for MCP operations */
    debug?: boolean

    /** Rate limiting for agent calls */
    rateLimit?: {
        maxCallsPerMinute: number
        maxCallsPerSession: number
    }
}

/**
 * Connection throttle for security
 */
export interface ConnectionThrottle {
    /** Max connections per IP per minute */
    maxConnectionsPerMinute: number

    /** Max failed attempts before temporary ban */
    maxFailedAttempts: number

    /** Ban duration in seconds */
    banDuration: number
}

/**
 * ANSI input validator for security
 */
export interface ANSIValidator {
    /** Allow ANSI color codes */
    allowColors: boolean

    /** Allow cursor movement codes */
    allowCursorMovement: boolean

    /** Max input length */
    maxLength: number

    /** Sanitize dangerous sequences */
    sanitize: boolean

    /** Whitelist of allowed ANSI codes */
    allowedCodes?: string[]
}

/**
 * Secure MCP Connection Configuration
 * For future TLS/security integration (you're building this elsewhere!)
 */
export interface SecureMCPConnection {
    /** TLS configuration */
    tls?: {
        cert: string
        key: string
        ca?: string
        rejectUnauthorized: boolean
    }

    /** Rate limiting */
    rateLimiting?: ConnectionThrottle

    /** Input sanitization */
    inputSanitization?: ANSIValidator
}

/**
 * Export all MCP types
 */
export type {
    MCPAgentConfig,
    AISysopConfig,
    MCPDoorSession,
    MCPMessage,
    ANSIGhostEffect,
    MCPModuleRuntimeOptions,
    ConnectionThrottle,
    ANSIValidator,
    SecureMCPConnection
}

export {
    SysopMood,
    MCPAgentType
}
