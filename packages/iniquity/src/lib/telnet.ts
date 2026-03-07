/**
 * Telnet Server
 * @module lib/telnet
 * @summary Node.js based Telnet server for BBS connections
 */

import * as net from "net"
import { Session } from "./session"
import { Runtime, setGlobalRuntime, events, bbs, SessionInfo as BBSSessionInfo } from "@iniquitybbs/core"
import { executeProgram } from "./executor"
import * as path from "path"

export interface TelnetServerOptions {
    port?: number
    host?: string
    programPath?: string
}

// Global reference to the active server instance
let activeServer: TelnetServer | null = null

/**
 * Get the currently active TelnetServer instance
 */
export function getActiveServer(): TelnetServer | null {
    return activeServer
}

export class TelnetServer {
    private server: net.Server | null = null
    private options: Required<TelnetServerOptions>
    private activeSessions: Set<Session> = new Set()
    private nodeCounter: number = 0

    constructor(options: TelnetServerOptions = {}) {
        this.options = {
            port: options.port || 23,
            host: options.host || "0.0.0.0",
            programPath: options.programPath || path.join(process.cwd(), "iniquity.ts")
        }
    }

    /**
     * Get the number of active connections
     */
    getConnectionCount(): number {
        return this.activeSessions.size
    }

    /**
     * Get all active sessions
     */
    getActiveSessions(): Session[] {
        return Array.from(this.activeSessions)
    }

    /**
     * Get server info
     */
    getServerInfo(): { port: number; host: string; connections: number; uptime: number } {
        return {
            port: this.options.port,
            host: this.options.host,
            connections: this.activeSessions.size,
            uptime: process.uptime()
        }
    }

    /**
     * Get server info in BBS API format
     */
    getBBSServerInfo(): { port: number; host: string; uptime: number; sessions: BBSSessionInfo[] } {
        const sessions: BBSSessionInfo[] = Array.from(this.activeSessions).map((session) => {
            const now = Date.now()
            const connectedMs = now - session.connectedAt.getTime()
            const idleSeconds = Math.floor(connectedMs / 1000) // TODO: track actual idle time

            return {
                node: session.nodeNumber,
                connectedAt: session.connectedAt,
                idleSeconds: idleSeconds,
                terminalType: session.info.terminalType,
                location: undefined, // Could be set from IP geolocation
                username: undefined // Set when user logs in
            }
        })

        return {
            port: this.options.port,
            host: this.options.host,
            uptime: process.uptime(),
            sessions
        }
    }

    /**
     * Start the Telnet server
     */
    start(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.server = net.createServer((socket) => {
                this.handleConnection(socket)
            })

            this.server.on("error", (err) => {
                console.error("Server error:", err)
                reject(err)
            })

            this.server.listen(this.options.port, this.options.host, () => {
                console.log(`Iniquity BBS listening on ${this.options.host}:${this.options.port}`)
                console.log(`Executing program: ${this.options.programPath}\n`)
                activeServer = this

                // Register server info provider with the BBS API
                bbs.setServerInfoProvider(() => this.getBBSServerInfo())

                resolve()
            })
        })
    }

    /**
     * Stop the Telnet server
     */
    stop(): Promise<void> {
        return new Promise((resolve) => {
            this.activeSessions.forEach((session) => {
                session.close()
            })
            this.activeSessions.clear()

            if (this.server) {
                this.server.close(() => {
                    console.log("Iniquity BBS server stopped")
                    activeServer = null
                    resolve()
                })
            } else {
                activeServer = null
                resolve()
            }
        })
    }

    /**
     * Handle a new connection
     */
    private handleConnection(socket: net.Socket) {
        const address = `${socket.remoteAddress}:${socket.remotePort}`
        const nodeNumber = ++this.nodeCounter
        console.log(`[Node ${nodeNumber}] New connection from ${address}`)

        const session = new Session(socket)
        session.nodeNumber = nodeNumber
        this.activeSessions.add(session)

        // Emit connection event
        events.emit(
            "server:connect",
            {
                node: nodeNumber,
                address: socket.remoteAddress,
                totalConnections: this.activeSessions.size
            },
            "server"
        )

        const runtime = new Runtime(session)
        setGlobalRuntime(runtime)

        socket.on("close", () => {
            console.log(`[Node ${nodeNumber}] Connection closed: ${address}`)
            this.activeSessions.delete(session)

            // Emit disconnect event
            events.emit(
                "server:disconnect",
                {
                    node: nodeNumber,
                    address: socket.remoteAddress,
                    totalConnections: this.activeSessions.size
                },
                "server"
            )
        })

        socket.on("error", (err) => {
            console.error(`[Node ${nodeNumber}] Socket error for ${address}:`, err.message)
            this.activeSessions.delete(session)
        })

        this.executeBBSProgram(runtime, session).catch((err) => {
            console.error("Error executing BBS program:", err)
            session.write("\r\n\r\nAn error occurred. Disconnecting...\r\n")
            setTimeout(() => session.close(), 1000)
        })
    }

    /**
     * Execute the BBS program for this session
     */
    private async executeBBSProgram(runtime: Runtime, session: Session) {
        try {
            await executeProgram(this.options.programPath, runtime, session)
        } catch (err) {
            console.error("Error executing BBS program:", err)
            throw err
        }
    }
}
