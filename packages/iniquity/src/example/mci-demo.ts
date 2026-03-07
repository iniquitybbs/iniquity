/**
 * MCI System Demo
 * @module runtime/mci/demo
 * @summary Demonstrates the comprehensive MCI code system
 * 
 * This example shows how to use the MCI system that combines features from:
 * - Synchronet BBS (@-codes with format modifiers)
 * - Original Iniquity (position markers, pipe codes)
 * - ENiGMA½ (text styles)
 * - Oblivion/2 (pipe color codes)
 */

import { IQ, IQModule, IQModuleRuntime } from '../core'

@IQModule({
    basepath: '/dist/assets',
    data: {
        bbsName: 'Iniquity BBS',
        version: '3.0.0'
    }
})
export class MCIDemo extends IQ {

    @IQModuleRuntime({ debug: true })
    async start() {
        // Set up MCI context with user and BBS info
        this.setMCIContext({
            user: {
                id: 1,
                alias: 'SysOp',
                realName: 'System Operator',
                securityLevel: 99,
                totalCalls: 1337,
                timeLeft: 60,
                uploadFiles: 42,
                downloadFiles: 100,
                ipAddress: '127.0.0.1'
            },
            bbs: {
                name: 'Iniquity BBS',
                sysopName: 'The SysOp',
                location: 'Cyberspace',
                version: '3.0.0'
            }
        })

        // Demo 1: Basic @-codes
        this.say('\n|11=== MCI Code System Demo ===|07\n')
        
        this.sayMCI('|09Welcome, |15@UN@|09!')
        this.sayMCI('|03You are connected to |11@BBS@|03')
        this.sayMCI('|03Your security level: |14@SEC@|03')
        this.sayMCI('|03Total calls: |14@CALLS@|03')
        this.sayMCI('|03Time remaining: |14@TIMELEFT@|03 minutes')

        await this.pause()

        // Demo 2: Format modifiers (Synchronet-style)
        this.say('\n|11=== Format Modifiers ===|07\n')
        
        this.sayMCI('|03Left-justified (20):  |15[@UN|L20@]|03')
        this.sayMCI('|03Right-justified (20): |15[@UN|R20@]|03')
        this.sayMCI('|03Centered (20):        |15[@UN|C20@]|03')
        this.sayMCI('|03Zero-padded (5):      |15[@SEC|Z5@]|03')

        await this.pause()

        // Demo 3: Pipe color codes
        this.say('\n|11=== Pipe Color Codes ===|07\n')
        
        this.sayMCI('|00Black |01Blue |02Green |03Cyan')
        this.sayMCI('|04Red |05Magenta |06Brown |07Gray')
        this.sayMCI('|08DkGray |09LtBlue |10LtGreen |11LtCyan')
        this.sayMCI('|12LtRed |13LtMag |14Yellow |15White|07')

        await this.pause()

        // Demo 4: Control codes
        this.say('\n|11=== Control Codes ===|07\n')
        
        this.sayMCI('|03This line has a |DE|15short delay|03 in it.')
        this.sayMCI('|03Beep! |BL')
        
        await this.pause()

        // Demo 5: Terminal info
        this.say('\n|11=== Terminal Information ===|07\n')
        
        this.sayMCI('|03Terminal type: |14@TERM@|03')
        this.sayMCI('|03Dimensions: |14@COLS@|03x|14@ROWS@|03')
        this.sayMCI('|03ANSI support: |14@ANSI@|03')
        this.sayMCI('|03UTF-8 support: |14@UTF8@|03')

        await this.pause()

        // Demo 6: System information
        this.say('\n|11=== System Information ===|07\n')
        
        this.sayMCI('|03Current date: |14@DATE@|03')
        this.sayMCI('|03Current time: |14@TIME@|03')
        this.sayMCI('|03Node number: |14@NODE@|03 of |14@TNODES@|03')
        this.sayMCI('|03BBS version: |14@VER@|03')

        await this.pause()

        // Demo 7: Text styles (ENiGMA-style)
        this.say('\n|11=== Text Styles ===|07\n')
        
        const styles = ['upper', 'lower', 'title', 'l33t', 'mixed']
        for (const style of styles) {
            const styled = this.mci.applyTextStyle('Hello World', style)
            this.say(`|03${style.padEnd(10)}: |15${styled}|07`)
        }

        await this.pause()

        // Demo 8: Position markers
        this.say('\n|11=== Position Markers ===|07\n')
        
        this.say('|03Position markers allow you to save cursor positions')
        this.say('|03and update specific parts of the screen later.')
        this.say('')
        this.say('|03Status: |15^X01Initializing...|07')
        
        // Save position 1 at current location
        this.mci.savePosition(1)
        
        await this.wait(1000)
        
        // Go back to position 1 and update
        const gotoSeq = this.mci.gotoPosition(1)
        if (gotoSeq) {
            this.session.write(gotoSeq + '|10Ready!        |07')
        }

        this.say('\n')
        await this.pause()

        // Demo 9: Custom variables
        this.say('\n|11=== Custom Variables ===|07\n')
        
        this.setMCIVar('CUSTOM1', 'My Custom Value')
        this.setMCIVar('SCORE', 9001)
        
        this.say('|03Custom variables can be set and retrieved:')
        this.say(`|03CUSTOM1: |15${this.getMCIVar('CUSTOM1')}|07`)
        this.say(`|03SCORE: |15${this.getMCIVar('SCORE')}|07`)

        await this.pause()

        // Demo complete
        this.say('\n|11=== Demo Complete ===|07\n')
        this.sayMCI('|03Thank you for exploring the MCI system, |15@UN@|03!')
        this.say('')
    }
}

export default MCIDemo
