# Interface: BBSArtOptions

[core/bbs](../modules/core_bbs.md).BBSArtOptions

Options for artwork rendering via bbs.art()

## Table of contents

### Properties

- [center](core_bbs.BBSArtOptions.md#center)
- [clearScreen](core_bbs.BBSArtOptions.md#clearscreen)
- [data](core_bbs.BBSArtOptions.md#data)
- [display](core_bbs.BBSArtOptions.md#display)
- [encoding](core_bbs.BBSArtOptions.md#encoding)
- [pauseAfter](core_bbs.BBSArtOptions.md#pauseafter)
- [speed](core_bbs.BBSArtOptions.md#speed)
- [x](core_bbs.BBSArtOptions.md#x)
- [y](core_bbs.BBSArtOptions.md#y)

## Properties

### center

• `Optional` **center**: ``"auto"`` \| ``"horizontal"`` \| ``"vertical"`` \| ``"both"`` \| ``"none"``

Centering mode for artwork positioning

#### Defined in

[core/src/bbs.ts:152](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L152)

___

### clearScreen

• `Optional` **clearScreen**: `boolean`

Clear screen before rendering

#### Defined in

[core/src/bbs.ts:144](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L144)

___

### data

• `Optional` **data**: `Record`<`string`, `any`\>

Data for MCI code interpolation (accessible as @KEY@ in artwork)

#### Defined in

[core/src/bbs.ts:150](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L150)

___

### display

• `Optional` **display**: ``"line"`` \| ``"character"`` \| ``"instant"``

Display mode: 'line' (line-by-line), 'character' (char-by-char), 'instant' (all at once)

#### Defined in

[core/src/bbs.ts:146](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L146)

___

### encoding

• `Optional` **encoding**: ``"utf8"`` \| ``"cp437"``

Override session encoding for this artwork (default: use session preference)

#### Defined in

[core/src/bbs.ts:160](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L160)

___

### pauseAfter

• `Optional` **pauseAfter**: `string` \| `boolean`

Pause after rendering (true for default pause, string for custom prompt)

#### Defined in

[core/src/bbs.ts:158](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L158)

___

### speed

• `Optional` **speed**: `number`

Speed in milliseconds (for line/character modes)

#### Defined in

[core/src/bbs.ts:148](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L148)

___

### x

• `Optional` **x**: `number`

Explicit X position (1-indexed)

#### Defined in

[core/src/bbs.ts:154](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L154)

___

### y

• `Optional` **y**: `number`

Explicit Y position (1-indexed)

#### Defined in

[core/src/bbs.ts:156](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L156)
