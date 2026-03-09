# Class: ANSI

[runtime/ansi](../modules/runtime_ansi.md).ANSI

## Table of contents

### Constructors

- [constructor](runtime_ansi.ANSI.md#constructor)

### Properties

- [CGA](runtime_ansi.ANSI.md#cga)
- [bgColors](runtime_ansi.ANSI.md#bgcolors)
- [colors](runtime_ansi.ANSI.md#colors)
- [cursor](runtime_ansi.ANSI.md#cursor)
- [cursorStyles](runtime_ansi.ANSI.md#cursorstyles)
- [fontAliases](runtime_ansi.ANSI.md#fontaliases)
- [syncTermFonts](runtime_ansi.ANSI.md#synctermfonts)
- [telnet](runtime_ansi.ANSI.md#telnet)

### Methods

- [attr](runtime_ansi.ANSI.md#attr)
- [attrToAnsi](runtime_ansi.ANSI.md#attrtoansi)
- [clearScreen](runtime_ansi.ANSI.md#clearscreen)
- [color](runtime_ansi.ANSI.md#color)
- [disableIceColors](runtime_ansi.ANSI.md#disableicecolors)
- [enableIceColors](runtime_ansi.ANSI.md#enableicecolors)
- [getFontFromAlias](runtime_ansi.ANSI.md#getfontfromalias)
- [gotoxy](runtime_ansi.ANSI.md#gotoxy)
- [hideCursor](runtime_ansi.ANSI.md#hidecursor)
- [queryDeviceAttributes](runtime_ansi.ANSI.md#querydeviceattributes)
- [reset](runtime_ansi.ANSI.md#reset)
- [setCursorStyle](runtime_ansi.ANSI.md#setcursorstyle)
- [setEmulatedBaudRate](runtime_ansi.ANSI.md#setemulatedbaudrate)
- [setSyncTermFont](runtime_ansi.ANSI.md#setsynctermfont)
- [setSyncTermFontWithAlias](runtime_ansi.ANSI.md#setsynctermfontwithalias)
- [showCursor](runtime_ansi.ANSI.md#showcursor)
- [telnetCommand](runtime_ansi.ANSI.md#telnetcommand)

## Constructors

### constructor

• **new ANSI**()

## Properties

### CGA

▪ `Static` `Readonly` **CGA**: `Object` = `CGA`

CGA attribute constants (re-exported for convenience)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BG_BLACK` | ``0`` |
| `BG_BLUE` | ``16`` |
| `BG_BROWN` | ``96`` |
| `BG_CYAN` | ``48`` |
| `BG_GREEN` | ``32`` |
| `BG_LIGHTGRAY` | ``112`` |
| `BG_MAGENTA` | ``80`` |
| `BG_RED` | ``64`` |
| `BLACK` | ``0`` |
| `BLINK` | ``128`` |
| `BLUE` | ``1`` |
| `BROWN` | ``6`` |
| `CYAN` | ``3`` |
| `DARKGRAY` | ``8`` |
| `GREEN` | ``2`` |
| `HIGH` | ``8`` |
| `LIGHTBLUE` | ``9`` |
| `LIGHTCYAN` | ``11`` |
| `LIGHTGRAY` | ``7`` |
| `LIGHTGREEN` | ``10`` |
| `LIGHTMAGENTA` | ``13`` |
| `LIGHTRED` | ``12`` |
| `MAGENTA` | ``5`` |
| `RED` | ``4`` |
| `WHITE` | ``15`` |
| `YELLOW` | ``14`` |

#### Defined in

[core/src/ansi.ts:65](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L65)

___

### bgColors

▪ `Static` **bgColors**: `Object`

Background colors

#### Type declaration

| Name | Type |
| :------ | :------ |
| `black` | `string` |
| `blue` | `string` |
| `brightBlack` | `string` |
| `brightBlue` | `string` |
| `brightCyan` | `string` |
| `brightGreen` | `string` |
| `brightMagenta` | `string` |
| `brightRed` | `string` |
| `brightWhite` | `string` |
| `brightYellow` | `string` |
| `cyan` | `string` |
| `green` | `string` |
| `magenta` | `string` |
| `red` | `string` |
| `white` | `string` |
| `yellow` | `string` |

#### Defined in

[core/src/ansi.ts:179](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L179)

___

### colors

▪ `Static` **colors**: `Object`

Foreground colors

#### Type declaration

| Name | Type |
| :------ | :------ |
| `black` | `string` |
| `blue` | `string` |
| `brightBlack` | `string` |
| `brightBlue` | `string` |
| `brightCyan` | `string` |
| `brightGreen` | `string` |
| `brightMagenta` | `string` |
| `brightRed` | `string` |
| `brightWhite` | `string` |
| `brightYellow` | `string` |
| `cyan` | `string` |
| `green` | `string` |
| `magenta` | `string` |
| `red` | `string` |
| `white` | `string` |
| `yellow` | `string` |

#### Defined in

[core/src/ansi.ts:157](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L157)

___

### cursor

▪ `Static` **cursor**: `Object`

Cursor movement

#### Type declaration

| Name | Type |
| :------ | :------ |
| `down` | (`n`: `number`) => `string` |
| `hide` | () => `string` |
| `left` | (`n`: `number`) => `string` |
| `restore` | () => `string` |
| `right` | (`n`: `number`) => `string` |
| `save` | () => `string` |
| `show` | () => `string` |
| `up` | (`n`: `number`) => `string` |

#### Defined in

[core/src/ansi.ts:219](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L219)

___

### cursorStyles

▪ `Static` **cursorStyles**: `Object`

Cursor style control (DEC)

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[core/src/ansi.ts:412](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L412)

___

### fontAliases

▪ `Static` **fontAliases**: `Object`

Font alias mapping for SAUCE compatibility
Maps common SAUCE font names to SyncTERM font names

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[core/src/ansi.ts:311](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L311)

___

### syncTermFonts

▪ `Static` **syncTermFonts**: `Object`

SyncTERM/CTerm Font Table
Maps font names to their ESC sequence codes
See: https://github.com/protomouse/synchronet/blob/master/src/conio/cterm.txt

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[core/src/ansi.ts:273](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L273)

___

### telnet

▪ `Static` **telnet**: `Object`

Telnet protocol commands

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DO` | `number` |
| `DONT` | `number` |
| `ECHO` | `number` |
| `IAC` | `number` |
| `LINEMODE` | `number` |
| `NAWS` | `number` |
| `SB` | `number` |
| `SE` | `number` |
| `SUPPRESS_GO_AHEAD` | `number` |
| `TERMINAL_TYPE` | `number` |
| `WILL` | `number` |
| `WONT` | `number` |

#### Defined in

[core/src/ansi.ts:233](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L233)

## Methods

### attr

▸ `Static` **attr**(`fg`, `bg?`, `blink?`, `high?`): `number`

Create a CGA attribute from foreground, background, and flags

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fg` | `number` | `undefined` |
| `bg` | `number` | `0` |
| `blink` | `boolean` | `false` |
| `high` | `boolean` | `false` |

#### Returns

`number`

#### Defined in

[core/src/ansi.ts:70](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L70)

___

### attrToAnsi

▸ `Static` **attrToAnsi**(`attr`): `string`

Convert CGA attribute to ANSI escape sequence

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `number` |

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:80](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L80)

___

### clearScreen

▸ `Static` **clearScreen**(): `string`

Clear the entire screen and move cursor to home position

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:136](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L136)

___

### color

▸ `Static` **color**(`name`): `string`

Get color code by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:201](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L201)

___

### disableIceColors

▸ `Static` **disableIceColors**(): `string`

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:264](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L264)

___

### enableIceColors

▸ `Static` **enableIceColors**(): `string`

iCE Colors - Blink to Bright Intensity
Converts blink attribute (bit 7) to bright background colors
Essential for most modern BBS ANSI art

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:260](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L260)

___

### getFontFromAlias

▸ `Static` **getFontFromAlias**(`alias`): `undefined` \| `string`

Get SyncTERM font name from alias (e.g., SAUCE font name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[core/src/ansi.ts:370](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L370)

___

### gotoxy

▸ `Static` **gotoxy**(`x`, `y`): `string`

Move cursor to specific position (1-indexed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:143](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L143)

___

### hideCursor

▸ `Static` **hideCursor**(): `string`

Hide cursor (non-standard, widely supported)

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:440](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L440)

___

### queryDeviceAttributes

▸ `Static` **queryDeviceAttributes**(): `string`

Query device attributes (for terminal detection)

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:433](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L433)

___

### reset

▸ `Static` **reset**(): `string`

Reset all attributes

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:150](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L150)

___

### setCursorStyle

▸ `Static` **setCursorStyle**(`style`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `string` |

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:422](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L422)

___

### setEmulatedBaudRate

▸ `Static` **setEmulatedBaudRate**(`rate`): `string`

Set emulated baud rate (CTerm/SyncTERM)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rate` | `string` \| `number` | Baud rate (300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 76800, 115200, or 0/'unlimited') |

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:387](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L387)

___

### setSyncTermFont

▸ `Static` **setSyncTermFont**(`fontName`, `page?`): `string`

Set SyncTERM font

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fontName` | `string` | `undefined` | Font name (from syncTermFonts table) |
| `page` | `number` | `0` | Font page (0-3, default 0) |

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:359](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L359)

___

### setSyncTermFontWithAlias

▸ `Static` **setSyncTermFontWithAlias**(`aliasOrName`, `page?`): `string`

Set SyncTERM font using alias (handles SAUCE font names)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aliasOrName` | `string` | `undefined` |
| `page` | `number` | `0` |

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:378](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L378)

___

### showCursor

▸ `Static` **showCursor**(): `string`

Show cursor (non-standard, widely supported)

#### Returns

`string`

#### Defined in

[core/src/ansi.ts:447](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L447)

___

### telnetCommand

▸ `Static` **telnetCommand**(`command`, `option`): `Buffer`

Create Telnet negotiation sequence

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `number` |
| `option` | `number` |

#### Returns

`Buffer`

#### Defined in

[core/src/ansi.ts:251](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/ansi.ts#L251)
