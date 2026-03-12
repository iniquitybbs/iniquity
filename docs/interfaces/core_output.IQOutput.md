# Interface: IQOutput

[core/output](../modules/core_output.md).IQOutput

IQOutput - Abstract interface for output operations
This allows the core package to be decoupled from the Session implementation

## Table of contents

### Methods

- [clearInputQueue](core_output.IQOutput.md#clearinputqueue)
- [close](core_output.IQOutput.md#close)
- [getClientSuggestsUtf8](core_output.IQOutput.md#getclientsuggestsutf8)
- [getEncoding](core_output.IQOutput.md#getencoding)
- [getHeight](core_output.IQOutput.md#getheight)
- [getLineCount](core_output.IQOutput.md#getlinecount)
- [getMCIProcessor](core_output.IQOutput.md#getmciprocessor)
- [getNextSnack](core_output.IQOutput.md#getnextsnack)
- [getPendingActions](core_output.IQOutput.md#getpendingactions)
- [getWidth](core_output.IQOutput.md#getwidth)
- [hasInput](core_output.IQOutput.md#hasinput)
- [incrementLineCount](core_output.IQOutput.md#incrementlinecount)
- [isPauseAborted](core_output.IQOutput.md#ispauseaborted)
- [isPauseEnabled](core_output.IQOutput.md#ispauseenabled)
- [processMCI](core_output.IQOutput.md#processmci)
- [pushSnack](core_output.IQOutput.md#pushsnack)
- [readKey](core_output.IQOutput.md#readkey)
- [readKeyNonBlocking](core_output.IQOutput.md#readkeynonblocking)
- [readLine](core_output.IQOutput.md#readline)
- [resetLineCount](core_output.IQOutput.md#resetlinecount)
- [setEncoding](core_output.IQOutput.md#setencoding)
- [setMCIContext](core_output.IQOutput.md#setmcicontext)
- [setPauseAborted](core_output.IQOutput.md#setpauseaborted)
- [setPauseEnabled](core_output.IQOutput.md#setpauseenabled)
- [setSyncTermFont](core_output.IQOutput.md#setsynctermfont)
- [setUsername](core_output.IQOutput.md#setusername)
- [supportsFonts](core_output.IQOutput.md#supportsfonts)
- [waitKey](core_output.IQOutput.md#waitkey)
- [write](core_output.IQOutput.md#write)
- [writeMCI](core_output.IQOutput.md#writemci)

## Methods

### clearInputQueue

▸ `Optional` **clearInputQueue**(): `void`

Clear pending input and any partial escape sequence (optional; Session implements it).

#### Returns

`void`

#### Defined in

[core/src/output.ts:75](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L75)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[core/src/output.ts:119](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L119)

___

### getClientSuggestsUtf8

▸ `Optional` **getClientSuggestsUtf8**(): `boolean`

Whether the client suggested UTF-8 (iq term handshake or TERM type); optional for core compatibility

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:116](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L116)

___

### getEncoding

▸ `Optional` **getEncoding**(): ``"utf8"`` \| ``"cp437"``

#### Returns

``"utf8"`` \| ``"cp437"``

#### Defined in

[core/src/output.ts:112](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L112)

___

### getHeight

▸ **getHeight**(): `number`

#### Returns

`number`

#### Defined in

[core/src/output.ts:54](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L54)

___

### getLineCount

▸ **getLineCount**(): `number`

#### Returns

`number`

#### Defined in

[core/src/output.ts:98](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L98)

___

### getMCIProcessor

▸ **getMCIProcessor**(): [`MCIProcessor`](../classes/runtime_mci_processor.MCIProcessor.md)

#### Returns

[`MCIProcessor`](../classes/runtime_mci_processor.MCIProcessor.md)

#### Defined in

[core/src/output.ts:93](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L93)

___

### getNextSnack

▸ `Optional` **getNextSnack**(): ``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

Pop and return the next snack from the session queue (optional; Session implements it).

#### Returns

``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

#### Defined in

[core/src/output.ts:85](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L85)

___

### getPendingActions

▸ **getPendingActions**(): [`ControlCodeAction`](../modules/core_output.md#controlcodeaction)[]

#### Returns

[`ControlCodeAction`](../modules/core_output.md#controlcodeaction)[]

#### Defined in

[core/src/output.ts:105](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L105)

___

### getWidth

▸ **getWidth**(): `number`

#### Returns

`number`

#### Defined in

[core/src/output.ts:53](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L53)

___

### hasInput

▸ **hasInput**(): `boolean`

Check if input is available without blocking

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:70](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L70)

___

### incrementLineCount

▸ **incrementLineCount**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:100](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L100)

___

### isPauseAborted

▸ **isPauseAborted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:101](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L101)

___

### isPauseEnabled

▸ **isPauseEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:103](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L103)

___

### processMCI

▸ **processMCI**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/output.ts:94](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L94)

___

### pushSnack

▸ `Optional` **pushSnack**(`payload`): `void`

Push a snack onto the session queue (optional; Session implements it).

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.corner` | `string` |
| `payload.durationMs` | `number` |
| `payload.message` | `string` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:80](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L80)

___

### readKey

▸ **readKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/output.ts:58](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L58)

___

### readKeyNonBlocking

▸ **readKeyNonBlocking**(): ``null`` \| `string`

Non-blocking key read - returns immediately

#### Returns

``null`` \| `string`

The key pressed, or null if no input available

#### Defined in

[core/src/output.ts:65](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L65)

___

### readLine

▸ **readLine**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/output.ts:59](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L59)

___

### resetLineCount

▸ **resetLineCount**(): `void`

#### Returns

`void`

#### Defined in

[core/src/output.ts:99](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L99)

___

### setEncoding

▸ `Optional` **setEncoding**(`encoding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | ``"utf8"`` \| ``"cp437"`` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:113](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L113)

___

### setMCIContext

▸ **setMCIContext**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `any` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:95](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L95)

___

### setPauseAborted

▸ **setPauseAborted**(`aborted`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aborted` | `boolean` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:102](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L102)

___

### setPauseEnabled

▸ **setPauseEnabled**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:104](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L104)

___

### setSyncTermFont

▸ `Optional` **setSyncTermFont**(`fontName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontName` | `string` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:109](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L109)

___

### setUsername

▸ `Optional` **setUsername**(`handle`): `void`

Set the session username for snack targeting by user (optional; Session implements it).

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:90](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L90)

___

### supportsFonts

▸ `Optional` **supportsFonts**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:108](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L108)

___

### waitKey

▸ **waitKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/output.ts:57](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L57)

___

### write

▸ **write**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:49](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L49)

___

### writeMCI

▸ **writeMCI**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:50](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/output.ts#L50)
