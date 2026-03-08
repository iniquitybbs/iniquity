/**
 * ETERNITY BBS - Authentic Recreation of Original Iniquity BBS
 * Based on Iniquity v1.00 Alpha 26 source code
 * 
 * This template recreates the classic Iniquity BBS experience that shipped
 * in the 1990s, with its matrix-style login, comprehensive new user application,
 * and feature-rich menu system.
 * 
 * @file iniquity.ts
 * @author Eternity BBS System
 * @license MIT
 */

import { bbs, screen, UserAccessLevel, loadConfig, getConfig, getGlobalRuntime } from "@iniquitybbs/core"
import path from "path"

screen.setResolution(80, 25)

loadConfig(path.join(__dirname, "iniquity.json"))
const c = getConfig()
const config = {
    get bbsName() { return c.server.name },
    get sysop() { return c.getCustom<string>("sysop") ?? "The SysOp" },
    get location() { return c.getCustom<string>("location") ?? "Cyberspace" },
    get minPasswordLength() { return c.security.passwordMinLength },
    get minHandleLength() { return c.getCustom<number>("minHandleLength") ?? 3 },
    get newUserSL() { return c.server.newUserAccess },
    get newUserDSL() { return c.getCustom<number>("newUserDSL") ?? 25 },
    get realNameSystem() { return c.server.requireRealName },
    get matrixLogin() { return c.getCustom<boolean>("matrixLogin") ?? true },
    get requireBirthdate() { return c.getCustom<boolean>("requireBirthdate") ?? true },
    get requirePhone() { return c.getCustom<boolean>("requirePhone") ?? true },
    get askCountry() { return c.getCustom<boolean>("askCountry") ?? true }
}

// CP437 double-line box (Session converts to UTF-8 when user selects UTF-8)
const D = { tl: "\xC9", tr: "\xBB", bl: "\xC8", br: "\xBC", h: "\xCD", v: "\xBA" }
const S = { h: "\xC4" }  // single-line horizontal (─)

// ============================================================================
// New User Application - Authentic APPLY.PAS Recreation
// ============================================================================

const newUserApplication = async (): Promise<boolean> => {
    bbs.cls()
    bbs.say("|15" + D.tl + D.h.repeat(78) + D.tr + "|07")
    bbs.say("|15" + D.v + " ".repeat(22) + "|11NEW USER APPLICATION SYSTEM|15" + " ".repeat(22) + D.v + "|07")
    bbs.say("|15" + D.bl + D.h.repeat(78) + D.br + "|07")
    bbs.say("")
    bbs.say("|03Welcome to |15" + config.bbsName + "|03!|07")
    bbs.say("")
    bbs.say("|07This system uses an application process to maintain quality.|07")
    bbs.say("|07Please answer the following questions truthfully.|07")
    bbs.say("")
    
    const proceed = await bbs.ask("|14Do you wish to apply for access? (Y/n): |15")
    if (proceed.toUpperCase() === "N") {
        return false
    }

    bbs.say("")
    bbs.say("|11Step 1: User Identification|07")
    bbs.say("|08" + S.h.repeat(78) + "|07")
    
    // Handle/Alias (cannot be NEW, ALL, or start with number)
    let handle = ""
    let validHandle = false
    
    while (!validHandle) {
        handle = await bbs.ask("|14Enter your handle/alias: |15")
        
        if (!handle || handle.length < config.minHandleLength) {
            bbs.say("|12Handle must be at least " + config.minHandleLength + " characters.|07")
            continue
        }
        
        const upperHandle = handle.toUpperCase()
        if (upperHandle === "NEW" || upperHandle === "ALL") {
            bbs.say("|12That handle is reserved. Please choose another.|07")
            continue
        }
        
        if (handle[0] >= "0" && handle[0] <= "9") {
            bbs.say("|12Handle cannot start with a number.|07")
            continue
        }
        
        // Check if handle already exists
        const existing = bbs.user(handle)
        if (existing.exists()) {
            bbs.say("|12That handle is already in use. Please choose another.|07")
            continue
        }
        
        validHandle = true
    }
    
    // Real Name (must have space for first/last)
    let realName = ""
    let validName = false
    
    while (!validName) {
        realName = await bbs.ask("|14Enter your real name (first and last): |15")
        
        if (!realName || realName.trim().length === 0) {
            bbs.say("|12Real name is required.|07")
            continue
        }
        
        if (!realName.includes(" ")) {
            bbs.say("|12Please enter your FULL name (first and last).|07")
            continue
        }
        
        validName = true
    }
    
    // Contact Information
    bbs.say("")
    bbs.say("|11Step 2: Contact Information|07")
    bbs.say("|08" + S.h.repeat(78) + "|07")
    
    let birthdate = ""
    if (config.requireBirthdate) {
        birthdate = await bbs.ask("|14Birth Date (MM/DD/YY): |15")
        // In production, validate age 3-90 years
    }
    
    let phone = ""
    if (config.requirePhone) {
        phone = await bbs.ask("|14Phone Number: |15")
    }
    
    const address = await bbs.ask("|14Street Address: |15")
    const city = await bbs.ask("|14City: |15")
    
    let location = city
    
    // Country/State/Province
    if (config.askCountry) {
        bbs.say("")
        bbs.say("|14Select Country: |11[|15U|11]|07SA  |11[|15C|11]|07anada  |11[|15O|11]|07ther: |15")
        const country = (await bbs.ask("")).toUpperCase()
        
        let stateOrCountry = ""
        let zipCode = ""
        
        if (country === "U") {
            const state = await bbs.ask("|14State (2-letter code): |15")
            location = `${city}, ${state.toUpperCase()}`
            zipCode = await bbs.ask("|14ZIP Code (#####-####): |15")
        } else if (country === "C") {
            const province = await bbs.ask("|14Province (2-letter code): |15")
            location = `${city}, ${province.toUpperCase()}, Canada`
            zipCode = await bbs.ask("|14Postal Code (A1A-1A1): |15")
        } else {
            stateOrCountry = await bbs.ask("|14Country: |15")
            location = `${city}, ${stateOrCountry}`
            zipCode = await bbs.ask("|14Postal/ZIP Code: |15")
        }
    }
    
    // Sex
    bbs.say("")
    const sexInput = await bbs.ask("|14Sex: |11[|15M|11]|07ale or |11[|15F|11]|07emale: |15")
    const sex = sexInput.toUpperCase() === "M" ? "M" : "F"
    
    // Terminal Preferences
    bbs.say("")
    bbs.say("|11Step 3: Terminal Preferences|07")
    bbs.say("|08" + S.h.repeat(78) + "|07")
    
    const pageLength = await bbs.ask("|14Page length (5-200, default 23): |15")
    const hotKeys = (await bbs.ask("|14Use hot keys? (Y/n): |15")).toUpperCase() !== "N"
    const expertMode = (await bbs.ask("|14Expert mode (fewer prompts)? (Y/n): |15")).toUpperCase() !== "N"
    const autoPause = (await bbs.ask("|14Auto-pause after full screens? (Y/n): |15")).toUpperCase() !== "N"
    
    // Password (minimum 4 chars, verify)
    bbs.say("")
    bbs.say("|11Step 4: Security|07")
    bbs.say("|08" + S.h.repeat(78) + "|07")
    
    let password = ""
    let validPassword = false
    
    while (!validPassword) {
        password = await bbs.ask("|14Choose a password (min 4 chars): |15")
        
        if (!password || password.length < config.minPasswordLength) {
            bbs.say(`|12Password must be at least ${config.minPasswordLength} characters.|07`)
            continue
        }
        
        const verify = await bbs.ask("|14Verify password: |15")
        
        if (password !== verify) {
            bbs.say("|12Passwords do not match. Please try again.|07")
            continue
        }
        
        validPassword = true
    }
    
    // Save user information
    bbs.say("")
    bbs.say("|14Saving your information...|07")
    
    const user = bbs.user({
        handle: handle,
        password: password,
        realName: realName,
        location: location,
        access: config.newUserSL
    })
    
    if (user.register(password)) {
        user.login(password)
        bbs.setCurrentUser(user)
        
        bbs.say("|10✓ Account created successfully!|07")
        await bbs.wait(1000)
        
        bbs.say("")
        bbs.say("|11" + D.h.repeat(78) + "|07")
        bbs.say("|15    WELCOME TO " + config.bbsName.toUpperCase() + "!|07")
        bbs.say("|11" + D.h.repeat(78) + "|07")
        bbs.say("")
        bbs.say("|07Your account has been created with |11Security Level " + config.newUserSL + "|07.|07")
        bbs.say("|07You now have access to message bases, file areas, and more.|07")
        bbs.say("")
        await bbs.pause("|14Press any key to continue to the main menu...|07")
        
        return true
    }
    
    bbs.say("|12Error creating account. Please contact the SysOp.|07")
    await bbs.pause()
    return false
}

// ============================================================================
// Helper Functions - All Defined First
// ============================================================================

const comingSoon = () => bbs.popup("Coming Soon", "|15Feature In Development|07\n\nThis feature is being implemented.\nCheck back soon!")

// Help System
const showHelp = async () => {
    let help = "|15ETERNITY BBS HELP SYSTEM|07\n"
    help += "|08" + D.h.repeat(50) + "|07\n\n"
    help += "|11MAIN MENU COMMANDS:|07\n\n"
    help += "|15M|07 - Access message bases\n"
    help += "|15F|07 - Browse file areas\n"
    help += "|15E|07 - Read/send private email\n"
    help += "|15B|07 - View BBS listings\n"
    help += "|15U|07 - User functions menu\n"
    help += "|15C|07 - Chat with SysOp\n"
    help += "|15A|07 - View/write AutoMessage\n"
    help += "|15L|07 - See last callers\n"
    help += "|15S|07 - View system statistics\n"
    help += "|15?|07 - Display this help\n"
    help += "|15G|07 - Logoff (disconnect)\n\n"
    help += "|08" + S.h.repeat(50) + "|07\n\n"
    help += "|11TIPS:|07\n"
    help += "• Press |15?|07 anytime for help\n"
    help += "• Press |15Q|07 to return to previous menu\n"
    help += "• Commands are |15single letters|07\n"
    
    await bbs.popup("Help", help, { width: 60 })
}

// Last Callers List
const showLastCallers = async () => {
    const users = bbs.users().all()
    
    await bbs.dataPopup(
        "Last 10 Callers",
        users.sort((a, b) => new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime()).slice(0, 10),
        (user) => {
            const lastCall = user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : "Never"
            return `|11${user.handle.padEnd(20)}|07 ${lastCall.padEnd(12)} |08Calls:|07 ${user.totalCalls}`
        },
        { width: 70 }
    )
}

// System Statistics
const showSystemStats = async () => {
    const users = bbs.users().all()
    const online = bbs.getOnlineUsers()
    const currentUser = bbs.getCurrentUser()
    
    let stats = "|15" + D.h.repeat(37) + "|07\n"
    stats += "|11        SYSTEM STATISTICS|07\n"
    stats += "|15" + D.h.repeat(37) + "|07\n\n"
    stats += `|14BBS Name:|07 ${config.bbsName}\n`
    stats += `|14SysOp:|07 ${config.sysop}\n`
    stats += `|14Location:|07 ${config.location}\n\n`
    stats += "|15" + S.h.repeat(40) + "|07\n\n"
    stats += `|14Total Users:|07 ${users.length}\n`
    stats += `|14Users Online:|07 ${online.length}\n`
    stats += `|14Total Calls:|07 ${users.reduce((sum, u) => sum + u.totalCalls, 0)}\n`
    stats += `|14Calls Today:|07 0\n\n`
    
    if (currentUser) {
        stats += "|15" + S.h.repeat(40) + "|07\n\n"
        stats += "|11YOUR STATISTICS:|07\n\n"
        stats += `|14Your Calls:|07 ${currentUser.stats.totalCalls}\n`
        stats += `|14Time Online:|07 ${Math.floor(currentUser.stats.timeOnline / 60)} min\n`
        stats += `|14Messages:|07 ${currentUser.stats.totalPosts}\n`
    }
    
    await bbs.popup("Statistics", stats, { width: 50 })
}

// User Configuration
const userConfiguration = async () => {
    const user = bbs.getCurrentUser()
    if (!user) {
        await bbs.popup("Error", "You must be logged in.")
        return
    }
    
    await bbs.popup("User Configuration", 
        "|15Coming Soon!|07\n\n" +
        "Configure your:\n" +
        "• Page length\n" +
        "• Hot keys\n" +
        "• Expert mode\n" +
        "• Color scheme\n" +
        "• Auto-signature\n" +
        "• And more..."
    )
}

// Change Password
const changePassword = async () => {
    const user = bbs.getCurrentUser()
    if (!user) {
        await bbs.popup("Error", "You must be logged in.")
        return
    }
    
    const oldPW = await bbs.ask("|14Enter current password: |15")
    const newPW = await bbs.ask("|14Enter new password: |15")
    const verify = await bbs.ask("|14Verify new password: |15")
    
    if (newPW !== verify) {
        await bbs.popup("Error", "Passwords do not match.")
        return
    }
    
    if (user.changePassword(oldPW, newPW)) {
        await bbs.popup("Success", "Password changed successfully!", { type: "success" })
    } else {
        await bbs.popup("Error", "Failed to change password. Check your current password.")
    }
}

// ============================================================================
// Menu Definitions - Authentic Iniquity Structure
// ============================================================================

// Main Menu - Central Hub
bbs.menu("main", {
    prompt: "|14Command: |11[|15?|11=Help]|07 |15",
    layout: "single",
    itemFormat: "|11[|15{key}|11]|07 {label}",
    items: [
        { key: "M", label: "Message Bases", action: comingSoon },
        { key: "F", label: "File Areas", action: comingSoon },
        { key: "E", label: "Email (Private Mail)", action: comingSoon },
        { key: "B", label: "BBS Listings", action: comingSoon },
        { key: "U", label: "User Functions", goto: "users" },
        { key: "C", label: "Chat/Page SysOp", action: comingSoon },
        { key: "A", label: "AutoMessage", action: comingSoon },
        { key: "L", label: "Last Callers", action: showLastCallers },
        { key: "S", label: "System Statistics", action: showSystemStats },
        { key: "?", label: "Help System", action: showHelp },
        { key: "G", label: "Goodbye (Logoff)", action: "quit" }
    ]
})

// User Functions Submenu
bbs.menu("users", {
    prompt: "|14User Command: |15",
    layout: "single",
    itemFormat: "|11[|15{key}|11]|07 {label}",
    items: [
        { key: "C", label: "User Configuration", action: userConfiguration },
        { key: "P", label: "Change Password", action: changePassword },
        { key: "L", label: "User Listing", action: async () => {
            const users = bbs.users().all().slice(0, 25)
            await bbs.dataPopup(
                "User Listing (Top 25 by Calls)",
                users.sort((a, b) => b.totalCalls - a.totalCalls),
                (u) => `|11${u.handle.padEnd(20)}|07 |08SL:|07${String(u.access).padEnd(3)} |08Calls:|07 ${u.totalCalls}`,
                { width: 65 }
            )
        }},
        { key: "W", label: "Who's Online", action: async () => {
            await bbs.dataPopup(
                "Who's Online Now",
                bbs.getOnlineUsers(),
                (user) => `|11Node ${user.node}|07: ${user.username || "|08[Logging In]|07"} - ${user.terminalType}`,
                { width: 60 }
            )
        }},
        { key: "M", label: "My Profile", action: async () => {
            const user = bbs.getCurrentUser()
            if (!user) {
                await bbs.popup("Profile", "You must be logged in.")
                return
            }
            
            const data = user.getRawData()
            if (!data) return
            
            const profile = `|15${data.handle}|07\n` +
                `|08${D.h.repeat(45)}|07\n\n` +
                `|14Real Name:|07 ${data.realName}\n` +
                `|14Location:|07 ${data.location}\n` +
                `|14Security Level:|07 ${data.access}\n\n` +
                `|11STATISTICS:|07\n` +
                `|14Total Calls:|07 ${data.totalCalls}\n` +
                `|14Messages Posted:|07 ${data.totalPosts}\n` +
                `|14Time Online:|07 ${Math.floor(data.timeOnline / 60)} minutes\n` +
                `|14First Call:|07 ${new Date(data.createdAt).toLocaleDateString()}\n` +
                `|14Last Call:|07 ${new Date(data.lastLogin).toLocaleDateString()}`
            
            await bbs.popup("Your Profile", profile, { width: 55 })
        }},
        { key: "Q", label: "Quit to Main Menu", action: "back" }
    ]
})

// ============================================================================
// Entry Point - Classic Iniquity Flow
// ============================================================================

bbs.start(async () => {
    // Terminal encoding selection (plain ASCII so it works before encoding is set)
    bbs.cls()
    bbs.say("")
    bbs.say("  Terminal encoding:")
    bbs.say("  [1] CP437 (classic BBS - SyncTERM, etc.)")
    bbs.say("  [2] UTF-8 (modern terminals)")
    bbs.say("")
    const encChoice = await bbs.ask("  Select (1 or 2) [1]: ")
    const out = getGlobalRuntime().getOutput() as { setEncoding?(enc: "cp437" | "utf8"): void }
    out.setEncoding?.(encChoice?.trim() === "2" ? "utf8" : "cp437")

    // Welcome banner (CP437 box-drawing; Session converts to UTF-8 if selected)
    const BOX = { tl: "\xC9", tr: "\xBB", bl: "\xC8", br: "\xBC", h: "\xCD", v: "\xBA" }
    const W = 76
    const center = (s: string) => {
        const pad = Math.max(0, (W - s.length) >> 1)
        return " ".repeat(pad) + s + " ".repeat(W - s.length - pad)
    }
    bbs.cls()
    bbs.say("")
    bbs.say("|10  " + BOX.tl + BOX.h.repeat(W) + BOX.tr + "|07")
    bbs.say("|10  " + BOX.v + " ".repeat(W) + BOX.v + "|07")
    bbs.say("|10  " + BOX.v + center("ETERNITY BBS SYSTEM") + BOX.v + "|07")
    bbs.say("|10  " + BOX.v + " ".repeat(W) + BOX.v + "|07")
    bbs.say("|10  " + BOX.v + center("The Original Iniquity Experience") + BOX.v + "|07")
    bbs.say("|10  " + BOX.v + " ".repeat(W) + BOX.v + "|07")
    bbs.say("|10  " + BOX.bl + BOX.h.repeat(W) + BOX.br + "|07")
    bbs.say("")
    bbs.say("|03Running |11Iniquity v3.0|03 - Node.js Edition|07")
    bbs.say("|08Connect: telnet://localhost:2323|07")
    bbs.say("")
    await bbs.pause("|14Press any key to continue...|07")

    // Login/Apply Choice
    let loggedIn = false
    let attempts = 0
    const maxAttempts = 3

    while (!loggedIn && attempts < maxAttempts) {
        bbs.cls()
        bbs.say("")
        bbs.say("|15" + D.tl + D.h.repeat(78) + D.tr + "|07")
        bbs.say("|15" + D.v + " ".repeat(28) + "|11ETERNITY BBS|15" + " ".repeat(29) + D.v + "|07")
        bbs.say("|15" + D.bl + D.h.repeat(78) + D.br + "|07")
        bbs.say("")
        
        const choice = await bbs.choice("Welcome!", [
            { key: "L", label: "Login to your account", description: "Existing users" },
            { key: "A", label: "Apply for new user access", description: "First time here" },
            { key: "G", label: "Goodbye", description: "Disconnect" }
        ])

        if (choice === "L") {
            const user = await bbs.loginForm()
            if (user) {
                loggedIn = true
                
                // Welcome back message
                bbs.cls()
                bbs.say("")
                bbs.say("|11" + D.h.repeat(78) + "|07")
                bbs.say("|15    WELCOME BACK TO ETERNITY BBS!|07")
                bbs.say("|11" + D.h.repeat(78) + "|07")
                bbs.say("")
                bbs.say(`|03Hello, |15${user.handle}|03!|07`)
                bbs.say("")
                bbs.say(`|08You last called on: |07${new Date(user.stats.lastLogin).toLocaleString()}|07`)
                bbs.say(`|08This is call number: |11${user.stats.totalCalls}|07`)
                bbs.say(`|08Total time online: |11${Math.floor(user.stats.timeOnline / 60)}|07 minutes|07`)
                bbs.say("")
                
                // Check for new mail/messages (placeholder)
                bbs.say("|14Checking for new mail...|07")
                await bbs.wait(500)
                bbs.say("|08You have |110|08 new messages.|07")
                bbs.say("")
                
                await bbs.pause("|14Press any key to continue to the main menu...|07")
            } else {
                attempts++
                if (attempts < maxAttempts) {
                    await bbs.popup("Login Failed", `Invalid credentials.\n\nAttempts remaining: ${maxAttempts - attempts}`, { type: "error" })
                }
            }
        } else if (choice === "A") {
            if (await newUserApplication()) {
                loggedIn = true
            } else {
                await bbs.popup("Application", "Application cancelled or failed.")
            }
        } else if (choice === "G") {
            break
        }
    }

    if (!loggedIn) {
        bbs.cls()
        bbs.say("")
        bbs.say("|12Too many failed login attempts or disconnected.|07")
        bbs.say("")
        await bbs.pause()
        return
    }

    // Display Main Menu
    bbs.cls()
    bbs.say("")
    bbs.say("|11" + D.tl + D.h.repeat(76) + D.tr + "|07")
    bbs.say("|11" + D.v + " ".repeat(27) + "|15ETERNITY BBS|11" + " ".repeat(28) + D.v + "|07")
    bbs.say("|11" + D.v + " ".repeat(29) + "|08Main Menu|11" + " ".repeat(30) + D.v + "|07")
    bbs.say("|11" + D.bl + D.h.repeat(76) + D.br + "|07")
    bbs.say("")
    
    // Show user stats banner
    const user = bbs.getCurrentUser()
    if (user) {
        bbs.say(`|08User: |11${user.handle.padEnd(20)}|08 Security Level: |11${user.access.toString().padEnd(3)}|08 Calls: |11${user.stats.totalCalls}|07`)
        bbs.say("|08" + S.h.repeat(78) + "|07")
        bbs.say("")
    }

    // Run main menu
    await bbs.showMenu("main")

    // Logout sequence
    if (user) {
        user.logout()
    }

    // Goodbye screen
    bbs.cls()
    bbs.say("")
    bbs.say("|11" + D.h.repeat(78) + "|07")
    bbs.say("|15                          ETERNITY BBS|07")
    bbs.say("|11" + D.h.repeat(78) + "|07")
    bbs.say("")
    bbs.say("|03Thanks for calling |15" + config.bbsName + "|03!|07")
    if (user) {
        bbs.say(`|08You were online for |11${Math.floor(user.stats.timeOnline / 60)}|08 minutes this session.|07`)
    }
    bbs.say("")
    bbs.say("|08        \"Where legends are born and memories are made\"|07")
    bbs.say("")
    bbs.say("|11" + D.h.repeat(78) + "|07")
    bbs.say("")
    await bbs.pause("|14Press any key to disconnect...|07")
})
