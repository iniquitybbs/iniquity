# Class: PipeCodeProcessor

[runtime/mci/codes/pipe-codes](../modules/runtime_mci_codes_pipe_codes.md).PipeCodeProcessor

## Table of contents

### Constructors

- [constructor](runtime_mci_codes_pipe_codes.PipeCodeProcessor.md#constructor)

### Methods

- [getResetSequence](runtime_mci_codes_pipe_codes.PipeCodeProcessor.md#getresetsequence)
- [process](runtime_mci_codes_pipe_codes.PipeCodeProcessor.md#process)
- [processPipeCode](runtime_mci_codes_pipe_codes.PipeCodeProcessor.md#processpipecode)
- [reset](runtime_mci_codes_pipe_codes.PipeCodeProcessor.md#reset)

## Constructors

### constructor

• **new PipeCodeProcessor**()

## Methods

### getResetSequence

▸ **getResetSequence**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/pipe-codes.ts:158](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/pipe-codes.ts#L158)

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

[core/src/mci/codes/pipe-codes.ts:118](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/pipe-codes.ts#L118)

___

### processPipeCode

▸ **processPipeCode**(`code`): ``null`` \| [`PipeCodeResult`](../interfaces/runtime_mci_codes_pipe_codes.PipeCodeResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

``null`` \| [`PipeCodeResult`](../interfaces/runtime_mci_codes_pipe_codes.PipeCodeResult.md)

#### Defined in

[core/src/mci/codes/pipe-codes.ts:81](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/pipe-codes.ts#L81)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[core/src/mci/codes/pipe-codes.ts:151](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/pipe-codes.ts#L151)
