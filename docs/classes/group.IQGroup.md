# Class: IQGroup

[group](../modules/group.md).IQGroup

Group class for managing user groups

## Table of contents

### Constructors

- [constructor](group.IQGroup.md#constructor)

### Accessors

- [accessLevel](group.IQGroup.md#accesslevel)
- [description](group.IQGroup.md#description)
- [id](group.IQGroup.md#id)
- [members](group.IQGroup.md#members)
- [name](group.IQGroup.md#name)
- [permissions](group.IQGroup.md#permissions)

### Methods

- [addMember](group.IQGroup.md#addmember)
- [delete](group.IQGroup.md#delete)
- [exists](group.IQGroup.md#exists)
- [getRawData](group.IQGroup.md#getrawdata)
- [hasMember](group.IQGroup.md#hasmember)
- [hasPermission](group.IQGroup.md#haspermission)
- [memberCount](group.IQGroup.md#membercount)
- [removeMember](group.IQGroup.md#removemember)
- [setPermission](group.IQGroup.md#setpermission)
- [update](group.IQGroup.md#update)

## Constructors

### constructor

• **new IQGroup**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`IGroupOptions`](../interfaces/group.IGroupOptions.md) |

#### Defined in

[core/src/group.ts:393](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L393)

## Accessors

### accessLevel

• `get` **accessLevel**(): [`UserAccessLevel`](../enums/user.UserAccessLevel.md)

Get group access level

#### Returns

[`UserAccessLevel`](../enums/user.UserAccessLevel.md)

#### Defined in

[core/src/group.ts:436](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L436)

___

### description

• `get` **description**(): `string`

Get group description

#### Returns

`string`

#### Defined in

[core/src/group.ts:429](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L429)

___

### id

• `get` **id**(): `number`

Get group ID

#### Returns

`number`

#### Defined in

[core/src/group.ts:422](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L422)

___

### members

• `get` **members**(): `string`[]

Get group members

#### Returns

`string`[]

#### Defined in

[core/src/group.ts:450](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L450)

___

### name

• `get` **name**(): `string`

Get group name

#### Returns

`string`

#### Defined in

[core/src/group.ts:415](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L415)

___

### permissions

• `get` **permissions**(): ``null`` \| [`IGroupPermissions`](../interfaces/group.IGroupPermissions.md)

Get group permissions

#### Returns

``null`` \| [`IGroupPermissions`](../interfaces/group.IGroupPermissions.md)

#### Defined in

[core/src/group.ts:443](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L443)

## Methods

### addMember

▸ **addMember**(`handle`): `boolean`

Add member to group

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:464](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L464)

___

### delete

▸ **delete**(): `boolean`

Delete group

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:535](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L535)

___

### exists

▸ **exists**(): `boolean`

Check if group exists

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:457](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L457)

___

### getRawData

▸ **getRawData**(): ``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

Get raw group data

#### Returns

``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

#### Defined in

[core/src/group.ts:547](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L547)

___

### hasMember

▸ **hasMember**(`handle`): `boolean`

Check if user is member

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:490](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L490)

___

### hasPermission

▸ **hasPermission**(`permission`): `boolean`

Check permission

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | keyof [`IGroupPermissions`](../interfaces/group.IGroupPermissions.md) |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:504](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L504)

___

### memberCount

▸ **memberCount**(): `number`

Get member count

#### Returns

`number`

#### Defined in

[core/src/group.ts:497](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L497)

___

### removeMember

▸ **removeMember**(`handle`): `boolean`

Remove member from group

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:476](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L476)

___

### setPermission

▸ **setPermission**(`permission`, `value`): `boolean`

Set permission

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | keyof [`IGroupPermissions`](../interfaces/group.IGroupPermissions.md) |
| `value` | `number` \| `boolean` |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:513](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L513)

___

### update

▸ **update**(`updates`): `boolean`

Update group data

#### Parameters

| Name | Type |
| :------ | :------ |
| `updates` | `Partial`<[`IGroupData`](../interfaces/group.IGroupData.md)\> |

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:523](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/group.ts#L523)
