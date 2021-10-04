# Class: Artwork

[core/src/iniquity](../wiki/core.src.iniquity).Artwork

Core artwork display and manipulation capabilities

## Table of contents

### Constructors

- [constructor](../wiki/core.src.iniquity.Artwork#constructor)

### Properties

- [basepath](../wiki/core.src.iniquity.Artwork#basepath)
- [fileHandle](../wiki/core.src.iniquity.Artwork#filehandle)
- [filename](../wiki/core.src.iniquity.Artwork#filename)

### Methods

- [render](../wiki/core.src.iniquity.Artwork#render)

## Constructors

### constructor

• **new Artwork**(`options`)

The Iniquity Artwork rendering class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `IArtworkOptions` | An object containing the various configuration properties. |

#### Defined in

[iniquity.ts:315](https://github.com/iniquitybbs/iniquity/blob/4c9db7a/packages/core/src/iniquity.ts#L315)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:304](https://github.com/iniquitybbs/iniquity/blob/4c9db7a/packages/core/src/iniquity.ts#L304)

___

### fileHandle

• `Private` **fileHandle**: `any`

#### Defined in

[iniquity.ts:306](https://github.com/iniquitybbs/iniquity/blob/4c9db7a/packages/core/src/iniquity.ts#L306)

___

### filename

• **filename**: `string`

#### Defined in

[iniquity.ts:305](https://github.com/iniquitybbs/iniquity/blob/4c9db7a/packages/core/src/iniquity.ts#L305)

## Methods

### render

▸ **render**(`options?`): `IArtworkRenderFunctions`

Render a ANSI/ASCII/PETSCII file to the screen

**`see`** @{link IArtworkRenderOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `IArtworkRenderOptions` | An object containing the various configuration parameters. |

#### Returns

`IArtworkRenderFunctions`

Will render the artwork on the screen as well as provide various render functions.

#### Defined in

[iniquity.ts:327](https://github.com/iniquitybbs/iniquity/blob/4c9db7a/packages/core/src/iniquity.ts#L327)
