# Class: IQFrame

[Core](../modules/Core.md).IQFrame

## Hierarchy

- **`IQFrame`**

  ↳ [`Frame`](Core.IQ.Core.Frame.md)

## Table of contents

### Constructors

- [constructor](Core.IQFrame.md#constructor)

### Properties

- [checkbounds](Core.IQFrame.md#checkbounds)
- [is\_open](Core.IQFrame.md#is_open)
- [scrollbars](Core.IQFrame.md#scrollbars)
- [transparent](Core.IQFrame.md#transparent)

### Methods

- [close](Core.IQFrame.md#close)
- [cycle](Core.IQFrame.md#cycle)
- [delete](Core.IQFrame.md#delete)
- [draw](Core.IQFrame.md#draw)
- [gotoxy](Core.IQFrame.md#gotoxy)
- [load](Core.IQFrame.md#load)
- [loop](Core.IQFrame.md#loop)
- [open](Core.IQFrame.md#open)
- [print](Core.IQFrame.md#print)
- [refresh](Core.IQFrame.md#refresh)
- [say](Core.IQFrame.md#say)

## Constructors

### constructor

• **new IQFrame**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQFrameOptions`](../interfaces/Core.IQFrameOptions.md) |

#### Defined in

[packages/core/src/index.ts:682](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L682)

## Properties

### checkbounds

• **checkbounds**: `boolean`

toggle true/false to restrict/allow frame movement outside display

#### Defined in

[packages/core/src/index.ts:680](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L680)

___

### is\_open

• **is\_open**: `boolean`

#### Defined in

[packages/core/src/index.ts:672](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L672)

___

### scrollbars

• **scrollbars**: `boolean`

#### Defined in

[packages/core/src/index.ts:674](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L674)

___

### transparent

• **transparent**: `boolean`

#### Defined in

[packages/core/src/index.ts:673](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L673)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:702](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L702)

___

### cycle

▸ **cycle**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:696](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L696)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:693](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L693)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

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

#### Defined in

[packages/core/src/index.ts:714](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L714)

___

### open

▸ **open**(): `void`

#### Returns

`void`

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

#### Defined in

[packages/core/src/index.ts:705](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L705)

___

### refresh

▸ **refresh**(): `void`

#### Returns

`void`

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

#### Defined in

[packages/core/src/index.ts:708](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L708)
