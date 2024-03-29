# Class: Init

[Init](../modules/Init.md).Init

Iniquity CLI

**`summary`** The main entry into all iniquity cli commands that are available.

**`implements`** {yargs.CommandModule}

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Init.Init-1.md#constructor)

### Properties

- [command](Init.Init-1.md#command)
- [describe](Init.Init-1.md#describe)

### Methods

- [builder](Init.Init-1.md#builder)
- [handler](Init.Init-1.md#handler)

## Constructors

### constructor

• **new Init**()

## Properties

### command

• **command**: `string` = `"init [options]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[iniquity/src/commands/init.ts:49](https://github.com/iniquitybbs/iniquity/blob/d1c5f72/packages/iniquity/src/commands/init.ts#L49)

___

### describe

• **describe**: `string` = `"Initialize the current directory as an iniquity 3 application."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[iniquity/src/commands/init.ts:50](https://github.com/iniquitybbs/iniquity/blob/d1c5f72/packages/iniquity/src/commands/init.ts#L50)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `name`: `string`  } & { `template`: `string`  } & { `theme`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<`Object`\> |

#### Returns

`Argv`<{ `name`: `string`  } & { `template`: `string`  } & { `theme`: `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[iniquity/src/commands/init.ts:52](https://github.com/iniquitybbs/iniquity/blob/d1c5f72/packages/iniquity/src/commands/init.ts#L52)

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

[iniquity/src/commands/init.ts:76](https://github.com/iniquitybbs/iniquity/blob/d1c5f72/packages/iniquity/src/commands/init.ts#L76)
