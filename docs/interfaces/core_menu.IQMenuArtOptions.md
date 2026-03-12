# Interface: IQMenuArtOptions

[core/menu](../modules/core_menu.md).IQMenuArtOptions

## Table of contents

### Properties

- [center](core_menu.IQMenuArtOptions.md#center)
- [clearScreenBefore](core_menu.IQMenuArtOptions.md#clearscreenbefore)
- [filename](core_menu.IQMenuArtOptions.md#filename)
- [mode](core_menu.IQMenuArtOptions.md#mode)
- [speed](core_menu.IQMenuArtOptions.md#speed)
- [x](core_menu.IQMenuArtOptions.md#x)
- [y](core_menu.IQMenuArtOptions.md#y)

## Properties

### center

• `Optional` **center**: ``"auto"`` \| ``"horizontal"`` \| ``"vertical"`` \| ``"both"`` \| ``"none"``

Centering mode for artwork positioning based on screen resolution.
- 'auto': Center if artwork is smaller than screen (default)
- 'horizontal': Center horizontally only
- 'vertical': Center vertically only
- 'both': Always center both axes
- 'none': No centering, render at 1,1 (legacy behavior)

#### Defined in

[core/src/menu.ts:58](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L58)

___

### clearScreenBefore

• `Optional` **clearScreenBefore**: `boolean`

#### Defined in

[core/src/menu.ts:49](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L49)

___

### filename

• **filename**: `string`

#### Defined in

[core/src/menu.ts:46](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L46)

___

### mode

• `Optional` **mode**: ``"line"`` \| ``"character"`` \| ``"@-codes"`` \| ``"mci"``

#### Defined in

[core/src/menu.ts:47](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L47)

___

### speed

• `Optional` **speed**: `number`

#### Defined in

[core/src/menu.ts:48](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L48)

___

### x

• `Optional` **x**: `number`

Explicit X position (1-indexed). Overrides centering.

#### Defined in

[core/src/menu.ts:60](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L60)

___

### y

• `Optional` **y**: `number`

Explicit Y position (1-indexed). Overrides centering.

#### Defined in

[core/src/menu.ts:62](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L62)
