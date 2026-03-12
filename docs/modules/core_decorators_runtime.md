# Module: core/decorators-runtime

Runtime Utility Decorators

**`Summary`**

Utility decorators for runtime class enhancement

## Table of contents

### Functions

- [Cached](core_decorators_runtime.md#cached)
- [Debounce](core_decorators_runtime.md#debounce)
- [Lifecycle](core_decorators_runtime.md#lifecycle)
- [Measure](core_decorators_runtime.md#measure)
- [Retry](core_decorators_runtime.md#retry)
- [Synchronized](core_decorators_runtime.md#synchronized)
- [Throttle](core_decorators_runtime.md#throttle)
- [Timeout](core_decorators_runtime.md#timeout)
- [Transaction](core_decorators_runtime.md#transaction)
- [Validate](core_decorators_runtime.md#validate)

## Functions

### Cached

▸ **Cached**(`options?`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Cached`**

- Cache method results with optional TTL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Cache configuration |
| `options.keyGenerator?` | (`args`: `any`[]) => `string` | - |
| `options.ttl?` | `number` | - |

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

[core/src/decorators-runtime.ts:31](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L31)

___

### Debounce

▸ **Debounce**(`ms`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Debounce`**

- Debounce method calls

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | Debounce delay in milliseconds |

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

[core/src/decorators-runtime.ts:262](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L262)

___

### Lifecycle

▸ **Lifecycle**(`openMethod`, `closeMethod`): (`constructor`: `Function`) => `void`

**`Lifecycle`**

- Track open/close state for stateful components

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openMethod` | `string` | Name of the open method |
| `closeMethod` | `string` | Name of the close method |

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

[core/src/decorators-runtime.ts:110](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L110)

___

### Measure

▸ **Measure**(`label?`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Measure`**

- Performance monitoring for methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label?` | `string` | Optional label for logging |

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

[core/src/decorators-runtime.ts:60](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L60)

___

### Retry

▸ **Retry**(`options?`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Retry`**

- Automatic retry on failure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Retry configuration |
| `options.delay?` | `number` | - |
| `options.maxAttempts?` | `number` | - |

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

[core/src/decorators-runtime.ts:211](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L211)

___

### Synchronized

▸ **Synchronized**(): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Synchronized`**

- Prevent concurrent execution with queue

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

[core/src/decorators-runtime.ts:164](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L164)

___

### Throttle

▸ **Throttle**(`ms`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Throttle`**

- Throttle method calls

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | Minimum time between calls |

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

[core/src/decorators-runtime.ts:285](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L285)

___

### Timeout

▸ **Timeout**(`ms`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Timeout`**

- Add timeout to async operations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | Timeout in milliseconds |

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

[core/src/decorators-runtime.ts:243](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L243)

___

### Transaction

▸ **Transaction**(): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Transaction`**

- Wrap database operations with transaction semantics

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

[core/src/decorators-runtime.ts:143](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L143)

___

### Validate

▸ **Validate**(`validator`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Validate`**

- Input validation decorator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | (`args`: `any`[]) => `string` \| `boolean` | Validation function returning true or error message |

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

[core/src/decorators-runtime.ts:88](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/decorators-runtime.ts#L88)
