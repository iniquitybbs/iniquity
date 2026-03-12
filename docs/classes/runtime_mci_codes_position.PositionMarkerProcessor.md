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

[core/src/mci/codes/position.ts:115](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L115)

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

[core/src/mci/codes/position.ts:111](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L111)

___

### exportMarkers

▸ **exportMarkers**(): `Record`<`number`, [`PositionMarker`](../interfaces/runtime_mci_codes_position.PositionMarker.md)\>

#### Returns

`Record`<`number`, [`PositionMarker`](../interfaces/runtime_mci_codes_position.PositionMarker.md)\>

#### Defined in

[core/src/mci/codes/position.ts:184](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L184)

___

### getCurrentPosition

▸ **getCurrentPosition**(): [`PositionState`](../interfaces/runtime_mci_codes_position.PositionState.md)

#### Returns

[`PositionState`](../interfaces/runtime_mci_codes_position.PositionState.md)

#### Defined in

[core/src/mci/codes/position.ts:132](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L132)

___

### getMarkerCount

▸ **getMarkerCount**(): `number`

#### Returns

`number`

#### Defined in

[core/src/mci/codes/position.ts:123](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L123)

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

[core/src/mci/codes/position.ts:70](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L70)

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

[core/src/mci/codes/position.ts:78](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L78)

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

[core/src/mci/codes/position.ts:94](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L94)

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

[core/src/mci/codes/position.ts:74](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L74)

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

[core/src/mci/codes/position.ts:192](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L192)

___

### listPositions

▸ **listPositions**(): `number`[]

#### Returns

`number`[]

#### Defined in

[core/src/mci/codes/position.ts:119](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L119)

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

[core/src/mci/codes/position.ts:142](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L142)

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

[core/src/mci/codes/position.ts:52](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L52)

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

[core/src/mci/codes/position.ts:136](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L136)

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

[core/src/mci/codes/position.ts:127](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L127)

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

[core/src/mci/codes/position.ts:104](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/mci/codes/position.ts#L104)
