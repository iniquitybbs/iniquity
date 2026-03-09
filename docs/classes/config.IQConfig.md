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

[core/src/config.ts:205](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L205)

## Accessors

### display

• `get` **display**(): [`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)

Get display configuration

#### Returns

[`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)

#### Defined in

[core/src/config.ts:332](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L332)

• `set` **display**(`config`): `void`

Set display configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:339](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L339)

___

### logging

• `get` **logging**(): [`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)

Get logging configuration

#### Returns

[`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)

#### Defined in

[core/src/config.ts:374](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L374)

• `set` **logging**(`config`): `void`

Set logging configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:381](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L381)

___

### network

• `get` **network**(): [`INetworkConfig`](../interfaces/config.INetworkConfig.md)

Get network configuration

#### Returns

[`INetworkConfig`](../interfaces/config.INetworkConfig.md)

#### Defined in

[core/src/config.ts:360](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L360)

• `set` **network**(`config`): `void`

Set network configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`INetworkConfig`](../interfaces/config.INetworkConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:367](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L367)

___

### paths

• `get` **paths**(): [`IPathsConfig`](../interfaces/config.IPathsConfig.md)

Get paths configuration

#### Returns

[`IPathsConfig`](../interfaces/config.IPathsConfig.md)

#### Defined in

[core/src/config.ts:318](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L318)

• `set` **paths**(`config`): `void`

Set paths configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IPathsConfig`](../interfaces/config.IPathsConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:325](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L325)

___

### security

• `get` **security**(): [`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)

Get security configuration

#### Returns

[`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)

#### Defined in

[core/src/config.ts:346](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L346)

• `set` **security**(`config`): `void`

Set security configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:353](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L353)

___

### server

• `get` **server**(): [`IServerConfig`](../interfaces/config.IServerConfig.md)

Get server configuration

#### Returns

[`IServerConfig`](../interfaces/config.IServerConfig.md)

#### Defined in

[core/src/config.ts:304](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L304)

• `set` **server**(`config`): `void`

Set server configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IServerConfig`](../interfaces/config.IServerConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:311](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L311)

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

[core/src/config.ts:402](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L402)

___

### ensureDirectories

▸ **ensureDirectories**(): `void`

Ensure all required directories exist

#### Returns

`void`

#### Defined in

[core/src/config.ts:506](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L506)

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

[core/src/config.ts:537](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L537)

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

[core/src/config.ts:413](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L413)

___

### getAll

▸ **getAll**(): [`IBBSConfig`](../interfaces/config.IBBSConfig.md)

Get full configuration

#### Returns

[`IBBSConfig`](../interfaces/config.IBBSConfig.md)

#### Defined in

[core/src/config.ts:289](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L289)

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

[core/src/config.ts:388](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L388)

___

### isLoaded

▸ **isLoaded**(): `boolean`

Check if config was loaded from file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:282](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L282)

___

### load

▸ **load**(): `boolean`

Load configuration from file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:243](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L243)

___

### reset

▸ **reset**(): `void`

Reset configuration to defaults

#### Returns

`void`

#### Defined in

[core/src/config.ts:451](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L451)

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

[core/src/config.ts:458](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L458)

___

### save

▸ **save**(): `boolean`

Save configuration to file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:263](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L263)

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

[core/src/config.ts:431](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L431)

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

[core/src/config.ts:297](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L297)

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

[core/src/config.ts:395](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L395)

___

### toJSON

▸ **toJSON**(): `string`

Export configuration as JSON string

#### Returns

`string`

#### Defined in

[core/src/config.ts:530](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L530)

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

[core/src/config.ts:467](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L467)
