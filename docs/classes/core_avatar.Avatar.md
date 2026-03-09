# Class: Avatar

[core/avatar](../modules/core_avatar.md).Avatar

Avatar class for small user graphics

## Table of contents

### Constructors

- [constructor](core_avatar.Avatar.md#constructor)

### Properties

- [defs](core_avatar.Avatar.md#defs)

### Methods

- [createAvatarData](core_avatar.Avatar.md#createavatardata)
- [createBlank](core_avatar.Avatar.md#createblank)
- [draw](core_avatar.Avatar.md#draw)
- [fromGraphic](core_avatar.Avatar.md#fromgraphic)
- [fromText](core_avatar.Avatar.md#fromtext)
- [generateIdenticon](core_avatar.Avatar.md#generateidenticon)
- [isEnabled](core_avatar.Avatar.md#isenabled)
- [isValid](core_avatar.Avatar.md#isvalid)
- [loadFromFile](core_avatar.Avatar.md#loadfromfile)
- [show](core_avatar.Avatar.md#show)

## Constructors

### constructor

• **new Avatar**()

## Properties

### defs

▪ `Static` `Readonly` **defs**: `Object` = `AvatarDefs`

Avatar dimension constants

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | ``6`` |
| `size` | ``120`` |
| `width` | ``10`` |

#### Defined in

[core/src/avatar.ts:59](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L59)

## Methods

### createAvatarData

▸ `Static` **createAvatarData**(`data`): [`AvatarData`](../interfaces/core_avatar.AvatarData.md)

Create avatar data object

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`AvatarData`](../interfaces/core_avatar.AvatarData.md)

#### Defined in

[core/src/avatar.ts:255](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L255)

___

### createBlank

▸ `Static` **createBlank**(`fgColor?`, `bgColor?`): `string`

Create a blank avatar with specified colors

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fgColor` | `number` | `CGA.LIGHTGRAY` |
| `bgColor` | `number` | `CGA.BLACK` |

#### Returns

`string`

#### Defined in

[core/src/avatar.ts:274](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L274)

___

### draw

▸ `Static` **draw**(`output`, `data`, `x`, `y`, `right?`, `top?`): `boolean`

Draw avatar at absolute screen position using Graphic.draw()

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) | `undefined` |
| `data` | `string` | `undefined` |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `right` | `boolean` | `false` |
| `top` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[core/src/avatar.ts:91](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L91)

___

### fromGraphic

▸ `Static` **fromGraphic**(`graphic`): `string`

Convert a Graphic to avatar data (base64-encoded BIN)
The graphic must be exactly 10x6 or will be cropped/padded

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | [`Graphic`](core_graphic.Graphic.md) |

#### Returns

`string`

#### Defined in

[core/src/avatar.ts:156](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L156)

___

### fromText

▸ `Static` **fromText**(`text`, `fgColor?`, `bgColor?`): `string`

Create avatar from text (simple text rendering)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `fgColor` | `number` | `CGA.WHITE` |
| `bgColor` | `number` | `CGA.BLUE` |

#### Returns

`string`

#### Defined in

[core/src/avatar.ts:288](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L288)

___

### generateIdenticon

▸ `Static` **generateIdenticon**(`seed`): `string`

Generate an identicon avatar from a seed string
Creates a simple symmetric pattern based on the hash

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |

#### Returns

`string`

#### Defined in

[core/src/avatar.ts:183](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L183)

___

### isEnabled

▸ `Static` **isEnabled**(`avatar`): `boolean`

Check if avatar data is enabled and valid

#### Parameters

| Name | Type |
| :------ | :------ |
| `avatar` | `undefined` \| ``null`` \| [`AvatarData`](../interfaces/core_avatar.AvatarData.md) |

#### Returns

`boolean`

#### Defined in

[core/src/avatar.ts:267](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L267)

___

### isValid

▸ `Static` **isValid**(`data`): `boolean`

Validate avatar data
Returns true if the data is valid for use as an avatar

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |

#### Returns

`boolean`

#### Defined in

[core/src/avatar.ts:65](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L65)

___

### loadFromFile

▸ `Static` **loadFromFile**(`filename`, `offset?`): ``null`` \| `string`

Load avatar from a BIN file

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filename` | `string` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

``null`` \| `string`

#### Defined in

[core/src/avatar.ts:230](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L230)

___

### show

▸ `Static` **show**(`output`, `data`): `boolean`

Show avatar at current cursor position using console output

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |
| `data` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/avatar.ts:129](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/avatar.ts#L129)
