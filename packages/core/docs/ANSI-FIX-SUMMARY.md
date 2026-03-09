# ANSI Rendering Improvements - Summary

## Changes Made

### 1. File Encoding Fix (CRITICAL)
**File**: `/packages/cli/src/runtime/core.ts`

**Before**:
```typescript
content = fs.readFileSync(fullPath, 'utf-8')
```

**After**:
```typescript
content = fs.readFileSync(fullPath, 'latin1')
```

**Why**: ANSI art files use CP437 encoding (IBM PC character set). Reading as UTF-8 corrupts special characters like box-drawing symbols. Latin1 encoding preserves all bytes 0-255 as-is, which is exactly what we need for ANSI art.

### 2. SAUCE Metadata Filtering
**File**: `/packages/cli/src/runtime/core.ts`

**Added**:
```typescript
// Skip SAUCE metadata lines
if (line.includes('SAUCE00')) continue
```

**Why**: SAUCE (Standard Architecture for Universal Comment Extensions) is metadata appended to ANSI files. It contains author info, dimensions, etc. Should not be displayed.

### 3. Color Support Already Present
**File**: `/packages/cli/src/runtime/ansi.ts`

**Verified**:
- ✅ All 16 foreground colors (including bright variants)
- ✅ All 16 background colors (including bright variants)  
- ✅ Proper ANSI SGR codes (`\x1b[30;1m` for bright colors)

## Testing

### Test Command
```bash
cd /Users/dan.stephenson/Projects/iniquitybbs/iniquity/packages/cli
node start-server.js /Users/dan.stephenson/Projects/board/iniquity.ts
```

### Expected Results
1. **No character corruption** - Box-drawing and special symbols render correctly
2. **Proper colors** - All ANSI colors display accurately
3. **No SAUCE metadata** - Metadata is stripped from display
4. **Smooth animation** - Line and character modes work at specified speeds

### Files Being Tested
- `ep_welcome.ans` (62K) - Welcome screen with complex ANSI art
- `ep_main_menu.ans` (4K) - Main menu with character-by-character animation
- `ep_logoff.ans` (32K) - Logoff screen

## Technical Details

### CP437 Encoding
CP437 is the original IBM PC character set containing:
- Standard ASCII (0-127)
- Box-drawing characters (179-218)
- Block elements (176-178, 219-223)
- Special symbols (1-31, 127-175)

### Why Latin1 Works
- Latin1 (ISO-8859-1) maps bytes 0-255 to Unicode U+0000 to U+00FF
- This preserves the raw byte values from the ANSI file
- Terminal emulators can then interpret these as CP437

### ANSI Art Structure
```
[ANSI Escape Sequences]
[Text Content with Box Drawing]
[More ANSI Codes]
...
[SAUCE Metadata Block]  ← We strip this
SAUCE00[binary data]
```

## Performance

### Rendering Speeds
- **Line mode**: ~30ms per line (configurable)
- **Character mode**: ~30ms per character (configurable)
- **ep_welcome.ans**: ~90 lines = ~2.7 seconds at 30ms/line
- **ep_main_menu.ans**: ~600 chars = ~18 seconds at 30ms/char

### Optimization Opportunities
1. Could batch write multiple characters for smoother animation
2. Could use setImmediate() for non-blocking rendering
3. Could pre-process ANSI files to cache parsed sequences

## Comparison with Core Package

| Feature | Core Package | Our Runtime | Status |
|---------|-------------|-------------|---------|
| File Encoding | Binary via File class | latin1 | ✅ Fixed |
| SAUCE Stripping | Per-line check | Pre-strip + per-line | ✅ Better |
| Color Support | All 16+16 colors | All 16+16 colors | ✅ Complete |
| Line Endings | `\r\n` | `\r\n` | ✅ Correct |
| Animation Modes | line, character, @-codes | line, character | ✅ Sufficient |

## Known Limitations

1. **No @-code support** - Synchronet-style codes like `@RED@` not parsed
2. **No reactive mode** - Template variable substitution not implemented  
3. **No Graphic class** - Character mode doesn't use sophisticated ANSI parser
4. **Binary data only** - No UTF-8 ANSI art support (rare anyway)

## Next Steps (Future)

1. Add `@-code` parsing mode for Synchronet compatibility
2. Implement template variable substitution (reactive mode)
3. Add iCE colors support (non-blinking backgrounds)
4. Support for RIPscript graphics (if needed)
5. Add ANSI art validation/linting

## References

- [ANSI Escape Codes](https://en.wikipedia.org/wiki/ANSI_escape_code)
- [CP437 Character Set](https://en.wikipedia.org/wiki/Code_page_437)
- [SAUCE Specification](http://www.acid.org/info/sauce/sauce.htm)
- [Iniquity Core Implementation](../core/src/index.ts)
