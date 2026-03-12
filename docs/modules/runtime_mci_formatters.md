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

[core/src/mci/formatters.ts:27](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L27)

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

[core/src/mci/formatters.ts:148](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L148)

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

[core/src/mci/formatters.ts:72](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L72)

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

[core/src/mci/formatters.ts:125](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L125)

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

[core/src/mci/formatters.ts:111](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L111)

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

[core/src/mci/formatters.ts:290](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L290)

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

[core/src/mci/formatters.ts:42](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L42)

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

[core/src/mci/formatters.ts:118](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L118)

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

[core/src/mci/formatters.ts:282](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L282)

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

[core/src/mci/formatters.ts:255](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L255)

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

[core/src/mci/formatters.ts:263](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L263)

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

[core/src/mci/formatters.ts:276](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L276)

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

[core/src/mci/formatters.ts:286](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L286)

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

[core/src/mci/formatters.ts:135](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/formatters.ts#L135)
