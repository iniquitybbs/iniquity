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

• **command**: `string` = `"cli [options]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[core/src/templates/euphoria.ts:48](https://github.com/iniquitybbs/iniquity/blob/ff00de6/packages/core/src/templates/euphoria.ts#L48)

___

### describe

• **describe**: `string` = `"Invoke CLI commands."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[core/src/templates/euphoria.ts:49](https://github.com/iniquitybbs/iniquity/blob/ff00de6/packages/core/src/templates/euphoria.ts#L49)

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

[core/src/templates/euphoria.ts:51](https://github.com/iniquitybbs/iniquity/blob/ff00de6/packages/core/src/templates/euphoria.ts#L51)

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

[core/src/templates/euphoria.ts:67](https://github.com/iniquitybbs/iniquity/blob/ff00de6/packages/core/src/templates/euphoria.ts#L67)
