# Module: Core

Iniquity Core

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

- [Artwork](../classes/Core.Artwork.md)
- [BBS](../classes/Core.BBS.md)
- [Group](../classes/Core.Group.md)
- [Menu](../classes/Core.Menu.md)
- [Network](../classes/Core.Network.md)
- [Text](../classes/Core.Text.md)
- [User](../classes/Core.User.md)

### Interfaces

- [IArtworkOptions](../interfaces/Core.IArtworkOptions.md)
- [IArtworkRenderFunctions](../interfaces/Core.IArtworkRenderFunctions.md)
- [IArtworkRenderOptions](../interfaces/Core.IArtworkRenderOptions.md)
- [IBBSConfigParams](../interfaces/Core.IBBSConfigParams.md)
- [IBBSPrintFunctions](../interfaces/Core.IBBSPrintFunctions.md)
- [IBBSSayFunctions](../interfaces/Core.IBBSSayFunctions.md)
- [IBBSSayOptions](../interfaces/Core.IBBSSayOptions.md)
- [IIniquityOptions](../interfaces/Core.IIniquityOptions.md)
- [IMenuCommand](../interfaces/Core.IMenuCommand.md)
- [IMenuCommands](../interfaces/Core.IMenuCommands.md)
- [IMenuOptions](../interfaces/Core.IMenuOptions.md)
- [IQPauseOptions](../interfaces/Core.IQPauseOptions.md)
- [IQPrintOptions](../interfaces/Core.IQPrintOptions.md)
- [IQStringUtils](../interfaces/Core.IQStringUtils.md)
- [IUserOptions](../interfaces/Core.IUserOptions.md)
