# Module: runtime/mci/context

MCI Context System

**`Summary`**

Context interfaces and providers for MCI code processing

Provides context data for @-code expansion including user, system, BBS,
terminal, message, and file contexts. Compatible with Synchronet,
original Iniquity, and ENiGMA BBS systems.

## Table of contents

### Classes

- [DefaultMCIContextProvider](../classes/runtime_mci_context.DefaultMCIContextProvider.md)

### Interfaces

- [BBSContext](../interfaces/runtime_mci_context.BBSContext.md)
- [FileContext](../interfaces/runtime_mci_context.FileContext.md)
- [MCIContext](../interfaces/runtime_mci_context.MCIContext.md)
- [MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md)
- [MessageContext](../interfaces/runtime_mci_context.MessageContext.md)
- [NodeContext](../interfaces/runtime_mci_context.NodeContext.md)
- [SystemContext](../interfaces/runtime_mci_context.SystemContext.md)
- [TerminalContext](../interfaces/runtime_mci_context.TerminalContext.md)
- [UserContext](../interfaces/runtime_mci_context.UserContext.md)

### Functions

- [createDefaultBBSContext](runtime_mci_context.md#createdefaultbbscontext)
- [createDefaultMCIContext](runtime_mci_context.md#createdefaultmcicontext)
- [createDefaultNodeContext](runtime_mci_context.md#createdefaultnodecontext)
- [createDefaultSystemContext](runtime_mci_context.md#createdefaultsystemcontext)
- [createDefaultTerminalContext](runtime_mci_context.md#createdefaultterminalcontext)
- [createDefaultUserContext](runtime_mci_context.md#createdefaultusercontext)
- [mergeMCIContext](runtime_mci_context.md#mergemcicontext)

## Functions

### createDefaultBBSContext

▸ **createDefaultBBSContext**(): [`BBSContext`](../interfaces/runtime_mci_context.BBSContext.md)

Default BBS context

#### Returns

[`BBSContext`](../interfaces/runtime_mci_context.BBSContext.md)

#### Defined in

[core/src/mci/context.ts:302](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L302)

___

### createDefaultMCIContext

▸ **createDefaultMCIContext**(): [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

Create a complete default MCI context

#### Returns

[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

#### Defined in

[core/src/mci/context.ts:341](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L341)

___

### createDefaultNodeContext

▸ **createDefaultNodeContext**(): [`NodeContext`](../interfaces/runtime_mci_context.NodeContext.md)

Default node context

#### Returns

[`NodeContext`](../interfaces/runtime_mci_context.NodeContext.md)

#### Defined in

[core/src/mci/context.ts:330](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L330)

___

### createDefaultSystemContext

▸ **createDefaultSystemContext**(): [`SystemContext`](../interfaces/runtime_mci_context.SystemContext.md)

Default system context with current date/time

#### Returns

[`SystemContext`](../interfaces/runtime_mci_context.SystemContext.md)

#### Defined in

[core/src/mci/context.ts:289](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L289)

___

### createDefaultTerminalContext

▸ **createDefaultTerminalContext**(): [`TerminalContext`](../interfaces/runtime_mci_context.TerminalContext.md)

Default terminal context

#### Returns

[`TerminalContext`](../interfaces/runtime_mci_context.TerminalContext.md)

#### Defined in

[core/src/mci/context.ts:312](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L312)

___

### createDefaultUserContext

▸ **createDefaultUserContext**(): [`UserContext`](../interfaces/runtime_mci_context.UserContext.md)

Default user context with sensible defaults

#### Returns

[`UserContext`](../interfaces/runtime_mci_context.UserContext.md)

#### Defined in

[core/src/mci/context.ts:277](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L277)

___

### mergeMCIContext

▸ **mergeMCIContext**(`base`, `partial`): [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

Merge partial context into existing context

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md) |
| `partial` | `Partial`<[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)\> |

#### Returns

[`MCIContext`](../interfaces/runtime_mci_context.MCIContext.md)

#### Defined in

[core/src/mci/context.ts:355](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L355)
