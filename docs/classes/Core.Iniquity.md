# Class: Iniquity

[Core](../modules/Core.md).Iniquity

Iniquity Core BBS

**`summary`** The main class you will use as it wraps all the other classes in a unified API.

**`example`**
```typescript
import BBS from "@iniquitybbs/core/dist/iniquity"

const mybbs = new BBS()

myIniquity.say("Say hi!").pause()

myIniquity.hangup()

```

## Table of contents

### Constructors

- [constructor](Core.Iniquity.md#constructor)

### Properties

- [basepath](Core.Iniquity.md#basepath)
- [name](Core.Iniquity.md#name)
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
| `options?` | [`IIniquityOptions`](../interfaces/Core.IIniquityOptions.md) | An object containing the various configuration properties. |

#### Defined in

[packages/core/src/index.ts:244](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L244)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[packages/core/src/index.ts:231](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L231)

___

### name

• **name**: `string`

#### Defined in

[packages/core/src/index.ts:232](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L232)

___

### terminfo

• **terminfo**: [`IQTermInfoObject`](../interfaces/Core.IQTermInfoObject.md)

#### Defined in

[packages/core/src/index.ts:399](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L399)

## Methods

### artwork

▸ **artwork**(`options`): [`Artwork`](Core.Artwork.md)

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
| `options` | [`IArtworkOptions`](../interfaces/Core.IArtworkOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Artwork`](Core.Artwork.md)

An instance of Artwork and its return functions.

#### Defined in

[packages/core/src/index.ts:440](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L440)

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

[packages/core/src/index.ts:379](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L379)

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

[packages/core/src/index.ts:341](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L341)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

[packages/core/src/index.ts:387](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L387)

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

[packages/core/src/index.ts:457](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L457)

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

[packages/core/src/index.ts:333](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L333)

___

### logoff

▸ **logoff**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:391](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L391)

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:395](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L395)

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

[packages/core/src/index.ts:449](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L449)

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

[packages/core/src/index.ts:322](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L322)

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

[packages/core/src/index.ts:299](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L299)

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

[packages/core/src/index.ts:262](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L262)

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

[packages/core/src/index.ts:422](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L422)

___

### wait

▸ **wait**(`options?`): `void`

Halt the screen for a specified period of time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `number` \| [`IQWaitOptions`](../interfaces/Core.IQWaitOptions.md) | In miliseconds |

#### Returns

`void`

void

#### Defined in

[packages/core/src/index.ts:368](https://github.com/iniquitybbs/iniquity/blob/b8c4706/packages/core/src/index.ts#L368)
