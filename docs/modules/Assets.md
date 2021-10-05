# Module: Assets

Iniquity Assets

**`example`**
```typescript
import { Iniquity } from "@iniquitybbs/iniquity"
import { Assets } from "@iniquitybbs/assets"

const iq = new Iniquity()

const welcomeArt = iq.artwork({ basepath: "./iniquity/bbs/assets", filename: Assets.sm_iniq2 })
welcomeArt.render({ clearScreenBefore: true, speed: 100 })

iq.print(`Iniquity comes packed with easy to use assets like ${welcomeArt.filename}`).pause()

iq.hangup()
```

## Table of contents

### Enumerations

- [Directory](../enums/Assets.Directory.md)

### Classes

- [Assets2](../classes/Assets.Assets2.md)

### Interfaces

- [IQCoreAssetsOptions](../interfaces/Assets.IQCoreAssetsOptions.md)
