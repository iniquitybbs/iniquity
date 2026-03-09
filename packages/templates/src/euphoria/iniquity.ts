/**
 * Euphoria BBS Template
 * Using the simplified bbs/screen API with Event Bus
 * @author ispyhumanfly
 * @license MIT
 */
import { bbs, screen, UserAccessLevel } from "@iniquitybbs/core"

// Set terminal resolution (132x37 is the Iniquity standard)
screen.setResolution(132, 37)

// ============================================================================
// Event Bus Setup - Global event handlers that work across all menus
// ============================================================================

// Idle detection state
const idleState = {
    lastActivity: Date.now(),
    warningShown: false,
    reset() {
        this.lastActivity = Date.now()
        this.warningShown = false
    }
}

// Listen for all menu navigation events
bbs.on("menu:enter", (event) => {
    idleState.reset()
    console.log(`[Event] User entered menu: ${event.data?.menu}`)
})

// Listen for any key press to reset idle timer
bbs.on("input:key", () => idleState.reset())

// System announcement handler - shows popup regardless of current menu
bbs.on("system:announce", async (event) => {
    await bbs.popup("System Announcement", event.data?.message || "No message")
})

// Inter-node message handler - simulates receiving messages from other users
bbs.on("node:message", async (event) => {
    await bbs.popup(`Message from ${event.data?.from || "Unknown"}`, event.data?.message || "")
})

// Idle timeout warning handler
bbs.on("session:idle", async (event) => {
    if (!idleState.warningShown) {
        idleState.warningShown = true
        await bbs.popup("Idle Warning", `You've been idle for ${event.data?.minutes} minutes.\nPress any key to stay connected.`)
    }
})

// Wildcard handler for debugging/logging (catches all events)
bbs.on(
    "*",
    (event) => {
        if (event.type.startsWith("debug:")) {
            console.log(`[Debug Event] ${event.type}:`, event.data)
        }
    },
    { priority: -100 }
) // Low priority so it runs after other handlers

// Listen for other users connecting/disconnecting
bbs.on("server:connect", (event) => {
    console.log(`[Server] Node ${event.data?.node} connected (${event.data?.totalConnections} online)`)
})

bbs.on("server:disconnect", (event) => {
    console.log(`[Server] Node ${event.data?.node} disconnected (${event.data?.totalConnections} online)`)
})

// ============================================================================
// Helper Functions
// ============================================================================

// One-line popup helper using bbs.popup()
const comingSoon = () => bbs.popup("Coming Soon", "This feature is coming soon!")

// AI chat: base URL for the Iniquity HTTP API (Ollama wrapper). Override with INIQ_AI_URL.
const AI_API_BASE = process.env.INIQ_AI_URL || "http://localhost:8383"

const showAIChat = async () => {
    await bbs.popup("AI Chat", "Chat with the BBS AI (powered by Ollama).\n\nYou can ask questions or just say hi.\nType /q to quit the chat.", {
        type: "info"
    })
    let chatting = true
    while (chatting) {
        const prompt = await bbs.ask("|14You |07» |15")
        if (!prompt || prompt.trim().toUpperCase() === "/Q") {
            chatting = false
            break
        }
        try {
            const res = await fetch(`${AI_API_BASE}/api/v1/ai`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: prompt.trim(), model: "gemma3:1b" })
            })
            const data = (await res.json()) as { response?: string; error?: string; detail?: string }
            if (!res.ok) {
                const detail = data.detail ? `\n\n${data.detail}` : ""
                await bbs.popup(
                    "AI Error",
                    (data.error || `Request failed: ${res.status}`) + detail + "\n\nIf the error says \"Failed to reach Ollama\", ensure Ollama is running (e.g. ollama run gemma3:1b) and reachable at 127.0.0.1:11434."
                )
                continue
            }
            const text = data.response || "(no response)"
            await bbs.popup("AI", text, { width: 70 })
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err)
            const isRefused = /ECONNREFUSED|fetch failed/i.test(message)
            const hint = isRefused
                ? `

The AI API is not reachable at ${AI_API_BASE}.

1) Ensure "iq server start" is running (it starts both Telnet and the HTTP API on port 8383).

2) Test from another terminal:
   curl -X POST http://localhost:8383/api/v1/ai -H "Content-Type: application/json" -d '{"prompt":"hi"}'
   If that fails, the API is not listening.`
                : "\n\nEnsure iq server start is running and Ollama is available (e.g. ollama run gemma3:1b)."
            await bbs.popup("AI Error", `Could not reach the AI API: ${message}${hint}`)
        }
    }
    bbs.say("|08Chat ended.|07")
}

/** Global "/" hotkey: one-shot popup prompt → API → response popup. Works from any menu. */
const quickAIChatPopup = async () => {
    const form = bbs.frame("Quick AI", { width: 60, height: 5 })
    form.open()
    const prompt = await form.input("|14Prompt |07» |15", 200)
    form.close()
    if (!prompt || !prompt.trim()) return
    try {
        const res = await fetch(`${AI_API_BASE}/api/v1/ai`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompt.trim(), model: "gemma3:1b" })
        })
        const data = (await res.json()) as { response?: string; error?: string; detail?: string }
        if (!res.ok) {
            const detail = data.detail ? `\n\n${data.detail}` : ""
            await bbs.popup(
                "AI Error",
                (data.error || `Request failed: ${res.status}`) + detail + "\n\nIf the error says \"Failed to reach Ollama\", ensure Ollama is running (e.g. ollama run gemma3:1b) and reachable at 127.0.0.1:11434."
            )
            return
        }
        const text = data.response || "(no response)"
        await bbs.popup("AI", text, { width: 70 })
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        const isRefused = /ECONNREFUSED|fetch failed/i.test(message)
        const hint = isRefused
            ? `

The AI API is not reachable at ${AI_API_BASE}.

1) Ensure "iq server start" is running (it starts both Telnet and the HTTP API on port 8383).

2) Test from another terminal:
   curl -X POST http://localhost:8383/api/v1/ai -H "Content-Type: application/json" -d '{"prompt":"hi"}'
   If that fails, the API is not listening.`
            : "\n\nEnsure iq server start is running and Ollama is available (e.g. ollama run gemma3:1b)."
        await bbs.popup("AI Error", `Could not reach the AI API: ${message}${hint}`)
    }
}

// Simulate receiving a system announcement (for demo purposes)
const simulateAnnouncement = () => {
    bbs.emit(
        "system:announce",
        {
            message: "Welcome to Euphoria BBS!\nNew files have been uploaded today."
        },
        "system"
    )
}

// Simulate receiving a message from another node
const simulateNodeMessage = () => {
    bbs.emit(
        "node:message",
        {
            from: "Node 2 - SysOp",
            message: "Hey! Thanks for calling in today!"
        },
        "node:2"
    )
}

// Format time helper for data display
const formatTime = (date: Date): string => {
    const now = Date.now()
    const seconds = Math.floor((now - date.getTime()) / 1000)
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ${minutes % 60}m`
}

// Show who's online - using bbs.dataPopup() for cleaner code
const showWhosOnline = async () => {
    await bbs.dataPopup(
        "Who's Online",
        bbs.getOnlineUsers(),
        (user) => {
            const username = user.username || "|08(not logged in)|07"
            const time = formatTime(user.connectedAt)
            const terminal = user.terminalType || "unknown"
            return `|11Node ${user.node}|07: ${username}\n  |08Terminal: |07${terminal}\n  |08Connected: |07${time}`
        },
        { width: 50, emptyMessage: "No users currently online.\n(This shouldn't happen!)" }
    )
}

// Show list of all registered users - using bbs.dataPopup()
const showUserList = async () => {
    const userList = bbs.users()
    const allUsers = userList.all().slice(0, 10) // Show up to 10 users

    await bbs.dataPopup(
        "User List",
        allUsers,
        (userData) => {
            const accessName = UserAccessLevel[userData.access] || "unknown"
            const lastLogin = userData.lastLogin ? new Date(userData.lastLogin).toLocaleDateString() : "never"
            return `|11${userData.handle}|07\n  |08Access: |07${accessName} |08| Calls: |07${userData.totalCalls} |08| Last: |07${lastLogin}`
        },
        { width: 55, emptyMessage: "No registered users yet.\nBe the first to register!" }
    )
}

// Show current user profile
const showMyProfile = async () => {
    const user = bbs.getCurrentUser()
    if (!user) {
        await bbs.popup("Profile", "You are not logged in.")
        return
    }

    const data = user.getRawData()
    if (!data) {
        await bbs.popup("Profile", "Unable to load profile data.")
        return
    }

    const accessName = UserAccessLevel[data.access] || "unknown"
    const message = `|11${data.handle}|07
|08${"─".repeat(40)}|07

|08Real Name:  |07${data.realName || "(not set)"}
|08Location:   |07${data.location || "(not set)"}
|08Email:      |07${data.email || "(not set)"}
|08Access:     |07${accessName}

|08${"─".repeat(40)}|07
|14Statistics|07

|08Total Calls:    |15${data.totalCalls}|07
|08Total Posts:    |15${data.totalPosts}|07
|08Time Online:    |15${Math.floor(data.timeOnline / 60)} minutes|07
|08Member Since:   |15${new Date(data.createdAt).toLocaleDateString()}|07`

    await bbs.popup("My Profile", message, { width: 50 })
}

// Show user status screen - demonstrates data-driven artwork rendering using bbs.art()
const showStatus = async () => {
    const user = bbs.getCurrentUser()
    const userData = user?.getRawData()
    const onlineUsers = bbs.getOnlineUsers()

    // Prepare data for the status artwork
    // These will be available as @KEY@ MCI codes in the ANSI file
    const statusData = {
        USER: userData?.handle || "Guest",
        REALNAME: userData?.realName || "(not set)",
        LOCATION: userData?.location || "(not set)",
        ACCESS: userData ? UserAccessLevel[userData.access] : "Guest",
        CALLS: userData?.totalCalls || 0,
        TIMEONLINE: userData ? Math.floor(userData.timeOnline / 60) : 0,
        ONLINE: onlineUsers.length,
        DATE: new Date().toLocaleDateString(),
        TIME: new Date().toLocaleTimeString(),
        BBSNAME: "Euphoria BBS"
    }

    // Render the status artwork with live data using bbs.art()
    await bbs.art("ep_status.ans", {
        clearScreen: true,
        display: "instant",
        data: statusData,
        center: "none", // Artwork has built-in positioning
        pauseAfter: true
    })
}

// ============================================================================
// Menu Definitions using declarative bbs.menu() API
// Menu items are clickable with the mouse when the terminal supports SGR mouse (e.g. SyncTERM).
// Use hotkeys: false for mouse-only menus, or mouseHighlightFormat for custom click highlight.
// All menus use the same ANSI with a single column of items to the left of the image.
// ============================================================================

// Shared layout/art: single column of items on the left, ANSI image to the right
const menuLayout = {
    art: "ep_main_menu.ans",
    artCenter: "none" as const,
    artX: 38,
    artY: 1,
    promptY: 27,
    layout: "single" as const,
    itemsX: 2,
    itemsY: 10
}

// Messages Menu
bbs.menu("messages", {
    ...menuLayout,
    prompt: "|14Messages |07» |15",
    items: [
        { key: "1", label: "General Discussion", action: comingSoon },
        { key: "2", label: "BBS Discussion", action: comingSoon },
        { key: "3", label: "Retro Computing", action: comingSoon },
        { key: "4", label: "Programming & Coding", action: comingSoon },
        { key: "5", label: "Art & ANSI Scene", action: comingSoon },
        { key: "6", label: "Off-Topic / Random", action: comingSoon },
        { key: "R", label: "Read Messages", action: comingSoon },
        { key: "P", label: "Post New Message", action: comingSoon },
        { key: "S", label: "Scan for New", action: comingSoon },
        { key: "Q", label: "Return to Main Menu", action: "back" }
    ]
})

// Files Menu
bbs.menu("files", {
    ...menuLayout,
    prompt: "|14Files |07» |15",
    items: [
        { key: "1", label: "BBS Software & Utilities", action: comingSoon },
        { key: "2", label: "DOS Games & Apps", action: comingSoon },
        { key: "3", label: "Programming Tools", action: comingSoon },
        { key: "4", label: "Graphics & ANSI Art", action: comingSoon },
        { key: "5", label: "Music & MOD Files", action: comingSoon },
        { key: "6", label: "Text Files & E-Zines", action: comingSoon },
        { key: "L", label: "List Files", action: comingSoon },
        { key: "D", label: "Download File", action: comingSoon },
        { key: "U", label: "Upload File", action: comingSoon },
        { key: "S", label: "Search Files", action: comingSoon },
        { key: "N", label: "New Files Since Last", action: comingSoon },
        { key: "Q", label: "Return to Main Menu", action: "back" }
    ]
})

// Bulletins Menu
bbs.menu("bulletins", {
    ...menuLayout,
    prompt: "|14Bulletins |07» |15",
    items: [
        { key: "1", label: "System News & Announcements", action: comingSoon },
        { key: "2", label: "BBS Rules & Guidelines", action: comingSoon },
        { key: "3", label: "About Euphoria BBS", action: comingSoon },
        { key: "4", label: "SysOp Information", action: comingSoon },
        { key: "5", label: "Network Information", action: comingSoon },
        { key: "6", label: "Credits & Thanks", action: comingSoon },
        { key: "Q", label: "Return to Main Menu", action: "back" }
    ]
})

// Users Menu
bbs.menu("users", {
    ...menuLayout,
    prompt: "|14Users |07» |15",
    items: [
        { key: "L", label: "List All Users", action: showUserList },
        { key: "W", label: "Who's Online", action: showWhosOnline },
        { key: "P", label: "My Profile", action: showMyProfile },
        { key: "Q", label: "Return to Main Menu", action: "back" }
    ]
})

// Chat Menu - with event-driven features and AI chat
bbs.menu("chat", {
    ...menuLayout,
    prompt: "|14Chat |07» |15",
    items: [
        { key: "A", label: "AI Chat", action: showAIChat },
        { key: "1", label: "Page the SysOp", action: comingSoon },
        { key: "2", label: "Multi-Node Chat", action: comingSoon },
        { key: "3", label: "Private Message", action: comingSoon },
        { key: "4", label: "Chat Rooms", action: comingSoon },
        { key: "T", label: "Test: Receive Message", action: simulateNodeMessage },
        { key: "Q", label: "Return to Main Menu", action: "back" }
    ]
})

// Settings Menu
bbs.menu("settings", {
    ...menuLayout,
    prompt: "|14Settings |07» |15",
    items: [
        { key: "1", label: "Change Password", action: comingSoon },
        { key: "2", label: "Edit User Profile", action: comingSoon },
        { key: "3", label: "Terminal Settings", action: comingSoon },
        { key: "4", label: "Message Preferences", action: comingSoon },
        { key: "5", label: "File Transfer Protocol", action: comingSoon },
        { key: "Q", label: "Return to Main Menu", action: "back" }
    ]
})

// Info Menu - with event demos and data-driven artwork
bbs.menu("info", {
    ...menuLayout,
    prompt: "|14Info |07» |15",
    items: [
        { key: "S", label: "User Status (Data Demo)", action: showStatus },
        { key: "V", label: "Version & Features", action: comingSoon },
        { key: "A", label: "Test: System Announcement", action: simulateAnnouncement },
        { key: "Q", label: "Return to Main Menu", action: "back" }
    ]
})

// Main Menu - same layout config as all submenus (art has built-in positioning)
bbs.menu("main", {
    ...menuLayout,
    prompt: "|14Main Menu |07» |15",
    items: [
        { key: "M", label: "Message Bases", goto: "messages" },
        { key: "F", label: "File Areas", goto: "files" },
        { key: "B", label: "Bulletins", goto: "bulletins" },
        { key: "U", label: "User List", goto: "users" },
        { key: "C", label: "Chat", goto: "chat" },
        { key: "S", label: "Settings", goto: "settings" },
        { key: "I", label: "System Info", goto: "info" },
        { key: "G", label: "Goodbye", action: "quit" }
    ]
})

// ============================================================================
// Entry Point - using bbs.start() with event lifecycle
// ============================================================================

// Global "/" hotkey: from any menu, type / for quick AI popup (prompt → response)
bbs.setGlobalHotkey("/", quickAIChatPopup)

bbs.start(async () => {
    // Emit session start event
    bbs.emit("session:start", { timestamp: Date.now() }, "system")

    // Display welcome artwork using bbs.art()
    await bbs.art("ep_welcome.ans", {
        clearScreen: true,
        display: "line",
        speed: 50,
        center: "none" // Artwork has built-in positioning
    })

    // Emit welcome complete event
    bbs.emit("session:welcome", { completed: true }, "system")

    // Login/Register loop using bbs.choice() for cleaner code
    let loggedIn = false
    let quit = false

    while (!loggedIn && !quit) {
        // Use bbs.choice() for the login menu - much cleaner than manual frame building
        const choice = await bbs.choice("Welcome to Euphoria BBS", [
            { key: "L", label: "Login to your account" },
            { key: "N", label: "New User Registration" },
            { key: "G", label: "Continue as Guest" },
            { key: "Q", label: "Quit / Disconnect" }
        ])

        switch (choice) {
            case "L":
                loggedIn = (await bbs.loginForm()) !== null
                break
            case "N":
                loggedIn = (await bbs.registerForm()) !== null
                break
            case "G":
                await bbs.popup("Guest Access", "Welcome, Guest!\n\nYou have limited access as a guest.\nRegister for full access to all features.", {
                    type: "info"
                })
                loggedIn = true
                break
            case "Q":
                quit = true
                break
        }
    }

    if (quit) {
        await bbs.goodbye("ep_logoff.ans")
        return
    }

    // Show main menu (handles all navigation automatically)
    // The menu event loop will process any queued events between key presses.
    // Periodic "Welcome to Iniquity!" snack is driven by events so it runs in the
    // menu loop context (no raw timer -> bbs.snack).
    const welcomeSnackHandler = () => {
        bbs.snack("Welcome to Iniquity!", { corner: "bottom-right", durationMs: 3000 })
    }
    bbs.on("snack:welcome", welcomeSnackHandler)
    const welcomeInterval = setInterval(() => bbs.emit("snack:welcome"), 60_000)
    setTimeout(() => bbs.emit("snack:welcome"), 500)

    await bbs.showMenu("main")

    clearInterval(welcomeInterval)
    bbs.off("snack:welcome", welcomeSnackHandler)

    // Logout current user if logged in
    const currentUser = bbs.getCurrentUser()
    if (currentUser) {
        currentUser.logout()
    }

    // Emit session end event
    bbs.emit("session:end", { timestamp: Date.now() }, "system")

    // Display goodbye artwork
    await bbs.goodbye("ep_logoff.ans")
})
