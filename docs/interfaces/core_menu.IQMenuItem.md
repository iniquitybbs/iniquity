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

[core/src/menu.ts:117](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/menu.ts#L117)

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

[core/src/menu.ts:120](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/menu.ts#L120)

___

### key

• **key**: `string`

#### Defined in

[core/src/menu.ts:113](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/menu.ts#L113)

___

### label

• **label**: `string`

#### Defined in

[core/src/menu.ts:114](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/menu.ts#L114)

___

### submenu

• `Optional` **submenu**: [`IQMenu`](../classes/core_menu.IQMenu.md)

#### Defined in

[core/src/menu.ts:118](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/menu.ts#L118)

___

### x

• `Optional` **x**: `number`

#### Defined in

[core/src/menu.ts:115](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/menu.ts#L115)

___

### y

• `Optional` **y**: `number`

#### Defined in

[core/src/menu.ts:116](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/menu.ts#L116)
