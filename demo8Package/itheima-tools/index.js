function dateFormat(dateStr) {
  const dt = new Date(dateStr)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}-${mm}-${ss}`
}

function padZero(n) {
  return n > 9? n: '0' + n
}

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

module.exports = {
  dateFormat, htmlEscape
}
