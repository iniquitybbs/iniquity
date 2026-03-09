# Interface: IQReactorOptions

[runtime/reactor](../modules/runtime_reactor.md).IQReactorOptions

Reactor options interface

## Table of contents

### Properties

- [batch](runtime_reactor.IQReactorOptions.md#batch)
- [computed](runtime_reactor.IQReactorOptions.md#computed)
- [getObservers](runtime_reactor.IQReactorOptions.md#getobservers)
- [model](runtime_reactor.IQReactorOptions.md#model)
- [notify](runtime_reactor.IQReactorOptions.md#notify)
- [observe](runtime_reactor.IQReactorOptions.md#observe)
- [unobserve](runtime_reactor.IQReactorOptions.md#unobserve)

## Properties

### batch

• **batch**: (`fn`: () => `void`) => `void`

#### Type declaration

▸ (`fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` |

##### Returns

`void`

#### Defined in

[core/src/reactor.ts:24](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/reactor.ts#L24)

___

### computed

• **computed**: (`key`: `string`, `getter`: () => `any`, `dependencies?`: `string`[]) => `void`

#### Type declaration

▸ (`key`, `getter`, `dependencies?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `getter` | () => `any` |
| `dependencies?` | `string`[] |

##### Returns

`void`

#### Defined in

[core/src/reactor.ts:22](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/reactor.ts#L22)

___

### getObservers

• **getObservers**: () => { `[key: string]`: `Function`[];  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

#### Defined in

[core/src/reactor.ts:25](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/reactor.ts#L25)

___

### model

• **model**: `any`

#### Defined in

[core/src/reactor.ts:19](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/reactor.ts#L19)

___

### notify

• **notify**: (`key?`: `string`) => `void`

#### Type declaration

▸ (`key?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

##### Returns

`void`

#### Defined in

[core/src/reactor.ts:21](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/reactor.ts#L21)

___

### observe

• **observe**: (`key`: `string`, `callback`: `Function`) => `void`

#### Type declaration

▸ (`key`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `callback` | `Function` |

##### Returns

`void`

#### Defined in

[core/src/reactor.ts:20](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/reactor.ts#L20)

___

### unobserve

• **unobserve**: (`key`: `string`, `callback?`: `Function`) => `void`

#### Type declaration

▸ (`key`, `callback?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `callback?` | `Function` |

##### Returns

`void`

#### Defined in

[core/src/reactor.ts:23](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/reactor.ts#L23)
