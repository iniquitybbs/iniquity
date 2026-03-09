# Class: IQNetwork

[network](../modules/network.md).IQNetwork

IQNetwork class for inter-BBS and external connectivity

## Table of contents

### Constructors

- [constructor](network.IQNetwork.md#constructor)

### Methods

- [connectTelnet](network.IQNetwork.md#connecttelnet)
- [get](network.IQNetwork.md#get)
- [getLocalAddress](network.IQNetwork.md#getlocaladdress)
- [getNode](network.IQNetwork.md#getnode)
- [getOfflineNodes](network.IQNetwork.md#getofflinenodes)
- [getOnlineNodes](network.IQNetwork.md#getonlinenodes)
- [httpRequest](network.IQNetwork.md#httprequest)
- [listNodes](network.IQNetwork.md#listnodes)
- [ping](network.IQNetwork.md#ping)
- [post](network.IQNetwork.md#post)
- [registerNode](network.IQNetwork.md#registernode)
- [setLocalAddress](network.IQNetwork.md#setlocaladdress)
- [updateAllNodeStatuses](network.IQNetwork.md#updateallnodestatuses)
- [updateNodeStatus](network.IQNetwork.md#updatenodestatus)
- [formatFidoAddress](network.IQNetwork.md#formatfidoaddress)
- [parseFidoAddress](network.IQNetwork.md#parsefidoaddress)

## Constructors

### constructor

• **new IQNetwork**()

#### Defined in

[core/src/network.ts:71](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L71)

## Methods

### connectTelnet

▸ **connectTelnet**(`options`): `Promise`<`Socket`\>

Connect to a telnet server

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`INetworkConnectionOptions`](../interfaces/network.INetworkConnectionOptions.md) |

#### Returns

`Promise`<`Socket`\>

#### Defined in

[core/src/network.ts:264](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L264)

___

### get

▸ **get**(`url`): `Promise`<`string`\>

Simple GET request

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/network.ts:244](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L244)

___

### getLocalAddress

▸ **getLocalAddress**(): ``null`` \| [`IFidoAddress`](../interfaces/network.IFidoAddress.md)

Get local FidoNet address

#### Returns

``null`` \| [`IFidoAddress`](../interfaces/network.IFidoAddress.md)

#### Defined in

[core/src/network.ts:83](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L83)

___

### getNode

▸ **getNode**(`id`): `undefined` \| [`INetworkNode`](../interfaces/network.INetworkNode.md)

Get a network node

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`INetworkNode`](../interfaces/network.INetworkNode.md)

#### Defined in

[core/src/network.ts:123](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L123)

___

### getOfflineNodes

▸ **getOfflineNodes**(): [`INetworkNode`](../interfaces/network.INetworkNode.md)[]

Get offline nodes

#### Returns

[`INetworkNode`](../interfaces/network.INetworkNode.md)[]

#### Defined in

[core/src/network.ts:299](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L299)

___

### getOnlineNodes

▸ **getOnlineNodes**(): [`INetworkNode`](../interfaces/network.INetworkNode.md)[]

Get online nodes

#### Returns

[`INetworkNode`](../interfaces/network.INetworkNode.md)[]

#### Defined in

[core/src/network.ts:292](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L292)

___

### httpRequest

▸ **httpRequest**(`url`, `options?`): `Promise`<{ `body`: `string` ; `headers`: `Record`<`string`, `string`\> ; `status`: `number`  }\>

Make HTTP/HTTPS request

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `Object` |
| `options.body?` | `string` |
| `options.headers?` | `Record`<`string`, `string`\> |
| `options.method?` | `string` |
| `options.timeout?` | `number` |

#### Returns

`Promise`<{ `body`: `string` ; `headers`: `Record`<`string`, `string`\> ; `status`: `number`  }\>

#### Defined in

[core/src/network.ts:193](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L193)

___

### listNodes

▸ **listNodes**(): [`INetworkNode`](../interfaces/network.INetworkNode.md)[]

List all nodes

#### Returns

[`INetworkNode`](../interfaces/network.INetworkNode.md)[]

#### Defined in

[core/src/network.ts:130](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L130)

___

### ping

▸ **ping**(`host`, `port`, `timeout?`): `Promise`<`boolean`\>

Check if a host is reachable

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `host` | `string` | `undefined` |
| `port` | `number` | `undefined` |
| `timeout` | `number` | `5000` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/network.ts:137](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L137)

___

### post

▸ **post**(`url`, `body`, `contentType?`): `Promise`<`string`\>

Simple POST request

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `body` | `string` | `undefined` |
| `contentType` | `string` | `"application/json"` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/network.ts:252](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L252)

___

### registerNode

▸ **registerNode**(`node`): `void`

Register a network node

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`INetworkNode`](../interfaces/network.INetworkNode.md) |

#### Returns

`void`

#### Defined in

[core/src/network.ts:116](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L116)

___

### setLocalAddress

▸ **setLocalAddress**(`address`): `void`

Set local FidoNet address

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`IFidoAddress`](../interfaces/network.IFidoAddress.md) |

#### Returns

`void`

#### Defined in

[core/src/network.ts:76](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L76)

___

### updateAllNodeStatuses

▸ **updateAllNodeStatuses**(): `Promise`<`Map`<`string`, `boolean`\>\>

Update all node statuses

#### Returns

`Promise`<`Map`<`string`, `boolean`\>\>

#### Defined in

[core/src/network.ts:179](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L179)

___

### updateNodeStatus

▸ **updateNodeStatus**(`nodeId`): `Promise`<`boolean`\>

Update node status

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/network.ts:165](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L165)

___

### formatFidoAddress

▸ `Static` **formatFidoAddress**(`address`): `string`

Format FidoNet address to string

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`IFidoAddress`](../interfaces/network.IFidoAddress.md) |

#### Returns

`string`

#### Defined in

[core/src/network.ts:105](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L105)

___

### parseFidoAddress

▸ `Static` **parseFidoAddress**(`address`): ``null`` \| [`IFidoAddress`](../interfaces/network.IFidoAddress.md)

Parse FidoNet address string (zone:net/node.point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

``null`` \| [`IFidoAddress`](../interfaces/network.IFidoAddress.md)

#### Defined in

[core/src/network.ts:90](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/core/src/network.ts#L90)
