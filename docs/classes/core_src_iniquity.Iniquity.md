[Iniquity BBS Developer Guide - v1.0.0](../README.md) / [Exports](../modules.md) / [core/src/iniquity](../modules/core_src_iniquity.md) / Iniquity

# Class: Iniquity

[core/src/iniquity](../modules/core_src_iniquity.md).Iniquity

Iniquity BBS

**`global`**

## Table of contents

### Constructors

- [constructor](core_src_iniquity.Iniquity.md#constructor)

### Properties

- [basepath](core_src_iniquity.Iniquity.md#basepath)
- [name](core_src_iniquity.Iniquity.md#name)

### Methods

- [artwork](core_src_iniquity.Iniquity.md#artwork)
- [ask](core_src_iniquity.Iniquity.md#ask)
- [disconnect](core_src_iniquity.Iniquity.md#disconnect)
- [menu](core_src_iniquity.Iniquity.md#menu)
- [pause](core_src_iniquity.Iniquity.md#pause)
- [print](core_src_iniquity.Iniquity.md#print)
- [say](core_src_iniquity.Iniquity.md#say)
- [sleep](core_src_iniquity.Iniquity.md#sleep)
- [user](core_src_iniquity.Iniquity.md#user)

## Constructors

### constructor

• **new Iniquity**(`options?`)

Iniquity BBS core class

**`example`**
```typescript
const iq = new Iniquity()
const iq = new Iniquity({ basepath: "/iniquity/bbs/path" })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IIniquityOptions`](../interfaces/core_src_iniquity.IIniquityOptions.md) | An object containing the various configuration properties. |

#### Defined in

[iniquity.ts:150](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L150)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:137](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L137)

___

### name

• **name**: `string`

#### Defined in

[iniquity.ts:138](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L138)

## Methods

### artwork

▸ **artwork**(`options`): [`Artwork`](core_src_iniquity.Artwork.md)

Will allow you to render artwork to the screen

**`see`** [IArtworkOptions](../interfaces/core_src_iniquity.IArtworkOptions.md)

**`example`**
```typescript
iq.artwork({ filename: Assets.we_iniq3 })
iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IArtworkOptions`](../interfaces/core_src_iniquity.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Artwork`](core_src_iniquity.Artwork.md)

An instance of Artwork and its return functions.

#### Defined in

[iniquity.ts:262](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L262)

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

[iniquity.ts:229](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L229)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

[iniquity.ts:237](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L237)

___

### menu

▸ **menu**(`options`): [`Menu`](core_src_iniquity.Menu.md)

Menu instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IMenuOptions`](../interfaces/core_src_iniquity.IMenuOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Menu`](core_src_iniquity.Menu.md)

An instance of Menu

#### Defined in

[iniquity.ts:273](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L273)

___

### pause

▸ **pause**(`options?`): `void`

Pause the cursor

**`see`** [IBBSPauseOptions](../interfaces/core_src_iniquity.IBBSPauseOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IBBSPauseOptions`](../interfaces/core_src_iniquity.IBBSPauseOptions.md) |

#### Returns

`void`

#### Defined in

[iniquity.ts:208](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L208)

___

### print

▸ **print**(`options`): [`IBBSPrintFunctions`](../interfaces/core_src_iniquity.IBBSPrintFunctions.md)

Prints something to the user. Parses Renegade MCI/Synchronet @- codes.

**`see`** [IBBSPrintOptions](../interfaces/core_src_iniquity.IBBSPrintOptions.md)

**`example`**
```typescript
iq.print("Display some text on the screen that can parse @ codes.").center()
iq.print("Display some text on the screen that can parse @ codes.".newlines(2).color("background red"))
iq.print("Display some text on the screen that can parse @ codes.".color("cyan")).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IBBSPrintOptions`](../interfaces/core_src_iniquity.IBBSPrintOptions.md) | you would like to print on the screen. |

#### Returns

[`IBBSPrintFunctions`](../interfaces/core_src_iniquity.IBBSPrintFunctions.md)

#### Defined in

[iniquity.ts:191](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L191)

___

### say

▸ **say**(`options`): [`IBBSSayFunctions`](../interfaces/core_src_iniquity.IBBSSayFunctions.md)

Says something to the user. Does not parse MCI/@- codes.

**`see`** [IBBSPrintOptions](../interfaces/core_src_iniquity.IBBSPrintOptions.md)

**`example`**
```typescript
iq.say("Say something to the terminal!")
iq.say("This time say something but do some cool string manipulation.".newlines(2).color("bright red").center()).pause()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`IBBSSayOptions`](../interfaces/core_src_iniquity.IBBSSayOptions.md) | What you would like to say on the screen. |

#### Returns

[`IBBSSayFunctions`](../interfaces/core_src_iniquity.IBBSSayFunctions.md)

#### Defined in

[iniquity.ts:168](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L168)

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

[iniquity.ts:220](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L220)

___

### user

▸ **user**(`options`): [`User`](core_src_iniquity.User.md)

Will allow you to work with user data.

**`see`** [IUserOptions](../interfaces/core_src_iniquity.IUserOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/core_src_iniquity.IUserOptions.md) | An object containing the various configuration properties. |

#### Returns

[`User`](core_src_iniquity.User.md)

An instance of User and its return functions.

#### Defined in

[iniquity.ts:247](https://github.com/iniquitybbs/iniquity/blob/41dba24/packages/core/src/iniquity.ts#L247)
