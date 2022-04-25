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

[packages/core/src/index.ts:723](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L723)

## Properties

### checkbounds

• **checkbounds**: `boolean`

toggle true/false to restrict/allow frame movement outside display

#### Defined in

[packages/core/src/index.ts:721](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L721)

___

### color

• **color**: [`IQFrameColorOptions`](../enums/Core.IQFrameColorOptions.md)

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[color](../interfaces/Core.IQFrameOptions.md#color)

#### Defined in

[packages/core/src/index.ts:715](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L715)

___

### height

• **height**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[height](../interfaces/Core.IQFrameOptions.md#height)

#### Defined in

[packages/core/src/index.ts:714](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L714)

___

### is\_open

• **is\_open**: `boolean`

#### Defined in

[packages/core/src/index.ts:708](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L708)

___

### scrollbars

• **scrollbars**: `boolean`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[scrollbars](../interfaces/Core.IQFrameOptions.md#scrollbars)

#### Defined in

[packages/core/src/index.ts:710](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L710)

___

### transparent

• **transparent**: `boolean`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[transparent](../interfaces/Core.IQFrameOptions.md#transparent)

#### Defined in

[packages/core/src/index.ts:709](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L709)

___

### width

• **width**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[width](../interfaces/Core.IQFrameOptions.md#width)

#### Defined in

[packages/core/src/index.ts:713](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L713)

___

### x

• **x**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[x](../interfaces/Core.IQFrameOptions.md#x)

#### Defined in

[packages/core/src/index.ts:711](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L711)

___

### y

• **y**: `number`

#### Implementation of

[IQFrameOptions](../interfaces/Core.IQFrameOptions.md).[y](../interfaces/Core.IQFrameOptions.md#y)

#### Defined in

[packages/core/src/index.ts:712](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L712)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:743](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L743)

___

### cycle

▸ **cycle**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:737](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L737)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:734](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L734)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:731](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L731)

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

[packages/core/src/index.ts:752](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L752)

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

[packages/core/src/index.ts:764](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L764)

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

[packages/core/src/index.ts:755](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L755)

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:728](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L728)

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

[packages/core/src/index.ts:746](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L746)

___

### refresh

▸ **refresh**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:740](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L740)

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

[packages/core/src/index.ts:749](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/core/src/index.ts#L749)
