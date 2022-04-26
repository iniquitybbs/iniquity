# Class: Apply

[templates/src/modules/eternity/apply](../modules/templates_src_modules_eternity_apply.md).Apply

## Hierarchy

- [`IQ`](Core.IQ-1.md)

  ↳ **`Apply`**

## Table of contents

### Constructors

- [constructor](templates_src_modules_eternity_apply.Apply.md#constructor)

### Properties

- [access](templates_src_modules_eternity_apply.Apply.md#access)
- [assets](templates_src_modules_eternity_apply.Apply.md#assets)
- [basepath](templates_src_modules_eternity_apply.Apply.md#basepath)
- [computed](templates_src_modules_eternity_apply.Apply.md#computed)
- [data](templates_src_modules_eternity_apply.Apply.md#data)
- [encoding](templates_src_modules_eternity_apply.Apply.md#encoding)
- [terminfo](templates_src_modules_eternity_apply.Apply.md#terminfo)

### Methods

- [artwork](templates_src_modules_eternity_apply.Apply.md#artwork)
- [ask](templates_src_modules_eternity_apply.Apply.md#ask)
- [cursor](templates_src_modules_eternity_apply.Apply.md#cursor)
- [disconnect](templates_src_modules_eternity_apply.Apply.md#disconnect)
- [frame](templates_src_modules_eternity_apply.Apply.md#frame)
- [gotoxy](templates_src_modules_eternity_apply.Apply.md#gotoxy)
- [logoff](templates_src_modules_eternity_apply.Apply.md#logoff)
- [logout](templates_src_modules_eternity_apply.Apply.md#logout)
- [menu](templates_src_modules_eternity_apply.Apply.md#menu)
- [pause](templates_src_modules_eternity_apply.Apply.md#pause)
- [print](templates_src_modules_eternity_apply.Apply.md#print)
- [say](templates_src_modules_eternity_apply.Apply.md#say)
- [start](templates_src_modules_eternity_apply.Apply.md#start)
- [user](templates_src_modules_eternity_apply.Apply.md#user)
- [wait](templates_src_modules_eternity_apply.Apply.md#wait)

## Constructors

### constructor

• **new Apply**()

#### Inherited from

[IQ](Core.IQ-1.md).[constructor](Core.IQ-1.md#constructor)

## Properties

### access

• **access**: [`IQModuleACLS`](../enums/Core.IQModuleACLS.md)

#### Inherited from

[IQ](Core.IQ-1.md).[access](Core.IQ-1.md#access)

#### Defined in

[packages/core/src/index.ts:346](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L346)

___

### assets

• **assets**: `string`

#### Inherited from

[IQ](Core.IQ-1.md).[assets](Core.IQ-1.md#assets)

#### Defined in

[packages/core/src/index.ts:345](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L345)

___

### basepath

• **basepath**: `string`

#### Inherited from

[IQ](Core.IQ-1.md).[basepath](Core.IQ-1.md#basepath)

#### Defined in

[packages/core/src/index.ts:344](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L344)

___

### computed

• **computed**: `any`

#### Inherited from

[IQ](Core.IQ-1.md).[computed](Core.IQ-1.md#computed)

#### Defined in

[packages/core/src/index.ts:349](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L349)

___

### data

• **data**: [`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

#### Inherited from

[IQ](Core.IQ-1.md).[data](Core.IQ-1.md#data)

#### Defined in

[packages/core/src/index.ts:348](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L348)

___

### encoding

• **encoding**: ``"CP437"`` \| ``"UTF8"``

#### Inherited from

[IQ](Core.IQ-1.md).[encoding](Core.IQ-1.md#encoding)

#### Defined in

[packages/core/src/index.ts:347](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L347)

___

### terminfo

• **terminfo**: [`IQTermInfoObject`](../interfaces/Core.IQTermInfoObject.md)

Terminal information available to iniquity

#### Inherited from

[IQ](Core.IQ-1.md).[terminfo](Core.IQ-1.md#terminfo)

#### Defined in

[packages/core/src/index.ts:511](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L511)

## Methods

### artwork

▸ **artwork**(`options?`): [`Artwork`](Core.Artwork.md)

Will allow you to
render artwork to the screen

**`see`** [IQArtworkOptions](../interfaces/Core.IQArtworkOptions.md) to learn more about the available options.

**`example`**
```typescript
const artwork = iq.artwork({ basepath: "/iniquity/core/src/assets/" })
artwork.render({ filename: Assets.we_iniq3 })

iq.artwork({ basepath: "/iniquity/core/src/assets/", filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IQArtworkOptions`](../interfaces/Core.IQArtworkOptions.md) | An object containing the various configuration properties. |

#### Returns

[`Artwork`](Core.Artwork.md)

An instance of Artwork and its return functions.

#### Inherited from

[IQ](Core.IQ-1.md).[artwork](Core.IQ-1.md#artwork)

#### Defined in

[packages/core/src/index.ts:544](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L544)

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

[IQ](Core.IQ-1.md).[ask](Core.IQ-1.md#ask)

#### Defined in

[packages/core/src/index.ts:488](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L488)

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

[IQ](Core.IQ-1.md).[cursor](Core.IQ-1.md#cursor)

#### Defined in

[packages/core/src/index.ts:443](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L443)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Inherited from

[IQ](Core.IQ-1.md).[disconnect](Core.IQ-1.md#disconnect)

#### Defined in

[packages/core/src/index.ts:496](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L496)

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

[IQ](Core.IQ-1.md).[frame](Core.IQ-1.md#frame)

#### Defined in

[packages/core/src/index.ts:561](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L561)

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

[IQ](Core.IQ-1.md).[gotoxy](Core.IQ-1.md#gotoxy)

#### Defined in

[packages/core/src/index.ts:435](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L435)

___

### logoff

▸ **logoff**(): `void`

#### Returns

`void`

#### Inherited from

[IQ](Core.IQ-1.md).[logoff](Core.IQ-1.md#logoff)

#### Defined in

[packages/core/src/index.ts:500](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L500)

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Inherited from

[IQ](Core.IQ-1.md).[logout](Core.IQ-1.md#logout)

#### Defined in

[packages/core/src/index.ts:504](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L504)

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

[IQ](Core.IQ-1.md).[menu](Core.IQ-1.md#menu)

#### Defined in

[packages/core/src/index.ts:553](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L553)

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

[IQ](Core.IQ-1.md).[pause](Core.IQ-1.md#pause)

#### Defined in

[packages/core/src/index.ts:424](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L424)

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

[IQ](Core.IQ-1.md).[print](Core.IQ-1.md#print)

#### Defined in

[packages/core/src/index.ts:402](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L402)

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

[IQ](Core.IQ-1.md).[say](Core.IQ-1.md#say)

#### Defined in

[packages/core/src/index.ts:364](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L364)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[IQ](Core.IQ-1.md).[start](Core.IQ-1.md#start)

#### Defined in

[packages/templates/src/modules/eternity/apply.ts:18](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/templates/src/modules/eternity/apply.ts#L18)

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

[IQ](Core.IQ-1.md).[user](Core.IQ-1.md#user)

#### Defined in

[packages/core/src/index.ts:526](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L526)

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

[IQ](Core.IQ-1.md).[wait](Core.IQ-1.md#wait)

#### Defined in

[packages/core/src/index.ts:477](https://github.com/iniquitybbs/iniquity/blob/a82cddc/packages/core/src/index.ts#L477)
