/**
 * IQ Network System
 * @module network
 * @summary Network connectivity, FidoNet, and inter-BBS communication
 */

import * as net from "net"
import * as http from "http"
import * as https from "https"

/**
 * Network node information
 */
export interface INetworkNode {
    id: string
    name: string
    address: string
    port: number
    protocol: "telnet" | "ssh" | "http" | "https" | "fido"
    zone?: number
    net?: number
    node?: number
    point?: number
    lastSeen?: string
    status: "online" | "offline" | "unknown"
}

/**
 * FidoNet address
 */
export interface IFidoAddress {
    zone: number
    net: number
    node: number
    point?: number
}

/**
 * Network message for inter-BBS communication
 */
export interface INetworkMessage {
    id: string
    from: string
    to: string
    subject: string
    body: string
    timestamp: string
    area?: string
    origin?: string
    msgid?: string
    reply?: string
}

/**
 * Network connection options
 */
export interface INetworkConnectionOptions {
    host: string
    port: number
    timeout?: number
    secure?: boolean
}

/**
 * IQNetwork class for inter-BBS and external connectivity
 */
export class IQNetwork {
    private nodes: Map<string, INetworkNode> = new Map()
    private localAddress: IFidoAddress | null = null

    constructor() {}

    /**
     * Set local FidoNet address
     */
    setLocalAddress(address: IFidoAddress): void {
        this.localAddress = address
    }

    /**
     * Get local FidoNet address
     */
    getLocalAddress(): IFidoAddress | null {
        return this.localAddress
    }

    /**
     * Parse FidoNet address string (zone:net/node.point)
     */
    static parseFidoAddress(address: string): IFidoAddress | null {
        const match = address.match(/^(\d+):(\d+)\/(\d+)(?:\.(\d+))?$/)
        if (!match) return null

        return {
            zone: parseInt(match[1], 10),
            net: parseInt(match[2], 10),
            node: parseInt(match[3], 10),
            point: match[4] ? parseInt(match[4], 10) : undefined
        }
    }

    /**
     * Format FidoNet address to string
     */
    static formatFidoAddress(address: IFidoAddress): string {
        let result = `${address.zone}:${address.net}/${address.node}`
        if (address.point) {
            result += `.${address.point}`
        }
        return result
    }

    /**
     * Register a network node
     */
    registerNode(node: INetworkNode): void {
        this.nodes.set(node.id, node)
    }

    /**
     * Get a network node
     */
    getNode(id: string): INetworkNode | undefined {
        return this.nodes.get(id)
    }

    /**
     * List all nodes
     */
    listNodes(): INetworkNode[] {
        return Array.from(this.nodes.values())
    }

    /**
     * Check if a host is reachable
     */
    async ping(host: string, port: number, timeout: number = 5000): Promise<boolean> {
        return new Promise((resolve) => {
            const socket = new net.Socket()

            socket.setTimeout(timeout)

            socket.on("connect", () => {
                socket.destroy()
                resolve(true)
            })

            socket.on("timeout", () => {
                socket.destroy()
                resolve(false)
            })

            socket.on("error", () => {
                socket.destroy()
                resolve(false)
            })

            socket.connect(port, host)
        })
    }

    /**
     * Update node status
     */
    async updateNodeStatus(nodeId: string): Promise<boolean> {
        const node = this.nodes.get(nodeId)
        if (!node) return false

        const isOnline = await this.ping(node.address, node.port)
        node.status = isOnline ? "online" : "offline"
        node.lastSeen = isOnline ? new Date().toISOString() : node.lastSeen

        return isOnline
    }

    /**
     * Update all node statuses
     */
    async updateAllNodeStatuses(): Promise<Map<string, boolean>> {
        const results = new Map<string, boolean>()

        for (const [id, node] of this.nodes) {
            const status = await this.updateNodeStatus(id)
            results.set(id, status)
        }

        return results
    }

    /**
     * Make HTTP/HTTPS request
     */
    async httpRequest(
        url: string,
        options?: {
            method?: string
            headers?: Record<string, string>
            body?: string
            timeout?: number
        }
    ): Promise<{ status: number; headers: Record<string, string>; body: string }> {
        return new Promise((resolve, reject) => {
            const parsedUrl = new URL(url)
            const isHttps = parsedUrl.protocol === "https:"
            const lib = isHttps ? https : http

            const reqOptions = {
                hostname: parsedUrl.hostname,
                port: parsedUrl.port || (isHttps ? 443 : 80),
                path: parsedUrl.pathname + parsedUrl.search,
                method: options?.method || "GET",
                headers: options?.headers || {},
                timeout: options?.timeout || 30000
            }

            const req = lib.request(reqOptions, (res) => {
                let body = ""
                res.on("data", (chunk) => (body += chunk))
                res.on("end", () => {
                    resolve({
                        status: res.statusCode || 0,
                        headers: res.headers as Record<string, string>,
                        body
                    })
                })
            })

            req.on("error", reject)
            req.on("timeout", () => {
                req.destroy()
                reject(new Error("Request timeout"))
            })

            if (options?.body) {
                req.write(options.body)
            }
            req.end()
        })
    }

    /**
     * Simple GET request
     */
    async get(url: string): Promise<string> {
        const response = await this.httpRequest(url)
        return response.body
    }

    /**
     * Simple POST request
     */
    async post(url: string, body: string, contentType: string = "application/json"): Promise<string> {
        const response = await this.httpRequest(url, {
            method: "POST",
            headers: { "Content-Type": contentType },
            body
        })
        return response.body
    }

    /**
     * Connect to a telnet server
     */
    connectTelnet(options: INetworkConnectionOptions): Promise<net.Socket> {
        return new Promise((resolve, reject) => {
            const socket = new net.Socket()
            const timeout = options.timeout || 30000

            socket.setTimeout(timeout)

            socket.on("connect", () => {
                resolve(socket)
            })

            socket.on("timeout", () => {
                socket.destroy()
                reject(new Error("Connection timeout"))
            })

            socket.on("error", (err) => {
                socket.destroy()
                reject(err)
            })

            socket.connect(options.port, options.host)
        })
    }

    /**
     * Get online nodes
     */
    getOnlineNodes(): INetworkNode[] {
        return this.listNodes().filter((n) => n.status === "online")
    }

    /**
     * Get offline nodes
     */
    getOfflineNodes(): INetworkNode[] {
        return this.listNodes().filter((n) => n.status === "offline")
    }
}

/**
 * Global network instance
 */
let globalNetwork: IQNetwork | null = null

export function getNetwork(): IQNetwork {
    if (!globalNetwork) {
        globalNetwork = new IQNetwork()
    }
    return globalNetwork
}

export function setNetwork(network: IQNetwork): void {
    globalNetwork = network
}
