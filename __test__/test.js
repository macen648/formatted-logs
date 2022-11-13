const {FLogs, FParagraph } = require('../index')

FParagraph.title('new')

FParagraph.boxed()

// FParagraph.boxedTitle()
// FParagraph.boxedFooter()
//FParagraph.noTimeStamp()

FParagraph.title('new')
FParagraph.colorTitle('green').title('new')
FParagraph.title('new')

FParagraph.noBoxedTitle()

FParagraph.title('new')

FParagraph.title('new', 'white', true)

FParagraph.title('p')
          .colorBody('pink')
          .noIndent()
          .body('test')

FParagraph.title('p2')
          .body('test', 'green')

FParagraph.title('p2').body('test', 'green', false)


FParagraph
    .title('title')
    .body('body')
    .footer('foot')


FParagraph.footer('test', 'pink', true)

FParagraph.footerColor('green')
          .footer('test')


FParagraph.noBoxedFooter()
          .footer('test')