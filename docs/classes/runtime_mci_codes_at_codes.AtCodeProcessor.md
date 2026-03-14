# Class: AtCodeProcessor

[runtime/mci/codes/at-codes](../modules/runtime_mci_codes_at_codes.md).AtCodeProcessor

## Table of contents

### Constructors

- [constructor](runtime_mci_codes_at_codes.AtCodeProcessor.md#constructor)

### Methods

- [getHandler](runtime_mci_codes_at_codes.AtCodeProcessor.md#gethandler)
- [getValue](runtime_mci_codes_at_codes.AtCodeProcessor.md#getvalue)
- [listCodes](runtime_mci_codes_at_codes.AtCodeProcessor.md#listcodes)
- [registerCode](runtime_mci_codes_at_codes.AtCodeProcessor.md#registercode)

## Constructors

### constructor

• **new AtCodeProcessor**()

#### Defined in

[core/src/mci/codes/at-codes.ts:214](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/mci/codes/at-codes.ts#L214)

## Methods

### getHandler

▸ **getHandler**(`code`): `undefined` \| [`AtCodeHandler`](../modules/runtime_mci_codes_at_codes.md#atcodehandler)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`undefined` \| [`AtCodeHandler`](../modules/runtime_mci_codes_at_codes.md#atcodehandler)

#### Defined in

[core/src/mci/codes/at-codes.ts:229](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/mci/codes/at-codes.ts#L229)

___

### getValue

▸ **getValue**(`code`, `context`, `params?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `context` | [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md) |
| `params?` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[core/src/mci/codes/at-codes.ts:233](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/mci/codes/at-codes.ts#L233)

___

### listCodes

▸ **listCodes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[core/src/mci/codes/at-codes.ts:261](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/mci/codes/at-codes.ts#L261)

___

### registerCode

▸ **registerCode**(`code`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `handler` | [`AtCodeHandler`](../modules/runtime_mci_codes_at_codes.md#atcodehandler) |

#### Returns

`void`

#### Defined in

[core/src/mci/codes/at-codes.ts:257](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/mci/codes/at-codes.ts#L257)
