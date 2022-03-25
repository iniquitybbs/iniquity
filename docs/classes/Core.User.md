# Class: User

[Core](../modules/Core.md).User

User

**`summary`** Some basic user utils. More to follow.

## Hierarchy

- [`Iniquity`](Core.Iniquity.md)

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](Core.User.md#constructor)

### Properties

- [access](Core.User.md#access)
- [assets](Core.User.md#assets)
- [basepath](Core.User.md#basepath)
- [computed](Core.User.md#computed)
- [data](Core.User.md#data)
- [encoding](Core.User.md#encoding)
- [name](Core.User.md#name)
- [password](Core.User.md#password)
- [terminfo](Core.User.md#terminfo)

### Methods

- [artwork](Core.User.md#artwork)
- [ask](Core.User.md#ask)
- [cursor](Core.User.md#cursor)
- [disconnect](Core.User.md#disconnect)
- [frame](Core.User.md#frame)
- [gotoxy](Core.User.md#gotoxy)
- [login](Core.User.md#login)
- [logoff](Core.User.md#logoff)
- [logout](Core.User.md#logout)
- [menu](Core.User.md#menu)
- [new](Core.User.md#new)
- [pause](Core.User.md#pause)
- [print](Core.User.md#print)
- [say](Core.User.md#say)
- [user](Core.User.md#user)
- [wait](Core.User.md#wait)

## Constructors

### constructor

• **new User**(`options`)

Mechanisms for working with an individual iniquity user

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/Core.IUserOptions.md) |

#### Overrides

[Iniquity](Core.Iniquity.md).[constructor](Core.Iniquity.md#constructor)

#### Defined in

[packages/core/src/index.ts:769](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L769)

## Properties

### access

• **access**: [`IQModuleACLS`](../enums/Core.IQModuleACLS.md)

#### Inherited from

[Iniquity](Core.Iniquity.md).[access](Core.Iniquity.md#access)

#### Defined in

[packages/core/src/index.ts:311](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L311)

___

### assets

• **assets**: `string`

#### Inherited from

[Iniquity](Core.Iniquity.md).[assets](Core.Iniquity.md#assets)

#### Defined in

[packages/core/src/index.ts:310](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L310)

___

### basepath

• **basepath**: `string`

#### Inherited from

[Iniquity](Core.Iniquity.md).[basepath](Core.Iniquity.md#basepath)

#### Defined in

[packages/core/src/index.ts:309](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L309)

___

### computed

• **computed**: `any`

#### Inherited from

[Iniquity](Core.Iniquity.md).[computed](Core.Iniquity.md#computed)

#### Defined in

[packages/core/src/index.ts:314](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L314)

___

### data

• **data**: [`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

#### Inherited from

[Iniquity](Core.Iniquity.md).[data](Core.Iniquity.md#data)

#### Defined in

[packages/core/src/index.ts:313](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L313)

___

### encoding

• **encoding**: ``"CP437"`` \| ``"UTF8"``

#### Inherited from

[Iniquity](Core.Iniquity.md).[encoding](Core.Iniquity.md#encoding)

#### Defined in

[packages/core/src/index.ts:312](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L312)

___

### name

• **name**: `string` = `""`

#### Defined in

[packages/core/src/index.ts:761](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L761)

___

### password

• **password**: `string` = `""`

#### Defined in

[packages/core/src/index.ts:762](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L762)

___

### terminfo

• **terminfo**: [`IQTermInfoObject`](../interfaces/Core.IQTermInfoObject.md)

#### Inherited from

[Iniquity](Core.Iniquity.md).[terminfo](Core.Iniquity.md#terminfo)

#### Defined in

[packages/core/src/index.ts:473](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L473)

## Methods

### artwork

▸ **artwork**(`options?`): [`Artwork`](Core.Artwork.md)

Will allow you to
render artwork to the screen

**`see`** [IArtworkOptions](../interfaces/Core.IArtworkOptions.md) to learn more about the available options.

**`example`**
```typescript
const artwork = iq.artwork({ basepath: "/iniquity/core/src/assets/" })
artwork.render({ filename: Assets.we_iniq3 })

iq.artwork({ basepath: "/iniquity/core/src/assets/", filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IArtworkOptions`](../interfaces/Core.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Artwork`](Core.Artwork.md)

An instance of Artwork and its return functions.

#### Inherited from

[Iniquity](Core.Iniquity.md).[artwork](Core.Iniquity.md#artwork)

#### Defined in

[packages/core/src/index.ts:514](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L514)

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

#### Inherited from

[Iniquity](Core.Iniquity.md).[ask](Core.Iniquity.md#ask)

#### Defined in

[packages/core/src/index.ts:453](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L453)

___

### cursor

▸ **cursor**(`options?`): [`IQCursorChainableMethods`](../interfaces/Core.IQCursorChainableMethods.md)

Sends the cursor to a particular coordinates on the screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQCursorOptions`](../interfaces/Core.IQCursorOptions.md) |

#### Returns

[`IQCursorChainableMethods`](../interfaces/Core.IQCursorChainableMethods.md)

#### Inherited from

[Iniquity](Core.Iniquity.md).[cursor](Core.Iniquity.md#cursor)

#### Defined in

[packages/core/src/index.ts:408](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L408)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Inherited from

[Iniquity](Core.Iniquity.md).[disconnect](Core.Iniquity.md#disconnect)

#### Defined in

[packages/core/src/index.ts:461](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L461)

___

### frame

▸ **frame**(`options`): [`IQFrame`](Core.IQFrame.md)

Frame instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IQFrameOptions`](../interfaces/Core.IQFrameOptions.md) | An object containing the various configuration properties. |

#### Returns

[`IQFrame`](Core.IQFrame.md)

An instance of Menu

#### Inherited from

[Iniquity](Core.Iniquity.md).[frame](Core.Iniquity.md#frame)

#### Defined in

[packages/core/src/index.ts:531](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L531)

___

### gotoxy

▸ **gotoxy**(`x`, `y`): `void`

Sends the cursor to a particular coordinates on the screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[Iniquity](Core.Iniquity.md).[gotoxy](Core.Iniquity.md#gotoxy)

#### Defined in

[packages/core/src/index.ts:400](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L400)

___

### login

▸ **login**(): `any`

#### Returns

`any`

#### Defined in

[packages/core/src/index.ts:775](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L775)

___

### logoff

▸ **logoff**(): `void`

#### Returns

`void`

#### Inherited from

[Iniquity](Core.Iniquity.md).[logoff](Core.Iniquity.md#logoff)

#### Defined in

[packages/core/src/index.ts:465](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L465)

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Inherited from

[Iniquity](Core.Iniquity.md).[logout](Core.Iniquity.md#logout)

#### Defined in

[packages/core/src/index.ts:469](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L469)

___

### menu

▸ **menu**(`options`): [`IQMenu`](Core.IQMenu.md)

Menu instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IQMenuOptions`](../interfaces/Core.IQMenuOptions.md) | An object containing the various configuration properties. |

#### Returns

[`IQMenu`](Core.IQMenu.md)

An instance of Menu

#### Inherited from

[Iniquity](Core.Iniquity.md).[menu](Core.Iniquity.md#menu)

#### Defined in

[packages/core/src/index.ts:523](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L523)

___

### new

▸ **new**(): `object`

#### Returns

`object`

#### Defined in

[packages/core/src/index.ts:780](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L780)

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

#### Inherited from

[Iniquity](Core.Iniquity.md).[pause](Core.Iniquity.md#pause)

#### Defined in

[packages/core/src/index.ts:389](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L389)

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

#### Inherited from

[Iniquity](Core.Iniquity.md).[print](Core.Iniquity.md#print)

#### Defined in

[packages/core/src/index.ts:367](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L367)

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
| `options` | `any` | What you would like to say on the screen. |

#### Returns

[`IBBSSayFunctions`](../interfaces/Core.IBBSSayFunctions.md)

#### Inherited from

[Iniquity](Core.Iniquity.md).[say](Core.Iniquity.md#say)

#### Defined in

[packages/core/src/index.ts:329](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L329)

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

#### Inherited from

[Iniquity](Core.Iniquity.md).[user](Core.Iniquity.md#user)

#### Defined in

[packages/core/src/index.ts:496](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L496)

___

### wait

▸ **wait**(`options?`): `void`

Halt the screen for a specified period of time.

**`example`**
iq.wait(100)
wait(10)
this.wait(1000)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `number` \| [`IQWaitOptions`](../interfaces/Core.IQWaitOptions.md) | In miliseconds |

#### Returns

`void`

void

#### Inherited from

[Iniquity](Core.Iniquity.md).[wait](Core.Iniquity.md#wait)

#### Defined in

[packages/core/src/index.ts:442](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L442)
