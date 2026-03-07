/**
 * Telnet Server
 * @module lib/telnet
 * @summary Node.js based Telnet server for BBS connections
 */

import * as net from 'net'
import { Session } from './session'
import { Runtime, setGlobalRuntime } from '@iniquitybbs/core'
import { executeProgram } from './executor'
import * as path from 'path'

export interface TelnetServerOptions {
    port?: number
    host?: string
    programPath?: string
}

export class TelnetServer {
    private server: net.Server | null = null
    private options: Required<TelnetServerOptions>
    private activeSessions: Set<Session> = new Set()

    constructor(options: TelnetServerOptions = {}) {
        this.options = {
            port: options.port || 23,
            host: options.host || '0.0.0.0',
            programPath: options.programPath || path.join(process.cwd(), 'iniquity.ts')
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

            this.server.on('error', (err) => {
                console.error('Server error:', err)
                reject(err)
            })

            this.server.listen(this.options.port, this.options.host, () => {
                console.log(`Iniquity BBS listening on ${this.options.host}:${this.options.port}`)
                console.log(`Executing program: ${this.options.programPath}\n`)
                resolve()
            })
        })
    }

    /**
     * Stop the Telnet server
     */
    stop(): Promise<void> {
        return new Promise((resolve) => {
            this.activeSessions.forEach(session => {
                session.close()
            })
            this.activeSessions.clear()

            if (this.server) {
                this.server.close(() => {
                    console.log('Iniquity BBS server stopped')
                    resolve()
                })
            } else {
                resolve()
            }
        })
    }

    /**
     * Handle a new connection
     */
    private handleConnection(socket: net.Socket) {
        const address = `${socket.remoteAddress}:${socket.remotePort}`
        console.log(`New connection from ${address}`)

        const session = new Session(socket)
        this.activeSessions.add(session)

        const runtime = new Runtime(session)
        setGlobalRuntime(runtime)

        socket.on('close', () => {
            console.log(`Connection closed: ${address}`)
            this.activeSessions.delete(session)
        })

        socket.on('error', (err) => {
            console.error(`Socket error for ${address}:`, err.message)
            this.activeSessions.delete(session)
        })

        this.executeBBSProgram(runtime, session).catch(err => {
            console.error('Error executing BBS program:', err)
            session.write('\r\n\r\nAn error occurred. Disconnecting...\r\n')
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
            console.error('Error executing BBS program:', err)
            throw err
        }
    }
}
