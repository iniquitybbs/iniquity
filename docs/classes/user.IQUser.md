# Class: IQUser

[user](../modules/user.md).IQUser

User class for managing individual users

## Table of contents

### Constructors

- [constructor](user.IQUser.md#constructor)

### Accessors

- [access](user.IQUser.md#access)
- [email](user.IQUser.md#email)
- [handle](user.IQUser.md#handle)
- [id](user.IQUser.md#id)
- [location](user.IQUser.md#location)
- [loggedIn](user.IQUser.md#loggedin)
- [realName](user.IQUser.md#realname)
- [stats](user.IQUser.md#stats)

### Methods

- [changePassword](user.IQUser.md#changepassword)
- [delete](user.IQUser.md#delete)
- [exists](user.IQUser.md#exists)
- [getCustom](user.IQUser.md#getcustom)
- [getRawData](user.IQUser.md#getrawdata)
- [hasAccess](user.IQUser.md#hasaccess)
- [incrementPosts](user.IQUser.md#incrementposts)
- [login](user.IQUser.md#login)
- [logout](user.IQUser.md#logout)
- [recordDownload](user.IQUser.md#recorddownload)
- [recordUpload](user.IQUser.md#recordupload)
- [register](user.IQUser.md#register)
- [resetPassword](user.IQUser.md#resetpassword)
- [save](user.IQUser.md#save)
- [setCustom](user.IQUser.md#setcustom)
- [update](user.IQUser.md#update)

## Constructors

### constructor

• **new IQUser**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IUserOptions`](../interfaces/user.IUserOptions.md) |

#### Defined in

[core/src/user.ts:281](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L281)

## Accessors

### access

• `get` **access**(): [`UserAccessLevel`](../enums/user.UserAccessLevel.md)

Get user access level

#### Returns

[`UserAccessLevel`](../enums/user.UserAccessLevel.md)

#### Defined in

[core/src/user.ts:309](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L309)

• `set` **access**(`level`): `void`

Set user access level

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`UserAccessLevel`](../enums/user.UserAccessLevel.md) |

#### Returns

`void`

#### Defined in

[core/src/user.ts:316](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L316)

___

### email

• `get` **email**(): `string`

Get user email

#### Returns

`string`

#### Defined in

[core/src/user.ts:325](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L325)

___

### handle

• `get` **handle**(): `string`

Get user handle

#### Returns

`string`

#### Defined in

[core/src/user.ts:295](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L295)

___

### id

• `get` **id**(): `number`

Get user ID

#### Returns

`number`

#### Defined in

[core/src/user.ts:302](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L302)

___

### location

• `get` **location**(): `string`

Get user location

#### Returns

`string`

#### Defined in

[core/src/user.ts:339](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L339)

___

### loggedIn

• `get` **loggedIn**(): `boolean`

Check if user is currently logged in

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:369](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L369)

___

### realName

• `get` **realName**(): `string`

Get user real name

#### Returns

`string`

#### Defined in

[core/src/user.ts:332](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L332)

___

### stats

• `get` **stats**(): [`IUserStats`](../interfaces/user.IUserStats.md)

Get user statistics

#### Returns

[`IUserStats`](../interfaces/user.IUserStats.md)

#### Defined in

[core/src/user.ts:346](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L346)

## Methods

### changePassword

▸ **changePassword**(`oldPassword`, `newPassword`): `boolean`

Change password

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPassword` | `string` |
| `newPassword` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:561](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L561)

___

### delete

▸ **delete**(): `boolean`

Delete user

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:469](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L469)

___

### exists

▸ **exists**(): `boolean`

Check if user exists in database

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:362](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L362)

___

### getCustom

▸ **getCustom**(`key`): `any`

Get custom user property

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[core/src/user.ts:482](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L482)

___

### getRawData

▸ **getRawData**(): ``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

Get raw user data

#### Returns

``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Defined in

[core/src/user.ts:541](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L541)

___

### hasAccess

▸ **hasAccess**(`requiredLevel`): `boolean`

Check if user has required access level

#### Parameters

| Name | Type |
| :------ | :------ |
| `requiredLevel` | [`UserAccessLevel`](../enums/user.UserAccessLevel.md) |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:502](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L502)

___

### incrementPosts

▸ **incrementPosts**(): `void`

Increment post count

#### Returns

`void`

#### Defined in

[core/src/user.ts:509](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L509)

___

### login

▸ **login**(`password?`): `boolean`

Attempt to login

#### Parameters

| Name | Type |
| :------ | :------ |
| `password?` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:391](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L391)

___

### logout

▸ **logout**(): `void`

Logout user

#### Returns

`void`

#### Defined in

[core/src/user.ts:420](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L420)

___

### recordDownload

▸ **recordDownload**(`bytes`): `void`

Record download

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Defined in

[core/src/user.ts:530](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L530)

___

### recordUpload

▸ **recordUpload**(`bytes`): `void`

Record upload

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Defined in

[core/src/user.ts:519](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L519)

___

### register

▸ **register**(`password?`): `boolean`

Register a new user

#### Parameters

| Name | Type |
| :------ | :------ |
| `password?` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:433](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L433)

___

### resetPassword

▸ **resetPassword**(`newPassword`): `boolean`

Reset password (admin function)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPassword` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:572](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L572)

___

### save

▸ **save**(): `boolean`

Save user data

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:461](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L461)

___

### setCustom

▸ **setCustom**(`key`, `value`): `void`

Set custom user property

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[core/src/user.ts:489](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L489)

___

### update

▸ **update**(`updates`): `boolean`

Update user data

#### Parameters

| Name | Type |
| :------ | :------ |
| `updates` | `Partial`<[`IUserData`](../interfaces/user.IUserData.md)\> |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:548](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L548)
