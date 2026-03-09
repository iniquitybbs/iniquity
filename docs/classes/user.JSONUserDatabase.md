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

[core/src/user.ts:132](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L132)

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

[core/src/user.ts:183](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L183)

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

[core/src/user.ts:230](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L230)

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

[core/src/user.ts:243](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L243)

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

[core/src/user.ts:251](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L251)

___

### getNextId

▸ **getNextId**(): `number`

#### Returns

`number`

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[getNextId](../interfaces/user.IUserDatabase.md#getnextid)

#### Defined in

[core/src/user.ts:261](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L261)

___

### list

▸ **list**(): [`IUserData`](../interfaces/user.IUserData.md)[]

#### Returns

[`IUserData`](../interfaces/user.IUserData.md)[]

#### Implementation of

[IUserDatabase](../interfaces/user.IUserDatabase.md).[list](../interfaces/user.IUserDatabase.md#list)

#### Defined in

[core/src/user.ts:247](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L247)

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

[core/src/user.ts:167](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L167)

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

[core/src/user.ts:171](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/user.ts#L171)
