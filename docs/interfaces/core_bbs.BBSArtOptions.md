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

[core/src/bbs.ts:153](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L153)

___

### clearScreen

• `Optional` **clearScreen**: `boolean`

Clear screen before rendering

#### Defined in

[core/src/bbs.ts:145](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L145)

___

### data

• `Optional` **data**: `Record`<`string`, `any`\>

Data for MCI code interpolation (accessible as @KEY@ in artwork)

#### Defined in

[core/src/bbs.ts:151](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L151)

___

### display

• `Optional` **display**: ``"line"`` \| ``"character"`` \| ``"instant"``

Display mode: 'line' (line-by-line), 'character' (char-by-char), 'instant' (all at once)

#### Defined in

[core/src/bbs.ts:147](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L147)

___

### encoding

• `Optional` **encoding**: ``"utf8"`` \| ``"cp437"``

Override session encoding for this artwork (default: use session preference)

#### Defined in

[core/src/bbs.ts:161](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L161)

___

### pauseAfter

• `Optional` **pauseAfter**: `string` \| `boolean`

Pause after rendering (true for default pause, string for custom prompt)

#### Defined in

[core/src/bbs.ts:159](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L159)

___

### speed

• `Optional` **speed**: `number`

Speed in milliseconds (for line/character modes)

#### Defined in

[core/src/bbs.ts:149](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L149)

___

### x

• `Optional` **x**: `number`

Explicit X position (1-indexed)

#### Defined in

[core/src/bbs.ts:155](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L155)

___

### y

• `Optional` **y**: `number`

Explicit Y position (1-indexed)

#### Defined in

[core/src/bbs.ts:157](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/bbs.ts#L157)
