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

[packages/core/src/index.ts:346](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L346)

___

### assets

• **assets**: `string`

#### Defined in

[packages/core/src/index.ts:345](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L345)

___

### basepath

• **basepath**: `string`

#### Defined in

[packages/core/src/index.ts:344](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L344)

___

### computed

• **computed**: `any`

#### Defined in

[packages/core/src/index.ts:349](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L349)

___

### data

• **data**: [`IQReactorOptions`](../interfaces/Core.IQReactorOptions.md)

#### Defined in

[packages/core/src/index.ts:348](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L348)

___

### encoding

• **encoding**: ``"CP437"`` \| ``"UTF8"``

#### Defined in

[packages/core/src/index.ts:347](https://github.com/iniquitybbs/iniquity/blob/ec15de2/packages/core/src/index.ts#L347)
