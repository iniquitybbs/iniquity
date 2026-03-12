/**
 * IQ term Desktop — Electron main process.
 * Opens a window to the BBS term page; optionally starts the server if not running.
 * @module desktop/main
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

import { app, BrowserWindow } from "electron"
import * as path from "path"
import { spawn, ChildProcess } from "child_process"

const DEFAULT_BASE_URL = "http://localhost:8383"
const HEALTH_PATH = "/api/v1/health"
const TERM_PATH = "/term"
const POLL_MS = 500
const POLL_TIMEOUT_MS = 30_000

let serverProcess: ChildProcess | null = null

function getTermUrl(baseUrl: string): string {
    const base = baseUrl.replace(/\/$/, "")
    return `${base}${TERM_PATH}`
}

function getHealthUrl(baseUrl: string): string {
    const base = baseUrl.replace(/\/$/, "")
    return `${base}${HEALTH_PATH}`
}

function checkHealth(baseUrl: string): Promise<boolean> {
    const url = getHealthUrl(baseUrl)
    return fetch(url)
        .then((r) => r.ok)
        .catch(() => false)
}

function spawnServer(): Promise<void> {
    return new Promise((resolve, reject) => {
        const repoRoot = path.resolve(__dirname, "..", "..", "..")
        const cliPath = path.join(repoRoot, "packages", "cli", "dist", "src", "index.js")
        const args = ["server", "start"]

        const child = spawn(process.execPath, [cliPath, ...args], {
            cwd: repoRoot,
            stdio: "pipe",
        })
        serverProcess = child
        child.on("error", (err) => {
            serverProcess = null
            reject(err)
        })
        child.stderr?.on("data", (d) => process.stderr.write(d))
        child.stdout?.on("data", (d) => process.stdout.write(d))
        child.on("exit", () => {
            serverProcess = null
        })
        resolve()
    })
}

function waitForHealth(baseUrl: string, timeoutMs: number): Promise<boolean> {
    const start = Date.now()
    function poll(): Promise<boolean> {
        return checkHealth(baseUrl).then((ok) => {
            if (ok) return true
            if (Date.now() - start >= timeoutMs) return false
            return new Promise((r) => setTimeout(() => poll().then(r), POLL_MS))
        })
    }
    return poll()
}

function createWindow(termUrl: string): void {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    })
    win.loadURL(termUrl)
    win.on("closed", () => {
        if (serverProcess) {
            serverProcess.kill()
            serverProcess = null
        }
    })
}

async function main(): Promise<void> {
    const baseUrl = process.env.IQ_TERM_BASE_URL ?? DEFAULT_BASE_URL
    const termUrl = getTermUrl(baseUrl)

    const healthy = await checkHealth(baseUrl)
    if (healthy) {
        createWindow(termUrl)
        return
    }

    try {
        await spawnServer()
        const ok = await waitForHealth(baseUrl, POLL_TIMEOUT_MS)
        if (ok) {
            createWindow(termUrl)
        } else {
            console.error("Server did not become healthy in time. Open manually:", termUrl)
            createWindow(termUrl)
        }
    } catch (err) {
        console.error("Could not start server:", err)
        createWindow(termUrl)
    }
}

app.whenReady().then(main).catch((err) => {
    console.error(err)
    process.exit(1)
})

app.on("window-all-closed", () => {
    if (serverProcess) {
        serverProcess.kill()
        serverProcess = null
    }
    app.quit()
})
