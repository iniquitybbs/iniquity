# Class: ControlCodeProcessor

[runtime/mci/codes/ctrl-codes](../modules/runtime_mci_codes_ctrl_codes.md).ControlCodeProcessor

## Table of contents

### Constructors

- [constructor](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#constructor)

### Methods

- [getAction](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#getaction)
- [getLineCount](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#getlinecount)
- [getPageLength](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#getpagelength)
- [incrementLineCount](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#incrementlinecount)
- [isPauseEnabled](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#ispauseenabled)
- [listCodes](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#listcodes)
- [processCode](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#processcode)
- [processGotoxy](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#processgotoxy)
- [processParameterizedCode](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#processparameterizedcode)
- [resetLineCount](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#resetlinecount)
- [setPageLength](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#setpagelength)
- [setPauseEnabled](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#setpauseenabled)
- [shouldAutoPause](runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md#shouldautopause)

## Constructors

### constructor

• **new ControlCodeProcessor**()

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:82](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L82)

## Methods

### getAction

▸ **getAction**(`code`): ``null`` \| [`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

``null`` \| [`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:97](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L97)

___

### getLineCount

▸ **getLineCount**(): `number`

#### Returns

`number`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:162](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L162)

___

### getPageLength

▸ **getPageLength**(): `number`

#### Returns

`number`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:182](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L182)

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

[core/src/mci/codes/ctrl-codes.ts:166](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L166)

___

### isPauseEnabled

▸ **isPauseEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:154](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L154)

___

### listCodes

▸ **listCodes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:186](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L186)

___

### processCode

▸ **processCode**(`code`): ``null`` \| [`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

``null`` \| [`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:102](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L102)

___

### processGotoxy

▸ **processGotoxy**(`x`, `y`): [`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:150](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L150)

___

### processParameterizedCode

▸ **processParameterizedCode**(`code`, `param`): ``null`` \| [`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `param` | `string` |

#### Returns

``null`` \| [`ControlCodeAction`](../modules/runtime_mci_codes_ctrl_codes.md#controlcodeaction)

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:121](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L121)

___

### resetLineCount

▸ **resetLineCount**(): `void`

#### Returns

`void`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:170](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L170)

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

[core/src/mci/codes/ctrl-codes.ts:178](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L178)

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

[core/src/mci/codes/ctrl-codes.ts:158](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L158)

___

### shouldAutoPause

▸ **shouldAutoPause**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:174](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/mci/codes/ctrl-codes.ts#L174)
