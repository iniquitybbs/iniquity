# Class: Runtime

[iniquity/src/commands/runtime](../modules/iniquity_src_commands_runtime.md).Runtime

Iniquity Runtime

**`summary`** The main entry into all iniquity cli commands that are available.

**`implements`** {yargs.CommandModule}

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](iniquity_src_commands_runtime.Runtime.md#constructor)

### Properties

- [command](iniquity_src_commands_runtime.Runtime.md#command)
- [describe](iniquity_src_commands_runtime.Runtime.md#describe)

### Methods

- [builder](iniquity_src_commands_runtime.Runtime.md#builder)
- [handler](iniquity_src_commands_runtime.Runtime.md#handler)

## Constructors

### constructor

• **new Runtime**()

## Properties

### command

• **command**: `string` = `"runtime [action]"`

#### Implementation of

yargs.CommandModule.command

#### Defined in

[iniquity/src/commands/runtime.ts:60](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/iniquity/src/commands/runtime.ts#L60)

___

### describe

• **describe**: `string` = `"Start your iniquity instance."`

#### Implementation of

yargs.CommandModule.describe

#### Defined in

[iniquity/src/commands/runtime.ts:61](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/iniquity/src/commands/runtime.ts#L61)

## Methods

### builder

▸ **builder**(`yargs`): `Argv`<{ `up`: `undefined` \| `string`  } & { `down`: `undefined` \| `string`  } & { `restart`: `undefined` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yargs` | `Argv`<`Object`\> |

#### Returns

`Argv`<{ `up`: `undefined` \| `string`  } & { `down`: `undefined` \| `string`  } & { `restart`: `undefined` \| `string`  }\>

#### Implementation of

yargs.CommandModule.builder

#### Defined in

[iniquity/src/commands/runtime.ts:63](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/iniquity/src/commands/runtime.ts#L63)

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

[iniquity/src/commands/runtime.ts:79](https://github.com/iniquitybbs/iniquity/blob/d7c93a1/packages/iniquity/src/commands/runtime.ts#L79)
