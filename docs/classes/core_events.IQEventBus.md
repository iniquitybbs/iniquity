# Class: IQEventBus

[core/events](../modules/core_events.md).IQEventBus

IQEventBus - Global event bus for BBS applications

Provides a publish/subscribe pattern for decoupled event handling.
Events can be emitted from anywhere and handlers will be called
regardless of the current menu or screen state.

## Table of contents

### Constructors

- [constructor](core_events.IQEventBus.md#constructor)

### Methods

- [clearQueue](core_events.IQEventBus.md#clearqueue)
- [emit](core_events.IQEventBus.md#emit)
- [emitSync](core_events.IQEventBus.md#emitsync)
- [getPendingCount](core_events.IQEventBus.md#getpendingcount)
- [getRegisteredEvents](core_events.IQEventBus.md#getregisteredevents)
- [hasHandlers](core_events.IQEventBus.md#hashandlers)
- [hasPendingEvents](core_events.IQEventBus.md#haspendingevents)
- [off](core_events.IQEventBus.md#off)
- [on](core_events.IQEventBus.md#on)
- [once](core_events.IQEventBus.md#once)
- [processQueue](core_events.IQEventBus.md#processqueue)
- [removeAllHandlers](core_events.IQEventBus.md#removeallhandlers)

## Constructors

### constructor

• **new IQEventBus**()

## Methods

### clearQueue

▸ **clearQueue**(): `void`

Clear all pending events from the queue

#### Returns

`void`

#### Defined in

[core/src/events.ts:200](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L200)

___

### emit

▸ **emit**(`event`, `data?`, `source?`): `void`

Emit an event (queues for processing)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event type to emit |
| `data?` | `any` | Optional data payload |
| `source?` | `string` | Optional source identifier |

#### Returns

`void`

#### Defined in

[core/src/events.ts:139](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L139)

___

### emitSync

▸ **emitSync**(`event`, `data?`, `source?`): `Promise`<`void`\>

Emit an event and process immediately (synchronous dispatch)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event type to emit |
| `data?` | `any` | Optional data payload |
| `source?` | `string` | Optional source identifier |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/events.ts:157](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L157)

___

### getPendingCount

▸ **getPendingCount**(): `number`

Get the number of pending events

#### Returns

`number`

#### Defined in

[core/src/events.ts:193](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L193)

___

### getRegisteredEvents

▸ **getRegisteredEvents**(): `string`[]

Get list of registered event types

#### Returns

`string`[]

#### Defined in

[core/src/events.ts:215](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L215)

___

### hasHandlers

▸ **hasHandlers**(`event`): `boolean`

Check if an event has any handlers

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/events.ts:222](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L222)

___

### hasPendingEvents

▸ **hasPendingEvents**(): `boolean`

Check if there are pending events in the queue

#### Returns

`boolean`

#### Defined in

[core/src/events.ts:186](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L186)

___

### off

▸ **off**(`event`, `handler?`): `void`

Unsubscribe from an event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event type to unsubscribe from |
| `handler?` | [`IQEventHandler`](../modules/core_events.md#iqeventhandler) | Specific handler to remove (if omitted, removes all handlers for event) |

#### Returns

`void`

#### Defined in

[core/src/events.ts:108](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L108)

___

### on

▸ **on**(`event`, `handler`, `options?`): () => `void`

Subscribe to an event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event type to listen for (use '*' for all events) |
| `handler` | [`IQEventHandler`](../modules/core_events.md#iqeventhandler) | Function to call when event is emitted |
| `options?` | [`IQEventOptions`](../interfaces/core_events.IQEventOptions.md) | Subscription options |

#### Returns

`fn`

Unsubscribe function

▸ (): `void`

Subscribe to an event

##### Returns

`void`

Unsubscribe function

#### Defined in

[core/src/events.ts:69](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L69)

___

### once

▸ **once**(`event`, `handler`): () => `void`

Subscribe to an event (fires only once)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event type to listen for |
| `handler` | [`IQEventHandler`](../modules/core_events.md#iqeventhandler) | Function to call when event is emitted |

#### Returns

`fn`

Unsubscribe function

▸ (): `void`

Subscribe to an event (fires only once)

##### Returns

`void`

Unsubscribe function

#### Defined in

[core/src/events.ts:99](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L99)

___

### processQueue

▸ **processQueue**(): `Promise`<`void`\>

Process all queued events
Called from the menu event loop to process pending events

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/events.ts:172](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L172)

___

### removeAllHandlers

▸ **removeAllHandlers**(): `void`

Remove all handlers for all events

#### Returns

`void`

#### Defined in

[core/src/events.ts:207](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/events.ts#L207)
