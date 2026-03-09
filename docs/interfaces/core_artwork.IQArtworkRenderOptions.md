# Interface: IQArtworkRenderOptions

[core/artwork](../modules/core_artwork.md).IQArtworkRenderOptions

Artwork render options

## Table of contents

### Properties

- [autoPause](core_artwork.IQArtworkRenderOptions.md#autopause)
- [center](core_artwork.IQArtworkRenderOptions.md#center)
- [clearScreenBefore](core_artwork.IQArtworkRenderOptions.md#clearscreenbefore)
- [data](core_artwork.IQArtworkRenderOptions.md#data)
- [display](core_artwork.IQArtworkRenderOptions.md#display)
- [encoding](core_artwork.IQArtworkRenderOptions.md#encoding)
- [filename](core_artwork.IQArtworkRenderOptions.md#filename)
- [mode](core_artwork.IQArtworkRenderOptions.md#mode)
- [pageLength](core_artwork.IQArtworkRenderOptions.md#pagelength)
- [processMCI](core_artwork.IQArtworkRenderOptions.md#processmci)
- [speed](core_artwork.IQArtworkRenderOptions.md#speed)
- [x](core_artwork.IQArtworkRenderOptions.md#x)
- [y](core_artwork.IQArtworkRenderOptions.md#y)

## Properties

### autoPause

• `Optional` **autoPause**: `boolean`

#### Defined in

[core/src/artwork.ts:347](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L347)

___

### center

• `Optional` **center**: ``"auto"`` \| ``"horizontal"`` \| ``"vertical"`` \| ``"both"`` \| ``"none"``

Centering mode for artwork positioning based on screen resolution.
- 'auto': Center if artwork is smaller than screen (default)
- 'horizontal': Center horizontally only
- 'vertical': Center vertically only
- 'both': Always center both axes
- 'none': No centering, render at 1,1 (legacy behavior)

#### Defined in

[core/src/artwork.ts:368](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L368)

___

### clearScreenBefore

• `Optional` **clearScreenBefore**: `boolean`

#### Defined in

[core/src/artwork.ts:338](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L338)

___

### data

• `Optional` **data**: `any`

#### Defined in

[core/src/artwork.ts:344](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L344)

___

### display

• `Optional` **display**: ``"line"`` \| ``"character"`` \| ``"instant"``

Display style: 'line' renders line-by-line, 'character' renders char-by-char, 'instant' renders all at once

#### Defined in

[core/src/artwork.ts:340](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L340)

___

### encoding

• `Optional` **encoding**: ``"cp437"`` \| ``"utf8"``

Output encoding for the artwork.
- 'cp437': Send raw CP437 bytes (for BBS terminals like SyncTERM)
- 'utf8': Convert CP437 to UTF-8 (for modern terminals like xterm)
Defaults to 'cp437' for traditional BBS compatibility.

#### Defined in

[core/src/artwork.ts:355](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L355)

___

### filename

• `Optional` **filename**: `string`

#### Defined in

[core/src/artwork.ts:337](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L337)

___

### mode

• `Optional` **mode**: ``"line"`` \| ``"character"`` \| ``"instant"``

**`Deprecated`**

Use 'display' instead

#### Defined in

[core/src/artwork.ts:342](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L342)

___

### pageLength

• `Optional` **pageLength**: `number`

#### Defined in

[core/src/artwork.ts:348](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L348)

___

### processMCI

• `Optional` **processMCI**: `boolean`

Process MCI/pipe codes in artwork. Defaults to true for BBS compatibility.

#### Defined in

[core/src/artwork.ts:346](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L346)

___

### speed

• `Optional` **speed**: `number`

#### Defined in

[core/src/artwork.ts:343](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L343)

___

### x

• `Optional` **x**: `number`

Explicit X position (1-indexed). Overrides centering.

#### Defined in

[core/src/artwork.ts:357](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L357)

___

### y

• `Optional` **y**: `number`

Explicit Y position (1-indexed). Overrides centering.

#### Defined in

[core/src/artwork.ts:359](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/artwork.ts#L359)
