# Interface: IQMenuOptions

[core/menu](../modules/core_menu.md).IQMenuOptions

## Table of contents

### Properties

- [art](core_menu.IQMenuOptions.md#art)
- [autoRenderItems](core_menu.IQMenuOptions.md#autorenderitems)
- [basepath](core_menu.IQMenuOptions.md#basepath)
- [commands](core_menu.IQMenuOptions.md#commands)
- [data](core_menu.IQMenuOptions.md#data)
- [description](core_menu.IQMenuOptions.md#description)
- [globalHotkeys](core_menu.IQMenuOptions.md#globalhotkeys)
- [hotkeys](core_menu.IQMenuOptions.md#hotkeys)
- [itemFormat](core_menu.IQMenuOptions.md#itemformat)
- [itemsX](core_menu.IQMenuOptions.md#itemsx)
- [itemsY](core_menu.IQMenuOptions.md#itemsy)
- [mouse](core_menu.IQMenuOptions.md#mouse)
- [mouseHighlightFormat](core_menu.IQMenuOptions.md#mousehighlightformat)
- [name](core_menu.IQMenuOptions.md#name)
- [prompt](core_menu.IQMenuOptions.md#prompt)
- [promptX](core_menu.IQMenuOptions.md#promptx)
- [promptY](core_menu.IQMenuOptions.md#prompty)

## Properties

### art

• `Optional` **art**: [`IQMenuArtOptions`](core_menu.IQMenuArtOptions.md)

#### Defined in

[core/src/menu.ts:70](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L70)

___

### autoRenderItems

• `Optional` **autoRenderItems**: `boolean`

#### Defined in

[core/src/menu.ts:77](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L77)

___

### basepath

• `Optional` **basepath**: `string`

#### Defined in

[core/src/menu.ts:71](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L71)

___

### commands

• `Optional` **commands**: [`IMenuCommands`](core_menu.IMenuCommands.md) & { `default?`: [`IMenuCommand`](core_menu.IMenuCommand.md)  }

#### Defined in

[core/src/menu.ts:68](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L68)

___

### data

• `Optional` **data**: `any`

#### Defined in

[core/src/menu.ts:69](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L69)

___

### description

• `Optional` **description**: `string`

#### Defined in

[core/src/menu.ts:67](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L67)

___

### globalHotkeys

• `Optional` **globalHotkeys**: `Record`<`string`, () => `Promise`<`void`\>\>

Global hotkeys run before menu commands (e.g. "/" for quick AI). Handler runs, then menu loop continues.

#### Defined in

[core/src/menu.ts:86](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L86)

___

### hotkeys

• `Optional` **hotkeys**: `boolean`

Enable keyboard hotkeys for menu items (default true)

#### Defined in

[core/src/menu.ts:80](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L80)

___

### itemFormat

• `Optional` **itemFormat**: `string`

#### Defined in

[core/src/menu.ts:78](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L78)

___

### itemsX

• `Optional` **itemsX**: `number`

#### Defined in

[core/src/menu.ts:75](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L75)

___

### itemsY

• `Optional` **itemsY**: `number`

#### Defined in

[core/src/menu.ts:76](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L76)

___

### mouse

• `Optional` **mouse**: `boolean`

Enable SGR mouse for clicking items (default true)

#### Defined in

[core/src/menu.ts:82](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L82)

___

### mouseHighlightFormat

• `Optional` **mouseHighlightFormat**: `string`

MCI string for "pressed" look when an item is clicked (e.g. "|15|16"). If omitted, reverse video is used.

#### Defined in

[core/src/menu.ts:84](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L84)

___

### name

• **name**: `string`

#### Defined in

[core/src/menu.ts:66](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L66)

___

### prompt

• `Optional` **prompt**: `string`

#### Defined in

[core/src/menu.ts:72](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L72)

___

### promptX

• `Optional` **promptX**: `number`

#### Defined in

[core/src/menu.ts:73](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L73)

___

### promptY

• `Optional` **promptY**: `number`

#### Defined in

[core/src/menu.ts:74](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L74)
