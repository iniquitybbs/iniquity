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

[core/src/user.ts:96](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L96)

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

[core/src/user.ts:97](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L97)

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

[core/src/user.ts:98](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L98)

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

[core/src/user.ts:100](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L100)

___

### getNextId

▸ **getNextId**(): `number`

#### Returns

`number`

#### Defined in

[core/src/user.ts:101](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L101)

___

### list

▸ **list**(): [`IUserData`](user.IUserData.md)[]

#### Returns

[`IUserData`](user.IUserData.md)[]

#### Defined in

[core/src/user.ts:99](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L99)

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

[core/src/user.ts:94](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L94)

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

[core/src/user.ts:95](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/user.ts#L95)
