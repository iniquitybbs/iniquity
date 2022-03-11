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

  ↳ [`Apply`](core_src_modules_apply.Apply.md)

  ↳ [`Hangup`](core_src_modules_hangup.Hangup.md)

  ↳ [`Login`](core_src_modules_login.Login.md)

## Table of contents

### Constructors

- [constructor](Core.IQBaseConfig.md#constructor)

### Properties

- [access](Core.IQBaseConfig.md#access)
- [assets](Core.IQBaseConfig.md#assets)
- [basepath](Core.IQBaseConfig.md#basepath)
- [computed](Core.IQBaseConfig.md#computed)
- [data](Core.IQBaseConfig.md#data)

## Constructors

### constructor

• **new IQBaseConfig**()

## Properties

### access

• **access**: [`IQModuleACLS`](../enums/Core.IQModuleACLS.md)

#### Defined in

[packages/core/src/index.ts:301](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L301)

___

### assets

• **assets**: `string`

#### Defined in

[packages/core/src/index.ts:300](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L300)

___

### basepath

• **basepath**: `string`

#### Defined in

[packages/core/src/index.ts:299](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L299)

___

### computed

• **computed**: `any`

#### Defined in

[packages/core/src/index.ts:303](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L303)

___

### data

• **data**: [`IQDataModelOptions`](../interfaces/Core.IQDataModelOptions.md)

#### Defined in

[packages/core/src/index.ts:302](https://github.com/iniquitybbs/iniquity/blob/976716f/packages/core/src/index.ts#L302)
