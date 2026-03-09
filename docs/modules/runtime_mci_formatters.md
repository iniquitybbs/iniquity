# Module: runtime/mci/formatters

Format Modifiers

**`Summary`**

Synchronet-style format modifiers (L/R/C/Z/W/T/U)

## Table of contents

### Interfaces

- [FormatOptions](../interfaces/runtime_mci_formatters.FormatOptions.md)
- [ParsedFormat](../interfaces/runtime_mci_formatters.ParsedFormat.md)

### Type Aliases

- [FormatModifier](runtime_mci_formatters.md#formatmodifier)

### Functions

- [addThousandsSeparator](runtime_mci_formatters.md#addthousandsseparator)
- [applyFormat](runtime_mci_formatters.md#applyformat)
- [center](runtime_mci_formatters.md#center)
- [leftJustify](runtime_mci_formatters.md#leftjustify)
- [padToVisibleWidth](runtime_mci_formatters.md#padtovisiblewidth)
- [parseFormatModifier](runtime_mci_formatters.md#parseformatmodifier)
- [rightJustify](runtime_mci_formatters.md#rightjustify)
- [stripAnsi](runtime_mci_formatters.md#stripansi)
- [toFullWidth](runtime_mci_formatters.md#tofullwidth)
- [toHalfWidth](runtime_mci_formatters.md#tohalfwidth)
- [truncate](runtime_mci_formatters.md#truncate)
- [visibleLength](runtime_mci_formatters.md#visiblelength)
- [zeroPad](runtime_mci_formatters.md#zeropad)

## Type Aliases

### FormatModifier

Ƭ **FormatModifier**: ``"L"`` \| ``"R"`` \| ``"C"`` \| ``"Z"`` \| ``"W"`` \| ``"T"`` \| ``"U"`` \| ``">"``

#### Defined in

[core/src/mci/formatters.ts:7](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L7)

## Functions

### addThousandsSeparator

▸ **addThousandsSeparator**(`text`, `separator?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `separator` | `string` | `","` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:128](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L128)

___

### applyFormat

▸ **applyFormat**(`value`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `options` | [`FormatOptions`](../interfaces/runtime_mci_formatters.FormatOptions.md) |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:52](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L52)

___

### center

▸ **center**(`text`, `width`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:105](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L105)

___

### leftJustify

▸ **leftJustify**(`text`, `width`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:91](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L91)

___

### padToVisibleWidth

▸ **padToVisibleWidth**(`text`, `width`, `align?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `width` | `number` | `undefined` |
| `align` | ``"left"`` \| ``"right"`` \| ``"center"`` | `"left"` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:270](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L270)

___

### parseFormatModifier

▸ **parseFormatModifier**(`codeWithModifier`): [`ParsedFormat`](../interfaces/runtime_mci_formatters.ParsedFormat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeWithModifier` | `string` |

#### Returns

[`ParsedFormat`](../interfaces/runtime_mci_formatters.ParsedFormat.md)

#### Defined in

[core/src/mci/formatters.ts:22](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L22)

___

### rightJustify

▸ **rightJustify**(`text`, `width`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:98](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L98)

___

### stripAnsi

▸ **stripAnsi**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:262](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L262)

___

### toFullWidth

▸ **toFullWidth**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:235](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L235)

___

### toHalfWidth

▸ **toHalfWidth**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:243](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L243)

___

### truncate

▸ **truncate**(`text`, `maxLength`, `ellipsis?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `maxLength` | `number` | `undefined` |
| `ellipsis` | `string` | `"..."` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:256](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L256)

___

### visibleLength

▸ **visibleLength**(`text`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`number`

#### Defined in

[core/src/mci/formatters.ts:266](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L266)

___

### zeroPad

▸ **zeroPad**(`text`, `width`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

[core/src/mci/formatters.ts:115](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/formatters.ts#L115)
