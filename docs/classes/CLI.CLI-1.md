# Class: CLI

[CLI](../modules/CLI.md).CLI

Iniquity CLI

**`summary`** The main entry into all iniquity cli commands that are available.

**`implements`** {yargs.CommandModule}

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](CLI.CLI-1.md#constructor)

### Properties

- [command](CLI.CLI-1.md#command)
- [describe](CLI.CLI-1.md#describe)

### Methods

- [builder](CLI.CLI-1.md#builder)
- [handler](CLI.CLI-1.md#handler)

## Constructors

### constructor

• **new CLI**()

## Properties

### command

• **command**: `string` = `"cli [options]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[packages/cli/src/index.ts:48](https://github.com/iniquitybbs/iniquity/blob/3ed1cb9/packages/cli/src/index.ts#L48)

___

### describe

• **describe**: `string` = `"Invoke CLI commands."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[packages/cli/src/index.ts:49](https://github.com/iniquitybbs/iniquity/blob/3ed1cb9/packages/cli/src/index.ts#L49)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `init`: `undefined` \| `string`  } & { `packages`: `undefined` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<`Object`\> |

#### Returns

`Argv`<{ `init`: `undefined` \| `string`  } & { `packages`: `undefined` \| `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[packages/cli/src/index.ts:51](https://github.com/iniquitybbs/iniquity/blob/3ed1cb9/packages/cli/src/index.ts#L51)

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

[packages/cli/src/index.ts:67](https://github.com/iniquitybbs/iniquity/blob/3ed1cb9/packages/cli/src/index.ts#L67)
