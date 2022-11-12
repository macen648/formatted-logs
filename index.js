const Log = require('./src/Log')

module.exports = {
    FLogs: new Log(),
    Log: Log,
    Paragraph: require('./src/Paragraph'),
    colorNameToHex: require('./src/utils/colorNameToHex'),
    splitNewLine: require('./src/utils/splitNewLine'),
}