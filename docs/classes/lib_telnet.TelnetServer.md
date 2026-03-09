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

[iniquity/src/lib/telnet.ts:35](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/telnet.ts#L35)

## Methods

### getActiveSessions

▸ **getActiveSessions**(): [`Session`](lib_session.Session.md)[]

Get all active sessions

#### Returns

[`Session`](lib_session.Session.md)[]

#### Defined in

[iniquity/src/lib/telnet.ts:53](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/telnet.ts#L53)

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

[iniquity/src/lib/telnet.ts:72](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/telnet.ts#L72)

___

### getConnectionCount

▸ **getConnectionCount**(): `number`

Get the number of active connections

#### Returns

`number`

#### Defined in

[iniquity/src/lib/telnet.ts:46](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/telnet.ts#L46)

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

[iniquity/src/lib/telnet.ts:60](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/telnet.ts#L60)

___

### start

▸ **start**(): `Promise`<`void`\>

Start the Telnet server

#### Returns

`Promise`<`void`\>

#### Defined in

[iniquity/src/lib/telnet.ts:99](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/telnet.ts#L99)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stop the Telnet server

#### Returns

`Promise`<`void`\>

#### Defined in

[iniquity/src/lib/telnet.ts:143](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/iniquity/src/lib/telnet.ts#L143)
