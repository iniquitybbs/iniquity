# Class: TextStyleProcessor

[runtime/mci/text-styles](../modules/runtime_mci_text_styles.md).TextStyleProcessor

## Table of contents

### Constructors

- [constructor](runtime_mci_text_styles.TextStyleProcessor.md#constructor)

### Methods

- [apply](runtime_mci_text_styles.TextStyleProcessor.md#apply)
- [hasStyle](runtime_mci_text_styles.TextStyleProcessor.md#hasstyle)
- [listStyles](runtime_mci_text_styles.TextStyleProcessor.md#liststyles)
- [registerStyle](runtime_mci_text_styles.TextStyleProcessor.md#registerstyle)
- [unregisterStyle](runtime_mci_text_styles.TextStyleProcessor.md#unregisterstyle)

## Constructors

### constructor

• **new TextStyleProcessor**()

## Methods

### apply

▸ **apply**(`text`, `styleName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleName` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/text-styles.ts:263](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/text-styles.ts#L263)

___

### hasStyle

▸ **hasStyle**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/mci/text-styles.ts:286](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/text-styles.ts#L286)

___

### listStyles

▸ **listStyles**(): `string`[]

#### Returns

`string`[]

#### Defined in

[core/src/mci/text-styles.ts:280](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/text-styles.ts#L280)

___

### registerStyle

▸ **registerStyle**(`name`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TextStyleFunction`](../modules/runtime_mci_text_styles.md#textstylefunction) |

#### Returns

`void`

#### Defined in

[core/src/mci/text-styles.ts:272](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/text-styles.ts#L272)

___

### unregisterStyle

▸ **unregisterStyle**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/mci/text-styles.ts:276](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/text-styles.ts#L276)
