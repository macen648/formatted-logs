const { FLogs: fLogs, Paragraph } = require('../index')
const FLogs = new fLogs()

new Paragraph(FLogs)
    .title('new')
    .body('body')

FLogs.white()

FLogs.paragraph()
     .title('title')
     .body('body')

FLogs.white()

FLogs.paragraph()
     .title()
     .body('body')

FLogs.white()

FLogs.paragraph()
     .noIndent()
     .title('title')
     .body('body')

FLogs.white()

FLogs.paragraph()
     .noTimeStamp()
     .title('title')
     .body('body')

FLogs.white()

FLogs.paragraph()
     .title('title')
     .body('body')
     .footer()

FLogs.white()

FLogs.paragraph()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.white()

FLogs.paragraph()
     .noIndent()
     .noTimeStamp()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.white()

FLogs.paragraph()
     .noTimeStamp()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.white()

FLogs.paragraph()
     .noIndent()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.white()

FLogs.paragraph()
     .label()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.white()

FLogs.paragraph()
     .noIndent()
     .noTimeStamp()
     .label()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.white()

FLogs.paragraph()
     .noTimeStamp()
     .label()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.paragraph()
     .noIndent()
     .label()
     .title('title')
     .body('body')
     .footer('footer')

FLogs.white()

FLogs.paragraph()
     .label()
     .title('title')
     .body('body')
     .footer()