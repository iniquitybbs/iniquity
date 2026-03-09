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

[core/src/mci/text-styles.ts:243](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L243)

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

[core/src/mci/text-styles.ts:266](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L266)

___

### listStyles

▸ **listStyles**(): `string`[]

#### Returns

`string`[]

#### Defined in

[core/src/mci/text-styles.ts:260](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L260)

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

[core/src/mci/text-styles.ts:252](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L252)

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

[core/src/mci/text-styles.ts:256](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/mci/text-styles.ts#L256)
