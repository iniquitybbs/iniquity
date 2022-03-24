# Class: Frame

[IQ](../modules/Core.IQ.md).[Core](../modules/Core.IQ.Core.md).Frame

## Hierarchy

- [`IQFrame`](Core.IQFrame.md)

  ↳ **`Frame`**

## Table of contents

### Constructors

- [constructor](Core.IQ.Core.Frame.md#constructor)

### Properties

- [checkbounds](Core.IQ.Core.Frame.md#checkbounds)
- [color](Core.IQ.Core.Frame.md#color)
- [height](Core.IQ.Core.Frame.md#height)
- [is\_open](Core.IQ.Core.Frame.md#is_open)
- [scrollbars](Core.IQ.Core.Frame.md#scrollbars)
- [transparent](Core.IQ.Core.Frame.md#transparent)
- [width](Core.IQ.Core.Frame.md#width)
- [x](Core.IQ.Core.Frame.md#x)
- [y](Core.IQ.Core.Frame.md#y)

### Methods

- [close](Core.IQ.Core.Frame.md#close)
- [cycle](Core.IQ.Core.Frame.md#cycle)
- [delete](Core.IQ.Core.Frame.md#delete)
- [draw](Core.IQ.Core.Frame.md#draw)
- [gotoxy](Core.IQ.Core.Frame.md#gotoxy)
- [load](Core.IQ.Core.Frame.md#load)
- [loop](Core.IQ.Core.Frame.md#loop)
- [open](Core.IQ.Core.Frame.md#open)
- [print](Core.IQ.Core.Frame.md#print)
- [refresh](Core.IQ.Core.Frame.md#refresh)
- [say](Core.IQ.Core.Frame.md#say)

## Constructors

### constructor

• **new Frame**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQFrameOptions`](../interfaces/Core.IQFrameOptions.md) |

#### Inherited from

[IQFrame](Core.IQFrame.md).[constructor](Core.IQFrame.md#constructor)

#### Defined in

[packages/core/src/index.ts:689](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L689)

## Properties

### checkbounds

• **checkbounds**: `boolean`

toggle true/false to restrict/allow frame movement outside display

#### Inherited from

[IQFrame](Core.IQFrame.md).[checkbounds](Core.IQFrame.md#checkbounds)

#### Defined in

[packages/core/src/index.ts:687](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L687)

___

### color

• **color**: [`IQFrameColorOptions`](../enums/Core.IQFrameColorOptions.md)

#### Inherited from

[IQFrame](Core.IQFrame.md).[color](Core.IQFrame.md#color)

#### Defined in

[packages/core/src/index.ts:681](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L681)

___

### height

• **height**: `number`

#### Inherited from

[IQFrame](Core.IQFrame.md).[height](Core.IQFrame.md#height)

#### Defined in

[packages/core/src/index.ts:680](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L680)

___

### is\_open

• **is\_open**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[is_open](Core.IQFrame.md#is_open)

#### Defined in

[packages/core/src/index.ts:674](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L674)

___

### scrollbars

• **scrollbars**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[scrollbars](Core.IQFrame.md#scrollbars)

#### Defined in

[packages/core/src/index.ts:676](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L676)

___

### transparent

• **transparent**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[transparent](Core.IQFrame.md#transparent)

#### Defined in

[packages/core/src/index.ts:675](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L675)

___

### width

• **width**: `number`

#### Inherited from

[IQFrame](Core.IQFrame.md).[width](Core.IQFrame.md#width)

#### Defined in

[packages/core/src/index.ts:679](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L679)

___

### x

• **x**: `number`

#### Inherited from

[IQFrame](Core.IQFrame.md).[x](Core.IQFrame.md#x)

#### Defined in

[packages/core/src/index.ts:677](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L677)

___

### y

• **y**: `number`

#### Inherited from

[IQFrame](Core.IQFrame.md).[y](Core.IQFrame.md#y)

#### Defined in

[packages/core/src/index.ts:678](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L678)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[close](Core.IQFrame.md#close)

#### Defined in

[packages/core/src/index.ts:709](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L709)

___

### cycle

▸ **cycle**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[cycle](Core.IQFrame.md#cycle)

#### Defined in

[packages/core/src/index.ts:703](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L703)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[delete](Core.IQFrame.md#delete)

#### Defined in

[packages/core/src/index.ts:700](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L700)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[draw](Core.IQFrame.md#draw)

#### Defined in

[packages/core/src/index.ts:697](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L697)

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

#### Inherited from

[IQFrame](Core.IQFrame.md).[gotoxy](Core.IQFrame.md#gotoxy)

#### Defined in

[packages/core/src/index.ts:718](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L718)

___

### load

▸ **load**(`filename`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `any` |

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[load](Core.IQFrame.md#load)

#### Defined in

[packages/core/src/index.ts:730](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L730)

___

### loop

▸ **loop**(`runtime`, `interval?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runtime` | `Function` |
| `interval?` | `number` |

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[loop](Core.IQFrame.md#loop)

#### Defined in

[packages/core/src/index.ts:721](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L721)

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[open](Core.IQFrame.md#open)

#### Defined in

[packages/core/src/index.ts:694](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L694)

___

### print

▸ **print**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[print](Core.IQFrame.md#print)

#### Defined in

[packages/core/src/index.ts:712](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L712)

___

### refresh

▸ **refresh**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[refresh](Core.IQFrame.md#refresh)

#### Defined in

[packages/core/src/index.ts:706](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L706)

___

### say

▸ **say**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[say](Core.IQFrame.md#say)

#### Defined in

[packages/core/src/index.ts:715](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L715)
