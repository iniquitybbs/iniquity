# Module: lib/ws-bbs-server

WebSocket BBS server attachment

**`Summary`**

Attach WebSocket endpoint to HTTP server and run BBS sessions over WS

## Table of contents

### Functions

- [attachWebSocketServer](lib_ws_bbs_server.md#attachwebsocketserver)

## Functions

### attachWebSocketServer

▸ **attachWebSocketServer**(`httpServer`, `telnetServer`): `void`

Attach a WebSocket server to the existing HTTP server.
When a client connects to path /ws, a BBS session is created via the TelnetServer.
Call after TelnetServer.start() so snack:push and server info are already registered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpServer` | `Server`<typeof `IncomingMessage`, typeof `ServerResponse`\> |
| `telnetServer` | [`TelnetServer`](../classes/lib_telnet.TelnetServer.md) |

#### Returns

`void`

#### Defined in

[cli/src/lib/ws-bbs-server.ts:38](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/ws-bbs-server.ts#L38)
