[Iniquity BBS Developer Guide - v3.0.0](../README.md) / [Exports](../modules.md) / Iniquity

# Module: Iniquity

Iniquity BBS

**`example`**
```typescript
import Iniquity from "@iniquitybbs/iniquity"

const iq = new Iniquity()

iq.artwork({ filename: "./path/to/textfile.ans" }).render({ speed: 10 })

iq.say("Pretty cool, right???".newlines(2).color("bright cyan").center()).pause()

iq.disconnect()
```

## Table of contents

### References

- [default](Iniquity.md#default)

### Classes

- [Artwork](../classes/Iniquity.Artwork.md)
- [Group](../classes/Iniquity.Group.md)
- [Iniquity](../classes/Iniquity.Iniquity-1.md)
- [Menu](../classes/Iniquity.Menu.md)
- [Network](../classes/Iniquity.Network.md)
- [Text](../classes/Iniquity.Text.md)
- [User](../classes/Iniquity.User.md)

### Interfaces

- [IArtworkOptions](../interfaces/Iniquity.IArtworkOptions.md)
- [IArtworkRenderFunctions](../interfaces/Iniquity.IArtworkRenderFunctions.md)
- [IArtworkRenderOptions](../interfaces/Iniquity.IArtworkRenderOptions.md)
- [IBBSConfigParams](../interfaces/Iniquity.IBBSConfigParams.md)
- [IBBSEnhancements](../interfaces/Iniquity.IBBSEnhancements.md)
- [IBBSPauseOptions](../interfaces/Iniquity.IBBSPauseOptions.md)
- [IBBSPrintFunctions](../interfaces/Iniquity.IBBSPrintFunctions.md)
- [IBBSPrintOptions](../interfaces/Iniquity.IBBSPrintOptions.md)
- [IBBSSayFunctions](../interfaces/Iniquity.IBBSSayFunctions.md)
- [IBBSSayOptions](../interfaces/Iniquity.IBBSSayOptions.md)
- [IIniquityOptions](../interfaces/Iniquity.IIniquityOptions.md)
- [IMenuCommand](../interfaces/Iniquity.IMenuCommand.md)
- [IMenuCommands](../interfaces/Iniquity.IMenuCommands.md)
- [IMenuOptions](../interfaces/Iniquity.IMenuOptions.md)
- [IUserOptions](../interfaces/Iniquity.IUserOptions.md)

## References

### default

• **default**: `Object`
