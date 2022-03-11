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
- [IQ](../classes/Core.IQ-1.md)
- [IQBaseConfig](../classes/Core.IQBaseConfig.md)
- [IQFrame](../classes/Core.IQFrame.md)
- [IQMenu](../classes/Core.IQMenu.md)
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
- [IMenuCommand](../interfaces/Core.IMenuCommand.md)
- [IMenuCommands](../interfaces/Core.IMenuCommands.md)
- [IQCursorChainableMethods](../interfaces/Core.IQCursorChainableMethods.md)
- [IQCursorOptions](../interfaces/Core.IQCursorOptions.md)
- [IQDataModelOptions](../interfaces/Core.IQDataModelOptions.md)
- [IQFrameOptions](../interfaces/Core.IQFrameOptions.md)
- [IQMenuLoopMessageResponse](../interfaces/Core.IQMenuLoopMessageResponse.md)
- [IQMenuLoopOptions](../interfaces/Core.IQMenuLoopOptions.md)
- [IQMenuOptions](../interfaces/Core.IQMenuOptions.md)
- [IQMenuPromptFunctions](../interfaces/Core.IQMenuPromptFunctions.md)
- [IQMenuPromptOptions](../interfaces/Core.IQMenuPromptOptions.md)
- [IQModuleOptions](../interfaces/Core.IQModuleOptions.md)
- [IQModuleRuntimeOptions](../interfaces/Core.IQModuleRuntimeOptions.md)
- [IQOptions](../interfaces/Core.IQOptions.md)
- [IQPauseOptions](../interfaces/Core.IQPauseOptions.md)
- [IQPrintOptions](../interfaces/Core.IQPrintOptions.md)
- [IQStringUtils](../interfaces/Core.IQStringUtils.md)
- [IQTermInfoObject](../interfaces/Core.IQTermInfoObject.md)
- [IQWaitOptions](../interfaces/Core.IQWaitOptions.md)
- [IUserOptions](../interfaces/Core.IUserOptions.md)

### Variables

- [default](Core.md#default)

### Functions

- [IQDataModel](Core.md#iqdatamodel)
- [IQModule](Core.md#iqmodule)
- [IQModuleRuntime](Core.md#iqmoduleruntime)
- [cursor](Core.md#cursor)
- [gotoxy](Core.md#gotoxy)
- [pause](Core.md#pause)
- [say](Core.md#say)
- [wait](Core.md#wait)

## References

### IQCoreAssets

• **IQCoreAssets**: `Object`

#### Defined in

[packages/core/src/index.ts:1236](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1236)

___

### IQCoreModules

• **IQCoreModules**: `Object`

#### Defined in

[packages/core/src/index.ts:1237](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1237)

## Variables

### default

• **default**: [`Iniquity`](../classes/Core.Iniquity.md)

The globally scoped intance of iniquity

#### Defined in

[packages/core/src/index.ts:1181](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1181)

## Functions

### IQDataModel

▸ **IQDataModel**(`dataObj`): [`IQDataModelOptions`](../interfaces/Core.IQDataModelOptions.md)

Iniquity reactive data model

**`see`** https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataObj` | `any` |

#### Returns

[`IQDataModelOptions`](../interfaces/Core.IQDataModelOptions.md)

#### Defined in

[packages/core/src/index.ts:68](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L68)

___

### IQModule

▸ **IQModule**(`options`): (`constructor`: `Function`) => `void`

An experimental Iniquity module decorator for bbs modules

**`author`** ispyhumanfly

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQModuleOptions`](../interfaces/Core.IQModuleOptions.md) |

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

[packages/core/src/index.ts:1206](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1206)

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

[packages/core/src/index.ts:1226](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1226)

___

### cursor

▸ **cursor**(`options?`): [`IQCursorChainableMethods`](../interfaces/Core.IQCursorChainableMethods.md)

A pretty cool method for working with cursor movement.

**`example`**
cursor().down(10).up(12).down().up().down().left(1).right(20).down(12).up(14)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQCursorOptions`](../interfaces/Core.IQCursorOptions.md) |

#### Returns

[`IQCursorChainableMethods`](../interfaces/Core.IQCursorChainableMethods.md)

#### Defined in

[packages/core/src/index.ts:1068](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1068)

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

[packages/core/src/index.ts:1072](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1072)

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

[packages/core/src/index.ts:1076](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1076)

___

### say

▸ **say**(`options?`): [`IBBSSayFunctions`](../interfaces/Core.IBBSSayFunctions.md)

Say whatever you want, but to the screen

**`example`**
say("are we making it here?").pause()

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`IBBSSayFunctions`](../interfaces/Core.IBBSSayFunctions.md)

#### Defined in

[packages/core/src/index.ts:1049](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1049)

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

[packages/core/src/index.ts:1079](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L1079)
