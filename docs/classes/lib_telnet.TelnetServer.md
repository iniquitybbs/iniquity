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

[cli/src/lib/telnet.ts:55](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/telnet.ts#L55)

## Methods

### getActiveSessions

▸ **getActiveSessions**(): [`Session`](lib_session.Session.md)[]

Get all active sessions

#### Returns

[`Session`](lib_session.Session.md)[]

#### Defined in

[cli/src/lib/telnet.ts:73](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/telnet.ts#L73)

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

[cli/src/lib/telnet.ts:92](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/telnet.ts#L92)

___

### getConnectionCount

▸ **getConnectionCount**(): `number`

Get the number of active connections

#### Returns

`number`

#### Defined in

[cli/src/lib/telnet.ts:66](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/telnet.ts#L66)

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

[cli/src/lib/telnet.ts:80](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/telnet.ts#L80)

___

### start

▸ **start**(): `Promise`<`void`\>

Start the Telnet server

#### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/lib/telnet.ts:119](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/telnet.ts#L119)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stop the Telnet server

#### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/lib/telnet.ts:163](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/cli/src/lib/telnet.ts#L163)
