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

[core/src/mci/codes/position.ts:192](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L192)

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

[core/src/mci/codes/position.ts:203](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L203)

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

[core/src/mci/codes/position.ts:182](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L182)

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

[core/src/mci/codes/position.ts:199](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/mci/codes/position.ts#L199)
