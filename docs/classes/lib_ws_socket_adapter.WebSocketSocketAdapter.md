# Class: WebSocketSocketAdapter

[lib/ws-socket-adapter](../modules/lib_ws_socket_adapter.md).WebSocketSocketAdapter

Socket-like adapter for WebSocket so Session can use it without change.
Emits "data" (Buffer), "close", "error"; provides write() and end().

## Hierarchy

- `EventEmitter`

  ↳ **`WebSocketSocketAdapter`**

## Table of contents

### Constructors

- [constructor](lib_ws_socket_adapter.WebSocketSocketAdapter.md#constructor)

### Properties

- [isWebSocket](lib_ws_socket_adapter.WebSocketSocketAdapter.md#iswebsocket)
- [remoteAddress](lib_ws_socket_adapter.WebSocketSocketAdapter.md#remoteaddress)

### Methods

- [destroy](lib_ws_socket_adapter.WebSocketSocketAdapter.md#destroy)
- [end](lib_ws_socket_adapter.WebSocketSocketAdapter.md#end)
- [write](lib_ws_socket_adapter.WebSocketSocketAdapter.md#write)

## Constructors

### constructor

• **new WebSocketSocketAdapter**(`ws`, `remoteAddress?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `WebSocket` |
| `remoteAddress?` | `string` |

#### Overrides

EventEmitter.constructor

#### Defined in

[cli/src/lib/ws-socket-adapter.ts:41](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-socket-adapter.ts#L41)

## Properties

### isWebSocket

• `Readonly` **isWebSocket**: ``true``

Set so Session can skip telnet negotiation (browser doesn't speak telnet).

#### Defined in

[cli/src/lib/ws-socket-adapter.ts:37](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-socket-adapter.ts#L37)

___

### remoteAddress

• **remoteAddress**: `string`

#### Defined in

[cli/src/lib/ws-socket-adapter.ts:35](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-socket-adapter.ts#L35)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/lib/ws-socket-adapter.ts:76](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-socket-adapter.ts#L76)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/lib/ws-socket-adapter.ts:69](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-socket-adapter.ts#L69)

___

### write

▸ **write**(`data`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `encoding?` | `string` |

#### Returns

`boolean`

#### Defined in

[cli/src/lib/ws-socket-adapter.ts:62](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-socket-adapter.ts#L62)
