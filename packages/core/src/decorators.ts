/**
 * Module Decorators
 * @module runtime/decorators
 * @summary Decorators for class-based BBS modules
 */

import { IQReactorOptions } from './reactor'

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
 * @IQModule decorator
 * Marks a class as an Iniquity module and stores configuration
 */
export function IQModule(options: IQModuleOptions) {
    return function (constructor: Function) {
        // Store metadata on the constructor
        moduleMetadata.set(constructor, options)
        
        // If data is provided, attach it to the prototype
        if (options.data) {
            (constructor.prototype as any).data = options.data
        }
        
        // If basepath is provided, attach it to the prototype
        if (options.basepath) {
            (constructor.prototype as any).basepath = options.basepath
        }
        
        // Store other options
        if (options.access !== undefined) {
            (constructor.prototype as any).access = options.access
        }
        
        if (options.encoding) {
            (constructor.prototype as any).encoding = options.encoding
        }
        
        if (options.computed) {
            (constructor.prototype as any).computed = options.computed
        }
    }
}

/**
 * @IQModuleRuntime decorator
 * Marks a method as the runtime entry point for a module
 */
export function IQModuleRuntime(options?: IQModuleRuntimeOptions) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
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
