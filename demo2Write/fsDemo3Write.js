const fs = require('fs')
const path = require('path')

/**
 * path.join 会将路劲拼接起来
 * 输出 => \a\b\c
 */
console.log(path.join('/a','/b', '../', '/c'))

/**
 * __dirname: 表示当前文件所在的路径
 */
fs.readFile(__dirname + '/res/record.txt','utf8',function (err, dataStr) {
  if (err) {
    return console.log('文件读取失败：', err)
  }
  const arrTemp = dataStr?.trim()?.split(' ')
  const dataArr = []
  if(Array.isArray(arrTemp) && arrTemp.length>0) {
    arrTemp.map(item=>{
      const obj = item.split('=')
      const newObj = {
        name: obj?.[0],
        record: obj?.[1]
      }
      dataArr.push(newObj)
    })
  }
  console.log(dataArr)
  fs.writeFile(__dirname + '/output/out.txt', JSON.stringify(dataArr), 'utf8', function (err) {
    if(err) {
      return console.log('文件写入失败', err)
    }else{
      console.log('文件写入成功')
    }
  })
})
