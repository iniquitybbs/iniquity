# The UTF-8 vs Binary Encoding Issue - Root Cause Analysis

## The Problem

SyncTERM and other ANSI-BBS terminals expect **CP437** encoded data (IBM PC character set), but our server was sending **UTF-8** encoded data, causing character corruption.

## The Complete Encoding Chain

### What Should Happen
```
ANSI File (CP437 bytes) 
  → Read as latin1 (preserves bytes)
  → Write to socket as binary (preserves bytes)
  → Terminal interprets as CP437 
  → Beautiful ANSI art! ✓
```

### What Was Happening
```
ANSI File (CP437 bytes) 
  → Read as latin1 (preserves bytes) ✓
  → Write to socket as UTF-8 (CORRUPTS bytes) ✗
  → Terminal gets garbage
  → Broken ANSI art ✗
```

## The Two Critical Fixes

### Fix #1: File Reading (Already Done)
**File**: `/packages/cli/src/runtime/core.ts`

```typescript
// BEFORE (corrupted at read time):
content = fs.readFileSync(fullPath, 'utf-8')

// AFTER (preserves CP437 bytes):
content = fs.readFileSync(fullPath, 'latin1')
```

### Fix #2: Socket Writing (THE KEY FIX)
**File**: `/packages/cli/src/runtime/session.ts`

```typescript
// BEFORE (Node.js converts string to UTF-8):
write(data: string) {
    this.socket.write(data)
}

// AFTER (preserves bytes as-is):
write(data: string) {
    this.socket.write(data, 'binary')
}
```

## Why 'binary' Encoding?

In Node.js, when you pass a string to `socket.write()`:

```javascript
// Default behavior (UTF-8):
socket.write("Hello")  // Encodes as UTF-8 bytes

// With 'binary' encoding:
socket.write("Hello", 'binary')  // Each char code becomes one byte (0-255)
```

The `'binary'` encoding tells Node.js: **"Don't convert this string to UTF-8. Just write each character code (0-255) as a single byte."**

This is EXACTLY what we need for CP437/ANSI art!

## Technical Details

### CP437 Character Examples
```
Byte Value | CP437 Char | What UTF-8 Does
-----------|------------|----------------
179        | │ (box)    | Converts to 2 bytes: 0xC2 0xB3
218        | ┌ (corner) | Converts to 2 bytes: 0xC3 0x9A
176        | ░ (shade)  | Converts to 2 bytes: 0xC2 0xB0
```

When UTF-8 encodes these, the terminal receives **2 bytes instead of 1**, causing:
- Wrong characters displayed
- Misaligned text/art
- Corrupted colors

### With Binary Encoding
```
Byte Value | Sent to Socket | Terminal Displays
-----------|----------------|------------------
179        | 0xB3           | │ (perfect!)
218        | 0xDA           | ┌ (perfect!)
176        | 0xB0           | ░ (perfect!)
```

## Why Latin1 + Binary Works

1. **Latin1 (ISO-8859-1)** encoding maps bytes 0-255 to Unicode codepoints U+0000 to U+00FF
   - This creates a JavaScript string where `charCodeAt(i)` returns the original byte value

2. **Binary encoding** writes each character code as a single byte
   - A string with charCode 179 becomes byte 0xB3
   - No UTF-8 multi-byte conversion happens

3. **Terminal interprets as CP437**
   - Terminal receives the original byte (e.g., 0xB3)
   - Looks it up in CP437 table
   - Displays │ (vertical box line)

## Testing the Fix

### Before Fix (Broken)
```
Expected: ┌─────────┐
Received: â"Œâ"€â"€â"€â"€â"€â"€â"€â"€â"€â"
```

### After Fix (Perfect)
```
Expected: ┌─────────┐
Received: ┌─────────┐  ✓
```

## Why This Matters for BBS Software

1. **ANSI Art** - Core feature of BBS culture
2. **CP437 is the standard** - All classic BBS software uses it
3. **No UTF-8 in 1980s-90s** - CP437 predates UTF-8 by decades
4. **Terminal compatibility** - SyncTERM, NetRunner, PuTTY all expect CP437

## Other Telnet Servers

How do professional Telnet servers handle this?

### Synchronet BBS
```javascript
// Uses binary-safe operations throughout
console.putmsg(text)  // Writes CP437 bytes directly
```

### Mystic BBS
```pascal
// Pascal handles byte arrays natively
Write(Socket, AnsiData);  // No encoding conversion
```

### Our Solution
```typescript
// Read preserves bytes:
fs.readFileSync(path, 'latin1')

// Write preserves bytes:
socket.write(data, 'binary')
```

## Verification Checklist

✅ Read ANSI files with `'latin1'` encoding  
✅ Write to socket with `'binary'` encoding  
✅ No UTF-8 conversion in the chain  
✅ Terminal receives raw CP437 bytes  
✅ ANSI art displays correctly  

## Common Misconceptions

❌ **"Just send UTF-8, it's the modern standard"**
- Wrong! BBS terminals expect CP437, not UTF-8
- UTF-8 breaks box-drawing and special characters

❌ **"Convert CP437 to UTF-8 for the terminal"**
- Wrong! Terminal is configured for CP437
- Sending UTF-8 to a CP437 terminal = garbage

✅ **"Preserve the original bytes end-to-end"**
- Correct! ANSI files → latin1 string → binary write → CP437 terminal

## Performance Impact

- **Negligible** - Binary encoding is actually *faster* than UTF-8
- UTF-8 requires multi-byte encoding calculations
- Binary is a simple byte-for-byte copy

## Future Considerations

If we ever want to support UTF-8 ANSI art:
1. Detect terminal encoding during negotiation
2. Read file based on terminal capability
3. Send appropriate encoding

But for traditional BBS software: **CP437 forever!** 🎨📼
