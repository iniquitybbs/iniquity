# Class: IQBaseConfig

[Core](../modules/Core.md).IQBaseConfig

Iniquity Core BBS

**`summary`** The main class you will use as it wraps all the other classes in a unified API.

**`example`**
```typescript
import BBS from "@iniquitybbs/core/dist/iniquity"

const mybbs = new BBS()

myIniquity.say("Say hi!").pause()

myIniquity.hangup()

```

## Hierarchy

- **`IQBaseConfig`**

  ↳ [`Iniquity`](Core.Iniquity.md)

  ↳ [`Artwork`](Core.Artwork.md)

  ↳ [`IQModuleOptions`](../interfaces/Core.IQModuleOptions.md)

## Table of contents

### Constructors

- [constructor](Core.IQBaseConfig.md#constructor)

### Properties

- [access](Core.IQBaseConfig.md#access)
- [assets](Core.IQBaseConfig.md#assets)
- [basepath](Core.IQBaseConfig.md#basepath)
- [computed](Core.IQBaseConfig.md#computed)
- [data](Core.IQBaseConfig.md#data)
- [encoding](Core.IQBaseConfig.md#encoding)

## Constructors

### constructor

• **new IQBaseConfig**()

## Properties

### access

• **access**: [`IQModuleACLS`](../enums/Core.IQModuleACLS.md)

#### Defined in

[packages/core/src/index.ts:311](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L311)

___

### assets

• **assets**: `string`

#### Defined in

[packages/core/src/index.ts:310](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L310)

___

### basepath

• **basepath**: `string`

#### Defined in

[packages/core/src/index.ts:309](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L309)

___

### computed

• **computed**: `any`

#### Defined in

[packages/core/src/index.ts:314](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L314)

___

### data

• **data**: [`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

#### Defined in

[packages/core/src/index.ts:313](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L313)

___

### encoding

• **encoding**: ``"CP437"`` \| ``"UTF8"``

#### Defined in

[packages/core/src/index.ts:312](https://github.com/iniquitybbs/iniquity/blob/29195b9/packages/core/src/index.ts#L312)
