# Class: IQText

[text](../modules/text.md).IQText

IQText class for advanced text manipulation

## Table of contents

### Constructors

- [constructor](text.IQText.md#constructor)

### Accessors

- [visibleLength](text.IQText.md#visiblelength)

### Methods

- [append](text.IQText.md#append)
- [box](text.IQText.md#box)
- [center](text.IQText.md#center)
- [color](text.IQText.md#color)
- [left](text.IQText.md#left)
- [lower](text.IQText.md#lower)
- [newlines](text.IQText.md#newlines)
- [pad](text.IQText.md#pad)
- [prepend](text.IQText.md#prepend)
- [repeat](text.IQText.md#repeat)
- [reverse](text.IQText.md#reverse)
- [right](text.IQText.md#right)
- [set](text.IQText.md#set)
- [title](text.IQText.md#title)
- [toString](text.IQText.md#tostring)
- [truncate](text.IQText.md#truncate)
- [upper](text.IQText.md#upper)
- [wrap](text.IQText.md#wrap)
- [center](text.IQText.md#center-1)
- [formatBytes](text.IQText.md#formatbytes)
- [formatDate](text.IQText.md#formatdate)
- [formatDuration](text.IQText.md#formatduration)
- [formatNumber](text.IQText.md#formatnumber)
- [left](text.IQText.md#left-1)
- [line](text.IQText.md#line)
- [progressBar](text.IQText.md#progressbar)
- [right](text.IQText.md#right-1)
- [stripAnsi](text.IQText.md#stripansi)
- [table](text.IQText.md#table)
- [truncate](text.IQText.md#truncate-1)
- [visibleLength](text.IQText.md#visiblelength-1)
- [wrap](text.IQText.md#wrap-1)

## Constructors

### constructor

• **new IQText**(`content?`, `width?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `content` | `string` | `""` |
| `width` | `number` | `80` |

#### Defined in

[core/src/text.ts:103](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L103)

## Accessors

### visibleLength

• `get` **visibleLength**(): `number`

Get visible length (excluding ANSI codes)

#### Returns

`number`

#### Defined in

[core/src/text.ts:118](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L118)

## Methods

### append

▸ **append**(`content`): [`IQText`](text.IQText.md)

Append content

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:133](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L133)

___

### box

▸ **box**(`options`): [`IQText`](text.IQText.md)

Create a text box

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ITextBoxOptions`](../interfaces/text.ITextBoxOptions.md) |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:321](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L321)

___

### center

▸ **center**(`width?`): [`IQText`](text.IQText.md)

Center text

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:157](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L157)

___

### color

▸ **color**(`color`): [`IQText`](text.IQText.md)

Apply color

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:149](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L149)

___

### left

▸ **left**(`width?`): [`IQText`](text.IQText.md)

Left align text

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:170](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L170)

___

### lower

▸ **lower**(): [`IQText`](text.IQText.md)

Convert to lowercase

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:244](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L244)

___

### newlines

▸ **newlines**(`count?`, `position?`): [`IQText`](text.IQText.md)

Add newlines

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `1` |
| `position` | ``"both"`` \| ``"before"`` \| ``"after"`` | `"after"` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:268](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L268)

___

### pad

▸ **pad**(`length`, `char?`, `side?`): [`IQText`](text.IQText.md)

Pad text

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `undefined` |
| `char` | `string` | `" "` |
| `side` | ``"left"`` \| ``"right"`` \| ``"both"`` | `"right"` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:206](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L206)

___

### prepend

▸ **prepend**(`content`): [`IQText`](text.IQText.md)

Prepend content

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:141](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L141)

___

### repeat

▸ **repeat**(`count`): [`IQText`](text.IQText.md)

Repeat text

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:228](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L228)

___

### reverse

▸ **reverse**(): [`IQText`](text.IQText.md)

Reverse text

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:260](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L260)

___

### right

▸ **right**(`width?`): [`IQText`](text.IQText.md)

Right align text

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:182](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L182)

___

### set

▸ **set**(`content`): [`IQText`](text.IQText.md)

Set content

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:125](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L125)

___

### title

▸ **title**(): [`IQText`](text.IQText.md)

Title case

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:252](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L252)

___

### toString

▸ **toString**(): `string`

Get the text content

#### Returns

`string`

#### Defined in

[core/src/text.ts:111](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L111)

___

### truncate

▸ **truncate**(`maxLength`, `suffix?`): [`IQText`](text.IQText.md)

Truncate text

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `maxLength` | `number` | `undefined` |
| `suffix` | `string` | `"..."` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:194](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L194)

___

### upper

▸ **upper**(): [`IQText`](text.IQText.md)

Convert to uppercase

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:236](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L236)

___

### wrap

▸ **wrap**(`options`): [`IQText`](text.IQText.md)

Word wrap text

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ITextWrapOptions`](../interfaces/text.ITextWrapOptions.md) |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:285](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L285)

___

### center

▸ `Static` **center**(`text`, `width`): `string`

Center text within width

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:416](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L416)

___

### formatBytes

▸ `Static` **formatBytes**(`bytes`, `decimals?`): `string`

Format bytes to human readable

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bytes` | `number` | `undefined` |
| `decimals` | `number` | `2` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:584](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L584)

___

### formatDate

▸ `Static` **formatDate**(`date`, `format?`): `string`

Format date

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `string` \| `Date` | `undefined` |
| `format` | `string` | `"YYYY-MM-DD"` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:620](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L620)

___

### formatDuration

▸ `Static` **formatDuration**(`seconds`): `string`

Format duration to human readable

#### Parameters

| Name | Type |
| :------ | :------ |
| `seconds` | `number` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:597](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L597)

___

### formatNumber

▸ `Static` **formatNumber**(`num`, `separator?`): `string`

Format number with thousands separator

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `num` | `number` | `undefined` |
| `separator` | `string` | `","` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:613](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L613)

___

### left

▸ `Static` **left**(`text`, `width`): `string`

Left align text within width

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:437](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L437)

___

### line

▸ `Static` **line**(`width`, `char?`, `color?`): `string`

Create horizontal line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `undefined` |
| `char` | `string` | `"─"` |
| `color?` | `string` | `undefined` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:391](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L391)

___

### progressBar

▸ `Static` **progressBar**(`current`, `total`, `width?`, `options?`): `string`

Create a progress bar

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `current` | `number` | `undefined` |
| `total` | `number` | `undefined` |
| `width` | `number` | `20` |
| `options?` | `Object` | `undefined` |
| `options.empty?` | `string` | `undefined` |
| `options.emptyColor?` | `string` | `undefined` |
| `options.filled?` | `string` | `undefined` |
| `options.filledColor?` | `string` | `undefined` |
| `options.leftCap?` | `string` | `undefined` |
| `options.rightCap?` | `string` | `undefined` |
| `options.showPercent?` | `boolean` | `undefined` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:482](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L482)

___

### right

▸ `Static` **right**(`text`, `width`): `string`

Right align text within width

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:427](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L427)

___

### stripAnsi

▸ `Static` **stripAnsi**(`text`): `string`

Strip ANSI codes from text

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:402](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L402)

___

### table

▸ `Static` **table**(`headers`, `rows`, `options?`): `string`

Create a table

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `string`[] |
| `rows` | `string`[][] |
| `options?` | `Object` |
| `options.border?` | ``"ascii"`` \| ``"none"`` \| ``"single"`` \| ``"double"`` |
| `options.cellPadding?` | `number` |
| `options.columnWidths?` | `number`[] |
| `options.headerColor?` | `string` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:525](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L525)

___

### truncate

▸ `Static` **truncate**(`text`, `maxLength`, `suffix?`): `string`

Truncate text to max length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `maxLength` | `number` | `undefined` |
| `suffix` | `string` | `"..."` |

#### Returns

`string`

#### Defined in

[core/src/text.ts:447](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L447)

___

### visibleLength

▸ `Static` **visibleLength**(`text`): `number`

Get visible length of text (excluding ANSI codes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`number`

#### Defined in

[core/src/text.ts:409](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L409)

___

### wrap

▸ `Static` **wrap**(`text`, `width`): `string`[]

Word wrap text to width

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `width` | `number` |

#### Returns

`string`[]

#### Defined in

[core/src/text.ts:457](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/text.ts#L457)
