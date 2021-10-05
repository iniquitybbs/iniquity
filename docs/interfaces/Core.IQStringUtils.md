# Interface: IQStringUtils

[Core](../modules/Core.md).IQStringUtils

Iniquity bbs string operations

**`interface`**

**`summary`** Some pretty typical operations most sysops end up wanting apply to strings. Got more ideas? Let me know.

**`param`** Make sure that colors don't bleed on to the terminal after displaying the text.

**`param`** How many newlines to display after the text has been displayed.

**`param`** Will attempt to center the text on the clients terminal.

## Hierarchy

- **`IQStringUtils`**

  ↳ [`IQPauseOptions`](Core.IQPauseOptions.md)

  ↳ [`IQPrintOptions`](Core.IQPrintOptions.md)

## Table of contents

### Properties

- [center](Core.IQStringUtils.md#center)
- [colorReset](Core.IQStringUtils.md#colorreset)
- [newlines](Core.IQStringUtils.md#newlines)

## Properties

### center

• `Optional` **center**: `boolean`

#### Defined in

[core/src/index.ts:65](https://github.com/iniquitybbs/iniquity/blob/f4e691f/packages/core/src/index.ts#L65)

___

### colorReset

• `Optional` **colorReset**: `boolean`

#### Defined in

[core/src/index.ts:63](https://github.com/iniquitybbs/iniquity/blob/f4e691f/packages/core/src/index.ts#L63)

___

### newlines

• `Optional` **newlines**: `number`

#### Defined in

[core/src/index.ts:64](https://github.com/iniquitybbs/iniquity/blob/f4e691f/packages/core/src/index.ts#L64)
