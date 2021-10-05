# Class: BBS

[Core](../modules/Core.md).BBS

Iniquity Core BBS

**`summary`** The main class you will use as it wraps all the other classes in a unified API.

**`example`**
```typescript
import BBS from "@iniquitybbs/core/dist/iniquity"

const mybbs = new BBS()

mybbs.say("Say hi!").pause()

mybbs.hangup()

```

## Table of contents

### Constructors

- [constructor](Core.BBS.md#constructor)

### Properties

- [basepath](Core.BBS.md#basepath)
- [name](Core.BBS.md#name)

### Methods

- [artwork](Core.BBS.md#artwork)
- [ask](Core.BBS.md#ask)
- [disconnect](Core.BBS.md#disconnect)
- [menu](Core.BBS.md#menu)
- [pause](Core.BBS.md#pause)
- [print](Core.BBS.md#print)
- [say](Core.BBS.md#say)
- [sleep](Core.BBS.md#sleep)
- [user](Core.BBS.md#user)

## Constructors

### constructor

• **new BBS**(`options?`)

Iniquity BBS core class

**`example`**
```typescript
const iq = new Iniquity()
const iq = new Iniquity({ basepath: "/iniquity/bbs/path" })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IIniquityOptions`](../interfaces/Core.IIniquityOptions.md) | An object containing the various configuration properties. |

#### Defined in

[core/src/index.ts:180](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L180)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[core/src/index.ts:167](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L167)

___

### name

• **name**: `string`

#### Defined in

[core/src/index.ts:168](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L168)

## Methods

### artwork

▸ **artwork**(`options`): [`Artwork`](Core.Artwork.md)

Will allow you to render artwork to the screen

**`see`** [IArtworkOptions](../interfaces/Core.IArtworkOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.artwork({ filename: Assets.we_iniq3 })
iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/Core.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Artwork`](Core.Artwork.md)

An instance of Artwork and its return functions.

#### Defined in

[core/src/index.ts:294](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L294)

___

### ask

▸ **ask**(`question`): `string`

Displays a prompt (value) and returns a string of user input (ala clent-side JS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |

#### Returns

`string`

response

#### Defined in

[core/src/index.ts:260](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L260)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

[core/src/index.ts:268](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L268)

___

### menu

▸ **menu**(`options`): [`Menu`](Core.Menu.md)

Menu instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IMenuOptions`](../interfaces/Core.IMenuOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Menu`](Core.Menu.md)

An instance of Menu

#### Defined in

[core/src/index.ts:305](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L305)

___

### pause

▸ **pause**(`options?`): `void`

Display a pause prompt on the screen.

**`summary`** This pause prompt does the usual stuff. It also provides a few helpers via its return functions.

**`see`** [IQPauseOptions](../interfaces/Core.IQPauseOptions.md) to learn more about the available options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQPauseOptions`](../interfaces/Core.IQPauseOptions.md) |

#### Returns

`void`

#### Defined in

[core/src/index.ts:239](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L239)

___

### print

▸ **print**(`options`): [`IBBSPrintFunctions`](../interfaces/Core.IBBSPrintFunctions.md)

Prints something to the user. Parses Renegade MCI/Synchronet @- codes.

**`see`** [IQPrintOptions](../interfaces/Core.IQPrintOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.print("Display some text on the screen that can parse @ codes.").center()
iq.print("Display some text on the screen that can parse @ codes.".newlines(2).color("background red"))
iq.print("Display some text on the screen that can parse @ codes.".color("cyan")).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IQPrintOptions`](../interfaces/Core.IQPrintOptions.md) | you would like to print on the screen. |

#### Returns

[`IBBSPrintFunctions`](../interfaces/Core.IBBSPrintFunctions.md)

#### Defined in

[core/src/index.ts:221](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L221)

___

### say

▸ **say**(`options`): [`IBBSSayFunctions`](../interfaces/Core.IBBSSayFunctions.md)

Says something to the user. Does not parse MCI/@- codes.

**`see`** [IQPrintOptions](../interfaces/Core.IQPrintOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.say("Say something to the terminal!")
iq.say("This time say something but do some cool string manipulation.".newlines(2).color("bright red").center()).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IBBSSayOptions`](../interfaces/Core.IBBSSayOptions.md) | What you would like to say on the screen. |

#### Returns

[`IBBSSayFunctions`](../interfaces/Core.IBBSSayFunctions.md)

#### Defined in

[core/src/index.ts:198](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L198)

___

### sleep

▸ **sleep**(`speed`): `void`

Halt the screen for a specified period of time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | In miliseconds |

#### Returns

`void`

void

#### Defined in

[core/src/index.ts:251](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L251)

___

### user

▸ **user**(`options`): [`User`](Core.User.md)

User stuff

**`summary`** It doesn't do much right now. But it does create new users and store them in the SBBS backend.

**`see`** [IUserOptions](../interfaces/Core.IUserOptions.md) to learn more about the available options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/Core.IUserOptions.md) | An object containing the various configuration properties. |

#### Returns

[`User`](Core.User.md)

An instance of User and its return functions.

#### Defined in

[core/src/index.ts:279](https://github.com/iniquitybbs/iniquity/blob/eaec349/packages/core/src/index.ts#L279)
