# Module: Init

Iniquity Init

**`Summary`**

The super cool command line interface to Iniquity.

**`Example`**

Invoking via the shell
```shell
iq init --help
```

**`Example`**

Invoking via yargs programatically
```typescript
import Init from "@iniquitybbs/cli/dist/src/commands/init"
const init: yargs.CommandModule = new Init()
```

## Table of contents

### Classes

- [Init](../classes/Init.Init.md)

### Variables

- [default](Init.md#default)

## Variables

### default

• `Const` **default**: `yargs.CommandModule`

#### Defined in

[cli/src/commands/init.ts:107](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/cli/src/commands/init.ts#L107)
