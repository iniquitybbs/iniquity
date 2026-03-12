# Module: user

IQ User System

**`Summary`**

User management, authentication, and data persistence

## Table of contents

### Enumerations

- [UserAccessLevel](../enums/user.UserAccessLevel.md)

### Classes

- [IQUser](../classes/user.IQUser.md)
- [IQUserList](../classes/user.IQUserList.md)
- [JSONUserDatabase](../classes/user.JSONUserDatabase.md)

### Interfaces

- [IUserData](../interfaces/user.IUserData.md)
- [IUserDatabase](../interfaces/user.IUserDatabase.md)
- [IUserOptions](../interfaces/user.IUserOptions.md)
- [IUserStats](../interfaces/user.IUserStats.md)

### Functions

- [getUserDatabase](user.md#getuserdatabase)
- [initUserDatabase](user.md#inituserdatabase)
- [setUserDatabase](user.md#setuserdatabase)

## Functions

### getUserDatabase

▸ **getUserDatabase**(): [`IUserDatabase`](../interfaces/user.IUserDatabase.md)

#### Returns

[`IUserDatabase`](../interfaces/user.IUserDatabase.md)

#### Defined in

[core/src/user.ts:275](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L275)

___

### initUserDatabase

▸ **initUserDatabase**(`bbsPath`): `void`

Initialize the user database with a BBS-specific data path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bbsPath` | `string` | The root directory of the BBS (where iniquity.ts lives) |

#### Returns

`void`

#### Defined in

[core/src/user.ts:286](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L286)

___

### setUserDatabase

▸ **setUserDatabase**(`db`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`IUserDatabase`](../interfaces/user.IUserDatabase.md) |

#### Returns

`void`

#### Defined in

[core/src/user.ts:271](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L271)
