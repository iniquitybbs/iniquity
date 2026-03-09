# Class: IQFrame

[core/frame](../modules/core_frame.md).IQFrame

IQFrame - Windowed content area

## Table of contents

### Constructors

- [constructor](core_frame.IQFrame.md#constructor)

### Methods

- [blank](core_frame.IQFrame.md#blank)
- [center](core_frame.IQFrame.md#center)
- [clear](core_frame.IQFrame.md#clear)
- [close](core_frame.IQFrame.md#close)
- [cycle](core_frame.IQFrame.md#cycle)
- [draw](core_frame.IQFrame.md#draw)
- [getContentArea](core_frame.IQFrame.md#getcontentarea)
- [gotoxy](core_frame.IQFrame.md#gotoxy)
- [input](core_frame.IQFrame.md#input)
- [inputPassword](core_frame.IQFrame.md#inputpassword)
- [open](core_frame.IQFrame.md#open)
- [popup](core_frame.IQFrame.md#popup)
- [say](core_frame.IQFrame.md#say)
- [sayMCI](core_frame.IQFrame.md#saymci)
- [separator](core_frame.IQFrame.md#separator)
- [waitKey](core_frame.IQFrame.md#waitkey)

## Constructors

### constructor

• **new IQFrame**(`options`, `output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQFrameOptions`](../interfaces/core_frame.IQFrameOptions.md) |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |

#### Defined in

[core/src/frame.ts:134](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L134)

## Methods

### blank

▸ **blank**(): [`IQFrame`](core_frame.IQFrame.md)

Add a blank line

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/frame.ts:317](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L317)

___

### center

▸ **center**(`text`): [`IQFrame`](core_frame.IQFrame.md)

Center text within the frame

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/frame.ts:307](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L307)

___

### clear

▸ **clear**(): [`IQFrame`](core_frame.IQFrame.md)

Clear the frame content (but keep frame open)

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/frame.ts:348](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L348)

___

### close

▸ **close**(): `void`

Close the frame and restore the background
If screen buffer management is active, redraws the saved region

#### Returns

`void`

#### Defined in

[core/src/frame.ts:225](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L225)

___

### cycle

▸ **cycle**(): `void`

Cycle through content (for animation effects)

#### Returns

`void`

#### Defined in

[core/src/frame.ts:334](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L334)

___

### draw

▸ **draw**(): `void`

Draw the buffered content inside the frame

#### Returns

`void`

#### Defined in

[core/src/frame.ts:264](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L264)

___

### getContentArea

▸ **getContentArea**(): `Object`

Get the interior content area dimensions

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[core/src/frame.ts:365](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L365)

___

### gotoxy

▸ **gotoxy**(`relX`, `relY`): [`IQFrame`](core_frame.IQFrame.md)

Position cursor inside the frame at relative coordinates

#### Parameters

| Name | Type |
| :------ | :------ |
| `relX` | `number` |
| `relY` | `number` |

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/frame.ts:377](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L377)

___

### input

▸ **input**(`prompt?`, `maxLength?`): `Promise`<`string`\>

Get text input within the frame at current content position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prompt?` | `string` | Optional prompt text to display before input |
| `maxLength?` | `number` | Maximum input length (defaults to content width) |

#### Returns

`Promise`<`string`\>

The user's input

#### Defined in

[core/src/frame.ts:407](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L407)

___

### inputPassword

▸ **inputPassword**(`prompt?`, `maxLength?`): `Promise`<`string`\>

Get password input (masked with asterisks)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prompt?` | `string` | Optional prompt text |
| `maxLength?` | `number` | Maximum input length |

#### Returns

`Promise`<`string`\>

The user's input

#### Defined in

[core/src/frame.ts:468](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L468)

___

### open

▸ **open**(): `void`

Open the frame (draw border)
Automatically saves the background region if screen buffer is available

#### Returns

`void`

#### Defined in

[core/src/frame.ts:153](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L153)

___

### popup

▸ **popup**(): `Promise`<`string`\>

Show a popup message and wait for key press
Convenience method for quick modal dialogs

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/frame.ts:393](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L393)

___

### say

▸ **say**(`text`): [`IQFrame`](core_frame.IQFrame.md)

Add content to the frame buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/frame.ts:247](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L247)

___

### sayMCI

▸ **sayMCI**(`text`): [`IQFrame`](core_frame.IQFrame.md)

Add content with MCI processing

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/frame.ts:256](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L256)

___

### separator

▸ **separator**(`char?`, `color?`): [`IQFrame`](core_frame.IQFrame.md)

Add a horizontal separator line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `char` | `string` | `"\xC4"` |
| `color?` | `string` | `undefined` |

#### Returns

[`IQFrame`](core_frame.IQFrame.md)

#### Defined in

[core/src/frame.ts:324](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L324)

___

### waitKey

▸ **waitKey**(): `Promise`<`string`\>

Wait for a key press (convenience method)

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/frame.ts:385](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/frame.ts#L385)
