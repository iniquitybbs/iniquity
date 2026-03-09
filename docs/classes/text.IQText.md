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

[core/src/text.ts:83](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L83)

## Accessors

### visibleLength

• `get` **visibleLength**(): `number`

Get visible length (excluding ANSI codes)

#### Returns

`number`

#### Defined in

[core/src/text.ts:98](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L98)

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

[core/src/text.ts:113](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L113)

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

[core/src/text.ts:301](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L301)

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

[core/src/text.ts:137](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L137)

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

[core/src/text.ts:129](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L129)

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

[core/src/text.ts:150](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L150)

___

### lower

▸ **lower**(): [`IQText`](text.IQText.md)

Convert to lowercase

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:224](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L224)

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

[core/src/text.ts:248](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L248)

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

[core/src/text.ts:186](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L186)

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

[core/src/text.ts:121](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L121)

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

[core/src/text.ts:208](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L208)

___

### reverse

▸ **reverse**(): [`IQText`](text.IQText.md)

Reverse text

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:240](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L240)

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

[core/src/text.ts:162](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L162)

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

[core/src/text.ts:105](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L105)

___

### title

▸ **title**(): [`IQText`](text.IQText.md)

Title case

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:232](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L232)

___

### toString

▸ **toString**(): `string`

Get the text content

#### Returns

`string`

#### Defined in

[core/src/text.ts:91](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L91)

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

[core/src/text.ts:174](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L174)

___

### upper

▸ **upper**(): [`IQText`](text.IQText.md)

Convert to uppercase

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/text.ts:216](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L216)

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

[core/src/text.ts:265](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L265)

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

[core/src/text.ts:396](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L396)

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

[core/src/text.ts:564](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L564)

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

[core/src/text.ts:600](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L600)

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

[core/src/text.ts:577](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L577)

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

[core/src/text.ts:593](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L593)

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

[core/src/text.ts:417](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L417)

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

[core/src/text.ts:371](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L371)

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

[core/src/text.ts:462](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L462)

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

[core/src/text.ts:407](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L407)

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

[core/src/text.ts:382](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L382)

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

[core/src/text.ts:505](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L505)

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

[core/src/text.ts:427](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L427)

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

[core/src/text.ts:389](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L389)

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

[core/src/text.ts:437](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/text.ts#L437)
