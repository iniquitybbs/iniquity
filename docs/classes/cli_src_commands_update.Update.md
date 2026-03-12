# Class: Update

[cli/src/commands/update](../modules/cli_src_commands_update.md).Update

Iniquity Update

**`Summary`**

The main entry into all iniquity cli commands that are available.

**`Implements`**

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](cli_src_commands_update.Update.md#constructor)

### Properties

- [command](cli_src_commands_update.Update.md#command)
- [describe](cli_src_commands_update.Update.md#describe)

### Methods

- [builder](cli_src_commands_update.Update.md#builder)
- [handler](cli_src_commands_update.Update.md#handler)

## Constructors

### constructor

• **new Update**()

## Properties

### command

• **command**: `string` = `"server [action]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[cli/src/commands/update.ts:62](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/update.ts#L62)

___

### describe

• **describe**: `string` = `"Control your iniquity bbs server."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[cli/src/commands/update.ts:63](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/update.ts#L63)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `install`: `boolean`  } & { `watch`: `boolean`  } & { `start`: `undefined` \| `string`  } & { `stop`: `undefined` \| `string`  } & { `restart`: `undefined` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<{}\> |

#### Returns

`Argv`<{ `install`: `boolean`  } & { `watch`: `boolean`  } & { `start`: `undefined` \| `string`  } & { `stop`: `undefined` \| `string`  } & { `restart`: `undefined` \| `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[cli/src/commands/update.ts:65](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/update.ts#L65)

___

### handler

▸ **handler**(`argv`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `Object` |

#### Returns

`void`

#### Implementation of

yargs.CommandModule.handler

#### Defined in

[cli/src/commands/update.ts:91](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/update.ts#L91)
