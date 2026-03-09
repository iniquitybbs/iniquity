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

[core/src/config.ts:113](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/config.ts#L113)

## Functions

### getConfig

▸ **getConfig**(): [`IQConfig`](../classes/config.IQConfig.md)

#### Returns

[`IQConfig`](../classes/config.IQConfig.md)

#### Defined in

[core/src/config.ts:533](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/config.ts#L533)

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

[core/src/config.ts:544](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/config.ts#L544)

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

[core/src/config.ts:540](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/config.ts#L540)
