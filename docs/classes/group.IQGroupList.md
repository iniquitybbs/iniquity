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

[core/src/group.ts:558](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L558)

## Methods

### all

▸ **all**(): [`IGroupData`](../interfaces/group.IGroupData.md)[]

Get all groups

#### Returns

[`IGroupData`](../interfaces/group.IGroupData.md)[]

#### Defined in

[core/src/group.ts:565](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L565)

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

[core/src/group.ts:589](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L589)

___

### count

▸ **count**(): `number`

Get group count

#### Returns

`number`

#### Defined in

[core/src/group.ts:572](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L572)

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

[core/src/group.ts:579](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L579)

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

[core/src/group.ts:596](https://github.com/iniquitybbs/iniquity/blob/27c3858/packages/core/src/group.ts#L596)
