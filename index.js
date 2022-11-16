const Log = require('./src/Log')
const FLogs = new Log()
const Paragraph = require('./src/Paragraph')
const FParagraph = new Paragraph()

const colorNameToHex = require('./src/utils/colorNameToHex')
const splitNewLine = require('./src/utils/splitNewLine')

module.exports = {
    FLogs: FLogs,
    BaseLog: Log,
    FParagraph: FParagraph,
    BaseParagraph: Paragraph,

    //Escaped functions
    log: (message, label, color) => {
        FLogs.log(message, label, color)
        return FLogs
    },
    here: () => {
        FLogs.here()
        return FLogs
    },

    //utils
    colorNameToHex: colorNameToHex,
    splitNewLine: splitNewLine,
}
