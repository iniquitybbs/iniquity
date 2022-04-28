# Interface: IQArtworkRenderFunctions

[Core](../modules/Core.md).IQArtworkRenderFunctions

Additional functions exported by render

**`function`** pause What pause does.

**`function`** colorReset Resets the current lines screen color back to normal.

## Table of contents

### Methods

- [colorReset](Core.IQArtworkRenderFunctions.md#colorreset)
- [cursor](Core.IQArtworkRenderFunctions.md#cursor)
- [gotoxy](Core.IQArtworkRenderFunctions.md#gotoxy)
- [pause](Core.IQArtworkRenderFunctions.md#pause)
- [prompt](Core.IQArtworkRenderFunctions.md#prompt)

## Methods

### colorReset

▸ **colorReset**(): `void`

Resets the screen color

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:234](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L234)

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

[packages/core/src/index.ts:238](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L238)

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

[packages/core/src/index.ts:236](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L236)

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

[packages/core/src/index.ts:230](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L230)

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

[packages/core/src/index.ts:237](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L237)
