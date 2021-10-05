[Documentation - v3.0.0](../README.md) / [Exports](../modules.md) / Assets

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

- [Assets](../enums/Assets.Assets-1.md)
