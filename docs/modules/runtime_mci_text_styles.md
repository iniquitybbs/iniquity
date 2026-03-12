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

[core/src/mci/text-styles.ts:42](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L42)

___

### TextStyleName

Ƭ **TextStyleName**: ``"normal"`` \| ``"upper"`` \| ``"lower"`` \| ``"title"`` \| ``"firstLower"`` \| ``"smallVowels"`` \| ``"bigVowels"`` \| ``"smallI"`` \| ``"mixed"`` \| ``"l33t"`` \| ``"reverse"`` \| ``"alternating"`` \| ``"wave"``

#### Defined in

[core/src/mci/text-styles.ts:27](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L27)

## Variables

### TEXT\_STYLES

• `Const` **TEXT\_STYLES**: `Record`<[`TextStyleName`](runtime_mci_text_styles.md#textstylename), [`TextStyleFunction`](runtime_mci_text_styles.md#textstylefunction)\>

#### Defined in

[core/src/mci/text-styles.ts:180](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L180)

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

[core/src/mci/text-styles.ts:244](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L244)

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

[core/src/mci/text-styles.ts:230](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L230)

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

[core/src/mci/text-styles.ts:256](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L256)

___

### listTextStyles

▸ **listTextStyles**(): [`TextStyleName`](runtime_mci_text_styles.md#textstylename)[]

#### Returns

[`TextStyleName`](runtime_mci_text_styles.md#textstylename)[]

#### Defined in

[core/src/mci/text-styles.ts:252](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L252)

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

[core/src/mci/text-styles.ts:151](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L151)

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

[core/src/mci/text-styles.ts:103](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L103)

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

[core/src/mci/text-styles.ts:85](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L85)

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

[core/src/mci/text-styles.ts:139](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L139)

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

[core/src/mci/text-styles.ts:75](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L75)

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

[core/src/mci/text-styles.ts:127](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L127)

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

[core/src/mci/text-styles.ts:67](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L67)

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

[core/src/mci/text-styles.ts:147](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L147)

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

[core/src/mci/text-styles.ts:115](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L115)

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

[core/src/mci/text-styles.ts:91](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L91)

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

[core/src/mci/text-styles.ts:79](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L79)

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

[core/src/mci/text-styles.ts:71](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L71)

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

[core/src/mci/text-styles.ts:165](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/text-styles.ts#L165)
