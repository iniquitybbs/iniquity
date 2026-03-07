# Quick Start Guide - New Features

## Running the Feature Showcase

Start the server with the feature showcase program:

```bash
cd /Users/dan.stephenson/Projects/iniquitybbs/iniquity/packages/iniquity
node start-server.js src/example/feature-showcase.ts
```

Or use the default Euphoria BBS:

```bash
node start-server.js
```

Connect with telnet:
```bash
telnet localhost 2323
```

For full features, use **SyncTERM**: https://syncterm.bbsdev.net/

---

## Feature Quick Reference

### 1. Terminal Detection

```typescript
// Check what client is connected
if (session.info.client.isSyncTerm) {
    say('Welcome SyncTERM user!')
}

// Check capabilities
if (session.supportsFonts()) {
    // Use advanced features
}

// Get client info
const name = session.info.client.name       // 'syncterm', 'vtx', etc.
const version = session.info.client.version // '1.1'
```

### 2. Font Switching (SyncTERM only)

```typescript
// Set font by name
session.setSyncTermFont('topaz')
session.setSyncTermFont('cp437')
session.setSyncTermFont('microknight')

// Using SAUCE-compatible aliases
session.setSyncTermFontWithAlias('Amiga Topaz 1+')
session.setSyncTermFontWithAlias('IBM VGA')

// Auto-detect from SAUCE metadata
artwork('/dist/art/', 'myfile.ans').render({ mode: 'line' })
// Font automatically applied if SAUCE present
```

**Available fonts:** cp437, cp850, cp866, cp1251, topaz, topaz_plus, microknight, microknight_plus, pot_noodle, mo_soul, c64_upper, c64_lower, c128_upper, c128_lower, atari, and 30+ more.

### 3. SAUCE Metadata

```typescript
const art = artwork('/dist/art/', session, programDir)
art.render({ filename: 'splash.ans', mode: 'line' })

// Access metadata
const sauce = art.getSauceInfo()
if (sauce) {
    say(`Title: ${sauce.title}`)
    say(`Artist: ${sauce.author}`)
    say(`Group: ${sauce.group}`)
    say(`Date: ${sauce.date}`)
    say(`Font: ${sauce.fontName}`)
    say(`Width: ${sauce.width}`)
    say(`Has iCE Colors: ${sauce.hasIceColors}`)
    
    // Display comments
    sauce.comments.forEach(comment => {
        say(`  ${comment}`)
    })
}
```

### 4. Baud Rate Emulation

```typescript
// Simulate old modem speeds (SyncTERM/VTX)
session.setEmulatedBaudRate(2400)   // Slow modem
session.setEmulatedBaudRate(9600)   // Classic BBS speed
session.setEmulatedBaudRate(38400)  // Fast modem
session.setEmulatedBaudRate('unlimited') // Max speed
```

### 5. Cursor Styles

```typescript
// Change cursor appearance
session.setCursorStyle('blinking block')
session.setCursorStyle('steady underline')
session.setCursorStyle('blinking bar')
session.setCursorStyle('steady bar')
session.setCursorStyle('default')

// Hide/show cursor
session.write(ANSI.hideCursor())
session.write(ANSI.showCursor())
```

### 6. iCE Colors (Enabled by Default)

16 background colors instead of 8. Automatically enabled when clients connect.

```typescript
// Use bright backgrounds
say('Bright!'.color('background bright red'))
say('Colors!'.color('background bright cyan'))
```

---

## BBS Program Template

```typescript
// Clear screen
say('\x1b[2J\x1b[H')

// Display welcome banner
artwork('/dist/art/', 'welcome.ans').render({
    mode: 'line',
    speed: 30,
    clearScreenBefore: true
})

// Detect client
if (session.info.client.isSyncTerm) {
    say('SyncTERM detected - full features enabled!'.color('bright green'))
    session.setSyncTermFont('topaz')
}

// Use SAUCE metadata
const art = artwork('/dist/art/', session, programDir)
art.render({ filename: 'credits.ans' })
const sauce = art.getSauceInfo()
if (sauce?.author) {
    say(`Art by: ${sauce.author}`.color('cyan'))
}

// Menu
say('Main Menu:'.color('bright cyan'))
say('  1. View Art Gallery')
say('  2. Read Messages')
say('  Q. Quit')

const choice = await askAsync('Your choice:')

// Handle choice...
```

---

## Testing Checklist

- [x] Build successful (`npx tsc`)
- [x] Server starts without errors
- [x] SyncTERM font switching works
- [x] Terminal detection works
- [x] SAUCE metadata parsing works
- [x] Baud rate emulation works
- [x] Cursor styles work
- [x] iCE colors display correctly
- [x] Feature showcase program runs

---

## Next Steps

To add the feature showcase to your workflow:

```bash
# Test the feature showcase
node start-server.js src/example/feature-showcase.ts

# Connect with SyncTERM for full experience
# Or telnet localhost 2323
```

---

## Troubleshooting

**Fonts not changing?**
- Make sure you're using SyncTERM or compatible terminal
- Check `session.supportsFonts()` returns true

**SAUCE metadata not found?**
- File must have valid SAUCE record at end
- Check file size is at least 128 bytes

**iCE colors not showing?**
- Most modern terminals support this
- Legacy terminals may show blinking instead

---

## References

- SyncTERM: https://syncterm.bbsdev.net/
- SAUCE Spec: https://www.acid.org/info/sauce/sauce.htm
- CTerm Spec: https://github.com/protomouse/synchronet/blob/master/src/conio/cterm.txt
- Feature Documentation: FEATURE-SHOWCASE.md
- Implementation Details: ENIGMA-LEARNINGS.md
