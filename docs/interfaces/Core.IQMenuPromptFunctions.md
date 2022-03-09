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

[packages/core/src/index.ts:139](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L139)

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

[packages/core/src/index.ts:131](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L131)
