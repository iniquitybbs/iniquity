# Class: Server

[iniquity/src/commands/server](../modules/iniquity_src_commands_server.md).Server

Iniquity Server

**`Summary`**

The main entry into all iniquity cli commands that are available.

**`Implements`**

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](iniquity_src_commands_server.Server.md#constructor)

### Properties

- [command](iniquity_src_commands_server.Server.md#command)
- [describe](iniquity_src_commands_server.Server.md#describe)

### Methods

- [builder](iniquity_src_commands_server.Server.md#builder)
- [handler](iniquity_src_commands_server.Server.md#handler)

## Constructors

### constructor

• **new Server**()

## Properties

### command

• **command**: `string` = `"server [action]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[iniquity/src/commands/server.ts:53](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/commands/server.ts#L53)

___

### describe

• **describe**: `string` = `"Control your iniquity bbs server."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[iniquity/src/commands/server.ts:54](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/commands/server.ts#L54)

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

[iniquity/src/commands/server.ts:57](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/commands/server.ts#L57)

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

[iniquity/src/commands/server.ts:94](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/commands/server.ts#L94)
