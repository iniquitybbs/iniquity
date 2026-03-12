# Module: core/screen

Screen Utilities

**`Summary`**

Terminal dimensions and centering utilities

## Table of contents

### Type Aliases

- [Screen](core_screen.md#screen)

### Variables

- [DEFAULT\_HEIGHT](core_screen.md#default_height)
- [DEFAULT\_WIDTH](core_screen.md#default_width)
- [TERM\_HEIGHT](core_screen.md#term_height)
- [TERM\_WIDTH](core_screen.md#term_width)
- [screen](core_screen.md#screen-1)

## Type Aliases

### Screen

Ƭ **Screen**: typeof [`screen`](core_screen.md#screen-1)

#### Defined in

[core/src/screen.ts:130](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/screen.ts#L130)

## Variables

### DEFAULT\_HEIGHT

• `Const` **DEFAULT\_HEIGHT**: ``37``

#### Defined in

[core/src/screen.ts:33](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/screen.ts#L33)

___

### DEFAULT\_WIDTH

• `Const` **DEFAULT\_WIDTH**: ``132``

Default Iniquity terminal dimensions

#### Defined in

[core/src/screen.ts:32](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/screen.ts#L32)

___

### TERM\_HEIGHT

• `Const` **TERM\_HEIGHT**: ``37``

#### Defined in

[core/src/screen.ts:128](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/screen.ts#L128)

___

### TERM\_WIDTH

• `Const` **TERM\_WIDTH**: ``132``

#### Defined in

[core/src/screen.ts:127](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/screen.ts#L127)

___

### screen

• `Const` **screen**: `Object`

Screen object providing terminal constants and positioning utilities

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `midX` | `number` |
| `midY` | `number` |
| `stackDepth` | `number` |
| `width` | `number` |
| `center` | (`width`: `number`, `height`: `number`) => { `x`: `number` ; `y`: `number`  } |
| `centerX` | (`elementWidth`: `number`) => `number` |
| `centerY` | (`elementHeight`: `number`) => `number` |
| `clearBackground` | () => `void` |
| `clearStack` | () => `void` |
| `createBuffer` | () => [`Graphic`](../classes/core_graphic.Graphic.md) |
| `getBackground` | () => ``null`` \| [`Graphic`](../classes/core_graphic.Graphic.md) |
| `getOutput` | () => ``null`` \| [`IQOutput`](../interfaces/core_output.IQOutput.md) |
| `redraw` | (`x?`: `number`, `y?`: `number`, `width?`: `number`, `height?`: `number`) => `void` |
| `resetResolution` | () => `void` |
| `restoreRegion` | () => `boolean` |
| `saveRegion` | (`x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`) => ``null`` \| { `graphic`: [`Graphic`](../classes/core_graphic.Graphic.md) ; `x`: `number` ; `y`: `number`  } |
| `setBackground` | (`graphic`: `string` \| [`Graphic`](../classes/core_graphic.Graphic.md), `processMCI`: `boolean`) => `void` |
| `setOutput` | (`output`: [`IQOutput`](../interfaces/core_output.IQOutput.md)) => `void` |
| `setResolution` | (`width`: `number`, `height`: `number`) => `void` |

#### Defined in

[core/src/screen.ts:42](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/screen.ts#L42)
