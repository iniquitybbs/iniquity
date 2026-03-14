# Module: lib/ws-socket-adapter

WebSocket-to-Socket adapter

**`Summary`**

Presents a Node net.Socket-like interface to Session over a WebSocket

## Table of contents

### Classes

- [WebSocketSocketAdapter](../classes/lib_ws_socket_adapter.WebSocketSocketAdapter.md)

### Functions

- [createSocketFromWebSocket](lib_ws_socket_adapter.md#createsocketfromwebsocket)

## Functions

### createSocketFromWebSocket

▸ **createSocketFromWebSocket**(`ws`, `remoteAddress?`): [`WebSocketSocketAdapter`](../classes/lib_ws_socket_adapter.WebSocketSocketAdapter.md)

Create a Socket-like object from a WebSocket for use with Session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `WebSocket` |
| `remoteAddress?` | `string` |

#### Returns

[`WebSocketSocketAdapter`](../classes/lib_ws_socket_adapter.WebSocketSocketAdapter.md)

#### Defined in

[cli/src/lib/ws-socket-adapter.ts:84](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-socket-adapter.ts#L84)
