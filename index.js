const Log = require('./src/Log')
const Paragraph = require('./src/Paragraph')

module.exports = {
    FLogs: new Log(),
    Log: Log,
    FParagraph: new Paragraph(),
    Paragraph: Paragraph ,
    //utils
    colorNameToHex: require('./src/utils/colorNameToHex'),
    splitNewLine: require('./src/utils/splitNewLine'),
}