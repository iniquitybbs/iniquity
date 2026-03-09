# Original Iniquity BBS Analysis & Runtime Enhancement Recommendations

## Executive Summary

After analyzing the original Iniquity BBS v2.6 source code (Pascal), I've identified several powerful features and architectural patterns that would significantly enhance our TypeScript runtime. The original Iniquity had sophisticated systems for code interpolation, file display, and user interaction that we can adapt and modernize.

## Original Iniquity Architecture Analysis

### Core Components

#### 1. **MCI Codes System** (`MCICODES.PAS`)
The most powerful feature of original Iniquity was its **MCI (Message Control Interface) codes** - a comprehensive macro/template system for dynamic content insertion.

**Original Implementation:**
- `@XX` format for data interpolation (e.g., `@UN` = username, `@MA` = message area name)
- Control codes with `|` prefix for formatting (e.g., `|CS` = clear screen, `|PA` = pause)
- Over 100+ predefined codes covering:
  - User data (`@UN`, `@SL`, `@UE` - username, security level, emails)
  - BBS data (`@BN`, `@BP`, `@SN` - BBS name, phone, sysop name)
  - Message data (`@MA`, `@MN`, `@MT` - area name, message number, total)
  - File data (`@FA`, `@FN`, `@FS` - file area, name, size)
  - System data (`@TI`, `@TD`, `@TC` - time, date, total calls)
  - Color codes (`|00`-`|15` fore, `|16`-`|23` back, `|U0`-`|U9` user colors)
  - Position codes (`|CS` clear screen, `|PA` pause, `|PK` press key)

**What Our Runtime Lacks:**
- ✗ No comprehensive macro system beyond basic `@-codes`
- ✗ No built-in codes for user/system/BBS data
- ✗ No color code shortcuts (we only have string extensions)
- ✗ No control code system for screen positioning/pausing

#### 2. **ShowFile System** (`SHOWFILE.PAS`)
Sophisticated ANSI file display with embedded positioning markers and dynamic content.

**Key Features:**
- **Position markers** (`^XNN`) - Save cursor positions for later updates
- **Data field substitution** - Update specific parts of displayed files
- **Text libraries** - Compressed file storage system
- **File type detection** - Auto-select .RIP, .AVT, .ANS, or .ASC based on terminal
- **Day-specific files** - Display different files based on day of week
- **Multiple display modes** - Normal, lightbar, chat, login, file listing, etc.
- **Repeat buffering** - Cache frequently displayed files in memory

**Positioning System:**
```pascal
^X01-^X99  : Save cursor positions 1-99
sfSetPos(N) : Mark position N
sfGotoPos(N) : Jump to saved position N
sfWrite(N) : Output data at saved position N
```

**What Our Runtime Lacks:**
- ✗ No position marker system in artwork
- ✗ No ability to update specific parts of rendered ANSI
- ✗ No file caching/repeat buffer system
- ✗ No automatic terminal-based file selection

#### 3. **OUTPUT System** (`OUTPUT.PAS`)
Advanced output control with multiple emulation modes.

**Key Features:**
- **Multiple emulation modes**: ANSI, AVATAR, TextFX
- **Smart color optimization**: Only send color codes when colors change
- **Cursor save/restore**: Save and restore cursor position
- **Relative positioning**: Move up/down/left/right by N positions
- **Pause system**: Auto-pause at page length, skip with Q/S/N
- **Center/right-align**: Automatic text alignment
- **Backspace handling**: Visual backspace with character replacement

**What Our Runtime Has:**
- ✓ Basic ANSI output
- ✓ Color codes
- ✓ Simple cursor positioning
- ⚠ Partial pause implementation (not auto-paging)

**What We Should Add:**
- Smart color optimization (track current color, only send when changed)
- Cursor save/restore (beyond just coordinates)
- Auto-pause at page length
- Relative cursor movements (currently have chainable but not optimized)

#### 4. **INPUT System** (`INPUT.PAS`)
Sophisticated input handling with field types, validation, and hotkeys.

**Key Features:**
- **Input field types**: String, integer, yes/no, date, phone, email, etc.
- **Field validation**: Min/max length, character sets, patterns
- **Input masks**: Force specific formats (phone: ###-###-####)
- **Hotkey system**: Single-key commands without Enter
- **Line editing**: Arrow keys, Home/End, Insert, Delete
- **Word wrap**: Auto-wrap at field boundaries
- **Tab completion**: Configurable tab completion
- **Password mode**: Hidden input display

**What Our Runtime Lacks:**
- ✗ No field validation
- ✗ No input masks
- ✗ No line editing (arrow keys, etc.)
- ✗ Basic ask() only reads until Enter

---

## Recommended Enhancements for Our Runtime

### Priority 1: MCI Code System

Implement a comprehensive macro system for dynamic content insertion.

**Implementation Plan:**

```typescript
// packages/cli/src/runtime/mci.ts

export interface MCIContext {
    user?: UserData
    bbs?: BBSData
    system?: SystemData
    message?: MessageData
    file?: FileData
    custom?: Record<string, string>
}

export class MCIProcessor {
    private context: MCIContext
    
    /**
     * Process MCI codes in text
     * @UN = username
     * @SL = security level  
     * @BN = BBS name
     * @TD = today's date
     * etc.
     */
    process(text: string): string {
        return text.replace(/@([A-Z]{2})/g, (match, code) => {
            return this.getCodeValue(code) || match
        })
    }
    
    /**
     * Process color codes
     * |00-|15 = foreground colors
     * |16-|23 = background colors
     * |CS = clear screen
     * |PA = pause
     */
    processColorCodes(text: string): string {
        return text.replace(/\|([0-9]{2}|[A-Z]{2})/g, (match, code) => {
            return this.getControlCode(code) || match
        })
    }
}
```

**Standard MCI Codes to Implement:**

```typescript
// User codes
@UN  Username
@RN  Real name
@SL  Security level
@UL  Upload count
@DL  Download count
@UP  Upload KB
@DK  Download KB
@TC  Total calls
@LC  Last call date/time
@FC  First call date
@EM  Email waiting

// BBS codes
@BN  BBS name
@BP  BBS phone
@BL  BBS location
@SN  Sysop name
@SA  Sysop alias

// System codes
@TD  Today's date (short)
@TF  Today's date (full)
@TI  Current time (12hr)
@TM  Current time (24hr)
@TL  Time left (minutes)
@ND  Node number
@TC  Total system calls
@NU  Number of users

// Message codes (when in message context)
@MA  Message area name
@MN  Current message number
@MT  Total messages
@MF  Message from
@MTo Message to
@MS  Message subject
@MD  Message date

// File codes (when in file context)
@FA  File area name
@FN  File name
@FS  File size
@FD  File description
@FU  File uploader
@FT  Files in area

// Color shortcuts
|00-|15  Foreground colors 0-15
|B0-|B7  Background colors 0-7
|U0-|U9  User-defined color slots

// Control codes
|CS  Clear screen
|CL  Clear line
|CR  Carriage return
|NL  New line
|PA  Pause (press key)
|PW  Pause (wait for key with message)
|DE  Delay short (500ms)
|DM  Delay medium (1000ms)
|DL  Delay long (2000ms)
```

### Priority 2: Enhanced Artwork System with Position Markers

Add the ability to save/restore positions in rendered ANSI and update specific areas.

**Implementation:**

```typescript
// Add to Artwork class in core.ts

export class Artwork {
    private positions: Map<number, { x: number, y: number, color: any }> = new Map()
    private renderedContent: string = ''
    
    /**
     * Save a position marker during rendering
     * Format in ANSI: ^X01, ^X02, etc.
     */
    private savePosition(marker: number): void {
        this.positions.set(marker, {
            x: this.session.getX(),
            y: this.session.getY(),
            color: this.session.getCurrentColor()
        })
    }
    
    /**
     * Go to a saved position
     */
    gotoPosition(marker: number): boolean {
        const pos = this.positions.get(marker)
        if (!pos) return false
        
        this.session.write(ANSI.gotoxy(pos.x, pos.y))
        this.session.setColor(pos.color)
        return true
    }
    
    /**
     * Update text at a saved position
     */
    updatePosition(marker: number, text: string): boolean {
        if (!this.gotoPosition(marker)) return false
        this.session.write(text)
        return true
    }
    
    /**
     * Render with position marker support
     * Processes ^XNN codes during rendering
     */
    renderWithMarkers(options: IQArtworkRenderOptions): void {
        let content = this.loadContent(options.filename)
        
        // Process position markers
        content = content.replace(/\^X(\d{2})/g, (match, num) => {
            this.savePosition(parseInt(num))
            return '' // Remove marker from display
        })
        
        // Normal rendering
        this.render({ ...options, content })
    }
}
```

### Priority 3: Smart Input System

Enhanced input with validation, masks, and line editing.

**Implementation:**

```typescript
// packages/cli/src/runtime/input.ts

export interface InputOptions {
    maxLength?: number
    minLength?: number
    mask?: string  // e.g., "###-###-####" for phone
    allowedChars?: string | RegExp
    required?: boolean
    defaultValue?: string
    password?: boolean
    uppercase?: boolean
    lowercase?: boolean
    validator?: (value: string) => boolean | string  // true or error message
}

export interface InputFieldOptions extends InputOptions {
    prompt: string
    x?: number
    y?: number
    color?: string
}

export class InputField {
    private value: string = ''
    private cursorPos: number = 0
    private options: InputOptions
    private session: Session
    
    /**
     * Read input with advanced features
     */
    async read(): Promise<string> {
        let editing = true
        
        while (editing) {
            const key = await this.session.readKey()
            
            switch (key) {
                case 'ArrowLeft':
                    this.moveCursorLeft()
                    break
                case 'ArrowRight':
                    this.moveCursorRight()
                    break
                case 'Home':
                    this.moveCursorHome()
                    break
                case 'End':
                    this.moveCursorEnd()
                    break
                case 'Backspace':
                    this.deleteChar()
                    break
                case 'Delete':
                    this.deleteCharForward()
                    break
                case 'Enter':
                    if (this.validate()) {
                        editing = false
                    }
                    break
                default:
                    if (this.isAllowedChar(key)) {
                        this.insertChar(key)
                    }
            }
            
            this.redraw()
        }
        
        return this.value
    }
    
    private validate(): boolean {
        if (this.options.required && this.value.length === 0) {
            return false
        }
        
        if (this.options.minLength && this.value.length < this.options.minLength) {
            return false
        }
        
        if (this.options.validator) {
            const result = this.options.validator(this.value)
            return result === true
        }
        
        return true
    }
    
    private isAllowedChar(char: string): boolean {
        if (this.options.maxLength && this.value.length >= this.options.maxLength) {
            return false
        }
        
        if (this.options.allowedChars) {
            if (typeof this.options.allowedChars === 'string') {
                return this.options.allowedChars.includes(char)
            } else {
                return this.options.allowedChars.test(char)
            }
        }
        
        return true
    }
}

// Add to Runtime class
export class Runtime extends IQ {
    /**
     * Enhanced ask with options
     */
    async askField(options: InputFieldOptions): Promise<string> {
        if (options.x && options.y) {
            this.gotoxy(options.x, options.y)
        }
        
        if (options.prompt) {
            this.say(options.prompt)
        }
        
        const field = new InputField(options, this.session)
        return await field.read()
    }
}
```

### Priority 4: Auto-Pause and Page System

Implement automatic pausing at page length like original Iniquity.

**Implementation:**

```typescript
// Add to Session class

export class Session {
    private lineCount: number = 0
    private pageLength: number = 23  // User configurable
    private pauseEnabled: boolean = true
    
    /**
     * Track lines output and auto-pause
     */
    trackLine(): void {
        if (!this.pauseEnabled) return
        
        this.lineCount++
        
        if (this.lineCount >= this.pageLength) {
            this.lineCount = 0
            this.autoPause()
        }
    }
    
    /**
     * Auto-pause with options to continue/abort
     */
    async autoPause(): Promise<void> {
        const savedColor = this.getCurrentColor()
        
        this.write('\r\n' + ANSI.color('bright cyan'))
        this.write('--- More --- (Q=Quit, S=Skip, C=Continuous, Enter=Continue)')
        
        const key = await this.readKey()
        const upper = key.toUpperCase()
        
        // Clear the pause prompt
        this.write('\r' + ' '.repeat(65) + '\r')
        
        this.setColor(savedColor)
        
        if (upper === 'Q') {
            throw new PauseAbortError('User quit')
        } else if (upper === 'C') {
            this.pauseEnabled = false
        } else if (upper === 'S') {
            // Skip = disable pause for this screen only
            this.lineCount = -999
        }
        // Enter or any other key = continue
    }
    
    /**
     * Write and track lines
     */
    write(data: string): void {
        // Count newlines in data
        const newlines = (data.match(/\r?\n/g) || []).length
        this.lineCount += newlines
        
        if (this.lineCount >= this.pageLength) {
            this.lineCount = this.lineCount - this.pageLength
            this.autoPause()
        }
        
        // Normal write
        this.socket.write(data, 'binary')
    }
}
```

### Priority 5: Text Libraries (File Caching System)

Implement a caching system for frequently accessed ANSI files.

**Implementation:**

```typescript
// packages/cli/src/runtime/textlib.ts

export interface TextLibEntry {
    filename: string
    content: Buffer
    metadata: {
        size: number
        lastAccessed: number
        accessCount: number
        sauce?: SAUCEInfo
    }
}

export class TextLibrary {
    private cache: Map<string, TextLibEntry> = new Map()
    private maxCacheSize: number = 10 * 1024 * 1024  // 10MB default
    private currentSize: number = 0
    
    /**
     * Load file into cache
     */
    async cache(filename: string): Promise<void> {
        if (this.cache.has(filename)) {
            const entry = this.cache.get(filename)!
            entry.metadata.lastAccessed = Date.now()
            entry.metadata.accessCount++
            return
        }
        
        const content = await fs.promises.readFile(filename)
        
        // Check cache size
        if (this.currentSize + content.length > this.maxCacheSize) {
            this.evict()
        }
        
        const entry: TextLibEntry = {
            filename,
            content,
            metadata: {
                size: content.length,
                lastAccessed: Date.now(),
                accessCount: 1
            }
        }
        
        this.cache.set(filename, entry)
        this.currentSize += content.length
    }
    
    /**
     * Get cached file
     */
    get(filename: string): Buffer | null {
        const entry = this.cache.get(filename)
        if (!entry) return null
        
        entry.metadata.lastAccessed = Date.now()
        entry.metadata.accessCount++
        return entry.content
    }
    
    /**
     * Evict least recently used files
     */
    private evict(): void {
        // Sort by access count and last accessed
        const entries = Array.from(this.cache.entries())
            .sort((a, b) => {
                const scoreA = a[1].metadata.accessCount / 
                    (Date.now() - a[1].metadata.lastAccessed)
                const scoreB = b[1].metadata.accessCount / 
                    (Date.now() - b[1].metadata.lastAccessed)
                return scoreA - scoreB
            })
        
        // Remove bottom 25%
        const removeCount = Math.ceil(entries.length * 0.25)
        for (let i = 0; i < removeCount; i++) {
            const [filename, entry] = entries[i]
            this.cache.delete(filename)
            this.currentSize -= entry.metadata.size
        }
    }
}
```

---

## Implementation Priority Matrix

| Feature | Impact | Complexity | Priority | Est. Lines of Code |
|---------|--------|------------|----------|-------------------|
| MCI Code System | 🔥 High | Medium | **P1** | ~500 |
| Position Markers | 🔥 High | Medium | **P1** | ~300 |
| Smart Input | ⚡ Medium | High | **P2** | ~800 |
| Auto-Pause | ⚡ Medium | Low | **P2** | ~200 |
| Text Libraries | 💡 Low | Medium | **P3** | ~400 |
| Color Optimization | 💡 Low | Low | **P3** | ~150 |

---

## Architectural Learnings from Original Iniquity

### 1. **Separation of Concerns**
Original Iniquity had clear module boundaries:
- `INPUT.PAS` - All input handling
- `OUTPUT.PAS` - All output formatting
- `MCICODES.PAS` - Template processing
- `SHOWFILE.PAS` - File display
- `USERS.PAS` - User management
- `MSGAREA.PAS` - Message system
- `FILEAREA.PAS` - File system

**Our Runtime**: We have good separation with individual runtime modules. ✓

### 2. **Context-Aware Processing**
MCI codes were context-aware - different codes available in different contexts:
- Login screen: Different codes than message reading
- File listing: File-specific codes
- User listing: User-specific codes

**Recommendation**: Add context parameter to MCI processor:

```typescript
const mci = new MCIProcessor({
    context: 'login' | 'message' | 'file' | 'user' | 'system'
})
```

### 3. **Buffering and Caching**
Original Iniquity aggressively cached:
- Frequently displayed files
- User data
- Configuration
- Compiled screens

**Our Runtime**: No caching yet. Should add TextLibrary system.

### 4. **Progressive Enhancement**
Iniquity detected terminal capabilities and adapted:
- RIP graphics > AVATAR > ANSI > ASCII
- Different files for different capabilities

**Our Runtime**: We have terminal detection but don't fully utilize it for file selection.

---

## Code Compatibility Philosophy

The original Iniquity used these patterns that made sysop code simple:

```pascal
oStringLn(42);  // Display string #42 from string table
sfShowTextFile('WELCOME', ftNormal);  // Auto-detect best format
mciProcess('@UN called from @LO');  // Template processing
```

**Our Runtime Should Provide Similar Simplicity:**

```typescript
say(strings.welcome)  // String table lookup
artwork({ filename: 'welcome' }).render()  // Auto-detect .ans/.asc
mci.process('@UN called from @LO', context)  // Template processing
```

---

## Summary & Next Steps

### What We've Built Well:
✓ Modern TypeScript architecture
✓ Class-based modules with decorators  
✓ Reactive data (IQReactor)
✓ Menu and Frame systems
✓ SAUCE metadata parsing
✓ SyncTERM font support
✓ Clean separation of concerns

### What We Should Add from Original Iniquity:
1. **MCI Code System** - Comprehensive macro/template system
2. **Position Markers** - Update specific parts of rendered ANSI
3. **Smart Input** - Validation, masks, line editing
4. **Auto-Pause** - Automatic page breaks
5. **Text Libraries** - File caching system

### Philosophy:
Keep the modern architecture (TypeScript, async/await, decorators, reactive data) but add the powerful content management features that made original Iniquity so sysop-friendly.

---

**Estimated Total Implementation Time:**
- MCI System: 2-3 days
- Position Markers: 1-2 days  
- Smart Input: 3-4 days
- Auto-Pause: 1 day
- Text Libraries: 1-2 days

**Total: 8-12 days for full feature parity with original Iniquity's content management**

The result would be a modern runtime with the power and flexibility of the original, but with better architecture and extensibility.
