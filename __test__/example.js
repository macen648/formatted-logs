import FLogs, { FParagraph } from '../index.js'

FLogs.noBoxedLabel()

const result = process.argv[2]
const result2 = process.argv[3]

FLogs.log(result, 'Input:', 'lightblue')
FParagraph.title('Input2:', 'lightblue')
          .body(result2)

FParagraph.title('FLogs.paragraph', 'lightblue', true)
          .body(`this is a body paragraph \nthis is another body paragraph`)

