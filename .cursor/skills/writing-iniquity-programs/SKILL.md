---
name: Writing Iniquity BBS Programs
description: How to write iniquity.ts BBS programs using the @iniquitybbs/core API. Use when creating or modifying BBS applications.
---

# Writing Iniquity BBS Programs

This skill covers how to write BBS applications using the `@iniquitybbs/core` API.

## Basic Structure

Every Iniquity BBS is a TypeScript program that imports from `@iniquitybbs/core` and defines the BBS flow:

```typescript
import { bbs, screen } from "@iniquitybbs/core"

// Set terminal resolution
screen.setResolution(80, 25)

// Define menus
bbs.menu("main", {
    prompt: "Command: ",
    layout: "single",
    items: [
        { key: "M", label: "Messages", action: () => bbs.popup("Coming soon!") },
        { key: "G", label: "Goodbye", action: "quit" }
    ]
})

// Entry point
bbs.start(async () => {
    bbs.say("Welcome to my BBS!")
    await bbs.pause()
    await bbs.showMenu("main")
})
```

## Core APIs

### The `bbs` Object

Main BBS control object with methods for:

- **Display:** `say()`, `cls()`, `popup()`, `art()`
- **Input:** `ask()`, `pause()`, `choice()`, `loginForm()`
- **Menus:** `menu()`, `showMenu()`
- **Users:** `user()`, `users()`, `getCurrentUser()`, `setCurrentUser()`
- **Flow:** `start()`, `wait()`

### The `screen` Object

Terminal screen control:

```typescript
screen.setResolution(80, 25)   // 80x25 classic
screen.setResolution(132, 37)  // 132x37 modern
```

## Entry Point: `bbs.start()`

Every BBS must call `bbs.start()` with an async function:

```typescript
bbs.start(async () => {
    // Your BBS logic here
    await bbs.art("welcome.ans", { clearScreen: true, pauseAfter: true })
    await bbs.showMenu("main")
})
```

## Display Methods

### `bbs.say(text: string)`

Print text to the terminal. Supports pipe codes for colors:

```typescript
bbs.say("|15Hello, |11World|07!")
// |15 = bright white, |11 = bright cyan, |07 = gray
```

### `bbs.cls()`

Clear the screen:

```typescript
bbs.cls()
```

### `bbs.popup(title: string, message: string, options?)`

Show a popup dialog:

```typescript
await bbs.popup("Welcome", "Thanks for calling!")

await bbs.popup("Error", "Invalid input!", { type: "error" })
```

### `bbs.art(filename: string, options?)`

Display ANSI/ASCII artwork:

```typescript
await bbs.art("welcome.ans")
await bbs.art("main_menu.ans", { clearScreen: true, pauseAfter: true })
```

Artwork files should be in your BBS directory.

### `bbs.dataPopup(title, data, formatter, options?)`

Display a list of data in a popup:

```typescript
await bbs.dataPopup(
    "Users Online",
    bbs.getOnlineUsers(),
    (user) => `${user.handle} - Node ${user.node}`,
    { width: 60 }
)
```

## Input Methods

### `bbs.ask(prompt: string): Promise<string>`

Prompt for text input:

```typescript
const name = await bbs.ask("Enter your name: ")
const answer = await bbs.ask("|14Continue? (Y/n): |15")
```

### `bbs.pause(prompt?: string): Promise<void>`

Wait for keypress:

```typescript
await bbs.pause()
await bbs.pause("Press any key...")
```

### `bbs.choice(title: string, choices): Promise<string>`

Present multiple-choice menu:

```typescript
const choice = await bbs.choice("Welcome!", [
    { key: "L", label: "Login", description: "Existing users" },
    { key: "A", label: "Apply", description: "New users" },
    { key: "G", label: "Goodbye", description: "Disconnect" }
])

if (choice === "L") {
    // Handle login
}
```

### `bbs.loginForm(): Promise<User | null>`

Show login form:

```typescript
const user = await bbs.loginForm()
if (user) {
    // User logged in successfully
}
```

## Menu System

### Defining Menus

Use `bbs.menu()` to define a menu:

```typescript
bbs.menu("main", {
    art: "main_menu.ans",           // Optional ANSI art
    prompt: "Command: ",            // Input prompt
    layout: "single",               // or "two-column"
    itemFormat: "[{key}] {label}",  // Optional custom format
    items: [
        { key: "M", label: "Messages", action: comingSoon },
        { key: "F", label: "Files", goto: "files" },
        { key: "Q", label: "Quit", action: "back" }
    ]
})
```

### Menu Item Types

- **Action (function):** `{ key: "M", label: "Messages", action: () => doSomething() }`
- **Goto (submenu):** `{ key: "F", label: "Files", goto: "files" }`
- **Action (string):** 
  - `"quit"` - Disconnect
  - `"back"` - Return to previous menu

### Showing Menus

```typescript
await bbs.showMenu("main")
```

The menu system handles:
- Displaying artwork (if provided)
- Rendering menu items
- Accepting user input
- Calling actions or navigating to submenus

## User Management

### Getting Current User

```typescript
const user = bbs.getCurrentUser()
if (user) {
    bbs.say(`Hello, ${user.handle}!`)
    bbs.say(`Security Level: ${user.access}`)
}
```

### Creating/Loading Users

```typescript
// Load existing user
const user = bbs.user("john")
if (user.exists()) {
    // User found
}

// Create new user
const newUser = bbs.user({
    handle: "john",
    password: "secret",
    realName: "John Doe",
    location: "Cyberspace",
    access: 10
})

if (newUser.register("secret")) {
    newUser.login("secret")
    bbs.setCurrentUser(newUser)
}
```

### User Properties

User objects have:

```typescript
user.handle          // Username
user.realName        // Real name
user.location        // Location
user.access          // Security level (number)
user.stats.totalCalls
user.stats.totalPosts
user.stats.timeOnline
user.stats.lastLogin
user.exists()        // Check if user exists
user.login(password) // Authenticate
user.logout()        // End session
user.changePassword(oldPW, newPW)
```

### Listing Users

```typescript
const allUsers = bbs.users().all()
allUsers.forEach(user => {
    bbs.say(`${user.handle} - Calls: ${user.stats.totalCalls}`)
})
```

### Online Users

```typescript
const online = bbs.getOnlineUsers()
bbs.say(`Users online: ${online.length}`)
```

## Configuration

### Loading Config

```typescript
import { loadConfig, getConfig } from "@iniquitybbs/core"
import path from "path"

loadConfig(path.join(__dirname, "iniquity.json"))
const config = getConfig()

const bbsName = config.server.name
const sysop = config.getCustom<string>("sysop")
```

### Config File Structure

`iniquity.json`:

```json
{
  "server": {
    "name": "My BBS",
    "port": 2023,
    "newUserAccess": 10,
    "requireRealName": true
  },
  "security": {
    "passwordMinLength": 4
  },
  "custom": {
    "sysop": "The SysOp",
    "location": "Cyberspace"
  }
}
```

## Color Codes

Pipe codes for text colors:

```
|00 = Black       |08 = Dark Gray
|01 = Blue        |09 = Bright Blue
|02 = Green       |10 = Bright Green
|03 = Cyan        |11 = Bright Cyan
|04 = Red         |12 = Bright Red
|05 = Magenta     |13 = Bright Magenta
|06 = Brown       |14 = Yellow
|07 = Light Gray  |15 = White
```

Example:

```typescript
bbs.say("|15Welcome to |11My BBS|15!|07")
```

## Character Encoding

Iniquity supports CP437 (classic BBS) and UTF-8:

```typescript
import { getGlobalRuntime } from "@iniquitybbs/core"

const out = getGlobalRuntime().getOutput() as { setEncoding?(enc: "cp437" | "utf8"): void }
out.setEncoding?.("cp437")  // or "utf8"
```

CP437 includes box-drawing characters:

```typescript
const BOX = { 
    tl: "\xC9",  // ╔
    tr: "\xBB",  // ╗
    bl: "\xC8",  // ╚
    br: "\xBC",  // ╝
    h: "\xCD",   // ═
    v: "\xBA"    // ║
}

bbs.say(BOX.tl + BOX.h.repeat(40) + BOX.tr)
```

## Full Example

See `packages/templates/src/eternity/iniquity.ts` for a complete, production-ready BBS featuring:

- Terminal encoding selection
- New user application system
- Login flow
- Main menu with submenus
- User management
- System statistics
- Last callers list
- Configuration system
- Proper use of all core APIs

## Best Practices

1. **Always use `async/await`** for BBS flow:
   ```typescript
   bbs.start(async () => { ... })
   ```

2. **Set resolution early:**
   ```typescript
   screen.setResolution(80, 25)
   ```

3. **Define all menus before `bbs.start()`:**
   ```typescript
   bbs.menu("main", { ... })
   bbs.menu("files", { ... })
   bbs.start(async () => { ... })
   ```

4. **Handle user state:**
   ```typescript
   const user = bbs.getCurrentUser()
   if (!user) {
       await bbs.popup("Error", "You must be logged in.")
       return
   }
   ```

5. **Clean up on logout:**
   ```typescript
   if (user) {
       user.logout()
   }
   ```

## Resources

- **Templates:** `packages/templates/src/` for examples
- **Core source:** `packages/core/src/` for API implementation
- **Documentation:** https://iniquitybbs.com/modules.html
