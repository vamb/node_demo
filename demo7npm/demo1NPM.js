const selfDate = require('./selfDate')
const moment = require('moment')

const dt = new Date()

console.log('formatDate', dt, selfDate.dateFormat(dt), moment(dt).format('YYYY-MM-DD hh:mm:ss'))
