# Class: App

[App](../modules/App.md).App

Iniquity CLI

**`summary`** The main entry into all iniquity cli commands that are available.

**`implements`** {yargs.CommandModule}

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](App.App-1.md#constructor)

### Properties

- [command](App.App-1.md#command)
- [describe](App.App-1.md#describe)

### Methods

- [builder](App.App-1.md#builder)
- [handler](App.App-1.md#handler)

## Constructors

### constructor

• **new App**()

## Properties

### command

• **command**: `string` = `"init [options]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[packages/cli/src/commands/init.ts:47](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/cli/src/commands/init.ts#L47)

___

### describe

• **describe**: `string` = `"Initialize a new iniquity bbs."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[packages/cli/src/commands/init.ts:48](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/cli/src/commands/init.ts#L48)

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

[packages/cli/src/commands/init.ts:50](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/cli/src/commands/init.ts#L50)

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

[packages/cli/src/commands/init.ts:66](https://github.com/iniquitybbs/iniquity/blob/2e1686f/packages/cli/src/commands/init.ts#L66)
