[Iniquity API reference - v3.0.0](../README.md) / [Exports](../modules.md) / [BBS](../modules/BBS.md) / BBS

# Class: BBS

[BBS](../modules/BBS.md).BBS

BBS

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

- [constructor](BBS.BBS-1.md#constructor)

### Properties

- [basepath](BBS.BBS-1.md#basepath)
- [name](BBS.BBS-1.md#name)

### Methods

- [artwork](BBS.BBS-1.md#artwork)
- [ask](BBS.BBS-1.md#ask)
- [disconnect](BBS.BBS-1.md#disconnect)
- [menu](BBS.BBS-1.md#menu)
- [pause](BBS.BBS-1.md#pause)
- [print](BBS.BBS-1.md#print)
- [say](BBS.BBS-1.md#say)
- [sleep](BBS.BBS-1.md#sleep)
- [user](BBS.BBS-1.md#user)

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
| `options?` | [`IIniquityOptions`](../interfaces/BBS.IIniquityOptions.md) | An object containing the various configuration properties. |

#### Defined in

modules/iniquity.ts:180

## Properties

### basepath

• **basepath**: `string`

#### Defined in

modules/iniquity.ts:167

___

### name

• **name**: `string`

#### Defined in

modules/iniquity.ts:168

## Methods

### artwork

▸ **artwork**(`options`): [`Artwork`](BBS.Artwork.md)

Will allow you to render artwork to the screen

**`see`** [IArtworkOptions](../interfaces/BBS.IArtworkOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.artwork({ filename: Assets.we_iniq3 })
iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/BBS.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Artwork`](BBS.Artwork.md)

An instance of Artwork and its return functions.

#### Defined in

modules/iniquity.ts:294

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

modules/iniquity.ts:260

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

modules/iniquity.ts:268

___

### menu

▸ **menu**(`options`): [`Menu`](BBS.Menu.md)

Menu instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IMenuOptions`](../interfaces/BBS.IMenuOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Menu`](BBS.Menu.md)

An instance of Menu

#### Defined in

modules/iniquity.ts:305

___

### pause

▸ **pause**(`options?`): `void`

Display a pause prompt on the screen.

**`summary`** This pause prompt does the usual stuff. It also provides a few helpers via its return functions.

**`see`** [IQPauseOptions](../interfaces/BBS.IQPauseOptions.md) to learn more about the available options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQPauseOptions`](../interfaces/BBS.IQPauseOptions.md) |

#### Returns

`void`

#### Defined in

modules/iniquity.ts:239

___

### print

▸ **print**(`options`): [`IBBSPrintFunctions`](../interfaces/BBS.IBBSPrintFunctions.md)

Prints something to the user. Parses Renegade MCI/Synchronet @- codes.

**`see`** [IQPrintOptions](../interfaces/BBS.IQPrintOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.print("Display some text on the screen that can parse @ codes.").center()
iq.print("Display some text on the screen that can parse @ codes.".newlines(2).color("background red"))
iq.print("Display some text on the screen that can parse @ codes.".color("cyan")).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IQPrintOptions`](../interfaces/BBS.IQPrintOptions.md) | you would like to print on the screen. |

#### Returns

[`IBBSPrintFunctions`](../interfaces/BBS.IBBSPrintFunctions.md)

#### Defined in

modules/iniquity.ts:221

___

### say

▸ **say**(`options`): [`IBBSSayFunctions`](../interfaces/BBS.IBBSSayFunctions.md)

Says something to the user. Does not parse MCI/@- codes.

**`see`** [IQPrintOptions](../interfaces/BBS.IQPrintOptions.md) to learn more about the available options.

**`example`**
```typescript
iq.say("Say something to the terminal!")
iq.say("This time say something but do some cool string manipulation.".newlines(2).color("bright red").center()).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IBBSSayOptions`](../interfaces/BBS.IBBSSayOptions.md) | What you would like to say on the screen. |

#### Returns

[`IBBSSayFunctions`](../interfaces/BBS.IBBSSayFunctions.md)

#### Defined in

modules/iniquity.ts:198

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

modules/iniquity.ts:251

___

### user

▸ **user**(`options`): [`User`](BBS.User.md)

User stuff

**`summary`** It doesn't do much right now. But it does create new users and store them in the SBBS backend.

**`see`** [IUserOptions](../interfaces/BBS.IUserOptions.md) to learn more about the available options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/BBS.IUserOptions.md) | An object containing the various configuration properties. |

#### Returns

[`User`](BBS.User.md)

An instance of User and its return functions.

#### Defined in

modules/iniquity.ts:279
