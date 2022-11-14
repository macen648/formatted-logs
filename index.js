const Log = require('./src/Log')
const Paragraph = require('./src/Paragraph')

module.exports = {
    FLogs: new Log(),
    BaseLog: Log,
    FParagraph: new Paragraph(),
    BaseParagraph: Paragraph ,
    //utils
    colorNameToHex: require('./src/utils/colorNameToHex'),
    splitNewLine: require('./src/utils/splitNewLine'),
}