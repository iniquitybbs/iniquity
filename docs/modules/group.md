# Module: group

IQ Group System

**`Summary`**

User groups, access control, and permissions

## Table of contents

### Classes

- [IQGroup](../classes/group.IQGroup.md)
- [IQGroupList](../classes/group.IQGroupList.md)
- [JSONGroupDatabase](../classes/group.JSONGroupDatabase.md)

### Interfaces

- [IGroupData](../interfaces/group.IGroupData.md)
- [IGroupDatabase](../interfaces/group.IGroupDatabase.md)
- [IGroupOptions](../interfaces/group.IGroupOptions.md)
- [IGroupPermissions](../interfaces/group.IGroupPermissions.md)

### Variables

- [DEFAULT\_PERMISSIONS](group.md#default_permissions)

### Functions

- [getGroupDatabase](group.md#getgroupdatabase)
- [initGroupDatabase](group.md#initgroupdatabase)
- [setGroupDatabase](group.md#setgroupdatabase)

## Variables

### DEFAULT\_PERMISSIONS

• `Const` **DEFAULT\_PERMISSIONS**: `Record`<[`UserAccessLevel`](../enums/user.UserAccessLevel.md), [`IGroupPermissions`](../interfaces/group.IGroupPermissions.md)\>

Default permissions for different access levels

#### Defined in

[core/src/group.ts:88](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/group.ts#L88)

## Functions

### getGroupDatabase

▸ **getGroupDatabase**(): [`IGroupDatabase`](../interfaces/group.IGroupDatabase.md)

#### Returns

[`IGroupDatabase`](../interfaces/group.IGroupDatabase.md)

#### Defined in

[core/src/group.ts:370](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/group.ts#L370)

___

### initGroupDatabase

▸ **initGroupDatabase**(`bbsPath`): `void`

Initialize the group database with a BBS-specific data path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bbsPath` | `string` | The root directory of the BBS (where iniquity.ts lives) |

#### Returns

`void`

#### Defined in

[core/src/group.ts:381](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/group.ts#L381)

___

### setGroupDatabase

▸ **setGroupDatabase**(`db`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`IGroupDatabase`](../interfaces/group.IGroupDatabase.md) |

#### Returns

`void`

#### Defined in

[core/src/group.ts:366](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/group.ts#L366)
