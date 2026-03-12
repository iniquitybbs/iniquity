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

[core/src/user.ts:301](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L301)

## Accessors

### access

• `get` **access**(): [`UserAccessLevel`](../enums/user.UserAccessLevel.md)

Get user access level

#### Returns

[`UserAccessLevel`](../enums/user.UserAccessLevel.md)

#### Defined in

[core/src/user.ts:329](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L329)

• `set` **access**(`level`): `void`

Set user access level

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`UserAccessLevel`](../enums/user.UserAccessLevel.md) |

#### Returns

`void`

#### Defined in

[core/src/user.ts:336](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L336)

___

### email

• `get` **email**(): `string`

Get user email

#### Returns

`string`

#### Defined in

[core/src/user.ts:345](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L345)

___

### handle

• `get` **handle**(): `string`

Get user handle

#### Returns

`string`

#### Defined in

[core/src/user.ts:315](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L315)

___

### id

• `get` **id**(): `number`

Get user ID

#### Returns

`number`

#### Defined in

[core/src/user.ts:322](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L322)

___

### location

• `get` **location**(): `string`

Get user location

#### Returns

`string`

#### Defined in

[core/src/user.ts:359](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L359)

___

### loggedIn

• `get` **loggedIn**(): `boolean`

Check if user is currently logged in

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:389](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L389)

___

### realName

• `get` **realName**(): `string`

Get user real name

#### Returns

`string`

#### Defined in

[core/src/user.ts:352](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L352)

___

### stats

• `get` **stats**(): [`IUserStats`](../interfaces/user.IUserStats.md)

Get user statistics

#### Returns

[`IUserStats`](../interfaces/user.IUserStats.md)

#### Defined in

[core/src/user.ts:366](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L366)

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

[core/src/user.ts:581](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L581)

___

### delete

▸ **delete**(): `boolean`

Delete user

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:489](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L489)

___

### exists

▸ **exists**(): `boolean`

Check if user exists in database

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:382](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L382)

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

[core/src/user.ts:502](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L502)

___

### getRawData

▸ **getRawData**(): ``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

Get raw user data

#### Returns

``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Defined in

[core/src/user.ts:561](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L561)

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

[core/src/user.ts:522](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L522)

___

### incrementPosts

▸ **incrementPosts**(): `void`

Increment post count

#### Returns

`void`

#### Defined in

[core/src/user.ts:529](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L529)

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

[core/src/user.ts:411](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L411)

___

### logout

▸ **logout**(): `void`

Logout user

#### Returns

`void`

#### Defined in

[core/src/user.ts:440](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L440)

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

[core/src/user.ts:550](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L550)

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

[core/src/user.ts:539](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L539)

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

[core/src/user.ts:453](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L453)

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

[core/src/user.ts:592](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L592)

___

### save

▸ **save**(): `boolean`

Save user data

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:481](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L481)

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

[core/src/user.ts:509](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L509)

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

[core/src/user.ts:568](https://github.com/iniquitybbs/iniquity/blob/e56a878/packages/core/src/user.ts#L568)
