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
- [is\_open](Core.IQ.Core.Frame.md#is_open)
- [scrollbars](Core.IQ.Core.Frame.md#scrollbars)
- [transparent](Core.IQ.Core.Frame.md#transparent)

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

[packages/core/src/index.ts:682](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L682)

## Properties

### checkbounds

• **checkbounds**: `boolean`

toggle true/false to restrict/allow frame movement outside display

#### Inherited from

[IQFrame](Core.IQFrame.md).[checkbounds](Core.IQFrame.md#checkbounds)

#### Defined in

[packages/core/src/index.ts:680](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L680)

___

### is\_open

• **is\_open**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[is_open](Core.IQFrame.md#is_open)

#### Defined in

[packages/core/src/index.ts:672](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L672)

___

### scrollbars

• **scrollbars**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[scrollbars](Core.IQFrame.md#scrollbars)

#### Defined in

[packages/core/src/index.ts:674](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L674)

___

### transparent

• **transparent**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[transparent](Core.IQFrame.md#transparent)

#### Defined in

[packages/core/src/index.ts:673](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L673)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[close](Core.IQFrame.md#close)

#### Defined in

[packages/core/src/index.ts:702](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L702)

___

### cycle

▸ **cycle**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[cycle](Core.IQFrame.md#cycle)

#### Defined in

[packages/core/src/index.ts:696](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L696)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[delete](Core.IQFrame.md#delete)

#### Defined in

[packages/core/src/index.ts:693](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L693)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[draw](Core.IQFrame.md#draw)

#### Defined in

[packages/core/src/index.ts:690](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L690)

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

[packages/core/src/index.ts:711](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L711)

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

[packages/core/src/index.ts:723](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L723)

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

[packages/core/src/index.ts:714](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L714)

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[open](Core.IQFrame.md#open)

#### Defined in

[packages/core/src/index.ts:687](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L687)

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

[packages/core/src/index.ts:705](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L705)

___

### refresh

▸ **refresh**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[refresh](Core.IQFrame.md#refresh)

#### Defined in

[packages/core/src/index.ts:699](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L699)

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

[packages/core/src/index.ts:708](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L708)
