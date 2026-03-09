# Module: core/sixel

Sixel Graphics Support

**`Summary`**

Display sixel graphics in compatible terminals

Inspired by Synchronet's showsixel.js, this provides:
- Detect Sixel support via CTerm version check
- Display pre-rendered Sixel files
- Basic sixel sequence generation

Sixel is a bitmap graphics format for terminals, supported by:
- SyncTERM (CTerm 1.189+)
- xterm (with sixel support compiled in)
- mlterm
- mintty
- foot

## Table of contents

### Classes

- [Sixel](../classes/core_sixel.Sixel.md)

### Interfaces

- [SixelColor](../interfaces/core_sixel.SixelColor.md)
- [SixelImageInfo](../interfaces/core_sixel.SixelImageInfo.md)
- [SixelOptions](../interfaces/core_sixel.SixelOptions.md)
