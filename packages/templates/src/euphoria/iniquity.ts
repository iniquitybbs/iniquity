/**
 * Euphoria BBS Template
 * Using IQMenu system for navigation
 * @author ispyhumanfly
 * @license MIT
 */
import { 
    artwork, 
    say, 
    pause, 
    hangup, 
    menu,
    IQMenu
} from "@iniquitybbs/core"

// ============================================================================
// Helper Functions
// ============================================================================

async function comingSoon(): Promise<void> {
    say("\r\n|07This feature is coming soon! Press any key...")
    await pause()
}

async function displayBulletin(num: string): Promise<void> {
    say("|09╔══════════════════════════════════════════════════════════════════════════════╗\r\n")
    
    switch (num) {
        case "1":
            say("|09║|15                        SYSTEM NEWS & ANNOUNCEMENTS                         |09║\r\n")
            say("|09╠══════════════════════════════════════════════════════════════════════════════╣\r\n")
            say("|09║                                                                              ║\r\n")
            say("|09║  |07Welcome to Euphoria BBS!                                                  |09║\r\n")
            say("|09║                                                                              ║\r\n")
            say("|09║  |07This BBS is powered by Iniquity 3, a modern TypeScript-based BBS         |09║\r\n")
            say("|09║  |07platform that brings the classic BBS experience to the modern era.       |09║\r\n")
            say("|09║                                                                              ║\r\n")
            say("|09║  |11Latest Updates:                                                           |09║\r\n")
            say("|09║  |07• New IQMenu system implemented                                          |09║\r\n")
            say("|09║  |07• ANSI art rendering improved                                            |09║\r\n")
            say("|09║  |07• MCI code support enhanced                                              |09║\r\n")
            break
        case "2":
            say("|09║|15                           BBS RULES & GUIDELINES                            |09║\r\n")
            say("|09╠══════════════════════════════════════════════════════════════════════════════╣\r\n")
            say("|09║                                                                              ║\r\n")
            say("|09║  |071. Be respectful to all users                                             |09║\r\n")
            say("|09║  |072. No illegal content or activities                                      |09║\r\n")
            say("|09║  |073. Keep discussions civil and on-topic                                   |09║\r\n")
            say("|09║  |074. No spamming or flooding                                               |09║\r\n")
            say("|09║  |075. Respect the SysOp's decisions                                         |09║\r\n")
            say("|09║  |076. Have fun and enjoy the retro experience!                              |09║\r\n")
            break
        case "3":
            say("|09║|15                            ABOUT EUPHORIA BBS                               |09║\r\n")
            say("|09╠══════════════════════════════════════════════════════════════════════════════╣\r\n")
            say("|09║                                                                              ║\r\n")
            say("|09║  |07Euphoria BBS is a demonstration template for the Iniquity 3 BBS          |09║\r\n")
            say("|09║  |07software platform.                                                       |09║\r\n")
            say("|09║                                                                              ║\r\n")
            say("|09║  |07Iniquity 3 is written in TypeScript and provides a modern                |09║\r\n")
            say("|09║  |07development experience while maintaining the classic BBS feel.           |09║\r\n")
            break
        default:
            say("|09║|15                               BULLETIN #" + num + "                                  |09║\r\n")
            say("|09╠══════════════════════════════════════════════════════════════════════════════╣\r\n")
            say("|09║                                                                              ║\r\n")
            say("|09║  |07This bulletin is under construction.                                     |09║\r\n")
    }
    
    say("|09║                                                                              ║\r\n")
    say("|09╚══════════════════════════════════════════════════════════════════════════════╝\r\n")
    say("\r\n")
    await pause("|07Press any key to return...")
}

// ============================================================================
// Menu Definitions using IQMenu with artwork and auto-rendered items
// ============================================================================

// Messages Menu
const messagesMenu: IQMenu = menu({
    name: "Messages",
    basepath: "assets",
    prompt: "|14Messages |07» |15",
    autoRenderItems: true,
    itemFormat: "|09║  |11[|15{key}|11] |07{label}|09\r\n",
    commands: {
        "1": comingSoon, "2": comingSoon, "3": comingSoon,
        "4": comingSoon, "5": comingSoon, "6": comingSoon,
        R: comingSoon, P: comingSoon, S: comingSoon,
        Q: () => "back"
    }
})
.addItem({ key: "1", label: "General Discussion" })
.addItem({ key: "2", label: "BBS Discussion" })
.addItem({ key: "3", label: "Retro Computing" })
.addItem({ key: "4", label: "Programming & Coding" })
.addItem({ key: "5", label: "Art & ANSI Scene" })
.addItem({ key: "6", label: "Off-Topic / Random" })
.addItem({ key: "R", label: "Read Messages" })
.addItem({ key: "P", label: "Post New Message" })
.addItem({ key: "S", label: "Scan for New" })
.addItem({ key: "Q", label: "Return to Main Menu" })

// Files Menu
const filesMenu: IQMenu = menu({
    name: "Files",
    basepath: "assets",
    prompt: "|14Files |07» |15",
    autoRenderItems: true,
    itemFormat: "|09║  |11[|15{key}|11] |07{label}|09\r\n",
    commands: {
        "1": comingSoon, "2": comingSoon, "3": comingSoon,
        "4": comingSoon, "5": comingSoon, "6": comingSoon,
        L: comingSoon, D: comingSoon, U: comingSoon, S: comingSoon, N: comingSoon,
        Q: () => "back"
    }
})
.addItem({ key: "1", label: "BBS Software & Utilities" })
.addItem({ key: "2", label: "DOS Games & Apps" })
.addItem({ key: "3", label: "Programming Tools" })
.addItem({ key: "4", label: "Graphics & ANSI Art" })
.addItem({ key: "5", label: "Music & MOD Files" })
.addItem({ key: "6", label: "Text Files & E-Zines" })
.addItem({ key: "L", label: "List Files" })
.addItem({ key: "D", label: "Download File" })
.addItem({ key: "U", label: "Upload File" })
.addItem({ key: "S", label: "Search Files" })
.addItem({ key: "N", label: "New Files Since Last Call" })
.addItem({ key: "Q", label: "Return to Main Menu" })

// Bulletins Menu
const bulletinsMenu: IQMenu = menu({
    name: "Bulletins",
    basepath: "assets",
    prompt: "|14Bulletins |07» |15",
    autoRenderItems: true,
    itemFormat: "|09║  |11[|15{key}|11] |07{label}|09\r\n",
    commands: {
        "1": async () => { await displayBulletin("1") },
        "2": async () => { await displayBulletin("2") },
        "3": async () => { await displayBulletin("3") },
        "4": async () => { await displayBulletin("4") },
        "5": async () => { await displayBulletin("5") },
        "6": async () => { await displayBulletin("6") },
        Q: () => "back"
    }
})
.addItem({ key: "1", label: "System News & Announcements" })
.addItem({ key: "2", label: "BBS Rules & Guidelines" })
.addItem({ key: "3", label: "About Euphoria BBS" })
.addItem({ key: "4", label: "SysOp Information" })
.addItem({ key: "5", label: "Network Information" })
.addItem({ key: "6", label: "Credits & Thanks" })
.addItem({ key: "Q", label: "Return to Main Menu" })

// Users Menu
const usersMenu: IQMenu = menu({
    name: "Users",
    basepath: "assets",
    prompt: "|14Users |07» |15",
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}\r\n",
    commands: {
        Q: () => "back"
    }
})
.addItem({ key: "Q", label: "Return to Main Menu" })

// Chat Menu
const chatMenu: IQMenu = menu({
    name: "Chat",
    basepath: "assets",
    prompt: "|14Chat |07» |15",
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}\r\n",
    commands: {
        "1": async () => {
            say("\r\n|14Paging SysOp...\r\n")
            say("|07The SysOp is not available at this time.\r\n")
            await pause()
        },
        "2": comingSoon, 
        "3": comingSoon, 
        "4": comingSoon,
        Q: () => "back"
    }
})
.addItem({ key: "1", label: "Page the SysOp" })
.addItem({ key: "2", label: "Multi-Node Chat" })
.addItem({ key: "3", label: "Private Message" })
.addItem({ key: "4", label: "Chat Rooms" })
.addItem({ key: "Q", label: "Return to Main Menu" })

// Settings Menu
const settingsMenu: IQMenu = menu({
    name: "Settings",
    basepath: "assets",
    prompt: "|14Settings |07» |15",
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}\r\n",
    commands: {
        "1": comingSoon, "2": comingSoon, "3": comingSoon,
        "4": comingSoon, "5": comingSoon,
        Q: () => "back"
    }
})
.addItem({ key: "1", label: "Change Password" })
.addItem({ key: "2", label: "Edit User Profile" })
.addItem({ key: "3", label: "Terminal Settings" })
.addItem({ key: "4", label: "Message Preferences" })
.addItem({ key: "5", label: "File Transfer Protocol" })
.addItem({ key: "Q", label: "Return to Main Menu" })

// Info Menu
const infoMenu: IQMenu = menu({
    name: "System Info",
    basepath: "assets",
    prompt: "|14Info |07» |15",
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}\r\n",
    commands: {
        Q: () => "back"
    }
})
.addItem({ key: "Q", label: "Return to Main Menu" })

// Main Menu - uses ANSI art, so we disable auto-render items
const mainMenu: IQMenu = menu({
    name: "Main",
    basepath: "assets",
    art: { filename: "ep_main_menu.ans", mode: "line", speed: 100 },
    prompt: "\r\n|14Main Menu |07» |15",
    autoRenderItems: false,
    commands: {
        M: async () => { await messagesMenu.show(); return "continue" },
        F: async () => { await filesMenu.show(); return "continue" },
        B: async () => { await bulletinsMenu.show(); return "continue" },
        U: async () => { await usersMenu.show(); return "continue" },
        C: async () => { await chatMenu.show(); return "continue" },
        S: async () => { await settingsMenu.show(); return "continue" },
        I: async () => { await infoMenu.show(); return "continue" },
        G: () => "quit",
        Q: () => "quit"
    }
})

// ============================================================================
// Main Entry Point
// ============================================================================

async function main() {
    // Welcome sequence
    say("A 132x37 terminal resolution is recommended for the best experience.")
    await pause("Welcome to Euphoria BBS! Press any key to continue...")
    
    await artwork({ basepath: "assets" }).render({ 
        filename: "ep_welcome.ans", 
        clearScreenBefore: true, 
        mode: "line", 
        speed: 50 
    })
    await pause()
    
    // Main menu loop - now handled entirely by IQMenu.show()
    await mainMenu.show()
    
    // Goodbye
    await artwork({ basepath: "assets" }).render({ 
        filename: "ep_logoff.ans", 
        clearScreenBefore: true, 
        mode: "line", 
        speed: 50 
    })
    await pause("\r\n|07Thanks for visiting Euphoria BBS! Press any key to disconnect...")
    
    hangup()
}

export { main }
main()
