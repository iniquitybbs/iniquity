[Iniquity BBS Developer Guide - v3.0.0](../README.md) / [Exports](../modules.md) / [Iniquity](../modules/Iniquity.md) / Artwork

# Class: Artwork

[Iniquity](../modules/Iniquity.md).Artwork

Core artwork display and manipulation capabilities

## Table of contents

### Constructors

- [constructor](Iniquity.Artwork.md#constructor)

### Properties

- [basepath](Iniquity.Artwork.md#basepath)
- [fileHandle](Iniquity.Artwork.md#filehandle)
- [filename](Iniquity.Artwork.md#filename)

### Methods

- [render](Iniquity.Artwork.md#render)

## Constructors

### constructor

• **new Artwork**(`options`)

The Iniquity Artwork rendering class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/Iniquity.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Defined in

[iniquity.ts:350](https://github.com/iniquitybbs/iniquity/blob/996930f/packages/core/src/iniquity.ts#L350)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:339](https://github.com/iniquitybbs/iniquity/blob/996930f/packages/core/src/iniquity.ts#L339)

___

### fileHandle

• `Private` **fileHandle**: `any`

#### Defined in

[iniquity.ts:341](https://github.com/iniquitybbs/iniquity/blob/996930f/packages/core/src/iniquity.ts#L341)

___

### filename

• **filename**: `string`

#### Defined in

[iniquity.ts:340](https://github.com/iniquitybbs/iniquity/blob/996930f/packages/core/src/iniquity.ts#L340)

## Methods

### render

▸ **render**(`options?`): [`IArtworkRenderFunctions`](../interfaces/Iniquity.IArtworkRenderFunctions.md)

Render a ANSI/ASCII/PETSCII file to the screen

**`see`** @{link IArtworkRenderOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IArtworkRenderOptions`](../interfaces/Iniquity.IArtworkRenderOptions.md) | An object containing the various configuration parameters. |

#### Returns

[`IArtworkRenderFunctions`](../interfaces/Iniquity.IArtworkRenderFunctions.md)

Will render the artwork on the screen as well as provide various render functions.

#### Defined in

[iniquity.ts:362](https://github.com/iniquitybbs/iniquity/blob/996930f/packages/core/src/iniquity.ts#L362)
