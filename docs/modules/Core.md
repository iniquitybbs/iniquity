# Module: Core

Iniquity Core

**`summary`** This is the Iniquity core bbs library. It's the foundation of any Iniquity application.

**`example`**
```typescript
import BBS from "@iniquitybbs/core"

const mybbs = new BBS()

myIniquity.artwork({ filename: "./path/to/textfile.ans" }).render({ speed: 10 })

myIniquity.say("Pretty cool, right???".newlines(2).color("bright cyan").center()).pause()

myIniquity.disconnect()
```

## Table of contents

### References

- [IQCoreAssets](Core.md#iqcoreassets)
- [IQCoreModules](Core.md#iqcoremodules)

### Namespaces

- [IQ](Core.IQ.md)

### Enumerations

- [IQFrameColorOptions](../enums/Core.IQFrameColorOptions.md)
- [IQModuleACLS](../enums/Core.IQModuleACLS.md)

### Classes

- [Artwork](../classes/Core.Artwork.md)
- [Group](../classes/Core.Group.md)
- [IQFrame](../classes/Core.IQFrame.md)
- [IQMenu](../classes/Core.IQMenu.md)
- [IQModuleContainer](../classes/Core.IQModuleContainer.md)
- [Iniquity](../classes/Core.Iniquity.md)
- [Network](../classes/Core.Network.md)
- [Text](../classes/Core.Text.md)
- [User](../classes/Core.User.md)

### Interfaces

- [IArtworkOptions](../interfaces/Core.IArtworkOptions.md)
- [IArtworkRenderFunctions](../interfaces/Core.IArtworkRenderFunctions.md)
- [IArtworkRenderOptions](../interfaces/Core.IArtworkRenderOptions.md)
- [IBBSConfigParams](../interfaces/Core.IBBSConfigParams.md)
- [IBBSPrintFunctions](../interfaces/Core.IBBSPrintFunctions.md)
- [IBBSSayFunctions](../interfaces/Core.IBBSSayFunctions.md)
- [IIniquityOptions](../interfaces/Core.IIniquityOptions.md)
- [IMenuCommand](../interfaces/Core.IMenuCommand.md)
- [IMenuCommands](../interfaces/Core.IMenuCommands.md)
- [IQCursorChainableMethods](../interfaces/Core.IQCursorChainableMethods.md)
- [IQCursorOptions](../interfaces/Core.IQCursorOptions.md)
- [IQFrameOptions](../interfaces/Core.IQFrameOptions.md)
- [IQMenuLoopMessageResponse](../interfaces/Core.IQMenuLoopMessageResponse.md)
- [IQMenuLoopOptions](../interfaces/Core.IQMenuLoopOptions.md)
- [IQMenuOptions](../interfaces/Core.IQMenuOptions.md)
- [IQMenuPromptFunctions](../interfaces/Core.IQMenuPromptFunctions.md)
- [IQMenuPromptOptions](../interfaces/Core.IQMenuPromptOptions.md)
- [IQModuleOptions](../interfaces/Core.IQModuleOptions.md)
- [IQModuleRuntimeOptions](../interfaces/Core.IQModuleRuntimeOptions.md)
- [IQPauseOptions](../interfaces/Core.IQPauseOptions.md)
- [IQPrintOptions](../interfaces/Core.IQPrintOptions.md)
- [IQStringUtils](../interfaces/Core.IQStringUtils.md)
- [IQTermInfoObject](../interfaces/Core.IQTermInfoObject.md)
- [IQWaitOptions](../interfaces/Core.IQWaitOptions.md)
- [IUserOptions](../interfaces/Core.IUserOptions.md)

### Variables

- [default](Core.md#default)

### Functions

- [IQModule](Core.md#iqmodule)
- [IQModuleRuntime](Core.md#iqmoduleruntime)
- [gotoxy](Core.md#gotoxy)
- [pause](Core.md#pause)
- [say](Core.md#say)
- [wait](Core.md#wait)

## References

### IQCoreAssets

• **IQCoreAssets**: `Object`

#### Defined in

[packages/core/src/index.ts:1125](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L1125)

___

### IQCoreModules

• **IQCoreModules**: `Object`

#### Defined in

[packages/core/src/index.ts:1126](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L1126)

## Variables

### default

• **default**: [`Iniquity`](../classes/Core.Iniquity.md)

The globally scoped intance of iniquity

#### Defined in

[packages/core/src/index.ts:1068](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L1068)

## Functions

### IQModule

▸ **IQModule**(`options?`): (`constructor`: `Function`) => `void`

An experimental Iniquity module decorator for bbs modules

**`author`** ispyhumanfly

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQModuleOptions`](../interfaces/Core.IQModuleOptions.md) |

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

[packages/core/src/index.ts:1091](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L1091)

___

### IQModuleRuntime

▸ **IQModuleRuntime**(`options?`): `any`

The IQ script executed as part of a module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQModuleRuntimeOptions`](../interfaces/Core.IQModuleRuntimeOptions.md) |

#### Returns

`any`

#### Defined in

[packages/core/src/index.ts:1109](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L1109)

___

### gotoxy

▸ **gotoxy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:960](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L960)

___

### pause

▸ **pause**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQPauseOptions`](../interfaces/Core.IQPauseOptions.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:964](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L964)

___

### say

▸ **say**(`options?`): [`IBBSSayFunctions`](../interfaces/Core.IBBSSayFunctions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`IBBSSayFunctions`](../interfaces/Core.IBBSSayFunctions.md)

#### Defined in

[packages/core/src/index.ts:948](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L948)

___

### wait

▸ **wait**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `number` \| [`IQWaitOptions`](../interfaces/Core.IQWaitOptions.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:967](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L967)
