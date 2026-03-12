# Module: lib/api-server

Minimal HTTP API server wrapping Ollama for BBS AI chat.
Serves POST /api/v1/ai and GET /api/v1/health.

## Table of contents

### Interfaces

- [ApiServerOptions](../interfaces/lib_api_server.ApiServerOptions.md)

### Functions

- [startApiServer](lib_api_server.md#startapiserver)

## Functions

### startApiServer

▸ **startApiServer**(`options?`): `http.Server`

Create and start an HTTP server that proxies chat requests to Ollama.
Returns the server instance so the caller can close it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ApiServerOptions`](../interfaces/lib_api_server.ApiServerOptions.md) |

#### Returns

`http.Server`

#### Defined in

[cli/src/lib/api-server.ts:257](https://github.com/iniquitybbs/iniquity/blob/6da3164/packages/cli/src/lib/api-server.ts#L257)
