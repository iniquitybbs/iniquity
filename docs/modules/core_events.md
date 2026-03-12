# Module: core/events

IQEventBus - Global Event System

**`Summary`**

Publish/subscribe event bus for BBS-wide event handling

This module provides a global event bus that allows events to be published
and processed regardless of which menu a user is currently viewing.

## Table of contents

### Classes

- [IQEventBus](../classes/core_events.IQEventBus.md)

### Interfaces

- [IQEvent](../interfaces/core_events.IQEvent.md)
- [IQEventOptions](../interfaces/core_events.IQEventOptions.md)

### Type Aliases

- [IQEventHandler](core_events.md#iqeventhandler)

### Variables

- [events](core_events.md#events)

## Type Aliases

### IQEventHandler

Ƭ **IQEventHandler**: (`event`: [`IQEvent`](../interfaces/core_events.IQEvent.md)) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`event`): `void` \| `Promise`<`void`\>

Event handler function type

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IQEvent`](../interfaces/core_events.IQEvent.md) |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[core/src/events.ts:49](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/events.ts#L49)

## Variables

### events

• `Const` **events**: [`IQEventBus`](../classes/core_events.IQEventBus.md)

Global event bus singleton
Use this for application-wide event handling

#### Defined in

[core/src/events.ts:291](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/events.ts#L291)
