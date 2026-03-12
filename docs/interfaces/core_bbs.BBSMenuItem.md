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

[core/src/bbs.ts:50](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/bbs.ts#L50)

___

### goto

• `Optional` **goto**: `string`

Name of another menu to navigate to

#### Defined in

[core/src/bbs.ts:52](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/bbs.ts#L52)

___

### key

• **key**: `string`

Hotkey for this menu item

#### Defined in

[core/src/bbs.ts:46](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/bbs.ts#L46)

___

### label

• **label**: `string`

Display label

#### Defined in

[core/src/bbs.ts:48](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/bbs.ts#L48)

___

### x

• `Optional` **x**: `number`

Explicit X position for this item (bypasses layout system)

#### Defined in

[core/src/bbs.ts:54](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/bbs.ts#L54)

___

### y

• `Optional` **y**: `number`

Explicit Y position for this item (bypasses layout system)

#### Defined in

[core/src/bbs.ts:56](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/bbs.ts#L56)
