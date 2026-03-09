# Interface: IQOutput

[core/output](../modules/core_output.md).IQOutput

IQOutput - Abstract interface for output operations
This allows the core package to be decoupled from the Session implementation

## Table of contents

### Methods

- [clearInputQueue](core_output.IQOutput.md#clearinputqueue)
- [close](core_output.IQOutput.md#close)
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

[core/src/output.ts:55](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L55)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[core/src/output.ts:96](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L96)

___

### getEncoding

▸ `Optional` **getEncoding**(): ``"cp437"`` \| ``"utf8"``

#### Returns

``"cp437"`` \| ``"utf8"``

#### Defined in

[core/src/output.ts:92](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L92)

___

### getHeight

▸ **getHeight**(): `number`

#### Returns

`number`

#### Defined in

[core/src/output.ts:34](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L34)

___

### getLineCount

▸ **getLineCount**(): `number`

#### Returns

`number`

#### Defined in

[core/src/output.ts:78](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L78)

___

### getMCIProcessor

▸ **getMCIProcessor**(): [`MCIProcessor`](../classes/runtime_mci_processor.MCIProcessor.md)

#### Returns

[`MCIProcessor`](../classes/runtime_mci_processor.MCIProcessor.md)

#### Defined in

[core/src/output.ts:73](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L73)

___

### getNextSnack

▸ `Optional` **getNextSnack**(): ``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

Pop and return the next snack from the session queue (optional; Session implements it).

#### Returns

``null`` \| { `corner`: `string` ; `durationMs`: `number` ; `message`: `string`  }

#### Defined in

[core/src/output.ts:65](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L65)

___

### getPendingActions

▸ **getPendingActions**(): [`ControlCodeAction`](../modules/core_output.md#controlcodeaction)[]

#### Returns

[`ControlCodeAction`](../modules/core_output.md#controlcodeaction)[]

#### Defined in

[core/src/output.ts:85](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L85)

___

### getWidth

▸ **getWidth**(): `number`

#### Returns

`number`

#### Defined in

[core/src/output.ts:33](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L33)

___

### hasInput

▸ **hasInput**(): `boolean`

Check if input is available without blocking

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:50](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L50)

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

[core/src/output.ts:80](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L80)

___

### isPauseAborted

▸ **isPauseAborted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:81](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L81)

___

### isPauseEnabled

▸ **isPauseEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:83](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L83)

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

[core/src/output.ts:74](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L74)

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

[core/src/output.ts:60](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L60)

___

### readKey

▸ **readKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/output.ts:38](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L38)

___

### readKeyNonBlocking

▸ **readKeyNonBlocking**(): ``null`` \| `string`

Non-blocking key read - returns immediately

#### Returns

``null`` \| `string`

The key pressed, or null if no input available

#### Defined in

[core/src/output.ts:45](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L45)

___

### readLine

▸ **readLine**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/output.ts:39](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L39)

___

### resetLineCount

▸ **resetLineCount**(): `void`

#### Returns

`void`

#### Defined in

[core/src/output.ts:79](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L79)

___

### setEncoding

▸ `Optional` **setEncoding**(`encoding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | ``"cp437"`` \| ``"utf8"`` |

#### Returns

`void`

#### Defined in

[core/src/output.ts:93](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L93)

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

[core/src/output.ts:75](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L75)

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

[core/src/output.ts:82](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L82)

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

[core/src/output.ts:84](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L84)

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

[core/src/output.ts:89](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L89)

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

[core/src/output.ts:70](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L70)

___

### supportsFonts

▸ `Optional` **supportsFonts**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/output.ts:88](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L88)

___

### waitKey

▸ **waitKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/output.ts:37](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L37)

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

[core/src/output.ts:29](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L29)

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

[core/src/output.ts:30](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/output.ts#L30)
