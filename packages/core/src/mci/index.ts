/**
 * MCI Code System
 * @module runtime/mci
 * @summary Comprehensive MCI/macro code system combining Synchronet, Iniquity, ENiGMA, and Oblivion/2
 */

export { MCIProcessor, MCIProcessorOptions, MCIProcessResult, createMCIProcessor } from "./processor"

export {
    MCIContext,
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
    mergeMCIContext
} from "./context"

export {
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
    allAtCodes
} from "./codes/at-codes"

export { PipeCodeProcessor, PipeCodeResult, pipeToAnsi, ctrlAToAnsi } from "./codes/pipe-codes"

export {
    ControlCodeProcessor,
    ControlCodeAction,
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
    resetAttributes
} from "./codes/ctrl-codes"

export {
    PositionMarkerProcessor,
    PositionMarker,
    PositionState,
    parsePositionMarker,
    createPositionMarker,
    stripPositionMarkers,
    findAllPositionMarkers
} from "./codes/position"

export {
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
    padToVisibleWidth
} from "./formatters"

export {
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
} from "./text-styles"
