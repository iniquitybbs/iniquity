# Class: Runtime

[core](../modules/core.md).Runtime

Runtime context for BBS execution
Primary coordinator for all runtime components

## Table of contents

### Constructors

- [constructor](core.Runtime.md#constructor)

### Properties

- [data](core.Runtime.md#data)

### Accessors

- [mci](core.Runtime.md#mci)
- [terminfo](core.Runtime.md#terminfo)

### Methods

- [alert](core.Runtime.md#alert)
- [artwork](core.Runtime.md#artwork)
- [ask](core.Runtime.md#ask)
- [clearLastRenderedMenuArtKey](core.Runtime.md#clearlastrenderedmenuartkey)
- [config](core.Runtime.md#config)
- [cursor](core.Runtime.md#cursor)
- [disablePause](core.Runtime.md#disablepause)
- [disconnect](core.Runtime.md#disconnect)
- [enablePause](core.Runtime.md#enablepause)
- [frame](core.Runtime.md#frame)
- [getLastRenderedMenuArtKey](core.Runtime.md#getlastrenderedmenuartkey)
- [getMCIVar](core.Runtime.md#getmcivar)
- [getOutput](core.Runtime.md#getoutput)
- [getProgramDirectory](core.Runtime.md#getprogramdirectory)
- [gotoxy](core.Runtime.md#gotoxy)
- [group](core.Runtime.md#group)
- [groups](core.Runtime.md#groups)
- [isPauseAborted](core.Runtime.md#ispauseaborted)
- [menu](core.Runtime.md#menu)
- [network](core.Runtime.md#network)
- [pause](core.Runtime.md#pause)
- [print](core.Runtime.md#print)
- [printMCI](core.Runtime.md#printmci)
- [processMCI](core.Runtime.md#processmci)
- [processPendingActions](core.Runtime.md#processpendingactions)
- [processSnacks](core.Runtime.md#processsnacks)
- [resetPauseAborted](core.Runtime.md#resetpauseaborted)
- [say](core.Runtime.md#say)
- [sayRaw](core.Runtime.md#sayraw)
- [setLastRenderedMenuArtKey](core.Runtime.md#setlastrenderedmenuartkey)
- [setMCIContext](core.Runtime.md#setmcicontext)
- [setMCIVar](core.Runtime.md#setmcivar)
- [setProgramDirectory](core.Runtime.md#setprogramdirectory)
- [setPromptPosition](core.Runtime.md#setpromptposition)
- [text](core.Runtime.md#text)
- [user](core.Runtime.md#user)
- [users](core.Runtime.md#users)
- [wait](core.Runtime.md#wait)

## Constructors

### constructor

• **new Runtime**(`output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |

#### Defined in

[core/src/core.ts:157](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L157)

## Properties

### data

• **data**: [`IQReactorOptions`](../interfaces/runtime_reactor.IQReactorOptions.md)

#### Defined in

[core/src/core.ts:150](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L150)

## Accessors

### mci

• `get` **mci**(): [`MCIProcessor`](runtime_mci_processor.MCIProcessor.md)

Get the MCI processor

#### Returns

[`MCIProcessor`](runtime_mci_processor.MCIProcessor.md)

#### Defined in

[core/src/core.ts:181](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L181)

___

### terminfo

• `get` **terminfo**(): [`IQTermInfoObject`](../interfaces/core.IQTermInfoObject.md)

Get terminal dimensions

#### Returns

[`IQTermInfoObject`](../interfaces/core.IQTermInfoObject.md)

#### Defined in

[core/src/core.ts:171](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L171)

## Methods

### alert

▸ **alert**(`message`, `options?`): `Promise`<`void`\>

Display an alert box

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `options?` | [`IAlertOptions`](../interfaces/core.IAlertOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/core.ts:492](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L492)

___

### artwork

▸ **artwork**(`options?`): [`Artwork`](core_artwork.Artwork.md)

Create artwork instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQArtworkOptions`](../interfaces/core_artwork.IQArtworkOptions.md) |

#### Returns

[`Artwork`](core_artwork.Artwork.md)

#### Defined in

[core/src/core.ts:428](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L428)

___

### ask

▸ **ask**(`question`): `Promise`<`string`\>

Ask the user a question and return their input

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/core.ts:327](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L327)

___

### clearLastRenderedMenuArtKey

▸ **clearLastRenderedMenuArtKey**(): `void`

Clear the last-rendered art key (e.g. after full-screen goodbye so next menu full-redraws).

#### Returns

`void`

#### Defined in

[core/src/core.ts:589](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L589)

___

### config

▸ **config**(): [`IQConfig`](config.IQConfig.md)

Get configuration

#### Returns

[`IQConfig`](config.IQConfig.md)

#### Defined in

[core/src/core.ts:485](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L485)

___

### cursor

▸ **cursor**(`options?`): [`IQCursorChainableMethods`](../interfaces/core.IQCursorChainableMethods.md)

Get cursor control

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IQCursorOptions`](../interfaces/core.IQCursorOptions.md) |

#### Returns

[`IQCursorChainableMethods`](../interfaces/core.IQCursorChainableMethods.md)

#### Defined in

[core/src/core.ts:436](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L436)

___

### disablePause

▸ **disablePause**(): `void`

Disable pause

#### Returns

`void`

#### Defined in

[core/src/core.ts:617](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L617)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the user

#### Returns

`void`

#### Defined in

[core/src/core.ts:407](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L407)

___

### enablePause

▸ **enablePause**(): `void`

Enable pause

#### Returns

`void`

#### Defined in

[core/src/core.ts:610](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L610)

___

### frame

▸ **frame**(`options`): [`IQFrame`](core_frame.IQFrame.md)

Create a frame

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQFrameOptions`](../interfaces/core_frame.IQFrameOptions.md) |

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/core.ts:421](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L421)

___

### getLastRenderedMenuArtKey

▸ **getLastRenderedMenuArtKey**(): ``null`` \| `string`

Get the art key of the last menu that drew artwork (used to skip redraw when same art).

#### Returns

``null`` \| `string`

#### Defined in

[core/src/core.ts:575](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L575)

___

### getMCIVar

▸ **getMCIVar**(`key`): `any`

Get custom MCI variable

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[core/src/core.ts:209](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L209)

___

### getOutput

▸ **getOutput**(): [`IQOutput`](../interfaces/core_output.IQOutput.md)

Get current output

#### Returns

[`IQOutput`](../interfaces/core_output.IQOutput.md)

#### Defined in

[core/src/core.ts:164](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L164)

___

### getProgramDirectory

▸ **getProgramDirectory**(): `string`

Get program directory

#### Returns

`string`

#### Defined in

[core/src/core.ts:544](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L544)

___

### gotoxy

▸ **gotoxy**(`x`, `y`): `void`

Move cursor to position

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[core/src/core.ts:400](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L400)

___

### group

▸ **group**(`options`): [`IQGroup`](group.IQGroup.md)

Create or load a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`IGroupOptions`](../interfaces/group.IGroupOptions.md) |

#### Returns

[`IQGroup`](group.IQGroup.md)

#### Defined in

[core/src/core.ts:457](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L457)

___

### groups

▸ **groups**(): [`IQGroupList`](group.IQGroupList.md)

Get group list utilities

#### Returns

[`IQGroupList`](group.IQGroupList.md)

#### Defined in

[core/src/core.ts:464](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L464)

___

### isPauseAborted

▸ **isPauseAborted**(): `boolean`

Check if pause was aborted by user

#### Returns

`boolean`

#### Defined in

[core/src/core.ts:596](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L596)

___

### menu

▸ **menu**(`options`): [`IQMenu`](core_menu.IQMenu.md)

Create a menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQMenuOptions`](../interfaces/core_menu.IQMenuOptions.md) |

#### Returns

[`IQMenu`](core_menu.IQMenu.md)

#### Defined in

[core/src/core.ts:414](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L414)

___

### network

▸ **network**(): [`IQNetwork`](network.IQNetwork.md)

Get network utilities

#### Returns

[`IQNetwork`](network.IQNetwork.md)

#### Defined in

[core/src/core.ts:471](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L471)

___

### pause

▸ **pause**(`optionsOrPrompt?`): `Promise`<`string`\>

Display pause prompt and wait for key

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrPrompt?` | `string` \| [`IQPauseOptions`](../interfaces/core.IQPauseOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/core.ts:335](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L335)

___

### print

▸ **print**(`text`, `pageLength?`): `Promise`<[`IBBSPrintFunctions`](../interfaces/core.IBBSPrintFunctions.md)\>

Print text with automatic pause at page length

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |
| `pageLength?` | `number` |

#### Returns

`Promise`<[`IBBSPrintFunctions`](../interfaces/core.IBBSPrintFunctions.md)\>

#### Defined in

[core/src/core.ts:288](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L288)

___

### printMCI

▸ **printMCI**(`text`, `pageLength?`): `Promise`<[`IBBSPrintFunctions`](../interfaces/core.IBBSPrintFunctions.md)\>

Print text with MCI processing

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `pageLength?` | `number` |

#### Returns

`Promise`<[`IBBSPrintFunctions`](../interfaces/core.IBBSPrintFunctions.md)\>

#### Defined in

[core/src/core.ts:319](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L319)

___

### processMCI

▸ **processMCI**(`text`): `string`

Process MCI codes in text

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/core.ts:188](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L188)

___

### processPendingActions

▸ **processPendingActions**(): `Promise`<`boolean`\>

Process pending MCI actions

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/core.ts:216](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L216)

___

### processSnacks

▸ **processSnacks**(): `void`

Process any queued snacks (draw one, then after duration clear and process next).
Called from menu loop or session tick. No-op if output does not support snacks.
Cursor is restored by showSnack (save/restore) so behavior is correct in any context.

#### Returns

`void`

#### Defined in

[core/src/core.ts:553](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L553)

___

### resetPauseAborted

▸ **resetPauseAborted**(): `void`

Reset pause aborted state

#### Returns

`void`

#### Defined in

[core/src/core.ts:603](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L603)

___

### say

▸ **say**(`text`, `options?`): [`IBBSSayFunctions`](../interfaces/core.IBBSSayFunctions.md)

Display text to the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |
| `options?` | [`IQSayOptions`](../interfaces/core.IQSayOptions.md) |

#### Returns

[`IBBSSayFunctions`](../interfaces/core.IBBSSayFunctions.md)

#### Defined in

[core/src/core.ts:256](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L256)

___

### sayRaw

▸ **sayRaw**(`text`): [`IBBSSayFunctions`](../interfaces/core.IBBSSayFunctions.md)

Display raw text without MCI processing

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |

#### Returns

[`IBBSSayFunctions`](../interfaces/core.IBBSSayFunctions.md)

#### Defined in

[core/src/core.ts:281](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L281)

___

### setLastRenderedMenuArtKey

▸ **setLastRenderedMenuArtKey**(`key`): `void`

Set the art key after drawing menu artwork (so next menu can skip if same).

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[core/src/core.ts:582](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L582)

___

### setMCIContext

▸ **setMCIContext**(`ctx`): `void`

Set MCI context

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Partial`<[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/core.ts:195](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L195)

___

### setMCIVar

▸ **setMCIVar**(`key`, `value`): `void`

Set custom MCI variable

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[core/src/core.ts:202](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L202)

___

### setProgramDirectory

▸ **setProgramDirectory**(`dir`): `void`

Set program directory for asset resolution

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

[core/src/core.ts:537](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L537)

___

### setPromptPosition

▸ **setPromptPosition**(`x`, `y`): `void`

Set the current prompt position (1-based). Called by the menu so the cursor
can be restored to the prompt after a snack is cleared.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[core/src/core.ts:568](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L568)

___

### text

▸ **text**(`content?`): [`IQText`](text.IQText.md)

Create text manipulation instance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `content` | `string` | `""` |

#### Returns

[`IQText`](text.IQText.md)

#### Defined in

[core/src/core.ts:478](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L478)

___

### user

▸ **user**(`options`): [`IQUser`](user.IQUser.md)

Create or load a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/user.IUserOptions.md) |

#### Returns

[`IQUser`](user.IQUser.md)

#### Defined in

[core/src/core.ts:443](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L443)

___

### users

▸ **users**(): [`IQUserList`](user.IQUserList.md)

Get user list utilities

#### Returns

[`IQUserList`](user.IQUserList.md)

#### Defined in

[core/src/core.ts:450](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L450)

___

### wait

▸ **wait**(`ms?`): `Promise`<`void`\>

Wait for specified milliseconds

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ms` | `number` | `100` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/core.ts:393](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/core.ts#L393)
