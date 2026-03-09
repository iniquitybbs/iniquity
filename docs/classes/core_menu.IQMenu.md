# Class: IQMenu

[core/menu](../modules/core_menu.md).IQMenu

IQMenu - Interactive menu system

## Table of contents

### Constructors

- [constructor](core_menu.IQMenu.md#constructor)

### Properties

- [art](core_menu.IQMenu.md#art)
- [autoRenderItems](core_menu.IQMenu.md#autorenderitems)
- [basepath](core_menu.IQMenu.md#basepath)
- [commands](core_menu.IQMenu.md#commands)
- [data](core_menu.IQMenu.md#data)
- [description](core_menu.IQMenu.md#description)
- [hotkeys](core_menu.IQMenu.md#hotkeys)
- [itemFormat](core_menu.IQMenu.md#itemformat)
- [items](core_menu.IQMenu.md#items)
- [itemsX](core_menu.IQMenu.md#itemsx)
- [itemsY](core_menu.IQMenu.md#itemsy)
- [mouse](core_menu.IQMenu.md#mouse)
- [mouseHighlightFormat](core_menu.IQMenu.md#mousehighlightformat)
- [name](core_menu.IQMenu.md#name)
- [promptText](core_menu.IQMenu.md#prompttext)
- [promptX](core_menu.IQMenu.md#promptx)
- [promptY](core_menu.IQMenu.md#prompty)

### Methods

- [addItem](core_menu.IQMenu.md#additem)
- [addItems](core_menu.IQMenu.md#additems)
- [back](core_menu.IQMenu.md#back)
- [executeCommand](core_menu.IQMenu.md#executecommand)
- [getParent](core_menu.IQMenu.md#getparent)
- [prompt](core_menu.IQMenu.md#prompt)
- [render](core_menu.IQMenu.md#render)
- [setParent](core_menu.IQMenu.md#setparent)
- [show](core_menu.IQMenu.md#show)
- [stop](core_menu.IQMenu.md#stop)
- [waitForKey](core_menu.IQMenu.md#waitforkey)

## Constructors

### constructor

• **new IQMenu**(`options`, `output`, `artworkFn?`, `getRuntime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQMenuOptions`](../interfaces/core_menu.IQMenuOptions.md) |
| `output` | [`IQOutput`](../interfaces/core_output.IQOutput.md) |
| `artworkFn?` | (`options?`: { `basepath?`: `string`  }) => { `render`: (`opts`: `any`) => `Promise`<`any`\>  } |
| `getRuntime?` | () => { `getLastRenderedMenuArtKey`: () => ``null`` \| `string` ; `processSnacks`: () => `void` ; `setLastRenderedMenuArtKey`: (`key`: `string`) => `void` ; `setPromptPosition`: (`x`: `number`, `y`: `number`) => `void`  } |

#### Defined in

[core/src/menu.ts:134](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L134)

## Properties

### art

• `Optional` **art**: [`IQMenuArtOptions`](../interfaces/core_menu.IQMenuArtOptions.md)

#### Defined in

[core/src/menu.ts:109](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L109)

___

### autoRenderItems

• **autoRenderItems**: `boolean`

#### Defined in

[core/src/menu.ts:116](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L116)

___

### basepath

• `Optional` **basepath**: `string`

#### Defined in

[core/src/menu.ts:110](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L110)

___

### commands

• **commands**: [`IMenuCommands`](../interfaces/core_menu.IMenuCommands.md)

#### Defined in

[core/src/menu.ts:107](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L107)

___

### data

• **data**: `any`

#### Defined in

[core/src/menu.ts:108](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L108)

___

### description

• **description**: `string`

#### Defined in

[core/src/menu.ts:106](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L106)

___

### hotkeys

• **hotkeys**: `boolean`

#### Defined in

[core/src/menu.ts:119](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L119)

___

### itemFormat

• **itemFormat**: `string`

#### Defined in

[core/src/menu.ts:117](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L117)

___

### items

• **items**: [`IQMenuItem`](../interfaces/core_menu.IQMenuItem.md)[] = `[]`

#### Defined in

[core/src/menu.ts:118](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L118)

___

### itemsX

• `Optional` **itemsX**: `number`

#### Defined in

[core/src/menu.ts:114](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L114)

___

### itemsY

• `Optional` **itemsY**: `number`

#### Defined in

[core/src/menu.ts:115](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L115)

___

### mouse

• **mouse**: `boolean`

#### Defined in

[core/src/menu.ts:120](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L120)

___

### mouseHighlightFormat

• **mouseHighlightFormat**: `undefined` \| `string`

#### Defined in

[core/src/menu.ts:121](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L121)

___

### name

• **name**: `string`

#### Defined in

[core/src/menu.ts:105](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L105)

___

### promptText

• **promptText**: `string`

#### Defined in

[core/src/menu.ts:111](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L111)

___

### promptX

• `Optional` **promptX**: `number`

#### Defined in

[core/src/menu.ts:112](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L112)

___

### promptY

• `Optional` **promptY**: `number`

#### Defined in

[core/src/menu.ts:113](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L113)

## Methods

### addItem

▸ **addItem**(`item`): [`IQMenu`](core_menu.IQMenu.md)

Add a menu item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IQMenuItem`](../interfaces/core_menu.IQMenuItem.md) |

#### Returns

[`IQMenu`](core_menu.IQMenu.md)

#### Defined in

[core/src/menu.ts:169](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L169)

___

### addItems

▸ **addItems**(`items`): [`IQMenu`](core_menu.IQMenu.md)

Add multiple menu items

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`IQMenuItem`](../interfaces/core_menu.IQMenuItem.md)[] |

#### Returns

[`IQMenu`](core_menu.IQMenu.md)

#### Defined in

[core/src/menu.ts:186](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L186)

___

### back

▸ **back**(): `string`

Go back to parent menu

#### Returns

`string`

#### Defined in

[core/src/menu.ts:579](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L579)

___

### executeCommand

▸ **executeCommand**(`key`): `Promise`<`any`\>

Execute a command by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[core/src/menu.ts:354](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L354)

___

### getParent

▸ **getParent**(): ``null`` \| [`IQMenu`](core_menu.IQMenu.md)

Get parent menu

#### Returns

``null`` \| [`IQMenu`](core_menu.IQMenu.md)

#### Defined in

[core/src/menu.ts:202](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L202)

___

### prompt

▸ **prompt**(`options`): [`IQMenuPromptFunctions`](../interfaces/core_menu.IQMenuPromptFunctions.md)

Set up a prompt for user input

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IQMenuPromptOptions`](../interfaces/core_menu.IQMenuPromptOptions.md) |

#### Returns

[`IQMenuPromptFunctions`](../interfaces/core_menu.IQMenuPromptFunctions.md)

#### Defined in

[core/src/menu.ts:209](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L209)

___

### render

▸ **render**(`callback`, `options?`): `Promise`<`void`\>

Render the menu with a loop (legacy API)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`res`: [`IQMenuLoopMessageResponse`](../interfaces/core_menu.IQMenuLoopMessageResponse.md), `cmdkey`: `Function`, `data?`: `any`) => `void` |
| `options?` | [`IQMenuLoopOptions`](../interfaces/core_menu.IQMenuLoopOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/menu.ts:587](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L587)

___

### setParent

▸ **setParent**(`parent`): [`IQMenu`](core_menu.IQMenu.md)

Set parent menu (for back navigation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IQMenu`](core_menu.IQMenu.md) |

#### Returns

[`IQMenu`](core_menu.IQMenu.md)

#### Defined in

[core/src/menu.ts:194](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L194)

___

### show

▸ **show**(): `Promise`<`string`\>

Display the menu and wait for input

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/menu.ts:370](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L370)

___

### stop

▸ **stop**(): `void`

Stop the menu loop

#### Returns

`void`

#### Defined in

[core/src/menu.ts:572](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L572)

___

### waitForKey

▸ **waitForKey**(): `Promise`<`string`\>

Wait for user command input and return the key
Uses non-blocking input with event processing loop

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/menu.ts:270](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/menu.ts#L270)
