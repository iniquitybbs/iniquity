# Class: Artwork

[Core](../modules/Core.md).Artwork

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

- [constructor](Core.Artwork.md#constructor)

### Properties

- [basepath](Core.Artwork.md#basepath)
- [filename](Core.Artwork.md#filename)

### Methods

- [render](Core.Artwork.md#render)

## Constructors

### constructor

• **new Artwork**(`options`)

The Iniquity Artwork rendering class

**`see`** [IArtworkOptions](../interfaces/Core.IArtworkOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/Core.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Defined in

[core/src/index.ts:379](https://github.com/iniquitybbs/iniquity/blob/54dca2e/packages/core/src/index.ts#L379)

## Properties

### basepath

• **basepath**: `undefined` \| `string`

#### Defined in

[core/src/index.ts:369](https://github.com/iniquitybbs/iniquity/blob/54dca2e/packages/core/src/index.ts#L369)

___

### filename

• **filename**: `undefined` \| `string`

#### Defined in

[core/src/index.ts:370](https://github.com/iniquitybbs/iniquity/blob/54dca2e/packages/core/src/index.ts#L370)

## Methods

### render

▸ **render**(`options?`): [`IArtworkRenderFunctions`](../interfaces/Core.IArtworkRenderFunctions.md)

Render

**`summary`** Display ANSI/ASCII/PETSCII text files onto the screen

**`see`** [IArtworkRenderOptions](../interfaces/Core.IArtworkRenderOptions.md)

**`example`**
```typescript
import { Artwork } from "@iniquitybbs/core"

const art = new Artwork()
art.render({ mode: "line", speed: 100 }).clearScreen().pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IArtworkRenderOptions`](../interfaces/Core.IArtworkRenderOptions.md) | An object containing the various configuration parameters. |

#### Returns

[`IArtworkRenderFunctions`](../interfaces/Core.IArtworkRenderFunctions.md)

Will render the artwork on the screen as well as provide various render functions.

#### Defined in

[core/src/index.ts:399](https://github.com/iniquitybbs/iniquity/blob/54dca2e/packages/core/src/index.ts#L399)
