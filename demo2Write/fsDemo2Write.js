const fs = require('fs')

/**
 * 1. path: 表示文件存放的路径
 * 2. data: 表示要写入文件的内容
 * 3. options: 表示文件的格式
 * 4. callback: 表示文件的回调函数
 */
fs.writeFile('./test2.txt', 'hello world write', 'utf8', function(err) {
  if(err) {
    return console.log('文件写入失败', err)
  }else{
    console.log('文件写入成功')
  }
})
