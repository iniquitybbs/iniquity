# Module: runtime/reactor

IQReactor - Reactive Data System

**`Summary`**

Observable data models for reactive UI updates with computed properties

## Table of contents

### Interfaces

- [IQComputedProperty](../interfaces/runtime_reactor.IQComputedProperty.md)
- [IQReactorOptions](../interfaces/runtime_reactor.IQReactorOptions.md)

### Functions

- [IQReactor](runtime_reactor.md#iqreactor)

## Functions

### IQReactor

▸ **IQReactor**(`dataObj`): [`IQReactorOptions`](../interfaces/runtime_reactor.IQReactorOptions.md)

Create a reactive data model with computed properties
Based on the pattern from @iniquitybbs/core

**`See`**

https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataObj` | `any` |

#### Returns

[`IQReactorOptions`](../interfaces/runtime_reactor.IQReactorOptions.md)

#### Defined in

[core/src/reactor.ts:53](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/reactor.ts#L53)
