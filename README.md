# Formatted-logs (FLogs)
Time-stamped and labeled Console.logs.

## Why?
Flogs was built for my package [DCHandler.js](https://nodei.co/npm/dchandler.js)

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
- hide  : Default false
- timeStruct  : Default 'HH:mm:ss'
- boxedLabels  : Default true

## Simple examples
```js
FLogs.log('just text')
// HH:mm:ss just text

FLogs.log('just text', 'Label', 'white')
// HH:mm:ss [Label] just text

FLogs.info('just info')
// HH:mm:ss [INFO] just info

FLogs.paragraph()
     .header('FLogs.paragraph')
     .body(`this is a body paragraph\nthis is another body paragraph`)

// HH:mm:ss FLogs.paragraph
//          this is a body paragraph 
//          this is another body paragraph

FLogs.paragraph()
     .Label()
     .header('FLogs.paragraph')
     .body(`this is a body paragraph \nthis is another body paragraph`)

// HH:mm:ss [FLogs.paragraph]
//          this is a body paragraph 
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
FLogs.paragraph()
     .Label('red')
     .header('Label')

// HH:mm:ss [Label] message
// HH:mm:ss [Label] message
// HH:mm:ss [Label] message
// HH:mm:ss [Label] message

```

## test.js
For Examples of all functions:

See \_test\_/logs.test.js for log examples.

See \_test\_/paragraph.test.js for paragraph examples.

## Me
 - Discord: macen#0001
 - Github: https://github.com/macen648
 - Npm: https://www.npmjs.com/~macen

## License

MIT

**Free Software, Hell Yeah!**

## Made with love 
Macen <3