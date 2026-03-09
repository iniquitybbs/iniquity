# Module: App

Iniquity App

**`Summary`**

The super cool command line interface to Iniquity.

**`Example`**

Invoking via the shell
```shell
iq cli -h
```

**`Example`**

Invoking via yargs programatically
```typescript
import CLI from "@iniquitybbs/cli"
const cli: yargs.CommandModule = new CLI()
```

## Table of contents

### Classes

- [App](../classes/App.App.md)

### Variables

- [default](App.md#default)

## Variables

### default

• `Const` **default**: `yargs.CommandModule`

#### Defined in

[iniquity/src/commands/term.ts:100](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/commands/term.ts#L100)
