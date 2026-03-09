/**
 * Type declarations for koa-bodyparser (use @types/koa-bodyparser when installed).
 */
declare module "koa-bodyparser" {
    import { Context } from "koa"
    interface Options {
        enableTypes?: string[]
        encoding?: string
        strict?: boolean
    }
    function bodyParser(options?: Options): (ctx: Context, next: () => Promise<void>) => Promise<void>
    export = bodyParser
}
