/**
 * @-Codes Handler
 * @module runtime/mci/codes/at-codes
 * @summary Synchronet-compatible @-codes for dynamic content expansion
 */

import { MCIContext } from '../context'

export type AtCodeHandler = (context: MCIContext, params?: string) => string | undefined

export interface AtCodeDefinition {
    code: string
    aliases?: string[]
    description: string
    handler: AtCodeHandler
}

function formatDate(date: Date | undefined, format?: string): string {
    if (!date) return ''
    if (format === 'short') {
        return date.toLocaleDateString()
    }
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
}

function formatTime(date: Date | undefined): string {
    if (!date) return ''
    return date.toLocaleTimeString()
}

function formatBytes(bytes: number | undefined): string {
    if (bytes === undefined) return '0'
    if (bytes < 1024) return `${bytes}B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}K`
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)}M`
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)}G`
}

function formatDuration(minutes: number | undefined): string {
    if (minutes === undefined) return '0:00'
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}:${mins.toString().padStart(2, '0')}`
}

function boolToOnOff(value: boolean | undefined): string {
    return value ? 'On' : 'Off'
}

export const userCodes: AtCodeDefinition[] = [
    { code: 'UN', aliases: ['ALIAS', 'NAME', 'USER'], description: 'Username/alias',
      handler: (ctx) => ctx.user?.alias },
    { code: 'RN', aliases: ['REALNAME'], description: 'Real name',
      handler: (ctx) => ctx.user?.realName },
    { code: 'FIRST', description: 'First name',
      handler: (ctx) => ctx.user?.firstName || ctx.user?.alias?.split(' ')[0] },
    { code: 'LAST', description: 'Last name',
      handler: (ctx) => ctx.user?.lastName },
    { code: 'HANDLE', description: 'Chat handle',
      handler: (ctx) => ctx.user?.handle || ctx.user?.alias },
    { code: 'SEC', aliases: ['SECURITY'], description: 'Security level',
      handler: (ctx) => ctx.user?.securityLevel?.toString() },
    { code: 'AGE', description: 'User age',
      handler: (ctx) => ctx.user?.age?.toString() },
    { code: 'BDATE', aliases: ['BIRTH'], description: 'Birth date',
      handler: (ctx) => ctx.user?.birthDate?.toLocaleDateString() },
    { code: 'GENDER', aliases: ['SEX'], description: 'Gender',
      handler: (ctx) => ctx.user?.gender },
    { code: 'ADDR2', aliases: ['FROM', 'LOCATION'], description: 'User location',
      handler: (ctx) => ctx.user?.location },
    { code: 'EMAILADDR', description: 'Email address',
      handler: (ctx) => ctx.user?.email },
    { code: 'CALLS', aliases: ['NUMTIMESON'], description: 'Total calls',
      handler: (ctx) => ctx.user?.totalCalls?.toString() },
    { code: 'LTODAY', description: 'Logins today',
      handler: (ctx) => ctx.user?.callsToday?.toString() },
    { code: 'FIRSTON', aliases: ['SINCE'], description: 'First login date',
      handler: (ctx) => formatDate(ctx.user?.firstOn, 'short') },
    { code: 'LASTON', description: 'Last login date/time',
      handler: (ctx) => formatDate(ctx.user?.lastOn) },
    { code: 'TIMELEFT', aliases: ['MINLEFT', 'TL'], description: 'Time left (minutes)',
      handler: (ctx) => ctx.user?.timeLeft?.toString() },
    { code: 'TLEFT', description: 'Time left (H:MM:SS)',
      handler: (ctx) => formatDuration(ctx.user?.timeLeft) },
    { code: 'TIMEON', description: 'Time online this session',
      handler: (ctx) => formatDuration(ctx.user?.timeUsed) },
    { code: 'TIMEUSED', aliases: ['TUSED'], description: 'Time used this call',
      handler: (ctx) => formatDuration(ctx.user?.timeUsed) },
    { code: 'MBANKED', aliases: ['TBANKED'], description: 'Minutes banked',
      handler: (ctx) => ctx.user?.timeBanked?.toString() },
    { code: 'UPB', aliases: ['UPBYTES'], description: 'Upload bytes',
      handler: (ctx) => formatBytes(ctx.user?.uploadBytes) },
    { code: 'DLB', aliases: ['DLBYTES', 'DOWNBYTES'], description: 'Download bytes',
      handler: (ctx) => formatBytes(ctx.user?.downloadBytes) },
    { code: 'UPFILES', aliases: ['UPS'], description: 'Files uploaded',
      handler: (ctx) => ctx.user?.uploadFiles?.toString() },
    { code: 'DLFILES', aliases: ['DOWNS'], description: 'Files downloaded',
      handler: (ctx) => ctx.user?.downloadFiles?.toString() },
    { code: 'UPK', description: 'Upload KB',
      handler: (ctx) => ctx.user?.uploadKB?.toString() },
    { code: 'DOWNK', aliases: ['DLK'], description: 'Download KB',
      handler: (ctx) => ctx.user?.downloadKB?.toString() },
    { code: 'MSGLEFT', aliases: ['MSGSLEFT', 'POSTS'], description: 'Total posts',
      handler: (ctx) => ctx.user?.postsTotal?.toString() },
    { code: 'PTODAY', description: 'Posts today',
      handler: (ctx) => ctx.user?.postsToday?.toString() },
    { code: 'EMAILS', description: 'Emails sent',
      handler: (ctx) => ctx.user?.emailsSent?.toString() },
    { code: 'FBACKS', description: 'Feedback sent',
      handler: (ctx) => ctx.user?.feedbackSent?.toString() },
    { code: 'MAILW', description: 'Mail waiting',
      handler: (ctx) => ctx.user?.mailWaiting?.toString() },
    { code: 'MAILU', description: 'Unread mail',
      handler: (ctx) => ctx.user?.mailUnread?.toString() },
    { code: 'IP', aliases: ['CID'], description: 'IP address',
      handler: (ctx) => ctx.user?.ipAddress },
    { code: 'HOST', aliases: ['CPU'], description: 'Hostname',
      handler: (ctx) => ctx.user?.hostname },
    { code: 'USERNUM', description: 'User number',
      handler: (ctx) => ctx.user?.id?.toString() },
    { code: 'EXPERT', description: 'Expert mode',
      handler: (ctx) => boolToOnOff(ctx.user?.expert) },
    { code: 'HOTKEYS', description: 'Hotkeys enabled',
      handler: (ctx) => boolToOnOff(ctx.user?.hotkeys) },
    { code: 'UPAUSE', description: 'Auto-pause enabled',
      handler: (ctx) => boolToOnOff(ctx.user?.pause) },
    { code: 'COLOR', description: 'Color enabled',
      handler: (ctx) => boolToOnOff(ctx.user?.color) },
    { code: 'EDITOR', description: 'External editor',
      handler: (ctx) => ctx.user?.editor || 'None' },
    { code: 'PROT', aliases: ['PROTNAME', 'PROTOCOL'], description: 'File protocol',
      handler: (ctx) => ctx.user?.fileProtocol || 'None' }
]

export const systemCodes: AtCodeDefinition[] = [
    { code: 'DATE', aliases: ['SYSDATE'], description: 'Current date',
      handler: (ctx) => ctx.system?.date?.toLocaleDateString() },
    { code: 'TIME', aliases: ['SYSTIME'], description: 'Current time',
      handler: (ctx) => formatTime(ctx.system?.time) },
    { code: 'DATETIME', description: 'Date and time',
      handler: (ctx) => formatDate(ctx.system?.date) },
    { code: 'DATETIME_UTC', description: 'UTC date and time',
      handler: (ctx) => ctx.system?.date?.toISOString() },
    { code: 'TIMEZONE', description: 'Timezone',
      handler: (ctx) => ctx.system?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone },
    { code: 'UPTIME', description: 'System uptime',
      handler: (ctx) => formatDuration(ctx.system?.uptime) },
    { code: 'PLATFORM', description: 'Platform',
      handler: (ctx) => ctx.system?.platform },
    { code: 'OS_VER', description: 'OS version',
      handler: (ctx) => ctx.system?.osVersion },
    { code: 'OS_CPU', description: 'CPU architecture',
      handler: (ctx) => ctx.system?.architecture },
    { code: 'STATS.LOGONS', aliases: ['NUMCALLS', 'TCALLS'], description: 'Total logons',
      handler: (ctx) => ctx.system?.totalCalls?.toString() },
    { code: 'STATS.LTODAY', description: 'Logons today',
      handler: (ctx) => ctx.system?.callsToday?.toString() },
    { code: 'TUSER', description: 'Total users',
      handler: (ctx) => ctx.system?.totalUsers?.toString() },
    { code: 'STATS.NUSERS', aliases: ['NT'], description: 'New users today',
      handler: (ctx) => ctx.system?.newUsersToday?.toString() },
    { code: 'STATS.PTODAY', aliases: ['PT'], description: 'Posts today',
      handler: (ctx) => ctx.system?.postsToday?.toString() },
    { code: 'TFILE', aliases: ['TF'], description: 'Total files',
      handler: (ctx) => ctx.system?.totalFiles?.toString() },
    { code: 'LASTCALLERNODE', aliases: ['PREVON', 'LC'], description: 'Last caller',
      handler: (ctx) => ctx.system?.lastCaller },
    { code: 'LASTCALL', aliases: ['LT'], description: 'Last call time',
      handler: (ctx) => formatDate(ctx.system?.lastCallTime) }
]

export const bbsCodes: AtCodeDefinition[] = [
    { code: 'BBS', aliases: ['BOARDNAME', 'BN'], description: 'BBS name',
      handler: (ctx) => ctx.bbs?.name },
    { code: 'SYSOP', aliases: ['SN'], description: 'Sysop name',
      handler: (ctx) => ctx.bbs?.sysopName },
    { code: 'LOCATION', aliases: ['BL'], description: 'BBS location',
      handler: (ctx) => ctx.bbs?.location },
    { code: 'INETADDR', description: 'Internet address',
      handler: (ctx) => ctx.bbs?.telnetAddress },
    { code: 'FIDOADDR', description: 'FidoNet address',
      handler: (ctx) => ctx.bbs?.fidoAddress },
    { code: 'QWKID', description: 'QWK ID',
      handler: (ctx) => ctx.bbs?.qwkId },
    { code: 'VER', description: 'Version',
      handler: (ctx) => ctx.bbs?.version },
    { code: 'FULL_VER', aliases: ['VER_NOTICE'], description: 'Full version',
      handler: (ctx) => ctx.bbs?.fullVersion || `Iniquity BBS v${ctx.bbs?.version}` },
    { code: 'COPYRIGHT', description: 'Copyright',
      handler: (ctx) => ctx.bbs?.copyright || 'Copyright (c) Iniquity BBS' }
]

export const terminalCodes: AtCodeDefinition[] = [
    { code: 'TERM', description: 'Terminal type',
      handler: (ctx) => ctx.terminal?.type },
    { code: 'COLS', description: 'Terminal columns',
      handler: (ctx) => ctx.terminal?.width?.toString() },
    { code: 'ROWS', description: 'Terminal rows',
      handler: (ctx) => ctx.terminal?.height?.toString() },
    { code: 'BPS', aliases: ['BAUD'], description: 'Baud rate',
      handler: (ctx) => ctx.terminal?.bps?.toString() || '115200' },
    { code: 'CPS', description: 'Characters per second',
      handler: (ctx) => ctx.terminal?.cps?.toString() },
    { code: 'ANSI', description: 'ANSI support',
      handler: (ctx) => boolToOnOff(ctx.terminal?.ansi) },
    { code: 'UTF8', description: 'UTF-8 support',
      handler: (ctx) => boolToOnOff(ctx.terminal?.utf8) },
    { code: 'COLOR', description: 'Color support',
      handler: (ctx) => boolToOnOff(ctx.terminal?.color) },
    { code: 'ICE', description: 'ICE colors',
      handler: (ctx) => boolToOnOff(ctx.terminal?.iceColors) },
    { code: 'MOUSE', description: 'Mouse support',
      handler: (ctx) => boolToOnOff(ctx.terminal?.mouse) },
    { code: 'CHARSET', description: 'Character set',
      handler: (ctx) => ctx.terminal?.utf8 ? 'UTF-8' : ctx.terminal?.cp437 ? 'CP437' : 'US-ASCII' }
]

export const nodeCodes: AtCodeDefinition[] = [
    { code: 'NODE', aliases: ['NN'], description: 'Node number',
      handler: (ctx) => ctx.node?.number?.toString() },
    { code: 'TNODES', aliases: ['TNODE', 'TN'], description: 'Total nodes',
      handler: (ctx) => ctx.node?.totalNodes?.toString() },
    { code: 'ANODES', aliases: ['ANODE', 'AN'], description: 'Active nodes',
      handler: (ctx) => ctx.node?.activeNodes?.toString() },
    { code: 'ONODES', aliases: ['ONODE', 'ON'], description: 'Other active nodes',
      handler: (ctx) => ((ctx.node?.activeNodes || 1) - 1).toString() }
]

export const messageCodes: AtCodeDefinition[] = [
    { code: 'GRP', aliases: ['SMB_GROUP'], description: 'Message group',
      handler: (ctx) => ctx.message?.groupName },
    { code: 'SUB', aliases: ['SMB_SUB', 'MA'], description: 'Message area',
      handler: (ctx) => ctx.message?.areaName },
    { code: 'SUBL', aliases: ['SMB_SUB_DESC', 'ML'], description: 'Area description',
      handler: (ctx) => ctx.message?.areaDescription },
    { code: 'SMB_MSGS', aliases: ['MSGS', 'MT'], description: 'Total messages',
      handler: (ctx) => ctx.message?.totalMessages?.toString() },
    { code: 'SMB_CURMSG', aliases: ['MN'], description: 'Current message',
      handler: (ctx) => ctx.message?.messageNumber?.toString() },
    { code: 'NEWMSGS', description: 'New messages',
      handler: (ctx) => ctx.message?.newMessages?.toString() },
    { code: 'MSG_FROM', aliases: ['MF'], description: 'Message from',
      handler: (ctx) => ctx.message?.from },
    { code: 'MSG_FROM_FIRST', description: 'From first name',
      handler: (ctx) => ctx.message?.fromFirst },
    { code: 'MSG_TO', aliases: ['MTo'], description: 'Message to',
      handler: (ctx) => ctx.message?.to },
    { code: 'MSG_TO_FIRST', description: 'To first name',
      handler: (ctx) => ctx.message?.toFirst },
    { code: 'MSG_SUBJECT', aliases: ['MS'], description: 'Subject',
      handler: (ctx) => ctx.message?.subject },
    { code: 'MSG_DATE', aliases: ['MD'], description: 'Message date',
      handler: (ctx) => formatDate(ctx.message?.date) }
]

export const fileCodes: AtCodeDefinition[] = [
    { code: 'LIB', aliases: ['FILE_LIB'], description: 'File library',
      handler: (ctx) => ctx.file?.libraryName },
    { code: 'DIR', aliases: ['FILE_DIR', 'FA'], description: 'File directory',
      handler: (ctx) => ctx.file?.areaName },
    { code: 'DIRL', aliases: ['FILE_DIR_DESC'], description: 'Directory description',
      handler: (ctx) => ctx.file?.areaDescription },
    { code: 'FILES', description: 'Files in directory',
      handler: (ctx) => ctx.file?.totalFiles?.toString() },
    { code: 'NEWFILES', description: 'New files',
      handler: (ctx) => ctx.file?.newFiles?.toString() },
    { code: 'FILE_NAME', aliases: ['FN'], description: 'File name',
      handler: (ctx) => ctx.file?.fileName },
    { code: 'FILE_SIZE', aliases: ['FS'], description: 'File size',
      handler: (ctx) => formatBytes(ctx.file?.fileSize) },
    { code: 'FILE_DESC', aliases: ['FD'], description: 'File description',
      handler: (ctx) => ctx.file?.fileDescription },
    { code: 'FILE_DATE', description: 'File date',
      handler: (ctx) => ctx.file?.fileDate?.toLocaleDateString() },
    { code: 'FILE_UPLOADER', aliases: ['FU'], description: 'Uploader',
      handler: (ctx) => ctx.file?.fileUploader },
    { code: 'FILE_TIMES_DLED', description: 'Download count',
      handler: (ctx) => ctx.file?.fileDownloads?.toString() }
]

export const allAtCodes: AtCodeDefinition[] = [
    ...userCodes,
    ...systemCodes,
    ...bbsCodes,
    ...terminalCodes,
    ...nodeCodes,
    ...messageCodes,
    ...fileCodes
]

export class AtCodeProcessor {
    private codeMap: Map<string, AtCodeHandler> = new Map()

    constructor() {
        this.buildCodeMap()
    }

    private buildCodeMap(): void {
        for (const def of allAtCodes) {
            this.codeMap.set(def.code.toUpperCase(), def.handler)
            if (def.aliases) {
                for (const alias of def.aliases) {
                    this.codeMap.set(alias.toUpperCase(), def.handler)
                }
            }
        }
    }

    getHandler(code: string): AtCodeHandler | undefined {
        return this.codeMap.get(code.toUpperCase())
    }

    getValue(code: string, context: MCIContext, params?: string): string | undefined {
        const handler = this.getHandler(code)
        if (handler) {
            const result = handler(context, params)
            // If handler returns a value, use it
            if (result !== undefined && result !== null && result !== '') {
                return result
            }
            // Otherwise fall through to check custom codes
        }
        // Check custom codes (case-insensitive lookup)
        if (context.custom) {
            const upperCode = code.toUpperCase()
            if (upperCode in context.custom) {
                return String(context.custom[upperCode])
            }
            // Also check original case for backwards compatibility
            if (code in context.custom) {
                return String(context.custom[code])
            }
        }
        return undefined
    }

    registerCode(code: string, handler: AtCodeHandler): void {
        this.codeMap.set(code.toUpperCase(), handler)
    }

    listCodes(): string[] {
        return Array.from(this.codeMap.keys())
    }
}
