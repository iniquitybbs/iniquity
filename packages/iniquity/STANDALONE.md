# Iniquity Standalone Telnet Server

## Architecture

The standalone Telnet server is built entirely within the `runtime` directory, providing a self-contained BBS runtime without external dependencies like Synchronet.

## Directory Structure

```
packages/iniquity/src/runtime/
├── ansi.ts       # ANSI escape sequence utilities
├── core.ts       # Core BBS runtime (say, ask, pause, artwork, etc.)
├── executor.ts   # TypeScript program executor
├── session.ts    # Per-connection session management
└── telnet.ts     # Telnet server implementation
```

## Quick Start

### 1. Build
```bash
cd packages/iniquity
npx tsc
```

### 2. Start Server
```bash
# Run with default (Euphoria BBS)
node start-server.js

# Run with custom program
node start-server.js /path/to/your/bbs.ts
```

### 3. Connect
```bash
telnet localhost 2323
```

Or use a BBS terminal like SyncTERM, NetRunner, or PuTTY.

## Core Components

### TelnetServer (`runtime/telnet.ts`)
- TCP server using Node.js `net` module
- Handles multiple concurrent connections
- Manages session lifecycle
- Executes BBS programs per connection

### Session (`runtime/session.ts`)
- Per-connection state management
- Telnet protocol negotiation (NAWS, terminal type, etc.)
- Input buffering and line reading
- **Binary encoding** for CP437/ANSI compatibility

### Runtime (`runtime/core.ts`)
- BBS DSL functions: `say()`, `ask()`, `pause()`, `wait()`, `gotoxy()`
- `artwork()` for ANSI art rendering
- String extensions: `.color()`, `.newlines()`, `.center()`, `.gotoxy()`
- Program directory tracking for asset resolution

### Executor (`runtime/executor.ts`)
- Loads and executes TypeScript BBS programs
- Strips import statements (runtime API is injected)
- Creates isolated execution context
- Uses `AsyncFunction` for dynamic code execution

### ANSI Utilities (`runtime/ansi.ts`)
- Terminal control: clear screen, cursor movement, colors
- Telnet protocol constants and commands
- 16 foreground + 16 background colors
- Bright color support

## ANSI Art Rendering

### Encoding Chain
```
ANSI File (CP437)
  → Read as 'latin1' (preserves bytes)
  → Write as 'binary' (preserves bytes)
  → Terminal displays as CP437
```

### Rendering Modes

**Line Mode** - Renders line-by-line with delay
```typescript
artwork({ basepath: "/assets" })
  .render({ 
    filename: "welcome.ans", 
    mode: "line", 
    speed: 30 
  })
  .pause()
```

**Character Mode** - Renders character-by-character
```typescript
artwork({ basepath: "/assets" })
  .render({ 
    filename: "menu.ans", 
    mode: "character", 
    speed: 30 
  })
```

**Default Mode** - Instant rendering
```typescript
artwork({ basepath: "/assets" })
  .render({ filename: "art.ans" })
```

## Path Resolution

### Absolute Paths
```typescript
artwork({ basepath: "/Users/me/bbs/assets" })
  .render({ filename: "art.ans" })
// Resolves to: /Users/me/bbs/assets/art.ans
```

### Relative Paths
```typescript
// Program at: /Users/me/bbs/iniquity.ts
artwork({ basepath: "assets" })
  .render({ filename: "art.ans" })
// Resolves to: /Users/me/bbs/assets/art.ans
```

### /dist Mapping
```typescript
// Program at: /Users/me/bbs/iniquity.ts
artwork({ basepath: "/dist/assets" })
  .render({ filename: "art.ans" })
// Strips /dist/, resolves to: /Users/me/bbs/assets/art.ans
```

## API Reference

### Global Functions

```typescript
// Display text
say("Hello World!")
say("Colored text".color("bright cyan"))

// Get user input
const name = await ask("What's your name?")

// Pause for keypress
await pause()

// Wait/sleep
await wait(1000)  // milliseconds

// Position cursor
gotoxy(10, 5)
say("At position 10,5")

// Render ANSI art
artwork({ basepath: "/assets" })
  .render({ filename: "art.ans", mode: "line", speed: 30 })
  .pause()

// Disconnect
disconnect()
```

### String Extensions

```typescript
// Colors
"Text".color("red")
"Text".color("bright green")
"Text".color("background blue")

// Newlines
"Text".newlines(2)  // Prepends 2 newlines

// Centering
"Text".center()  // Centers on terminal width

// Positioning
"Text".gotoxy(10, 5)  // Positions then displays
```

## Example BBS Program

```typescript
import { say, ask, pause, wait, artwork } from "@iniquitybbs/core"

// Welcome screen
artwork({ basepath: "assets" })
  .render({ 
    filename: "welcome.ans", 
    clearScreenBefore: true,
    mode: "line",
    speed: 30 
  })
  .pause()

// Get user info
say("Welcome to My BBS!".color("bright cyan").center())
const name = await ask("Enter your name")

say(`Hello, ${name}!`.color("bright green"))
await pause()

// Main menu
artwork({ basepath: "assets" })
  .render({ filename: "menu.ans" })

// ... more BBS logic ...
```

## Configuration

### Server Options

```typescript
const server = new TelnetServer({
  port: 2323,              // Default: 23
  host: '0.0.0.0',         // Default: '0.0.0.0'
  programPath: './bbs.ts'  // Default: './iniquity.ts'
})
```

### Session Info

Available in runtime:
- `terminalType` - Detected terminal (e.g., 'ansi-bbs', 'xterm')
- `width` - Terminal columns (via NAWS)
- `height` - Terminal rows (via NAWS)

## Technical Details

### CP437 Encoding
- IBM PC character set (1981)
- 256 characters including box-drawing symbols
- Standard for ANSI art and BBS software
- Preserved using latin1 → binary encoding chain

### Telnet Negotiation
- **ECHO** - Server echoes input
- **SUPPRESS_GO_AHEAD** - No go-ahead signals
- **NAWS** - Negotiate About Window Size
- **TERMINAL_TYPE** - Request terminal identification

### Performance
- Non-blocking I/O
- Async/await throughout
- Concurrent connection support
- Efficient binary encoding

## Troubleshooting

### ANSI Art Displays Incorrectly
- Ensure terminal supports CP437 (SyncTERM, NetRunner, mTelnet)
- Check file encoding is correct (use `file` command)
- Verify SAUCE metadata is stripped

### Colors Not Working
- Check terminal supports ANSI escape sequences
- Verify color names match supported list
- Test with simple `say("Test".color("red"))`

### Connection Issues
- Check port is not in use: `lsof -i :2323`
- Verify firewall allows connections
- Check server logs for errors

## Development

### Testing
```bash
# Start server
node start-server.js

# In another terminal
telnet localhost 2323
```

### Debugging
```typescript
// Add console.log in runtime
console.log('Debug:', value)

// Check terminal output
node start-server.js > server.log 2>&1
```

### Hot Reload
TypeScript changes require rebuild:
```bash
npx tsc && node start-server.js
```

## Migration from Docker/Synchronet

This standalone server **replaces** the Docker/Synchronet setup:

**Before** (Docker):
```bash
npm start  # Runs docker-compose
```

**After** (Standalone):
```bash
npx tsc && node start-server.js
```

### API Compatibility
Most Iniquity core APIs work unchanged:
- ✅ `say()`, `ask()`, `pause()`, `wait()`
- ✅ `artwork()` with line/character modes
- ✅ String extensions (color, newlines, etc.)
- ❌ Synchronet-specific APIs (bbs, user, system)
- ❌ `@-codes` rendering mode (future)

## Future Enhancements

- [ ] @-codes support (Synchronet/Renegade style)
- [ ] Template/reactive mode for dynamic content
- [ ] Menu system with lightbar
- [ ] Frame/window support
- [ ] User database integration
- [ ] Multi-node support
- [ ] RIPscript graphics
- [ ] SSH support
