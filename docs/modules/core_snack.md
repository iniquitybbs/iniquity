# Module: core/snack

Snack (toast) notifications

**`Summary`**

Corner toast notifications with queue and optional event delivery

## Table of contents

### Interfaces

- [SnackPayload](../interfaces/core_snack.SnackPayload.md)

### Type Aliases

- [SnackCorner](core_snack.md#snackcorner)

### Functions

- [showSnack](core_snack.md#showsnack)

## Type Aliases

### SnackCorner

Ƭ **SnackCorner**: ``"top-left"`` \| ``"top-right"`` \| ``"bottom-left"`` \| ``"bottom-right"``

#### Defined in

core/src/snack.ts:11

## Functions

### showSnack

▸ **showSnack**(`output`, `payload`, `onCleared`): `void`

Draw a snack in the given corner, then after durationMs clear the region and call onCleared.
Uses a single line; if message contains newlines, only first line is used for positioning (or we could take first line for size).

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |
| `payload` | [`SnackPayload`](../interfaces/core_snack.SnackPayload.md) |
| `onCleared` | () => `void` |

#### Returns

`void`

#### Defined in

core/src/snack.ts:56
