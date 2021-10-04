[Iniquity BBS Developer Guide - v1.0.0](../README.md) / [Exports](../modules.md) / [core/src/iniquity](../modules/core_src_iniquity.md) / Artwork

# Class: Artwork

[core/src/iniquity](../modules/core_src_iniquity.md).Artwork

Core artwork display and manipulation capabilities

## Table of contents

### Constructors

- [constructor](core_src_iniquity.Artwork.md#constructor)

### Properties

- [basepath](core_src_iniquity.Artwork.md#basepath)
- [fileHandle](core_src_iniquity.Artwork.md#filehandle)
- [filename](core_src_iniquity.Artwork.md#filename)

### Methods

- [render](core_src_iniquity.Artwork.md#render)

## Constructors

### constructor

• **new Artwork**(`options`)

The Iniquity Artwork rendering class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/core_src_iniquity.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Defined in

[iniquity.ts:315](https://github.com/iniquitybbs/iniquity/blob/30dc617/packages/core/src/iniquity.ts#L315)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:304](https://github.com/iniquitybbs/iniquity/blob/30dc617/packages/core/src/iniquity.ts#L304)

___

### fileHandle

• `Private` **fileHandle**: `any`

#### Defined in

[iniquity.ts:306](https://github.com/iniquitybbs/iniquity/blob/30dc617/packages/core/src/iniquity.ts#L306)

___

### filename

• **filename**: `string`

#### Defined in

[iniquity.ts:305](https://github.com/iniquitybbs/iniquity/blob/30dc617/packages/core/src/iniquity.ts#L305)

## Methods

### render

▸ **render**(`options?`): [`IArtworkRenderFunctions`](../interfaces/core_src_iniquity.IArtworkRenderFunctions.md)

Render a ANSI/ASCII/PETSCII file to the screen

**`see`** @{link IArtworkRenderOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IArtworkRenderOptions`](../interfaces/core_src_iniquity.IArtworkRenderOptions.md) | An object containing the various configuration parameters. |

#### Returns

[`IArtworkRenderFunctions`](../interfaces/core_src_iniquity.IArtworkRenderFunctions.md)

Will render the artwork on the screen as well as provide various render functions.

#### Defined in

[iniquity.ts:327](https://github.com/iniquitybbs/iniquity/blob/30dc617/packages/core/src/iniquity.ts#L327)
