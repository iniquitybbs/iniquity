# Class: CTerm

[core/cterm](../modules/core_cterm.md).CTerm

CTerm class for terminal capability detection

## Table of contents

### Constructors

- [constructor](core_cterm.CTerm.md#constructor)

### Properties

- [FONT\_SLOT\_FIRST](core_cterm.CTerm.md#font_slot_first)
- [FONT\_SLOT\_LAST](core_cterm.CTerm.md#font_slot_last)
- [FONT\_STYLES](core_cterm.CTerm.md#font_styles)
- [VERSION\_B64\_FONTS](core_cterm.CTerm.md#version_b64_fonts)
- [VERSION\_COPY\_BUFFERS](core_cterm.CTerm.md#version_copy_buffers)
- [VERSION\_FONTDIM\_QUERY](core_cterm.CTerm.md#version_fontdim_query)
- [VERSION\_FONTS](core_cterm.CTerm.md#version_fonts)
- [VERSION\_FONTSTATE\_QUERY](core_cterm.CTerm.md#version_fontstate_query)
- [VERSION\_JPEGXL](core_cterm.CTerm.md#version_jpegxl)
- [VERSION\_MODE\_QUERY](core_cterm.CTerm.md#version_mode_query)
- [VERSION\_PALETTE](core_cterm.CTerm.md#version_palette)
- [VERSION\_SIXEL](core_cterm.CTerm.md#version_sixel)

### Methods

- [getCapabilitiesFromVersion](core_cterm.CTerm.md#getcapabilitiesfromversion)
- [loadFontSequence](core_cterm.CTerm.md#loadfontsequence)
- [mouseButtonEventsSequence](core_cterm.CTerm.md#mousebuttoneventssequence)
- [mouseMotionEventsSequence](core_cterm.CTerm.md#mousemotioneventssequence)
- [mouseSgrModeSequence](core_cterm.CTerm.md#mousesgrmodesequence)
- [mouseTrackingSequence](core_cterm.CTerm.md#mousetrackingsequence)
- [parseDeviceAttributesResponse](core_cterm.CTerm.md#parsedeviceattributesresponse)
- [parseFontDimensionsResponse](core_cterm.CTerm.md#parsefontdimensionsresponse)
- [parseFontStateResponse](core_cterm.CTerm.md#parsefontstateresponse)
- [parseGraphicsDimensionsResponse](core_cterm.CTerm.md#parsegraphicsdimensionsresponse)
- [parseModesResponse](core_cterm.CTerm.md#parsemodesresponse)
- [parseVersionString](core_cterm.CTerm.md#parseversionstring)
- [queryDeviceAttributesSequence](core_cterm.CTerm.md#querydeviceattributessequence)
- [queryFontDimensionsSequence](core_cterm.CTerm.md#queryfontdimensionssequence)
- [queryFontStateSequence](core_cterm.CTerm.md#queryfontstatesequence)
- [queryGraphicsDimensionsSequence](core_cterm.CTerm.md#querygraphicsdimensionssequence)
- [queryModesSequence](core_cterm.CTerm.md#querymodessequence)
- [resetPaletteSequence](core_cterm.CTerm.md#resetpalettesequence)
- [selectFontSequence](core_cterm.CTerm.md#selectfontsequence)
- [setPaletteColorSequence](core_cterm.CTerm.md#setpalettecolorsequence)
- [supportsFeature](core_cterm.CTerm.md#supportsfeature)
- [supportsFonts](core_cterm.CTerm.md#supportsfonts)
- [supportsPalette](core_cterm.CTerm.md#supportspalette)
- [supportsSixel](core_cterm.CTerm.md#supportssixel)
- [versionToString](core_cterm.CTerm.md#versiontostring)

## Constructors

### constructor

• **new CTerm**()

## Properties

### FONT\_SLOT\_FIRST

▪ `Static` `Readonly` **FONT\_SLOT\_FIRST**: ``43``

Font slot range

#### Defined in

[core/src/cterm.ts:125](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L125)

___

### FONT\_SLOT\_LAST

▪ `Static` `Readonly` **FONT\_SLOT\_LAST**: ``255``

#### Defined in

[core/src/cterm.ts:126](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L126)

___

### FONT\_STYLES

▪ `Static` `Readonly` **FONT\_STYLES**: `Object`

Font styles

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BLINK` | ``2`` |
| `HIGH` | ``1`` |
| `HIGHBLINK` | ``3`` |
| `NORMAL` | ``0`` |

#### Defined in

[core/src/cterm.ts:131](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L131)

___

### VERSION\_B64\_FONTS

▪ `Static` `Readonly` **VERSION\_B64\_FONTS**: ``1213``

#### Defined in

[core/src/cterm.ts:118](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L118)

___

### VERSION\_COPY\_BUFFERS

▪ `Static` `Readonly` **VERSION\_COPY\_BUFFERS**: ``1316``

#### Defined in

[core/src/cterm.ts:119](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L119)

___

### VERSION\_FONTDIM\_QUERY

▪ `Static` `Readonly` **VERSION\_FONTDIM\_QUERY**: ``1198``

#### Defined in

[core/src/cterm.ts:117](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L117)

___

### VERSION\_FONTS

▪ `Static` `Readonly` **VERSION\_FONTS**: ``1155``

Version constants

#### Defined in

[core/src/cterm.ts:112](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L112)

___

### VERSION\_FONTSTATE\_QUERY

▪ `Static` `Readonly` **VERSION\_FONTSTATE\_QUERY**: ``1161``

#### Defined in

[core/src/cterm.ts:116](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L116)

___

### VERSION\_JPEGXL

▪ `Static` `Readonly` **VERSION\_JPEGXL**: ``1318``

#### Defined in

[core/src/cterm.ts:120](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L120)

___

### VERSION\_MODE\_QUERY

▪ `Static` `Readonly` **VERSION\_MODE\_QUERY**: ``1160``

#### Defined in

[core/src/cterm.ts:115](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L115)

___

### VERSION\_PALETTE

▪ `Static` `Readonly` **VERSION\_PALETTE**: ``1167``

#### Defined in

[core/src/cterm.ts:114](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L114)

___

### VERSION\_SIXEL

▪ `Static` `Readonly` **VERSION\_SIXEL**: ``1189``

#### Defined in

[core/src/cterm.ts:113](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L113)

## Methods

### getCapabilitiesFromVersion

▸ `Static` **getCapabilitiesFromVersion**(`version`): [`CTermCapabilities`](../interfaces/core_cterm.CTermCapabilities.md)

Build capabilities object from version number

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`CTermCapabilities`](../interfaces/core_cterm.CTermCapabilities.md)

#### Defined in

[core/src/cterm.ts:356](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L356)

___

### loadFontSequence

▸ `Static` **loadFontSequence**(`slot`, `fontData`): `string`

Generate sequence to load a font

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `number` | Font slot (43-255) |
| `fontData` | `string` | Base64-encoded font data |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:288](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L288)

___

### mouseButtonEventsSequence

▸ `Static` **mouseButtonEventsSequence**(`enable`): `string`

Generate sequence to enable/disable mouse button events

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:335](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L335)

___

### mouseMotionEventsSequence

▸ `Static` **mouseMotionEventsSequence**(`enable`): `string`

Generate sequence to enable/disable mouse motion events

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:342](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L342)

___

### mouseSgrModeSequence

▸ `Static` **mouseSgrModeSequence**(`enable`): `string`

Generate sequence to enable/disable SGR mouse mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:349](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L349)

___

### mouseTrackingSequence

▸ `Static` **mouseTrackingSequence**(`enable`): `string`

Generate sequence to enable/disable mouse tracking

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:328](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L328)

___

### parseDeviceAttributesResponse

▸ `Static` **parseDeviceAttributesResponse**(`response`): `number`

Parse device attributes response
Returns version number or -1 if not CTerm

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `string` |

#### Returns

`number`

#### Defined in

[core/src/cterm.ts:210](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L210)

___

### parseFontDimensionsResponse

▸ `Static` **parseFontDimensionsResponse**(`response`): ``null`` \| [`CTermFontDimensions`](../interfaces/core_cterm.CTermFontDimensions.md)

Parse font dimensions response

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `string` |

#### Returns

``null`` \| [`CTermFontDimensions`](../interfaces/core_cterm.CTermFontDimensions.md)

#### Defined in

[core/src/cterm.ts:241](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L241)

___

### parseFontStateResponse

▸ `Static` **parseFontStateResponse**(`response`): ``null`` \| [`CTermFontState`](../interfaces/core_cterm.CTermFontState.md)

Parse font state response

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `string` |

#### Returns

``null`` \| [`CTermFontState`](../interfaces/core_cterm.CTermFontState.md)

#### Defined in

[core/src/cterm.ts:225](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L225)

___

### parseGraphicsDimensionsResponse

▸ `Static` **parseGraphicsDimensionsResponse**(`response`): ``null`` \| [`CTermGraphicsDimensions`](../interfaces/core_cterm.CTermGraphicsDimensions.md)

Parse graphics dimensions response

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `string` |

#### Returns

``null`` \| [`CTermGraphicsDimensions`](../interfaces/core_cterm.CTermGraphicsDimensions.md)

#### Defined in

[core/src/cterm.ts:256](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L256)

___

### parseModesResponse

▸ `Static` **parseModesResponse**(`response`): `string`[]

Parse enabled modes response

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `string` |

#### Returns

`string`[]

#### Defined in

[core/src/cterm.ts:271](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L271)

___

### parseVersionString

▸ `Static` **parseVersionString**(`versionStr`): `number`

Parse version from string (e.g., "1.189")

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionStr` | `string` |

#### Returns

`number`

#### Defined in

[core/src/cterm.ts:383](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L383)

___

### queryDeviceAttributesSequence

▸ `Static` **queryDeviceAttributesSequence**(): `string`

Query device attributes (DA) sequence
Response format: ESC[=67;84;101;114;109;MAJOR;MINOR;ATTRIBUTESc

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:170](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L170)

___

### queryFontDimensionsSequence

▸ `Static` **queryFontDimensionsSequence**(): `string`

Query font dimensions sequence
Response format: ESC[=3;HEIGHT;WIDTHn

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:194](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L194)

___

### queryFontStateSequence

▸ `Static` **queryFontStateSequence**(): `string`

Query font state sequence
Response format: ESC[=1;FIRST;RESULT;STYLE0;STYLE1;STYLE2;STYLE3n

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:178](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L178)

___

### queryGraphicsDimensionsSequence

▸ `Static` **queryGraphicsDimensionsSequence**(): `string`

Query graphics dimensions (XTSRGA) sequence
Response format: ESC[?2;0;WIDTH;HEIGHTS

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:202](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L202)

___

### queryModesSequence

▸ `Static` **queryModesSequence**(): `string`

Query enabled modes sequence
Response format: ESC[=2;MODE1;MODE2;...n

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:186](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L186)

___

### resetPaletteSequence

▸ `Static` **resetPaletteSequence**(): `string`

Generate sequence to reset palette to defaults

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:321](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L321)

___

### selectFontSequence

▸ `Static` **selectFontSequence**(`style`, `slot`): `string`

Generate sequence to select a font for a style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `number` | Font style (0-3) |
| `slot` | `number` | Font slot |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:300](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L300)

___

### setPaletteColorSequence

▸ `Static` **setPaletteColorSequence**(`index`, `r`, `g`, `b`): `string`

Generate sequence to set palette color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Color index (0-255) |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:314](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L314)

___

### supportsFeature

▸ `Static` **supportsFeature**(`version`, `feature`): `boolean`

Check if a specific feature is supported based on version

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |
| `feature` | ``"FONTS"`` \| ``"MODE_QUERY"`` \| ``"FONTSTATE_QUERY"`` \| ``"PALETTE"`` \| ``"SIXEL"`` \| ``"FONTDIM_QUERY"`` \| ``"XTSRGA"`` \| ``"B64_FONTS"`` \| ``"COPY_BUFFERS"`` \| ``"JPEGXL"`` |

#### Returns

`boolean`

#### Defined in

[core/src/cterm.ts:141](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L141)

___

### supportsFonts

▸ `Static` **supportsFonts**(`version`): `boolean`

Check if fonts are supported

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/cterm.ts:148](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L148)

___

### supportsPalette

▸ `Static` **supportsPalette**(`version`): `boolean`

Check if palette manipulation is supported

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/cterm.ts:162](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L162)

___

### supportsSixel

▸ `Static` **supportsSixel**(`version`): `boolean`

Check if Sixel graphics are supported

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/cterm.ts:155](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L155)

___

### versionToString

▸ `Static` **versionToString**(`version`): `string`

Get human-readable version string

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`string`

#### Defined in

[core/src/cterm.ts:374](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L374)
