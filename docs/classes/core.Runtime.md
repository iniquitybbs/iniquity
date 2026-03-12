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

[core/src/core.ts:177](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L177)

## Properties

### data

• **data**: [`IQReactorOptions`](../interfaces/runtime_reactor.IQReactorOptions.md)

#### Defined in

[core/src/core.ts:170](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L170)

## Accessors

### mci

• `get` **mci**(): [`MCIProcessor`](runtime_mci_processor.MCIProcessor.md)

Get the MCI processor

#### Returns

[`MCIProcessor`](runtime_mci_processor.MCIProcessor.md)

#### Defined in

[core/src/core.ts:201](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L201)

___

### terminfo

• `get` **terminfo**(): [`IQTermInfoObject`](../interfaces/core.IQTermInfoObject.md)

Get terminal dimensions

#### Returns

[`IQTermInfoObject`](../interfaces/core.IQTermInfoObject.md)

#### Defined in

[core/src/core.ts:191](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L191)

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

[core/src/core.ts:512](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L512)

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

[core/src/core.ts:448](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L448)

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

[core/src/core.ts:347](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L347)

___

### clearLastRenderedMenuArtKey

▸ **clearLastRenderedMenuArtKey**(): `void`

Clear the last-rendered art key (e.g. after full-screen goodbye so next menu full-redraws).

#### Returns

`void`

#### Defined in

[core/src/core.ts:609](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L609)

___

### config

▸ **config**(): [`IQConfig`](config.IQConfig.md)

Get configuration

#### Returns

[`IQConfig`](config.IQConfig.md)

#### Defined in

[core/src/core.ts:505](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L505)

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

[core/src/core.ts:456](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L456)

___

### disablePause

▸ **disablePause**(): `void`

Disable pause

#### Returns

`void`

#### Defined in

[core/src/core.ts:637](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L637)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the user

#### Returns

`void`

#### Defined in

[core/src/core.ts:427](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L427)

___

### enablePause

▸ **enablePause**(): `void`

Enable pause

#### Returns

`void`

#### Defined in

[core/src/core.ts:630](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L630)

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

[core/src/core.ts:441](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L441)

___

### getLastRenderedMenuArtKey

▸ **getLastRenderedMenuArtKey**(): ``null`` \| `string`

Get the art key of the last menu that drew artwork (used to skip redraw when same art).

#### Returns

``null`` \| `string`

#### Defined in

[core/src/core.ts:595](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L595)

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

[core/src/core.ts:229](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L229)

___

### getOutput

▸ **getOutput**(): [`IQOutput`](../interfaces/core_output.IQOutput.md)

Get current output

#### Returns

[`IQOutput`](../interfaces/core_output.IQOutput.md)

#### Defined in

[core/src/core.ts:184](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L184)

___

### getProgramDirectory

▸ **getProgramDirectory**(): `string`

Get program directory

#### Returns

`string`

#### Defined in

[core/src/core.ts:564](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L564)

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

[core/src/core.ts:420](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L420)

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

[core/src/core.ts:477](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L477)

___

### groups

▸ **groups**(): [`IQGroupList`](group.IQGroupList.md)

Get group list utilities

#### Returns

[`IQGroupList`](group.IQGroupList.md)

#### Defined in

[core/src/core.ts:484](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L484)

___

### isPauseAborted

▸ **isPauseAborted**(): `boolean`

Check if pause was aborted by user

#### Returns

`boolean`

#### Defined in

[core/src/core.ts:616](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L616)

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

[core/src/core.ts:434](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L434)

___

### network

▸ **network**(): [`IQNetwork`](network.IQNetwork.md)

Get network utilities

#### Returns

[`IQNetwork`](network.IQNetwork.md)

#### Defined in

[core/src/core.ts:491](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L491)

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

[core/src/core.ts:355](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L355)

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

[core/src/core.ts:308](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L308)

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

[core/src/core.ts:339](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L339)

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

[core/src/core.ts:208](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L208)

___

### processPendingActions

▸ **processPendingActions**(): `Promise`<`boolean`\>

Process pending MCI actions

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/core.ts:236](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L236)

___

### processSnacks

▸ **processSnacks**(): `void`

Process any queued snacks (draw one, then after duration clear and process next).
Called from menu loop or session tick. No-op if output does not support snacks.
Cursor is restored by showSnack (save/restore) so behavior is correct in any context.

#### Returns

`void`

#### Defined in

[core/src/core.ts:573](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L573)

___

### resetPauseAborted

▸ **resetPauseAborted**(): `void`

Reset pause aborted state

#### Returns

`void`

#### Defined in

[core/src/core.ts:623](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L623)

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

[core/src/core.ts:276](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L276)

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

[core/src/core.ts:301](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L301)

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

[core/src/core.ts:602](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L602)

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

[core/src/core.ts:215](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L215)

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

[core/src/core.ts:222](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L222)

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

[core/src/core.ts:557](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L557)

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

[core/src/core.ts:588](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L588)

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

[core/src/core.ts:498](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L498)

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

[core/src/core.ts:463](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L463)

___

### users

▸ **users**(): [`IQUserList`](user.IQUserList.md)

Get user list utilities

#### Returns

[`IQUserList`](user.IQUserList.md)

#### Defined in

[core/src/core.ts:470](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L470)

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

[core/src/core.ts:413](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/core.ts#L413)
