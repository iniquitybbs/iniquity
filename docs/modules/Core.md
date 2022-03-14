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

- [IArtworkOptions](../interfaces/Core.IArtworkOptions.md)
- [IArtworkRenderFunctions](../interfaces/Core.IArtworkRenderFunctions.md)
- [IArtworkRenderOptions](../interfaces/Core.IArtworkRenderOptions.md)
- [IBBSPrintFunctions](../interfaces/Core.IBBSPrintFunctions.md)
- [IBBSSayFunctions](../interfaces/Core.IBBSSayFunctions.md)
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
- [say](Core.md#say)
- [wait](Core.md#wait)

## References

### IQCoreAssets

• **IQCoreAssets**: `Object`

#### Defined in

[packages/core/src/index.ts:1283](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1283)

## Variables

### default

• **default**: [`Iniquity`](../classes/Core.Iniquity.md)

The globally scoped intance of iniquity

#### Defined in

[packages/core/src/index.ts:1234](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1234)

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

[packages/core/src/index.ts:1253](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1253)

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

[packages/core/src/index.ts:1273](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1273)

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

[packages/core/src/index.ts:86](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L86)

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

[packages/core/src/index.ts:1106](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1106)

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

[packages/core/src/index.ts:1110](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1110)

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

[packages/core/src/index.ts:1114](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1114)

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

[packages/core/src/index.ts:1084](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1084)

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

[packages/core/src/index.ts:1117](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L1117)
