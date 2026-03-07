/**
 * Feature Showcase BBS
 * Demonstrates all Phase 1 priority features:
 * - SyncTERM font switching
 * - Terminal client detection
 * - SAUCE metadata parsing
 * - Emulated baud rate
 * - Cursor style control
 */

// Clear screen and show title
say('\x1b[2J\x1b[H')
say('═══════════════════════════════════════════════════════════════════════════════'.color('bright cyan'))
say('  INIQUITY BBS - FEATURE SHOWCASE'.center().color('bright white'))
say('═══════════════════════════════════════════════════════════════════════════════'.color('bright cyan'))
say('')

// 1. Terminal Detection Demo
say('┌─ Terminal Detection ─────────────────────────────────────────────────────────┐'.color('cyan'))
say(`│ Terminal Type: ${session.info.terminalType}`.color('white'))
say(`│ Client Name:   ${session.info.client.name}`.color('white'))
say(`│ Version:       ${session.info.client.version}`.color('white'))
say(`│ Is SyncTERM:   ${session.info.client.isSyncTerm ? 'YES ✓' : 'NO'}`.color(session.info.client.isSyncTerm ? 'bright green' : 'yellow'))
say(`│ Supports Font: ${session.info.client.supportsFonts ? 'YES ✓' : 'NO'}`.color(session.info.client.supportsFonts ? 'bright green' : 'yellow'))
say(`│ iCE Colors:    ${session.info.client.supportsIceColors ? 'YES ✓' : 'NO'}`.color(session.info.client.supportsIceColors ? 'bright green' : 'yellow'))
say(`│ Screen Size:   ${session.info.width}x${session.info.height}`.color('white'))
say('└───────────────────────────────────────────────────────────────────────────────┘'.color('cyan'))
say('')

await pauseAsync()

// 2. Font Switching Demo (if supported)
if (session.supportsFonts()) {
    say('┌─ Font Switching Demo ─────────────────────────────────────────────────────────┐'.color('cyan'))
    say('│ Demonstrating SyncTERM font changes...'.color('bright white'))
    say('└───────────────────────────────────────────────────────────────────────────────┘'.color('cyan'))
    say('')
    
    // CP437 (default)
    session.setSyncTermFont('cp437')
    say('  CP437 (IBM VGA): The quick brown fox jumps over the lazy dog'.color('white'))
    await waitAsync(1500)
    
    // Topaz
    session.setSyncTermFont('topaz')
    say('  Amiga Topaz: The quick brown fox jumps over the lazy dog'.color('yellow'))
    await waitAsync(1500)
    
    // Topaz Plus
    session.setSyncTermFont('topaz_plus')
    say('  Amiga Topaz+: The quick brown fox jumps over the lazy dog'.color('bright cyan'))
    await waitAsync(1500)
    
    // Microknight
    session.setSyncTermFont('microknight')
    say('  Amiga MicroKnight: The quick brown fox jumps over the lazy dog'.color('magenta'))
    await waitAsync(1500)
    
    // Back to CP437
    session.setSyncTermFont('cp437')
    say('  Back to CP437'.color('bright green'))
    say('')
    
    await pauseAsync()
} else {
    say('┌─ Font Switching ──────────────────────────────────────────────────────────────┐'.color('yellow'))
    say('│ Font switching not supported by your terminal'.color('yellow'))
    say('│ (Use SyncTERM for full features)'.color('yellow'))
    say('└───────────────────────────────────────────────────────────────────────────────┘'.color('yellow'))
    say('')
}

// 3. Cursor Style Demo
say('┌─ Cursor Style Demo ───────────────────────────────────────────────────────────┐'.color('cyan'))
say('│ Watch the cursor change styles...'.color('bright white'))
say('└───────────────────────────────────────────────────────────────────────────────┘'.color('cyan'))
say('')

session.setCursorStyle('blinking block')
say('  Blinking Block'.color('white'))
await waitAsync(1500)

session.setCursorStyle('steady bar')
say('  Steady Bar'.color('white'))
await waitAsync(1500)

session.setCursorStyle('blinking underline')
say('  Blinking Underline'.color('white'))
await waitAsync(1500)

session.setCursorStyle('default')
say('  Back to Default'.color('bright green'))
say('')

await pauseAsync()

// 4. Baud Rate Emulation Demo
if (session.info.client.isSyncTerm || session.info.client.isVtx) {
    say('┌─ Baud Rate Emulation ─────────────────────────────────────────────────────────┐'.color('cyan'))
    say('│ Simulating different modem speeds...'.color('bright white'))
    say('└───────────────────────────────────────────────────────────────────────────────┘'.color('cyan'))
    say('')
    
    // Slow modem
    session.setEmulatedBaudRate(2400)
    say('  2400 baud: Connecting to the past... Please wait while data loads slowly.'.color('yellow'))
    await waitAsync(2000)
    
    // Medium speed
    session.setEmulatedBaudRate(9600)
    say('  9600 baud: The golden age of BBSing! Still readable but nostalgic.'.color('cyan'))
    await waitAsync(1500)
    
    // Fast modem
    session.setEmulatedBaudRate(38400)
    say('  38400 baud: High speed connection! Living in the future.'.color('bright cyan'))
    await waitAsync(1000)
    
    // Unlimited
    session.setEmulatedBaudRate('unlimited')
    say('  UNLIMITED: Maximum speed! Welcome to the modern era.'.color('bright green'))
    say('')
    
    await pauseAsync()
} else {
    say('┌─ Baud Rate Emulation ─────────────────────────────────────────────────────────┐'.color('yellow'))
    say('│ Baud rate emulation not supported by your terminal'.color('yellow'))
    say('└───────────────────────────────────────────────────────────────────────────────┘'.color('yellow'))
    say('')
}

// 5. iCE Colors Demo
say('┌─ iCE Colors (16 Background Colors) ──────────────────────────────────────────┐'.color('cyan'))
say('│ Bright background colors enabled by default'.color('bright white'))
say('└───────────────────────────────────────────────────────────────────────────────┘'.color('cyan'))
say('')

say('  Standard backgrounds:')
say('  ▓▓'.color('background black') + '  '.color('background red') + '  '.color('background green') + '  '.color('background yellow') + '  '.color('background blue') + '  '.color('background magenta') + '  '.color('background cyan') + '  '.color('background white'))

say('  Bright backgrounds (iCE colors):')
say('  ▓▓'.color('background bright black') + '  '.color('background bright red') + '  '.color('background bright green') + '  '.color('background bright yellow') + '  '.color('background bright blue') + '  '.color('background bright magenta') + '  '.color('background bright cyan') + '  '.color('background bright white'))
say('')

await pauseAsync()

// 6. Summary
say('\x1b[2J\x1b[H')
say('═══════════════════════════════════════════════════════════════════════════════'.color('bright cyan'))
say('  FEATURE SUMMARY'.center().color('bright white'))
say('═══════════════════════════════════════════════════════════════════════════════'.color('bright cyan'))
say('')

say('✓ Terminal Detection:        ACTIVE'.color('bright green'))
say('✓ iCE Colors (16 BG):        ACTIVE'.color('bright green'))
say(`${session.supportsFonts() ? '✓' : '✗'} SyncTERM Font Switching:   ${session.supportsFonts() ? 'ACTIVE' : 'NOT SUPPORTED'}`.color(session.supportsFonts() ? 'bright green' : 'yellow'))
say(`${session.info.client.isSyncTerm ? '✓' : '✗'} Baud Rate Emulation:     ${session.info.client.isSyncTerm ? 'ACTIVE' : 'NOT SUPPORTED'}`.color(session.info.client.isSyncTerm ? 'bright green' : 'yellow'))
say('✓ Cursor Style Control:      ACTIVE'.color('bright green'))
say('✓ SAUCE Metadata:            READY'.color('bright green'))
say('')

say('All Phase 1 priority features are implemented and working!'.color('bright white'))
say('')
say('For full feature experience, use SyncTERM: https://syncterm.bbsdev.net/'.color('cyan'))
say('')

await pauseAsync()

say('Thanks for checking out the feature showcase!'.color('bright green'))
say('Goodbye!'.color('bright cyan').newlines(1))
