# Class: Iniquity

[Core](../modules/Core.md).Iniquity

## Hierarchy

- [`IQBaseConfig`](Core.IQBaseConfig.md)

  ↳ **`Iniquity`**

  ↳↳ [`IQ`](Core.IQ-1.md)

  ↳↳ [`Core`](Core.IQ.Core-1.md)

  ↳↳ [`User`](Core.User.md)

## Table of contents

### Constructors

- [constructor](Core.Iniquity.md#constructor)

### Properties

- [access](Core.Iniquity.md#access)
- [assets](Core.Iniquity.md#assets)
- [basepath](Core.Iniquity.md#basepath)
- [computed](Core.Iniquity.md#computed)
- [data](Core.Iniquity.md#data)
- [encoding](Core.Iniquity.md#encoding)
- [terminfo](Core.Iniquity.md#terminfo)

### Methods

- [artwork](Core.Iniquity.md#artwork)
- [ask](Core.Iniquity.md#ask)
- [cursor](Core.Iniquity.md#cursor)
- [disconnect](Core.Iniquity.md#disconnect)
- [frame](Core.Iniquity.md#frame)
- [gotoxy](Core.Iniquity.md#gotoxy)
- [logoff](Core.Iniquity.md#logoff)
- [logout](Core.Iniquity.md#logout)
- [menu](Core.Iniquity.md#menu)
- [pause](Core.Iniquity.md#pause)
- [print](Core.Iniquity.md#print)
- [say](Core.Iniquity.md#say)
- [user](Core.Iniquity.md#user)
- [wait](Core.Iniquity.md#wait)

## Constructors

### constructor

• **new Iniquity**()

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[constructor](Core.IQBaseConfig.md#constructor)

## Properties

### access

• **access**: [`IQModuleACLS`](../enums/Core.IQModuleACLS.md)

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[access](Core.IQBaseConfig.md#access)

#### Defined in

[packages/core/src/index.ts:311](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L311)

___

### assets

• **assets**: `string`

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[assets](Core.IQBaseConfig.md#assets)

#### Defined in

[packages/core/src/index.ts:310](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L310)

___

### basepath

• **basepath**: `string`

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[basepath](Core.IQBaseConfig.md#basepath)

#### Defined in

[packages/core/src/index.ts:309](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L309)

___

### computed

• **computed**: `any`

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[computed](Core.IQBaseConfig.md#computed)

#### Defined in

[packages/core/src/index.ts:314](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L314)

___

### data

• **data**: [`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[data](Core.IQBaseConfig.md#data)

#### Defined in

[packages/core/src/index.ts:313](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L313)

___

### encoding

• **encoding**: ``"CP437"`` \| ``"UTF8"``

#### Inherited from

[IQBaseConfig](Core.IQBaseConfig.md).[encoding](Core.IQBaseConfig.md#encoding)

#### Defined in

[packages/core/src/index.ts:312](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L312)

___

### terminfo

• **terminfo**: [`IQTermInfoObject`](../interfaces/Core.IQTermInfoObject.md)

#### Defined in

[packages/core/src/index.ts:473](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L473)

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

#### Defined in

[packages/core/src/index.ts:514](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L514)

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

[packages/core/src/index.ts:453](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L453)

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

#### Defined in

[packages/core/src/index.ts:408](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L408)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

[packages/core/src/index.ts:461](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L461)

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

#### Defined in

[packages/core/src/index.ts:531](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L531)

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

#### Defined in

[packages/core/src/index.ts:400](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L400)

___

### logoff

▸ **logoff**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:465](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L465)

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:469](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L469)

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

#### Defined in

[packages/core/src/index.ts:523](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L523)

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

[packages/core/src/index.ts:389](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L389)

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

[packages/core/src/index.ts:367](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L367)

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

#### Defined in

[packages/core/src/index.ts:329](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L329)

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

[packages/core/src/index.ts:496](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L496)

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

#### Defined in

[packages/core/src/index.ts:442](https://github.com/iniquitybbs/iniquity/blob/5dc4891/packages/core/src/index.ts#L442)
