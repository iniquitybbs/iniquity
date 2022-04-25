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
- [description](Core.IQ.Core.Menu.md#description)
- [name](Core.IQ.Core.Menu.md#name)

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

[packages/core/src/index.ts:616](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L616)

## Properties

### commands

• **commands**: `Object`

#### Index signature

▪ [s: `string`]: (...`args`: `any`) => `any`

#### Inherited from

[IQMenu](Core.IQMenu.md).[commands](Core.IQMenu.md#commands)

#### Defined in

[packages/core/src/index.ts:614](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L614)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[IQMenu](Core.IQMenu.md).[description](Core.IQMenu.md#description)

#### Defined in

[packages/core/src/index.ts:612](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L612)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IQMenu](Core.IQMenu.md).[name](Core.IQMenu.md#name)

#### Defined in

[packages/core/src/index.ts:611](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L611)

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

[packages/core/src/index.ts:698](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L698)

___

### prompt

▸ **prompt**(`options?`): [`IQMenuPromptFunctions`](../interfaces/Core.IQMenuPromptFunctions.md)

Will render a prompt to the screen.

**`example`**
menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey)
menu.prompt({ text: "Enter your command: ".color("bright cyan"), x: 20, y: 20 }).command(cmdkey)
menu.prompt({ x: 20, y: 30, text: "Feed me: " }).command(cmdkey, (response, error) => {
     if (response.error) {
         alert(errors)
     }
 })

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| [`IQMenuPromptOptions`](../interfaces/Core.IQMenuPromptOptions.md) |

#### Returns

[`IQMenuPromptFunctions`](../interfaces/Core.IQMenuPromptFunctions.md)

Functions that can be chained to the prompt.

#### Inherited from

[IQMenu](Core.IQMenu.md).[prompt](Core.IQMenu.md#prompt)

#### Defined in

[packages/core/src/index.ts:665](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L665)

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

[packages/core/src/index.ts:623](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L623)
