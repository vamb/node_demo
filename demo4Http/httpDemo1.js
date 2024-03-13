/**
 * 1. 导入 http 模块
 * 2. 创建 web 服务实例
 * 3. 为服务器实例绑定 request 事件，监听客户端请求
 * 4. 启动服务器
 */

const http = require('http')

const server = http.createServer()

server.on("request", (req, res) => {

  const str = `your request url is ${req?.url} and your request method is ${req?.method}`
  console.log('someone visit our website:', str)

  // 为了解决返回数据有中文乱码的问题
  res.setHeader("content-type", 'text/html; charset=utf-i-')

  // res.end() 方法的作用
  // 向客户端发送指定的内容，并结束这次请求的处理过程
  res.end(str)
})


server.listen(8356, ()=>{
  console.log('http server running at http:127.0.0.1:8356')
})
