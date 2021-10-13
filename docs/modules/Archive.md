# Module: Archive

Iniquity Archive

**`summary`** A growing collection of all things Iniquity. Past and present. For use in helping build your bbs.

**`example`**
```typescript
import { Iniquity } from "@iniquitybbs/core"
import { Assets } from "@iniquitybbs/assets"

const iq = new Iniquity()

const welcomeArt = iq.artwork({ basepath: "./iniquity/bbs/assets", filename: Assets.sm_iniq2 })
welcomeArt.render({ clearScreenBefore: true, speed: 100 })

iq.print(`Iniquity comes packed with easy to use assets like ${welcomeArt.filename}`).pause()

iq.hangup()
```

## Table of contents

### Enumerations

- [Textmode](../enums/Archive.Textmode.md)

### Classes

- [Archive](../classes/Archive.Archive-1.md)

### Interfaces

- [IQCoreAssetsOptions](../interfaces/Archive.IQCoreAssetsOptions.md)
