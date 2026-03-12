# Interface: SessionInfo

[lib/session](../modules/lib_session.md).SessionInfo

## Table of contents

### Properties

- [client](lib_session.SessionInfo.md#client)
- [encoding](lib_session.SessionInfo.md#encoding)
- [height](lib_session.SessionInfo.md#height)
- [terminalType](lib_session.SessionInfo.md#terminaltype)
- [width](lib_session.SessionInfo.md#width)

## Properties

### client

• **client**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSyncTerm` | `boolean` | - |
| `isVtx` | `boolean` | - |
| `name` | `string` | - |
| `suggestsUtf8?` | `boolean` | True if client sent IQTERM UTF-8 handshake or TERM type suggests UTF-8 |
| `supportsFonts` | `boolean` | - |
| `supportsIceColors` | `boolean` | - |
| `version` | `string` | - |

#### Defined in

[cli/src/lib/session.ts:37](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/lib/session.ts#L37)

___

### encoding

• **encoding**: [`TerminalEncoding`](../modules/lib_session.md#terminalencoding)

#### Defined in

[cli/src/lib/session.ts:34](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/lib/session.ts#L34)

___

### height

• **height**: `number`

#### Defined in

[cli/src/lib/session.ts:36](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/lib/session.ts#L36)

___

### terminalType

• **terminalType**: `string`

#### Defined in

[cli/src/lib/session.ts:33](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/lib/session.ts#L33)

___

### width

• **width**: `number`

#### Defined in

[cli/src/lib/session.ts:35](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/lib/session.ts#L35)
