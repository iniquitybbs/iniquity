# Class: IQUserList

[user](../modules/user.md).IQUserList

User list utilities

## Table of contents

### Constructors

- [constructor](user.IQUserList.md#constructor)

### Methods

- [all](user.IQUserList.md#all)
- [byAccessLevel](user.IQUserList.md#byaccesslevel)
- [count](user.IQUserList.md#count)
- [findByEmail](user.IQUserList.md#findbyemail)
- [findByHandle](user.IQUserList.md#findbyhandle)
- [newest](user.IQUserList.md#newest)
- [recentlyActive](user.IQUserList.md#recentlyactive)
- [topByCalls](user.IQUserList.md#topbycalls)
- [topByPosts](user.IQUserList.md#topbyposts)

## Constructors

### constructor

• **new IQUserList**()

#### Defined in

[core/src/user.ts:605](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L605)

## Methods

### all

▸ **all**(): [`IUserData`](../interfaces/user.IUserData.md)[]

Get all users

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Defined in

[core/src/user.ts:612](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L612)

___

### byAccessLevel

▸ **byAccessLevel**(`level`): [`IUserData`](../interfaces/user.IUserData.md)[]

Get users by access level

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`UserAccessLevel`](../enums/user.UserAccessLevel.md) |

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Defined in

[core/src/user.ts:647](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L647)

___

### count

▸ **count**(): `number`

Get user count

#### Returns

`number`

#### Defined in

[core/src/user.ts:619](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L619)

___

### findByEmail

▸ **findByEmail**(`email`): ``null`` \| [`IQUser`](user.IQUser.md)

Find user by email

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |

#### Returns

``null`` \| [`IQUser`](user.IQUser.md)

#### Defined in

[core/src/user.ts:636](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L636)

___

### findByHandle

▸ **findByHandle**(`handle`): ``null`` \| [`IQUser`](user.IQUser.md)

Find user by handle

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

``null`` \| [`IQUser`](user.IQUser.md)

#### Defined in

[core/src/user.ts:626](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L626)

___

### newest

▸ **newest**(`limit?`): [`IUserData`](../interfaces/user.IUserData.md)[]

Get new users

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `10` |

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Defined in

[core/src/user.ts:684](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L684)

___

### recentlyActive

▸ **recentlyActive**(`limit?`): [`IUserData`](../interfaces/user.IUserData.md)[]

Get recently active users

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `10` |

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Defined in

[core/src/user.ts:674](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L674)

___

### topByCalls

▸ **topByCalls**(`limit?`): [`IUserData`](../interfaces/user.IUserData.md)[]

Get top users by calls

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `10` |

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Defined in

[core/src/user.ts:654](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L654)

___

### topByPosts

▸ **topByPosts**(`limit?`): [`IUserData`](../interfaces/user.IUserData.md)[]

Get top users by posts

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `10` |

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Defined in

[core/src/user.ts:664](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L664)
