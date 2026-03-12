# Module: core/cterm

CTerm Utilities - Terminal Capability Detection

**`Summary`**

CTerm/SyncTERM feature detection and terminal queries

Inspired by Synchronet's cterm_lib.js, this provides:
- Query terminal capabilities
- Detect CTerm version
- Check for specific feature support (fonts, sixel, palette)

## Table of contents

### Classes

- [CTerm](../classes/core_cterm.CTerm.md)

### Interfaces

- [CTermCapabilities](../interfaces/core_cterm.CTermCapabilities.md)
- [CTermFontDimensions](../interfaces/core_cterm.CTermFontDimensions.md)
- [CTermFontState](../interfaces/core_cterm.CTermFontState.md)
- [CTermGraphicsDimensions](../interfaces/core_cterm.CTermGraphicsDimensions.md)

### Variables

- [CTermDeviceAttributes](core_cterm.md#ctermdeviceattributes)
- [CTermVersions](core_cterm.md#ctermversions)

## Variables

### CTermDeviceAttributes

• `Const` **CTermDeviceAttributes**: `Object`

CTerm device attribute flags

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BRIGHT_BACKGROUND` | ``"2"`` |
| `EXTENDED_PALETTE` | ``"6"`` |
| `FONT_SELECTABLE` | ``"5"`` |
| `LOADABLE_FONTS` | ``"1"`` |
| `MOUSE_AVAILABLE` | ``"7"`` |
| `PALETTE_SETTABLE` | ``"3"`` |
| `PIXELOPS_SUPPORTED` | ``"4"`` |
| `VALID` | ``"0"`` |

#### Defined in

[core/src/cterm.ts:53](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L53)

___

### CTermVersions

• `Const` **CTermVersions**: `Object`

CTerm version constants for feature support

#### Type declaration

| Name | Type |
| :------ | :------ |
| `B64_FONTS` | ``1213`` |
| `COPY_BUFFERS` | ``1316`` |
| `FONTDIM_QUERY` | ``1198`` |
| `FONTS` | ``1155`` |
| `FONTSTATE_QUERY` | ``1161`` |
| `JPEGXL` | ``1318`` |
| `MODE_QUERY` | ``1160`` |
| `PALETTE` | ``1167`` |
| `SIXEL` | ``1189`` |
| `XTSRGA` | ``1208`` |

#### Defined in

[core/src/cterm.ts:37](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/cterm.ts#L37)
