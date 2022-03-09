# Class: Menu

[IQ](../modules/Core.IQ.md).[Core](../modules/Core.IQ.Core.md).Menu

## Hierarchy

- [`IQMenu`](Core.IQMenu.md)

  ↳ **`Menu`**

## Table of contents

### Constructors

- [constructor](Core.IQ.Core.Menu.md#constructor)

### Properties

- [commands](Core.IQ.Core.Menu.md#commands)

### Methods

- [keypressed](Core.IQ.Core.Menu.md#keypressed)
- [prompt](Core.IQ.Core.Menu.md#prompt)
- [render](Core.IQ.Core.Menu.md#render)

## Constructors

### constructor

• **new Menu**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQMenuOptions`](../interfaces/Core.IQMenuOptions.md) |

#### Inherited from

[IQMenu](Core.IQMenu.md).[constructor](Core.IQMenu.md#constructor)

#### Defined in

[packages/core/src/index.ts:498](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L498)

## Properties

### commands

• **commands**: `Object`

#### Index signature

▪ [s: `string`]: (...`args`: `any`) => `any`

#### Inherited from

[IQMenu](Core.IQMenu.md).[commands](Core.IQMenu.md#commands)

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

#### Inherited from

[IQMenu](Core.IQMenu.md).[keypressed](Core.IQMenu.md#keypressed)

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

#### Inherited from

[IQMenu](Core.IQMenu.md).[prompt](Core.IQMenu.md#prompt)

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

#### Inherited from

[IQMenu](Core.IQMenu.md).[render](Core.IQMenu.md#render)

#### Defined in

[packages/core/src/index.ts:503](https://github.com/iniquitybbs/iniquity/blob/ab60d91/packages/core/src/index.ts#L503)
