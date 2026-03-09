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

[cli/src/lib/session.ts:103](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L103)

## Properties

### connectedAt

• **connectedAt**: `Date`

Connection timestamp

#### Defined in

[cli/src/lib/session.ts:86](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L86)

___

### info

• **info**: [`SessionInfo`](../interfaces/lib_session.SessionInfo.md)

#### Defined in

[cli/src/lib/session.ts:88](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L88)

___

### nodeNumber

• **nodeNumber**: `number` = `0`

Node number assigned by the server

#### Defined in

[cli/src/lib/session.ts:80](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L80)

___

### username

• **username**: `undefined` \| `string` = `undefined`

Username when logged in (set by BBS layer for snack target by user)

#### Defined in

[cli/src/lib/session.ts:83](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L83)

___

### MOUSE\_PREFIX

▪ `Static` `Readonly` **MOUSE\_PREFIX**: ``"\u0000MOUSE:"``

Sentinel for mouse events in the queue (followed by "x:y")

#### Defined in

[cli/src/lib/session.ts:77](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L77)

## Methods

### clearInputQueue

▸ **clearInputQueue**(): `void`

Clear the pending input queue

#### Returns

`void`

#### Implementation of

IQOutput.clearInputQueue

#### Defined in

[cli/src/lib/session.ts:597](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L597)

___

### close

▸ **close**(): `void`

Close the session

#### Returns

`void`

#### Implementation of

IQOutput.close

#### Defined in

[cli/src/lib/session.ts:617](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L617)

___

### getEncoding

▸ **getEncoding**(): ``"utf8"`` \| ``"cp437"``

Get terminal encoding preference (set at connect)

#### Returns

``"utf8"`` \| ``"cp437"``

#### Implementation of

IQOutput.getEncoding

#### Defined in

[cli/src/lib/session.ts:349](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L349)

___

### getHeight

▸ **getHeight**(): `number`

Get terminal height

#### Returns

`number`

#### Implementation of

IQOutput.getHeight

#### Defined in

[cli/src/lib/session.ts:525](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L525)

___

### getLineCount

▸ **getLineCount**(): `number`

Get current line count (for auto-pause)

#### Returns

`number`

#### Implementation of

IQOutput.getLineCount

#### Defined in

[cli/src/lib/session.ts:469](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L469)

___

### getMCIProcessor

▸ **getMCIProcessor**(): `MCIProcessor`

Get the MCI processor instance

#### Returns

`MCIProcessor`

#### Implementation of

IQOutput.getMCIProcessor

#### Defined in

[cli/src/lib/session.ts:394](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L394)

___

### getNextSnack

▸ **getNextSnack**(): ``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

#### Returns

``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

#### Implementation of

IQOutput.getNextSnack

#### Defined in

[cli/src/lib/session.ts:606](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L606)

___

### getPendingActions

▸ **getPendingActions**(): `ControlCodeAction`[]

Get pending actions from MCI processing

#### Returns

`ControlCodeAction`[]

#### Implementation of

IQOutput.getPendingActions

#### Defined in

[cli/src/lib/session.ts:378](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L378)

___

### getWidth

▸ **getWidth**(): `number`

Get terminal width

#### Returns

`number`

#### Implementation of

IQOutput.getWidth

#### Defined in

[cli/src/lib/session.ts:518](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L518)

___

### hasInput

▸ **hasInput**(): `boolean`

Check if input is available without blocking

#### Returns

`boolean`

#### Implementation of

IQOutput.hasInput

#### Defined in

[cli/src/lib/session.ts:590](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L590)

___

### hasPendingActions

▸ **hasPendingActions**(): `boolean`

Check if there are pending actions

#### Returns

`boolean`

#### Defined in

[cli/src/lib/session.ts:387](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L387)

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

[cli/src/lib/session.ts:483](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L483)

___

### isPauseAborted

▸ **isPauseAborted**(): `boolean`

Check if pause was aborted

#### Returns

`boolean`

#### Implementation of

IQOutput.isPauseAborted

#### Defined in

[cli/src/lib/session.ts:490](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L490)

___

### isPauseEnabled

▸ **isPauseEnabled**(): `boolean`

Check if pause is enabled

#### Returns

`boolean`

#### Implementation of

IQOutput.isPauseEnabled

#### Defined in

[cli/src/lib/session.ts:504](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L504)

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

[cli/src/lib/session.ts:408](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L408)

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

[cli/src/lib/session.ts:602](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L602)

___

### readKey

▸ **readKey**(): `Promise`<`string`\>

Read a single key press (returns the character)

#### Returns

`Promise`<`string`\>

#### Implementation of

IQOutput.readKey

#### Defined in

[cli/src/lib/session.ts:459](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L459)

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

[cli/src/lib/session.ts:580](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L580)

___

### readLine

▸ **readLine**(): `Promise`<`string`\>

Read a line of input from the user

#### Returns

`Promise`<`string`\>

#### Implementation of

IQOutput.readLine

#### Defined in

[cli/src/lib/session.ts:415](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L415)

___

### resetLineCount

▸ **resetLineCount**(): `void`

Reset line count (after pause)

#### Returns

`void`

#### Implementation of

IQOutput.resetLineCount

#### Defined in

[cli/src/lib/session.ts:476](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L476)

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

[cli/src/lib/session.ts:555](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L555)

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

[cli/src/lib/session.ts:546](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L546)

___

### setEncoding

▸ **setEncoding**(`encoding`): `void`

Set terminal encoding; updates MCI context for @CHARSET@ etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | ``"utf8"`` \| ``"cp437"`` |

#### Returns

`void`

#### Implementation of

IQOutput.setEncoding

#### Defined in

[cli/src/lib/session.ts:356](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L356)

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

[cli/src/lib/session.ts:401](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L401)

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

[cli/src/lib/session.ts:497](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L497)

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

[cli/src/lib/session.ts:511](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L511)

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

[cli/src/lib/session.ts:532](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L532)

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

[cli/src/lib/session.ts:452](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L452)

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

[cli/src/lib/session.ts:610](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L610)

___

### supportsFonts

▸ **supportsFonts**(): `boolean`

Check if client supports font switching

#### Returns

`boolean`

#### Implementation of

IQOutput.supportsFonts

#### Defined in

[cli/src/lib/session.ts:572](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L572)

___

### supportsIceColors

▸ **supportsIceColors**(): `boolean`

Check if client supports iCE colors

#### Returns

`boolean`

#### Defined in

[cli/src/lib/session.ts:565](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L565)

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

[cli/src/lib/session.ts:426](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L426)

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

[cli/src/lib/session.ts:338](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L338)

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

[cli/src/lib/session.ts:365](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/session.ts#L365)
