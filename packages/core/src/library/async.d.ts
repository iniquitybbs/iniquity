import "@iniquitybbs/core/node_modules/@types/async"

import { AsyncFunction } from "async"
import { AsyncResultCallback } from "async"
declare global {
    namespace async {
        export function tryEach<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, callback: AsyncResultCallback<T, E>): void
    }
}
