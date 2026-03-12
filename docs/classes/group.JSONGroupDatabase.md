# Class: JSONGroupDatabase

[group](../modules/group.md).JSONGroupDatabase

JSON file-based group database

## Implements

- [`IGroupDatabase`](../interfaces/group.IGroupDatabase.md)

## Table of contents

### Constructors

- [constructor](group.JSONGroupDatabase.md#constructor)

### Methods

- [create](group.JSONGroupDatabase.md#create)
- [delete](group.JSONGroupDatabase.md#delete)
- [exists](group.JSONGroupDatabase.md#exists)
- [getNextId](group.JSONGroupDatabase.md#getnextid)
- [list](group.JSONGroupDatabase.md#list)
- [load](group.JSONGroupDatabase.md#load)
- [save](group.JSONGroupDatabase.md#save)

## Constructors

### constructor

• **new JSONGroupDatabase**(`dataPath?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataPath` | `string` | `"./data/groups"` |

#### Defined in

[core/src/group.ts:232](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L232)

## Methods

### create

▸ **create**(`groupData`): ``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupData` | `Partial`<[`IGroupData`](../interfaces/group.IGroupData.md)\> |

#### Returns

``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

#### Implementation of

[IGroupDatabase](../interfaces/group.IGroupDatabase.md).[create](../interfaces/group.IGroupDatabase.md#create)

#### Defined in

[core/src/group.ts:306](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L306)

___

### delete

▸ **delete**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Implementation of

[IGroupDatabase](../interfaces/group.IGroupDatabase.md).[delete](../interfaces/group.IGroupDatabase.md#delete)

#### Defined in

[core/src/group.ts:335](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L335)

___

### exists

▸ **exists**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Implementation of

[IGroupDatabase](../interfaces/group.IGroupDatabase.md).[exists](../interfaces/group.IGroupDatabase.md#exists)

#### Defined in

[core/src/group.ts:348](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L348)

___

### getNextId

▸ **getNextId**(): `number`

#### Returns

`number`

#### Implementation of

[IGroupDatabase](../interfaces/group.IGroupDatabase.md).[getNextId](../interfaces/group.IGroupDatabase.md#getnextid)

#### Defined in

[core/src/group.ts:356](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L356)

___

### list

▸ **list**(): [`IGroupData`](../interfaces/group.IGroupData.md)[]

#### Returns

[`IGroupData`](../interfaces/group.IGroupData.md)[]

#### Implementation of

[IGroupDatabase](../interfaces/group.IGroupDatabase.md).[list](../interfaces/group.IGroupDatabase.md#list)

#### Defined in

[core/src/group.ts:352](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L352)

___

### load

▸ **load**(`name`): ``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

#### Implementation of

[IGroupDatabase](../interfaces/group.IGroupDatabase.md).[load](../interfaces/group.IGroupDatabase.md#load)

#### Defined in

[core/src/group.ts:289](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L289)

___

### save

▸ **save**(`group`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`IGroupData`](../interfaces/group.IGroupData.md) |

#### Returns

`boolean`

#### Implementation of

[IGroupDatabase](../interfaces/group.IGroupDatabase.md).[save](../interfaces/group.IGroupDatabase.md#save)

#### Defined in

[core/src/group.ts:293](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/group.ts#L293)
