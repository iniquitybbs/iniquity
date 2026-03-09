# Interface: IBBSSayFunctions

[core](../modules/core.md).IBBSSayFunctions

Chainable functions returned by say/print

## Table of contents

### Methods

- [gotoxy](core.IBBSSayFunctions.md#gotoxy)
- [pause](core.IBBSSayFunctions.md#pause)
- [wait](core.IBBSSayFunctions.md#wait)

## Methods

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

[core/src/core.ts:50](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/core.ts#L50)

___

### pause

▸ **pause**(`optionsOrPrompt?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrPrompt?` | `string` \| [`IQPauseOptions`](core.IQPauseOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/core.ts:48](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/core.ts#L48)

___

### wait

▸ **wait**(`ms?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/core.ts:49](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/core.ts#L49)
