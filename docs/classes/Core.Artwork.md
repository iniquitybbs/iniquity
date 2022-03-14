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

## Hierarchy

- [`IQBaseConfig`](Core.IQBaseConfig.md)

  ↳ **`Artwork`**

## Table of contents

### Constructors

- [constructor](Core.Artwork.md#constructor)

### Properties

- [access](Core.Artwork.md#access)
- [assets](Core.Artwork.md#assets)
- [basepath](Core.Artwork.md#basepath)
- [computed](Core.Artwork.md#computed)
- [data](Core.Artwork.md#data)
- [encoding](Core.Artwork.md#encoding)
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

#### Overrides

[IQBaseConfig](Core.IQBaseConfig.md).[constructor](Core.IQBaseConfig.md#constructor)

#### Defined in

[packages/core/src/index.ts:820](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L820)

## Properties

### access

• **access**: [`IQModuleACLS`](../enums/Core.IQModuleACLS.md)

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[access](Core.IQBaseConfig.md#access)

#### Defined in

[packages/core/src/index.ts:309](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L309)

___

### assets

• **assets**: `string`

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[assets](Core.IQBaseConfig.md#assets)

#### Defined in

[packages/core/src/index.ts:308](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L308)

___

### basepath

• **basepath**: `string`

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[basepath](Core.IQBaseConfig.md#basepath)

#### Defined in

[packages/core/src/index.ts:307](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L307)

___

### computed

• **computed**: `any`

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[computed](Core.IQBaseConfig.md#computed)

#### Defined in

[packages/core/src/index.ts:312](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L312)

___

### data

• **data**: [`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[data](Core.IQBaseConfig.md#data)

#### Defined in

[packages/core/src/index.ts:311](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L311)

___

### encoding

• **encoding**: ``"CP437"`` \| ``"UTF8"``

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[encoding](Core.IQBaseConfig.md#encoding)

#### Defined in

[packages/core/src/index.ts:310](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L310)

___

### filename

• **filename**: `undefined` \| `string`

#### Defined in

[packages/core/src/index.ts:811](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L811)

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

[packages/core/src/index.ts:841](https://github.com/iniquitybbs/iniquity/blob/55edf2a/packages/core/src/index.ts#L841)
