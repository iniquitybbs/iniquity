# Class: App

[App](../modules/App.md).App

Iniquity CLI

**`Summary`**

The main entry into all iniquity cli commands that are available.

**`Implements`**

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](App.App.md#constructor)

### Properties

- [command](App.App.md#command)
- [describe](App.App.md#describe)

### Methods

- [builder](App.App.md#builder)
- [handler](App.App.md#handler)

## Constructors

### constructor

• **new App**()

## Properties

### command

• **command**: `string` = `"term [options]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[iniquity/src/commands/term.ts:48](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/commands/term.ts#L48)

___

### describe

• **describe**: `string` = `"Use iniquity's built in terminal client."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[iniquity/src/commands/term.ts:49](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/commands/term.ts#L49)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `name`: `undefined` \| `string`  } & { `template`: `undefined` \| `string`  } & { `install`: `undefined` \| `string`  } & { `packages`: `undefined` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<{}\> |

#### Returns

`Argv`<{ `name`: `undefined` \| `string`  } & { `template`: `undefined` \| `string`  } & { `install`: `undefined` \| `string`  } & { `packages`: `undefined` \| `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[iniquity/src/commands/term.ts:51](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/commands/term.ts#L51)

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

[iniquity/src/commands/term.ts:77](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/commands/term.ts#L77)
