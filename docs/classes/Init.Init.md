# Class: Init

[Init](../modules/Init.md).Init

Iniquity CLI

**`Summary`**

The main entry into all iniquity cli commands that are available.

**`Implements`**

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Init.Init.md#constructor)

### Properties

- [command](Init.Init.md#command)
- [describe](Init.Init.md#describe)

### Methods

- [builder](Init.Init.md#builder)
- [handler](Init.Init.md#handler)

## Constructors

### constructor

• **new Init**()

## Properties

### command

• **command**: `string` = `"init [options]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[cli/src/commands/init.ts:50](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/init.ts#L50)

___

### describe

• **describe**: `string` = `"Initialize the current directory as an iniquity 3 application."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[cli/src/commands/init.ts:51](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/init.ts#L51)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `name`: `string`  } & { `template`: `string`  } & { `theme`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<{}\> |

#### Returns

`Argv`<{ `name`: `string`  } & { `template`: `string`  } & { `theme`: `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[cli/src/commands/init.ts:53](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/init.ts#L53)

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

[cli/src/commands/init.ts:77](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/commands/init.ts#L77)
