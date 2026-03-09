# Module: core/output

Output Interface

**`Summary`**

Abstract output interface for decoupling core from Session

## Table of contents

### Interfaces

- [IQOutput](../interfaces/core_output.IQOutput.md)

### Type Aliases

- [ControlCodeAction](core_output.md#controlcodeaction)

## Type Aliases

### ControlCodeAction

Ƭ **ControlCodeAction**: { `sequence`: `string` ; `type`: ``"ansi"``  } \| { `type`: ``"pause"``  } \| { `message?`: `string` ; `type`: ``"pause_message"``  } \| { `ms`: `number` ; `type`: ``"delay"``  } \| { `type`: ``"pause_off"``  } \| { `type`: ``"pause_on"``  } \| { `type`: ``"pause_reset"``  } \| { `type`: ``"abort"``  } \| { `type`: ``"noop"``  }

Control code action from MCI processing

#### Defined in

[core/src/output.ts:32](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/output.ts#L32)
