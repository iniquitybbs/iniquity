# Class: Artwork

[core/artwork](../modules/core_artwork.md).Artwork

Artwork class for rendering ANSI art files with SAUCE metadata support

## Table of contents

### Constructors

- [constructor](core_artwork.Artwork.md#constructor)

### Methods

- [getContent](core_artwork.Artwork.md#getcontent)
- [getSauceInfo](core_artwork.Artwork.md#getsauceinfo)
- [render](core_artwork.Artwork.md#render)
- [toGraphic](core_artwork.Artwork.md#tographic)

## Constructors

### constructor

• **new Artwork**(`basepath`, `output`, `programDir?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `basepath` | `string` | `undefined` |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) | `undefined` |
| `programDir` | `string` | `""` |

#### Defined in

[core/src/artwork.ts:414](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/artwork.ts#L414)

## Methods

### getContent

▸ **getContent**(`filename`): `string`

Get raw content of artwork file without rendering

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`string`

#### Defined in

[core/src/artwork.ts:760](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/artwork.ts#L760)

___

### getSauceInfo

▸ **getSauceInfo**(): ``null`` \| [`SAUCEInfo`](../interfaces/core_artwork.SAUCEInfo.md)

Get SAUCE metadata for the last rendered artwork

#### Returns

``null`` \| [`SAUCEInfo`](../interfaces/core_artwork.SAUCEInfo.md)

#### Defined in

[core/src/artwork.ts:424](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/artwork.ts#L424)

___

### render

▸ **render**(`options`): [`IQArtworkRenderFunctions`](../interfaces/core_artwork.IQArtworkRenderFunctions.md)

Render ANSI artwork to the screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQArtworkRenderOptions`](../interfaces/core_artwork.IQArtworkRenderOptions.md) |

#### Returns

[`IQArtworkRenderFunctions`](../interfaces/core_artwork.IQArtworkRenderFunctions.md)

#### Defined in

[core/src/artwork.ts:431](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/artwork.ts#L431)

___

### toGraphic

▸ **toGraphic**(`filename`, `width?`, `height?`, `processMCI?`): [`Graphic`](core_graphic.Graphic.md)

Load artwork into a Graphic object instead of rendering

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filename` | `string` | `undefined` |
| `width?` | `number` | `undefined` |
| `height?` | `number` | `undefined` |
| `processMCI` | `boolean` | `false` |

#### Returns

[`Graphic`](core_graphic.Graphic.md)

#### Defined in

[core/src/artwork.ts:736](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/artwork.ts#L736)
