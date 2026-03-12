# Class: Server

[cli/src/commands/server](../modules/cli_src_commands_server.md).Server

Iniquity Server

**`Summary`**

The main entry into all iniquity cli commands that are available.

**`Implements`**

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](cli_src_commands_server.Server.md#constructor)

### Properties

- [command](cli_src_commands_server.Server.md#command)
- [describe](cli_src_commands_server.Server.md#describe)

### Methods

- [builder](cli_src_commands_server.Server.md#builder)
- [handler](cli_src_commands_server.Server.md#handler)

## Constructors

### constructor

• **new Server**()

## Properties

### command

• **command**: `string` = `"server [action]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[cli/src/commands/server.ts:54](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/cli/src/commands/server.ts#L54)

___

### describe

• **describe**: `string` = `"Control your iniquity bbs server."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[cli/src/commands/server.ts:55](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/cli/src/commands/server.ts#L55)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `port`: `number`  } & { `program`: `string`  } & { `install`: `boolean`  } & { `watch`: `boolean`  } & { `start`: `undefined` \| `string`  } & { `stop`: `undefined` \| `string`  } & { `restart`: `undefined` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<{}\> |

#### Returns

`Argv`<{ `port`: `number`  } & { `program`: `string`  } & { `install`: `boolean`  } & { `watch`: `boolean`  } & { `start`: `undefined` \| `string`  } & { `stop`: `undefined` \| `string`  } & { `restart`: `undefined` \| `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[cli/src/commands/server.ts:58](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/cli/src/commands/server.ts#L58)

___

### handler

▸ **handler**(`argv`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `Object` |

#### Returns

`Promise`<`void`\>

#### Implementation of

yargs.CommandModule.handler

#### Defined in

[cli/src/commands/server.ts:95](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/cli/src/commands/server.ts#L95)
