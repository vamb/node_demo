const path = require('path')

/**
 * path.join 会将路劲拼接起来
 * 输出 => \a\b\c
 */
console.log(path.join('/a','/b', '../', '/c'))

const fPath = path.join(__dirname, '/a/b/c/index.html')

console.log('fPath', fPath)

/**
 * 可以把路径中的文件名提取出来
 * full Filename index.html
 */
console.log('full filename', path.basename(fPath))

/**
 * 可以文件名的指定文件后缀给去掉
 * just filename index （大小写敏感）
 */
console.log('just filename', path.basename(fPath, '.html'))

/**
 * 获取路径里面的文件名的文件推展名
 */
console.log("filename's ext name", path.extname(fPath) )
