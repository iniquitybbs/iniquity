# Module: Iniquity

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

- [Artwork](../classes/Iniquity.Artwork.md)
- [BBS](../classes/Iniquity.BBS.md)
- [Group](../classes/Iniquity.Group.md)
- [Menu](../classes/Iniquity.Menu.md)
- [Network](../classes/Iniquity.Network.md)
- [Text](../classes/Iniquity.Text.md)
- [User](../classes/Iniquity.User.md)

### Interfaces

- [IArtworkOptions](../interfaces/Iniquity.IArtworkOptions.md)
- [IArtworkRenderFunctions](../interfaces/Iniquity.IArtworkRenderFunctions.md)
- [IArtworkRenderOptions](../interfaces/Iniquity.IArtworkRenderOptions.md)
- [IBBSConfigParams](../interfaces/Iniquity.IBBSConfigParams.md)
- [IBBSPrintFunctions](../interfaces/Iniquity.IBBSPrintFunctions.md)
- [IBBSSayFunctions](../interfaces/Iniquity.IBBSSayFunctions.md)
- [IBBSSayOptions](../interfaces/Iniquity.IBBSSayOptions.md)
- [IIniquityOptions](../interfaces/Iniquity.IIniquityOptions.md)
- [IMenuCommand](../interfaces/Iniquity.IMenuCommand.md)
- [IMenuCommands](../interfaces/Iniquity.IMenuCommands.md)
- [IMenuOptions](../interfaces/Iniquity.IMenuOptions.md)
- [IQPauseOptions](../interfaces/Iniquity.IQPauseOptions.md)
- [IQPrintOptions](../interfaces/Iniquity.IQPrintOptions.md)
- [IQStringUtils](../interfaces/Iniquity.IQStringUtils.md)
- [IUserOptions](../interfaces/Iniquity.IUserOptions.md)
