# Module: runtime/mci/codes/position

Position Marker System

**`Summary`**

Original Iniquity-style position markers (^X01-^X99)

## Table of contents

### Classes

- [PositionMarkerProcessor](../classes/runtime_mci_codes_position.PositionMarkerProcessor.md)

### Interfaces

- [PositionMarker](../interfaces/runtime_mci_codes_position.PositionMarker.md)
- [PositionState](../interfaces/runtime_mci_codes_position.PositionState.md)

### Functions

- [createPositionMarker](runtime_mci_codes_position.md#createpositionmarker)
- [findAllPositionMarkers](runtime_mci_codes_position.md#findallpositionmarkers)
- [parsePositionMarker](runtime_mci_codes_position.md#parsepositionmarker)
- [stripPositionMarkers](runtime_mci_codes_position.md#strippositionmarkers)

## Functions

### createPositionMarker

▸ **createPositionMarker**(`id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`string`

#### Defined in

[core/src/mci/codes/position.ts:212](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/codes/position.ts#L212)

___

### findAllPositionMarkers

▸ **findAllPositionMarkers**(`text`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`number`[]

#### Defined in

[core/src/mci/codes/position.ts:223](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/codes/position.ts#L223)

___

### parsePositionMarker

▸ **parsePositionMarker**(`text`): { `id`: `number` ; `index`: `number`  } \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

{ `id`: `number` ; `index`: `number`  } \| ``null``

#### Defined in

[core/src/mci/codes/position.ts:202](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/codes/position.ts#L202)

___

### stripPositionMarkers

▸ **stripPositionMarkers**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[core/src/mci/codes/position.ts:219](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/codes/position.ts#L219)
