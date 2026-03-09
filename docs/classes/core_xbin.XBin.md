# Class: XBin

[core/xbin](../modules/core_xbin.md).XBin

XBin class for reading and displaying XBin images

## Table of contents

### Constructors

- [constructor](core_xbin.XBin.md#constructor)

### Properties

- [FLAG\_COMPRESS](core_xbin.XBin.md#flag_compress)
- [FLAG\_FONT](core_xbin.XBin.md#flag_font)
- [FLAG\_FONT\_512](core_xbin.XBin.md#flag_font_512)
- [FLAG\_NONBLINK](core_xbin.XBin.md#flag_nonblink)
- [FLAG\_PALETTE](core_xbin.XBin.md#flag_palette)
- [ID](core_xbin.XBin.md#id)
- [ID\_LENGTH](core_xbin.XBin.md#id_length)

### Methods

- [cleanup](core_xbin.XBin.md#cleanup)
- [create](core_xbin.XBin.md#create)
- [display](core_xbin.XBin.md#display)
- [getInfo](core_xbin.XBin.md#getinfo)
- [isXBin](core_xbin.XBin.md#isxbin)
- [isXBinData](core_xbin.XBin.md#isxbindata)
- [parse](core_xbin.XBin.md#parse)
- [read](core_xbin.XBin.md#read)

## Constructors

### constructor

• **new XBin**()

## Properties

### FLAG\_COMPRESS

▪ `Static` `Readonly` **FLAG\_COMPRESS**: ``4``

#### Defined in

[core/src/xbin.ts:115](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L115)

___

### FLAG\_FONT

▪ `Static` `Readonly` **FLAG\_FONT**: ``2``

#### Defined in

[core/src/xbin.ts:114](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L114)

___

### FLAG\_FONT\_512

▪ `Static` `Readonly` **FLAG\_FONT\_512**: ``16``

#### Defined in

[core/src/xbin.ts:117](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L117)

___

### FLAG\_NONBLINK

▪ `Static` `Readonly` **FLAG\_NONBLINK**: ``8``

#### Defined in

[core/src/xbin.ts:116](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L116)

___

### FLAG\_PALETTE

▪ `Static` `Readonly` **FLAG\_PALETTE**: ``1``

Flag constants

#### Defined in

[core/src/xbin.ts:113](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L113)

___

### ID

▪ `Static` `Readonly` **ID**: ``"XBIN\u001a"``

XBin file signature

#### Defined in

[core/src/xbin.ts:107](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L107)

___

### ID\_LENGTH

▪ `Static` `Readonly` **ID\_LENGTH**: ``5``

#### Defined in

[core/src/xbin.ts:108](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L108)

## Methods

### cleanup

▸ `Static` **cleanup**(`output`): `void`

Clean up after displaying XBin (reset fonts and palette)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |

#### Returns

`void`

#### Defined in

[core/src/xbin.ts:478](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L478)

___

### create

▸ `Static` **create**(`graphic`, `charHeight?`, `palette?`, `fonts?`): `Buffer`

Create an XBin file from a Graphic

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphic` | [`Graphic`](core_graphic.Graphic.md) | `undefined` |
| `charHeight` | `number` | `16` |
| `palette?` | [`XBinPalette`](../interfaces/core_xbin.XBinPalette.md) | `undefined` |
| `fonts?` | `Buffer`[] | `undefined` |

#### Returns

`Buffer`

#### Defined in

[core/src/xbin.ts:407](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L407)

___

### display

▸ `Static` **display**(`output`, `image`, `x?`, `y?`, `loadFonts?`): `boolean`

Display an XBin image

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) | `undefined` |
| `image` | [`XBinImage`](../interfaces/core_xbin.XBinImage.md) | `undefined` |
| `x` | `number` | `1` |
| `y` | `number` | `1` |
| `loadFonts` | `boolean` | `true` |

#### Returns

`boolean`

#### Defined in

[core/src/xbin.ts:304](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L304)

___

### getInfo

▸ `Static` **getInfo**(`filename`): ``null`` \| [`XBinHeader`](../interfaces/core_xbin.XBinHeader.md)

Get info about an XBin file without fully parsing it

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

``null`` \| [`XBinHeader`](../interfaces/core_xbin.XBinHeader.md)

#### Defined in

[core/src/xbin.ts:375](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L375)

___

### isXBin

▸ `Static` **isXBin**(`filename`): `boolean`

Check if a file is an XBin file

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/xbin.ts:352](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L352)

___

### isXBinData

▸ `Static` **isXBinData**(`data`): `boolean`

Check if buffer contains XBin data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |

#### Returns

`boolean`

#### Defined in

[core/src/xbin.ts:367](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L367)

___

### parse

▸ `Static` **parse**(`buffer`): ``null`` \| [`XBinImage`](../interfaces/core_xbin.XBinImage.md)

Parse XBin data from a buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

``null`` \| [`XBinImage`](../interfaces/core_xbin.XBinImage.md)

#### Defined in

[core/src/xbin.ts:134](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L134)

___

### read

▸ `Static` **read**(`filename`): ``null`` \| [`XBinImage`](../interfaces/core_xbin.XBinImage.md)

Read an XBin file

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

``null`` \| [`XBinImage`](../interfaces/core_xbin.XBinImage.md)

#### Defined in

[core/src/xbin.ts:122](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/xbin.ts#L122)
