# Interface: IQMenuPromptFunctions

[Core](../modules/Core.md).IQMenuPromptFunctions

## Table of contents

### Methods

- [command](Core.IQMenuPromptFunctions.md#command)
- [gotoxy](Core.IQMenuPromptFunctions.md#gotoxy)

## Methods

### command

▸ **command**(`command`, `callback?`): `void`

Execute a menu command, with optional callback for working with response data.
This function can also be chained with .gotoxy()

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Function` |
| `callback?` | `Function` |

#### Returns

`void`

#### Defined in

[core/src/index.ts:258](https://github.com/iniquitybbs/iniquity/blob/722e6ba/packages/core/src/index.ts#L258)

___

### gotoxy

▸ **gotoxy**(`x`, `y`): `any`

Go to the specified coordinates on the terminal.
This function can also be chained with .command()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Width coordinates. |
| `y` | `number` | Height coordinates. |

#### Returns

`any`

#### Defined in

[core/src/index.ts:250](https://github.com/iniquitybbs/iniquity/blob/722e6ba/packages/core/src/index.ts#L250)
