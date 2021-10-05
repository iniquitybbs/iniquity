[Documentation - v3.0.0](../README.md) / [Exports](../modules.md) / [Iniquity](../modules/Iniquity.md) / default

# Class: default

[Iniquity](../modules/Iniquity.md).default

Iniquity BBS

**`summary`** The main class you will use as it wraps all the other classes in a unified API.

**`example`**
```typescript
import Iniquity from "@iniquitybbs/iniquity"

const iq = new Iniquity()

iq.say("Say hi!").pause()

iq.hangup()
```

## Table of contents

### Constructors

- [constructor](Iniquity.default.md#constructor)

### Properties

- [basepath](Iniquity.default.md#basepath)
- [name](Iniquity.default.md#name)

### Methods

- [artwork](Iniquity.default.md#artwork)
- [ask](Iniquity.default.md#ask)
- [disconnect](Iniquity.default.md#disconnect)
- [menu](Iniquity.default.md#menu)
- [pause](Iniquity.default.md#pause)
- [print](Iniquity.default.md#print)
- [say](Iniquity.default.md#say)
- [sleep](Iniquity.default.md#sleep)
- [user](Iniquity.default.md#user)

## Constructors

### constructor

• **new default**(`options?`)

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

[iniquity.ts:177](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L177)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:164](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L164)

___

### name

• **name**: `string`

#### Defined in

[iniquity.ts:165](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L165)

## Methods

### artwork

▸ **artwork**(`options`): [`Artwork`](Iniquity.Artwork.md)

Will allow you to render artwork to the screen

**`see`** [IArtworkOptions](../interfaces/Iniquity.IArtworkOptions.md)

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

[iniquity.ts:289](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L289)

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

[iniquity.ts:256](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L256)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

[iniquity.ts:264](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L264)

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

[iniquity.ts:300](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L300)

___

### pause

▸ **pause**(`options?`): `void`

Pause the cursor

**`see`** [IBBSPauseOptions](../interfaces/Iniquity.IBBSPauseOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IBBSPauseOptions`](../interfaces/Iniquity.IBBSPauseOptions.md) |

#### Returns

`void`

#### Defined in

[iniquity.ts:235](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L235)

___

### print

▸ **print**(`options`): [`IBBSPrintFunctions`](../interfaces/Iniquity.IBBSPrintFunctions.md)

Prints something to the user. Parses Renegade MCI/Synchronet @- codes.

**`see`** [IBBSPrintOptions](../interfaces/Iniquity.IBBSPrintOptions.md)

**`example`**
```typescript
iq.print("Display some text on the screen that can parse @ codes.").center()
iq.print("Display some text on the screen that can parse @ codes.".newlines(2).color("background red"))
iq.print("Display some text on the screen that can parse @ codes.".color("cyan")).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IBBSPrintOptions`](../interfaces/Iniquity.IBBSPrintOptions.md) | you would like to print on the screen. |

#### Returns

[`IBBSPrintFunctions`](../interfaces/Iniquity.IBBSPrintFunctions.md)

#### Defined in

[iniquity.ts:218](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L218)

___

### say

▸ **say**(`options`): [`IBBSSayFunctions`](../interfaces/Iniquity.IBBSSayFunctions.md)

Says something to the user. Does not parse MCI/@- codes.

**`see`** [IBBSPrintOptions](../interfaces/Iniquity.IBBSPrintOptions.md)

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

[iniquity.ts:195](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L195)

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

[iniquity.ts:247](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L247)

___

### user

▸ **user**(`options`): [`User`](Iniquity.User.md)

Will allow you to work with user data.

**`see`** [IUserOptions](../interfaces/Iniquity.IUserOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/Iniquity.IUserOptions.md) | An object containing the various configuration properties. |

#### Returns

[`User`](Iniquity.User.md)

An instance of User and its return functions.

#### Defined in

[iniquity.ts:274](https://github.com/iniquitybbs/iniquity/blob/1b7703d/packages/core/src/iniquity.ts#L274)
