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

[core/src/config.ts:133](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L133)

## Functions

### getConfig

▸ **getConfig**(): [`IQConfig`](../classes/config.IQConfig.md)

#### Returns

[`IQConfig`](../classes/config.IQConfig.md)

#### Defined in

[core/src/config.ts:553](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L553)

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

[core/src/config.ts:564](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L564)

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

[core/src/config.ts:560](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/config.ts#L560)
