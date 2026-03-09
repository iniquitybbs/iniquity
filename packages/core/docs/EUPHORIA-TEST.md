# Testing Euphoria BBS with Extended Runtime

## Overview

The Telnet server runtime has been extended to support the sophisticated Euphoria BBS example located at `/Users/dan.stephenson/Projects/board/iniquity.ts`.

## New Features Added

### 1. Artwork Support
- **`artwork()` function**: Creates an Artwork instance for rendering ANSI art files
- **Rendering modes**:
  - `line`: Renders line-by-line with specified delay
  - `character`: Renders character-by-character with specified delay
  - Default: Instant rendering
- **Chainable methods**: `.pause()` and `.gotoxy()` on artwork results

### 2. Path Resolution
- **Absolute paths**: Directly used (e.g., `/Users/dan.stephenson/Projects/board/assets/file.ans`)
- **Relative paths**: Resolved relative to the program directory
- **/dist mapping**: Automatically strips `/dist/` prefix and resolves to program directory
  - Example: `basepath: "/dist/assets"` → resolves to `{programDir}/assets/`

### 3. Program Directory Tracking
- The executor now tracks the directory of the executing program
- This directory is used for resolving relative asset paths

## Code Changes

### Modified Files

1. **`packages/cli/src/runtime/core.ts`**
   - Added `Artwork` class with rendering methods
   - Added `artwork()` global function
   - Added program directory tracking to `Runtime` class

2. **`packages/cli/src/runtime/executor.ts`**
   - Added program directory detection and passing to runtime
   - Added `artwork` to the execution context

3. **`packages/cli/tsconfig.json`**
   - Removed invalid reference to non-existent `../core` package

## Testing Instructions

### 1. Build the Server

```bash
cd /Users/dan.stephenson/Projects/iniquitybbs/iniquity/packages/cli
npx tsc
```

### 2. Start Server with Euphoria BBS

```bash
node start-server.js /Users/dan.stephenson/Projects/board/iniquity.ts
```

Or use the default (which is now set to Euphoria BBS):

```bash
node start-server.js
```

### 3. Connect with Telnet

```bash
telnet localhost 2323
```

## Expected Behavior

When connecting to the Euphoria BBS, you should see:

1. **Initial message**: "A 132x37 terminal resolution is required to view this BBS."
2. **Welcome screen**: `ep_welcome.ans` rendered line-by-line (30ms per line)
3. **Pause prompt**: Waits for keypress
4. **Main menu**: `ep_main_menu.ans` rendered character-by-character (30ms per char)
5. **Positioned text**: "The new euphoria bbs is coming soon" at position (29,28)
6. **15-second wait**: Automatic delay
7. **Logoff screen**: `ep_logoff.ans` rendered line-by-line
8. **Disconnect**: Connection closes

## Asset Files

The Euphoria BBS uses these ANSI art files from `/Users/dan.stephenson/Projects/board/assets/`:

- `ep_welcome.ans` (32,860 bytes)
- `ep_main_menu.ans` (63,506 bytes)
- `ep_logoff.ans` (34,856 bytes)

## API Usage Example

From the Euphoria BBS program:

```typescript
import { artwork, say, wait } from "./.iniquity/node_modules/@iniquitybbs/core/src"

// Display message
say("A 132x37 terminal resolution is required to view this BBS.")

// Render artwork with animation and pause
artwork({ basepath: "/dist/assets" })
    .render({ 
        filename: "ep_welcome.ans", 
        clearScreenBefore: true, 
        mode: "line", 
        speed: 30 
    })
    .pause()

// Render with character-by-character animation
artwork({ basepath: "/dist/assets" })
    .render({ 
        filename: "ep_main_menu.ans", 
        clearScreenBefore: true, 
        mode: "character", 
        speed: 30 
    })

// Position text and wait
say("The new euphoria bbs is coming soon").gotoxy(29, 28)
await wait(15000)
```

## Troubleshooting

### ANSI files not found
- Check that `/Users/dan.stephenson/Projects/board/assets/` exists
- Verify the ANSI files are present
- Check the basepath in the BBS program matches the actual directory structure

### Import statements causing errors
- The executor strips `import` statements and injects runtime functions
- This is working as designed - the imports are not needed in the executed code

### Server not starting
- Verify TypeScript compilation succeeded: `npx tsc`
- Check for syntax errors in compiled JavaScript: `node --check dist/src/server/telnet.js`
- Ensure port 2323 is not already in use

## Architecture

```
BBS Program (board/iniquity.ts)
         ↓
    Executor (tracks program dir)
         ↓
    Runtime (receives program dir)
         ↓
    artwork() (uses program dir for path resolution)
         ↓
    Artwork.render() (reads ANSI files)
         ↓
    Session (writes to Telnet socket with animation)
```

## Performance

- **Line-by-line rendering**: ~30ms per line (configurable via `speed` parameter)
- **Character-by-character**: ~30ms per character (configurable)
- **Large files**: `ep_main_menu.ans` (63KB) takes ~2 minutes at 30ms/char

## Next Steps

To add more features:
1. Implement `@-codes` rendering mode for Synchronet-style codes
2. Add support for ANSI animation sequences
3. Implement pause options (custom prompts, colors)
4. Add file caching for faster subsequent loads
5. Support for RIP graphics or other terminal formats
