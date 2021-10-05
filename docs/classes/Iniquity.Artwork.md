# Class: Artwork

[Iniquity](../modules/Iniquity.md).Artwork

Iniquity Core Artwork

**`summary`** Core artwork display and manipulation capabilities

**`example`**
```typescript
import { Artwork } from "@iniquitybbs/core"

const art = new Artwork({ filename: "./path/to/file.ans"})
art.render().pause()

```

## Table of contents

### Constructors

- [constructor](Iniquity.Artwork.md#constructor)

### Properties

- [basepath](Iniquity.Artwork.md#basepath)
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

[iniquity.ts:374](https://github.com/iniquitybbs/iniquity/blob/1e096e6/packages/core/src/iniquity.ts#L374)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:363](https://github.com/iniquitybbs/iniquity/blob/1e096e6/packages/core/src/iniquity.ts#L363)

___

### filename

• **filename**: `string`

#### Defined in

[iniquity.ts:364](https://github.com/iniquitybbs/iniquity/blob/1e096e6/packages/core/src/iniquity.ts#L364)

## Methods

### render

▸ **render**(`options?`): [`IArtworkRenderFunctions`](../interfaces/Iniquity.IArtworkRenderFunctions.md)

Render a ANSI/ASCII/PETSCII file to the screen

**`see`** [IArtworkRenderOptions](../interfaces/Iniquity.IArtworkRenderOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IArtworkRenderOptions`](../interfaces/Iniquity.IArtworkRenderOptions.md) | An object containing the various configuration parameters. |

#### Returns

[`IArtworkRenderFunctions`](../interfaces/Iniquity.IArtworkRenderFunctions.md)

Will render the artwork on the screen as well as provide various render functions.

#### Defined in

[iniquity.ts:386](https://github.com/iniquitybbs/iniquity/blob/1e096e6/packages/core/src/iniquity.ts#L386)
