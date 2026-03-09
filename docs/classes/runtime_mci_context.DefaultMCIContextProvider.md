# Class: DefaultMCIContextProvider

[runtime/mci/context](../modules/runtime_mci_context.md).DefaultMCIContextProvider

Default context provider implementation

## Implements

- [`MCIContextProvider`](../interfaces/runtime_mci_context.MCIContextProvider.md)

## Table of contents

### Constructors

- [constructor](runtime_mci_context.DefaultMCIContextProvider.md#constructor)

### Methods

- [getContext](runtime_mci_context.DefaultMCIContextProvider.md#getcontext)
- [getCustom](runtime_mci_context.DefaultMCIContextProvider.md#getcustom)
- [setBBS](runtime_mci_context.DefaultMCIContextProvider.md#setbbs)
- [setCustom](runtime_mci_context.DefaultMCIContextProvider.md#setcustom)
- [setFile](runtime_mci_context.DefaultMCIContextProvider.md#setfile)
- [setMessage](runtime_mci_context.DefaultMCIContextProvider.md#setmessage)
- [setNode](runtime_mci_context.DefaultMCIContextProvider.md#setnode)
- [setSystem](runtime_mci_context.DefaultMCIContextProvider.md#setsystem)
- [setTerminal](runtime_mci_context.DefaultMCIContextProvider.md#setterminal)
- [setUser](runtime_mci_context.DefaultMCIContextProvider.md#setuser)
- [updateContext](runtime_mci_context.DefaultMCIContextProvider.md#updatecontext)

## Constructors

### constructor

• **new DefaultMCIContextProvider**(`initialContext?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialContext?` | `Partial`<[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)\> |

#### Defined in

[core/src/mci/context.ts:391](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L391)

## Methods

### getContext

▸ **getContext**(): [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

#### Returns

[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[getContext](../interfaces/runtime_mci_context.MCIContextProvider.md#getcontext)

#### Defined in

[core/src/mci/context.ts:398](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L398)

___

### getCustom

▸ **getCustom**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[getCustom](../interfaces/runtime_mci_context.MCIContextProvider.md#getcustom)

#### Defined in

[core/src/mci/context.ts:441](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L441)

___

### setBBS

▸ **setBBS**(`bbs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bbs` | `Partial`<[`BBSContext`](../interfaces/runtime_mci_context.BBSContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setBBS](../interfaces/runtime_mci_context.MCIContextProvider.md#setbbs)

#### Defined in

[core/src/mci/context.ts:414](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L414)

___

### setCustom

▸ **setCustom**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setCustom](../interfaces/runtime_mci_context.MCIContextProvider.md#setcustom)

#### Defined in

[core/src/mci/context.ts:434](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L434)

___

### setFile

▸ **setFile**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Partial`<[`FileContext`](../interfaces/runtime_mci_context.FileContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setFile](../interfaces/runtime_mci_context.MCIContextProvider.md#setfile)

#### Defined in

[core/src/mci/context.ts:426](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L426)

___

### setMessage

▸ **setMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Partial`<[`MessageContext`](../interfaces/runtime_mci_context.MessageContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setMessage](../interfaces/runtime_mci_context.MCIContextProvider.md#setmessage)

#### Defined in

[core/src/mci/context.ts:422](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L422)

___

### setNode

▸ **setNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Partial`<[`NodeContext`](../interfaces/runtime_mci_context.NodeContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setNode](../interfaces/runtime_mci_context.MCIContextProvider.md#setnode)

#### Defined in

[core/src/mci/context.ts:430](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L430)

___

### setSystem

▸ **setSystem**(`system`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `system` | `Partial`<[`SystemContext`](../interfaces/runtime_mci_context.SystemContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setSystem](../interfaces/runtime_mci_context.MCIContextProvider.md#setsystem)

#### Defined in

[core/src/mci/context.ts:410](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L410)

___

### setTerminal

▸ **setTerminal**(`terminal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `terminal` | `Partial`<[`TerminalContext`](../interfaces/runtime_mci_context.TerminalContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setTerminal](../interfaces/runtime_mci_context.MCIContextProvider.md#setterminal)

#### Defined in

[core/src/mci/context.ts:418](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L418)

___

### setUser

▸ **setUser**(`user`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `Partial`<[`UserContext`](../interfaces/runtime_mci_context.UserContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[setUser](../interfaces/runtime_mci_context.MCIContextProvider.md#setuser)

#### Defined in

[core/src/mci/context.ts:406](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L406)

___

### updateContext

▸ **updateContext**(`partial`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `partial` | `Partial`<[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)\> |

#### Returns

`void`

#### Implementation of

[MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md).[updateContext](../interfaces/runtime_mci_context.MCIContextProvider.md#updatecontext)

#### Defined in

[core/src/mci/context.ts:402](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L402)
