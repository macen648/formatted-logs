// Custom Console logs ;)
import Logger from './src/Logger.js'
import Paragraph from './src/Paragraph.js'
import colorNameToHex from './src/utils/colorNameToHex.js'
import splitNewLine from './src/utils/splitNewLine.js'

const FLogs = new Logger()

//Flogs
export default FLogs
export const BaseLogger = Logger

//Paragraph
export const FParagraph = new Paragraph()
export const BaseParagraph = Paragraph

//utils
export { colorNameToHex }
export { splitNewLine } 

//Escaped functions
export function log(message, label, color) {
        FLogs.log(message, label, color)
        return FLogs
    }

export function here() {
        FLogs.here()
        return FLogs
    }

