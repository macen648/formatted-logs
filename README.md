# Formatted-logs (FLogs)
Time-stamped and labeled Console.logs.

## Why?
Flogs was built for my package [DCHandler.js](https://nodei.co/npm/dchandler.js)

## TimeStamp and label structure
```
message
prefix HH:mm:ss [label] message
```

FLogs is using dayjs for timeStamps

See dayjs .format() documentation for more information on timeStamp structure.

Time structure can be changed using .addOptions({timeStampStructure: "HH:mm:ss"})

or timeStampStructure("HH:mm:ss")


## Colors
All sections of the log can be colored

The color argument(s) accepts Hex, HTML color names, and rgb objects.

(Example)
red:
- #FF0000
- red
- {r: 255, g:0, b:0}

```js
import FLogs, { FParagraph } from '../formatted-logs'

FLogs.log('message', 'Label', 'color')
FLogs.labelColor('color').log('message', 'Label')

FLogs
     .prefixColor('color')
     .timeStampColor('color')
     .labelColor('color')
     .messageColor('color')

FParagraph
     .titleColor('color')
     .bodyColor('color')
     .footerColor('color')


FLogs.log('message', 'Label', '#FF0000')
FLogs.log('message', 'Label', 'red')
FLogs.log('message', 'Label', {r: 255, g:0, b:0})
FLogs.labelColor('red').log('message', 'Label')
FParagraph.title('Label', 'red', true)
FParagraph
     .boxedTitle()
     .titleColor('red')
     .title('Label')

// All red labels
// HH:mm:ss [Label] message
// HH:mm:ss [Label] message
// HH:mm:ss [Label] message
// HH:mm:ss [Label] message
// HH:mm:ss [Label] message
// HH:mm:ss [Label] message

```

## Options
- hide = false
- boxedLabels = true
- timeStamp = true
- boxedTimeStamp = false
- timeStampStructure = 'HH:mm:ss'

## force
Any forced colors will override the default value of '#ccc'.
- baseMessageColor = undefined
- labelTextColor = undefined
- prefixTextColor = undefined
- timeStampTextColor = undefined

Example:
```js
import FLogs from '../formatted-logs'

FLogs.log('just text', 'Label')
// HH:mm:ss [Label] just text
//            ^^^
// Label is the color of white

Flogs.forceDefaults({labelTextColor: 'red'})

FLogs.log('just text', 'Label')
// HH:mm:ss [Label] just text
//            ^^^
// Label is now the color of red

```


## Simple examples
```js
import FLogs from '../formatted-logs'

FLogs.log('just text')
// HH:mm:ss just text

FLogs.log('just text', 'Label', 'white')
// HH:mm:ss [Label] just text

FLogs.info('just info')
// HH:mm:ss [INFO] just info

FLogs.prefix('prefix:').log('just text', 'Label', 'white')
// prefix: HH:mm:ss [Label] just info

import { log, here } from '../formatted-logs'

log('just text') // Escaped log function, Using same options as default FLogs instance.
// HH:mm:ss just text

here() // Useful for debugging
// HH:mm:ss Here!

import { FParagraph } from '../formatted-logs'

// FParagraph contains its own FLogs instance, options for base FParagraph and Base FLogs instance do not transfer. 

FParagraph
     .title('FLogs.paragraph')
     .body(`this is a body paragraph\nthis is another body paragraph`)

// HH:mm:ss FLogs.paragraph
//          this is a body paragraph 
//          this is another body paragraph

FParagraph
     .boxedTitle()
     .title('FLogs.paragraph')
     .body(`this is a body paragraph \nthis is another body paragraph`)
// HH:mm:ss [FLogs.paragraph]
//          this is a body paragraph 
//          this is another body paragraph

FParagraph
     .title('FLogs.paragraph', '', true)
     .body(`this is a body paragraph \nthis is another body paragraph`)
// HH:mm:ss [FLogs.paragraph]
//          this is a body paragraph 
//          this is another body paragraph

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