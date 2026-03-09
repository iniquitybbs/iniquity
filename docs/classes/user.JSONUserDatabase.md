# Class: JSONUserDatabase

[user](../modules/user.md).JSONUserDatabase

JSON file-based user database

## Implements

- [`IUserDatabase`](../interfaces/user.IUserDatabase.md)

## Table of contents

### Constructors

- [constructor](user.JSONUserDatabase.md#constructor)

### Methods

- [create](user.JSONUserDatabase.md#create)
- [delete](user.JSONUserDatabase.md#delete)
- [exists](user.JSONUserDatabase.md#exists)
- [findByEmail](user.JSONUserDatabase.md#findbyemail)
- [getNextId](user.JSONUserDatabase.md#getnextid)
- [list](user.JSONUserDatabase.md#list)
- [load](user.JSONUserDatabase.md#load)
- [save](user.JSONUserDatabase.md#save)

## Constructors

### constructor

• **new JSONUserDatabase**(`dataPath?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataPath` | `string` | `"./data/users"` |

#### Defined in

[core/src/user.ts:112](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L112)

## Methods

### create

▸ **create**(`userData`): ``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userData` | `Partial`<[`IUserData`](../interfaces/user.IUserData.md)\> |

#### Returns

``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[create](../interfaces/user.IUserDatabase.md#create)

#### Defined in

[core/src/user.ts:163](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L163)

___

### delete

▸ **delete**(`handle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

`boolean`

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[delete](../interfaces/user.IUserDatabase.md#delete)

#### Defined in

[core/src/user.ts:210](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L210)

___

### exists

▸ **exists**(`handle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

`boolean`

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[exists](../interfaces/user.IUserDatabase.md#exists)

#### Defined in

[core/src/user.ts:223](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L223)

___

### findByEmail

▸ **findByEmail**(`email`): ``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |

#### Returns

``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[findByEmail](../interfaces/user.IUserDatabase.md#findbyemail)

#### Defined in

[core/src/user.ts:231](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L231)

___

### getNextId

▸ **getNextId**(): `number`

#### Returns

`number`

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[getNextId](../interfaces/user.IUserDatabase.md#getnextid)

#### Defined in

[core/src/user.ts:241](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L241)

___

### list

▸ **list**(): [`IUserData`](../interfaces/user.IUserData.md)[]

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[list](../interfaces/user.IUserDatabase.md#list)

#### Defined in

[core/src/user.ts:227](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L227)

___

### load

▸ **load**(`handle`): ``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

``null`` \| [`IUserData`](../interfaces/user.IUserData.md)

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[load](../interfaces/user.IUserDatabase.md#load)

#### Defined in

[core/src/user.ts:147](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L147)

___

### save

▸ **save**(`user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUserData`](../interfaces/user.IUserData.md) |

#### Returns

`boolean`

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[save](../interfaces/user.IUserDatabase.md#save)

#### Defined in

[core/src/user.ts:151](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/user.ts#L151)
