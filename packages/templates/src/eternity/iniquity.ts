/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Eternity BBS Template
 * A minimal BBS template demonstrating Iniquity basics
 * @file iniquity.ts
 */

import { bbs, screen } from "@iniquitybbs/core"
import config from "./iniquity.json"

// Set terminal resolution
screen.setResolution(132, 37)

bbs.start(async () => {
    // Check terminal size
    if (screen.width < 132 || screen.height < 37) {
        bbs.say("|12Your terminal is too small.")
        bbs.say("|07Please set your terminal to 132x37.")
        await bbs.wait(3000)
        bbs.hangup()
        return
    }

    // Display welcome artwork
    await bbs.art("iqascii.ans", { clearScreen: false })
    await bbs.wait(2000)

    await bbs.art("cx-iqwfc.ans", { 
        display: "character", 
        speed: 40, 
        clearScreen: false 
    })
    await bbs.wait(2000)

    // Welcome message
    await bbs.art("zv_iniq-132.ans", { 
        clearScreen: true, 
        display: "line", 
        speed: 50,
        pauseAfter: true
    })

    // Main menu artwork
    await bbs.art("we-iniq3.ans", { clearScreen: true })

    // Login prompt
    const answer = await bbs.ask("|07Would you like to come inside? (y/n) |15")

    if (answer.toLowerCase() !== "y") {
        await bbs.art("4d-iniq1.ans", { clearScreen: true })
        bbs.say("|07Thanks for stopping by!")
        await bbs.pause()
        return
    }

    // Login flow
    const user = await bbs.loginForm()
    
    if (!user) {
        bbs.say("|12Login failed.")
        await bbs.wait(2000)
        bbs.hangup()
        return
    }

    // Main menu
    await bbs.art("us-wfc.ans", { clearScreen: true })
    await bbs.wait(5000)

    // Logoff
    await bbs.art("4d-iniq1.ans", { clearScreen: true })
    bbs.say(`|07Goodbye, |11${user.handle}|07, and thanks for calling!`)
    await bbs.pause()
})
