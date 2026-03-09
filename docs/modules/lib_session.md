# Module: lib/session

Session State

**`Summary`**

Per-connection session state and management implementing IQOutput

## Table of contents

### Classes

- [Session](../classes/lib_session.Session.md)

### Interfaces

- [SessionInfo](../interfaces/lib_session.SessionInfo.md)
- [WriteOptions](../interfaces/lib_session.WriteOptions.md)

### Type Aliases

- [InputMode](lib_session.md#inputmode)
- [TerminalEncoding](lib_session.md#terminalencoding)

## Type Aliases

### InputMode

Ƭ **InputMode**: ``"line"`` \| ``"key"`` \| ``"raw"``

Input mode determines how incoming characters are handled

#### Defined in

[iniquity/src/lib/session.ts:35](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/lib/session.ts#L35)

___

### TerminalEncoding

Ƭ **TerminalEncoding**: ``"cp437"`` \| ``"utf8"``

#### Defined in

[iniquity/src/lib/session.ts:10](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/lib/session.ts#L10)
