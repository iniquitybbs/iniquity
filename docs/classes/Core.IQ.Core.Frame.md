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

[packages/core/src/index.ts:587](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L587)

## Properties

### checkbounds

• **checkbounds**: `boolean`

toggle true/false to restrict/allow frame movement outside display

#### Inherited from

[IQFrame](Core.IQFrame.md).[checkbounds](Core.IQFrame.md#checkbounds)

#### Defined in

[packages/core/src/index.ts:585](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L585)

___

### is\_open

• **is\_open**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[is_open](Core.IQFrame.md#is_open)

#### Defined in

[packages/core/src/index.ts:577](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L577)

___

### scrollbars

• **scrollbars**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[scrollbars](Core.IQFrame.md#scrollbars)

#### Defined in

[packages/core/src/index.ts:579](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L579)

___

### transparent

• **transparent**: `boolean`

#### Inherited from

[IQFrame](Core.IQFrame.md).[transparent](Core.IQFrame.md#transparent)

#### Defined in

[packages/core/src/index.ts:578](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L578)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[close](Core.IQFrame.md#close)

#### Defined in

[packages/core/src/index.ts:607](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L607)

___

### cycle

▸ **cycle**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[cycle](Core.IQFrame.md#cycle)

#### Defined in

[packages/core/src/index.ts:601](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L601)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[delete](Core.IQFrame.md#delete)

#### Defined in

[packages/core/src/index.ts:598](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L598)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[draw](Core.IQFrame.md#draw)

#### Defined in

[packages/core/src/index.ts:595](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L595)

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

[packages/core/src/index.ts:616](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L616)

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

[packages/core/src/index.ts:628](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L628)

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

[packages/core/src/index.ts:619](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L619)

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[open](Core.IQFrame.md#open)

#### Defined in

[packages/core/src/index.ts:592](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L592)

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

[packages/core/src/index.ts:610](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L610)

___

### refresh

▸ **refresh**(): `void`

#### Returns

`void`

#### Inherited from

[IQFrame](Core.IQFrame.md).[refresh](Core.IQFrame.md#refresh)

#### Defined in

[packages/core/src/index.ts:604](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L604)

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

[packages/core/src/index.ts:613](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L613)
