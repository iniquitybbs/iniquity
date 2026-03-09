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

[core/src/bbs.ts:43](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L43)

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

[core/src/bbs.ts:52](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L52)

___

### artX

• `Optional` **artX**: `number`

Explicit X position for artwork (1-indexed). Overrides centering.

#### Defined in

[core/src/bbs.ts:54](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L54)

___

### artY

• `Optional` **artY**: `number`

Explicit Y position for artwork (1-indexed). Overrides centering.

#### Defined in

[core/src/bbs.ts:56](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L56)

___

### basepath

• `Optional` **basepath**: `string`

Base path for artwork files

#### Defined in

[core/src/bbs.ts:66](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L66)

___

### col1X

• `Optional` **col1X**: `number`

Column 1 (left) X position for two-column layout

#### Defined in

[core/src/bbs.ts:75](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L75)

___

### col1Y

• `Optional` **col1Y**: `number`

Column 1 (left) starting Y position

#### Defined in

[core/src/bbs.ts:77](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L77)

___

### col2X

• `Optional` **col2X**: `number`

Column 2 (right) X position for two-column layout

#### Defined in

[core/src/bbs.ts:79](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L79)

___

### col2Y

• `Optional` **col2Y**: `number`

Column 2 (right) starting Y position

#### Defined in

[core/src/bbs.ts:81](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L81)

___

### hotkeys

• `Optional` **hotkeys**: `boolean`

Enable keyboard hotkeys for menu items (default true)

#### Defined in

[core/src/bbs.ts:87](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L87)

___

### itemFormat

• `Optional` **itemFormat**: `string`

Format string for menu items (e.g., "|11[|15{key}|11] |07{label}")

#### Defined in

[core/src/bbs.ts:68](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L68)

___

### items

• **items**: [`BBSMenuItem`](core_bbs.BBSMenuItem.md)[]

Menu items

#### Defined in

[core/src/bbs.ts:70](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L70)

___

### itemsX

• `Optional` **itemsX**: `number`

Starting X position for single-column layout

#### Defined in

[core/src/bbs.ts:83](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L83)

___

### itemsY

• `Optional` **itemsY**: `number`

Starting Y position for items (used by both layouts if col1Y/col2Y not set)

#### Defined in

[core/src/bbs.ts:85](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L85)

___

### layout

• `Optional` **layout**: ``"single"`` \| ``"two-column"``

Layout mode for auto-positioning

#### Defined in

[core/src/bbs.ts:64](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L64)

___

### mouse

• `Optional` **mouse**: `boolean`

Enable SGR mouse for clicking items (default true)

#### Defined in

[core/src/bbs.ts:89](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L89)

___

### mouseHighlightFormat

• `Optional` **mouseHighlightFormat**: `string`

MCI string for "pressed" look when an item is clicked (e.g. "|15|16")

#### Defined in

[core/src/bbs.ts:91](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L91)

___

### prompt

• `Optional` **prompt**: `string`

Custom prompt text (supports MCI/pipe codes)

#### Defined in

[core/src/bbs.ts:58](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L58)

___

### promptX

• `Optional` **promptX**: `number`

X position for prompt (if not specified, auto-centered)

#### Defined in

[core/src/bbs.ts:60](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L60)

___

### promptY

• `Optional` **promptY**: `number`

Y position for prompt (if not specified, uses layout default)

#### Defined in

[core/src/bbs.ts:62](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/bbs.ts#L62)
