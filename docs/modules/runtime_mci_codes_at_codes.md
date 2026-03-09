# Module: runtime/mci/codes/at-codes

@-Codes Handler

**`Summary`**

Synchronet-compatible @-codes for dynamic content expansion

## Table of contents

### Classes

- [AtCodeProcessor](../classes/runtime_mci_codes_at_codes.AtCodeProcessor.md)

### Interfaces

- [AtCodeDefinition](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)

### Type Aliases

- [AtCodeHandler](runtime_mci_codes_at_codes.md#atcodehandler)

### Variables

- [allAtCodes](runtime_mci_codes_at_codes.md#allatcodes)
- [bbsCodes](runtime_mci_codes_at_codes.md#bbscodes)
- [fileCodes](runtime_mci_codes_at_codes.md#filecodes)
- [messageCodes](runtime_mci_codes_at_codes.md#messagecodes)
- [nodeCodes](runtime_mci_codes_at_codes.md#nodecodes)
- [systemCodes](runtime_mci_codes_at_codes.md#systemcodes)
- [terminalCodes](runtime_mci_codes_at_codes.md#terminalcodes)
- [userCodes](runtime_mci_codes_at_codes.md#usercodes)

## Type Aliases

### AtCodeHandler

Ƭ **AtCodeHandler**: (`context`: [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md), `params?`: `string`) => `string` \| `undefined`

#### Type declaration

▸ (`context`, `params?`): `string` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md) |
| `params?` | `string` |

##### Returns

`string` \| `undefined`

#### Defined in

[core/src/mci/codes/at-codes.ts:9](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L9)

## Variables

### allAtCodes

• `Const` **allAtCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:181](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L181)

___

### bbsCodes

• `Const` **bbsCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:114](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L114)

___

### fileCodes

• `Const` **fileCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:167](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L167)

___

### messageCodes

• `Const` **messageCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:152](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L152)

___

### nodeCodes

• `Const` **nodeCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:145](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L145)

___

### systemCodes

• `Const` **systemCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:94](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L94)

___

### terminalCodes

• `Const` **terminalCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:131](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L131)

___

### userCodes

• `Const` **userCodes**: [`AtCodeDefinition`](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/at-codes.ts:50](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/at-codes.ts#L50)
