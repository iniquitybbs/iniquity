# Module: core/bbs

Simplified BBS API

**`Summary`**

High-level declarative API for building BBS applications

This module provides a simplified, declarative API that wraps the existing
core functionality, enabling cleaner and more expressive BBS development.

## Table of contents

### Interfaces

- [BBSArtOptions](../interfaces/core_bbs.BBSArtOptions.md)
- [BBSBulletinOptions](../interfaces/core_bbs.BBSBulletinOptions.md)
- [BBSChoiceOption](../interfaces/core_bbs.BBSChoiceOption.md)
- [BBSMenuItem](../interfaces/core_bbs.BBSMenuItem.md)
- [BBSMenuOptions](../interfaces/core_bbs.BBSMenuOptions.md)
- [BBSPopupOptions](../interfaces/core_bbs.BBSPopupOptions.md)
- [BBSSnackOptions](../interfaces/core_bbs.BBSSnackOptions.md)
- [ServerInfo](../interfaces/core_bbs.ServerInfo.md)
- [SessionInfo](../interfaces/core_bbs.SessionInfo.md)

### Type Aliases

- [BBSType](core_bbs.md#bbstype)
- [SnackTarget](core_bbs.md#snacktarget)

### Variables

- [bbs](core_bbs.md#bbs)

## Type Aliases

### BBSType

Ƭ **BBSType**: typeof [`bbs`](core_bbs.md#bbs)

#### Defined in

[core/src/bbs.ts:1168](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/bbs.ts#L1168)

___

### SnackTarget

Ƭ **SnackTarget**: ``"current"`` \| ``"broadcast"`` \| { `node`: `number`  } \| { `user`: `string`  }

Target for snack delivery: current session, broadcast, or specific node/user

#### Defined in

[core/src/bbs.ts:107](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/bbs.ts#L107)

## Variables

### bbs

• `Const` **bbs**: `BBS`

Singleton BBS instance

#### Defined in

[core/src/bbs.ts:1166](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/bbs.ts#L1166)
