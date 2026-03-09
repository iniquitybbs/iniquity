# Class: PositionMarkerProcessor

[runtime/mci/codes/position](../modules/runtime_mci_codes_position.md).PositionMarkerProcessor

## Table of contents

### Constructors

- [constructor](runtime_mci_codes_position.PositionMarkerProcessor.md#constructor)

### Methods

- [clearAllPositions](runtime_mci_codes_position.PositionMarkerProcessor.md#clearallpositions)
- [clearPosition](runtime_mci_codes_position.PositionMarkerProcessor.md#clearposition)
- [exportMarkers](runtime_mci_codes_position.PositionMarkerProcessor.md#exportmarkers)
- [getCurrentPosition](runtime_mci_codes_position.PositionMarkerProcessor.md#getcurrentposition)
- [getMarkerCount](runtime_mci_codes_position.PositionMarkerProcessor.md#getmarkercount)
- [getPosition](runtime_mci_codes_position.PositionMarkerProcessor.md#getposition)
- [gotoPosition](runtime_mci_codes_position.PositionMarkerProcessor.md#gotoposition)
- [gotoPositionOnly](runtime_mci_codes_position.PositionMarkerProcessor.md#gotopositiononly)
- [hasPosition](runtime_mci_codes_position.PositionMarkerProcessor.md#hasposition)
- [importMarkers](runtime_mci_codes_position.PositionMarkerProcessor.md#importmarkers)
- [listPositions](runtime_mci_codes_position.PositionMarkerProcessor.md#listpositions)
- [processMarkerCode](runtime_mci_codes_position.PositionMarkerProcessor.md#processmarkercode)
- [savePosition](runtime_mci_codes_position.PositionMarkerProcessor.md#saveposition)
- [setCurrentColor](runtime_mci_codes_position.PositionMarkerProcessor.md#setcurrentcolor)
- [setCurrentPosition](runtime_mci_codes_position.PositionMarkerProcessor.md#setcurrentposition)
- [updatePosition](runtime_mci_codes_position.PositionMarkerProcessor.md#updateposition)

## Constructors

### constructor

• **new PositionMarkerProcessor**()

## Methods

### clearAllPositions

▸ **clearAllPositions**(): `void`

#### Returns

`void`

#### Defined in

[core/src/mci/codes/position.ts:95](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L95)

___

### clearPosition

▸ **clearPosition**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/mci/codes/position.ts:91](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L91)

___

### exportMarkers

▸ **exportMarkers**(): `Record`<`number`, [`PositionMarker`](../interfaces/runtime_mci_codes_position.PositionMarker.md)\>

#### Returns

`Record`<`number`, [`PositionMarker`](../interfaces/runtime_mci_codes_position.PositionMarker.md)\>

#### Defined in

[core/src/mci/codes/position.ts:164](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L164)

___

### getCurrentPosition

▸ **getCurrentPosition**(): [`PositionState`](../interfaces/runtime_mci_codes_position.PositionState.md)

#### Returns

[`PositionState`](../interfaces/runtime_mci_codes_position.PositionState.md)

#### Defined in

[core/src/mci/codes/position.ts:112](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L112)

___

### getMarkerCount

▸ **getMarkerCount**(): `number`

#### Returns

`number`

#### Defined in

[core/src/mci/codes/position.ts:103](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L103)

___

### getPosition

▸ **getPosition**(`id`): `undefined` \| [`PositionMarker`](../interfaces/runtime_mci_codes_position.PositionMarker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`PositionMarker`](../interfaces/runtime_mci_codes_position.PositionMarker.md)

#### Defined in

[core/src/mci/codes/position.ts:50](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L50)

___

### gotoPosition

▸ **gotoPosition**(`id`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

[core/src/mci/codes/position.ts:58](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L58)

___

### gotoPositionOnly

▸ **gotoPositionOnly**(`id`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

[core/src/mci/codes/position.ts:74](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L74)

___

### hasPosition

▸ **hasPosition**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Defined in

[core/src/mci/codes/position.ts:54](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L54)

___

### importMarkers

▸ **importMarkers**(`markers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | `Record`<`number`, [`PositionMarker`](../interfaces/runtime_mci_codes_position.PositionMarker.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/codes/position.ts:172](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L172)

___

### listPositions

▸ **listPositions**(): `number`[]

#### Returns

`number`[]

#### Defined in

[core/src/mci/codes/position.ts:99](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L99)

___

### processMarkerCode

▸ **processMarkerCode**(`text`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `markersFound` | `number`[] |
| `result` | `string` |

#### Defined in

[core/src/mci/codes/position.ts:122](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L122)

___

### savePosition

▸ **savePosition**(`id`, `state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `state?` | `Partial`<[`PositionState`](../interfaces/runtime_mci_codes_position.PositionState.md)\> |

#### Returns

`void`

#### Defined in

[core/src/mci/codes/position.ts:32](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L32)

___

### setCurrentColor

▸ **setCurrentColor**(`foreground?`, `background?`, `attributes?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `foreground?` | `number` |
| `background?` | `number` |
| `attributes?` | `number` |

#### Returns

`void`

#### Defined in

[core/src/mci/codes/position.ts:116](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L116)

___

### setCurrentPosition

▸ **setCurrentPosition**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[core/src/mci/codes/position.ts:107](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L107)

___

### updatePosition

▸ **updatePosition**(`id`, `text`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `text` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[core/src/mci/codes/position.ts:84](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L84)
