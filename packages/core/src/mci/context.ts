/**
 * MCI Context System
 * @module runtime/mci/context
 * @summary Context interfaces and providers for MCI code processing
 *
 * Provides context data for @-code expansion including user, system, BBS,
 * terminal, message, and file contexts. Compatible with Synchronet,
 * original Iniquity, and ENiGMA BBS systems.
 */

/*
-$a. ------------------ .a$ ---------------------------- %$!, ----------------%
 `$¸   .%$$^¸$$aa.     .¸$`        .        .a$a$$.      `¸$%  $a$.        .
-.aaa$ $$$$'- $$$$$.- $aaa. -.a%$^"$$aa -- .$$$$$'- $$a. $aaa. `$,$ ----------%
;$$$$',a$a$  d$%$$$$$,'$$$$;$$$$$  $$$$$., $$%$$"  d$a$$ '$$$$; $$$   .a%$  $$a
:$$$$;$$$$%; Z$$$$$$$$;$$$$:$$$$$. $$$$^$,;$$&$$   Z$$$$,;$$$$.a$$$a..$$$   $$$
.$$$$ `$$$$.  $$$%$$$' $$$$.`$$$$  $$%$$$$ `$$$$.   $%$$$ $$$$""$$$" $$$$:  a$$
 `$$$a.$$%$   $$$$$$';a$$$`  `¸$$aa$$$$&$': `$$$$a. $$$$'a$$$`.$$'$  $$$$;  $$$
%-----.------ $$$$'--------------- $$%$$' -- `¸$$$$$%$¸' ---- $$¸$a. `"$&$$//$%$
dz      .   .:'¸'     .        .   $$$$'     .        .       `¸$$$$y.     `$$&
%--------- a`-----------.--------- $$¸' -----.------------.---------------- $$$
   .      !a    . .    .      .   .:'   .  .                  .        .:.a$$$¸
.      .  '$a,          .        a` .   'a          .   .             s` .  . .
      .    ¸$Aa         .       !a       a!      .    .         ..   %s      .s
   .         ¸¸'     . .        '$$Aa.aA$$'        . .               `!$%a.a%//$
==============================================================================
   t h e    i n i q u i t y    b u l l e t i n   b o a r d   s y s t e m
==============================================================================
*/

/**
 * User context for MCI code expansion
 * Contains all user-related data that can be referenced via @-codes
 */
export interface UserContext {
    id: number
    alias: string
    realName?: string
    firstName?: string
    lastName?: string
    handle?: string
    email?: string
    location?: string
    securityLevel: number
    age?: number
    birthDate?: Date
    gender?: string

    // Statistics
    totalCalls: number
    callsToday?: number
    firstOn?: Date
    lastOn?: Date
    timeOnToday?: number
    timeLeft?: number
    timeUsed?: number
    timeBanked?: number

    // File transfer stats
    uploadBytes?: number
    downloadBytes?: number
    uploadFiles?: number
    downloadFiles?: number
    uploadKB?: number
    downloadKB?: number

    // Message stats
    postsTotal?: number
    postsToday?: number
    emailsSent?: number
    feedbackSent?: number
    mailWaiting?: number
    mailUnread?: number

    // Connection info
    ipAddress?: string
    hostname?: string
    protocol?: string

    // Preferences
    terminalType?: string
    terminalWidth?: number
    terminalHeight?: number
    editor?: string
    fileProtocol?: string

    // Flags and settings
    expert?: boolean
    hotkeys?: boolean
    pause?: boolean
    color?: boolean
    ansi?: boolean
}

/**
 * System context for MCI code expansion
 * Contains system-level information
 */
export interface SystemContext {
    date: Date
    time: Date
    dateFormat?: string
    timeFormat?: string
    timezone?: string
    uptime?: number
    uptimeStart?: Date

    // Platform info
    platform?: string
    osVersion?: string
    architecture?: string
    nodeVersion?: string

    // Statistics
    totalCalls?: number
    callsToday?: number
    totalUsers?: number
    newUsersToday?: number
    totalPosts?: number
    postsToday?: number
    totalFiles?: number
    totalFileBytes?: number

    // Last caller info
    lastCaller?: string
    lastCallTime?: Date
    lastCallDate?: Date
}

/**
 * BBS context for MCI code expansion
 * Contains BBS configuration and identity
 */
export interface BBSContext {
    name: string
    sysopName?: string
    sysopAlias?: string
    sysopEmail?: string
    location?: string
    phone?: string
    website?: string

    // Network addresses
    telnetAddress?: string
    sshAddress?: string
    ftpAddress?: string
    webAddress?: string
    fidoAddress?: string
    qwkId?: string

    // Version info
    version?: string
    fullVersion?: string
    copyright?: string
}

/**
 * Terminal context for MCI code expansion
 * Contains terminal capabilities and settings
 */
export interface TerminalContext {
    type: string
    width: number
    height: number

    // Capabilities
    ansi: boolean
    color: boolean
    utf8: boolean
    cp437: boolean
    petscii: boolean
    rip: boolean
    avatar: boolean

    // Emulation settings
    bps?: number
    cps?: number
    iceColors?: boolean
    mouse?: boolean

    // Font info
    fontName?: string
    fontSize?: number
}

/**
 * Message context for MCI code expansion
 * Contains current message/area information
 */
export interface MessageContext {
    // Area info
    areaName?: string
    areaDescription?: string
    areaNumber?: number
    groupName?: string
    groupNumber?: number

    // Message info
    messageNumber?: number
    totalMessages?: number
    newMessages?: number

    // Current message details
    from?: string
    fromFirst?: string
    to?: string
    toFirst?: string
    subject?: string
    date?: Date
    replyId?: string
    threadId?: string

    // Message stats
    upvotes?: number
    downvotes?: number
    score?: number
}

/**
 * File context for MCI code expansion
 * Contains current file/area information
 */
export interface FileContext {
    // Area info
    areaName?: string
    areaDescription?: string
    areaNumber?: number
    libraryName?: string
    libraryNumber?: number

    // File info
    fileName?: string
    fileSize?: number
    fileSizeKB?: number
    fileSizeMB?: number
    fileDescription?: string
    fileDate?: Date
    fileUploader?: string
    fileDownloads?: number
    fileCost?: number

    // Area stats
    totalFiles?: number
    totalBytes?: number
    newFiles?: number
}

/**
 * Node context for multi-node BBS systems
 */
export interface NodeContext {
    number: number
    totalNodes: number
    activeNodes: number
    status?: string
    action?: string
    user?: string
}

/**
 * Complete MCI context combining all context types
 */
export interface MCIContext {
    user?: UserContext
    system?: SystemContext
    bbs?: BBSContext
    terminal?: TerminalContext
    message?: MessageContext
    file?: FileContext
    node?: NodeContext
    custom?: Record<string, any>
}

/**
 * Default user context with sensible defaults
 */
export function createDefaultUserContext(): UserContext {
    return {
        id: 0,
        alias: "Guest",
        securityLevel: 0,
        totalCalls: 0
    }
}

/**
 * Default system context with current date/time
 */
export function createDefaultSystemContext(): SystemContext {
    const now = new Date()
    return {
        date: now,
        time: now,
        platform: process.platform,
        nodeVersion: process.version
    }
}

/**
 * Default BBS context
 */
export function createDefaultBBSContext(): BBSContext {
    return {
        name: "Iniquity BBS",
        version: "3.0.0"
    }
}

/**
 * Default terminal context
 */
export function createDefaultTerminalContext(): TerminalContext {
    return {
        type: "ANSI",
        width: 80,
        height: 24,
        ansi: true,
        color: true,
        utf8: false,
        cp437: true,
        petscii: false,
        rip: false,
        avatar: false
    }
}

/**
 * Default node context
 */
export function createDefaultNodeContext(): NodeContext {
    return {
        number: 1,
        totalNodes: 1,
        activeNodes: 1
    }
}

/**
 * Create a complete default MCI context
 */
export function createDefaultMCIContext(): MCIContext {
    return {
        user: createDefaultUserContext(),
        system: createDefaultSystemContext(),
        bbs: createDefaultBBSContext(),
        terminal: createDefaultTerminalContext(),
        node: createDefaultNodeContext(),
        custom: {}
    }
}

/**
 * Merge partial context into existing context
 */
export function mergeMCIContext(base: MCIContext, partial: Partial<MCIContext>): MCIContext {
    return {
        user: partial.user ? { ...base.user, ...partial.user } : base.user,
        system: partial.system ? { ...base.system, ...partial.system } : base.system,
        bbs: partial.bbs ? { ...base.bbs, ...partial.bbs } : base.bbs,
        terminal: partial.terminal ? { ...base.terminal, ...partial.terminal } : base.terminal,
        message: partial.message ? { ...base.message, ...partial.message } : base.message,
        file: partial.file ? { ...base.file, ...partial.file } : base.file,
        node: partial.node ? { ...base.node, ...partial.node } : base.node,
        custom: { ...base.custom, ...partial.custom }
    }
}

/**
 * Context provider interface for dynamic context updates
 */
export interface MCIContextProvider {
    getContext(): MCIContext
    updateContext(partial: Partial<MCIContext>): void
    setUser(user: Partial<UserContext>): void
    setSystem(system: Partial<SystemContext>): void
    setBBS(bbs: Partial<BBSContext>): void
    setTerminal(terminal: Partial<TerminalContext>): void
    setMessage(message: Partial<MessageContext>): void
    setFile(file: Partial<FileContext>): void
    setNode(node: Partial<NodeContext>): void
    setCustom(key: string, value: any): void
    getCustom(key: string): any
}

/**
 * Default context provider implementation
 */
export class DefaultMCIContextProvider implements MCIContextProvider {
    private context: MCIContext

    constructor(initialContext?: Partial<MCIContext>) {
        this.context = createDefaultMCIContext()
        if (initialContext) {
            this.context = mergeMCIContext(this.context, initialContext)
        }
    }

    getContext(): MCIContext {
        return this.context
    }

    updateContext(partial: Partial<MCIContext>): void {
        this.context = mergeMCIContext(this.context, partial)
    }

    setUser(user: Partial<UserContext>): void {
        this.context.user = { ...this.context.user!, ...user }
    }

    setSystem(system: Partial<SystemContext>): void {
        this.context.system = { ...this.context.system!, ...system }
    }

    setBBS(bbs: Partial<BBSContext>): void {
        this.context.bbs = { ...this.context.bbs!, ...bbs }
    }

    setTerminal(terminal: Partial<TerminalContext>): void {
        this.context.terminal = { ...this.context.terminal!, ...terminal }
    }

    setMessage(message: Partial<MessageContext>): void {
        this.context.message = { ...this.context.message, ...message }
    }

    setFile(file: Partial<FileContext>): void {
        this.context.file = { ...this.context.file, ...file }
    }

    setNode(node: Partial<NodeContext>): void {
        this.context.node = { ...this.context.node!, ...node }
    }

    setCustom(key: string, value: any): void {
        if (!this.context.custom) {
            this.context.custom = {}
        }
        this.context.custom[key] = value
    }

    getCustom(key: string): any {
        return this.context.custom?.[key]
    }
}
