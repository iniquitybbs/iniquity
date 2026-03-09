# Module: core/artwork

Artwork Rendering

**`Summary`**

ANSI artwork rendering with SAUCE metadata support and CP437 encoding

## Table of contents

### Classes

- [Artwork](../classes/core_artwork.Artwork.md)

### Interfaces

- [IQArtworkOptions](../interfaces/core_artwork.IQArtworkOptions.md)
- [IQArtworkRenderFunctions](../interfaces/core_artwork.IQArtworkRenderFunctions.md)
- [IQArtworkRenderOptions](../interfaces/core_artwork.IQArtworkRenderOptions.md)
- [SAUCEInfo](../interfaces/core_artwork.SAUCEInfo.md)

### Functions

- [cp437ToUtf8](core_artwork.md#cp437toutf8)

## Functions

### cp437ToUtf8

▸ **cp437ToUtf8**(`cp437String`): `string`

Convert a CP437-encoded string to UTF-8
Preserves ANSI escape sequences (they use only ASCII characters)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cp437String` | `string` | String with CP437 character codes (read as latin1) |

#### Returns

`string`

UTF-8 encoded string

#### Defined in

[core/src/artwork.ts:292](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/artwork.ts#L292)
