/**
 * Runtime Utility Decorators
 * @module core/decorators-runtime
 * @summary Utility decorators for runtime class enhancement
 */

/**
 * @Cached - Cache method results with optional TTL
 * @param options - Cache configuration
 */
export function Cached(options?: { ttl?: number; keyGenerator?: (args: any[]) => string }) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const cache = new Map<string, { value: any; timestamp: number }>()
        const original = descriptor.value

        descriptor.value = function (...args: any[]) {
            const key = options?.keyGenerator ? options.keyGenerator(args) : JSON.stringify(args)
            const cached = cache.get(key)

            if (cached) {
                if (!options?.ttl || Date.now() - cached.timestamp < options.ttl) {
                    return cached.value
                }
                cache.delete(key)
            }

            const result = original.apply(this, args)
            cache.set(key, { value: result, timestamp: Date.now() })
            return result
        }

        return descriptor
    }
}

/**
 * @Measure - Performance monitoring for methods
 * @param label - Optional label for logging
 */
export function Measure(label?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value

        descriptor.value = async function (...args: any[]) {
            const methodLabel = label || `${target.constructor.name}.${propertyKey}`
            const start = performance.now()

            try {
                const result = await original.apply(this, args)
                const duration = performance.now() - start
                console.log(`[Measure] ${methodLabel}: ${duration.toFixed(2)}ms`)
                return result
            } catch (err) {
                const duration = performance.now() - start
                console.log(`[Measure] ${methodLabel}: ${duration.toFixed(2)}ms (error)`)
                throw err
            }
        }

        return descriptor
    }
}

/**
 * @Validate - Input validation decorator
 * @param validator - Validation function returning true or error message
 */
export function Validate(validator: (args: any[]) => boolean | string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value

        descriptor.value = function (...args: any[]) {
            const result = validator(args)
            if (result !== true) {
                const errorMsg = typeof result === "string" ? result : "Validation failed"
                throw new Error(`${target.constructor.name}.${propertyKey}: ${errorMsg}`)
            }
            return original.apply(this, args)
        }

        return descriptor
    }
}

/**
 * @Lifecycle - Track open/close state for stateful components
 * @param openMethod - Name of the open method
 * @param closeMethod - Name of the close method
 */
export function Lifecycle(openMethod: string, closeMethod: string) {
    return function (constructor: Function) {
        const proto = constructor.prototype
        const stateKey = Symbol("lifecycleState")

        const originalOpen = proto[openMethod]
        const originalClose = proto[closeMethod]

        if (originalOpen) {
            proto[openMethod] = function (...args: any[]) {
                if ((this as any)[stateKey]) {
                    throw new Error(`${constructor.name} is already open`)
                }
                ;(this as any)[stateKey] = true
                return originalOpen.apply(this, args)
            }
        }

        if (originalClose) {
            proto[closeMethod] = function (...args: any[]) {
                if (!(this as any)[stateKey]) {
                    throw new Error(`${constructor.name} is not open`)
                }
                ;(this as any)[stateKey] = false
                return originalClose.apply(this, args)
            }
        }
    }
}

/**
 * @Transaction - Wrap database operations with transaction semantics
 */
export function Transaction() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value

        descriptor.value = async function (...args: any[]) {
            try {
                const result = await original.apply(this, args)
                return result
            } catch (err) {
                console.error(`[Transaction] ${target.constructor.name}.${propertyKey} failed:`, err)
                throw err
            }
        }

        return descriptor
    }
}

/**
 * @Synchronized - Prevent concurrent execution with queue
 */
export function Synchronized() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const queueKey = Symbol(`${propertyKey}_queue`)
        const runningKey = Symbol(`${propertyKey}_running`)
        const original = descriptor.value

        descriptor.value = async function (...args: any[]) {
            if (!(this as any)[queueKey]) {
                ;(this as any)[queueKey] = []
            }
            if ((this as any)[runningKey] === undefined) {
                ;(this as any)[runningKey] = false
            }

            const queue = (this as any)[queueKey]

            if ((this as any)[runningKey]) {
                return new Promise((resolve, reject) => {
                    queue.push({ args, resolve, reject })
                })
            }

            ;(this as any)[runningKey] = true

            try {
                const result = await original.apply(this, args)
                return result
            } finally {
                ;(this as any)[runningKey] = false

                if (queue.length > 0) {
                    const next = queue.shift()
                    if (next) {
                        descriptor.value.apply(this, next.args).then(next.resolve).catch(next.reject)
                    }
                }
            }
        }

        return descriptor
    }
}

/**
 * @Retry - Automatic retry on failure
 * @param options - Retry configuration
 */
export function Retry(options: { maxAttempts?: number; delay?: number } = {}) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const maxAttempts = options.maxAttempts || 3
        const delay = options.delay || 1000
        const original = descriptor.value

        descriptor.value = async function (...args: any[]) {
            let lastError: any

            for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                try {
                    return await original.apply(this, args)
                } catch (err) {
                    lastError = err
                    if (attempt < maxAttempts) {
                        console.log(`[Retry] ${target.constructor.name}.${propertyKey} attempt ${attempt} failed, retrying...`)
                        await new Promise((resolve) => setTimeout(resolve, delay))
                    }
                }
            }

            throw lastError
        }

        return descriptor
    }
}

/**
 * @Timeout - Add timeout to async operations
 * @param ms - Timeout in milliseconds
 */
export function Timeout(ms: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value

        descriptor.value = async function (...args: any[]) {
            return Promise.race([
                original.apply(this, args),
                new Promise((_, reject) => setTimeout(() => reject(new Error(`Timeout: ${target.constructor.name}.${propertyKey}`)), ms))
            ])
        }

        return descriptor
    }
}

/**
 * @Debounce - Debounce method calls
 * @param ms - Debounce delay in milliseconds
 */
export function Debounce(ms: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const timerKey = Symbol(`${propertyKey}_timer`)
        const original = descriptor.value

        descriptor.value = function (...args: any[]) {
            clearTimeout((this as any)[timerKey])

            return new Promise((resolve) => {
                ;(this as any)[timerKey] = setTimeout(() => {
                    resolve(original.apply(this, args))
                }, ms)
            })
        }

        return descriptor
    }
}

/**
 * @Throttle - Throttle method calls
 * @param ms - Minimum time between calls
 */
export function Throttle(ms: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const lastCallKey = Symbol(`${propertyKey}_lastCall`)
        const original = descriptor.value

        descriptor.value = function (...args: any[]) {
            const now = Date.now()
            const lastCall = (this as any)[lastCallKey] || 0

            if (now - lastCall < ms) {
                return
            }

            ;(this as any)[lastCallKey] = now
            return original.apply(this, args)
        }

        return descriptor
    }
}
