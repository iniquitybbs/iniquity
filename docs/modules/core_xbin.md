# Module: core/xbin

XBin Image Format Support

**`Summary`**

Read and display XBin image format files

Inspired by Synchronet's xbin_lib.js and xbimage_lib.js, this provides:
- Read XBin files (custom font + character data)
- Parse XBin header (width, height, font data, flags)
- Display XBin images (requires font loading)

XBin is an extended BIN format that can include:
- Custom palettes
- Custom fonts
- Compressed data

## Table of contents

### Classes

- [XBin](../classes/core_xbin.XBin.md)

### Interfaces

- [XBinHeader](../interfaces/core_xbin.XBinHeader.md)
- [XBinImage](../interfaces/core_xbin.XBinImage.md)
- [XBinPalette](../interfaces/core_xbin.XBinPalette.md)

### Variables

- [XBIN\_ID](core_xbin.md#xbin_id)
- [XBIN\_ID\_LENGTH](core_xbin.md#xbin_id_length)
- [XBinFlags](core_xbin.md#xbinflags)

## Variables

### XBIN\_ID

• `Const` **XBIN\_ID**: ``"XBIN\u001a"``

XBin file signature

#### Defined in

[core/src/xbin.ts:46](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/xbin.ts#L46)

___

### XBIN\_ID\_LENGTH

• `Const` **XBIN\_ID\_LENGTH**: ``5``

#### Defined in

[core/src/xbin.ts:47](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/xbin.ts#L47)

___

### XBinFlags

• `Const` **XBinFlags**: `Object`

XBin flag constants

#### Type declaration

| Name | Type |
| :------ | :------ |
| `COMPRESS` | ``4`` |
| `FONT` | ``2`` |
| `FONT_512` | ``16`` |
| `FONT_BLINK` | ``8`` |
| `FONT_HIGH` | ``4`` |
| `FONT_HIGHBLINK` | ``16`` |
| `FONT_NORMAL` | ``2`` |
| `NONBLINK` | ``8`` |
| `NONHIGH` | ``32`` |
| `PALETTE` | ``1`` |

#### Defined in

[core/src/xbin.ts:52](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/xbin.ts#L52)
