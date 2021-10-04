# Class: default

[core/dist/iniquity](../wiki/core.dist.iniquity).default

Iniquity BBS

**`global`**

## Table of contents

### Constructors

- [constructor](../wiki/core.dist.iniquity.default#constructor)

### Properties

- [basepath](../wiki/core.dist.iniquity.default#basepath)
- [name](../wiki/core.dist.iniquity.default#name)

### Methods

- [artwork](../wiki/core.dist.iniquity.default#artwork)
- [ask](../wiki/core.dist.iniquity.default#ask)
- [disconnect](../wiki/core.dist.iniquity.default#disconnect)
- [menu](../wiki/core.dist.iniquity.default#menu)
- [pause](../wiki/core.dist.iniquity.default#pause)
- [print](../wiki/core.dist.iniquity.default#print)
- [say](../wiki/core.dist.iniquity.default#say)
- [sleep](../wiki/core.dist.iniquity.default#sleep)
- [user](../wiki/core.dist.iniquity.default#user)

## Constructors

### constructor

• **new default**(`options?`)

Iniquity BBS core class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `IIniquityOptions` | An object containing the various configuration properties. |

#### Defined in

dist/iniquity.d.ts:99

## Properties

### basepath

• **basepath**: `string`

#### Defined in

dist/iniquity.d.ts:92

___

### name

• **name**: `string`

#### Defined in

dist/iniquity.d.ts:93

## Methods

### artwork

▸ **artwork**(`options`): `Artwork`

Will allow you to render artwork to the screen

**`see`** {@link IArtworkOptions}

**`example`**
iq.artwork({ filename: Assets.we_iniq3 })
iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `IArtworkOptions` | An object containing the various configuration properties. |

#### Returns

`Artwork`

An instance of Artwork and its return functions.

#### Defined in

dist/iniquity.d.ts:153

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

dist/iniquity.d.ts:131

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

dist/iniquity.d.ts:136

___

### menu

▸ **menu**(`options`): `Menu`

Menu instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `IMenuOptions` | An object containing the various configuration properties. |

#### Returns

`Menu`

An instance of Menu

#### Defined in

dist/iniquity.d.ts:161

___

### pause

▸ **pause**(`options?`): `void`

Pause the cursor

**`see`** {@link IBBSPauseOptions}

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IBBSPauseOptions` |

#### Returns

`void`

#### Defined in

dist/iniquity.d.ts:119

___

### print

▸ **print**(`options`): `IBBSPrintFunctions`

Prints something to the user. Parses Renegade MCI/Synchronet @- codes.

**`see`** {@link IBBSPrintOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| `IBBSPrintOptions` | you would like to print on the screen. |

#### Returns

`IBBSPrintFunctions`

#### Defined in

dist/iniquity.d.ts:113

___

### say

▸ **say**(`options`): `IBBSSayFunctions`

Says something to the user. Does not parse MCI/@- codes.

**`see`** {@link IBBSPrintOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| `IBBSSayOptions` | What you would like to say on the screen. |

#### Returns

`IBBSSayFunctions`

#### Defined in

dist/iniquity.d.ts:106

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

dist/iniquity.d.ts:125

___

### user

▸ **user**(`options`): `User`

Will allow you to work with user data.

**`see`** {@link IUserOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `IUserOptions` | An object containing the various configuration properties. |

#### Returns

`User`

An instance of User and its return functions.

#### Defined in

dist/iniquity.d.ts:143
