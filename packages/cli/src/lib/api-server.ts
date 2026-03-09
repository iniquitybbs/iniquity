/**
 * Minimal HTTP API server wrapping Ollama for BBS AI chat.
 * Serves POST /api/v1/ai and GET /api/v1/health.
 * @module lib/api-server
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

import * as http from "http"
import * as path from "path"
import * as fs from "fs"
import Koa = require("koa")
import bodyParser from "koa-bodyparser"

type KoaCtx = Parameters<Parameters<Koa["use"]>[0]>[0]

const OLLAMA_BASE = process.env.OLLAMA_HOST || "http://127.0.0.1:11434"
const DEFAULT_MODEL = process.env.OLLAMA_MODEL || "gemma3:1b"

export interface ApiServerOptions {
    port?: number
    host?: string
    /** BBS root directory (containing iniquity.json and optionally package.json). Used to build AI system context. */
    bbsRoot?: string
}

function readJson<T = unknown>(filePath: string): T | null {
    try {
        if (!fs.existsSync(filePath)) return null
        const raw = fs.readFileSync(filePath, "utf-8")
        return JSON.parse(raw) as T
    } catch {
        return null
    }
}

function getBbsName(root: string): string {
    const config = readJson<{ name?: string; server?: { name?: string } }>(path.join(root, "iniquity.json"))
    if (config?.server?.name) return config.server.name
    if (config?.name) return config.name
    return "Iniquity BBS"
}

function getBbsVersion(root: string): string | null {
    const pkg = readJson<{ version?: string }>(path.join(root, "package.json"))
    if (pkg?.version) return pkg.version
    const iniquityPkg = readJson<{ version?: string }>(path.join(root, ".iniquity", "package.json"))
    return iniquityPkg?.version ?? null
}

function getIniquityVersion(): string {
    const pkg = readJson<{ version?: string }>(path.join(__dirname, "..", "package.json"))
    return pkg?.version ?? "3.x"
}

function buildSystemPrompt(bbsName: string, bbsVersion: string | null, iniquityVersion: string): string {
    const bbsVer = bbsVersion ? ` This BBS version: ${bbsVersion}.` : ""
    return `You are the AI assistant for ${bbsName}, a bulletin board system (BBS) accessed by users over telnet or terminal. This BBS is powered by Iniquity (https://iniquitybbs.com), version ${iniquityVersion}.${bbsVer}

Keep responses concise and appropriate for a terminal BBS environment. Help callers with questions, conversation, and BBS-related topics. You are part of the BBS experience, not a generic chatbot.`
}

/**
 * Create and start an HTTP server that proxies chat requests to Ollama.
 * Returns the server instance so the caller can close it.
 */
export function startApiServer(options: ApiServerOptions = {}): http.Server {
    const port = options.port ?? 8383
    const host = options.host ?? "0.0.0.0"
    const bbsRoot = options.bbsRoot ?? process.cwd()
    const iniquityVersion = getIniquityVersion()

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

        const body = ((ctx.request as KoaCtx["request"] & { body?: unknown }).body || {}) as {
            prompt?: unknown
            model?: string
            bbsName?: string
            bbsVersion?: string
        }
        const prompt = typeof body.prompt === "string" ? body.prompt.trim() : ""
        if (!prompt) {
            ctx.status = 400
            ctx.body = { error: "Missing or invalid prompt" }
            return
        }

        const bbsName = typeof body.bbsName === "string" && body.bbsName.trim() ? body.bbsName.trim() : getBbsName(bbsRoot)
        const bbsVersion =
            typeof body.bbsVersion === "string" && body.bbsVersion.trim() ? body.bbsVersion.trim() : getBbsVersion(bbsRoot)
        const system = buildSystemPrompt(bbsName, bbsVersion, iniquityVersion)

        const model = body.model || DEFAULT_MODEL
        const url = `${OLLAMA_BASE}/api/generate`

        try {
            const ollamaRes = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ model, prompt, system, stream: false })
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
