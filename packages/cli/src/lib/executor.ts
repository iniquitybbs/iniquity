/**
 * TypeScript Program Executor
 * @module lib/executor
 * @summary Execute BBS programs written in TypeScript
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

import { Runtime, setGlobalRuntime, getModuleMetadata, initUserDatabase, initGroupDatabase } from "@iniquitybbs/core"
import { Session } from "./session"
import * as fs from "fs"
import * as path from "path"
import { pathToFileURL } from "url"

/**
 * Execute a BBS program
 */
export async function executeProgram(programPath: string, runtime: Runtime, session: Session): Promise<void> {
    setGlobalRuntime(runtime)

    const programDir = path.dirname(path.resolve(programPath))
    runtime.setProgramDirectory(programDir)

    // Initialize user and group databases with BBS-local paths
    initUserDatabase(programDir)
    initGroupDatabase(programDir)

    if (!fs.existsSync(programPath)) {
        throw new Error(`Program not found: ${programPath}`)
    }

    const ext = path.extname(programPath)

    if (ext === ".ts") {
        await executeTypeScript(programPath, runtime, session)
    } else if (ext === ".js") {
        await executeJavaScript(programPath, runtime, session)
    } else {
        throw new Error(`Unsupported file type: ${ext}`)
    }
}

/**
 * Execute TypeScript file
 */
async function executeTypeScript(filePath: string, runtime: Runtime, session: Session): Promise<void> {
    try {
        let code = fs.readFileSync(filePath, "utf-8")

        const hasDecorator = /@IQModule/.test(code)
        const hasTypeAnnotations = /:\s*(string|number|boolean|Promise|void|any)\b/.test(code)
        const hasAsyncFunction = /async\s+(function\s+\w+|\([^)]*\)\s*=>|\w+\s*=>)/.test(code)
        const hasImports = /^import\s+.*from\s+['"]@iniquitybbs\/core['"]/m.test(code)
        const usesBbsApi = /\bbbs\.(menu|start|popup|welcome|goodbye)\s*\(/.test(code)

        // Use tsx for any TypeScript that has imports, type annotations, or complex syntax
        if (hasDecorator || hasTypeAnnotations || hasAsyncFunction || hasImports || usesBbsApi) {
            await executeWithTsx(filePath, runtime, session)
        } else {
            await executeSimpleScript(code, runtime, session)
        }
    } catch (err) {
        console.error("TypeScript execution error:", err)
        throw err
    }
}

/**
 * Execute TypeScript file using tsx for on-the-fly compilation
 */
async function executeWithTsx(filePath: string, runtime: Runtime, session: Session): Promise<void> {
    const absolutePath = path.resolve(filePath)
    const programDir = path.dirname(absolutePath)

    // Use tsx to load TypeScript files directly
    const tsxPath = require.resolve("tsx/cjs")
    require(tsxPath)

    // Clear require cache to ensure fresh load
    delete require.cache[absolutePath]

    // Resolve and load @iniquitybbs/core from the user's project (program directory).
    // The template's package.json must depend on a version that includes the APIs you use (e.g. setGlobalHotkey).
    const coreModulePath = require.resolve("@iniquitybbs/core", { paths: [programDir] })
    const { bbs, setGlobalRuntime } = require(coreModulePath)
    
    // Set the global runtime on the user's core instance
    setGlobalRuntime(runtime)

    // Require the user's program (this runs their code and registers bbs.start())
    const module = require(absolutePath)

    // Check if bbs.start() was called (primary API pattern)
    if (bbs.hasStartCallback()) {
        await bbs.executeStart()
        // Disconnect after the BBS program completes
        runtime.disconnect()
        return
    }

    // If no bbs.start(), check for default export or main function
    if (module.default) {
        if (typeof module.default === "function") {
            await module.default(runtime)
        } else if (typeof module.default.start === "function") {
            await module.default.start()
        }
    } else if (typeof module.main === "function") {
        // Support for main() function pattern
        await module.main()
    }
}

/**
 * Execute a simple script (non-class-based)
 */
async function executeSimpleScript(code: string, runtime: Runtime, session: Session): Promise<void> {
    code = code.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, "")
    code = code.replace(/^@\w+\(.*?\)\s*$/gm, "")
    code = code.trim()

    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor

    // Import from @iniquitybbs/core
    const coreModule = await import("@iniquitybbs/core")

    const fn = new AsyncFunction("runtime", "bbs", "screen", "session", code)

    await fn(runtime, coreModule.bbs, coreModule.screen, session)
}

/**
 * Execute JavaScript file
 */
async function executeJavaScript(filePath: string, runtime: Runtime, session: Session): Promise<void> {
    try {
        const module = await import(pathToFileURL(filePath).href)

        if (typeof module.default === "function") {
            await module.default(runtime)
        }
    } catch (err) {
        console.error("JavaScript execution error:", err)
        throw err
    }
}

/**
 * Execute code string directly (for testing)
 */
export async function executeCode(code: string, runtime: Runtime): Promise<void> {
    setGlobalRuntime(runtime)

    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor
    const coreModule = await import("@iniquitybbs/core")

    const fn = new AsyncFunction("runtime", "bbs", "screen", code)

    await fn(runtime, coreModule.bbs, coreModule.screen)
}
