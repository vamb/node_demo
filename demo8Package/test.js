const { dateFormat, htmlEscape } = require('./itheima-tools')

// 格式化时间
const dateStr = dateFormat(new Date())
console.log('dateStr', dateStr)

// 转义 HTML
const htmlStr = '<h1 title="abc">这是H1标签<span>124&nbsp;</span></h1>'
const htmlRest = htmlEscape(htmlStr)
console.log('htmlRest', htmlRest)