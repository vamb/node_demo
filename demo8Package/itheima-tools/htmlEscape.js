// 定义转移 HTML 字符的函数
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&|'/g, (match) => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
      case "'":
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}

// 定义字符还原回 HTML 的函数
function unEscapeHTML(formatStr) {
  return formatStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}

module.exports = {
  htmlEscape, unEscapeHTML
}