/**
 * MCI Processor
 * @module runtime/mci/processor
 * @summary Main processor that orchestrates all MCI code processing
 */

import {
    MCIContext,
    MCIContextProvider,
    DefaultMCIContextProvider,
    createDefaultMCIContext,
    UserContext,
    SystemContext,
    BBSContext,
    TerminalContext
} from "./context"
import { AtCodeProcessor } from "./codes/at-codes"
import { PipeCodeProcessor } from "./codes/pipe-codes"
import { ControlCodeProcessor, ControlCodeAction } from "./codes/ctrl-codes"
import { PositionMarkerProcessor, PositionMarker } from "./codes/position"
import { parseFormatModifier, applyFormat, FormatOptions } from "./formatters"
import { TextStyleProcessor, applyTextStyle } from "./text-styles"

export interface MCIProcessorOptions {
    context?: Partial<MCIContext>
    processPipeCodes?: boolean
    processAtCodes?: boolean
    processControlCodes?: boolean
    processPositionMarkers?: boolean
    terminalWidth?: number
    terminalHeight?: number
}

export interface MCIProcessResult {
    text: string
    actions: ControlCodeAction[]
    markersFound: number[]
    codesProcessed: number
}

export interface PendingAction {
    type: "pause" | "delay" | "abort"
    ms?: number
    message?: string
}

export class MCIProcessor {
    private contextProvider: MCIContextProvider
    private atCodeProcessor: AtCodeProcessor
    private pipeCodeProcessor: PipeCodeProcessor
    private controlCodeProcessor: ControlCodeProcessor
    private positionProcessor: PositionMarkerProcessor
    private textStyleProcessor: TextStyleProcessor

    private options: MCIProcessorOptions
    private pendingActions: PendingAction[] = []

    constructor(options: MCIProcessorOptions = {}) {
        this.options = {
            processPipeCodes: true,
            processAtCodes: true,
            processControlCodes: true,
            processPositionMarkers: true,
            terminalWidth: 80,
            terminalHeight: 24,
            ...options
        }

        this.contextProvider = new DefaultMCIContextProvider(options.context)
        this.atCodeProcessor = new AtCodeProcessor()
        this.pipeCodeProcessor = new PipeCodeProcessor()
        this.controlCodeProcessor = new ControlCodeProcessor()
        this.positionProcessor = new PositionMarkerProcessor()
        this.textStyleProcessor = new TextStyleProcessor()

        if (options.terminalWidth) {
            this.contextProvider.setTerminal({ width: options.terminalWidth })
        }
        if (options.terminalHeight) {
            this.contextProvider.setTerminal({ height: options.terminalHeight })
            this.controlCodeProcessor.setPageLength(options.terminalHeight - 1)
        }
    }

    process(text: string): string {
        const result = this.processWithDetails(text)
        return result.text
    }

    processWithDetails(text: string): MCIProcessResult {
        let result = text
        const actions: ControlCodeAction[] = []
        let markersFound: number[] = []
        let codesProcessed = 0

        if (this.options.processPositionMarkers) {
            const posResult = this.positionProcessor.processMarkerCode(result)
            result = posResult.result
            markersFound = posResult.markersFound
            codesProcessed += markersFound.length
        }

        if (this.options.processAtCodes) {
            const atResult = this.processAtCodes(result)
            result = atResult.text
            codesProcessed += atResult.count
            actions.push(...atResult.actions)
        }

        if (this.options.processControlCodes) {
            const ctrlResult = this.processControlCodes(result)
            result = ctrlResult.text
            codesProcessed += ctrlResult.count
            actions.push(...ctrlResult.actions)
        }

        if (this.options.processPipeCodes) {
            result = this.pipeCodeProcessor.process(result)
        }

        return { text: result, actions, markersFound, codesProcessed }
    }

    private processAtCodes(text: string): { text: string; count: number; actions: ControlCodeAction[] } {
        const context = this.contextProvider.getContext()
        const actions: ControlCodeAction[] = []
        let count = 0

        const atCodeRegex = /@([A-Z_][A-Z0-9_.:]*(?:[|\-][LRCZWTU>]?\d*)?)@/gi

        const result = text.replace(atCodeRegex, (match, codeWithModifier) => {
            count++

            const parsed = parseFormatModifier(codeWithModifier)
            const code = parsed.code

            if (code === "CLS") {
                actions.push({ type: "ansi", sequence: "\x1b[2J\x1b[H" })
                return ""
            }
            if (code === "PAUSE" || code === "MORE") {
                actions.push({ type: "pause" })
                return ""
            }
            if (code === "BEEP" || code === "BELL") {
                return "\x07"
            }
            if (code === "CRLF") {
                return "\r\n"
            }
            if (code === "HOME") {
                return "\x1b[H"
            }

            const gotoxyMatch = code.match(/^GOTOXY:(\d+),(\d+)$/i)
            if (gotoxyMatch) {
                const x = parseInt(gotoxyMatch[1], 10)
                const y = parseInt(gotoxyMatch[2], 10)
                return `\x1b[${y};${x}H`
            }

            const cursorMatch = code.match(/^(UP|DOWN|LEFT|RIGHT):(\d+)$/i)
            if (cursorMatch) {
                const dir = cursorMatch[1].toUpperCase()
                const n = parseInt(cursorMatch[2], 10)
                const dirMap: Record<string, string> = { UP: "A", DOWN: "B", RIGHT: "C", LEFT: "D" }
                return `\x1b[${n}${dirMap[dir]}`
            }

            const delayMatch = code.match(/^DELAY:(\d+)$/i)
            if (delayMatch) {
                const tenths = parseInt(delayMatch[1], 10)
                actions.push({ type: "delay", ms: tenths * 100 })
                return ""
            }

            let value = this.atCodeProcessor.getValue(code, context, parsed.param)

            if (value === undefined) {
                return match
            }

            if (parsed.modifier || parsed.width) {
                const formatOptions: FormatOptions = {
                    modifier: parsed.modifier,
                    width: parsed.width
                }
                value = applyFormat(value, formatOptions)
            }

            return value
        })

        return { text: result, count, actions }
    }

    private processControlCodes(text: string): { text: string; count: number; actions: ControlCodeAction[] } {
        const actions: ControlCodeAction[] = []
        let count = 0

        const ctrlCodeRegex = /\|([A-Z]{2})/gi

        const result = text.replace(ctrlCodeRegex, (match, code) => {
            const action = this.controlCodeProcessor.processCode(code)
            if (!action) return match

            count++

            switch (action.type) {
                case "ansi":
                    return action.sequence
                case "pause":
                case "pause_message":
                    actions.push(action)
                    return ""
                case "delay":
                    actions.push(action)
                    return ""
                case "abort":
                    actions.push(action)
                    return ""
                case "noop":
                    return ""
                default:
                    return match
            }
        })

        return { text: result, count, actions }
    }

    setContext(ctx: Partial<MCIContext>): void {
        this.contextProvider.updateContext(ctx)
    }

    getContext(): MCIContext {
        return this.contextProvider.getContext()
    }

    setUser(user: Partial<UserContext>): void {
        if (user) {
            this.contextProvider.setUser(user)
        }
    }

    setSystem(system: Partial<SystemContext>): void {
        if (system) {
            this.contextProvider.setSystem(system)
        }
    }

    setBBS(bbs: Partial<BBSContext>): void {
        if (bbs) {
            this.contextProvider.setBBS(bbs)
        }
    }

    setTerminal(terminal: Partial<TerminalContext>): void {
        if (terminal) {
            this.contextProvider.setTerminal(terminal)
            if (terminal.height) {
                this.controlCodeProcessor.setPageLength(terminal.height - 1)
            }
        }
    }

    setCustom(key: string, value: any): void {
        this.contextProvider.setCustom(key, value)
    }

    getCustom(key: string): any {
        return this.contextProvider.getCustom(key)
    }

    savePosition(id: number): void {
        this.positionProcessor.savePosition(id)
    }

    gotoPosition(id: number): string | null {
        return this.positionProcessor.gotoPosition(id)
    }

    updatePosition(id: number, text: string): string | null {
        return this.positionProcessor.updatePosition(id, text)
    }

    hasPosition(id: number): boolean {
        return this.positionProcessor.hasPosition(id)
    }

    clearPosition(id: number): boolean {
        return this.positionProcessor.clearPosition(id)
    }

    clearAllPositions(): void {
        this.positionProcessor.clearAllPositions()
    }

    listPositions(): number[] {
        return this.positionProcessor.listPositions()
    }

    setCurrentPosition(x: number, y: number): void {
        this.positionProcessor.setCurrentPosition(x, y)
    }

    applyTextStyle(text: string, styleName: string): string {
        return this.textStyleProcessor.apply(text, styleName)
    }

    registerTextStyle(name: string, fn: (text: string) => string): void {
        this.textStyleProcessor.registerStyle(name, fn)
    }

    registerAtCode(code: string, handler: (context: MCIContext, params?: string) => string | undefined): void {
        this.atCodeProcessor.registerCode(code, handler)
    }

    isPauseEnabled(): boolean {
        return this.controlCodeProcessor.isPauseEnabled()
    }

    setPauseEnabled(enabled: boolean): void {
        this.controlCodeProcessor.setPauseEnabled(enabled)
    }

    getLineCount(): number {
        return this.controlCodeProcessor.getLineCount()
    }

    incrementLineCount(lines: number = 1): void {
        this.controlCodeProcessor.incrementLineCount(lines)
    }

    resetLineCount(): void {
        this.controlCodeProcessor.resetLineCount()
    }

    shouldAutoPause(): boolean {
        return this.controlCodeProcessor.shouldAutoPause()
    }

    setPageLength(length: number): void {
        this.controlCodeProcessor.setPageLength(length)
    }

    reset(): void {
        this.pipeCodeProcessor.reset()
        this.controlCodeProcessor.resetLineCount()
        this.controlCodeProcessor.setPauseEnabled(true)
        this.positionProcessor.clearAllPositions()
    }

    getResetSequence(): string {
        return this.pipeCodeProcessor.getResetSequence()
    }
}

export function createMCIProcessor(options?: MCIProcessorOptions): MCIProcessor {
    return new MCIProcessor(options)
}
