# Interface: BBSMenuItem

[core/bbs](../modules/core_bbs.md).BBSMenuItem

Menu item definition for declarative menus

## Table of contents

### Properties

- [action](core_bbs.BBSMenuItem.md#action)
- [goto](core_bbs.BBSMenuItem.md#goto)
- [key](core_bbs.BBSMenuItem.md#key)
- [label](core_bbs.BBSMenuItem.md#label)
- [x](core_bbs.BBSMenuItem.md#x)
- [y](core_bbs.BBSMenuItem.md#y)

## Properties

### action

• `Optional` **action**: ``"back"`` \| ``"quit"`` \| () => `any`

Action to perform: "back", "quit", or a function

#### Defined in

[core/src/bbs.ts:49](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L49)

___

### goto

• `Optional` **goto**: `string`

Name of another menu to navigate to

#### Defined in

[core/src/bbs.ts:51](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L51)

___

### key

• **key**: `string`

Hotkey for this menu item

#### Defined in

[core/src/bbs.ts:45](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L45)

___

### label

• **label**: `string`

Display label

#### Defined in

[core/src/bbs.ts:47](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L47)

___

### x

• `Optional` **x**: `number`

Explicit X position for this item (bypasses layout system)

#### Defined in

[core/src/bbs.ts:53](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L53)

___

### y

• `Optional` **y**: `number`

Explicit Y position for this item (bypasses layout system)

#### Defined in

[core/src/bbs.ts:55](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/bbs.ts#L55)
