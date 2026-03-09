# Module: runtime/mci/codes/ctrl-codes

Control Codes Handler

**`Summary`**

Screen and flow control codes (|CS, |PA, |DE, etc.)

## Table of contents

### Classes

- [ControlCodeProcessor](../classes/runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md)

### Interfaces

- [ControlCodeDefinition](../interfaces/runtime_mci_codes_ctrl_codes.ControlCodeDefinition.md)

### Type Aliases

- [ControlCodeAction](runtime_mci_codes_ctrl_codes.md#controlcodeaction)

### Variables

- [controlCodes](runtime_mci_codes_ctrl_codes.md#controlcodes)

### Functions

- [clearLine](runtime_mci_codes_ctrl_codes.md#clearline)
- [clearScreen](runtime_mci_codes_ctrl_codes.md#clearscreen)
- [clearToEndOfLine](runtime_mci_codes_ctrl_codes.md#cleartoendofline)
- [clearToEndOfScreen](runtime_mci_codes_ctrl_codes.md#cleartoendofscreen)
- [cursorDown](runtime_mci_codes_ctrl_codes.md#cursordown)
- [cursorLeft](runtime_mci_codes_ctrl_codes.md#cursorleft)
- [cursorPosition](runtime_mci_codes_ctrl_codes.md#cursorposition)
- [cursorRight](runtime_mci_codes_ctrl_codes.md#cursorright)
- [cursorUp](runtime_mci_codes_ctrl_codes.md#cursorup)
- [hideCursor](runtime_mci_codes_ctrl_codes.md#hidecursor)
- [resetAttributes](runtime_mci_codes_ctrl_codes.md#resetattributes)
- [restoreCursor](runtime_mci_codes_ctrl_codes.md#restorecursor)
- [saveCursor](runtime_mci_codes_ctrl_codes.md#savecursor)
- [showCursor](runtime_mci_codes_ctrl_codes.md#showcursor)

## Type Aliases

### ControlCodeAction

Ƭ **ControlCodeAction**: { `sequence`: `string` ; `type`: ``"ansi"``  } \| { `type`: ``"pause"``  } \| { `message?`: `string` ; `type`: ``"pause_message"``  } \| { `ms`: `number` ; `type`: ``"delay"``  } \| { `type`: ``"pause_off"``  } \| { `type`: ``"pause_on"``  } \| { `type`: ``"pause_reset"``  } \| { `type`: ``"abort"``  } \| { `type`: ``"noop"``  }

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:9](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L9)

## Variables

### controlCodes

• `Const` **controlCodes**: [`ControlCodeDefinition`](../interfaces/runtime_mci_codes_ctrl_codes.ControlCodeDefinition.md)[]

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:27](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L27)

## Functions

### clearLine

▸ **clearLine**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:195](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L195)

___

### clearScreen

▸ **clearScreen**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:191](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L191)

___

### clearToEndOfLine

▸ **clearToEndOfLine**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:199](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L199)

___

### clearToEndOfScreen

▸ **clearToEndOfScreen**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:203](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L203)

___

### cursorDown

▸ **cursorDown**(`n?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | `1` |

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:175](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L175)

___

### cursorLeft

▸ **cursorLeft**(`n?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | `1` |

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:183](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L183)

___

### cursorPosition

▸ **cursorPosition**(`x`, `y`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:187](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L187)

___

### cursorRight

▸ **cursorRight**(`n?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | `1` |

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:179](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L179)

___

### cursorUp

▸ **cursorUp**(`n?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | `1` |

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:171](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L171)

___

### hideCursor

▸ **hideCursor**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:215](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L215)

___

### resetAttributes

▸ **resetAttributes**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:223](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L223)

___

### restoreCursor

▸ **restoreCursor**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:211](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L211)

___

### saveCursor

▸ **saveCursor**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:207](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L207)

___

### showCursor

▸ **showCursor**(): `string`

#### Returns

`string`

#### Defined in

[core/src/mci/codes/ctrl-codes.ts:219](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/ctrl-codes.ts#L219)
