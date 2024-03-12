/**
 * 1.创建两个正则表达式，分别用来匹配 <style> 和 <script> 标签
 * 2. 使用 fs 模块，读取需要被处理的 HTML 文件
 * 3. 自定义 resolveCSS 方法，来写入 index.css 样式
 * 4. 自定义 resolveJS 方法，来写入 index.js 脚本文件
 * 5. 自定义 resolveHTML 方法，来写入 index.html 文件
 */

const fs = require('fs')

const path = require('path')

/**
 * 用来匹配 <style></style> 标签的正则
 * 其中 \s 表示空白字符; \S 表示非空白字符; * 表示匹配任意次
 */
const regStyle = /<style>[\s\S]*<\/style>/

/**
 * 用来匹配 <script></script> 标签的正则
 */
const regScript = /<script>[\s\S]*<\/script>/

// 处理 css 样式
const resolveCSS = (htmlStr, regStyle) => {
  const r1 = regStyle.exec(htmlStr)
  console.log('r1', r1)
  const newCSS = r1?.[0]?.replace('<style>', '')?.replace("</style>", "")

  fs.writeFile(path.join(__dirname, './output/index.css'), newCSS, err=> {
    if(err) return console.log('写入 css 样式失败：', err?.message)
    console.log('写入 CSS 样式成功！')
  })
}

const resolveJS = (htmlStr, regScript) => {
  const r2 = regScript.exec(htmlStr)
  const newJS = r2?.[0]?.replace('<script>', '')?.replace("</script>", "")
  fs.writeFile(path.join(__dirname, '/output/index.js'), newJS, err => {
    if(err) return console.log('写入 JS 脚本失败：', err?.message)
    console.log('写入 JS 脚本成功！')
  })
}

const resolveHTML = (htmlStr, regStyle, regScript) => {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, './output/index.html'), newHTML, err => {
    if(err) return console.log('写入 HTML 文件失败：', err?.message)
    console.log('写入 HTML 文件成功！')
  })
}

fs.readFile(path.join(__dirname, '/res/target.html'), 'utf8', (err, dataStr) => {
  if(err) {
    return console.log('读取文件失败', err, err.message)
  }
  resolveCSS(dataStr, regStyle)
  resolveJS(dataStr, regScript)
  resolveHTML(dataStr, regStyle, regScript)
})
