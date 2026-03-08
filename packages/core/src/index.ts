/**
 * @iniquitybbs/core
 * @summary Core BBS runtime library for building bulletin board systems
 *
 * This package provides the foundational classes and utilities for building
 * BBS applications with a clean, declarative API.
 */

// ============================================================================
// BBS API - Primary Interface for Building BBS Applications
// ============================================================================

/**
 * BBS singleton object - the main interface for building BBS applications
 * Provides declarative menu registration, artwork rendering, user management,
 * event bus, and more.
 *
 * @example
 * ```typescript
 * import { bbs, screen } from "@iniquitybbs/core"
 *
 * screen.setResolution(132, 37)
 * bbs.menu("main", { ... })
 * bbs.start(async () => {
 *     await bbs.showMenu("main")
 * })
 * ```
 */
export {
    bbs,
    BBSType,
    BBSMenuItem,
    BBSMenuOptions,
    BBSPopupOptions,
    BBSArtOptions,
    BBSChoiceOption,
    BBSBulletinOptions,
    SessionInfo,
    ServerInfo
} from "./bbs"

/**
 * Screen utilities for terminal dimensions and centering
 */
export { screen, Screen, TERM_WIDTH, TERM_HEIGHT } from "./screen"

/**
 * Screen buffer management for popup overlays (advanced use)
 */
export { screenBuffer, ScreenBuffer } from "./screen-buffer"

// ============================================================================
// Runtime Layer - Advanced/Internal Components
// ============================================================================

/**
 * Core runtime class
 */
export {
    // Classes
    Runtime,

    // Types
    IQTermInfoObject,
    IBBSSayFunctions,
    IBBSPrintFunctions,
    IQPauseOptions,
    IQSayOptions,
    IQWaitOptions,
    IQCursorOptions,
    IQCursorChainableMethods,
    IAlertOptions,

    // Runtime management
    setGlobalRuntime,
    getGlobalRuntime
} from "./core"

/**
 * ANSI artwork rendering with SAUCE metadata support
 */
export { Artwork, IQArtworkOptions, IQArtworkRenderOptions, IQArtworkRenderFunctions, SAUCEInfo, cp437ToUtf8 } from "./artwork"

/**
 * String utility functions (opt-in, no global pollution)
 */
export {
    colorText,
    centerText,
    leftAlign,
    rightAlign,
    stripAnsi,
    visibleLength,
    truncateText,
    padText,
    addNewlines,
    gotoxyText,
    upperText,
    lowerText,
    titleText,
    repeatText
} from "./string-utils"

// ============================================================================
// Components - Menus, Frames, Reactive Data
// ============================================================================

/**
 * Menu system
 */
/**
 * Menu system
 */
export {
    IQMenu,
    IQMenuOptions,
    IQMenuArtOptions,
    IQMenuLoopOptions,
    IQMenuLoopMessageResponse,
    IQMenuPromptOptions,
    IQMenuPromptFunctions,
    IQMenuItem,
    IMenuCommand,
    IMenuCommands
} from "./menu"

/**
 * Frame system (windowed UI elements)
 */
export { IQFrame, IQFrameOptions, IQFrameColorOptions, IQFrameBorderStyle } from "./frame"

/**
 * Reactive data (observable data models)
 */
export { IQReactor, IQReactorOptions, IQComputedProperty } from "./reactor"

// ============================================================================
// Data Management - Users, Groups, Configuration
// ============================================================================

/**
 * User system
 */
export {
    IQUser,
    IUserOptions,
    UserAccessLevel,
    IUserData,
    IUserStats,
    IQUserList,
    IUserDatabase,
    JSONUserDatabase,
    setUserDatabase,
    getUserDatabase,
    initUserDatabase
} from "./user"

/**
 * Group system
 */
export {
    IQGroup,
    IGroupOptions,
    IGroupData,
    IGroupPermissions,
    IQGroupList,
    IGroupDatabase,
    JSONGroupDatabase,
    setGroupDatabase,
    getGroupDatabase,
    initGroupDatabase,
    DEFAULT_PERMISSIONS
} from "./group"

/**
 * Network system (FidoNet, inter-BBS)
 */
export { IQNetwork, INetworkNode, IFidoAddress, INetworkMessage, INetworkConnectionOptions, getNetwork, setNetwork } from "./network"

/**
 * Text utilities
 */
export { IQText, ITextWrapOptions, ITextBoxOptions, TextAlignment } from "./text"

/**
 * Configuration management
 */
export {
    IQConfig,
    IBBSConfig,
    IServerConfig,
    IPathsConfig,
    IDisplayConfig,
    ISecurityConfig,
    INetworkConfig,
    ILoggingConfig,
    DEFAULT_CONFIG,
    getConfig,
    setConfig,
    loadConfig
} from "./config"

// ============================================================================
// Graphics & Rendering
// ============================================================================

/**
 * ANSI utilities and color constants
 */
export { ANSI, CGA } from "./ansi"

/**
 * Graphic system (in-memory ANSI buffer)
 */
export { Graphic, GraphicCell, GraphicOptions, CGA as CGAColors, makeAttr, getForeground, getBackground, hasBlink } from "./graphic"

/**
 * Avatar system (user avatars)
 */
export { Avatar, AvatarData, AvatarDefs } from "./avatar"

/**
 * CTerm utilities (terminal detection)
 */
export { CTerm, CTermVersions, CTermDeviceAttributes, CTermCapabilities, CTermFontState, CTermFontDimensions, CTermGraphicsDimensions } from "./cterm"

/**
 * Sixel graphics support
 */
export { Sixel, SixelOptions, SixelColor, SixelImageInfo } from "./sixel"

/**
 * XBin image format support
 */
export { XBin, XBinFlags, XBinHeader, XBinPalette, XBinImage, XBIN_ID, XBIN_ID_LENGTH } from "./xbin"

// ============================================================================
// I/O & Session Management
// ============================================================================

/**
 * Output interface abstraction
 */
export { IQOutput, ControlCodeAction } from "./output"

// ============================================================================
// MCI Subsystem - Dynamic Content Processing
// ============================================================================

/**
 * MCI (Message Command Interpreter) code processing
 * Supports pipe codes (|XX), @-codes (@USER@), control codes (|CS), etc.
 */
export {
    MCIProcessor,
    MCIContext,
    MCIProcessorOptions,
    MCIProcessResult,
    createMCIProcessor,
    MCIContextProvider,
    DefaultMCIContextProvider,
    UserContext,
    SystemContext,
    BBSContext,
    TerminalContext,
    MessageContext,
    FileContext,
    NodeContext,
    createDefaultMCIContext,
    createDefaultUserContext,
    createDefaultSystemContext,
    createDefaultBBSContext,
    createDefaultTerminalContext,
    createDefaultNodeContext,
    mergeMCIContext,
    AtCodeProcessor,
    AtCodeHandler,
    AtCodeDefinition,
    userCodes,
    systemCodes,
    bbsCodes,
    terminalCodes,
    nodeCodes,
    messageCodes,
    fileCodes,
    allAtCodes,
    PipeCodeProcessor,
    PipeCodeResult,
    pipeToAnsi,
    ctrlAToAnsi,
    ControlCodeProcessor,
    ControlCodeDefinition,
    controlCodes,
    cursorUp,
    cursorDown,
    cursorLeft,
    cursorRight,
    cursorPosition,
    clearScreen,
    clearLine,
    clearToEndOfLine,
    clearToEndOfScreen,
    saveCursor,
    restoreCursor,
    hideCursor,
    showCursor,
    resetAttributes,
    PositionMarkerProcessor,
    PositionMarker,
    PositionState,
    parsePositionMarker,
    createPositionMarker,
    stripPositionMarkers,
    findAllPositionMarkers,
    FormatModifier,
    FormatOptions,
    ParsedFormat,
    parseFormatModifier,
    applyFormat,
    leftJustify,
    rightJustify,
    center,
    zeroPad,
    addThousandsSeparator,
    toFullWidth,
    toHalfWidth,
    truncate,
    stripAnsi as mciStripAnsi,
    visibleLength as mciVisibleLength,
    padToVisibleWidth,
    TextStyleName,
    TextStyleFunction,
    TextStyleProcessor,
    TEXT_STYLES,
    styleNormal,
    styleUpper,
    styleLower,
    styleTitle,
    styleFirstLower,
    styleSmallVowels,
    styleBigVowels,
    styleSmallI,
    styleMixed,
    styleL33t,
    styleReverse,
    styleAlternating,
    styleWave,
    getTextStyle,
    applyTextStyle,
    listTextStyles,
    isValidTextStyle
} from "./mci"

// ============================================================================
// Event System - Global Publish/Subscribe
// ============================================================================

/**
 * Event bus for inter-module communication
 */
export { events, IQEventBus, IQEvent, IQEventHandler, IQEventOptions } from "./events"

// ============================================================================
// Decorators - Class-based Module Development (Internal Use)
// ============================================================================

/**
 * Module decorators (used internally for organizing runtime code)
 */
export { IQModule, IQModuleRuntime, IQModuleACLS, IQModuleOptions, IQModuleRuntimeOptions, getModuleMetadata, getRuntimeMetadata } from "./decorators"

/**
 * Runtime utility decorators
 */
export { Cached, Measure, Validate, Lifecycle, Transaction, Synchronized, Retry, Timeout, Debounce, Throttle } from "./decorators-runtime"
