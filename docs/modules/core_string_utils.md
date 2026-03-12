# Module: core/string-utils

String Utilities

**`Summary`**

Opt-in string manipulation utilities (no global pollution)

## Table of contents

### Functions

- [addNewlines](core_string_utils.md#addnewlines)
- [centerText](core_string_utils.md#centertext)
- [colorText](core_string_utils.md#colortext)
- [gotoxyText](core_string_utils.md#gotoxytext)
- [leftAlign](core_string_utils.md#leftalign)
- [lowerText](core_string_utils.md#lowertext)
- [padText](core_string_utils.md#padtext)
- [repeatText](core_string_utils.md#repeattext)
- [rightAlign](core_string_utils.md#rightalign)
- [stripAnsi](core_string_utils.md#stripansi)
- [titleText](core_string_utils.md#titletext)
- [truncateText](core_string_utils.md#truncatetext)
- [upperText](core_string_utils.md#uppertext)
- [visibleLength](core_string_utils.md#visiblelength)

## Functions

### addNewlines

▸ **addNewlines**(`text`, `count?`): `string`

Add newlines before text

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Text to prepend newlines to |
| `count` | `number` | `1` | Number of newlines (defaults to 1) |

#### Returns

`string`

Text with newlines prepended

#### Defined in

[core/src/string-utils.ts:97](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L97)

___

### centerText

▸ **centerText**(`text`, `width?`): `string`

Center text within specified width

**`Example`**

```typescript
import { centerText } from '@iniquitybbs/core/utils'
const centered = centerText("Hello", 80)
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Text to center |
| `width` | `number` | `80` | Target width (defaults to 80) |

#### Returns

`string`

Centered text with padding

#### Defined in

[core/src/string-utils.ts:57](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L57)

___

### colorText

▸ **colorText**(`text`, `color`): `string`

Add ANSI color to text

**`Example`**

```typescript
import { colorText } from '@iniquitybbs/core/utils'
const colored = colorText("Hello", "cyan")
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to colorize |
| `color` | `string` | Color name (e.g., 'cyan', 'bright red') |

#### Returns

`string`

Colorized text with ANSI codes

#### Defined in

[core/src/string-utils.ts:41](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L41)

___

### gotoxyText

▸ **gotoxyText**(`text`, `x`, `y`): `string`

Position cursor at coordinates before displaying text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to display |
| `x` | `number` | X coordinate (1-based) |
| `y` | `number` | Y coordinate (1-based) |

#### Returns

`string`

Text with cursor positioning

#### Defined in

[core/src/string-utils.ts:187](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L187)

___

### leftAlign

▸ **leftAlign**(`text`, `width?`): `string`

Left-align text within specified width

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Text to align |
| `width` | `number` | `80` | Target width (defaults to 80) |

#### Returns

`string`

Left-aligned text with right padding

#### Defined in

[core/src/string-utils.ts:71](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L71)

___

### lowerText

▸ **lowerText**(`text`): `string`

Convert text to lowercase

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to convert |

#### Returns

`string`

Lowercase text

#### Defined in

[core/src/string-utils.ts:205](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L205)

___

### padText

▸ **padText**(`text`, `length`, `char?`, `side?`): `string`

Pad text to specified length

**`Example`**

```typescript
import { padText } from '@iniquitybbs/core/utils'
const padded = padText("Hello", 10, ' ', 'right')  // "Hello     "
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Text to pad |
| `length` | `number` | `undefined` | Target length |
| `char` | `string` | `" "` | Character to use for padding (defaults to space) |
| `side` | ``"left"`` \| ``"right"`` \| ``"both"`` | `"right"` | Side to pad ('left', 'right', or 'both') |

#### Returns

`string`

Padded text

#### Defined in

[core/src/string-utils.ts:163](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L163)

___

### repeatText

▸ **repeatText**(`text`, `count`): `string`

Repeat text multiple times

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to repeat |
| `count` | `number` | Number of repetitions |

#### Returns

`string`

Repeated text

#### Defined in

[core/src/string-utils.ts:224](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L224)

___

### rightAlign

▸ **rightAlign**(`text`, `width?`): `string`

Right-align text within specified width

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Text to align |
| `width` | `number` | `80` | Target width (defaults to 80) |

#### Returns

`string`

Right-aligned text with left padding

#### Defined in

[core/src/string-utils.ts:84](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L84)

___

### stripAnsi

▸ **stripAnsi**(`text`): `string`

Strip ANSI escape codes from text

**`Example`**

```typescript
import { stripAnsi } from '@iniquitybbs/core/utils'
const plain = stripAnsi("\x1b[1;37mHello\x1b[0m")  // "Hello"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text containing ANSI codes |

#### Returns

`string`

Text with ANSI codes removed

#### Defined in

[core/src/string-utils.ts:116](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L116)

___

### titleText

▸ **titleText**(`text`): `string`

Convert text to title case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to convert |

#### Returns

`string`

Title-cased text

#### Defined in

[core/src/string-utils.ts:214](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L214)

___

### truncateText

▸ **truncateText**(`text`, `maxLength`, `suffix?`): `string`

Truncate text to maximum length

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Text to truncate |
| `maxLength` | `number` | `undefined` | Maximum length |
| `suffix` | `string` | `"..."` | Suffix to add if truncated (defaults to '...') |

#### Returns

`string`

Truncated text

#### Defined in

[core/src/string-utils.ts:142](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L142)

___

### upperText

▸ **upperText**(`text`): `string`

Convert text to uppercase

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to convert |

#### Returns

`string`

Uppercase text

#### Defined in

[core/src/string-utils.ts:196](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L196)

___

### visibleLength

▸ **visibleLength**(`text`): `number`

Get visible length of text (excluding ANSI codes)

**`Example`**

```typescript
import { visibleLength } from '@iniquitybbs/core/utils'
const len = visibleLength("\x1b[1;37mHello\x1b[0m")  // 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to measure |

#### Returns

`number`

Visible character count

#### Defined in

[core/src/string-utils.ts:131](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/string-utils.ts#L131)
