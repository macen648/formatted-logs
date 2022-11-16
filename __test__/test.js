//const {FLogs, FParagraph, here, log } = require('../index')
const { FLogs, here, log } = require('../index')

FLogs.debug('debug')
FLogs.raw('raw')
FLogs.info('info')
FLogs.warn('warn')
FLogs.error('error')

here()
log('het')