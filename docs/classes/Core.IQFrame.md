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

[packages/core/src/index.ts:587](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L587)

## Properties

### checkbounds

• **checkbounds**: `boolean`

toggle true/false to restrict/allow frame movement outside display

#### Defined in

[packages/core/src/index.ts:585](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L585)

___

### is\_open

• **is\_open**: `boolean`

#### Defined in

[packages/core/src/index.ts:577](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L577)

___

### scrollbars

• **scrollbars**: `boolean`

#### Defined in

[packages/core/src/index.ts:579](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L579)

___

### transparent

• **transparent**: `boolean`

#### Defined in

[packages/core/src/index.ts:578](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L578)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:607](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L607)

___

### cycle

▸ **cycle**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:601](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L601)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:598](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L598)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

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

#### Defined in

[packages/core/src/index.ts:619](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L619)

___

### open

▸ **open**(): `void`

#### Returns

`void`

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

#### Defined in

[packages/core/src/index.ts:610](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L610)

___

### refresh

▸ **refresh**(): `void`

#### Returns

`void`

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

#### Defined in

[packages/core/src/index.ts:613](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L613)
