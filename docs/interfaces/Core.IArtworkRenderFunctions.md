# Interface: IArtworkRenderFunctions

[Core](../modules/Core.md).IArtworkRenderFunctions

Additional functions exported by render

**`function`** pause What pause does.

**`function`** colorReset Resets the current lines screen color back to normal.

## Table of contents

### Methods

- [colorReset](Core.IArtworkRenderFunctions.md#colorreset)
- [cursor](Core.IArtworkRenderFunctions.md#cursor)
- [gotoxy](Core.IArtworkRenderFunctions.md#gotoxy)
- [pause](Core.IArtworkRenderFunctions.md#pause)
- [prompt](Core.IArtworkRenderFunctions.md#prompt)

## Methods

### colorReset

▸ **colorReset**(): `void`

Resets the screen color

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:179](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L179)

___

### cursor

▸ **cursor**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:183](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L183)

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

[packages/core/src/index.ts:181](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L181)

___

### pause

▸ **pause**(`options?`): `void`

**`see`** [IQPauseOptions](Core.IQPauseOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQPauseOptions`](Core.IQPauseOptions.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:175](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L175)

___

### prompt

▸ **prompt**(`x`, `y`, `text?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `text?` | `string` |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:182](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L182)
