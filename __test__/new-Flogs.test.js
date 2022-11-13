const { FLogs, FParagraph } = require('../index')

// FLogs.log
FLogs.log('Hex white', 't', '#ccc')
FLogs.log('Text color white', 'c', 'white')
FLogs.log('Text color red', 'r', 'red')
FLogs.log('Text color red', 'r', 'red')
FLogs.log('Invalid text color', 'f', 'redw')
FLogs.log('Rgb r:123, g:55, b:113', 'o', { r: 123, g: 55, b: 113 })
FLogs.log('just text')
FLogs.log()
const test = 2
FLogs.log(test)
FLogs.log(`test: ${test}`).log('test')
