# Class: Session

[lib/session](../modules/lib_session.md).Session

Session class implements IQOutput interface for use with core Runtime

## Implements

- `IQOutput`

## Table of contents

### Constructors

- [constructor](lib_session.Session.md#constructor)

### Properties

- [connectedAt](lib_session.Session.md#connectedat)
- [info](lib_session.Session.md#info)
- [nodeNumber](lib_session.Session.md#nodenumber)
- [username](lib_session.Session.md#username)
- [MOUSE\_PREFIX](lib_session.Session.md#mouse_prefix)

### Methods

- [clearInputQueue](lib_session.Session.md#clearinputqueue)
- [close](lib_session.Session.md#close)
- [getEncoding](lib_session.Session.md#getencoding)
- [getHeight](lib_session.Session.md#getheight)
- [getLineCount](lib_session.Session.md#getlinecount)
- [getMCIProcessor](lib_session.Session.md#getmciprocessor)
- [getNextSnack](lib_session.Session.md#getnextsnack)
- [getPendingActions](lib_session.Session.md#getpendingactions)
- [getWidth](lib_session.Session.md#getwidth)
- [hasInput](lib_session.Session.md#hasinput)
- [hasPendingActions](lib_session.Session.md#haspendingactions)
- [incrementLineCount](lib_session.Session.md#incrementlinecount)
- [isPauseAborted](lib_session.Session.md#ispauseaborted)
- [isPauseEnabled](lib_session.Session.md#ispauseenabled)
- [processMCI](lib_session.Session.md#processmci)
- [pushSnack](lib_session.Session.md#pushsnack)
- [readKey](lib_session.Session.md#readkey)
- [readKeyNonBlocking](lib_session.Session.md#readkeynonblocking)
- [readLine](lib_session.Session.md#readline)
- [resetLineCount](lib_session.Session.md#resetlinecount)
- [setCursorStyle](lib_session.Session.md#setcursorstyle)
- [setEmulatedBaudRate](lib_session.Session.md#setemulatedbaudrate)
- [setEncoding](lib_session.Session.md#setencoding)
- [setMCIContext](lib_session.Session.md#setmcicontext)
- [setPauseAborted](lib_session.Session.md#setpauseaborted)
- [setPauseEnabled](lib_session.Session.md#setpauseenabled)
- [setSyncTermFont](lib_session.Session.md#setsynctermfont)
- [setTickCallback](lib_session.Session.md#settickcallback)
- [setUsername](lib_session.Session.md#setusername)
- [supportsFonts](lib_session.Session.md#supportsfonts)
- [supportsIceColors](lib_session.Session.md#supportsicecolors)
- [waitKey](lib_session.Session.md#waitkey)
- [write](lib_session.Session.md#write)
- [writeMCI](lib_session.Session.md#writemci)

## Constructors

### constructor

• **new Session**(`socket`, `mciOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |
| `mciOptions?` | `MCIProcessorOptions` |

#### Defined in

[iniquity/src/lib/session.ts:83](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L83)

## Properties

### connectedAt

• **connectedAt**: `Date`

Connection timestamp

#### Defined in

[iniquity/src/lib/session.ts:66](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L66)

___

### info

• **info**: [`SessionInfo`](../interfaces/lib_session.SessionInfo.md)

#### Defined in

[iniquity/src/lib/session.ts:68](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L68)

___

### nodeNumber

• **nodeNumber**: `number` = `0`

Node number assigned by the server

#### Defined in

[iniquity/src/lib/session.ts:60](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L60)

___

### username

• **username**: `undefined` \| `string` = `undefined`

Username when logged in (set by BBS layer for snack target by user)

#### Defined in

[iniquity/src/lib/session.ts:63](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L63)

___

### MOUSE\_PREFIX

▪ `Static` `Readonly` **MOUSE\_PREFIX**: ``"\u0000MOUSE:"``

Sentinel for mouse events in the queue (followed by "x:y")

#### Defined in

[iniquity/src/lib/session.ts:57](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L57)

## Methods

### clearInputQueue

▸ **clearInputQueue**(): `void`

Clear the pending input queue

#### Returns

`void`

#### Implementation of

IQOutput.clearInputQueue

#### Defined in

[iniquity/src/lib/session.ts:564](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L564)

___

### close

▸ **close**(): `void`

Close the session

#### Returns

`void`

#### Implementation of

IQOutput.close

#### Defined in

[iniquity/src/lib/session.ts:584](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L584)

___

### getEncoding

▸ **getEncoding**(): ``"cp437"`` \| ``"utf8"``

Get terminal encoding preference (set at connect)

#### Returns

``"cp437"`` \| ``"utf8"``

#### Implementation of

IQOutput.getEncoding

#### Defined in

[iniquity/src/lib/session.ts:316](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L316)

___

### getHeight

▸ **getHeight**(): `number`

Get terminal height

#### Returns

`number`

#### Implementation of

IQOutput.getHeight

#### Defined in

[iniquity/src/lib/session.ts:492](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L492)

___

### getLineCount

▸ **getLineCount**(): `number`

Get current line count (for auto-pause)

#### Returns

`number`

#### Implementation of

IQOutput.getLineCount

#### Defined in

[iniquity/src/lib/session.ts:436](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L436)

___

### getMCIProcessor

▸ **getMCIProcessor**(): `MCIProcessor`

Get the MCI processor instance

#### Returns

`MCIProcessor`

#### Implementation of

IQOutput.getMCIProcessor

#### Defined in

[iniquity/src/lib/session.ts:361](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L361)

___

### getNextSnack

▸ **getNextSnack**(): ``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

#### Returns

``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

#### Implementation of

IQOutput.getNextSnack

#### Defined in

[iniquity/src/lib/session.ts:573](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L573)

___

### getPendingActions

▸ **getPendingActions**(): `ControlCodeAction`[]

Get pending actions from MCI processing

#### Returns

`ControlCodeAction`[]

#### Implementation of

IQOutput.getPendingActions

#### Defined in

[iniquity/src/lib/session.ts:345](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L345)

___

### getWidth

▸ **getWidth**(): `number`

Get terminal width

#### Returns

`number`

#### Implementation of

IQOutput.getWidth

#### Defined in

[iniquity/src/lib/session.ts:485](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L485)

___

### hasInput

▸ **hasInput**(): `boolean`

Check if input is available without blocking

#### Returns

`boolean`

#### Implementation of

IQOutput.hasInput

#### Defined in

[iniquity/src/lib/session.ts:557](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L557)

___

### hasPendingActions

▸ **hasPendingActions**(): `boolean`

Check if there are pending actions

#### Returns

`boolean`

#### Defined in

[iniquity/src/lib/session.ts:354](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L354)

___

### incrementLineCount

▸ **incrementLineCount**(`count?`): `void`

Increment line count

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `1` |

#### Returns

`void`

#### Implementation of

IQOutput.incrementLineCount

#### Defined in

[iniquity/src/lib/session.ts:450](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L450)

___

### isPauseAborted

▸ **isPauseAborted**(): `boolean`

Check if pause was aborted

#### Returns

`boolean`

#### Implementation of

IQOutput.isPauseAborted

#### Defined in

[iniquity/src/lib/session.ts:457](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L457)

___

### isPauseEnabled

▸ **isPauseEnabled**(): `boolean`

Check if pause is enabled

#### Returns

`boolean`

#### Implementation of

IQOutput.isPauseEnabled

#### Defined in

[iniquity/src/lib/session.ts:471](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L471)

___

### processMCI

▸ **processMCI**(`text`): `string`

Process MCI codes in text without writing

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Implementation of

IQOutput.processMCI

#### Defined in

[iniquity/src/lib/session.ts:375](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L375)

___

### pushSnack

▸ **pushSnack**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.corner` | `string` |
| `payload.durationMs` | `number` |
| `payload.message` | `string` |

#### Returns

`void`

#### Implementation of

IQOutput.pushSnack

#### Defined in

[iniquity/src/lib/session.ts:569](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L569)

___

### readKey

▸ **readKey**(): `Promise`<`string`\>

Read a single key press (returns the character)

#### Returns

`Promise`<`string`\>

#### Implementation of

IQOutput.readKey

#### Defined in

[iniquity/src/lib/session.ts:426](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L426)

___

### readKeyNonBlocking

▸ **readKeyNonBlocking**(): ``null`` \| `string`

Non-blocking key read - returns immediately

#### Returns

``null`` \| `string`

The key pressed, or null if no input available

#### Implementation of

IQOutput.readKeyNonBlocking

#### Defined in

[iniquity/src/lib/session.ts:547](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L547)

___

### readLine

▸ **readLine**(): `Promise`<`string`\>

Read a line of input from the user

#### Returns

`Promise`<`string`\>

#### Implementation of

IQOutput.readLine

#### Defined in

[iniquity/src/lib/session.ts:382](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L382)

___

### resetLineCount

▸ **resetLineCount**(): `void`

Reset line count (after pause)

#### Returns

`void`

#### Implementation of

IQOutput.resetLineCount

#### Defined in

[iniquity/src/lib/session.ts:443](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L443)

___

### setCursorStyle

▸ **setCursorStyle**(`style`): `void`

Set cursor style (if supported)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `string` |

#### Returns

`void`

#### Defined in

[iniquity/src/lib/session.ts:522](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L522)

___

### setEmulatedBaudRate

▸ **setEmulatedBaudRate**(`rate`): `void`

Set emulated baud rate (if supported)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[iniquity/src/lib/session.ts:513](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L513)

___

### setEncoding

▸ **setEncoding**(`encoding`): `void`

Set terminal encoding; updates MCI context for @CHARSET@ etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | ``"cp437"`` \| ``"utf8"`` |

#### Returns

`void`

#### Implementation of

IQOutput.setEncoding

#### Defined in

[iniquity/src/lib/session.ts:323](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L323)

___

### setMCIContext

▸ **setMCIContext**(`ctx`): `void`

Set MCI context

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Partial`<`MCIContext`\> |

#### Returns

`void`

#### Implementation of

IQOutput.setMCIContext

#### Defined in

[iniquity/src/lib/session.ts:368](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L368)

___

### setPauseAborted

▸ **setPauseAborted**(`aborted`): `void`

Set pause aborted state

#### Parameters

| Name | Type |
| :------ | :------ |
| `aborted` | `boolean` |

#### Returns

`void`

#### Implementation of

IQOutput.setPauseAborted

#### Defined in

[iniquity/src/lib/session.ts:464](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L464)

___

### setPauseEnabled

▸ **setPauseEnabled**(`enabled`): `void`

Enable/disable pause

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

IQOutput.setPauseEnabled

#### Defined in

[iniquity/src/lib/session.ts:478](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L478)

___

### setSyncTermFont

▸ **setSyncTermFont**(`fontNameOrAlias`, `page?`): `boolean`

Set SyncTERM font (if supported)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fontNameOrAlias` | `string` | `undefined` |
| `page` | `number` | `0` |

#### Returns

`boolean`

#### Implementation of

IQOutput.setSyncTermFont

#### Defined in

[iniquity/src/lib/session.ts:499](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L499)

___

### setTickCallback

▸ **setTickCallback**(`cb`): `void`

Set the callback run every 10ms while waitKey() is active (e.g. processQueue + processSnacks).
Used so snacks and events are processed when waiting in popup/pause/choice etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[iniquity/src/lib/session.ts:419](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L419)

___

### setUsername

▸ **setUsername**(`handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `undefined` \| `string` |

#### Returns

`void`

#### Implementation of

IQOutput.setUsername

#### Defined in

[iniquity/src/lib/session.ts:577](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L577)

___

### supportsFonts

▸ **supportsFonts**(): `boolean`

Check if client supports font switching

#### Returns

`boolean`

#### Implementation of

IQOutput.supportsFonts

#### Defined in

[iniquity/src/lib/session.ts:539](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L539)

___

### supportsIceColors

▸ **supportsIceColors**(): `boolean`

Check if client supports iCE colors

#### Returns

`boolean`

#### Defined in

[iniquity/src/lib/session.ts:532](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L532)

___

### waitKey

▸ **waitKey**(): `Promise`<`string`\>

Wait for any key press (does not echo).
While waiting, if a tick callback is set, runs it every 10ms (serialized, no overlap).

#### Returns

`Promise`<`string`\>

#### Implementation of

IQOutput.waitKey

#### Defined in

[iniquity/src/lib/session.ts:393](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L393)

___

### write

▸ **write**(`data`): `void`

Write data to socket (converts to UTF-8 when session encoding is utf8)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Implementation of

IQOutput.write

#### Defined in

[iniquity/src/lib/session.ts:305](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L305)

___

### writeMCI

▸ **writeMCI**(`data`): `void`

Write with MCI processing enabled (respects session encoding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Implementation of

IQOutput.writeMCI

#### Defined in

[iniquity/src/lib/session.ts:332](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/session.ts#L332)
