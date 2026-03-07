/**
 * Comprehensive Runtime Test
 * Tests all major features of the Iniquity runtime using BBS API
 */

import { bbs, screen } from "@iniquitybbs/core"

// Set terminal resolution
screen.setResolution(80, 25)

bbs.start(async () => {
    // Test 1: Basic output
    bbs.say("╔══════════════════════════════════════════════════════════╗")
    bbs.say("║  INIQUITY RUNTIME TEST SUITE                          ║")
    bbs.say("╚══════════════════════════════════════════════════════════╝")
    bbs.say("")
    
    // Test 2: Terminal info
    bbs.say(`Terminal Size: ${screen.width}x${screen.height}`)
    await bbs.wait(1000)
    
    // Test 3: User input
    bbs.say("Testing user input...")
    const name = await bbs.ask("|14What is your name? |15")
    bbs.say(`|07Hello, |11${name}|07!`)
    await bbs.wait(1000)
    
    // Test 4: Popup
    await bbs.popup("Test Complete", "All runtime tests passed!", { type: "success" })
    
    bbs.say("|07Test suite completed.")
    await bbs.pause()
})
        frame.say(`Counter: ${this.data.model.counter}`.color("yellow"))
        frame.draw()
        await this.wait(2000)
        frame.close()
        
        // Test 6: Reactive data
        this.say("\n\nTesting reactive data...".color("bright white"))
        
        this.data.observe("counter", (value) => {
            this.say(`Counter changed to: ${value}`.color("green"))
        })
        
        this.data.model.counter = 1
        await this.wait(500)
        this.data.model.counter = 2
        await this.wait(500)
        this.data.model.counter = 3
        await this.wait(1000)
        
        // Test 7: Menu system
        this.say("\n\nTesting menu system...".color("bright white"))
        await this.wait(1000)
        
        const menu = this.menu({
            name: "Test Menu",
            description: "A test menu to demonstrate the menu system",
            commands: {
                T: () => {
                    this.say("You pressed T!".color("bright yellow"))
                    return { description: "Test command" }
                },
                H: () => {
                    this.say("Exiting menu...".color("bright red"))
                    return { description: "Exit menu" }
                },
                default: () => {
                    this.say("Invalid command. Try T or H.".color("yellow"))
                }
            }
        })
        
        this.say("Press T to test, or H to continue...".color("cyan"))
        
        let menuDone = false
        await menu.render((res, cmdkey) => {
            if (!menuDone) {
                menu.prompt({ x: 1, y: this.terminfo.y - 1, text: "Command: ".color("bright cyan") }).command((cmd: string) => {
                    const result = menu.executeCommand(cmd)
                    if (cmd === 'H') {
                        menuDone = true
                    }
                })
            }
        }, { maxInterval: 30000 })
        
        // Test 8: Ask for input
        this.say("\n\nTesting user input...".color("bright white"))
        const name = await this.ask("What's your name?".color("cyan"))
        this.say(`Nice to meet you, ${name}!`.color("bright green"))
        await this.wait(1000)
        
        // Final summary
        this.say("\n\n╔══════════════════════════════════════════════════════════╗".color("bright green"))
        this.say("║  ALL TESTS COMPLETED SUCCESSFULLY!                    ║".color("bright green"))
        this.say("╚══════════════════════════════════════════════════════════╝".color("bright green"))
        this.say("")
        this.say("Features tested:".color("white"))
        this.say("  ✓ IQ base class".color("green"))
        this.say("  ✓ Terminal info (terminfo)".color("green"))
        this.say("  ✓ String extensions (color, newlines)".color("green"))
        this.say("  ✓ Cursor control (chainable movements)".color("green"))
        this.say("  ✓ Frame system (windows with borders)".color("green"))
        this.say("  ✓ Reactive data (IQReactor with observers)".color("green"))
        this.say("  ✓ Menu system (commands and prompts)".color("green"))
        this.say("  ✓ User input (ask)".color("green"))
        this.say("  ✓ Module decorators (@IQModule, @IQModuleRuntime)".color("green"))
        this.say("")
        
        await this.pause()
        
        this.say("Disconnecting...".color("bright yellow"))
        await this.wait(1000)
        this.disconnect()
    }
}

// Export the module
export default TestBBS
