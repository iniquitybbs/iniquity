# Module: core

Iniquity Core Runtime

**`Summary`**

IQ base class and Runtime for BBS applications

## Table of contents

### References

- [Artwork](core.md#artwork)

### Classes

- [Runtime](../classes/core.Runtime.md)

### Interfaces

- [IAlertOptions](../interfaces/core.IAlertOptions.md)
- [IBBSPrintFunctions](../interfaces/core.IBBSPrintFunctions.md)
- [IBBSSayFunctions](../interfaces/core.IBBSSayFunctions.md)
- [IQCursorChainableMethods](../interfaces/core.IQCursorChainableMethods.md)
- [IQCursorOptions](../interfaces/core.IQCursorOptions.md)
- [IQPauseOptions](../interfaces/core.IQPauseOptions.md)
- [IQSayOptions](../interfaces/core.IQSayOptions.md)
- [IQTermInfoObject](../interfaces/core.IQTermInfoObject.md)
- [IQWaitOptions](../interfaces/core.IQWaitOptions.md)

### Functions

- [getGlobalRuntime](core.md#getglobalruntime)
- [setGlobalRuntime](core.md#setglobalruntime)

## References

### Artwork

Re-exports [Artwork](../classes/core_artwork.Artwork.md)

## Functions

### getGlobalRuntime

▸ **getGlobalRuntime**(): [`Runtime`](../classes/core.Runtime.md)

#### Returns

[`Runtime`](../classes/core.Runtime.md)

#### Defined in

[core/src/core.ts:668](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/core.ts#L668)

___

### setGlobalRuntime

▸ **setGlobalRuntime**(`runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runtime` | [`Runtime`](../classes/core.Runtime.md) |

#### Returns

`void`

#### Defined in

[core/src/core.ts:664](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/core.ts#L664)
