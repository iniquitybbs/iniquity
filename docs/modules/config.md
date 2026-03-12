# Module: config

IQ Configuration System

**`Summary`**

BBS configuration management and system settings

## Table of contents

### Classes

- [IQConfig](../classes/config.IQConfig.md)

### Interfaces

- [IBBSConfig](../interfaces/config.IBBSConfig.md)
- [IDisplayConfig](../interfaces/config.IDisplayConfig.md)
- [ILoggingConfig](../interfaces/config.ILoggingConfig.md)
- [INetworkConfig](../interfaces/config.INetworkConfig.md)
- [IPathsConfig](../interfaces/config.IPathsConfig.md)
- [ISecurityConfig](../interfaces/config.ISecurityConfig.md)
- [IServerConfig](../interfaces/config.IServerConfig.md)

### Variables

- [DEFAULT\_CONFIG](config.md#default_config)

### Functions

- [getConfig](config.md#getconfig)
- [loadConfig](config.md#loadconfig)
- [setConfig](config.md#setconfig)

## Variables

### DEFAULT\_CONFIG

• `Const` **DEFAULT\_CONFIG**: [`IBBSConfig`](../interfaces/config.IBBSConfig.md)

Default configuration values

#### Defined in

[core/src/config.ts:135](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L135)

## Functions

### getConfig

▸ **getConfig**(): [`IQConfig`](../classes/config.IQConfig.md)

#### Returns

[`IQConfig`](../classes/config.IQConfig.md)

#### Defined in

[core/src/config.ts:556](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L556)

___

### loadConfig

▸ **loadConfig**(`configPath`): [`IQConfig`](../classes/config.IQConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configPath` | `string` |

#### Returns

[`IQConfig`](../classes/config.IQConfig.md)

#### Defined in

[core/src/config.ts:567](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L567)

___

### setConfig

▸ **setConfig**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IQConfig`](../classes/config.IQConfig.md) |

#### Returns

`void`

#### Defined in

[core/src/config.ts:563](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/core/src/config.ts#L563)
