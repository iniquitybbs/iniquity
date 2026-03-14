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

[core/src/core.ts:70](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/core.ts#L70)

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

[core/src/core.ts:68](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/core.ts#L68)

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

[core/src/core.ts:69](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/core.ts#L69)
