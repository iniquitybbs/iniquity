# @iniquitybbs/iniquity

The command-line interface and telnet server for building and running Iniquity BBS applications.

## Overview

`@iniquitybbs/iniquity` is the execution environment for BBS applications built with `@iniquitybbs/core`. It provides:

- **CLI tool** (`iq` command) for BBS project management
- **Telnet server** for running your BBS over the network
- **TypeScript executor** with hot reload support
- **Session management** implementing the IQOutput interface

## Installation

```bash
# Global installation (recommended for CLI usage)
npm install -g @iniquitybbs/iniquity

# Or local installation for development
npm install --save-dev @iniquitybbs/iniquity
```

Verify installation:

```bash
iq --version
```

## Quick Start

```bash
# Create a new BBS project
iq init

# Start the BBS with hot reload
iq server start --watch

# Connect from another terminal
iq term

# Or connect with SyncTerm
# telnet://localhost:2023
```

---

## What is @iniquitybbs/iniquity?

This package is the **execution environment** that bridges your BBS application (built with `@iniquitybbs/core`) and the network.

**It provides:**
- CLI commands for project initialization and server management
- Telnet server with multi-node support
- TypeScript/JavaScript program executor
- Session management (telnet protocol, ANSI rendering, user I/O)
- IQOutput implementation for @iniquitybbs/core

**It does NOT provide:**
- BBS API for building applications (that's `@iniquitybbs/core`)
- Menu systems, artwork rendering, user management (that's `@iniquitybbs/core`)

Think of it as: **@iniquitybbs/iniquity runs your BBS, @iniquitybbs/core is what you build with.**

---

## Architecture

```
┌────────────────────────────────────────┐
│        Your BBS Application            │
│         (iniquity.ts)                  │
│   import { bbs, screen } from "core"   │
└────────────────────────────────────────┘
                  │
                  ▼
┌────────────────────────────────────────┐
│      @iniquitybbs/iniquity             │
│                                        │
│  • CLI Tool (iq commands)              │
│  • Telnet Server (multi-node)          │
│  • TypeScript Executor (tsx)           │
│  • Session (IQOutput implementation)   │
└────────────────────────────────────────┘
                  │
                  ▼
┌────────────────────────────────────────┐
│       @iniquitybbs/core                │
│         (BBS API + Runtime)            │
└────────────────────────────────────────┘
                  │
                  ▼
        Network (Telnet/SSH)
```

---

## CLI Commands

### `iq init`

Initialize a new BBS project in the current directory.

```bash
iq init
```

**Creates:**
- `.iniquity/` directory with Node.js environment
- `iniquity.ts` starter file
- `assets/` directory for ANSI artwork
- `.nvmrc` for Node version management

### `iq server start`

Start the telnet server and run your BBS.

```bash
iq server start [options]
```

**Options:**
- `--port <number>` - Port to listen on (default: 2023)
- `--host <string>` - Host to bind to (default: localhost)
- `--watch` - Auto-reload on file changes
- `--program <file>` - BBS program to run (default: iniquity.ts)

**Examples:**

```bash
# Start with defaults
iq server start

# Start with hot reload
iq server start --watch

# Start on custom port
iq server start --port 8023

# Run specific program
iq server start --program mybbs.ts
```

### `iq term`

Built-in terminal client for connecting to localhost.

```bash
iq term
```

Connects to `localhost:2023` for quick testing without external terminal emulators.

---

## Creating a BBS

Create `iniquity.ts` in your project root:

```typescript
import { bbs, screen } from "@iniquitybbs/core"

// Set terminal dimensions
screen.setResolution(132, 37)

// Register menus
bbs.menu("main", {
    art: "main.ans",
    items: [
        { key: "M", label: "Messages", goto: "messages" },
        { key: "F", label: "Files", goto: "files" },
        { key: "Q", label: "Quit", action: "quit" }
    ]
})

// Start the BBS
bbs.start(async () => {
    await bbs.art("welcome.ans", { clearScreen: true, pauseAfter: true })
    await bbs.showMenu("main")
})
```

See [@iniquitybbs/core documentation](https://www.npmjs.com/package/@iniquitybbs/core) for complete BBS API reference.

---

## Development Workflow

**1. Initialize project:**
```bash
mkdir mybbs && cd mybbs
iq init
```

**2. Edit your BBS:**
```typescript
// Edit iniquity.ts with your menus and features
```

**3. Start with hot reload:**
```bash
iq server start --watch
```

**4. Test:**
```bash
# In another terminal
iq term

# Or use SyncTerm/NetRunner
# telnet://localhost:2023
```

**5. Make changes:**
- Edit `iniquity.ts`
- Server automatically reloads
- Reconnect to see changes

---

## Key Components

### TelnetServer

Multi-node telnet server managing connections and sessions.

```typescript
import { TelnetServer } from "@iniquitybbs/iniquity"

const server = new TelnetServer({
    port: 2023,
    programPath: './iniquity.ts'
})

await server.start()
```

### Session

Implements `IQOutput` interface for telnet protocol communication.

```typescript
import { Session } from "@iniquitybbs/iniquity"

// Session handles:
// - Telnet protocol negotiation
// - ANSI rendering to network
// - User input from telnet client
// - MCI code processing
```

### Executor

Runs TypeScript BBS programs with `tsx` on-the-fly compilation.

```typescript
import { executeProgram, Runtime } from "@iniquitybbs/iniquity"

const runtime = new Runtime(session)
await executeProgram('./iniquity.ts', runtime, session)
```

---

## Configuration

### .iniquity/ Directory

Created by `iq init`:

```
.iniquity/
├── .nvmrc              # Node version (v18+)
├── package.json        # Dependencies (@iniquitybbs/core)
└── tsconfig.json       # TypeScript config
```

### Project Structure

```
mybbs/
├── .iniquity/          # Iniquity environment
├── assets/             # ANSI artwork (.ans files)
├── data/               # User/group databases
├── iniquity.ts         # Your BBS program
└── iniquity.json       # BBS configuration (optional)
```

---

## Examples

**Minimal BBS:**

```typescript
import { bbs } from "@iniquitybbs/core"

bbs.start(async () => {
    await bbs.popup("Welcome", "Hello, caller!")
})
```

**Full-Featured:**

See [Euphoria template](../templates/src/euphoria) for a complete example with:
- Menu system
- User authentication
- Event bus
- Data-driven artwork

---

## API Reference

### Exports

```typescript
// Server
export { TelnetServer } from './lib/telnet'

// Session
export { Session } from './lib/session'

// Executor
export { executeProgram, executeCode } from './lib/executor'

// Core re-exports
export { Runtime, setGlobalRuntime, getGlobalRuntime } from '@iniquitybbs/core'
```

**Note:** For BBS development, import from `@iniquitybbs/core`, not this package. This package is for running BBSs, not building them.

---

## Requirements

- **Node.js**: v18 or higher
- **OS**: macOS, Linux, Windows (with WSL)
- **Terminal**: SyncTerm, NetRunner, xterm, or any ANSI-capable terminal

---

## License

MIT

## Links

- [Iniquity BBS](http://iniquitybbs.com)
- [@iniquitybbs/core](https://www.npmjs.com/package/@iniquitybbs/core) - Build your BBS
- [@iniquitybbs/templates](https://www.npmjs.com/package/@iniquitybbs/templates) - Example BBSs
- [GitHub Repository](https://github.com/iniquitybbs/iniquity)
- [Issues](https://github.com/iniquitybbs/iniquity/issues)
