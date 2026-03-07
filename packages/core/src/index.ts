/**
 * @iniquitybbs/core
 * @summary Core BBS runtime library for building bulletin board systems
 * 
 * This package provides the foundational classes and utilities for building
 * BBS applications, including:
 * - IQ base class for BBS modules
 * - Artwork rendering with SAUCE metadata support
 * - Menu and Frame systems
 * - Reactive data with IQReactor and computed properties
 * - MCI code processing (Synchronet, ENiGMA, pipe codes)
 * - ANSI escape sequence utilities
 * - Module decorators
 * - User management and authentication
 * - Group and permission system
 * - Network connectivity (FidoNet, inter-BBS)
 * - Text manipulation utilities
 * - Configuration management
 */

// Core classes and functions
export {
    // Classes
    IQ,
    Runtime,
    Artwork,
    
    // Standalone functions
    say,
    ask,
    pause,
    wait,
    print,
    printMCI,
    gotoxy,
    disconnect,
    hangup,
    cursor,
    menu,
    frame,
    artwork,
    user,
    users,
    group,
    groups,
    network,
    text,
    config,
    alert,
    
    // Runtime management
    setGlobalRuntime,
    getGlobalRuntime,
    
    // Types
    IQTermInfoObject,
    IBBSSayFunctions,
    IBBSPrintFunctions,
    IQPauseOptions,
    IQWaitOptions,
    IQArtworkOptions,
    IQArtworkRenderOptions,
    IQArtworkRenderFunctions,
    IQCursorOptions,
    IQCursorChainableMethods,
    SAUCEInfo,
    IAlertOptions
} from './core'

// Output interface
export { IQOutput, ControlCodeAction } from './output'

// Menu system
export {
    IQMenu,
    IQMenuOptions,
    IQMenuLoopOptions,
    IQMenuLoopMessageResponse,
    IQMenuPromptOptions,
    IQMenuPromptFunctions,
    IMenuCommand,
    IMenuCommands
} from './menu'

// Frame system
export {
    IQFrame,
    IQFrameOptions,
    IQFrameColorOptions
} from './frame'

// Reactive data
export {
    IQReactor,
    IQReactorOptions,
    IQComputedProperty
} from './reactor'

// Decorators
export {
    IQModule,
    IQModuleRuntime,
    IQModuleACLS,
    IQModuleOptions,
    IQModuleRuntimeOptions,
    getModuleMetadata,
    getRuntimeMetadata
} from './decorators'

// ANSI utilities
export { ANSI } from './ansi'

// User system
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
    getUserDatabase
} from './user'

// Group system
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
    DEFAULT_PERMISSIONS
} from './group'

// Network system
export {
    IQNetwork,
    INetworkNode,
    IFidoAddress,
    INetworkMessage,
    INetworkConnectionOptions,
    getNetwork,
    setNetwork
} from './network'

// Text utilities
export {
    IQText,
    ITextWrapOptions,
    ITextBoxOptions,
    TextAlignment
} from './text'

// Configuration
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
} from './config'

// MCI system - specific exports to avoid conflicts
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
    stripAnsi,
    visibleLength,
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
} from './mci'
