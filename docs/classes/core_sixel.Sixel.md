# Class: Sixel

[core/sixel](../modules/core_sixel.md).Sixel

Sixel class for terminal graphics

## Table of contents

### Constructors

- [constructor](core_sixel.Sixel.md#constructor)

### Properties

- [DCS](core_sixel.Sixel.md#dcs)
- [MIN\_VERSION](core_sixel.Sixel.md#min_version)
- [SIXEL\_START](core_sixel.Sixel.md#sixel_start)
- [ST](core_sixel.Sixel.md#st)

### Methods

- [carriageReturn](core_sixel.Sixel.md#carriagereturn)
- [colorDefinition](core_sixel.Sixel.md#colordefinition)
- [colorSelect](core_sixel.Sixel.md#colorselect)
- [display](core_sixel.Sixel.md#display)
- [displayBuffer](core_sixel.Sixel.md#displaybuffer)
- [encodeRepeat](core_sixel.Sixel.md#encoderepeat)
- [encodeSixel](core_sixel.Sixel.md#encodesixel)
- [generateTestPattern](core_sixel.Sixel.md#generatetestpattern)
- [header](core_sixel.Sixel.md#header)
- [isSixelData](core_sixel.Sixel.md#issixeldata)
- [isSupported](core_sixel.Sixel.md#issupported)
- [lineFeed](core_sixel.Sixel.md#linefeed)
- [parseInfo](core_sixel.Sixel.md#parseinfo)
- [stripSixel](core_sixel.Sixel.md#stripsixel)
- [terminator](core_sixel.Sixel.md#terminator)

## Constructors

### constructor

• **new Sixel**()

## Properties

### DCS

▪ `Static` `Readonly` **DCS**: ``"\u001bP"``

Sixel escape sequence markers

#### Defined in

[core/src/sixel.ts:65](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L65)

___

### MIN\_VERSION

▪ `Static` `Readonly` **MIN\_VERSION**: ``1189``

Minimum CTerm version for Sixel support

#### Defined in

[core/src/sixel.ts:60](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L60)

___

### SIXEL\_START

▪ `Static` `Readonly` **SIXEL\_START**: ``"\u001bPq"``

#### Defined in

[core/src/sixel.ts:67](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L67)

___

### ST

▪ `Static` `Readonly` **ST**: ``"\u001b\\"``

#### Defined in

[core/src/sixel.ts:66](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L66)

## Methods

### carriageReturn

▸ `Static` **carriageReturn**(): `string`

Generate carriage return (move to start of next sixel row)

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:179](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L179)

___

### colorDefinition

▸ `Static` **colorDefinition**(`index`, `r`, `g`, `b`): `string`

Generate sixel color definition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Color index (0-255) |
| `r` | `number` | Red (0-100) |
| `g` | `number` | Green (0-100) |
| `b` | `number` | Blue (0-100) |

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:158](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L158)

___

### colorSelect

▸ `Static` **colorSelect**(`index`): `string`

Generate sixel color selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:165](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L165)

___

### display

▸ `Static` **display**(`output`, `options`): `Promise`<`boolean`\>

Display a pre-rendered Sixel file

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |
| `options` | [`SixelOptions`](../interfaces/core_sixel.SixelOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/sixel.ts:79](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L79)

___

### displayBuffer

▸ `Static` **displayBuffer**(`output`, `data`, `x?`, `y?`): `boolean`

Display sixel data from a buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |
| `data` | `Buffer` |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/sixel.ts:108](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L108)

___

### encodeRepeat

▸ `Static` **encodeRepeat**(`count`, `bits`): `string`

Encode repeated sixel character

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Repeat count |
| `bits` | `number` | 6-bit value |

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:204](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L204)

___

### encodeSixel

▸ `Static` **encodeSixel**(`bits`): `string`

Encode a sixel character
A sixel character represents 6 vertical pixels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | `number` | 6-bit value (0-63) representing pixel pattern |

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:195](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L195)

___

### generateTestPattern

▸ `Static` **generateTestPattern**(`width?`, `height?`): `string`

Generate a simple test pattern
Useful for testing sixel support

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `60` |
| `height` | `number` | `36` |

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:291](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L291)

___

### header

▸ `Static` **header**(`aspectRatio?`, `bgSelect?`, `horizontalGrid?`): `string`

Generate sixel header sequence

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `aspectRatio` | `number` | `0` | Pixel aspect ratio (0=default, 1=1:1, 2=5:4, etc.) |
| `bgSelect` | `number` | `0` | Background select (0=device default, 1=no change, 2=set to 0) |
| `horizontalGrid?` | `number` | `undefined` | Horizontal grid size |

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:127](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L127)

___

### isSixelData

▸ `Static` **isSixelData**(`data`): `boolean`

Check if data appears to be sixel format

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |

#### Returns

`boolean`

#### Defined in

[core/src/sixel.ts:272](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L272)

___

### isSupported

▸ `Static` **isSupported**(`ctermVersion`): `boolean`

Check if Sixel is supported based on CTerm version

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctermVersion` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/sixel.ts:72](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L72)

___

### lineFeed

▸ `Static` **lineFeed**(): `string`

Generate line feed (move down one sixel row)

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:186](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L186)

___

### parseInfo

▸ `Static` **parseInfo**(`data`): ``null`` \| [`SixelImageInfo`](../interfaces/core_sixel.SixelImageInfo.md)

Parse sixel image info from data
Returns basic info about the sixel image

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |

#### Returns

``null`` \| [`SixelImageInfo`](../interfaces/core_sixel.SixelImageInfo.md)

#### Defined in

[core/src/sixel.ts:215](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L215)

___

### stripSixel

▸ `Static` **stripSixel**(`data`): `string`

Strip sixel data from a string (for text extraction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:282](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L282)

___

### terminator

▸ `Static` **terminator**(): `string`

Generate sixel terminator

#### Returns

`string`

#### Defined in

[core/src/sixel.ts:172](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/sixel.ts#L172)
