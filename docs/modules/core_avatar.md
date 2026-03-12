# Module: core/avatar

Avatar System - Small User Graphics

**`Summary`**

10x6 cell user avatars with validation and identicon generation

Inspired by Synchronet's avatar_lib.js, this provides:
- Fixed size: 10 columns x 6 rows (120 bytes)
- Store as base64-encoded BIN data
- Draw at absolute screen position
- Validate avatar data (no control characters)
- Auto-generate identicons for users without avatars

## Table of contents

### Classes

- [Avatar](../classes/core_avatar.Avatar.md)

### Interfaces

- [AvatarData](../interfaces/core_avatar.AvatarData.md)

### Variables

- [AvatarDefs](core_avatar.md#avatardefs)

## Variables

### AvatarDefs

• `Const` **AvatarDefs**: `Object`

Avatar dimension constants

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | ``6`` |
| `size` | ``120`` |
| `width` | ``10`` |

#### Defined in

[core/src/avatar.ts:41](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/avatar.ts#L41)
