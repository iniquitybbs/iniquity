# Module: runtime/mci

MCI Code System

**`Summary`**

Comprehensive MCI/macro code system combining Synchronet, Iniquity, ENiGMA, and Oblivion/2

## Table of contents

### References

- [AtCodeDefinition](runtime_mci.md#atcodedefinition)
- [AtCodeHandler](runtime_mci.md#atcodehandler)
- [AtCodeProcessor](runtime_mci.md#atcodeprocessor)
- [BBSContext](runtime_mci.md#bbscontext)
- [ControlCodeAction](runtime_mci.md#controlcodeaction)
- [ControlCodeDefinition](runtime_mci.md#controlcodedefinition)
- [ControlCodeProcessor](runtime_mci.md#controlcodeprocessor)
- [DefaultMCIContextProvider](runtime_mci.md#defaultmcicontextprovider)
- [FileContext](runtime_mci.md#filecontext)
- [FormatModifier](runtime_mci.md#formatmodifier)
- [FormatOptions](runtime_mci.md#formatoptions)
- [MCIContext](runtime_mci.md#mcicontext)
- [MCIContextProvider](runtime_mci.md#mcicontextprovider)
- [MCIProcessResult](runtime_mci.md#mciprocessresult)
- [MCIProcessor](runtime_mci.md#mciprocessor)
- [MCIProcessorOptions](runtime_mci.md#mciprocessoroptions)
- [MessageContext](runtime_mci.md#messagecontext)
- [NodeContext](runtime_mci.md#nodecontext)
- [ParsedFormat](runtime_mci.md#parsedformat)
- [PipeCodeProcessor](runtime_mci.md#pipecodeprocessor)
- [PipeCodeResult](runtime_mci.md#pipecoderesult)
- [PositionMarker](runtime_mci.md#positionmarker)
- [PositionMarkerProcessor](runtime_mci.md#positionmarkerprocessor)
- [PositionState](runtime_mci.md#positionstate)
- [SystemContext](runtime_mci.md#systemcontext)
- [TEXT\_STYLES](runtime_mci.md#text_styles)
- [TerminalContext](runtime_mci.md#terminalcontext)
- [TextStyleFunction](runtime_mci.md#textstylefunction)
- [TextStyleName](runtime_mci.md#textstylename)
- [TextStyleProcessor](runtime_mci.md#textstyleprocessor)
- [UserContext](runtime_mci.md#usercontext)
- [addThousandsSeparator](runtime_mci.md#addthousandsseparator)
- [allAtCodes](runtime_mci.md#allatcodes)
- [applyFormat](runtime_mci.md#applyformat)
- [applyTextStyle](runtime_mci.md#applytextstyle)
- [bbsCodes](runtime_mci.md#bbscodes)
- [center](runtime_mci.md#center)
- [clearLine](runtime_mci.md#clearline)
- [clearScreen](runtime_mci.md#clearscreen)
- [clearToEndOfLine](runtime_mci.md#cleartoendofline)
- [clearToEndOfScreen](runtime_mci.md#cleartoendofscreen)
- [controlCodes](runtime_mci.md#controlcodes)
- [createDefaultBBSContext](runtime_mci.md#createdefaultbbscontext)
- [createDefaultMCIContext](runtime_mci.md#createdefaultmcicontext)
- [createDefaultNodeContext](runtime_mci.md#createdefaultnodecontext)
- [createDefaultSystemContext](runtime_mci.md#createdefaultsystemcontext)
- [createDefaultTerminalContext](runtime_mci.md#createdefaultterminalcontext)
- [createDefaultUserContext](runtime_mci.md#createdefaultusercontext)
- [createMCIProcessor](runtime_mci.md#createmciprocessor)
- [createPositionMarker](runtime_mci.md#createpositionmarker)
- [ctrlAToAnsi](runtime_mci.md#ctrlatoansi)
- [cursorDown](runtime_mci.md#cursordown)
- [cursorLeft](runtime_mci.md#cursorleft)
- [cursorPosition](runtime_mci.md#cursorposition)
- [cursorRight](runtime_mci.md#cursorright)
- [cursorUp](runtime_mci.md#cursorup)
- [fileCodes](runtime_mci.md#filecodes)
- [findAllPositionMarkers](runtime_mci.md#findallpositionmarkers)
- [getTextStyle](runtime_mci.md#gettextstyle)
- [hideCursor](runtime_mci.md#hidecursor)
- [isValidTextStyle](runtime_mci.md#isvalidtextstyle)
- [leftJustify](runtime_mci.md#leftjustify)
- [listTextStyles](runtime_mci.md#listtextstyles)
- [mergeMCIContext](runtime_mci.md#mergemcicontext)
- [messageCodes](runtime_mci.md#messagecodes)
- [nodeCodes](runtime_mci.md#nodecodes)
- [padToVisibleWidth](runtime_mci.md#padtovisiblewidth)
- [parseFormatModifier](runtime_mci.md#parseformatmodifier)
- [parsePositionMarker](runtime_mci.md#parsepositionmarker)
- [pipeToAnsi](runtime_mci.md#pipetoansi)
- [resetAttributes](runtime_mci.md#resetattributes)
- [restoreCursor](runtime_mci.md#restorecursor)
- [rightJustify](runtime_mci.md#rightjustify)
- [saveCursor](runtime_mci.md#savecursor)
- [showCursor](runtime_mci.md#showcursor)
- [stripAnsi](runtime_mci.md#stripansi)
- [stripPositionMarkers](runtime_mci.md#strippositionmarkers)
- [styleAlternating](runtime_mci.md#stylealternating)
- [styleBigVowels](runtime_mci.md#stylebigvowels)
- [styleFirstLower](runtime_mci.md#stylefirstlower)
- [styleL33t](runtime_mci.md#stylel33t)
- [styleLower](runtime_mci.md#stylelower)
- [styleMixed](runtime_mci.md#stylemixed)
- [styleNormal](runtime_mci.md#stylenormal)
- [styleReverse](runtime_mci.md#stylereverse)
- [styleSmallI](runtime_mci.md#stylesmalli)
- [styleSmallVowels](runtime_mci.md#stylesmallvowels)
- [styleTitle](runtime_mci.md#styletitle)
- [styleUpper](runtime_mci.md#styleupper)
- [styleWave](runtime_mci.md#stylewave)
- [systemCodes](runtime_mci.md#systemcodes)
- [terminalCodes](runtime_mci.md#terminalcodes)
- [toFullWidth](runtime_mci.md#tofullwidth)
- [toHalfWidth](runtime_mci.md#tohalfwidth)
- [truncate](runtime_mci.md#truncate)
- [userCodes](runtime_mci.md#usercodes)
- [visibleLength](runtime_mci.md#visiblelength)
- [zeroPad](runtime_mci.md#zeropad)

## References

### AtCodeDefinition

Re-exports [AtCodeDefinition](../interfaces/runtime_mci_codes_at_codes.AtCodeDefinition.md)

___

### AtCodeHandler

Re-exports [AtCodeHandler](runtime_mci_codes_at_codes.md#atcodehandler)

___

### AtCodeProcessor

Re-exports [AtCodeProcessor](../classes/runtime_mci_codes_at_codes.AtCodeProcessor.md)

___

### BBSContext

Re-exports [BBSContext](../interfaces/runtime_mci_context.BBSContext.md)

___

### ControlCodeAction

Re-exports [ControlCodeAction](runtime_mci_codes_ctrl_codes.md#controlcodeaction)

___

### ControlCodeDefinition

Re-exports [ControlCodeDefinition](../interfaces/runtime_mci_codes_ctrl_codes.ControlCodeDefinition.md)

___

### ControlCodeProcessor

Re-exports [ControlCodeProcessor](../classes/runtime_mci_codes_ctrl_codes.ControlCodeProcessor.md)

___

### DefaultMCIContextProvider

Re-exports [DefaultMCIContextProvider](../classes/runtime_mci_context.DefaultMCIContextProvider.md)

___

### FileContext

Re-exports [FileContext](../interfaces/runtime_mci_context.FileContext.md)

___

### FormatModifier

Re-exports [FormatModifier](runtime_mci_formatters.md#formatmodifier)

___

### FormatOptions

Re-exports [FormatOptions](../interfaces/runtime_mci_formatters.FormatOptions.md)

___

### MCIContext

Re-exports [MCIContext](../interfaces/runtime_mci_context.MCIContext.md)

___

### MCIContextProvider

Re-exports [MCIContextProvider](../interfaces/runtime_mci_context.MCIContextProvider.md)

___

### MCIProcessResult

Re-exports [MCIProcessResult](../interfaces/runtime_mci_processor.MCIProcessResult.md)

___

### MCIProcessor

Re-exports [MCIProcessor](../classes/runtime_mci_processor.MCIProcessor.md)

___

### MCIProcessorOptions

Re-exports [MCIProcessorOptions](../interfaces/runtime_mci_processor.MCIProcessorOptions.md)

___

### MessageContext

Re-exports [MessageContext](../interfaces/runtime_mci_context.MessageContext.md)

___

### NodeContext

Re-exports [NodeContext](../interfaces/runtime_mci_context.NodeContext.md)

___

### ParsedFormat

Re-exports [ParsedFormat](../interfaces/runtime_mci_formatters.ParsedFormat.md)

___

### PipeCodeProcessor

Re-exports [PipeCodeProcessor](../classes/runtime_mci_codes_pipe_codes.PipeCodeProcessor.md)

___

### PipeCodeResult

Re-exports [PipeCodeResult](../interfaces/runtime_mci_codes_pipe_codes.PipeCodeResult.md)

___

### PositionMarker

Re-exports [PositionMarker](../interfaces/runtime_mci_codes_position.PositionMarker.md)

___

### PositionMarkerProcessor

Re-exports [PositionMarkerProcessor](../classes/runtime_mci_codes_position.PositionMarkerProcessor.md)

___

### PositionState

Re-exports [PositionState](../interfaces/runtime_mci_codes_position.PositionState.md)

___

### SystemContext

Re-exports [SystemContext](../interfaces/runtime_mci_context.SystemContext.md)

___

### TEXT\_STYLES

Re-exports [TEXT_STYLES](runtime_mci_text_styles.md#text_styles)

___

### TerminalContext

Re-exports [TerminalContext](../interfaces/runtime_mci_context.TerminalContext.md)

___

### TextStyleFunction

Re-exports [TextStyleFunction](runtime_mci_text_styles.md#textstylefunction)

___

### TextStyleName

Re-exports [TextStyleName](runtime_mci_text_styles.md#textstylename)

___

### TextStyleProcessor

Re-exports [TextStyleProcessor](../classes/runtime_mci_text_styles.TextStyleProcessor.md)

___

### UserContext

Re-exports [UserContext](../interfaces/runtime_mci_context.UserContext.md)

___

### addThousandsSeparator

Re-exports [addThousandsSeparator](runtime_mci_formatters.md#addthousandsseparator)

___

### allAtCodes

Re-exports [allAtCodes](runtime_mci_codes_at_codes.md#allatcodes)

___

### applyFormat

Re-exports [applyFormat](runtime_mci_formatters.md#applyformat)

___

### applyTextStyle

Re-exports [applyTextStyle](runtime_mci_text_styles.md#applytextstyle)

___

### bbsCodes

Re-exports [bbsCodes](runtime_mci_codes_at_codes.md#bbscodes)

___

### center

Re-exports [center](runtime_mci_formatters.md#center)

___

### clearLine

Re-exports [clearLine](runtime_mci_codes_ctrl_codes.md#clearline)

___

### clearScreen

Re-exports [clearScreen](runtime_mci_codes_ctrl_codes.md#clearscreen)

___

### clearToEndOfLine

Re-exports [clearToEndOfLine](runtime_mci_codes_ctrl_codes.md#cleartoendofline)

___

### clearToEndOfScreen

Re-exports [clearToEndOfScreen](runtime_mci_codes_ctrl_codes.md#cleartoendofscreen)

___

### controlCodes

Re-exports [controlCodes](runtime_mci_codes_ctrl_codes.md#controlcodes)

___

### createDefaultBBSContext

Re-exports [createDefaultBBSContext](runtime_mci_context.md#createdefaultbbscontext)

___

### createDefaultMCIContext

Re-exports [createDefaultMCIContext](runtime_mci_context.md#createdefaultmcicontext)

___

### createDefaultNodeContext

Re-exports [createDefaultNodeContext](runtime_mci_context.md#createdefaultnodecontext)

___

### createDefaultSystemContext

Re-exports [createDefaultSystemContext](runtime_mci_context.md#createdefaultsystemcontext)

___

### createDefaultTerminalContext

Re-exports [createDefaultTerminalContext](runtime_mci_context.md#createdefaultterminalcontext)

___

### createDefaultUserContext

Re-exports [createDefaultUserContext](runtime_mci_context.md#createdefaultusercontext)

___

### createMCIProcessor

Re-exports [createMCIProcessor](runtime_mci_processor.md#createmciprocessor)

___

### createPositionMarker

Re-exports [createPositionMarker](runtime_mci_codes_position.md#createpositionmarker)

___

### ctrlAToAnsi

Re-exports [ctrlAToAnsi](runtime_mci_codes_pipe_codes.md#ctrlatoansi)

___

### cursorDown

Re-exports [cursorDown](runtime_mci_codes_ctrl_codes.md#cursordown)

___

### cursorLeft

Re-exports [cursorLeft](runtime_mci_codes_ctrl_codes.md#cursorleft)

___

### cursorPosition

Re-exports [cursorPosition](runtime_mci_codes_ctrl_codes.md#cursorposition)

___

### cursorRight

Re-exports [cursorRight](runtime_mci_codes_ctrl_codes.md#cursorright)

___

### cursorUp

Re-exports [cursorUp](runtime_mci_codes_ctrl_codes.md#cursorup)

___

### fileCodes

Re-exports [fileCodes](runtime_mci_codes_at_codes.md#filecodes)

___

### findAllPositionMarkers

Re-exports [findAllPositionMarkers](runtime_mci_codes_position.md#findallpositionmarkers)

___

### getTextStyle

Re-exports [getTextStyle](runtime_mci_text_styles.md#gettextstyle)

___

### hideCursor

Re-exports [hideCursor](runtime_mci_codes_ctrl_codes.md#hidecursor)

___

### isValidTextStyle

Re-exports [isValidTextStyle](runtime_mci_text_styles.md#isvalidtextstyle)

___

### leftJustify

Re-exports [leftJustify](runtime_mci_formatters.md#leftjustify)

___

### listTextStyles

Re-exports [listTextStyles](runtime_mci_text_styles.md#listtextstyles)

___

### mergeMCIContext

Re-exports [mergeMCIContext](runtime_mci_context.md#mergemcicontext)

___

### messageCodes

Re-exports [messageCodes](runtime_mci_codes_at_codes.md#messagecodes)

___

### nodeCodes

Re-exports [nodeCodes](runtime_mci_codes_at_codes.md#nodecodes)

___

### padToVisibleWidth

Re-exports [padToVisibleWidth](runtime_mci_formatters.md#padtovisiblewidth)

___

### parseFormatModifier

Re-exports [parseFormatModifier](runtime_mci_formatters.md#parseformatmodifier)

___

### parsePositionMarker

Re-exports [parsePositionMarker](runtime_mci_codes_position.md#parsepositionmarker)

___

### pipeToAnsi

Re-exports [pipeToAnsi](runtime_mci_codes_pipe_codes.md#pipetoansi)

___

### resetAttributes

Re-exports [resetAttributes](runtime_mci_codes_ctrl_codes.md#resetattributes)

___

### restoreCursor

Re-exports [restoreCursor](runtime_mci_codes_ctrl_codes.md#restorecursor)

___

### rightJustify

Re-exports [rightJustify](runtime_mci_formatters.md#rightjustify)

___

### saveCursor

Re-exports [saveCursor](runtime_mci_codes_ctrl_codes.md#savecursor)

___

### showCursor

Re-exports [showCursor](runtime_mci_codes_ctrl_codes.md#showcursor)

___

### stripAnsi

Re-exports [stripAnsi](runtime_mci_formatters.md#stripansi)

___

### stripPositionMarkers

Re-exports [stripPositionMarkers](runtime_mci_codes_position.md#strippositionmarkers)

___

### styleAlternating

Re-exports [styleAlternating](runtime_mci_text_styles.md#stylealternating)

___

### styleBigVowels

Re-exports [styleBigVowels](runtime_mci_text_styles.md#stylebigvowels)

___

### styleFirstLower

Re-exports [styleFirstLower](runtime_mci_text_styles.md#stylefirstlower)

___

### styleL33t

Re-exports [styleL33t](runtime_mci_text_styles.md#stylel33t)

___

### styleLower

Re-exports [styleLower](runtime_mci_text_styles.md#stylelower)

___

### styleMixed

Re-exports [styleMixed](runtime_mci_text_styles.md#stylemixed)

___

### styleNormal

Re-exports [styleNormal](runtime_mci_text_styles.md#stylenormal)

___

### styleReverse

Re-exports [styleReverse](runtime_mci_text_styles.md#stylereverse)

___

### styleSmallI

Re-exports [styleSmallI](runtime_mci_text_styles.md#stylesmalli)

___

### styleSmallVowels

Re-exports [styleSmallVowels](runtime_mci_text_styles.md#stylesmallvowels)

___

### styleTitle

Re-exports [styleTitle](runtime_mci_text_styles.md#styletitle)

___

### styleUpper

Re-exports [styleUpper](runtime_mci_text_styles.md#styleupper)

___

### styleWave

Re-exports [styleWave](runtime_mci_text_styles.md#stylewave)

___

### systemCodes

Re-exports [systemCodes](runtime_mci_codes_at_codes.md#systemcodes)

___

### terminalCodes

Re-exports [terminalCodes](runtime_mci_codes_at_codes.md#terminalcodes)

___

### toFullWidth

Re-exports [toFullWidth](runtime_mci_formatters.md#tofullwidth)

___

### toHalfWidth

Re-exports [toHalfWidth](runtime_mci_formatters.md#tohalfwidth)

___

### truncate

Re-exports [truncate](runtime_mci_formatters.md#truncate)

___

### userCodes

Re-exports [userCodes](runtime_mci_codes_at_codes.md#usercodes)

___

### visibleLength

Re-exports [visibleLength](runtime_mci_formatters.md#visiblelength)

___

### zeroPad

Re-exports [zeroPad](runtime_mci_formatters.md#zeropad)
