/**
 * Ambient types for the `electron` module so TypeScript can resolve it
 * when the package is not yet installed (e.g. before npm install).
 * The real types come from the `electron` package once installed.
 */
declare module "electron" {
    import type { ChildProcess } from "child_process"

    export interface BrowserWindowConstructorOptions {
        width?: number
        height?: number
        webPreferences?: {
            nodeIntegration?: boolean
            contextIsolation?: boolean
        }
    }

    export class BrowserWindow {
        constructor(options: BrowserWindowConstructorOptions)
        loadURL(url: string): void
        on(event: "closed", listener: () => void): this
    }

    export interface App {
        whenReady(): Promise<void>
        quit(): void
        on(event: "window-all-closed", listener: () => void): this
    }

    export const app: App
}
