# Class: Artwork

[BBS](../modules/BBS.md).Artwork

Core artwork display and manipulation capabilities

**`example`**
```typedoc
import { Artwork } from "@iniquitybbs/"
```

## Table of contents

### Constructors

- [constructor](BBS.Artwork.md#constructor)

### Properties

- [basepath](BBS.Artwork.md#basepath)
- [fileHandle](BBS.Artwork.md#filehandle)
- [filename](BBS.Artwork.md#filename)

### Methods

- [render](BBS.Artwork.md#render)

## Constructors

### constructor

• **new Artwork**(`options`)

The Iniquity Artwork rendering class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/BBS.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Defined in

iniquity.ts:369

## Properties

### basepath

• **basepath**: `string`

#### Defined in

iniquity.ts:358

___

### fileHandle

• `Private` **fileHandle**: `any`

#### Defined in

iniquity.ts:360

___

### filename

• **filename**: `string`

#### Defined in

iniquity.ts:359

## Methods

### render

▸ **render**(`options?`): [`IArtworkRenderFunctions`](../interfaces/BBS.IArtworkRenderFunctions.md)

Render a ANSI/ASCII/PETSCII file to the screen

**`see`** [IArtworkRenderOptions](../interfaces/BBS.IArtworkRenderOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IArtworkRenderOptions`](../interfaces/BBS.IArtworkRenderOptions.md) | An object containing the various configuration parameters. |

#### Returns

[`IArtworkRenderFunctions`](../interfaces/BBS.IArtworkRenderFunctions.md)

Will render the artwork on the screen as well as provide various render functions.

#### Defined in

iniquity.ts:381
