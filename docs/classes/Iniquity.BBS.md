# Class: BBS

[Iniquity](../modules/Iniquity.md).BBS

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

- [constructor](Iniquity.BBS.md#constructor)

### Properties

- [basepath](Iniquity.BBS.md#basepath)
- [name](Iniquity.BBS.md#name)

### Methods

- [artwork](Iniquity.BBS.md#artwork)
- [ask](Iniquity.BBS.md#ask)
- [disconnect](Iniquity.BBS.md#disconnect)
- [menu](Iniquity.BBS.md#menu)
- [pause](Iniquity.BBS.md#pause)
- [print](Iniquity.BBS.md#print)
- [say](Iniquity.BBS.md#say)
- [sleep](Iniquity.BBS.md#sleep)
- [user](Iniquity.BBS.md#user)

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
| `options?` | [`IIniquityOptions`](../interfaces/Iniquity.IIniquityOptions.md) | An object containing the various configuration properties. |

#### Defined in

[iniquity.ts:180](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L180)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:167](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L167)

___

### name

• **name**: `string`

#### Defined in

[iniquity.ts:168](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L168)

## Methods

### artwork

▸ **artwork**(`options`): [`Artwork`](Iniquity.Artwork.md)

Will allow you to render artwork to the screen

**`see`** [IArtworkOptions](../interfaces/Iniquity.IArtworkOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.artwork({ filename: Assets.we_iniq3 })
iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/Iniquity.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Artwork`](Iniquity.Artwork.md)

An instance of Artwork and its return functions.

#### Defined in

[iniquity.ts:294](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L294)

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

[iniquity.ts:260](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L260)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

[iniquity.ts:268](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L268)

___

### menu

▸ **menu**(`options`): [`Menu`](Iniquity.Menu.md)

Menu instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IMenuOptions`](../interfaces/Iniquity.IMenuOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Menu`](Iniquity.Menu.md)

An instance of Menu

#### Defined in

[iniquity.ts:305](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L305)

___

### pause

▸ **pause**(`options?`): `void`

Display a pause prompt on the screen.

**`summary`** This pause prompt does the usual stuff. It also provides a few helpers via its return functions.

**`see`** [IQPauseOptions](../interfaces/Iniquity.IQPauseOptions.md) to learn more about the available options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQPauseOptions`](../interfaces/Iniquity.IQPauseOptions.md) |

#### Returns

`void`

#### Defined in

[iniquity.ts:239](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L239)

___

### print

▸ **print**(`options`): [`IBBSPrintFunctions`](../interfaces/Iniquity.IBBSPrintFunctions.md)

Prints something to the user. Parses Renegade MCI/Synchronet @- codes.

**`see`** [IQPrintOptions](../interfaces/Iniquity.IQPrintOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.print("Display some text on the screen that can parse @ codes.").center()
iq.print("Display some text on the screen that can parse @ codes.".newlines(2).color("background red"))
iq.print("Display some text on the screen that can parse @ codes.".color("cyan")).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IQPrintOptions`](../interfaces/Iniquity.IQPrintOptions.md) | you would like to print on the screen. |

#### Returns

[`IBBSPrintFunctions`](../interfaces/Iniquity.IBBSPrintFunctions.md)

#### Defined in

[iniquity.ts:221](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L221)

___

### say

▸ **say**(`options`): [`IBBSSayFunctions`](../interfaces/Iniquity.IBBSSayFunctions.md)

Says something to the user. Does not parse MCI/@- codes.

**`see`** [IQPrintOptions](../interfaces/Iniquity.IQPrintOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.say("Say something to the terminal!")
iq.say("This time say something but do some cool string manipulation.".newlines(2).color("bright red").center()).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IBBSSayOptions`](../interfaces/Iniquity.IBBSSayOptions.md) | What you would like to say on the screen. |

#### Returns

[`IBBSSayFunctions`](../interfaces/Iniquity.IBBSSayFunctions.md)

#### Defined in

[iniquity.ts:198](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L198)

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

[iniquity.ts:251](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L251)

___

### user

▸ **user**(`options`): [`User`](Iniquity.User.md)

User stuff

**`summary`** It doesn't do much right now. But it does create new users and store them in the SBBS backend.

**`see`** [IUserOptions](../interfaces/Iniquity.IUserOptions.md) to learn more about the available options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/Iniquity.IUserOptions.md) | An object containing the various configuration properties. |

#### Returns

[`User`](Iniquity.User.md)

An instance of User and its return functions.

#### Defined in

[iniquity.ts:279](https://github.com/iniquitybbs/iniquity/blob/eae5032/packages/core/src/iniquity.ts#L279)
