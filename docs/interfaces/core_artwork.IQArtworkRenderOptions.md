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

[core/src/artwork.ts:367](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L367)

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

[core/src/artwork.ts:388](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L388)

___

### clearScreenBefore

• `Optional` **clearScreenBefore**: `boolean`

#### Defined in

[core/src/artwork.ts:358](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L358)

___

### data

• `Optional` **data**: `any`

#### Defined in

[core/src/artwork.ts:364](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L364)

___

### display

• `Optional` **display**: ``"line"`` \| ``"character"`` \| ``"instant"``

Display style: 'line' renders line-by-line, 'character' renders char-by-char, 'instant' renders all at once

#### Defined in

[core/src/artwork.ts:360](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L360)

___

### encoding

• `Optional` **encoding**: ``"utf8"`` \| ``"cp437"``

Output encoding for the artwork.
- 'cp437': Send raw CP437 bytes (for BBS terminals like SyncTERM)
- 'utf8': Convert CP437 to UTF-8 (for modern terminals like xterm)
Defaults to 'cp437' for traditional BBS compatibility.

#### Defined in

[core/src/artwork.ts:375](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L375)

___

### filename

• `Optional` **filename**: `string`

#### Defined in

[core/src/artwork.ts:357](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L357)

___

### mode

• `Optional` **mode**: ``"line"`` \| ``"character"`` \| ``"instant"``

**`Deprecated`**

Use 'display' instead

#### Defined in

[core/src/artwork.ts:362](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L362)

___

### pageLength

• `Optional` **pageLength**: `number`

#### Defined in

[core/src/artwork.ts:368](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L368)

___

### processMCI

• `Optional` **processMCI**: `boolean`

Process MCI/pipe codes in artwork. Defaults to true for BBS compatibility.

#### Defined in

[core/src/artwork.ts:366](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L366)

___

### speed

• `Optional` **speed**: `number`

#### Defined in

[core/src/artwork.ts:363](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L363)

___

### x

• `Optional` **x**: `number`

Explicit X position (1-indexed). Overrides centering.

#### Defined in

[core/src/artwork.ts:377](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L377)

___

### y

• `Optional` **y**: `number`

Explicit Y position (1-indexed). Overrides centering.

#### Defined in

[core/src/artwork.ts:379](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/artwork.ts#L379)
