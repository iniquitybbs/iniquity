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

[packages/core/src/index.ts:197](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L197)

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

[packages/core/src/index.ts:201](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L201)

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

[packages/core/src/index.ts:199](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L199)

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

[packages/core/src/index.ts:193](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L193)

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

[packages/core/src/index.ts:200](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L200)
