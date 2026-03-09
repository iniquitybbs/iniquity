# Interface: MCIContextProvider

[runtime/mci/context](../modules/runtime_mci_context.md).MCIContextProvider

Context provider interface for dynamic context updates

## Implemented by

- [`DefaultMCIContextProvider`](../classes/runtime_mci_context.DefaultMCIContextProvider.md)

## Table of contents

### Methods

- [getContext](runtime_mci_context.MCIContextProvider.md#getcontext)
- [getCustom](runtime_mci_context.MCIContextProvider.md#getcustom)
- [setBBS](runtime_mci_context.MCIContextProvider.md#setbbs)
- [setCustom](runtime_mci_context.MCIContextProvider.md#setcustom)
- [setFile](runtime_mci_context.MCIContextProvider.md#setfile)
- [setMessage](runtime_mci_context.MCIContextProvider.md#setmessage)
- [setNode](runtime_mci_context.MCIContextProvider.md#setnode)
- [setSystem](runtime_mci_context.MCIContextProvider.md#setsystem)
- [setTerminal](runtime_mci_context.MCIContextProvider.md#setterminal)
- [setUser](runtime_mci_context.MCIContextProvider.md#setuser)
- [updateContext](runtime_mci_context.MCIContextProvider.md#updatecontext)

## Methods

### getContext

▸ **getContext**(): [`MCIContext`](runtime_mci_context.MCIContext.md)

#### Returns

[`MCIContext`](runtime_mci_context.MCIContext.md)

#### Defined in

[core/src/mci/context.ts:352](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L352)

___

### getCustom

▸ **getCustom**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[core/src/mci/context.ts:362](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L362)

___

### setBBS

▸ **setBBS**(`bbs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bbs` | `Partial`<[`BBSContext`](runtime_mci_context.BBSContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:356](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L356)

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

#### Defined in

[core/src/mci/context.ts:361](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L361)

___

### setFile

▸ **setFile**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Partial`<[`FileContext`](runtime_mci_context.FileContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:359](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L359)

___

### setMessage

▸ **setMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Partial`<[`MessageContext`](runtime_mci_context.MessageContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:358](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L358)

___

### setNode

▸ **setNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Partial`<[`NodeContext`](runtime_mci_context.NodeContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:360](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L360)

___

### setSystem

▸ **setSystem**(`system`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `system` | `Partial`<[`SystemContext`](runtime_mci_context.SystemContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:355](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L355)

___

### setTerminal

▸ **setTerminal**(`terminal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `terminal` | `Partial`<[`TerminalContext`](runtime_mci_context.TerminalContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:357](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L357)

___

### setUser

▸ **setUser**(`user`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `Partial`<[`UserContext`](runtime_mci_context.UserContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:354](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L354)

___

### updateContext

▸ **updateContext**(`partial`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `partial` | `Partial`<[`MCIContext`](runtime_mci_context.MCIContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/context.ts:353](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/context.ts#L353)
