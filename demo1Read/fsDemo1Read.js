const fs = require('fs')

/**
 * 1. path: 文件路径
 * 2. options: 文件格式
 * 3. callback方法: 读取文件后的回调函数
 */
fs.readFile('./test1.txt', 'utf8', function(err, dataStr){
	// 如果读取成功，err 为 null，否则是一个 err 对象
	if(err) {
		return console.log('文件读取失败：', err)
	}
	// 如果读取失败，dataStr 为 undefined，否则是文件的内容
	console.log(dataStr)
})
