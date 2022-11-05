const { FLogs: fLogs, Paragraph } = require('../index')
const FLogs = new fLogs()

//FLogs.log
FLogs.log('Hex white', 't', '#ccc')
FLogs.log('Text color white', 'c', 'white')
FLogs.log('Text color red', 'r', 'red')
FLogs.log('Invalid text color', 'f', 'redw')
FLogs.log('Rgb r:123, g:55, b:113', 'o', {r: 123, g: 55, b: 113})
FLogs.log('No color', 'e')
FLogs.log('just text')
FLogs.raw('Empty log:')
FLogs.log()
FLogs.raw('Variable:')
const test = 2
FLogs.log(test)
FLogs.raw('fString:')
FLogs.log(`test: ${test}`)
FLogs.white()

//FLogs.raw
FLogs.raw('Raw')
FLogs.raw()

//FLogs.info
FLogs.info('info')
FLogs.raw('Empty info:')
FLogs.info()
FLogs.white()

//FLogs.warn
FLogs.warn('warn')
FLogs.raw('Empty warn:')
FLogs.warn()
FLogs.white()

//FLogs.error
FLogs.error('error')
FLogs.raw('Empty error:')
FLogs.error()
FLogs.white()

//FLogs.table
FLogs.table([['2d array table','test','test','test','test','test'],
             ['test','test','test']])
FLogs.table(['1d array table'])
FLogs.table('no array only single string')
FLogs.raw('Empty table:')
FLogs.table()
FLogs.white()

//FLogs.timeStamp()
FLogs.raw('.timeStamp():')
FLogs.timeStamp()
FLogs.white()

//FLogs.NewLine
FLogs.log('Align')
FLogs.newLine('1 line')
FLogs.newLine('2\nlines')
FLogs.raw('Empty newLine:')
FLogs.newLine()

//FLogs.white
FLogs.raw('.white():')
FLogs.white()
FLogs.white()

//Flogs.createTimeStamp
FLogs.raw('.createTimeStamp()')
FLogs.raw(`createTimeStamp: ${FLogs.createTimeStamp()}`)
FLogs.white()

//FLogs.createLabel
FLogs.raw('.createLabel()')
FLogs.raw(`createLabel 'test', 'green': ${FLogs.createLabel('test', 'green')}`)
FLogs.raw(`createLabel 'test', 'gre': ${FLogs.createLabel('test', 'gre')}`)
FLogs.raw(`createLabel 'test': ${FLogs.createLabel('test')}`)
FLogs.raw(`createLabel: ${FLogs.createLabel()}`)
FLogs.white()

//Hide
//hide: false
FLogs.addOptions({ hide: false })
FLogs.raw('Show : FLogs.addOptions({ hide: false}):')
FLogs.log('This should be visible')
FLogs.raw('This should be visible')
FLogs.info('This should be visible')
FLogs.warn('This should be visible')
FLogs.error('This should be visible')
FLogs.newLine('This should be\nvisible')
FLogs.table('This should be visible')
FLogs.paragraph('This should be visible')
    .header()
    .body(`this is a body paragraph \nthis is another body paragraph`)
FLogs.white()
FLogs.timeStamp()
//hide: true
FLogs.raw('Hide : FLogs.addOptions({hide: true}):')
FLogs.addOptions({hide: true})
FLogs.log('This should be hidden')
FLogs.raw('This should be hidden')
FLogs.info('This should be hidden')
FLogs.warn('This should be hidden')
FLogs.error('This should be hidden')
FLogs.newLine('This should be\nhidden')
FLogs.table('This should be hidden')
FLogs.paragraph('This should be hidden')
    .header()
    .body(`this is a body paragraph \nthis is another body paragraph`)
FLogs.white()
FLogs.timeStamp()
FLogs.addOptions({ hide: false })
FLogs.white()

//BoxedLabels
//boxedLabels: false
FLogs.addOptions({ boxedLabels: false })
FLogs.raw('noShow : FLogs.addOptions({ boxedLabels: false}):')
FLogs.log('This should be hidden')
FLogs.log('This should be hidden', 'Label', 'white')
FLogs.raw('This should be hidden')
FLogs.info('This should be hidden')
FLogs.warn('This should be hidden')
FLogs.error('This should be hidden')
FLogs.newLine('This should be\nhidden')
FLogs.table('This should be hidden')
FLogs.paragraph('This should be hidden')
    .label('white')
    .header()
    .body(`this is a body paragraph \nthis is another body paragraph`)
FLogs.white()
FLogs.timeStamp()
//boxedLabels: true
FLogs.raw('show : FLogs.addOptions({boxedLabels: true}):')
FLogs.addOptions({ boxedLabels: true })
FLogs.log('This should be visible')
FLogs.log('This should be visible', 'Label', 'white')
FLogs.raw('This should be visible')
FLogs.info('This should be visible')
FLogs.warn('This should be visible')
FLogs.error('This should be visible')
FLogs.newLine('This should be\nvisible')
FLogs.table('This should be visible')
FLogs.paragraph('This should be visible')
    .label('white')
    .header()
    .body(`this is a body paragraph \nthis is another body paragraph`)




FLogs.white()
FLogs.timeStamp()
FLogs.addOptions({ boxedLabels: false })
FLogs.white()



//TimeStruct
FLogs.raw(`timeStruct : FLogs.addOptions({timeStruct: 'HH:mm:ss' }):`)
FLogs.log('HH:mm:ss')
FLogs.white()
FLogs.raw(`timeStruct : FLogs.addOptions({timeStruct: 'HH:mm' }):`)
FLogs.addOptions({ timeStruct: 'HH:mm' })
FLogs.log('HH:mm')
FLogs.addOptions({ timeStruct: 'HH:mm:ss' })
FLogs.white()
//Function chaining
FLogs.log('1')
.raw('2')
.info('3')
.warn('4')
.error('5')
.newLine('6\n6.1')
.table('7')
.white()
.timeStamp()

//label
FLogs.label('label', 'red')
FLogs.label('label')
FLogs.label()

FLogs.white()

//paragraphs
new Paragraph(FLogs, 'new Paragraph')
    .header()
    .body(`this is a body paragraph \nthis is another body paragraph`)
    
// new Paragraph('new Paragraph')
//     .header()
//     .body(`this is a body paragraph \nthis is another body paragraph`)

FLogs.white()

FLogs.paragraph('FLogs.paragraph')
     .header()
     .body(`this is a body paragraph with Flogs \nthis is another body paragraph`)

FLogs.white()

FLogs.paragraph('FLogs.paragraph')
    .noTimeStamp()
    .header()
    .body(`no time stamp \nthis is another body paragraph`)

FLogs.white()

FLogs.paragraph('FLogs.paragraph')
    .header()
    .body(`this is a body paragraph with Flogs \nthis is another body paragraph`)

FLogs.white()

FLogs.paragraph('FLogs.paragraph')
    .noTimeStamp()
    .label()
    .header()
    .body(`no time stamp \nthis is another body paragraph`)

FLogs.white()

FLogs.paragraph('FLogs.paragraph')
    .label()
    .header()
    .body(`just label \nthis is another body paragraph`)

FLogs.white()

FLogs.paragraph('FLogs.paragraph')
     .body(`just body \nthis is another body paragraph`)