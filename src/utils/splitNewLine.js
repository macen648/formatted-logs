module.exports = splitNewLine = (message) => { return typeof message != 'string' ? [message] :  message.trimEnd().split('\n') }
