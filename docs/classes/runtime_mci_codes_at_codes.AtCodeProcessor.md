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

[core/src/mci/codes/at-codes.ts:194](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/codes/at-codes.ts#L194)

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

[core/src/mci/codes/at-codes.ts:209](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/codes/at-codes.ts#L209)

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

[core/src/mci/codes/at-codes.ts:213](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/codes/at-codes.ts#L213)

___

### listCodes

▸ **listCodes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[core/src/mci/codes/at-codes.ts:241](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/codes/at-codes.ts#L241)

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

[core/src/mci/codes/at-codes.ts:237](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/codes/at-codes.ts#L237)
