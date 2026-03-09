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

[core/src/group.ts:373](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L373)

## Accessors

### accessLevel

• `get` **accessLevel**(): [`UserAccessLevel`](../enums/user.UserAccessLevel.md)

Get group access level

#### Returns

[`UserAccessLevel`](../enums/user.UserAccessLevel.md)

#### Defined in

[core/src/group.ts:416](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L416)

___

### description

• `get` **description**(): `string`

Get group description

#### Returns

`string`

#### Defined in

[core/src/group.ts:409](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L409)

___

### id

• `get` **id**(): `number`

Get group ID

#### Returns

`number`

#### Defined in

[core/src/group.ts:402](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L402)

___

### members

• `get` **members**(): `string`[]

Get group members

#### Returns

`string`[]

#### Defined in

[core/src/group.ts:430](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L430)

___

### name

• `get` **name**(): `string`

Get group name

#### Returns

`string`

#### Defined in

[core/src/group.ts:395](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L395)

___

### permissions

• `get` **permissions**(): ``null`` \| [`IGroupPermissions`](../interfaces/group.IGroupPermissions.md)

Get group permissions

#### Returns

``null`` \| [`IGroupPermissions`](../interfaces/group.IGroupPermissions.md)

#### Defined in

[core/src/group.ts:423](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L423)

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

[core/src/group.ts:444](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L444)

___

### delete

▸ **delete**(): `boolean`

Delete group

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:515](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L515)

___

### exists

▸ **exists**(): `boolean`

Check if group exists

#### Returns

`boolean`

#### Defined in

[core/src/group.ts:437](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L437)

___

### getRawData

▸ **getRawData**(): ``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

Get raw group data

#### Returns

``null`` \| [`IGroupData`](../interfaces/group.IGroupData.md)

#### Defined in

[core/src/group.ts:527](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L527)

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

[core/src/group.ts:470](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L470)

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

[core/src/group.ts:484](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L484)

___

### memberCount

▸ **memberCount**(): `number`

Get member count

#### Returns

`number`

#### Defined in

[core/src/group.ts:477](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L477)

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

[core/src/group.ts:456](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L456)

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

[core/src/group.ts:493](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L493)

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

[core/src/group.ts:503](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/group.ts#L503)
