# Class: Graphic

[core/graphic](../modules/core_graphic.md).Graphic

Graphic class for in-memory ANSI manipulation

## Table of contents

### Constructors

- [constructor](core_graphic.Graphic.md#constructor)

### Accessors

- [ANSI](core_graphic.Graphic.md#ansi)
- [BIN](core_graphic.Graphic.md#bin)
- [MSG](core_graphic.Graphic.md#msg)
- [attr](core_graphic.Graphic.md#attr)
- [attrMask](core_graphic.Graphic.md#attrmask)
- [data](core_graphic.Graphic.md#data)
- [dataHeight](core_graphic.Graphic.md#dataheight)
- [dataWidth](core_graphic.Graphic.md#datawidth)
- [height](core_graphic.Graphic.md#height)
- [width](core_graphic.Graphic.md#width)

### Methods

- [attrToAnsi](core_graphic.Graphic.md#attrtoansi)
- [clear](core_graphic.Graphic.md#clear)
- [clearData](core_graphic.Graphic.md#cleardata)
- [clone](core_graphic.Graphic.md#clone)
- [draw](core_graphic.Graphic.md#draw)
- [getData](core_graphic.Graphic.md#getdata)
- [load](core_graphic.Graphic.md#load)
- [putmsg](core_graphic.Graphic.md#putmsg)
- [resize](core_graphic.Graphic.md#resize)
- [scroll](core_graphic.Graphic.md#scroll)
- [setANSI](core_graphic.Graphic.md#setansi)
- [setData](core_graphic.Graphic.md#setdata)

## Constructors

### constructor

• **new Graphic**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GraphicOptions`](../interfaces/core_graphic.GraphicOptions.md) |

#### Defined in

[core/src/graphic.ts:61](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L61)

## Accessors

### ANSI

• `get` **ANSI**(): `string`

Get ANSI representation of the graphic

#### Returns

`string`

#### Defined in

[core/src/graphic.ts:431](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L431)

• `set` **ANSI**(`data`): `void`

Parse ANSI data into the graphic

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:469](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L469)

___

### BIN

• `get` **BIN**(): `Buffer`

Get BIN representation (raw character + attribute pairs)

#### Returns

`Buffer`

#### Defined in

[core/src/graphic.ts:719](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L719)

• `set` **BIN**(`data`): `void`

Load from BIN data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:740](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L740)

___

### MSG

• `get` **MSG**(): `string`

Get MSG representation (Ctrl-A codes for Synchronet compatibility)

#### Returns

`string`

#### Defined in

[core/src/graphic.ts:756](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L756)

___

### attr

• `get` **attr**(): `number`

Default attribute

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:102](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L102)

• `set` **attr**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:106](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L106)

___

### attrMask

• `get` **attrMask**(): `number`

Attribute mask for filtering attributes during draw

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:113](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L113)

• `set` **attrMask**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:117](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L117)

___

### data

• `get` **data**(): [`GraphicCell`](../interfaces/core_graphic.GraphicCell.md)[][]

Raw data array

#### Returns

[`GraphicCell`](../interfaces/core_graphic.GraphicCell.md)[][]

#### Defined in

[core/src/graphic.ts:124](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L124)

___

### dataHeight

• `get` **dataHeight**(): `number`

True height of content (may be less than allocated height)

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:131](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L131)

___

### dataWidth

• `get` **dataWidth**(): `number`

True width of content

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:138](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L138)

___

### height

• `get` **height**(): `number`

Height of the graphic

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:95](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L95)

___

### width

• `get` **width**(): `number`

Width of the graphic

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:88](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L88)

## Methods

### attrToAnsi

▸ **attrToAnsi**(`attr`): `string`

Convert CGA attribute to ANSI escape sequence

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `number` |

#### Returns

`string`

#### Defined in

[core/src/graphic.ts:374](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L374)

___

### clear

▸ **clear**(`attr?`): `void`

Clear the entire graphic

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr?` | `number` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:193](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L193)

___

### clearData

▸ **clearData**(`x`, `y`): `void`

Clear cell data at position

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:182](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L182)

___

### clone

▸ **clone**(): [`Graphic`](core_graphic.Graphic.md)

Create a copy of this graphic

#### Returns

[`Graphic`](core_graphic.Graphic.md)

#### Defined in

[core/src/graphic.ts:822](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L822)

___

### draw

▸ **draw**(`output`, `xpos?`, `ypos?`, `width?`, `height?`, `xoff?`, `yoff?`, `delay?`): `boolean`

Draw the graphic to output at specified position

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) | `undefined` |
| `xpos` | `number` | `1` |
| `ypos` | `number` | `1` |
| `width?` | `number` | `undefined` |
| `height?` | `number` | `undefined` |
| `xoff` | `number` | `0` |
| `yoff` | `number` | `0` |
| `delay?` | `number` | `undefined` |

#### Returns

`boolean`

#### Defined in

[core/src/graphic.ts:319](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L319)

___

### getData

▸ **getData**(`x`, `y`): [`GraphicCell`](../interfaces/core_graphic.GraphicCell.md)

Get cell data at position

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`GraphicCell`](../interfaces/core_graphic.GraphicCell.md)

#### Defined in

[core/src/graphic.ts:151](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L151)

___

### load

▸ **load**(`filename`, `offset?`): `boolean`

Load a file into the graphic

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `offset?` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/graphic.ts:285](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L285)

___

### putmsg

▸ **putmsg**(`x`, `y`, `text`, `attr?`): `void`

Put a message at position with optional attribute

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `text` | `string` |
| `attr?` | `number` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:237](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L237)

___

### resize

▸ **resize**(`newWidth`, `newHeight`): `void`

Resize the graphic

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:846](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L846)

___

### scroll

▸ **scroll**(`direction?`, `lines?`): `void`

Scroll the graphic content

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `direction` | ``"up"`` \| ``"down"`` | `"up"` |
| `lines` | `number` | `1` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:207](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L207)

___

### setANSI

▸ **setANSI**(`data`, `processMCI?`): `void`

Set ANSI content with optional MCI pre-processing

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | `string` | `undefined` | ANSI content (may contain MCI/pipe codes) |
| `processMCI` | `boolean` | `false` | If true, process all MCI codes (pipe codes, @-codes, control codes) before parsing ANSI |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:478](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L478)

___

### setData

▸ **setData**(`x`, `y`, `ch`, `attr`): `void`

Set cell data at position

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ch` | `string` |
| `attr` | `number` |

#### Returns

`void`

#### Defined in

[core/src/graphic.ts:162](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/graphic.ts#L162)
