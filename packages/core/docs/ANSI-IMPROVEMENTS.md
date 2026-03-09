# ANSI Rendering Improvements for Standalone Telnet Runtime

## Analysis of Core Package vs Our Runtime

### Key Findings from `/packages/core/src/index.ts`

#### 1. **File Reading**
- Core uses Synchronet's `File` class which handles binary data properly
- Reads files line-by-line for "line" mode
- Uses `Graphic` class for "character" mode which properly parses ANSI escape sequences

#### 2. **SAUCE Metadata Handling**
```typescript
if (text[i].includes("SAUCE")) continue
```
- Skips lines containing "SAUCE00" marker
- SAUCE is a metadata block at the end of ANSI files

#### 3. **Line Endings**
```typescript
if (i < text.length - 1) console.putmsg("\r\n")
```
- Explicitly uses `\r\n` (CR+LF) for Telnet
- Our runtime was using just `\n`

#### 4. **Encoding Handling**
- Supports both CP437 and UTF8 encoding
- CP437 is the IBM PC character set used in ANSI art
- Contains box-drawing characters and special symbols

#### 5. **ANSI Color Codes**
```typescript
case "black": return "\u001b[30m" + this
case "bright black": return "\u001b[30;1m" + this
```
- Uses proper ANSI SGR (Select Graphic Rendition) codes
- `\u001b[30;1m` = bright colors (intensity bit set)

## Issues in Our Current Runtime

### `/packages/cli/src/runtime/core.ts`

**Problem 1: File Reading**
```typescript
content = fs.readFileSync(fullPath, 'utf-8')
```
- ❌ Reads as UTF-8, corrupts CP437 characters
- ✅ Should use 'latin1' or 'binary' encoding

**Problem 2: Line Endings**
```typescript
this.session.write(line + '\r\n')
```
- ✅ Correctly uses `\r\n` for line mode
- ❌ But character mode doesn't preserve original line endings from ANSI file

**Problem 3: SAUCE Stripping**
```typescript
stripSauce(content: string): string {
    const sauceIndex = content.indexOf('SAUCE00')
    if (sauceIndex !== -1) {
        return content.substring(0, sauceIndex)
    }
    return content
}
```
- ✅ Implemented correctly
- ⚠️ But happens after UTF-8 decoding corrupts data

### `/packages/cli/src/runtime/ansi.ts`

**ANSI Color Codes - Need Verification**
```typescript
static colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    // ... etc
}
```
- ✅ Basic colors correct
- ❌ Missing bright colors (bold variants)
- ❌ Missing some background colors

## Required Fixes

### 1. Fix File Reading Encoding
```typescript
// WRONG:
content = fs.readFileSync(fullPath, 'utf-8')

// CORRECT:
content = fs.readFileSync(fullPath, 'latin1')  // Preserves bytes 0-255
```

### 2. Add Bright Color Support to ANSI.ts
```typescript
static colors = {
    // Standard colors
    black: '\x1b[30m',
    red: '\x1b[31m',
    // ... etc
    
    // Bright colors (add these)
    brightBlack: '\x1b[30;1m',
    brightRed: '\x1b[31;1m',
    brightGreen: '\x1b[32;1m',
    // ... etc
}
```

### 3. Improve Character Mode Rendering
```typescript
async renderCharByChar(content: string, speed: number): Promise<void> {
    for (const char of content) {
        this.session.write(char)
        if (speed > 0) {
            await new Promise(resolve => setTimeout(resolve, speed))
        }
    }
}
```
- ✅ This is actually correct
- ⚠️ Just needs proper binary data

### 4. Fix Line Mode to Handle ANSI Escapes Better
```typescript
async renderLineByLine(content: string, speed: number): Promise<void> {
    const lines = content.split('\n')
    for (const line of lines) {
        // Skip SAUCE metadata
        if (line.includes('SAUCE00')) continue
        
        // Write line with proper Telnet line ending
        this.session.write(line + '\r\n')
        
        if (speed > 0) {
            await new Promise(resolve => setTimeout(resolve, speed))
        }
    }
}
```

## Testing with Euphoria BBS

The BBS at `/Users/dan.stephenson/Projects/board/iniquity.ts` requires:

1. **`ep_welcome.ans` (62K)** - Line mode, 30ms delay
2. **`ep_main_menu.ans` (4K)** - Character mode, 30ms delay
3. **`ep_logoff.ans` (32K)** - Line mode, 30ms delay

### Expected Behavior
- Clean ANSI art rendering with proper colors
- No corrupted characters (should see box-drawing, not �)
- Smooth animation timing
- No SAUCE metadata visible

### Common ANSI Art Issues
1. **Mojibake** (corrupted characters) - Encoding problem
2. **Missing colors** - ANSI code parsing issue
3. **Broken layouts** - Line ending issues
4. **Metadata visible** - SAUCE not stripped

## Implementation Priority

1. **HIGH**: Fix file encoding (latin1 vs UTF-8)
2. **HIGH**: Verify line ending handling
3. **MEDIUM**: Add bright color support
4. **LOW**: Optimize rendering performance

## Files to Modify

1. `/packages/cli/src/runtime/core.ts`
   - Change `fs.readFileSync` encoding to 'latin1'
   - Improve SAUCE stripping in line mode
   
2. `/packages/cli/src/runtime/ansi.ts`
   - Add bright color codes
   - Verify all 16 foreground + 16 background colors

3. `/packages/cli/src/runtime/session.ts`
   - Verify socket writes handle binary data correctly
   - Ensure no UTF-8 conversion happens

## References

- **ANSI Art**: https://en.wikipedia.org/wiki/ANSI_art
- **CP437**: https://en.wikipedia.org/wiki/Code_page_437
- **SAUCE**: http://www.acid.org/info/sauce/sauce.htm
- **ANSI SGR Codes**: https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters
