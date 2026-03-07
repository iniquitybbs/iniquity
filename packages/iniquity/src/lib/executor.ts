/**
 * TypeScript Program Executor
 * @module lib/executor
 * @summary Execute BBS programs written in TypeScript
 */

import { Runtime, setGlobalRuntime, IQ, IQReactor, getModuleMetadata, IQModuleOptions } from '@iniquitybbs/core'
import { Session } from './session'
import * as fs from 'fs'
import * as path from 'path'
import { pathToFileURL } from 'url'

/**
 * Execute a BBS program
 */
export async function executeProgram(programPath: string, runtime: Runtime, session: Session): Promise<void> {
    setGlobalRuntime(runtime)

    const programDir = path.dirname(path.resolve(programPath))
    runtime.setProgramDirectory(programDir)

    if (!fs.existsSync(programPath)) {
        throw new Error(`Program not found: ${programPath}`)
    }

    const ext = path.extname(programPath)
    
    if (ext === '.ts') {
        await executeTypeScript(programPath, runtime, session)
    } else if (ext === '.js') {
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
        let code = fs.readFileSync(filePath, 'utf-8')
        
        const hasClassDeclaration = /class\s+\w+\s+extends\s+IQ/.test(code)
        const hasDecorator = /@IQModule/.test(code)
        
        if (hasClassDeclaration || hasDecorator) {
            await executeClassModule(filePath, runtime, session)
        } else {
            await executeSimpleScript(code, runtime, session)
        }
    } catch (err) {
        console.error('TypeScript execution error:', err)
        throw err
    }
}

/**
 * Execute a class-based module
 */
async function executeClassModule(filePath: string, runtime: Runtime, session: Session): Promise<void> {
    const modulePath = filePath.replace(/\.ts$/, '.js')
    
    if (!fs.existsSync(modulePath)) {
        throw new Error(`Compiled module not found: ${modulePath}. Please run 'npx tsc' first.`)
    }
    
    const module = await import(pathToFileURL(modulePath).href)
    
    for (const exportName in module) {
        const exported = module[exportName]
        
        if (typeof exported === 'function' && exported.prototype instanceof IQ) {
            const instance = new exported(session)
            
            instance.setProgramDirectory(runtime.getProgramDirectory())
            
            const metadata = getModuleMetadata(exported)
            if (metadata) {
                if (metadata.basepath) {
                    instance.basepath = metadata.basepath
                }
                if (metadata.data) {
                    instance.data = metadata.data
                }
            }
            
            const runtimeMethod = (exported as any)._runtimeMethod || 'start'
            
            if (typeof instance[runtimeMethod] === 'function') {
                await instance[runtimeMethod]()
            } else {
                console.warn(`Runtime method '${runtimeMethod}' not found on ${exportName}`)
            }
            
            return
        }
    }
    
    if (module.default) {
        if (typeof module.default === 'function') {
            await module.default(runtime)
        } else if (typeof module.default.start === 'function') {
            await module.default.start()
        }
    }
}

/**
 * Execute a simple script (non-class-based)
 */
async function executeSimpleScript(code: string, runtime: Runtime, session: Session): Promise<void> {
    code = code.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '')
    code = code.replace(/^@\w+\(.*?\)\s*$/gm, '')
    code = code.trim()
    
    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
    
    // Import from @iniquitybbs/core
    const coreModule = await import('@iniquitybbs/core')
    
    const fn = new AsyncFunction(
        'runtime',
        'say',
        'ask', 
        'pause',
        'wait',
        'print',
        'printMCI',
        'gotoxy',
        'disconnect',
        'hangup',
        'artwork',
        'menu',
        'frame',
        'cursor',
        'IQReactor',
        'session',
        code
    )
    
    await fn(
        runtime,
        coreModule.say,
        coreModule.ask,
        coreModule.pause,
        coreModule.wait,
        coreModule.print,
        coreModule.printMCI,
        coreModule.gotoxy,
        coreModule.disconnect,
        coreModule.hangup,
        coreModule.artwork,
        coreModule.menu,
        coreModule.frame,
        coreModule.cursor,
        coreModule.IQReactor,
        session
    )
}

/**
 * Execute JavaScript file
 */
async function executeJavaScript(filePath: string, runtime: Runtime, session: Session): Promise<void> {
    try {
        const module = await import(pathToFileURL(filePath).href)
        
        if (typeof module.default === 'function') {
            await module.default(runtime)
        }
    } catch (err) {
        console.error('JavaScript execution error:', err)
        throw err
    }
}

/**
 * Execute code string directly (for testing)
 */
export async function executeCode(code: string, runtime: Runtime): Promise<void> {
    setGlobalRuntime(runtime)
    
    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
    const coreModule = await import('@iniquitybbs/core')
    
    const fn = new AsyncFunction(
        'runtime',
        'say',
        'ask',
        'pause',
        'wait',
        'gotoxy',
        'disconnect',
        code
    )
    
    await fn(
        runtime,
        coreModule.say,
        coreModule.ask,
        coreModule.pause,
        coreModule.wait,
        coreModule.gotoxy,
        coreModule.disconnect
    )
}
