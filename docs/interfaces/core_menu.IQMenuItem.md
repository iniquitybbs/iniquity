# Interface: IQMenuItem

[core/menu](../modules/core_menu.md).IQMenuItem

Menu item for display

## Table of contents

### Properties

- [action](core_menu.IQMenuItem.md#action)
- [bounds](core_menu.IQMenuItem.md#bounds)
- [key](core_menu.IQMenuItem.md#key)
- [label](core_menu.IQMenuItem.md#label)
- [submenu](core_menu.IQMenuItem.md#submenu)
- [x](core_menu.IQMenuItem.md#x)
- [y](core_menu.IQMenuItem.md#y)

## Properties

### action

• `Optional` **action**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[core/src/menu.ts:97](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/menu.ts#L97)

___

### bounds

• `Optional` **bounds**: `Object`

Bounds for mouse hit-testing (1-based x, y, endX); set by displayItems() when positioned

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endX` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[core/src/menu.ts:100](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/menu.ts#L100)

___

### key

• **key**: `string`

#### Defined in

[core/src/menu.ts:93](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/menu.ts#L93)

___

### label

• **label**: `string`

#### Defined in

[core/src/menu.ts:94](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/menu.ts#L94)

___

### submenu

• `Optional` **submenu**: [`IQMenu`](../classes/core_menu.IQMenu.md)

#### Defined in

[core/src/menu.ts:98](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/menu.ts#L98)

___

### x

• `Optional` **x**: `number`

#### Defined in

[core/src/menu.ts:95](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/menu.ts#L95)

___

### y

• `Optional` **y**: `number`

#### Defined in

[core/src/menu.ts:96](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/menu.ts#L96)
