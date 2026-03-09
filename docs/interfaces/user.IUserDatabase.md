# Interface: IUserDatabase

[user](../modules/user.md).IUserDatabase

User database interface

## Implemented by

- [`JSONUserDatabase`](../classes/user.JSONUserDatabase.md)

## Table of contents

### Methods

- [create](user.IUserDatabase.md#create)
- [delete](user.IUserDatabase.md#delete)
- [exists](user.IUserDatabase.md#exists)
- [findByEmail](user.IUserDatabase.md#findbyemail)
- [getNextId](user.IUserDatabase.md#getnextid)
- [list](user.IUserDatabase.md#list)
- [load](user.IUserDatabase.md#load)
- [save](user.IUserDatabase.md#save)

## Methods

### create

▸ **create**(`user`): ``null`` \| [`IUserData`](user.IUserData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `Partial`<[`IUserData`](user.IUserData.md)\> |

#### Returns

``null`` \| [`IUserData`](user.IUserData.md)

#### Defined in

[core/src/user.ts:116](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L116)

___

### delete

▸ **delete**(`handle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:117](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L117)

___

### exists

▸ **exists**(`handle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:118](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L118)

___

### findByEmail

▸ **findByEmail**(`email`): ``null`` \| [`IUserData`](user.IUserData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |

#### Returns

``null`` \| [`IUserData`](user.IUserData.md)

#### Defined in

[core/src/user.ts:120](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L120)

___

### getNextId

▸ **getNextId**(): `number`

#### Returns

`number`

#### Defined in

[core/src/user.ts:121](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L121)

___

### list

▸ **list**(): [`IUserData`](user.IUserData.md)[]

#### Returns

[`IUserData`](user.IUserData.md)[]

#### Defined in

[core/src/user.ts:119](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L119)

___

### load

▸ **load**(`handle`): ``null`` \| [`IUserData`](user.IUserData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

``null`` \| [`IUserData`](user.IUserData.md)

#### Defined in

[core/src/user.ts:114](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L114)

___

### save

▸ **save**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUserData`](user.IUserData.md) |

#### Returns

`boolean`

#### Defined in

[core/src/user.ts:115](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L115)
