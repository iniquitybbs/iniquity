# Class: IQMenu

[Core](../modules/Core.md).IQMenu

## Hierarchy

- **`IQMenu`**

  ↳ [`Menu`](Core.IQ.Core.Menu.md)

## Table of contents

### Constructors

- [constructor](Core.IQMenu.md#constructor)

### Properties

- [commands](Core.IQMenu.md#commands)

### Methods

- [keypressed](Core.IQMenu.md#keypressed)
- [prompt](Core.IQMenu.md#prompt)
- [render](Core.IQMenu.md#render)

## Constructors

### constructor

• **new IQMenu**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQMenuOptions`](../interfaces/Core.IQMenuOptions.md) |

#### Defined in

[packages/core/src/index.ts:498](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L498)

## Properties

### commands

• **commands**: `Object`

#### Index signature

▪ [s: `string`]: (...`args`: `any`) => `any`

#### Defined in

[packages/core/src/index.ts:496](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L496)

## Methods

### keypressed

▸ **keypressed**(`cmdkeys?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmdkeys` | ``null`` \| `string` |

#### Returns

`string`

#### Defined in

[packages/core/src/index.ts:567](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L567)

___

### prompt

▸ **prompt**(`options`): [`IQMenuPromptFunctions`](../interfaces/Core.IQMenuPromptFunctions.md)

Will render a prompt to the screen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`IQMenuPromptOptions`](../interfaces/Core.IQMenuPromptOptions.md) |

#### Returns

[`IQMenuPromptFunctions`](../interfaces/Core.IQMenuPromptFunctions.md)

Some functions that can be chained to the prompt.

#### Defined in

[packages/core/src/index.ts:535](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L535)

___

### render

▸ **render**(`module`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `Function` |
| `options?` | [`IQMenuLoopOptions`](../interfaces/Core.IQMenuLoopOptions.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:503](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L503)
