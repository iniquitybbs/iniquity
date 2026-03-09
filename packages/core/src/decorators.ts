/**
 * Module Decorators
 * @module runtime/decorators
 * @summary Decorators for class-based BBS modules
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

import { IQReactorOptions } from "./reactor"

export enum IQModuleACLS {
    low = 0,
    normal = 50,
    high = 100
}

export interface IQModuleOptions {
    basepath?: string
    access?: IQModuleACLS | number
    assets?: string
    encoding?: string
    data?: IQReactorOptions
    computed?: any
}

export interface IQModuleRuntimeOptions {
    debug?: boolean
}

/**
 * Store module metadata
 */
const moduleMetadata = new WeakMap<Function, IQModuleOptions>()
const runtimeMetadata = new WeakMap<Function, IQModuleRuntimeOptions>()

/**
 * Module prototype interface for type-safe decorator assignments
 */
interface IQModulePrototype {
    basepath?: string
    data?: IQReactorOptions
    access?: number
    encoding?: string
    computed?: any
}

/**
 * @IQModule decorator
 * Marks a class as an Iniquity module and stores configuration
 */
export function IQModule(options: IQModuleOptions) {
    return function (constructor: Function) {
        // Store metadata on the constructor
        moduleMetadata.set(constructor, options)

        const proto = constructor.prototype as IQModulePrototype

        // If data is provided, attach it to the prototype
        if (options.data) {
            proto.data = options.data
        }

        // If basepath is provided, attach it to the prototype
        if (options.basepath) {
            proto.basepath = options.basepath
        }

        // Store other options
        if (options.access !== undefined) {
            proto.access = options.access
        }

        if (options.encoding) {
            proto.encoding = options.encoding
        }

        if (options.computed) {
            proto.computed = options.computed
        }
    }
}

/**
 * @IQModuleRuntime decorator
 * Marks a method as the runtime entry point for a module
 */
export function IQModuleRuntime(options?: IQModuleRuntimeOptions) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // Store runtime options
        if (options) {
            runtimeMetadata.set(descriptor.value, options)
        }

        // Mark this as the runtime entry point
        target.constructor._runtimeMethod = propertyKey

        // If debug is enabled, wrap the method
        if (options?.debug) {
            const originalMethod = descriptor.value

            descriptor.value = async function (...args: any[]) {
                console.log(`[IQModuleRuntime] Starting ${target.constructor.name}.${propertyKey}`)

                try {
                    const result = await originalMethod.apply(this, args)
                    console.log(`[IQModuleRuntime] Completed ${target.constructor.name}.${propertyKey}`)
                    return result
                } catch (err) {
                    console.error(`[IQModuleRuntime] Error in ${target.constructor.name}.${propertyKey}:`, err)
                    throw err
                }
            }
        }

        return descriptor
    }
}

/**
 * Get module metadata for a constructor
 */
export function getModuleMetadata(constructor: Function): IQModuleOptions | undefined {
    return moduleMetadata.get(constructor)
}

/**
 * Get runtime metadata for a method
 */
export function getRuntimeMetadata(method: Function): IQModuleRuntimeOptions | undefined {
    return runtimeMetadata.get(method)
}
