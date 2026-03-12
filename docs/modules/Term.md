# Module: Term

Iniquity Term

**`Summary`**

Built-in terminal client to connect to an Iniquity BBS.

**`Example`**

Invoking via the shell
```shell
iq term
iq term localhost --port 2323
```

## Table of contents

### Variables

- [command](Term.md#command)
- [default](Term.md#default)
- [describe](Term.md#describe)

### Functions

- [builder](Term.md#builder)
- [handler](Term.md#handler)

## Variables

### command

• `Const` **command**: ``"term [host]"``

#### Defined in

[cli/src/commands/term.ts:44](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/term.ts#L44)

___

### default

• `Const` **default**: `yargs.CommandModule`

#### Defined in

[cli/src/commands/term.ts:97](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/term.ts#L97)

___

### describe

• `Const` **describe**: ``"Connect to an Iniquity BBS with the built-in terminal client."``

#### Defined in

[cli/src/commands/term.ts:45](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/term.ts#L45)

## Functions

### builder

▸ **builder**(`yargs`): `Argv`<{ `host`: `string`  } & { `port`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<{}\> |

#### Returns

`Argv`<{ `host`: `string`  } & { `port`: `number`  }\>

#### Defined in

[cli/src/commands/term.ts:47](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/term.ts#L47)

___

### handler

▸ **handler**(`argv`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `Object` |

#### Returns

`void`

#### Defined in

[cli/src/commands/term.ts:61](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/term.ts#L61)
