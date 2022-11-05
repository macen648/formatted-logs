# Formatted-logs (FLogs)
Time-stamped and labeled Console.logs.

## Why?
Flogs was built for my package [DCHandler.js](https://nodei.co/npm/dchandler)

## TimeStamp and label structure
```
HH:mm:ss message
HH:mm:ss [label] message
```

FLogs is using dayjs for timeStamps

See dayjs .format() documentation for more information on timeStamp structure.

Time structure can be changed using .addOptions({timeStruct: "struct"})

or setTimeStruct("struct")

## Options
- hide Default false
- timeStruct Default 'HH:mm:ss'
- boxedLabels Default false

## Simple examples
```js
FLogs.log('just text')
// HH:mm:ss message

FLogs.log('just text', 'Label', 'white')
// HH:mm:ss [Label] message

FLogs.paragraph('FLogs.paragraph')
     .header()
     .body(`this is a body paragraph with Flogs \nthis is another body paragraph`)

// HH:mm:ss FLogs.paragraph
//          this is a body paragraph with Flogs
//          this is another body paragraph
```

## colors
```js
FLogs.log('message', 'Label', 'color')
```

The color argument accepts Hex, HTML color names, and rgb objects.

```js
// All red
FLogs.log('message', 'Label', '#FF0000')
FLogs.log('message', 'Label', 'red')
FLogs.log('message', 'Label', {r: 255, g:0, b:0})
```

## test.js output
Examples of all functions:

See _\_test_\_/test.js for examples.

```
23:17:03 t Hex white
23:17:03 c Text color white
23:17:03 r Text color red
23:17:03 f Invalid text color
23:17:03 o Rgb r:123, g:55, b:113
23:17:03 e No color
23:17:03 just text
Empty log:
23:17:03
Variable:
23:17:03 2
fString:
23:17:03 test: 2

Raw

23:17:03 INFO info
Empty info:
23:17:03 INFO

23:17:03 WARN warn
Empty warn:
23:17:03 WARN

23:17:03 error error
Empty error:
23:17:03 error

------23:17:03------
┌─────────┬──────────────────┬────────┬────────┬────────┬────────┬────────┐
│ (index) │        0         │   1    │   2    │   3    │   4    │   5    │
├─────────┼──────────────────┼────────┼────────┼────────┼────────┼────────┤
│    0    │ '2d array table' │ 'test' │ 'test' │ 'test' │ 'test' │ 'test' │
│    1    │      'test'      │ 'test' │ 'test' │        │        │        │
└─────────┴──────────────────┴────────┴────────┴────────┴────────┴────────┘
------23:17:03------
┌─────────┬──────────────────┐
│ (index) │      Values      │
├─────────┼──────────────────┤
│    0    │ '1d array table' │
└─────────┴──────────────────┘
------23:17:03------
┌─────────┬───────────────────────────────┐
│ (index) │            Values             │
├─────────┼───────────────────────────────┤
│    0    │ 'no array only single string' │
└─────────┴───────────────────────────────┘
Empty table:
------23:17:03------
┌─────────┐
│ (index) │
├─────────┤
└─────────┘

.timeStamp():
23:17:03

23:17:03 Align
         1 line
         2
         lines
Empty newLine:

.white():


.createTimeStamp()
createTimeStamp: 23:17:03

.createLabel()
createLabel 'test', 'green': test
createLabel 'test', 'gre': test
createLabel 'test': test
createLabel:

Show : FLogs.addOptions({ hide: false}):
23:17:03 This should be visible
This should be visible
23:17:03 INFO This should be visible
23:17:03 WARN This should be visible
23:17:03 error This should be visible
         This should be
         visible
------23:17:03------
┌─────────┬──────────────────────────┐
│ (index) │          Values          │
├─────────┼──────────────────────────┤
│    0    │ 'This should be visible' │
└─────────┴──────────────────────────┘
23:17:03 This should be visible
         this is a body paragraph
         this is another body paragraph

23:17:03
Hide : FLogs.addOptions({hide: true}):

noShow : FLogs.addOptions({ boxedLabels: false}):
23:17:03 This should be hidden
23:17:03 Label This should be hidden
This should be hidden
23:17:03 INFO This should be hidden
23:17:03 WARN This should be hidden
23:17:03 error This should be hidden
         This should be
         hidden
------23:17:03------
┌─────────┬─────────────────────────┐
│ (index) │         Values          │
├─────────┼─────────────────────────┤
│    0    │ 'This should be hidden' │
└─────────┴─────────────────────────┘
23:17:03 This should be hidden
         this is a body paragraph
         this is another body paragraph

23:17:03
show : FLogs.addOptions({boxedLabels: true}):
23:17:03 This should be visible
23:17:03 [Label] This should be visible
This should be visible
23:17:03 [INFO] This should be visible
23:17:03 [WARN] This should be visible
23:17:03 [error] This should be visible
         This should be
         visible
------23:17:03------
┌─────────┬──────────────────────────┐
│ (index) │          Values          │
├─────────┼──────────────────────────┤
│    0    │ 'This should be visible' │
└─────────┴──────────────────────────┘
23:17:03 [This should be visible]
         this is a body paragraph
         this is another body paragraph

23:17:03

timeStruct : FLogs.addOptions({timeStruct: 'HH:mm:ss' }):
23:17:03 HH:mm:ss

timeStruct : FLogs.addOptions({timeStruct: 'HH:mm' }):
23:17 HH:mm

23:17:03 1
2
23:17:03 INFO 3
23:17:03 WARN 4
23:17:03 error 5
         6
         6.1
------23:17:03------
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  '7'   │
└─────────┴────────┘

23:17:03
label
label


23:17:03 new Paragraph
         this is a body paragraph
         this is another body paragraph

23:17:03 FLogs.paragraph
         this is a body paragraph with Flogs
         this is another body paragraph

FLogs.paragraph
no time stamp
this is another body paragraph

23:17:03 FLogs.paragraph
         this is a body paragraph with Flogs
         this is another body paragraph

FLogs.paragraph
no time stamp
this is another body paragraph

23:17:03 FLogs.paragraph
         just label
         this is another body paragraph

         just body
         this is another body paragraph
```

## Me
 - Discord: macen#0001
 - Github: https://github.com/macen648
 - Npm: https://www.npmjs.com/~macen

## License

MIT

**Free Software, Hell Yeah!**

## Made with love 
Macen <3