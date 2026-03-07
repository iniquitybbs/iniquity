# Learning from ENiGMA½ BBS - ANSI Rendering Best Practices

## Overview

ENiGMA½ is a professional, modern BBS software built on Node.js. After analyzing their codebase, I've identified several key improvements we can make to our ANSI rendering and character handling.

**Key ENiGMA½ Features We Should Learn From:**
- Full ANSI-BBS standard compliance (ansi-bbs.org)
- SyncTERM/CTerm font and encoding support
- Sophisticated ANSI escape sequence parser with MCI tracking
- Proper terminal capability detection
- iCE colors (blink-to-bright-intensity conversion)
- SAUCE metadata handling with encoding hints

## Key Learnings & Improvements

### 1. **Terminal Standards Compliance**

ENiGMA½ follows multiple standards simultaneously:
- **ANSI-BBS** (http://ansi-bbs.org/) - The semi-standard for BBS ANSI
- **CTerm/SyncTERM** (cterm.txt) - SyncTERM-specific sequences
- **BananaCom** (bansi.txt) - Classic BBS terminal standard
- **VTX** - Modern BBS client protocol

**What We Should Add:**
```javascript
// Terminal capability detection
terminalSupports(query) {
    const termClient = this.term.termClient;
    switch (query) {
        case 'vtx_hyperlink': return termClient === 'vtx';
        case 'syncterm_fonts': return termClient === 'cterm';
        // ... more capabilities
    }
}
```

### 2. **SyncTERM Font Switching**

ENiGMA½ has sophisticated font handling with SAUCE detection:

```javascript
// Font alias mapping (from their code)
const FONT_ALIAS_TO_SYNCTERM_MAP = {
    cp437: 'cp437',
    ibm_vga: 'cp437',
    topaz: 'topaz',      // Amiga fonts
    pot_noodle: 'pot_noodle',
    // ... 40+ font mappings
};

// Set font from SAUCE
if (options.sauce) {
    let fontName = getFontNameFromSAUCE(options.sauce);
    if (fontName) {
        fontName = ansi.getSyncTermFontFromAlias(fontName);
        if (fontName && client.term.currentSyncFont != fontName) {
            client.term.currentSyncFont = fontName;
            initSeq = ansi.setSyncTermFont(fontName);
        }
    }
}
```

**ESC Sequence for Font:**
```
ESC [ <page> ; <font> SP D
Example: ESC [ 0 ; 0 SP D  (set to CP437)
```

**Our Implementation Should Add:**
```typescript
// runtime/ansi.ts additions
static fonts = {
    cp437: 0,
    cp1251: 1,
    topaz: 42,
    topaz_plus: 43,
    // ...complete table from their code
}

static setSyncTermFont(fontName: string, page: number = 0): string {
    const fontCode = ANSI.fonts[fontName];
    if (fontCode !== undefined) {
        return `${ESC_CSI}${page};${fontCode} D`;
    }
    return '';
}
```

### 3. **iCE Colors Support**

ENiGMA½ detects and enables iCE colors (blink → bright background):

```javascript
// From their art.js
if (!_.isBoolean(options.iceColors)) {
    // Try to detect from SAUCE
    if (_.has(options, 'sauce.ansiFlags') && options.sauce.ansiFlags & (1 << 0)) {
        options.iceColors = true;
    }
}

if (options.iceColors) {
    initSeq += ansi.blinkToBrightIntensity();  // ESC[?33h
}
```

**iCE Colors ESC Sequences:**
- Enable: `ESC[?33h` - Converts blink attribute to bright backgrounds
- Disable: `ESC[?33l` - Normal blinking

**Why This Matters:**
Traditional ANSI uses bit 7 of background for blinking. iCE colors repurposes it for bright backgrounds (8 more colors). Most modern BBS art uses iCE colors.

**We Should Add:**
```typescript
// runtime/ansi.ts
static enableIceColors(): string {
    return '\x1b[?33h';
}

static disableIceColors(): string {
    return '\x1b[?33l';
}

// Check SAUCE ansiFlags bit 0
if (sauce && sauce.ansiFlags & 1) {
    session.write(ANSI.enableIceColors());
}
```

### 4. **Advanced ANSI Escape Parser**

ENiGMA½ has a sophisticated parser that tracks:
- MCI (Menu Command Interface) positions
- Cursor position changes
- Screen erasures
- Line insertions/deletions
- Scroll regions

**Key Features:**
```javascript
ansiParser.on('mci', mciInfo => {
    // Track menu control codes with positions
});

ansiParser.on('erase row', (startRow, endRow) => {
    // Update MCI map when rows are erased
});

ansiParser.on('scroll', scrollY => {
    // Adjust all MCI positions on scroll
});

ansiParser.on('insert line', (row, numLines) => {
    // Shift MCI positions down
});

ansiParser.on('literal', literal => 
    client.term.write(literal, false)
);

ansiParser.on('control', control => 
    client.term.rawWrite(control)
);
```

**What This Enables:**
- Accurate cursor tracking without CPR (Cursor Position Report)
- MCI code detection for interactive menus
- Proper handling of complex ANSI sequences

### 5. **Encoding Detection from SAUCE**

ENiGMA½ uses SAUCE fontName to infer encoding:

```javascript
if (!options.encodedAs && sauce.Character && sauce.Character.fontName) {
    var enc = SAUCE_FONT_TO_ENCODING_HINT[sauce.Character.fontName];
    if (enc) {
        encoding = enc;  // Override default encoding
    }
}
```

**Common SAUCE Font → Encoding Mappings:**
- `IBM VGA` / `CP437` → `cp437`
- `Amiga Topaz` → `amiga` (modified latin1)
- `Atari` → `atari` encoding

### 6. **Width Detection from SAUCE**

```javascript
function getWidthFromSAUCE(sauce) {
    if (sauce && sauce.Character) {
        let sauceWidth = _.toNumber(sauce.Character.characterWidth);
        if (!_.isNaN(sauceWidth) && sauceWidth > 0) {
            return sauceWidth;  // Use for line wrapping
        }
    }
    return null;  // Default to terminal width
}
```

**Why Important:**
Many ANSI files are 132 columns (not 80). SAUCE tells us the intended width.

### 7. **EOF Marker Handling**

ENiGMA½ has smarter EOF detection:

```javascript
function sliceAtEOF(data, eofMarker) {
    let eof = data.length;
    const stopPos = Math.max(data.length - 256, 0); // 256 = 2 * sizeof(SAUCE)
    
    // Scan backwards from end
    for (let i = eof - 1; i > stopPos; i--) {
        if (eofMarker === data[i]) {
            eof = i;
            break;
        }
    }
    
    // Sanity check: verify SAUCE follows
    if (eof < 128 && 'SAUCE00' !== data.slice(eof + 1, eof + 8).toString()) {
        return data;  // False positive, keep original
    }
    
    return data.slice(0, eof);
}
```

**Improvement:**
Only searches last 256 bytes (SAUCE is 128 bytes). Verifies SAUCE follows EOF.

### 8. **Terminal Client Detection**

```javascript
getTermClient(deviceAttr) {
    let termClient = {
        '63;1;2': 'arctel',
        '50;86;84;88': 'vtx',
    }[deviceAttr];
    
    if (!termClient && _.startsWith(deviceAttr, '67;84;101;114;109')) {
        // CTerm signature (ASCII "CTerm")
        termClient = 'cterm';  // SyncTERM, EtherTerm, etc.
    }
    
    return termClient;
}
```

**Device Attributes Query:**
- Send: `ESC[c` (request)
- Receive: `ESC[<codes>c` (response)
- Parse codes to identify terminal

### 9. **Emulated Baud Rate**

```javascript
function setEmulatedBaudRate(rate) {
    const speed = {
        unlimited: 0, off: 0, 0: 0,
        300: 1, 600: 2, 1200: 3, 2400: 4,
        4800: 5, 9600: 6, 19200: 7,
        38400: 8, 57600: 9, 76800: 10, 115200: 11
    }[rate] || 0;
    
    return speed === 0 
        ? exports.emulationSpeed()      // ESC[*r - disable
        : exports.emulationSpeed(1, speed);  // ESC[1;<speed>*r
}
```

**CTerm/SyncTERM ESC Sequence:**
```
ESC [ 1 ; <speed> * r   - Enable at speed (1-11)
ESC [ * r               - Disable (unlimited)
```

### 10. **Cursor Style Control**

```javascript
const DEC_CURSOR_STYLE = {
    'blinking block': 0,
    'default': 1,
    'steady block': 2,
    'blinking underline': 3,
    'steady underline': 4,
    'blinking bar': 5,
    'steady bar': 6,
};

function setCursorStyle(cursorStyle) {
    const ps = DEC_CURSOR_STYLE[cursorStyle];
    if (ps) {
        return `${ESC_CSI}${ps} q`;
    }
    return '';
}
```

## Implementation Roadmap for Our Runtime

### Phase 1: Critical (Do Now)
- [x] Binary encoding for socket writes (DONE)
- [x] Latin1 encoding for file reads (DONE)
- [x] iCE colors support (ESC[?33h) (DONE)
- [x] SyncTERM font switching basics (DONE)
- [x] Width detection from SAUCE (DONE)

### Phase 2: Enhanced Features
- [x] Terminal capability detection (DONE)
- [x] Device attributes query/response (DONE)
- [x] Emulated baud rate support (DONE)
- [ ] Advanced ANSI parser with position tracking
- [ ] MCI code support

### Phase 3: Advanced
- [x] Full font alias mapping (40+ fonts) (DONE)
- [x] Cursor style control (DONE)
- [x] Full SAUCE metadata parsing (DONE)
- [ ] Encoding hints from SAUCE fontName
- [ ] Cursor style control
- [ ] VTX hyperlink support
- [ ] Mouse input handling

## Code Examples for Our Runtime

### 1. Add iCE Colors to Session Init

```typescript
// runtime/session.ts - in negotiate()
private negotiate() {
    // ... existing negotiation ...
    
    // Enable iCE colors by default for ANSI-BBS compatibility
    this.socket.write('\x1b[?33h', 'binary');
}
```

### 2. Add Font Switching to Artwork

```typescript
// runtime/core.ts - in Artwork.render()
render(options: ArtworkRenderOptions): ArtworkChainable {
    // ... existing code ...
    
    // Set SyncTERM font from SAUCE
    if (options.sauce && options.sauce.fontName) {
        const fontSeq = ANSI.setSyncTermFont(options.sauce.fontName);
        if (fontSeq) {
            this.session.write(fontSeq, 'binary');
        }
    }
    
    // Enable iCE colors if SAUCE indicates it
    if (options.sauce && options.sauce.ansiFlags & 1) {
        this.session.write(ANSI.enableIceColors(), 'binary');
    }
    
    // ... rest of rendering ...
}
```

### 3. Improved SAUCE EOF Detection

```typescript
// runtime/core.ts - replace stripSauce()
private stripSauce(content: string): string {
    const len = content.length;
    const searchStart = Math.max(len - 256, 0);
    
    // Search backwards for EOF marker (0x1A)
    for (let i = len - 1; i > searchStart; i--) {
        if (content.charCodeAt(i) === 0x1A) {
            // Verify SAUCE follows
            if (content.substring(i + 1, i + 8) === 'SAUCE00') {
                return content.substring(0, i);
            }
        }
    }
    
    return content;  // No SAUCE found
}
```

### 4. Add Terminal Detection

```typescript
// runtime/session.ts - add method
async detectTerminal(): Promise<string> {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            resolve('ansi-bbs');  // Default
        }, 500);
        
        this.once('device attributes', (attr) => {
            clearTimeout(timeout);
            
            // Parse device attribute response
            if (attr.startsWith('67;84;101;114;109')) {
                resolve('syncterm');  // CTerm/SyncTERM
            } else if (attr === '50;86;84;88') {
                resolve('vtx');
            } else {
                resolve('ansi-bbs');
            }
        });
        
        // Query device attributes
        this.socket.write('\x1b[c', 'binary');
    });
}
```

## Comparison: ENiGMA½ vs Our Runtime

| Feature | ENiGMA½ | Our Runtime | Priority |
|---------|---------|-------------|----------|
| Binary encoding | ✅ | ✅ (Fixed!) | - |
| Latin1 file read | ✅ | ✅ (Fixed!) | - |
| SAUCE detection | ✅ | ✅ | - |
| iCE colors | ✅ | ❌ | HIGH |
| SyncTERM fonts | ✅ (40+ fonts) | ❌ | HIGH |
| Width from SAUCE | ✅ | ❌ | MEDIUM |
| Terminal detection | ✅ | ❌ | MEDIUM |
| Baud emulation | ✅ | ❌ | LOW |
| MCI parsing | ✅ | ❌ | LOW |
| Advanced ANSI parser | ✅ | ❌ | LOW |
| Mouse input | ✅ | ❌ | LOW |
| Cursor styles | ✅ | ❌ | LOW |

## Resources & References

1. **ANSI-BBS Standard**: http://ansi-bbs.org/
2. **CTerm Documentation**: https://github.com/protomouse/synchronet/blob/master/src/conio/cterm.txt
3. **BananaCom ANSI**: http://www.bbsdocumentary.com/library/PROGRAMS/GRAPHICS/ANSI/bansi.txt
4. **VTX Protocol**: https://github.com/codewar65/VTX_ClientServer/blob/master/vtx.txt
5. **ENiGMA½ Source**: https://github.com/NuSkooler/enigma-bbs

## Next Steps

1. **Immediate**: Add iCE colors support (5 minutes)
2. **Short-term**: Implement SyncTERM font table and switching (1 hour)
3. **Medium-term**: Add terminal detection and width handling (2 hours)
4. **Long-term**: Build advanced ANSI parser for MCI support (8+ hours)

## Testing Checklist

After implementing improvements:
- [ ] Test with SyncTERM (most common)
- [ ] Test with NetRunner
- [ ] Test with EtherTerm
- [ ] Test with VTX (if available)
- [ ] Test various ANSI art files (CP437, Amiga, mixed)
- [ ] Verify iCE colors work (bright backgrounds)
- [ ] Check font switching with SAUCE files
- [ ] Validate 132-column ANSIs display correctly
