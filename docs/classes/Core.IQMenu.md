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

[packages/core/src/index.ts:581](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L581)

## Properties

### commands

• **commands**: `Object`

#### Index signature

▪ [s: `string`]: (...`args`: `any`) => `any`

#### Defined in

[packages/core/src/index.ts:579](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L579)

___

### description

• `Optional` **description**: `string`

#### Defined in

[packages/core/src/index.ts:577](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L577)

___

### name

• `Optional` **name**: `string`

#### Defined in

[packages/core/src/index.ts:576](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L576)

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

[packages/core/src/index.ts:662](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L662)

___

### prompt

▸ **prompt**(`options`): [`IQMenuPromptFunctions`](../interfaces/Core.IQMenuPromptFunctions.md)

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
| `options` | `string` \| [`IQMenuPromptOptions`](../interfaces/Core.IQMenuPromptOptions.md) |

#### Returns

[`IQMenuPromptFunctions`](../interfaces/Core.IQMenuPromptFunctions.md)

Functions that can be chained to the prompt.

#### Defined in

[packages/core/src/index.ts:629](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L629)

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

[packages/core/src/index.ts:588](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L588)
