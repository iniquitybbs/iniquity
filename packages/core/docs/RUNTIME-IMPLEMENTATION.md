# Iniquity Runtime - Complete Implementation

## Summary

The Iniquity runtime has been fully implemented to match the specification at http://iniquitybbs.com. All major features are now functional.

## Implemented Features

### ✅ Phase 1: IQ Base Class
- Created `IQ` base class that all BBS modules can extend
- `terminfo` property for terminal dimensions (`terminfo.x`, `terminfo.y`)
- Core methods: `say()`, `ask()`, `pause()`, `wait()`, `gotoxy()`, `disconnect()`
- Support for both class-based and standalone function usage

### ✅ Phase 2: Menu System (`IQMenu`)
- Interactive command-driven menus
- `menu.render()` with callback loop
- `menu.prompt()` for positioned input
- `menu.command()` for command execution
- Support for default command handler
- Configurable `maxInterval` for timed menus

### ✅ Phase 3: Frame System (`IQFrame`)
- Windowed content areas with borders
- Methods: `open()`, `close()`, `draw()`, `say()`, `cycle()`, `clear()`
- Configurable position, size, and colors
- Content buffering and clipping
- Box drawing characters for borders

### ✅ Phase 4: Reactive Data (`IQReactor`)
- Observable data models using Proxy
- `observe(key, callback)` for watching properties
- `notify(key)` to trigger observers manually
- Automatic change detection
- Integration with menu and render loops

### ✅ Phase 5: Module Decorators
- `@IQModule(options)` class decorator
- `@IQModuleRuntime(options)` method decorator
- Metadata storage for module configuration
- Debug mode for method execution tracing
- Dependency injection of runtime context

### ✅ Phase 6: Data Interpolation
- `@-codes` rendering mode for artwork
- Variable substitution: `@VAR@` syntax
- Expression support: `@{expression}` syntax
- Nested property access: `@user.name@`
- Works with reactive data models

### ✅ Phase 7: Cursor Control
- Chainable cursor movements
- Methods: `up()`, `down()`, `left()`, `right()`
- `hide()` and `show()` for cursor visibility
- Fluent API: `cursor().up(5).left(10).down(2)`

### ✅ Phase 8: Additional Features
- String extensions: `.color()`, `.newlines()`, `.center()`, `.gotoxy()`
- SAUCE metadata parsing for ANSI art
- SyncTERM font switching
- Terminal client detection
- iCE colors support
- Emulated baud rate
- Cursor style control

## File Structure

```
packages/iniquity/src/runtime/
├── ansi.ts           - ANSI escape sequences and terminal control
├── core.ts           - IQ base class, Runtime, Artwork, global functions
├── menu.ts           - Menu system (IQMenu)
├── frame.ts          - Frame/window system (IQFrame)
├── reactor.ts        - Reactive data (IQReactor)
├── decorators.ts     - Module decorators (@IQModule, @IQModuleRuntime)
├── executor.ts       - Program executor (supports class-based modules)
├── session.ts        - Session management and Telnet protocol
└── telnet.ts         - Telnet server

packages/iniquity/dist/src/runtime/
├── [All .js, .js.map, and .d.ts files compiled from above]
```

## Testing

### Simple Script Test
```typescript
import { say, pause, ask } from "../runtime/core"

(async () => {
    say("Welcome to Iniquity!")
    await pause()
    
    const name = await ask("Your name?")
    say(`Hello ${name}!`)
})()
```

### Class-Based Module Test
```typescript
import { IQ, IQModule, IQModuleRuntime } from "../runtime/core"

@IQModule({ basepath: "/dist/assets" })
class MyBBS extends IQ {
    @IQModuleRuntime({ debug: true })
    async start() {
        this.say("BBS Started!")
        this.say(`Terminal: ${this.terminfo.x}x${this.terminfo.y}`)
        await this.pause()
    }
}
```

### Comprehensive Test
See `src/example/test-comprehensive.ts` for a full test suite that exercises all features.

## Usage

### Start the Server
```bash
cd /Users/dan.stephenson/Projects/iniquitybbs/iniquity/packages/iniquity
node start-server.js src/example/test-comprehensive.ts
```

### Connect
```bash
telnet localhost 2323
```

Or use SyncTERM for full features:
```bash
syncterm telnet://localhost:2323
```

## API Compatibility

This implementation is fully compatible with the Iniquity Core API as documented at:
- http://iniquitybbs.com
- https://iniquitybbs.com/modules/Core.html

All examples from the specification should work with this runtime.

## Next Steps

Future enhancements could include:
- MCI code parsing
- 256-color and RGB support
- Advanced line wrapping control
- Terminal query response handling
- More sophisticated artwork rendering modes
- Network/messaging features
- User management system
- File area management

## Notes

- The runtime uses CommonJS modules for compatibility
- TypeScript decorators require `experimentalDecorators` and `emitDecoratorMetadata`
- Class-based modules require compilation before execution
- Simple scripts can be executed directly via the executor

---

Implementation completed: March 6, 2026
