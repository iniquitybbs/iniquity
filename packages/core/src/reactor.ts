/**
 * IQReactor - Reactive Data System
 * @module runtime/reactor
 * @summary Observable data models for reactive UI updates with computed properties
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

/**
 * Computed property definition
 */
export interface IQComputedProperty {
    get: () => any
    dependencies?: string[]
}

/**
 * Reactor options interface
 */
export interface IQReactorOptions {
    model: any
    observe: (key: string, callback: Function) => void
    notify: (key?: string) => void
    computed: (key: string, getter: () => any, dependencies?: string[]) => void
    unobserve: (key: string, callback?: Function) => void
    batch: (fn: () => void) => void
    getObservers: () => { [key: string]: Function[] }
}

/**
 * Create a reactive data model with computed properties
 * Based on the pattern from @iniquitybbs/core
 * @see https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects
 */
export function IQReactor(dataObj: any): IQReactorOptions {
    const observers: { [key: string]: Function[] } = {}
    const computedProperties: { [key: string]: IQComputedProperty } = {}
    const computedCache: { [key: string]: any } = {}
    const computedDirty: { [key: string]: boolean } = {}
    let batchMode = false
    let pendingNotifications: Set<string> = new Set()

    /**
     * Internal: Notify all observers for a specific key
     */
    function notifyObservers(key: string): void {
        if (batchMode) {
            pendingNotifications.add(key)
            return
        }

        if (observers[key]) {
            observers[key].forEach((callback) => {
                try {
                    callback(model[key])
                } catch (err) {
                    console.error(`Error in observer for ${key}:`, err)
                }
            })
        }

        // Invalidate computed properties that depend on this key
        for (const computedKey in computedProperties) {
            const computed = computedProperties[computedKey]
            if (computed.dependencies?.includes(key)) {
                computedDirty[computedKey] = true
                // Also notify observers of the computed property
                if (observers[computedKey]) {
                    observers[computedKey].forEach((callback) => {
                        try {
                            callback(model[computedKey])
                        } catch (err) {
                            console.error(`Error in observer for computed ${computedKey}:`, err)
                        }
                    })
                }
            }
        }
    }

    /**
     * Get computed property value (with caching)
     */
    function getComputedValue(key: string): any {
        if (computedDirty[key] || !(key in computedCache)) {
            computedCache[key] = computedProperties[key].get()
            computedDirty[key] = false
        }
        return computedCache[key]
    }

    // Create the reactive model using Proxy
    const model = new Proxy(dataObj, {
        set(target, property, value) {
            const key = property as string

            // Don't allow setting computed properties directly
            if (key in computedProperties) {
                console.warn(`Cannot set computed property "${key}" directly`)
                return false
            }

            const oldValue = target[key]
            target[key] = value

            // Notify observers if value changed
            if (oldValue !== value) {
                notifyObservers(key)
            }

            return true
        },

        get(target, property) {
            const key = property as string

            // Check if it's a computed property
            if (key in computedProperties) {
                return getComputedValue(key)
            }

            return target[key]
        },

        has(target, property) {
            const key = property as string
            return key in target || key in computedProperties
        },

        ownKeys(target) {
            return [...Object.keys(target), ...Object.keys(computedProperties)]
        },

        getOwnPropertyDescriptor(target, property) {
            const key = property as string
            if (key in computedProperties) {
                return {
                    enumerable: true,
                    configurable: true,
                    value: getComputedValue(key)
                }
            }
            return Object.getOwnPropertyDescriptor(target, key)
        }
    })

    /**
     * Register an observer for a specific property
     */
    function observe(key: string, callback: Function): void {
        if (!observers[key]) {
            observers[key] = []
        }
        observers[key].push(callback)
    }

    /**
     * Unregister an observer
     */
    function unobserve(key: string, callback?: Function): void {
        if (!observers[key]) return

        if (callback) {
            const index = observers[key].indexOf(callback)
            if (index !== -1) {
                observers[key].splice(index, 1)
            }
        } else {
            // Remove all observers for this key
            delete observers[key]
        }
    }

    /**
     * Notify observers of a property change
     */
    function notify(key?: string): void {
        if (key) {
            notifyObservers(key)
        } else {
            // Notify all observers
            for (const observerKey in observers) {
                notifyObservers(observerKey)
            }
        }
    }

    /**
     * Define a computed property
     */
    function computed(key: string, getter: () => any, dependencies?: string[]): void {
        computedProperties[key] = {
            get: getter,
            dependencies: dependencies || []
        }
        computedDirty[key] = true

        // Auto-detect dependencies if not provided
        if (!dependencies || dependencies.length === 0) {
            // Track which properties are accessed during getter execution
            const accessedProps: string[] = []
            const trackingProxy = new Proxy(dataObj, {
                get(target, prop) {
                    const propKey = prop as string
                    if (propKey in target) {
                        accessedProps.push(propKey)
                    }
                    return target[propKey]
                }
            })

            // Execute getter with tracking proxy to detect dependencies
            try {
                const originalModel = model
                getter.call({ model: trackingProxy })
            } catch (e) {
                // Ignore errors during dependency detection
            }

            if (accessedProps.length > 0) {
                computedProperties[key].dependencies = accessedProps
            }
        }
    }

    /**
     * Batch multiple updates together
     */
    function batch(fn: () => void): void {
        batchMode = true
        pendingNotifications.clear()

        try {
            fn()
        } finally {
            batchMode = false

            // Process all pending notifications
            for (const key of pendingNotifications) {
                notifyObservers(key)
            }
            pendingNotifications.clear()
        }
    }

    /**
     * Get all observers (for debugging)
     */
    function getObservers(): { [key: string]: Function[] } {
        return { ...observers }
    }

    return {
        model,
        observe,
        notify,
        computed,
        unobserve,
        batch,
        getObservers
    }
}
