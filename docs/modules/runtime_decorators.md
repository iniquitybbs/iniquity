# Module: runtime/decorators

Module Decorators

**`Summary`**

Decorators for class-based BBS modules

## Table of contents

### Enumerations

- [IQModuleACLS](../enums/runtime_decorators.IQModuleACLS.md)

### Interfaces

- [IQModuleOptions](../interfaces/runtime_decorators.IQModuleOptions.md)
- [IQModuleRuntimeOptions](../interfaces/runtime_decorators.IQModuleRuntimeOptions.md)

### Functions

- [IQModule](runtime_decorators.md#iqmodule)
- [IQModuleRuntime](runtime_decorators.md#iqmoduleruntime)
- [getModuleMetadata](runtime_decorators.md#getmodulemetadata)
- [getRuntimeMetadata](runtime_decorators.md#getruntimemetadata)

## Functions

### IQModule

▸ **IQModule**(`options`): (`constructor`: `Function`) => `void`

**`IQModule`**

decorator
Marks a class as an Iniquity module and stores configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQModuleOptions`](../interfaces/runtime_decorators.IQModuleOptions.md) |

#### Returns

`fn`

▸ (`constructor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `Function` |

##### Returns

`void`

#### Defined in

[core/src/decorators.ts:69](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/decorators.ts#L69)

___

### IQModuleRuntime

▸ **IQModuleRuntime**(`options?`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`IQModule Runtime`**

decorator
Marks a method as the runtime entry point for a module

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQModuleRuntimeOptions`](../interfaces/runtime_decorators.IQModuleRuntimeOptions.md) |

#### Returns

`fn`

▸ (`target`, `propertyKey`, `descriptor`): `PropertyDescriptor`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`PropertyDescriptor`

#### Defined in

[core/src/decorators.ts:105](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/decorators.ts#L105)

___

### getModuleMetadata

▸ **getModuleMetadata**(`constructor`): [`IQModuleOptions`](../interfaces/runtime_decorators.IQModuleOptions.md) \| `undefined`

Get module metadata for a constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `Function` |

#### Returns

[`IQModuleOptions`](../interfaces/runtime_decorators.IQModuleOptions.md) \| `undefined`

#### Defined in

[core/src/decorators.ts:140](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/decorators.ts#L140)

___

### getRuntimeMetadata

▸ **getRuntimeMetadata**(`method`): [`IQModuleRuntimeOptions`](../interfaces/runtime_decorators.IQModuleRuntimeOptions.md) \| `undefined`

Get runtime metadata for a method

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `Function` |

#### Returns

[`IQModuleRuntimeOptions`](../interfaces/runtime_decorators.IQModuleRuntimeOptions.md) \| `undefined`

#### Defined in

[core/src/decorators.ts:147](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/decorators.ts#L147)
