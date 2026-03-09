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

[core/src/group.ts:197](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/group.ts#L197)

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

[core/src/group.ts:198](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/group.ts#L198)

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

[core/src/group.ts:199](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/group.ts#L199)

___

### getNextId

▸ **getNextId**(): `number`

#### Returns

`number`

#### Defined in

[core/src/group.ts:201](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/group.ts#L201)

___

### list

▸ **list**(): [`IGroupData`](group.IGroupData.md)[]

#### Returns

[`IGroupData`](group.IGroupData.md)[]

#### Defined in

[core/src/group.ts:200](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/group.ts#L200)

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

[core/src/group.ts:195](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/group.ts#L195)

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

[core/src/group.ts:196](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/group.ts#L196)
