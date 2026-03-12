# Module: core/screen-buffer

Screen Buffer Management

**`Summary`**

Screen buffer stack and background management for popup overlays

## Table of contents

### Type Aliases

- [ScreenBuffer](core_screen_buffer.md#screenbuffer)

### Variables

- [screenBuffer](core_screen_buffer.md#screenbuffer-1)

### Functions

- [setScreenDimensions](core_screen_buffer.md#setscreendimensions)

## Type Aliases

### ScreenBuffer

Ƭ **ScreenBuffer**: typeof [`screenBuffer`](core_screen_buffer.md#screenbuffer-1)

#### Defined in

[core/src/screen-buffer.ts:191](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/screen-buffer.ts#L191)

## Variables

### screenBuffer

• `Const` **screenBuffer**: `Object`

Screen buffer management object

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get stackDepth()` | `number` |
| `clearBackground` | () => `void` |
| `clearStack` | () => `void` |
| `createBuffer` | () => [`Graphic`](../classes/core_graphic.Graphic.md) |
| `getBackground` | () => ``null`` \| [`Graphic`](../classes/core_graphic.Graphic.md) |
| `getOutput` | () => ``null`` \| [`IQOutput`](../interfaces/core_output.IQOutput.md) |
| `redraw` | (`x?`: `number`, `y?`: `number`, `width?`: `number`, `height?`: `number`) => `void` |
| `restoreRegion` | () => `boolean` |
| `saveRegion` | (`x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`) => ``null`` \| { `graphic`: [`Graphic`](../classes/core_graphic.Graphic.md) ; `x`: `number` ; `y`: `number`  } |
| `setBackground` | (`graphic`: `string` \| [`Graphic`](../classes/core_graphic.Graphic.md), `processMCI`: `boolean`) => `void` |
| `setOutput` | (`output`: [`IQOutput`](../interfaces/core_output.IQOutput.md)) => `void` |

#### Defined in

[core/src/screen-buffer.ts:51](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/screen-buffer.ts#L51)

## Functions

### setScreenDimensions

▸ **setScreenDimensions**(`width`, `height`): `void`

Update the current screen dimensions (called by screen module)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[core/src/screen-buffer.ts:43](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/screen-buffer.ts#L43)
