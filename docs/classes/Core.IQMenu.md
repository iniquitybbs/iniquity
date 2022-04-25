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
- [description](Core.IQMenu.md#description)
- [name](Core.IQMenu.md#name)

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

[packages/core/src/index.ts:616](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L616)

## Properties

### commands

• **commands**: `Object`

#### Index signature

▪ [s: `string`]: (...`args`: `any`) => `any`

#### Defined in

[packages/core/src/index.ts:614](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L614)

___

### description

• `Optional` **description**: `string`

#### Defined in

[packages/core/src/index.ts:612](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L612)

___

### name

• `Optional` **name**: `string`

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

#### Defined in

[packages/core/src/index.ts:623](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L623)
