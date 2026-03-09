# Class: IQGroupList

[group](../modules/group.md).IQGroupList

Group list utilities

## Table of contents

### Constructors

- [constructor](group.IQGroupList.md#constructor)

### Methods

- [all](group.IQGroupList.md#all)
- [byAccessLevel](group.IQGroupList.md#byaccesslevel)
- [count](group.IQGroupList.md#count)
- [findByName](group.IQGroupList.md#findbyname)
- [forUser](group.IQGroupList.md#foruser)

## Constructors

### constructor

• **new IQGroupList**()

#### Defined in

[core/src/group.ts:538](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L538)

## Methods

### all

▸ **all**(): [`IGroupData`](../interfaces/group.IGroupData.md)[]

Get all groups

#### Returns

[`IGroupData`](../interfaces/group.IGroupData.md)[]

#### Defined in

[core/src/group.ts:545](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L545)

___

### byAccessLevel

▸ **byAccessLevel**(`level`): [`IGroupData`](../interfaces/group.IGroupData.md)[]

Get groups by access level

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`UserAccessLevel`](../enums/user.UserAccessLevel.md) |

#### Returns

[`IGroupData`](../interfaces/group.IGroupData.md)[]

#### Defined in

[core/src/group.ts:569](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L569)

___

### count

▸ **count**(): `number`

Get group count

#### Returns

`number`

#### Defined in

[core/src/group.ts:552](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L552)

___

### findByName

▸ **findByName**(`name`): ``null`` \| [`IQGroup`](group.IQGroup.md)

Find group by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`IQGroup`](group.IQGroup.md)

#### Defined in

[core/src/group.ts:559](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L559)

___

### forUser

▸ **forUser**(`handle`): [`IGroupData`](../interfaces/group.IGroupData.md)[]

Get groups for a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

[`IGroupData`](../interfaces/group.IGroupData.md)[]

#### Defined in

[core/src/group.ts:576](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L576)
