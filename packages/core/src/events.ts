/**
 * IQEventBus - Global Event System
 * @module core/events
 * @summary Publish/subscribe event bus for BBS-wide event handling
 *
 * This module provides a global event bus that allows events to be published
 * and processed regardless of which menu a user is currently viewing.
 */

import { Synchronized, Measure } from "./decorators-runtime"

/**
 * Event interface for the event bus
 */
export interface IQEvent {
    /** Event type/name */
    type: string
    /** Optional event data payload */
    data?: any
    /** Timestamp when event was created */
    timestamp: number
    /** Optional source identifier */
    source?: string
}

/**
 * Event handler function type
 */
export type IQEventHandler = (event: IQEvent) => void | Promise<void>

/**
 * Options for event subscription
 */
export interface IQEventOptions {
    /** Only trigger once then auto-unsubscribe */
    once?: boolean
    /** Priority (higher = called first) */
    priority?: number
}

/**
 * Internal handler wrapper with metadata
 */
interface HandlerEntry {
    handler: IQEventHandler
    once: boolean
    priority: number
}

/**
 * IQEventBus - Global event bus for BBS applications
 *
 * Provides a publish/subscribe pattern for decoupled event handling.
 * Events can be emitted from anywhere and handlers will be called
 * regardless of the current menu or screen state.
 */
export class IQEventBus {
    private handlers: Map<string, HandlerEntry[]> = new Map()
    private queue: IQEvent[] = []
    private wildcardHandlers: HandlerEntry[] = []

    /**
     * Subscribe to an event
     * @param event - Event type to listen for (use '*' for all events)
     * @param handler - Function to call when event is emitted
     * @param options - Subscription options
     * @returns Unsubscribe function
     */
    on(event: string, handler: IQEventHandler, options?: IQEventOptions): () => void {
        const entry: HandlerEntry = {
            handler,
            once: options?.once ?? false,
            priority: options?.priority ?? 0
        }

        if (event === "*") {
            this.wildcardHandlers.push(entry)
            this.wildcardHandlers.sort((a, b) => b.priority - a.priority)
            return () => this.off("*", handler)
        }

        if (!this.handlers.has(event)) {
            this.handlers.set(event, [])
        }

        const handlers = this.handlers.get(event)!
        handlers.push(entry)
        handlers.sort((a, b) => b.priority - a.priority)

        return () => this.off(event, handler)
    }

    /**
     * Subscribe to an event (fires only once)
     * @param event - Event type to listen for
     * @param handler - Function to call when event is emitted
     * @returns Unsubscribe function
     */
    once(event: string, handler: IQEventHandler): () => void {
        return this.on(event, handler, { once: true })
    }

    /**
     * Unsubscribe from an event
     * @param event - Event type to unsubscribe from
     * @param handler - Specific handler to remove (if omitted, removes all handlers for event)
     */
    off(event: string, handler?: IQEventHandler): void {
        if (event === "*") {
            if (handler) {
                this.wildcardHandlers = this.wildcardHandlers.filter((e) => e.handler !== handler)
            } else {
                this.wildcardHandlers = []
            }
            return
        }

        if (!this.handlers.has(event)) return

        if (handler) {
            const handlers = this.handlers.get(event)!
            const filtered = handlers.filter((e) => e.handler !== handler)
            if (filtered.length === 0) {
                this.handlers.delete(event)
            } else {
                this.handlers.set(event, filtered)
            }
        } else {
            this.handlers.delete(event)
        }
    }

    /**
     * Emit an event (queues for processing)
     * @param event - Event type to emit
     * @param data - Optional data payload
     * @param source - Optional source identifier
     */
    @Measure()
    emit(event: string, data?: any, source?: string): void {
        const iqEvent: IQEvent = {
            type: event,
            data,
            timestamp: Date.now(),
            source
        }

        this.queue.push(iqEvent)
    }

    /**
     * Emit an event and process immediately (synchronous dispatch)
     * @param event - Event type to emit
     * @param data - Optional data payload
     * @param source - Optional source identifier
     */
    async emitSync(event: string, data?: any, source?: string): Promise<void> {
        const iqEvent: IQEvent = {
            type: event,
            data,
            timestamp: Date.now(),
            source
        }

        await this.dispatchEvent(iqEvent)
    }

    /**
     * Process all queued events
     * Called from the menu event loop to process pending events
     */
    @Synchronized()
    @Measure()
    async processQueue(): Promise<void> {
        if (this.queue.length === 0) return

        while (this.queue.length > 0) {
            const event = this.queue.shift()!
            await this.dispatchEvent(event)
        }
    }

    /**
     * Check if there are pending events in the queue
     */
    hasPendingEvents(): boolean {
        return this.queue.length > 0
    }

    /**
     * Get the number of pending events
     */
    getPendingCount(): number {
        return this.queue.length
    }

    /**
     * Clear all pending events from the queue
     */
    clearQueue(): void {
        this.queue = []
    }

    /**
     * Remove all handlers for all events
     */
    removeAllHandlers(): void {
        this.handlers.clear()
        this.wildcardHandlers = []
    }

    /**
     * Get list of registered event types
     */
    getRegisteredEvents(): string[] {
        return Array.from(this.handlers.keys())
    }

    /**
     * Check if an event has any handlers
     */
    hasHandlers(event: string): boolean {
        if (this.wildcardHandlers.length > 0) return true
        return this.handlers.has(event) && this.handlers.get(event)!.length > 0
    }

    /**
     * Dispatch a single event to all handlers
     */
    private async dispatchEvent(event: IQEvent): Promise<void> {
        const handlersToRemove: { event: string; handler: IQEventHandler }[] = []

        // Call wildcard handlers first
        for (const entry of this.wildcardHandlers) {
            try {
                await entry.handler(event)
                if (entry.once) {
                    handlersToRemove.push({ event: "*", handler: entry.handler })
                }
            } catch (err) {
                console.error(`Error in wildcard event handler:`, err)
            }
        }

        // Call specific handlers
        const handlers = this.handlers.get(event.type)
        if (handlers) {
            for (const entry of handlers) {
                try {
                    await entry.handler(event)
                    if (entry.once) {
                        handlersToRemove.push({ event: event.type, handler: entry.handler })
                    }
                } catch (err) {
                    console.error(`Error in event handler for "${event.type}":`, err)
                }
            }
        }

        // Remove once handlers
        for (const { event: eventType, handler } of handlersToRemove) {
            this.off(eventType, handler)
        }
    }
}

/**
 * Global event bus singleton
 * Use this for application-wide event handling
 */
export const events = new IQEventBus()
