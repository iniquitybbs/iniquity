# Class: TelnetServer

[lib/telnet](../modules/lib_telnet.md).TelnetServer

## Table of contents

### Constructors

- [constructor](lib_telnet.TelnetServer.md#constructor)

### Methods

- [getActiveSessions](lib_telnet.TelnetServer.md#getactivesessions)
- [getBBSServerInfo](lib_telnet.TelnetServer.md#getbbsserverinfo)
- [getConnectionCount](lib_telnet.TelnetServer.md#getconnectioncount)
- [getServerInfo](lib_telnet.TelnetServer.md#getserverinfo)
- [handleWebSocketConnection](lib_telnet.TelnetServer.md#handlewebsocketconnection)
- [start](lib_telnet.TelnetServer.md#start)
- [stop](lib_telnet.TelnetServer.md#stop)

## Constructors

### constructor

• **new TelnetServer**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TelnetServerOptions`](../interfaces/lib_telnet.TelnetServerOptions.md) |

#### Defined in

[cli/src/lib/telnet.ts:57](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L57)

## Methods

### getActiveSessions

▸ **getActiveSessions**(): [`Session`](lib_session.Session.md)[]

Get all active sessions

#### Returns

[`Session`](lib_session.Session.md)[]

#### Defined in

[cli/src/lib/telnet.ts:75](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L75)

___

### getBBSServerInfo

▸ **getBBSServerInfo**(): `Object`

Get server info in BBS API format

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `sessions` | `SessionInfo`[] |
| `uptime` | `number` |

#### Defined in

[cli/src/lib/telnet.ts:94](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L94)

___

### getConnectionCount

▸ **getConnectionCount**(): `number`

Get the number of active connections

#### Returns

`number`

#### Defined in

[cli/src/lib/telnet.ts:68](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L68)

___

### getServerInfo

▸ **getServerInfo**(): `Object`

Get server info

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connections` | `number` |
| `host` | `string` |
| `port` | `number` |
| `uptime` | `number` |

#### Defined in

[cli/src/lib/telnet.ts:82](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L82)

___

### handleWebSocketConnection

▸ **handleWebSocketConnection**(`ws`, `remoteAddress?`): `void`

Handle a new WebSocket connection (same BBS session as TCP, different transport).
Call this from the HTTP server's WebSocket upgrade handler so web/desktop clients get a session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `WebSocket` |
| `remoteAddress?` | `string` |

#### Returns

`void`

#### Defined in

[cli/src/lib/telnet.ts:247](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L247)

___

### start

▸ **start**(): `Promise`<`void`\>

Start the Telnet server

#### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/lib/telnet.ts:121](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L121)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stop the Telnet server

#### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/lib/telnet.ts:165](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/cli/src/lib/telnet.ts#L165)
