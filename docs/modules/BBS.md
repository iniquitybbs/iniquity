[Iniquity API reference - v3.0.0](../README.md) / [Exports](../modules.md) / BBS

# Module: BBS

The Iniquity Bulletin Board Software

**`summary`** This is the Iniquity core bbs library. It's the foundation of any Iniquity application.

**`example`**
```typescript
import BBS from "@iniquitybbs/core"

const mybbs = new BBS()

mybbs.artwork({ filename: "./path/to/textfile.ans" }).render({ speed: 10 })

mybbs.say("Pretty cool, right???".newlines(2).color("bright cyan").center()).pause()

mybbs.disconnect()
```

## Table of contents

### Classes

- [Artwork](../classes/BBS.Artwork.md)
- [BBS](../classes/BBS.BBS-1.md)
- [Group](../classes/BBS.Group.md)
- [Menu](../classes/BBS.Menu.md)
- [Network](../classes/BBS.Network.md)
- [Text](../classes/BBS.Text.md)
- [User](../classes/BBS.User.md)

### Interfaces

- [IArtworkOptions](../interfaces/BBS.IArtworkOptions.md)
- [IArtworkRenderFunctions](../interfaces/BBS.IArtworkRenderFunctions.md)
- [IArtworkRenderOptions](../interfaces/BBS.IArtworkRenderOptions.md)
- [IBBSConfigParams](../interfaces/BBS.IBBSConfigParams.md)
- [IBBSPrintFunctions](../interfaces/BBS.IBBSPrintFunctions.md)
- [IBBSSayFunctions](../interfaces/BBS.IBBSSayFunctions.md)
- [IBBSSayOptions](../interfaces/BBS.IBBSSayOptions.md)
- [IIniquityOptions](../interfaces/BBS.IIniquityOptions.md)
- [IMenuCommand](../interfaces/BBS.IMenuCommand.md)
- [IMenuCommands](../interfaces/BBS.IMenuCommands.md)
- [IMenuOptions](../interfaces/BBS.IMenuOptions.md)
- [IQPauseOptions](../interfaces/BBS.IQPauseOptions.md)
- [IQPrintOptions](../interfaces/BBS.IQPrintOptions.md)
- [IQStringUtils](../interfaces/BBS.IQStringUtils.md)
- [IUserOptions](../interfaces/BBS.IUserOptions.md)

### Variables

- [default](BBS.md#default)

## Variables

### default

• **default**: typeof [`BBS`](../classes/BBS.BBS-1.md)

#### Defined in

modules/iniquity.ts:630
