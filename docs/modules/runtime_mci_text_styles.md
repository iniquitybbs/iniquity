# Module: runtime/mci/text-styles

Text Styles

**`Summary`**

ENiGMA-inspired text transformations (l33t, title, upper, etc.)

## Table of contents

### Classes

- [TextStyleProcessor](../classes/runtime_mci_text_styles.TextStyleProcessor.md)

### Type Aliases

- [TextStyleFunction](runtime_mci_text_styles.md#textstylefunction)
- [TextStyleName](runtime_mci_text_styles.md#textstylename)

### Variables

- [TEXT\_STYLES](runtime_mci_text_styles.md#text_styles)

### Functions

- [applyTextStyle](runtime_mci_text_styles.md#applytextstyle)
- [getTextStyle](runtime_mci_text_styles.md#gettextstyle)
- [isValidTextStyle](runtime_mci_text_styles.md#isvalidtextstyle)
- [listTextStyles](runtime_mci_text_styles.md#listtextstyles)
- [styleAlternating](runtime_mci_text_styles.md#stylealternating)
- [styleBigVowels](runtime_mci_text_styles.md#stylebigvowels)
- [styleFirstLower](runtime_mci_text_styles.md#stylefirstlower)
- [styleL33t](runtime_mci_text_styles.md#stylel33t)
- [styleLower](runtime_mci_text_styles.md#stylelower)
- [styleMixed](runtime_mci_text_styles.md#stylemixed)
- [styleNormal](runtime_mci_text_styles.md#stylenormal)
- [styleReverse](runtime_mci_text_styles.md#stylereverse)
- [styleSmallI](runtime_mci_text_styles.md#stylesmalli)
- [styleSmallVowels](runtime_mci_text_styles.md#stylesmallvowels)
- [styleTitle](runtime_mci_text_styles.md#styletitle)
- [styleUpper](runtime_mci_text_styles.md#styleupper)
- [styleWave](runtime_mci_text_styles.md#stylewave)

## Type Aliases

### TextStyleFunction

Ƭ **TextStyleFunction**: (`text`: `string`) => `string`

#### Type declaration

▸ (`text`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:22](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L22)

___

### TextStyleName

Ƭ **TextStyleName**: ``"normal"`` \| ``"upper"`` \| ``"lower"`` \| ``"title"`` \| ``"firstLower"`` \| ``"smallVowels"`` \| ``"bigVowels"`` \| ``"smallI"`` \| ``"mixed"`` \| ``"l33t"`` \| ``"reverse"`` \| ``"alternating"`` \| ``"wave"``

#### Defined in

[core/src/mci/text-styles.ts:7](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L7)

## Variables

### TEXT\_STYLES

• `Const` **TEXT\_STYLES**: `Record`<[`TextStyleName`](runtime_mci_text_styles.md#textstylename), [`TextStyleFunction`](runtime_mci_text_styles.md#textstylefunction)\>

#### Defined in

[core/src/mci/text-styles.ts:160](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L160)

## Functions

### applyTextStyle

▸ **applyTextStyle**(`text`, `styleName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleName` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:224](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L224)

___

### getTextStyle

▸ **getTextStyle**(`name`): [`TextStyleFunction`](runtime_mci_text_styles.md#textstylefunction) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`TextStyleFunction`](runtime_mci_text_styles.md#textstylefunction) \| `undefined`

#### Defined in

[core/src/mci/text-styles.ts:210](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L210)

___

### isValidTextStyle

▸ **isValidTextStyle**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/mci/text-styles.ts:236](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L236)

___

### listTextStyles

▸ **listTextStyles**(): [`TextStyleName`](runtime_mci_text_styles.md#textstylename)[]

#### Returns

[`TextStyleName`](runtime_mci_text_styles.md#textstylename)[]

#### Defined in

[core/src/mci/text-styles.ts:232](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L232)

___

### styleAlternating

▸ **styleAlternating**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:131](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L131)

___

### styleBigVowels

▸ **styleBigVowels**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:83](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L83)

___

### styleFirstLower

▸ **styleFirstLower**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:65](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L65)

___

### styleL33t

▸ **styleL33t**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:119](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L119)

___

### styleLower

▸ **styleLower**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:55](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L55)

___

### styleMixed

▸ **styleMixed**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:107](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L107)

___

### styleNormal

▸ **styleNormal**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:47](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L47)

___

### styleReverse

▸ **styleReverse**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:127](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L127)

___

### styleSmallI

▸ **styleSmallI**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:95](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L95)

___

### styleSmallVowels

▸ **styleSmallVowels**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:71](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L71)

___

### styleTitle

▸ **styleTitle**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:59](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L59)

___

### styleUpper

▸ **styleUpper**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:51](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L51)

___

### styleWave

▸ **styleWave**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:145](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L145)
