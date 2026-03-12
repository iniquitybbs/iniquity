# Module: commands/desktop

IQ term Desktop

**`Summary`**

Launch the Electron desktop app (BBS term in a window).

**`Example`**

```ts
iq desktop
```

## Table of contents

### Variables

- [command](commands_desktop.md#command)
- [default](commands_desktop.md#default)
- [describe](commands_desktop.md#describe)

### Functions

- [builder](commands_desktop.md#builder)
- [handler](commands_desktop.md#handler)

## Variables

### command

• `Const` **command**: ``"desktop"``

#### Defined in

cli/src/commands/desktop.ts:36

___

### default

• `Const` **default**: `CommandModule`

#### Defined in

cli/src/commands/desktop.ts:58

___

### describe

• `Const` **describe**: ``"Launch IQ term Desktop (Electron app with BBS term in a window)."``

#### Defined in

cli/src/commands/desktop.ts:37

## Functions

### builder

▸ **builder**(`y`): `Argv`<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Argv`<{}\> |

#### Returns

`Argv`<{}\>

#### Defined in

cli/src/commands/desktop.ts:39

___

### handler

▸ **handler**(): `void`

#### Returns

`void`

#### Defined in

cli/src/commands/desktop.ts:43
