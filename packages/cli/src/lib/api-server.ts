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

function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
}

/** Resolve xterm package root. Tries require.resolve then path relative to CLI package. */
function getXtermPath(): string | null {
    try {
        const p = require.resolve("xterm/package.json")
        const dir = path.dirname(p)
        if (fs.existsSync(path.join(dir, "lib", "xterm.js")) || fs.existsSync(path.join(dir, "lib", "xterm.min.js")))
            return dir
    } catch {
        const cliRoot = path.resolve(__dirname, "..", "..", "..")
        const candidate = path.join(cliRoot, "node_modules", "xterm")
        if (fs.existsSync(path.join(candidate, "lib"))) return candidate
    }
    return null
}

/** Serve one xterm asset file; returns path to serve or null. */
function getXtermAssetPath(xtermDir: string, requestPath: string): string | null {
    if (requestPath === "/term-assets/xterm.js" || requestPath === "/term-assets/xterm.min.js") {
        const min = path.join(xtermDir, "lib", "xterm.min.js")
        const plain = path.join(xtermDir, "lib", "xterm.js")
        if (fs.existsSync(min)) return min
        if (fs.existsSync(plain)) return plain
        return null
    }
    if (requestPath === "/term-assets/xterm.css") {
        const css = path.join(xtermDir, "css", "xterm.css")
        return fs.existsSync(css) ? css : null
    }
    return null
}

function getTermPageHtml(wsUrl: string): string {
    const assetsBase = "/term-assets"
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Iniquity BBS - Terminal</title>
  <link rel="stylesheet" href="${assetsBase}/xterm.css">
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; height: 100%; background: #000; }
    body { display: flex; flex-direction: column; }
    .status { flex-shrink: 0; padding: 4px 8px; background: #1a1a1a; color: #888; font-size: 12px; }
    #terminal { flex: 1; min-height: 120px; padding: 8px; }
  </style>
</head>
<body>
  <div class="status" id="status">Connecting to ${escapeHtml(wsUrl)}...</div>
  <div id="terminal"></div>
  <script src="${assetsBase}/xterm.js"></script>
  <script>
(function() {
  var wsUrl = ${JSON.stringify(wsUrl)};
  var status = document.getElementById("status");
  if (typeof Terminal === "undefined") {
    status.textContent = "Terminal failed to load.";
    document.getElementById("terminal").innerHTML = "<pre style=\"color:#888;padding:8px;\">xterm.js could not load. Run: npm install (in packages/cli)</pre>";
    return;
  }
  var term = new Terminal({ cols: 80, rows: 25, theme: { background: "#000", foreground: "#aaa" }, fontFamily: "Consolas, monospace", fontSize: 14 });
  term.open(document.getElementById("terminal"));
  var ws = new WebSocket(wsUrl);
  ws.binaryType = "arraybuffer";
  ws.onopen = function() {
    status.textContent = "Connected.";
    term.write("\\x1b[32mConnected.\\x1b[0m\\r\\n");
    term.focus();
  };
  ws.onmessage = function(ev) {
    var text = ev.data instanceof ArrayBuffer
      ? new TextDecoder("utf-8").decode(new Uint8Array(ev.data))
      : ev.data;
    term.write(text);
  };
  ws.onclose = function() { status.textContent = "Disconnected."; term.write("\\r\\n\\x1b[31mDisconnected.\\x1b[0m\\r\\n"); };
  ws.onerror = function() { status.textContent = "Connection error."; term.write("\\r\\n\\x1b[31mConnection error.\\x1b[0m\\r\\n"); };
  term.onData(function(d) { if (ws.readyState === 1) ws.send(d); });
  term.focus();
})();
  </script>
</body>
</html>`
}

/** Fallback term page when xterm is not installed: inline ANSI-to-HTML (server still sends UTF-8 via core cp437ToUtf8). */
function getTermPageHtmlFallback(wsUrl: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Iniquity BBS - Terminal</title>
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; height: 100%; background: #0c0c0c; color: #c0c0c0; font: 14px Consolas, monospace; }
    body { display: flex; flex-direction: column; }
    .status { flex-shrink: 0; padding: 4px 8px; background: #1a1a1a; color: #888; }
    #out { flex: 1; min-height: 120px; padding: 8px; overflow: auto; white-space: pre-wrap; word-break: break-all; }
    #out:focus { outline: none; }
  </style>
</head>
<body>
  <div class="status" id="status">Connecting to ${escapeHtml(wsUrl)}...</div>
  <div id="out" tabindex="0"></div>
  <script>
(function() {
  var wsUrl = ${JSON.stringify(wsUrl)};
  var status = document.getElementById("status");
  var out = document.getElementById("out");
  var buf = "", max = 80000;
  var fg = ["#000","#a00","#0a0","#a50","#00a","#a0a","#0aa","#aaa","#555","#f55","#5f5","#ff5","#55f","#f5f","#5ff","#fff"];
  var bg = ["#000","#a00","#0a0","#a50","#00a","#a0a","#0aa","#aaa"];
  function esc(s){ var d=document.createElement("div"); d.textContent=s; return d.innerHTML; }
  function toHtml(t) {
    var r="", i=0, n=t.length, f=null, b=null, bold=false, open=false;
    function end(){ if(open){ r+="</span>"; open=false; } }
    function start(){ var s=[]; if(f)s.push("color:"+f); if(b)s.push("background-color:"+b); if(bold)s.push("font-weight:bold"); if(s.length){ r+='<span style="'+s.join(";")+'">'; open=true; } }
    while(i<n){
      if(t.charCodeAt(i)===27&&i+1<n&&t[i+1]==="["){
        var e=i+2; while(e<n&&t.charCodeAt(e)>=0x20&&t.charCodeAt(e)<=0x3f)e++;
        var seq=t.slice(i+2,e); i=e+(e<n?1:0);
        seq.split(";").forEach(function(part){
          var c=parseInt(part,10)||0;
          if(c===0){ end(); f=b=null; bold=false; }
          else if(c===1){ bold=true; end(); start(); }
          else if(c>=30&&c<=37){ f=fg[c-30]; end(); start(); }
          else if(c>=40&&c<=47){ b=bg[c-40]; end(); start(); }
          else if(c>=90&&c<=97){ f=fg[8+c-90]; end(); start(); }
          else if(c>=100&&c<=107){ b=bg[c-100]; end(); start(); }
        });
        continue;
      }
      var ch="";
      while(i<n&&!(t.charCodeAt(i)===27&&i+1<n&&t[i+1]==="[")){ ch+=t[i]; i++; }
      if(ch){ end(); r+=esc(ch); }
    }
    end(); return r;
  }
  function add(data){
    var s=typeof data==="string"?data:new TextDecoder("utf-8",{fatal:false}).decode(new Uint8Array(data));
    buf+=s; if(buf.length>max) buf=buf.slice(-max);
    out.innerHTML=toHtml(buf); out.scrollTop=out.scrollHeight;
  }
  var ws=new WebSocket(wsUrl);
  ws.binaryType="arraybuffer";
  ws.onopen=function(){ status.textContent="Connected."; add("\\x1b[32mConnected.\\x1b[0m\\r\\n"); out.focus(); };
  ws.onmessage=function(ev){ add(ev.data instanceof ArrayBuffer?ev.data:ev.data); };
  ws.onclose=function(){ status.textContent="Disconnected."; add("\\r\\n\\x1b[31mDisconnected.\\x1b[0m\\r\\n"); };
  ws.onerror=function(){ status.textContent="Connection error."; add("\\r\\n\\x1b[31mConnection error.\\x1b[0m\\r\\n"); };
  out.onkeydown=function(e){
    if(ws.readyState!==1) return;
    if(e.key.length===1){ ws.send(e.key); e.preventDefault(); }
    else if(e.key==="Enter"){ ws.send("\\r\\n"); e.preventDefault(); }
    else if(e.key==="Backspace"){ ws.send("\\x7f"); e.preventDefault(); }
  };
  out.focus();
})();
  </script>
</body>
</html>`
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

        const xtermDir = getXtermPath()
        if (xtermDir && ctx.method === "GET" && (ctx.path === "/term-assets/xterm.min.js" || ctx.path === "/term-assets/xterm.js" || ctx.path === "/term-assets/xterm.css")) {
            const filePath = getXtermAssetPath(xtermDir, ctx.path)
            if (filePath) {
                ctx.type = ctx.path.endsWith(".css") ? "text/css" : "application/javascript"
                ctx.body = fs.readFileSync(filePath)
                return
            }
        }

        if (ctx.path === "/term" && ctx.method === "GET") {
            const requestHost = ctx.request.headers.host ?? "localhost:8383"
            const protocol = ctx.request.secure || (ctx.request.headers["x-forwarded-proto"] === "https") ? "wss" : "ws"
            const wsUrl = `${protocol}://${requestHost}/ws`
            ctx.type = "text/html"
            ctx.body = getXtermPath() ? getTermPageHtml(wsUrl) : getTermPageHtmlFallback(wsUrl)
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
