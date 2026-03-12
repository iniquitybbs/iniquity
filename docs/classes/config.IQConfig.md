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

[core/src/config.ts:208](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L208)

## Accessors

### display

• `get` **display**(): [`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)

Get display configuration

#### Returns

[`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)

#### Defined in

[core/src/config.ts:335](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L335)

• `set` **display**(`config`): `void`

Set display configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IDisplayConfig`](../interfaces/config.IDisplayConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:342](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L342)

___

### logging

• `get` **logging**(): [`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)

Get logging configuration

#### Returns

[`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)

#### Defined in

[core/src/config.ts:377](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L377)

• `set` **logging**(`config`): `void`

Set logging configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`ILoggingConfig`](../interfaces/config.ILoggingConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:384](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L384)

___

### network

• `get` **network**(): [`INetworkConfig`](../interfaces/config.INetworkConfig.md)

Get network configuration

#### Returns

[`INetworkConfig`](../interfaces/config.INetworkConfig.md)

#### Defined in

[core/src/config.ts:363](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L363)

• `set` **network**(`config`): `void`

Set network configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`INetworkConfig`](../interfaces/config.INetworkConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:370](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L370)

___

### paths

• `get` **paths**(): [`IPathsConfig`](../interfaces/config.IPathsConfig.md)

Get paths configuration

#### Returns

[`IPathsConfig`](../interfaces/config.IPathsConfig.md)

#### Defined in

[core/src/config.ts:321](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L321)

• `set` **paths**(`config`): `void`

Set paths configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IPathsConfig`](../interfaces/config.IPathsConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:328](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L328)

___

### security

• `get` **security**(): [`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)

Get security configuration

#### Returns

[`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)

#### Defined in

[core/src/config.ts:349](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L349)

• `set` **security**(`config`): `void`

Set security configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`ISecurityConfig`](../interfaces/config.ISecurityConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:356](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L356)

___

### server

• `get` **server**(): [`IServerConfig`](../interfaces/config.IServerConfig.md)

Get server configuration

#### Returns

[`IServerConfig`](../interfaces/config.IServerConfig.md)

#### Defined in

[core/src/config.ts:307](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L307)

• `set` **server**(`config`): `void`

Set server configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`IServerConfig`](../interfaces/config.IServerConfig.md)\> |

#### Returns

`void`

#### Defined in

[core/src/config.ts:314](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L314)

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

[core/src/config.ts:405](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L405)

___

### ensureDirectories

▸ **ensureDirectories**(): `void`

Ensure all required directories exist

#### Returns

`void`

#### Defined in

[core/src/config.ts:509](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L509)

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

[core/src/config.ts:540](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L540)

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

[core/src/config.ts:416](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L416)

___

### getAll

▸ **getAll**(): [`IBBSConfig`](../interfaces/config.IBBSConfig.md)

Get full configuration

#### Returns

[`IBBSConfig`](../interfaces/config.IBBSConfig.md)

#### Defined in

[core/src/config.ts:292](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L292)

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

[core/src/config.ts:391](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L391)

___

### isLoaded

▸ **isLoaded**(): `boolean`

Check if config was loaded from file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:285](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L285)

___

### load

▸ **load**(): `boolean`

Load configuration from file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:246](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L246)

___

### reset

▸ **reset**(): `void`

Reset configuration to defaults

#### Returns

`void`

#### Defined in

[core/src/config.ts:454](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L454)

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

[core/src/config.ts:461](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L461)

___

### save

▸ **save**(): `boolean`

Save configuration to file

#### Returns

`boolean`

#### Defined in

[core/src/config.ts:266](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L266)

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

[core/src/config.ts:434](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L434)

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

[core/src/config.ts:300](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L300)

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

[core/src/config.ts:398](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L398)

___

### toJSON

▸ **toJSON**(): `string`

Export configuration as JSON string

#### Returns

`string`

#### Defined in

[core/src/config.ts:533](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L533)

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

[core/src/config.ts:470](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L470)
