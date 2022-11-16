const Log = require('./src/Log')
const FLog = new Log()
const Paragraph = require('./src/Paragraph')

module.exports = {
    FLogs: FLog,
    BaseLog: Log,
    FParagraph: new Paragraph(),
    BaseParagraph: Paragraph ,
    //Escaped functions
    log: (message, label, color) => {
        FLog.log(message, label, color)
        return FLog
    },
    here: () => {
        FLog.here()
        return FLog
    },

    //utils
    colorNameToHex: require('./src/utils/colorNameToHex'),
    splitNewLine: require('./src/utils/splitNewLine'),
}