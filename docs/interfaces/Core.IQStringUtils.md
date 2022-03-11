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

[packages/core/src/index.ts:142](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L142)

___

### colorReset

• `Optional` **colorReset**: `boolean`

#### Defined in

[packages/core/src/index.ts:140](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L140)

___

### newlines

• `Optional` **newlines**: `number`

#### Defined in

[packages/core/src/index.ts:141](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L141)
