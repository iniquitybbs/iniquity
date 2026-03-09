# Module: core/graphic

Graphic Class - In-Memory ANSI Buffer

**`Summary`**

Cell-based ANSI manipulation for storing and rendering graphics

Inspired by Synchronet's graphic.js library, this class provides:
- Cell-based data structure (character + attribute per cell)
- Load ANS/BIN files into memory
- Draw to screen at specific coordinates
- Partial region drawing
- Scroll, clear, putmsg operations
- Export to ANSI string or BIN format

## Table of contents

### References

- [CGA](core_graphic.md#cga)

### Classes

- [Graphic](../classes/core_graphic.Graphic.md)

### Interfaces

- [GraphicCell](../interfaces/core_graphic.GraphicCell.md)
- [GraphicOptions](../interfaces/core_graphic.GraphicOptions.md)

### Functions

- [getBackground](core_graphic.md#getbackground)
- [getForeground](core_graphic.md#getforeground)
- [hasBlink](core_graphic.md#hasblink)
- [makeAttr](core_graphic.md#makeattr)

## References

### CGA

Re-exports [CGA](runtime_ansi.md#cga)

## Functions

### getBackground

▸ **getBackground**(`attr`): `number`

Helper function to extract background from attribute

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `number` |

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:904](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/graphic.ts#L904)

___

### getForeground

▸ **getForeground**(`attr`): `number`

Helper function to extract foreground from attribute

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `number` |

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:897](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/graphic.ts#L897)

___

### hasBlink

▸ **hasBlink**(`attr`): `boolean`

Helper function to check if blink is set

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/graphic.ts:911](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/graphic.ts#L911)

___

### makeAttr

▸ **makeAttr**(`fg`, `bg?`, `blink?`): `number`

Helper function to create attribute from components

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fg` | `number` | `undefined` |
| `bg` | `number` | `0` |
| `blink` | `boolean` | `false` |

#### Returns

`number`

#### Defined in

[core/src/graphic.ts:888](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/graphic.ts#L888)
