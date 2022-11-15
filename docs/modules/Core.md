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

- [IBBSPrintFunctions](../interfaces/Core.IBBSPrintFunctions.md)
- [IBBSSayFunctions](../interfaces/Core.IBBSSayFunctions.md)
- [IMenuCommand](../interfaces/Core.IMenuCommand.md)
- [IMenuCommands](../interfaces/Core.IMenuCommands.md)
- [IQArtworkOptions](../interfaces/Core.IQArtworkOptions.md)
- [IQArtworkRenderFunctions](../interfaces/Core.IQArtworkRenderFunctions.md)
- [IQArtworkRenderOptions](../interfaces/Core.IQArtworkRenderOptions.md)
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
- [IQReactorOptions](../interfaces/Core.IQReactorOptions.md)
- [IQStringUtils](../interfaces/Core.IQStringUtils.md)
- [IQTermInfoObject](../interfaces/Core.IQTermInfoObject.md)
- [IQWaitOptions](../interfaces/Core.IQWaitOptions.md)
- [IUserOptions](../interfaces/Core.IUserOptions.md)

### Variables

- [default](Core.md#default)

### Functions

- [IQModule](Core.md#iqmodule)
- [IQModuleRuntime](Core.md#iqmoduleruntime)
- [IQReactor](Core.md#iqreactor)
- [cursor](Core.md#cursor)
- [gotoxy](Core.md#gotoxy)
- [pause](Core.md#pause)
- [randomAsset](Core.md#randomasset)
- [say](Core.md#say)
- [wait](Core.md#wait)

## References

### IQCoreAssets

• **IQCoreAssets**: `Object`

#### Defined in

[core/src/index.ts:1345](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1345)

## Variables

### default

• **default**: [`Iniquity`](../classes/Core.Iniquity.md)

The globally scoped intance of iniquity

#### Defined in

[core/src/index.ts:1296](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1296)

## Functions

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

[core/src/index.ts:1315](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1315)

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

[core/src/index.ts:1335](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1335)

___

### IQReactor

▸ **IQReactor**(`dataObj`): [`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

Iniquity reactive data model

**`see`** https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataObj` | `any` |

#### Returns

[`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

#### Defined in

[core/src/index.ts:102](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L102)

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

[core/src/index.ts:1144](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1144)

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

[core/src/index.ts:1148](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1148)

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

[core/src/index.ts:1152](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1152)

___

### randomAsset

▸ **randomAsset**(`assets`): `string`

Return a single asset random selected from an array of IQCoreAssets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assets` | `string`[] | An array of IQCoreAssets to choose from |

#### Returns

`string`

The randomly selected asset

#### Defined in

[core/src/index.ts:1424](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1424)

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

[core/src/index.ts:1122](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1122)

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

[core/src/index.ts:1155](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/core/src/index.ts#L1155)
