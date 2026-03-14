# Interface: IGroupDatabase

[group](../modules/group.md).IGroupDatabase

Group database interface

## Implemented by

- [`JSONGroupDatabase`](../classes/group.JSONGroupDatabase.md)

## Table of contents

### Methods

- [create](group.IGroupDatabase.md#create)
- [delete](group.IGroupDatabase.md#delete)
- [exists](group.IGroupDatabase.md#exists)
- [getNextId](group.IGroupDatabase.md#getnextid)
- [list](group.IGroupDatabase.md#list)
- [load](group.IGroupDatabase.md#load)
- [save](group.IGroupDatabase.md#save)

## Methods

### create

▸ **create**(`group`): ``null`` \| [`IGroupData`](group.IGroupData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | `Partial`<[`IGroupData`](group.IGroupData.md)\> |

#### Returns

``null`` \| [`IGroupData`](group.IGroupData.md)

#### Defined in

[core/src/group.ts:217](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L217)

___

### delete

▸ **delete**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:218](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L218)

___

### exists

▸ **exists**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:219](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L219)

___

### getNextId

▸ **getNextId**(): `number`

#### Returns

`number`

#### Defined in

[core/src/group.ts:221](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L221)

___

### list

▸ **list**(): [`IGroupData`](group.IGroupData.md)[]

#### Returns

[`IGroupData`](group.IGroupData.md)[]

#### Defined in

[core/src/group.ts:220](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L220)

___

### load

▸ **load**(`name`): ``null`` \| [`IGroupData`](group.IGroupData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`IGroupData`](group.IGroupData.md)

#### Defined in

[core/src/group.ts:215](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L215)

___

### save

▸ **save**(`group`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`IGroupData`](group.IGroupData.md) |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:216](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L216)
