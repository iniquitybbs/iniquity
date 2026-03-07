/**
 * MCI System Demo
 * @module mci/demo
 * @summary Demonstrates the comprehensive MCI code system using BBS API
 */

import { bbs, screen } from "@iniquitybbs/core"

screen.setResolution(80, 25)

bbs.start(async () => {
    // Demo 1: Basic MCI codes
    bbs.say('\n|11=== MCI Code System Demo ===|07\n')
    
    bbs.say('|09Welcome to Iniquity BBS!')
    bbs.say('|03MCI codes allow dynamic content in artwork and text.')
    bbs.say('|03Example: @USER@, @DATE@, @TIME@, etc.')

    await bbs.pause()

    // Demo 2: Artwork with MCI data
    bbs.say('\n|11=== Artwork with MCI Data ===|07\n')
    
    await bbs.art("test.ans", {
        display: "instant",
        data: {
            BBSNAME: "Iniquity BBS",
            VERSION: "3.0.0",
            CALLS: 1337
        }
    })

    await bbs.pause()

    // Demo 3: Popups
    await bbs.popup("MCI Demo", "MCI system demonstration complete!", { type: "success" })
    
    bbs.say("|07Demo completed.")
})
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
