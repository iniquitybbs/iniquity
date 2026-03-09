/**
 * Minimal HTTP API server wrapping Ollama for BBS AI chat.
 * Serves POST /api/v1/ai and GET /api/v1/health.
 * @module lib/api-server
 */

import * as http from "http"
import Koa = require("koa")
import bodyParser from "koa-bodyparser"

type KoaCtx = Parameters<Parameters<Koa["use"]>[0]>[0]

const OLLAMA_BASE = process.env.OLLAMA_HOST || "http://127.0.0.1:11434"
const DEFAULT_MODEL = process.env.OLLAMA_MODEL || "gemma3:1b"

export interface ApiServerOptions {
    port?: number
    host?: string
}

/**
 * Create and start an HTTP server that proxies chat requests to Ollama.
 * Returns the server instance so the caller can close it.
 */
export function startApiServer(options: ApiServerOptions = {}): http.Server {
    const port = options.port ?? 8383
    const host = options.host ?? "0.0.0.0"

    const app = new Koa()
    app.use(bodyParser({ enableTypes: ["json"] }))

    app.use(async (ctx: KoaCtx) => {
        ctx.type = "application/json"

        if (ctx.path === "/api/v1/health" && ctx.method === "GET") {
            ctx.body = { ok: true, service: "iniquity-ai" }
            return
        }

        if (ctx.path !== "/api/v1/ai" || ctx.method !== "POST") {
            ctx.status = 404
            ctx.body = { error: "Not found" }
            return
        }

        const body = ((ctx.request as KoaCtx["request"] & { body?: unknown }).body || {}) as { prompt?: unknown; model?: string }
        const prompt = typeof body.prompt === "string" ? body.prompt.trim() : ""
        if (!prompt) {
            ctx.status = 400
            ctx.body = { error: "Missing or invalid prompt" }
            return
        }

        const model = body.model || DEFAULT_MODEL
        const url = `${OLLAMA_BASE}/api/generate`

        try {
            const ollamaRes = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ model, prompt, stream: false })
            })

            if (!ollamaRes.ok) {
                const text = await ollamaRes.text()
                ctx.status = ollamaRes.status
                ctx.body = { error: "Ollama request failed", detail: text }
                return
            }

            const data = (await ollamaRes.json()) as { response?: string }
            ctx.body = { response: data.response || "" }
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err)
            ctx.status = 502
            ctx.body = { error: "Failed to reach Ollama", detail: message }
        }
    })

    const server = http.createServer(app.callback())
    server.listen(port, host, () => {
        console.log(`AI API listening on http://${host}:${port} (POST /api/v1/ai)`)
    })

    return server
}
