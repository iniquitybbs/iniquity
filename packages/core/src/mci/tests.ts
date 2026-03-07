/**
 * MCI System Tests
 * @module runtime/mci/tests
 * @summary Unit and integration tests for the MCI code system
 */

import {
    MCIProcessor,
    createMCIProcessor,
    MCIContext,
    createDefaultMCIContext,
    AtCodeProcessor,
    PipeCodeProcessor,
    ControlCodeProcessor,
    PositionMarkerProcessor,
    parseFormatModifier,
    applyFormat,
    leftJustify,
    rightJustify,
    center,
    zeroPad,
    addThousandsSeparator,
    toFullWidth,
    TextStyleProcessor,
    styleL33t,
    styleTitle,
    styleUpper,
    styleLower,
    styleMixed,
    createPositionMarker,
    stripPositionMarkers,
    findAllPositionMarkers
} from './index'

const ESC = '\x1b'

function runTests() {
    let passed = 0
    let failed = 0

    function test(name: string, fn: () => boolean) {
        try {
            if (fn()) {
                console.log(`✓ ${name}`)
                passed++
            } else {
                console.log(`✗ ${name}`)
                failed++
            }
        } catch (err) {
            console.log(`✗ ${name} - Error: ${err}`)
            failed++
        }
    }

    console.log('\n=== MCI Context Tests ===\n')

    test('createDefaultMCIContext creates valid context', () => {
        const ctx = createDefaultMCIContext()
        return ctx.user !== undefined &&
               ctx.system !== undefined &&
               ctx.bbs !== undefined &&
               ctx.terminal !== undefined
    })

    test('default user context has alias "Guest"', () => {
        const ctx = createDefaultMCIContext()
        return ctx.user?.alias === 'Guest'
    })

    test('default BBS context has name "Iniquity BBS"', () => {
        const ctx = createDefaultMCIContext()
        return ctx.bbs?.name === 'Iniquity BBS'
    })

    console.log('\n=== @-Code Tests ===\n')

    test('AtCodeProcessor returns user alias', () => {
        const processor = new AtCodeProcessor()
        const ctx = createDefaultMCIContext()
        ctx.user!.alias = 'TestUser'
        const value = processor.getValue('UN', ctx)
        return value === 'TestUser'
    })

    test('AtCodeProcessor handles aliases (ALIAS = UN)', () => {
        const processor = new AtCodeProcessor()
        const ctx = createDefaultMCIContext()
        ctx.user!.alias = 'TestUser'
        return processor.getValue('ALIAS', ctx) === processor.getValue('UN', ctx)
    })

    test('AtCodeProcessor returns BBS name', () => {
        const processor = new AtCodeProcessor()
        const ctx = createDefaultMCIContext()
        ctx.bbs!.name = 'My BBS'
        return processor.getValue('BBS', ctx) === 'My BBS'
    })

    test('AtCodeProcessor returns terminal dimensions', () => {
        const processor = new AtCodeProcessor()
        const ctx = createDefaultMCIContext()
        ctx.terminal!.width = 132
        ctx.terminal!.height = 50
        return processor.getValue('COLS', ctx) === '132' &&
               processor.getValue('ROWS', ctx) === '50'
    })

    console.log('\n=== Pipe Color Code Tests ===\n')

    test('PipeCodeProcessor converts |07 to light gray', () => {
        const processor = new PipeCodeProcessor()
        const result = processor.process('|07Hello')
        return result.includes(`${ESC}[0;37m`)
    })

    test('PipeCodeProcessor converts |15 to white (bright)', () => {
        const processor = new PipeCodeProcessor()
        const result = processor.process('|15Hello')
        return result.includes(`${ESC}[1;37m`)
    })

    test('PipeCodeProcessor converts |17 to blue background', () => {
        const processor = new PipeCodeProcessor()
        const result = processor.process('|17Hello')
        return result.includes(`${ESC}[44m`)
    })

    test('PipeCodeProcessor handles multiple codes', () => {
        const processor = new PipeCodeProcessor()
        const result = processor.process('|09Blue |12Red')
        return result.includes(`${ESC}[1;34m`) && result.includes(`${ESC}[1;31m`)
    })

    console.log('\n=== Control Code Tests ===\n')

    test('ControlCodeProcessor returns clear screen for CS', () => {
        const processor = new ControlCodeProcessor()
        const action = processor.getAction('CS')
        return action?.type === 'ansi' && action.sequence.includes(`${ESC}[2J`)
    })

    test('ControlCodeProcessor returns pause action for PA', () => {
        const processor = new ControlCodeProcessor()
        const action = processor.getAction('PA')
        return action?.type === 'pause'
    })

    test('ControlCodeProcessor handles delay codes', () => {
        const processor = new ControlCodeProcessor()
        const de = processor.getAction('DE')
        const dm = processor.getAction('DM')
        const dl = processor.getAction('DL')
        return de?.type === 'delay' && de.ms === 500 &&
               dm?.type === 'delay' && dm.ms === 1000 &&
               dl?.type === 'delay' && dl.ms === 2000
    })

    test('ControlCodeProcessor handles cursor movement', () => {
        const processor = new ControlCodeProcessor()
        const up = processor.processParameterizedCode('UP', '5')
        const down = processor.processParameterizedCode('DOWN', '3')
        return up?.type === 'ansi' && up.sequence === `${ESC}[5A` &&
               down?.type === 'ansi' && down.sequence === `${ESC}[3B`
    })

    console.log('\n=== Position Marker Tests ===\n')

    test('PositionMarkerProcessor saves and retrieves positions', () => {
        const processor = new PositionMarkerProcessor()
        processor.savePosition(1, { x: 10, y: 5 })
        const marker = processor.getPosition(1)
        return marker?.x === 10 && marker?.y === 5
    })

    test('PositionMarkerProcessor processes ^X codes in text', () => {
        const processor = new PositionMarkerProcessor()
        const result = processor.processMarkerCode('Hello ^X01 World ^X02')
        return result.result === 'Hello  World ' &&
               result.markersFound.includes(1) &&
               result.markersFound.includes(2)
    })

    test('createPositionMarker creates valid marker string', () => {
        return createPositionMarker(1) === '^X01' &&
               createPositionMarker(99) === '^X99'
    })

    test('stripPositionMarkers removes all markers', () => {
        const result = stripPositionMarkers('Hello ^X01 World ^X99')
        return result === 'Hello  World '
    })

    test('findAllPositionMarkers finds all unique markers', () => {
        const markers = findAllPositionMarkers('^X01 ^X05 ^X01 ^X99')
        return markers.length === 3 &&
               markers.includes(1) &&
               markers.includes(5) &&
               markers.includes(99)
    })

    console.log('\n=== Format Modifier Tests ===\n')

    test('parseFormatModifier parses pipe format', () => {
        const result = parseFormatModifier('UN|L20')
        return result.code === 'UN' &&
               result.modifier === 'L' &&
               result.width === 20
    })

    test('parseFormatModifier parses hyphen format', () => {
        const result = parseFormatModifier('BBS-R30')
        return result.code === 'BBS' &&
               result.modifier === 'R' &&
               result.width === 30
    })

    test('parseFormatModifier parses colon parameter', () => {
        const result = parseFormatModifier('DATE:short')
        return result.code === 'DATE' && result.param === 'short'
    })

    test('leftJustify pads correctly', () => {
        return leftJustify('Hi', 5) === 'Hi   ' &&
               leftJustify('Hello World', 5) === 'Hello'
    })

    test('rightJustify pads correctly', () => {
        return rightJustify('Hi', 5) === '   Hi' &&
               rightJustify('Hello World', 5) === 'Hello'
    })

    test('center pads correctly', () => {
        return center('Hi', 6) === '  Hi  ' &&
               center('A', 5) === '  A  '
    })

    test('zeroPad pads numbers correctly', () => {
        return zeroPad('42', 5) === '00042' &&
               zeroPad('123', 3) === '123'
    })

    test('addThousandsSeparator formats numbers', () => {
        return addThousandsSeparator('1234567') === '1,234,567' &&
               addThousandsSeparator('1234.56') === '1,234.56'
    })

    test('toFullWidth converts ASCII to fullwidth', () => {
        const result = toFullWidth('ABC')
        return result === '\uFF21\uFF22\uFF23'
    })

    console.log('\n=== Text Style Tests ===\n')

    test('styleUpper converts to uppercase', () => {
        return styleUpper('hello') === 'HELLO'
    })

    test('styleLower converts to lowercase', () => {
        return styleLower('HELLO') === 'hello'
    })

    test('styleTitle converts to title case', () => {
        return styleTitle('hello world') === 'Hello World'
    })

    test('styleL33t converts to leet speak', () => {
        const result = styleL33t('elite')
        return result === '3l173'
    })

    test('TextStyleProcessor applies custom styles', () => {
        const processor = new TextStyleProcessor()
        processor.registerStyle('reverse', (text) => text.split('').reverse().join(''))
        return processor.apply('hello', 'reverse') === 'olleh'
    })

    console.log('\n=== MCIProcessor Integration Tests ===\n')

    test('MCIProcessor processes @-codes', () => {
        const processor = createMCIProcessor()
        processor.setUser({ alias: 'TestUser' })
        const result = processor.process('Hello @UN@!')
        return result === 'Hello TestUser!'
    })

    test('MCIProcessor processes pipe codes', () => {
        const processor = createMCIProcessor()
        const result = processor.process('|09Blue')
        return result.includes(`${ESC}[1;34m`)
    })

    test('MCIProcessor processes control codes', () => {
        const processor = createMCIProcessor()
        const result = processor.process('Hello|NLWorld')
        return result.includes('\r\n')
    })

    test('MCIProcessor processes format modifiers', () => {
        const processor = createMCIProcessor()
        processor.setUser({ alias: 'Test' })
        const result = processor.process('@UN|L10@')
        return result === 'Test      '
    })

    test('MCIProcessor handles position markers', () => {
        const processor = createMCIProcessor()
        const result = processor.processWithDetails('Hello ^X01 World')
        return result.markersFound.includes(1) &&
               !result.text.includes('^X01')
    })

    test('MCIProcessor setContext updates context', () => {
        const processor = createMCIProcessor()
        processor.setContext({
            user: { id: 1, alias: 'Admin', securityLevel: 99, totalCalls: 100 },
            bbs: { name: 'Test BBS' }
        })
        const ctx = processor.getContext()
        return ctx.user?.alias === 'Admin' && ctx.bbs?.name === 'Test BBS'
    })

    test('MCIProcessor custom variables work', () => {
        const processor = createMCIProcessor()
        processor.setCustom('MYVAR', 'CustomValue')
        return processor.getCustom('MYVAR') === 'CustomValue'
    })

    test('MCIProcessor processes GOTOXY code', () => {
        const processor = createMCIProcessor()
        const result = processor.process('@GOTOXY:10,5@')
        return result === `${ESC}[5;10H`
    })

    test('MCIProcessor processes cursor movement codes', () => {
        const processor = createMCIProcessor()
        const result = processor.process('@UP:3@@DOWN:2@')
        return result.includes(`${ESC}[3A`) && result.includes(`${ESC}[2B`)
    })

    console.log('\n=== Summary ===\n')
    console.log(`Passed: ${passed}`)
    console.log(`Failed: ${failed}`)
    console.log(`Total: ${passed + failed}`)

    return failed === 0
}

export { runTests }

if (require.main === module) {
    const success = runTests()
    process.exit(success ? 0 : 1)
}
