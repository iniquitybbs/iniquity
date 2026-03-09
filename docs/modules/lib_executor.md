# Module: lib/executor

TypeScript Program Executor

**`Summary`**

Execute BBS programs written in TypeScript

## Table of contents

### Functions

- [executeCode](lib_executor.md#executecode)
- [executeProgram](lib_executor.md#executeprogram)

## Functions

### executeCode

▸ **executeCode**(`code`, `runtime`): `Promise`<`void`\>

Execute code string directly (for testing)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `runtime` | `Runtime` |

#### Returns

`Promise`<`void`\>

#### Defined in

[iniquity/src/lib/executor.ts:148](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/lib/executor.ts#L148)

___

### executeProgram

▸ **executeProgram**(`programPath`, `runtime`, `session`): `Promise`<`void`\>

Execute a BBS program

#### Parameters

| Name | Type |
| :------ | :------ |
| `programPath` | `string` |
| `runtime` | `Runtime` |
| `session` | [`Session`](../classes/lib_session.Session.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[iniquity/src/lib/executor.ts:16](https://github.com/iniquitybbs/iniquity/blob/6d665ac/packages/iniquity/src/lib/executor.ts#L16)
