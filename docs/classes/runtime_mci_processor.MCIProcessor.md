# Class: MCIProcessor

[runtime/mci/processor](../modules/runtime_mci_processor.md).MCIProcessor

## Table of contents

### Constructors

- [constructor](runtime_mci_processor.MCIProcessor.md#constructor)

### Methods

- [applyTextStyle](runtime_mci_processor.MCIProcessor.md#applytextstyle)
- [clearAllPositions](runtime_mci_processor.MCIProcessor.md#clearallpositions)
- [clearPosition](runtime_mci_processor.MCIProcessor.md#clearposition)
- [getContext](runtime_mci_processor.MCIProcessor.md#getcontext)
- [getCustom](runtime_mci_processor.MCIProcessor.md#getcustom)
- [getLineCount](runtime_mci_processor.MCIProcessor.md#getlinecount)
- [getResetSequence](runtime_mci_processor.MCIProcessor.md#getresetsequence)
- [gotoPosition](runtime_mci_processor.MCIProcessor.md#gotoposition)
- [hasPosition](runtime_mci_processor.MCIProcessor.md#hasposition)
- [incrementLineCount](runtime_mci_processor.MCIProcessor.md#incrementlinecount)
- [isPauseEnabled](runtime_mci_processor.MCIProcessor.md#ispauseenabled)
- [listPositions](runtime_mci_processor.MCIProcessor.md#listpositions)
- [process](runtime_mci_processor.MCIProcessor.md#process)
- [processWithDetails](runtime_mci_processor.MCIProcessor.md#processwithdetails)
- [registerAtCode](runtime_mci_processor.MCIProcessor.md#registeratcode)
- [registerTextStyle](runtime_mci_processor.MCIProcessor.md#registertextstyle)
- [reset](runtime_mci_processor.MCIProcessor.md#reset)
- [resetLineCount](runtime_mci_processor.MCIProcessor.md#resetlinecount)
- [savePosition](runtime_mci_processor.MCIProcessor.md#saveposition)
- [setBBS](runtime_mci_processor.MCIProcessor.md#setbbs)
- [setContext](runtime_mci_processor.MCIProcessor.md#setcontext)
- [setCurrentPosition](runtime_mci_processor.MCIProcessor.md#setcurrentposition)
- [setCustom](runtime_mci_processor.MCIProcessor.md#setcustom)
- [setPageLength](runtime_mci_processor.MCIProcessor.md#setpagelength)
- [setPauseEnabled](runtime_mci_processor.MCIProcessor.md#setpauseenabled)
- [setSystem](runtime_mci_processor.MCIProcessor.md#setsystem)
- [setTerminal](runtime_mci_processor.MCIProcessor.md#setterminal)
- [setUser](runtime_mci_processor.MCIProcessor.md#setuser)
- [shouldAutoPause](runtime_mci_processor.MCIProcessor.md#shouldautopause)
- [updatePosition](runtime_mci_processor.MCIProcessor.md#updateposition)

## Constructors

### constructor

• **new MCIProcessor**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MCIProcessorOptions`](../interfaces/runtime_mci_processor.MCIProcessorOptions.md) |

#### Defined in

[core/src/mci/processor.ts:58](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L58)

## Methods

### applyTextStyle

▸ **applyTextStyle**(`text`, `styleName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleName` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/processor.ts:307](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L307)

___

### clearAllPositions

▸ **clearAllPositions**(): `void`

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:295](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L295)

___

### clearPosition

▸ **clearPosition**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/mci/processor.ts:291](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L291)

___

### getContext

▸ **getContext**(): [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

#### Returns

[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

#### Defined in

[core/src/mci/processor.ts:236](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L236)

___

### getCustom

▸ **getCustom**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[core/src/mci/processor.ts:271](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L271)

___

### getLineCount

▸ **getLineCount**(): `number`

#### Returns

`number`

#### Defined in

[core/src/mci/processor.ts:327](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L327)

___

### getResetSequence

▸ **getResetSequence**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/processor.ts:354](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L354)

___

### gotoPosition

▸ **gotoPosition**(`id`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

[core/src/mci/processor.ts:279](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L279)

___

### hasPosition

▸ **hasPosition**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/mci/processor.ts:287](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L287)

___

### incrementLineCount

▸ **incrementLineCount**(`lines?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lines` | `number` | `1` |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:331](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L331)

___

### isPauseEnabled

▸ **isPauseEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/mci/processor.ts:319](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L319)

___

### listPositions

▸ **listPositions**(): `number`[]

#### Returns

`number`[]

#### Defined in

[core/src/mci/processor.ts:299](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L299)

___

### process

▸ **process**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/processor.ts:85](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L85)

___

### processWithDetails

▸ **processWithDetails**(`text`): [`MCIProcessResult`](../interfaces/runtime_mci_processor.MCIProcessResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`MCIProcessResult`](../interfaces/runtime_mci_processor.MCIProcessResult.md)

#### Defined in

[core/src/mci/processor.ts:90](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L90)

___

### registerAtCode

▸ **registerAtCode**(`code`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `handler` | (`context`: [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md), `params?`: `string`) => `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:315](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L315)

___

### registerTextStyle

▸ **registerTextStyle**(`name`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | (`text`: `string`) => `string` |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:311](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L311)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:347](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L347)

___

### resetLineCount

▸ **resetLineCount**(): `void`

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:335](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L335)

___

### savePosition

▸ **savePosition**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:275](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L275)

___

### setBBS

▸ **setBBS**(`bbs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bbs` | `Partial`<[`BBSContext`](../interfaces/runtime_mci_context.BBSContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:252](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L252)

___

### setContext

▸ **setContext**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Partial`<[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:232](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L232)

___

### setCurrentPosition

▸ **setCurrentPosition**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:303](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L303)

___

### setCustom

▸ **setCustom**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:267](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L267)

___

### setPageLength

▸ **setPageLength**(`length`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:343](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L343)

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

[core/src/mci/processor.ts:323](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L323)

___

### setSystem

▸ **setSystem**(`system`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `system` | `Partial`<[`SystemContext`](../interfaces/runtime_mci_context.SystemContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:246](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L246)

___

### setTerminal

▸ **setTerminal**(`terminal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `terminal` | `Partial`<[`TerminalContext`](../interfaces/runtime_mci_context.TerminalContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:258](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L258)

___

### setUser

▸ **setUser**(`user`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `Partial`<[`UserContext`](../interfaces/runtime_mci_context.UserContext.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/processor.ts:240](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L240)

___

### shouldAutoPause

▸ **shouldAutoPause**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/mci/processor.ts:339](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L339)

___

### updatePosition

▸ **updatePosition**(`id`, `text`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `text` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[core/src/mci/processor.ts:283](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/processor.ts#L283)
