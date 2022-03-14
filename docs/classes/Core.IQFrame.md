# Class: IQFrame

[Core](../modules/Core.md).IQFrame

## Hierarchy

- **`IQFrame`**

  ↳ [`Frame`](Core.IQ.Core.Frame.md)

## Implements

- [`IQFrameOptions`](../interfaces/Core.IQFrameOptions.md)

## Table of contents

### Constructors

- [constructor](Core.IQFrame.md#constructor)

### Properties

- [checkbounds](Core.IQFrame.md#checkbounds)
- [color](Core.IQFrame.md#color)
- [height](Core.IQFrame.md#height)
- [is\_open](Core.IQFrame.md#is_open)
- [scrollbars](Core.IQFrame.md#scrollbars)
- [transparent](Core.IQFrame.md#transparent)
- [width](Core.IQFrame.md#width)
- [x](Core.IQFrame.md#x)
- [y](Core.IQFrame.md#y)

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

[packages/core/src/index.ts:687](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L687)

## Properties

### checkbounds

• **checkbounds**: `boolean`

toggle true/false to restrict/allow frame movement outside display

#### Defined in

[packages/core/src/index.ts:685](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L685)

___

### color

• **color**: [`IQFrameColorOptions`](../enums/Core.IQFrameColorOptions.md)

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[color](../interfaces/Core.IQFrameOptions.md#color)

#### Defined in

[packages/core/src/index.ts:679](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L679)

___

### height

• **height**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[height](../interfaces/Core.IQFrameOptions.md#height)

#### Defined in

[packages/core/src/index.ts:678](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L678)

___

### is\_open

• **is\_open**: `boolean`

#### Defined in

[packages/core/src/index.ts:672](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L672)

___

### scrollbars

• **scrollbars**: `boolean`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[scrollbars](../interfaces/Core.IQFrameOptions.md#scrollbars)

#### Defined in

[packages/core/src/index.ts:674](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L674)

___

### transparent

• **transparent**: `boolean`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[transparent](../interfaces/Core.IQFrameOptions.md#transparent)

#### Defined in

[packages/core/src/index.ts:673](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L673)

___

### width

• **width**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[width](../interfaces/Core.IQFrameOptions.md#width)

#### Defined in

[packages/core/src/index.ts:677](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L677)

___

### x

• **x**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[x](../interfaces/Core.IQFrameOptions.md#x)

#### Defined in

[packages/core/src/index.ts:675](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L675)

___

### y

• **y**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[y](../interfaces/Core.IQFrameOptions.md#y)

#### Defined in

[packages/core/src/index.ts:676](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L676)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:707](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L707)

___

### cycle

▸ **cycle**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:701](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L701)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:698](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L698)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:695](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L695)

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

[packages/core/src/index.ts:716](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L716)

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

[packages/core/src/index.ts:728](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L728)

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

[packages/core/src/index.ts:719](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L719)

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:692](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L692)

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

[packages/core/src/index.ts:710](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L710)

___

### refresh

▸ **refresh**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:704](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L704)

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

[packages/core/src/index.ts:713](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L713)
