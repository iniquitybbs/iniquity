# Interface: IQArtworkRenderOptions

[Core](../modules/Core.md).IQArtworkRenderOptions

Artwork render options

## Table of contents

### Properties

- [basepath](Core.IQArtworkRenderOptions.md#basepath)
- [clearScreenBefore](Core.IQArtworkRenderOptions.md#clearscreenbefore)
- [data](Core.IQArtworkRenderOptions.md#data)
- [encoding](Core.IQArtworkRenderOptions.md#encoding)
- [filename](Core.IQArtworkRenderOptions.md#filename)
- [mode](Core.IQArtworkRenderOptions.md#mode)
- [speed](Core.IQArtworkRenderOptions.md#speed)

## Properties

### basepath

• `Optional` **basepath**: `string`

The full path to your art folder

#### Defined in

[packages/core/src/index.ts:161](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L161)

___

### clearScreenBefore

• `Optional` **clearScreenBefore**: `boolean`

A boolean representing if you want the screen cleared before.

#### Defined in

[packages/core/src/index.ts:181](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L181)

___

### data

• `Optional` **data**: `unknown`

#### Defined in

[packages/core/src/index.ts:182](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L182)

___

### encoding

• `Optional` **encoding**: ``"CP437"`` \| ``"UTF8"``

Supported character encodings are CP437 and UTF8.

#### Defined in

[packages/core/src/index.ts:173](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L173)

___

### filename

• `Optional` **filename**: `string`

The file name of the artwork you would like to render to the screen

#### Defined in

[packages/core/src/index.ts:165](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L165)

___

### mode

• `Optional` **mode**: ``"line"`` \| ``"character"`` \| ``"@-codes"`` \| ``"reactive"``

The rendering mode to use. e.g. Line at a time, character at a time, etc.

#### Defined in

[packages/core/src/index.ts:177](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L177)

___

### speed

• `Optional` **speed**: `number`

How fast you would like the artwork rendered to the screen.

#### Defined in

[packages/core/src/index.ts:169](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L169)
