# Class: IQConfig

[config](../modules/config.md).IQConfig

IQConfig class for managing BBS configuration

## Table of contents

### Constructors

- [constructor](config.IQConfig.md#constructor)

### Accessors

- [display](config.IQConfig.md#display)
- [logging](config.IQConfig.md#logging)
- [network](config.IQConfig.md#network)
- [paths](config.IQConfig.md#paths)
- [security](config.IQConfig.md#security)
- [server](config.IQConfig.md#server)

### Methods

- [deleteCustom](config.IQConfig.md#deletecustom)
- [ensureDirectories](config.IQConfig.md#ensuredirectories)
- [fromJSON](config.IQConfig.md#fromjson)
- [get](config.IQConfig.md#get)
- [getAll](config.IQConfig.md#getall)
- [getCustom](config.IQConfig.md#getcustom)
- [isLoaded](config.IQConfig.md#isloaded)
- [load](config.IQConfig.md#load)
- [reset](config.IQConfig.md#reset)
- [resetSection](config.IQConfig.md#resetsection)
- [save](config.IQConfig.md#save)
- [set](config.IQConfig.md#set)
- [setAll](config.IQConfig.md#setall)
- [setCustom](config.IQConfig.md#setcustom)
- [toJSON](config.IQConfig.md#tojson)
- [validate](config.IQConfig.md#validate)

## Constructors

### constructor

• **new IQConfig**(`configPath?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configPath` | `string` | `"./iniquity.json"` |

#### Defined in

[core/src/config.ts:185](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L185)

## Accessors

### display

• `get` **display**(): [`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)

Get display configuration

#### Returns

[`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)

#### Defined in

[core/src/config.ts:312](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L312)

• `set` **display**(`config`): `void`

Set display configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:319](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L319)

___

### logging

• `get` **logging**(): [`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)

Get logging configuration

#### Returns

[`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)

#### Defined in

[core/src/config.ts:354](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L354)

• `set` **logging**(`config`): `void`

Set logging configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:361](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L361)

___

### network

• `get` **network**(): [`INetworkConfig`](../interfaces/config.INetworkConfig.md)

Get network configuration

#### Returns

[`INetworkConfig`](../interfaces/config.INetworkConfig.md)

#### Defined in

[core/src/config.ts:340](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L340)

• `set` **network**(`config`): `void`

Set network configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`INetworkConfig`](../interfaces/config.INetworkConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:347](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L347)

___

### paths

• `get` **paths**(): [`IPathsConfig`](../interfaces/config.IPathsConfig.md)

Get paths configuration

#### Returns

[`IPathsConfig`](../interfaces/config.IPathsConfig.md)

#### Defined in

[core/src/config.ts:298](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L298)

• `set` **paths**(`config`): `void`

Set paths configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IPathsConfig`](../interfaces/config.IPathsConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:305](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L305)

___

### security

• `get` **security**(): [`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)

Get security configuration

#### Returns

[`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)

#### Defined in

[core/src/config.ts:326](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L326)

• `set` **security**(`config`): `void`

Set security configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:333](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L333)

___

### server

• `get` **server**(): [`IServerConfig`](../interfaces/config.IServerConfig.md)

Get server configuration

#### Returns

[`IServerConfig`](../interfaces/config.IServerConfig.md)

#### Defined in

[core/src/config.ts:284](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L284)

• `set` **server**(`config`): `void`

Set server configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IServerConfig`](../interfaces/config.IServerConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:291](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L291)

## Methods

### deleteCustom

▸ **deleteCustom**(`key`): `boolean`

Delete custom configuration value

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:382](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L382)

___

### ensureDirectories

▸ **ensureDirectories**(): `void`

Ensure all required directories exist

#### Returns

`void`

#### Defined in

[core/src/config.ts:486](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L486)

___

### fromJSON

▸ **fromJSON**(`json`): `boolean`

Import configuration from JSON string

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:517](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L517)

___

### get

▸ **get**<`T`\>(`path`): `undefined` \| `T`

Get a specific config value by path (e.g., 'server.name')

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[core/src/config.ts:393](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L393)

___

### getAll

▸ **getAll**(): [`IBBSConfig`](../interfaces/config.IBBSConfig.md)

Get full configuration

#### Returns

[`IBBSConfig`](../interfaces/config.IBBSConfig.md)

#### Defined in

[core/src/config.ts:269](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L269)

___

### getCustom

▸ **getCustom**<`T`\>(`key`): `undefined` \| `T`

Get custom configuration value

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[core/src/config.ts:368](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L368)

___

### isLoaded

▸ **isLoaded**(): `boolean`

Check if config was loaded from file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:262](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L262)

___

### load

▸ **load**(): `boolean`

Load configuration from file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:223](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L223)

___

### reset

▸ **reset**(): `void`

Reset configuration to defaults

#### Returns

`void`

#### Defined in

[core/src/config.ts:431](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L431)

___

### resetSection

▸ **resetSection**(`section`): `void`

Reset a specific section to defaults

#### Parameters

| Name | Type |
| :------ | :------ |
| `section` | keyof [`IBBSConfig`](../interfaces/config.IBBSConfig.md) |

#### Returns

`void`

#### Defined in

[core/src/config.ts:438](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L438)

___

### save

▸ **save**(): `boolean`

Save configuration to file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:243](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L243)

___

### set

▸ **set**(`path`, `value`): `boolean`

Set a specific config value by path (e.g., 'server.name')

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:411](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L411)

___

### setAll

▸ **setAll**(`config`): `void`

Set full configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IBBSConfig`](../interfaces/config.IBBSConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:277](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L277)

___

### setCustom

▸ **setCustom**(`key`, `value`): `void`

Set custom configuration value

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[core/src/config.ts:375](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L375)

___

### toJSON

▸ **toJSON**(): `string`

Export configuration as JSON string

#### Returns

`string`

#### Defined in

[core/src/config.ts:510](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L510)

___

### validate

▸ **validate**(): `Object`

Validate configuration

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `string`[] |
| `valid` | `boolean` |

#### Defined in

[core/src/config.ts:447](https://github.com/iniquitybbs/iniquity/blob/7f71270/packages/core/src/config.ts#L447)
