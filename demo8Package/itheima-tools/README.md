## format 时间
```js
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
```

## 转义 HTML
```js
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
```

## 还原 HTML
```js
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
```