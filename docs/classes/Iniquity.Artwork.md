# Class: Artwork

[Iniquity](../modules/Iniquity.md).Artwork

Iniquity Core Artwork

**`summary`** Core artwork display and manipulation capabilities

**`example`**
```typescript
import { Artwork } from "@iniquitybbs/core"

const art = new Artwork({ filename: "./path/to/file.ans"})

art.render({ speed: 50}).pause()

art.render({ mode: "line", clearScreenBefore: true }).colorReset().pause()

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

**`see`** [IArtworkOptions](../interfaces/Iniquity.IArtworkOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/Iniquity.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Defined in

[iniquity.ts:379](https://github.com/iniquitybbs/iniquity/blob/c906f17/packages/core/src/iniquity.ts#L379)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:369](https://github.com/iniquitybbs/iniquity/blob/c906f17/packages/core/src/iniquity.ts#L369)

___

### filename

• **filename**: `string`

#### Defined in

[iniquity.ts:370](https://github.com/iniquitybbs/iniquity/blob/c906f17/packages/core/src/iniquity.ts#L370)

## Methods

### render

▸ **render**(`options?`): [`IArtworkRenderFunctions`](../interfaces/Iniquity.IArtworkRenderFunctions.md)

Render

**`summary`** Display ANSI/ASCII/PETSCII text files onto the screen

**`see`** [IArtworkRenderOptions](../interfaces/Iniquity.IArtworkRenderOptions.md)

**`example`**
```typescript
import { Artwork } from "@iniquitybbs/core"

const art = new Artwork()
art.render({ mode: "line", speed: 100 }).clearScreen().pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IArtworkRenderOptions`](../interfaces/Iniquity.IArtworkRenderOptions.md) | An object containing the various configuration parameters. |

#### Returns

[`IArtworkRenderFunctions`](../interfaces/Iniquity.IArtworkRenderFunctions.md)

Will render the artwork on the screen as well as provide various render functions.

#### Defined in

[iniquity.ts:399](https://github.com/iniquitybbs/iniquity/blob/c906f17/packages/core/src/iniquity.ts#L399)
