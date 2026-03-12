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

[core/src/menu.ts:157](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L157)

## Properties

### art

• `Optional` **art**: [`IQMenuArtOptions`](../interfaces/core_menu.IQMenuArtOptions.md)

#### Defined in

[core/src/menu.ts:131](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L131)

___

### autoRenderItems

• **autoRenderItems**: `boolean`

#### Defined in

[core/src/menu.ts:138](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L138)

___

### basepath

• `Optional` **basepath**: `string`

#### Defined in

[core/src/menu.ts:132](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L132)

___

### commands

• **commands**: [`IMenuCommands`](../interfaces/core_menu.IMenuCommands.md)

#### Defined in

[core/src/menu.ts:129](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L129)

___

### data

• **data**: `any`

#### Defined in

[core/src/menu.ts:130](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L130)

___

### description

• **description**: `string`

#### Defined in

[core/src/menu.ts:128](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L128)

___

### hotkeys

• **hotkeys**: `boolean`

#### Defined in

[core/src/menu.ts:141](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L141)

___

### itemFormat

• **itemFormat**: `string`

#### Defined in

[core/src/menu.ts:139](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L139)

___

### items

• **items**: [`IQMenuItem`](../interfaces/core_menu.IQMenuItem.md)[] = `[]`

#### Defined in

[core/src/menu.ts:140](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L140)

___

### itemsX

• `Optional` **itemsX**: `number`

#### Defined in

[core/src/menu.ts:136](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L136)

___

### itemsY

• `Optional` **itemsY**: `number`

#### Defined in

[core/src/menu.ts:137](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L137)

___

### mouse

• **mouse**: `boolean`

#### Defined in

[core/src/menu.ts:142](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L142)

___

### mouseHighlightFormat

• **mouseHighlightFormat**: `undefined` \| `string`

#### Defined in

[core/src/menu.ts:143](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L143)

___

### name

• **name**: `string`

#### Defined in

[core/src/menu.ts:127](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L127)

___

### promptText

• **promptText**: `string`

#### Defined in

[core/src/menu.ts:133](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L133)

___

### promptX

• `Optional` **promptX**: `number`

#### Defined in

[core/src/menu.ts:134](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L134)

___

### promptY

• `Optional` **promptY**: `number`

#### Defined in

[core/src/menu.ts:135](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L135)

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

[core/src/menu.ts:193](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L193)

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

[core/src/menu.ts:210](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L210)

___

### back

▸ **back**(): `string`

Go back to parent menu

#### Returns

`string`

#### Defined in

[core/src/menu.ts:628](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L628)

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

[core/src/menu.ts:378](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L378)

___

### getParent

▸ **getParent**(): ``null`` \| [`IQMenu`](core_menu.IQMenu.md)

Get parent menu

#### Returns

``null`` \| [`IQMenu`](core_menu.IQMenu.md)

#### Defined in

[core/src/menu.ts:226](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L226)

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

[core/src/menu.ts:233](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L233)

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

[core/src/menu.ts:636](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L636)

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

[core/src/menu.ts:218](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L218)

___

### show

▸ **show**(): `Promise`<`string`\>

Display the menu and wait for input

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/menu.ts:394](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L394)

___

### stop

▸ **stop**(): `void`

Stop the menu loop

#### Returns

`void`

#### Defined in

[core/src/menu.ts:621](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L621)

___

### waitForKey

▸ **waitForKey**(): `Promise`<`string`\>

Wait for user command input and return the key
Uses non-blocking input with event processing loop

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/menu.ts:294](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/menu.ts#L294)
