/**
 * Euphoria BBS Template
 * Using IQMenu system for navigation
 * @author ispyhumanfly
 * @license MIT
 */
import { artwork, say, pause, hangup, menu, IQMenu } from "@iniquitybbs/core"

// ============================================================================
// Helper Functions
// ============================================================================

async function comingSoon(): Promise<void> {
    await pause("\r\n|07This feature is coming soon! Press any key...")
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
// Menu Definitions using IQMenu with x,y positioned items
// ============================================================================

// Messages Menu - two column layout
const messagesMenu: IQMenu = menu({
    name: "Messages",
    basepath: "assets",
    prompt: "|14Messages |07» |15",
    promptX: 3,
    promptY: 20,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
    commands: {
        "1": comingSoon,
        "2": comingSoon,
        "3": comingSoon,
        "4": comingSoon,
        "5": comingSoon,
        "6": comingSoon,
        R: comingSoon,
        P: comingSoon,
        S: comingSoon,
        Q: () => "back"
    }
})
    .addItem({ key: "1", label: "General Discussion", x: 3, y: 5 })
    .addItem({ key: "2", label: "BBS Discussion", x: 3, y: 6 })
    .addItem({ key: "3", label: "Retro Computing", x: 3, y: 7 })
    .addItem({ key: "4", label: "Programming & Coding", x: 40, y: 5 })
    .addItem({ key: "5", label: "Art & ANSI Scene", x: 40, y: 6 })
    .addItem({ key: "6", label: "Off-Topic / Random", x: 40, y: 7 })
    .addItem({ key: "R", label: "Read Messages", x: 3, y: 10 })
    .addItem({ key: "P", label: "Post New Message", x: 3, y: 11 })
    .addItem({ key: "S", label: "Scan for New", x: 40, y: 10 })
    .addItem({ key: "Q", label: "Return to Main Menu", x: 40, y: 11 })

// Files Menu - two column layout
const filesMenu: IQMenu = menu({
    name: "Files",
    basepath: "assets",
    prompt: "|14Files |07» |15",
    promptX: 3,
    promptY: 22,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
    commands: {
        "1": comingSoon,
        "2": comingSoon,
        "3": comingSoon,
        "4": comingSoon,
        "5": comingSoon,
        "6": comingSoon,
        L: comingSoon,
        D: comingSoon,
        U: comingSoon,
        S: comingSoon,
        N: comingSoon,
        Q: () => "back"
    }
})
    .addItem({ key: "1", label: "BBS Software & Utilities", x: 3, y: 5 })
    .addItem({ key: "2", label: "DOS Games & Apps", x: 3, y: 6 })
    .addItem({ key: "3", label: "Programming Tools", x: 3, y: 7 })
    .addItem({ key: "4", label: "Graphics & ANSI Art", x: 40, y: 5 })
    .addItem({ key: "5", label: "Music & MOD Files", x: 40, y: 6 })
    .addItem({ key: "6", label: "Text Files & E-Zines", x: 40, y: 7 })
    .addItem({ key: "L", label: "List Files", x: 3, y: 10 })
    .addItem({ key: "D", label: "Download File", x: 3, y: 11 })
    .addItem({ key: "U", label: "Upload File", x: 40, y: 10 })
    .addItem({ key: "S", label: "Search Files", x: 40, y: 11 })
    .addItem({ key: "N", label: "New Files Since Last", x: 3, y: 13 })
    .addItem({ key: "Q", label: "Return to Main Menu", x: 40, y: 13 })

// Bulletins Menu - two column layout
const bulletinsMenu: IQMenu = menu({
    name: "Bulletins",
    basepath: "assets",
    prompt: "|14Bulletins |07» |15",
    promptX: 3,
    promptY: 16,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
    commands: {
        "1": async () => {
            await displayBulletin("1")
        },
        "2": async () => {
            await displayBulletin("2")
        },
        "3": async () => {
            await displayBulletin("3")
        },
        "4": async () => {
            await displayBulletin("4")
        },
        "5": async () => {
            await displayBulletin("5")
        },
        "6": async () => {
            await displayBulletin("6")
        },
        Q: () => "back"
    }
})
    .addItem({ key: "1", label: "System News & Announcements", x: 3, y: 5 })
    .addItem({ key: "2", label: "BBS Rules & Guidelines", x: 3, y: 6 })
    .addItem({ key: "3", label: "About Euphoria BBS", x: 3, y: 7 })
    .addItem({ key: "4", label: "SysOp Information", x: 40, y: 5 })
    .addItem({ key: "5", label: "Network Information", x: 40, y: 6 })
    .addItem({ key: "6", label: "Credits & Thanks", x: 40, y: 7 })
    .addItem({ key: "Q", label: "Return to Main Menu", x: 3, y: 10 })

// Users Menu
const usersMenu: IQMenu = menu({
    name: "Users",
    basepath: "assets",
    prompt: "|14Users |07» |15",
    promptX: 3,
    promptY: 10,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
    commands: {
        Q: () => "back"
    }
}).addItem({ key: "Q", label: "Return to Main Menu", x: 3, y: 5 })

// Chat Menu - two column layout
const chatMenu: IQMenu = menu({
    name: "Chat",
    basepath: "assets",
    prompt: "|14Chat |07» |15",
    promptX: 3,
    promptY: 14,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
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
    .addItem({ key: "1", label: "Page the SysOp", x: 3, y: 5 })
    .addItem({ key: "2", label: "Multi-Node Chat", x: 3, y: 6 })
    .addItem({ key: "3", label: "Private Message", x: 40, y: 5 })
    .addItem({ key: "4", label: "Chat Rooms", x: 40, y: 6 })
    .addItem({ key: "Q", label: "Return to Main Menu", x: 3, y: 9 })

// Settings Menu - two column layout
const settingsMenu: IQMenu = menu({
    name: "Settings",
    basepath: "assets",
    prompt: "|14Settings |07» |15",
    promptX: 3,
    promptY: 14,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
    commands: {
        "1": comingSoon,
        "2": comingSoon,
        "3": comingSoon,
        "4": comingSoon,
        "5": comingSoon,
        Q: () => "back"
    }
})
    .addItem({ key: "1", label: "Change Password", x: 3, y: 5 })
    .addItem({ key: "2", label: "Edit User Profile", x: 3, y: 6 })
    .addItem({ key: "3", label: "Terminal Settings", x: 3, y: 7 })
    .addItem({ key: "4", label: "Message Preferences", x: 40, y: 5 })
    .addItem({ key: "5", label: "File Transfer Protocol", x: 40, y: 6 })
    .addItem({ key: "Q", label: "Return to Main Menu", x: 3, y: 10 })

// Info Menu
const infoMenu: IQMenu = menu({
    name: "System Info",
    basepath: "assets",
    prompt: "|14Info |07» |15",
    promptX: 3,
    promptY: 10,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
    commands: {
        Q: () => "back"
    }
}).addItem({ key: "Q", label: "Return to Main Menu", x: 3, y: 5 })

// Main Menu - uses ANSI art with two-column positioned menu items
const mainMenu: IQMenu = menu({
    name: "Main",
    basepath: "assets",
    art: { filename: "ep_main_menu.ans", mode: "line", speed: 100 },
    prompt: "|14Main Menu |07» |15",
    promptX: 3,
    promptY: 23,
    autoRenderItems: true,
    itemFormat: "|11[|15{key}|11] |07{label}",
    commands: {
        M: async () => {
            await messagesMenu.show()
            return "continue"
        },
        F: async () => {
            await filesMenu.show()
            return "continue"
        },
        B: async () => {
            await bulletinsMenu.show()
            return "continue"
        },
        U: async () => {
            await usersMenu.show()
            return "continue"
        },
        C: async () => {
            await chatMenu.show()
            return "continue"
        },
        S: async () => {
            await settingsMenu.show()
            return "continue"
        },
        I: async () => {
            await infoMenu.show()
            return "continue"
        },
        G: () => "quit",
        Q: () => "quit"
    }
})
    .addItem({ key: "M", label: "Message Bases", x: 3, y: 18 })
    .addItem({ key: "F", label: "File Areas", x: 3, y: 19 })
    .addItem({ key: "B", label: "Bulletins", x: 3, y: 20 })
    .addItem({ key: "U", label: "User List", x: 3, y: 21 })
    .addItem({ key: "C", label: "Chat", x: 40, y: 18 })
    .addItem({ key: "S", label: "Settings", x: 40, y: 19 })
    .addItem({ key: "I", label: "System Info", x: 40, y: 20 })
    .addItem({ key: "G", label: "Goodbye", x: 40, y: 21 })

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
