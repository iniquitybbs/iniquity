# Interface: BBSMenuOptions

[core/bbs](../modules/core_bbs.md).BBSMenuOptions

Options for declarative menu definition

## Table of contents

### Properties

- [art](core_bbs.BBSMenuOptions.md#art)
- [artCenter](core_bbs.BBSMenuOptions.md#artcenter)
- [artX](core_bbs.BBSMenuOptions.md#artx)
- [artY](core_bbs.BBSMenuOptions.md#arty)
- [basepath](core_bbs.BBSMenuOptions.md#basepath)
- [col1X](core_bbs.BBSMenuOptions.md#col1x)
- [col1Y](core_bbs.BBSMenuOptions.md#col1y)
- [col2X](core_bbs.BBSMenuOptions.md#col2x)
- [col2Y](core_bbs.BBSMenuOptions.md#col2y)
- [hotkeys](core_bbs.BBSMenuOptions.md#hotkeys)
- [itemFormat](core_bbs.BBSMenuOptions.md#itemformat)
- [items](core_bbs.BBSMenuOptions.md#items)
- [itemsX](core_bbs.BBSMenuOptions.md#itemsx)
- [itemsY](core_bbs.BBSMenuOptions.md#itemsy)
- [layout](core_bbs.BBSMenuOptions.md#layout)
- [mouse](core_bbs.BBSMenuOptions.md#mouse)
- [mouseHighlightFormat](core_bbs.BBSMenuOptions.md#mousehighlightformat)
- [prompt](core_bbs.BBSMenuOptions.md#prompt)
- [promptX](core_bbs.BBSMenuOptions.md#promptx)
- [promptY](core_bbs.BBSMenuOptions.md#prompty)

## Properties

### art

• `Optional` **art**: `string`

Artwork filename to display

#### Defined in

[core/src/bbs.ts:63](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L63)

___

### artCenter

• `Optional` **artCenter**: ``"auto"`` \| ``"horizontal"`` \| ``"vertical"`` \| ``"both"`` \| ``"none"``

Centering mode for menu artwork positioning based on screen resolution.
- 'auto': Center if artwork is smaller than screen (default)
- 'horizontal': Center horizontally only
- 'vertical': Center vertically only
- 'both': Always center both axes
- 'none': No centering, render at 1,1 (legacy behavior)

#### Defined in

[core/src/bbs.ts:72](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L72)

___

### artX

• `Optional` **artX**: `number`

Explicit X position for artwork (1-indexed). Overrides centering.

#### Defined in

[core/src/bbs.ts:74](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L74)

___

### artY

• `Optional` **artY**: `number`

Explicit Y position for artwork (1-indexed). Overrides centering.

#### Defined in

[core/src/bbs.ts:76](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L76)

___

### basepath

• `Optional` **basepath**: `string`

Base path for artwork files

#### Defined in

[core/src/bbs.ts:86](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L86)

___

### col1X

• `Optional` **col1X**: `number`

Column 1 (left) X position for two-column layout

#### Defined in

[core/src/bbs.ts:95](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L95)

___

### col1Y

• `Optional` **col1Y**: `number`

Column 1 (left) starting Y position

#### Defined in

[core/src/bbs.ts:97](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L97)

___

### col2X

• `Optional` **col2X**: `number`

Column 2 (right) X position for two-column layout

#### Defined in

[core/src/bbs.ts:99](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L99)

___

### col2Y

• `Optional` **col2Y**: `number`

Column 2 (right) starting Y position

#### Defined in

[core/src/bbs.ts:101](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L101)

___

### hotkeys

• `Optional` **hotkeys**: `boolean`

Enable keyboard hotkeys for menu items (default true)

#### Defined in

[core/src/bbs.ts:107](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L107)

___

### itemFormat

• `Optional` **itemFormat**: `string`

Format string for menu items (e.g., "|11[|15{key}|11] |07{label}")

#### Defined in

[core/src/bbs.ts:88](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L88)

___

### items

• **items**: [`BBSMenuItem`](core_bbs.BBSMenuItem.md)[]

Menu items

#### Defined in

[core/src/bbs.ts:90](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L90)

___

### itemsX

• `Optional` **itemsX**: `number`

Starting X position for single-column layout

#### Defined in

[core/src/bbs.ts:103](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L103)

___

### itemsY

• `Optional` **itemsY**: `number`

Starting Y position for items (used by both layouts if col1Y/col2Y not set)

#### Defined in

[core/src/bbs.ts:105](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L105)

___

### layout

• `Optional` **layout**: ``"single"`` \| ``"two-column"``

Layout mode for auto-positioning

#### Defined in

[core/src/bbs.ts:84](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L84)

___

### mouse

• `Optional` **mouse**: `boolean`

Enable SGR mouse for clicking items (default true)

#### Defined in

[core/src/bbs.ts:109](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L109)

___

### mouseHighlightFormat

• `Optional` **mouseHighlightFormat**: `string`

MCI string for "pressed" look when an item is clicked (e.g. "|15|16")

#### Defined in

[core/src/bbs.ts:111](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L111)

___

### prompt

• `Optional` **prompt**: `string`

Custom prompt text (supports MCI/pipe codes)

#### Defined in

[core/src/bbs.ts:78](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L78)

___

### promptX

• `Optional` **promptX**: `number`

X position for prompt (if not specified, auto-centered)

#### Defined in

[core/src/bbs.ts:80](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L80)

___

### promptY

• `Optional` **promptY**: `number`

Y position for prompt (if not specified, uses layout default)

#### Defined in

[core/src/bbs.ts:82](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L82)
