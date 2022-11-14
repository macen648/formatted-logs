const { FLogs, FParagraph } = require('../index')
FLogs.noBoxedLabel()

const result = process.argv[2]
const result2 = process.argv[3]

FLogs.log(result, 'Input:', 'lightblue')
FParagraph.title('Input2:', 'lightblue')
          .body(result2)