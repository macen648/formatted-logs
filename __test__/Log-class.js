const { FLogs, Log } = require('../index')

FLogs.message('new text1')
    .messageColor('#ccc')
    .label('t')
    .labelColor('#ccc')
    .prefix('p')
    .prefixColor('#ccc')
    .timeStampStruct('HH:mm:ss')
    .timeStampColor('#ccc')
    .log()

new Log().message('new text2')
     .messageColor('#ccc')
     .label('t')
     .labelColor('#ccc')
     .prefix('p')
     .prefixColor('#ccc')
     .timeStampStruct('HH:mm:ss')
     .timeStampColor('#ccc')
     .log()

new Log().message('test')
         .label('t')
         .labelColor('red')
         .log()

new Log().message('test')
    .prefix('p')
    .prefixColor('pink')
    .label('t')
    .labelColor('red')
    .log()

new Log().message('dupe1')
    .prefix('p')
    .prefixColor('pink')
    .label('t')
    .labelColor('red')
    .timeStampColor('blue')
    .log()

new Log()
    .prefix('p', 'pink')
    .label('t', 'red')
    .timeStampColor('blue')
    .log('dupe2')

new Log().message('test')
    .prefix('p')
    .prefixColor('pink')
    .label(['t', 'y'])
    .labelColor('red')
    .timeStampColor('blue')
    .log()

new Log().message('test')
    .prefix('p')
    .prefixColor('pink')
    .label(['t', 'y'])
    .labelColor(['red', 'white'])
    .timeStampColor('blue')
    .log()

new Log().message()
    .prefix('p')
    .prefixColor('green')
    .label(['t', 'y'], ['red', 'brown'])
    .log('Hello!')

new Log().message()
    .prefix('p')
    .prefixColor('green')
    .label(['t', 'y'], ['red', 'brown'])
    .noTimeStamp()
    .log('Hello!')

new Log()
    .label(['t', 'y'], ['red', 'brown'])
    .log('Hello!')

new Log()
    .label(['t', 'y', 'x'], ['red', '', 'red'])
    .log('Hello!')

new Log().log('hey')
new Log().noTimeStamp().log('hey')
new Log({timeStamp: false}).log('false')

new Log()
.boxedTimeStamp()
.log('Boxed')



new Log()
    .prefix('p')
    //.prefixColor({ r: 123, g: 55, b: 113 })
    .boxedTimeStamp()
    .timeStampColor({ r: 123, g: 55, b: 113 })
    .label('t')
    .labelColor('red')
    .log('test')


new Log().message()
    .prefix('p')
    .prefixColor('green')
    .label(['t', 'y'], ['red', 'brown'])
    .noTimeStamp()
    .log('Hello!')

new Log()
    .prefix('p')
    .prefixColor('pink')
    .label(['t', 'g'])
    .labelColor({ r: 123, g: 55, b: 113 })
    .noBoxedLabel()
    .boxedTimeStamp()
    .timeStampColor('blue')
    .messageColor('yellow')
    .log('test')

new Log().log('test', 't', 'red')


FLogs.log('test')