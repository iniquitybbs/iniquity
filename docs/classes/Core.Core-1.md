# Class: Core

[Core](../modules/Core.md).Core

Iniquity Core CLI

**`summary`** The main entry into all iniquity cli commands that are available.

**`implements`** {yargs.CommandModule}

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Core.Core-1.md#constructor)

### Properties

- [command](Core.Core-1.md#command)
- [describe](Core.Core-1.md#describe)

### Methods

- [builder](Core.Core-1.md#builder)
- [handler](Core.Core-1.md#handler)

## Constructors

### constructor

• **new Core**()

## Properties

### command

• **command**: `string` = `"core [options]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[packages/core/src/commands/core.ts:48](https://github.com/iniquitybbs/iniquity/blob/dde6bbb/packages/core/src/commands/core.ts#L48)

___

### describe

• **describe**: `string` = `"Invoke CLI commands."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[packages/core/src/commands/core.ts:49](https://github.com/iniquitybbs/iniquity/blob/dde6bbb/packages/core/src/commands/core.ts#L49)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `name`: `undefined` \| `string`  } & { `packages`: `undefined` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<`Object`\> |

#### Returns

`Argv`<{ `name`: `undefined` \| `string`  } & { `packages`: `undefined` \| `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[packages/core/src/commands/core.ts:51](https://github.com/iniquitybbs/iniquity/blob/dde6bbb/packages/core/src/commands/core.ts#L51)

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

[packages/core/src/commands/core.ts:66](https://github.com/iniquitybbs/iniquity/blob/dde6bbb/packages/core/src/commands/core.ts#L66)
