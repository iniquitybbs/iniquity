# @iniquitybbs/core

The core runtime library for building modern BBS applications with Iniquity.

## Overview

`@iniquitybbs/core` provides everything you need to build a bulletin board system using a simple, declarative API.

```typescript
import { bbs, screen } from "@iniquitybbs/core"
```

## Installation

```bash
npm install @iniquitybbs/core
```

## Quick Start

```typescript
import { bbs, screen } from "@iniquitybbs/core"

// Set terminal resolution (default: 132x37)
screen.setResolution(132, 37)

// Register menus
bbs.menu("main", {
    art: "main_menu.ans",
    layout: "two-column",
    items: [
        { key: "M", label: "Messages", goto: "messages" },
        { key: "F", label: "Files", goto: "files" },
        { key: "G", label: "Goodbye", action: "quit" }
    ]
})

// Start the BBS
bbs.start(async () => {
    await bbs.art("welcome.ans", { clearScreen: true, pauseAfter: true })
    await bbs.showMenu("main")
})
```

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   BBS Layer                         │
│           The Interface You Use                     │
│                                                     │
│       • bbs object (declarative API)                │
│       • screen utilities (dimensions, centering)    │
└─────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                 Runtime Layer                       │
│         Everything That Makes It Work               │
│                                                     │
│  • Core: Runtime coordinator                        │
│  • Components: Menu, Frame, Reactor, Events         │
│  • Data: User, Group, Config, Network               │
│  • Graphics: Graphic, Artwork, Avatar, Sixel, XBin  │
│  • I/O: Output abstraction, ANSI utilities          │
│  • MCI: Pipe codes, @-codes, control codes          │
│  • Utilities: String utils, decorators              │
└─────────────────────────────────────────────────────┘
```

**BBS Layer** = What you use to build your BBS  
**Runtime Layer** = The engine that powers it (available for advanced use)

---

## BBS API Reference

### screen - Terminal Utilities

| Property/Method | Description |
|-----------------|-------------|
| `screen.width` | Terminal width (default: 132) |
| `screen.height` | Terminal height (default: 37) |
| `screen.setResolution(w, h)` | Set terminal dimensions |
| `screen.centerX(width)` | Calculate X to center element horizontally |
| `screen.centerY(height)` | Calculate Y to center element vertically |
| `screen.center(w, h)` | Returns `{ x, y }` for centered positioning |
| `screen.midX` | Horizontal center point |
| `screen.midY` | Vertical center point |

### bbs - Core BBS Object

#### Lifecycle

```typescript
bbs.start(callback: () => Promise<void>): void
```

#### Menu System

```typescript
bbs.menu(name: string, options: BBSMenuOptions): void
await bbs.showMenu(name: string): Promise<string>
```

**Menu Options:**
- `art` - Artwork filename
- `layout` - 'single' or 'two-column'
- `items` - Array of menu items
- `prompt` - Custom prompt text
- `promptX`, `promptY` - Prompt position
- `col1X`, `col1Y`, `col2X`, `col2Y` - Column positions
- `itemFormat` - Format string

**Example:**

```typescript
bbs.menu("main", {
    art: "main.ans",
    layout: "two-column",
    items: [
        { key: "M", label: "Messages", goto: "messages" },
        { key: "Q", label: "Quit", action: "quit" }
    ]
})
```

#### Artwork Rendering

```typescript
await bbs.art(filename: string, options?: BBSArtOptions): Promise<void>
```

**Options:** `clearScreen`, `display`, `speed`, `data`, `center`, `x`, `y`, `pauseAfter`

#### Popups & Dialogs

```typescript
await bbs.popup(title: string, message: string, options?): Promise<string>
await bbs.choice(title: string, choices: BBSChoiceOption[], options?): Promise<string>
await bbs.dataPopup<T>(title: string, items: T[], formatter, options?): Promise<void>
bbs.frame(title: string, options?): IQFrame
```

#### User Management

```typescript
await bbs.loginForm(): Promise<IQUser | null>
await bbs.registerForm(): Promise<IQUser | null>

bbs.user(handle: string): IQUser
bbs.users(): IQUserList

bbs.setCurrentUser(user: IQUser | null): void
bbs.getCurrentUser(): IQUser | null
bbs.isLoggedIn(): boolean

bbs.group(name: string): IQGroup
bbs.groups(): IQGroupList
```

#### Event System

```typescript
bbs.on(event: string, handler: IQEventHandler, options?): () => void
bbs.once(event: string, handler: IQEventHandler): () => void
bbs.off(event: string, handler?: IQEventHandler): void

bbs.emit(event: string, data?: any, source?: string): void
await bbs.emitSync(event: string, data?: any, source?: string): Promise<void>
```

#### Basic I/O

```typescript
bbs.say(text: string): void
await bbs.ask(prompt: string): Promise<string>
await bbs.pause(prompt?: string): Promise<string>
await bbs.wait(ms: number): Promise<void>
bbs.cls(): void
bbs.hangup(): void
```

#### Server Info

```typescript
bbs.getOnlineUsers(): SessionInfo[]
bbs.getOnlineCount(): number
bbs.getServerInfo(): ServerInfo | null
```

---

## Runtime Layer Reference

*For advanced users who need direct access to runtime components.*

### Core (`core.ts`)

**Runtime** - Component coordinator (used internally by executor):

```typescript
import { Runtime, getGlobalRuntime } from "@iniquitybbs/core"

const runtime = getGlobalRuntime()
runtime.say("Direct runtime access")
```

### Artwork (`artwork.ts`)

**Artwork** - ANSI rendering with SAUCE metadata:

```typescript
import { Artwork } from "@iniquitybbs/core"

const art = new Artwork('assets', output)
await art.render({
    filename: 'welcome.ans',
    display: 'line',
    speed: 30,
    data: { USERNAME: 'SysOp' }
})
```

### String Utilities (`string-utils.ts`)

Opt-in functions (no global pollution):

```typescript
import { colorText, centerText, stripAnsi, visibleLength } from "@iniquitybbs/core"

const text = centerText(colorText("Hello", "cyan"), 80)
```

### Components

**IQMenu** (`menu.ts`) - Command-driven menus:

```typescript
import { IQMenu } from "@iniquitybbs/core"

const menu = new IQMenu(options, output, artworkFactory)
menu.addItem({ key: 'M', label: 'Messages', x: 10, y: 12 })
await menu.show()
```

**IQFrame** (`frame.ts`) - Bordered UI elements:

```typescript
import { IQFrame, screen } from "@iniquitybbs/core"

const frame = new IQFrame({
    x: screen.centerX(50),
    y: screen.centerY(15),
    width: 50,
    height: 15,
    color: 'cyan',
    border: 'double'
}, output)

frame.open()
frame.say('Content')
await frame.input('Prompt: ')
frame.close()
```

**IQReactor** (`reactor.ts`) - Reactive data:

```typescript
import { IQReactor } from "@iniquitybbs/core"

const data = IQReactor({
    count: 0,
    message: (state) => `Count: ${state.count}`
})
```

**IQEventBus** (`events.ts`) - Event system:

```typescript
import { events } from "@iniquitybbs/core"

events.on('user:login', (event) => console.log(event.data))
events.emit('custom:event', { data: 'value' })
```

### Data Management

**User** (`user.ts`):

```typescript
import { IQUser, UserAccessLevel } from "@iniquitybbs/core"

const user = new IQUser({ handle: 'SysOp' })
if (user.exists() && user.login(password)) {
    console.log(user.stats.totalCalls)
}
```

**Group** (`group.ts`):

```typescript
import { IQGroup } from "@iniquitybbs/core"

const group = new IQGroup('sysops')
group.addMember('SysOp')
group.setPermission('canModerate', true)
```

**Config** (`config.ts`):

```typescript
import { getConfig } from "@iniquitybbs/core"

const config = getConfig()
config.set('bbs.name', 'My BBS')
config.save()
```

### Graphics & Rendering

**Graphic** (`graphic.ts`) - In-memory ANSI buffer:

```typescript
import { Graphic, makeAttr, CGA } from "@iniquitybbs/core"

const graphic = new Graphic({ width: 80, height: 25 })
graphic.setData(x, y, 'A', makeAttr(CGA.FG_CYAN, CGA.BG_BLACK))
graphic.draw(output, 1, 1)
```

**Avatar** (`avatar.ts`), **CTerm** (`cterm.ts`), **Sixel** (`sixel.ts`), **XBin** (`xbin.ts`) - Specialized graphics support.

### I/O & ANSI

**ANSI** (`ansi.ts`) - Escape sequences:

```typescript
import { ANSI, CGA } from "@iniquitybbs/core"

ANSI.gotoxy(10, 5)
ANSI.clearScreen()
ANSI.color('bright cyan')
ANSI.cursor.hide()
```

**IQOutput** (`output.ts`) - Abstract I/O interface for session-agnostic core.

### MCI System

**Pipe Codes** - Colors: `|00` through `|23`

**@-Codes** - Dynamic data: `@USER@`, `@DATE@`, `@BBS@`, etc.

**Control Codes** - Commands: `|CS` (clear), `|PA` (pause), `|PO#,#` (position)

**Position Markers** - `^X01` through `^X99`

```typescript
import { MCIProcessor } from "@iniquitybbs/core"

const mci = new MCIProcessor()
mci.setCustom('CUSTOM', 'value')
const result = mci.process('Hello |15@USER@|07!')
```

### Decorators

**Module Decorators** (`decorators.ts`) - For runtime organization:

```typescript
@IQModule({ name: 'mymodule', basepath: 'assets' })
@IQModuleRuntime({ debug: true })
```

**Utility Decorators** (`decorators-runtime.ts`) - For class enhancement:

```typescript
import { Cached, Measure, Validate, Lifecycle, Transaction, Synchronized } from "@iniquitybbs/core"

class MyComponent {
    @Cached({ ttl: 5000 })
    @Measure()
    getData() { /* ... */ }
}
```

**Available:** `@Cached`, `@Measure`, `@Validate`, `@Lifecycle`, `@Transaction`, `@Synchronized`, `@Retry`, `@Timeout`, `@Debounce`, `@Throttle`

---

## License

MIT

## Links

- [Iniquity BBS](http://iniquitybbs.com)
- [GitHub Repository](https://github.com/iniquitybbs/iniquity)
- [Issues](https://github.com/iniquitybbs/iniquity/issues)
