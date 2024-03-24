const express = require('express')
const { useRouter } = require('./demo2Router')

// 创建 web 服务器
const app = express()



app.use('/static', express.static('./test')) // 可以加前缀
app.use(express.static('public'))

/**
 * param1 添加统一的路由前缀
 * param2 集中路由
 *
 * app.use 的作用：用来注册全局中间件
 * 中间件：对请求进行预处理
 */
app.use('/api', useRouter)

/**
 * 中间件的本质就是一个 function 函数
 * url: 请求地址
 * req：请求参数
 * res：用来返回操作的对象
 * next：回调函数，如果有表示这个是一个中间件函数，否则就是 api 响应函数
 */
// app.get(url, function(req, res, next) {
//   next()
// })

// 调用 listen 方法并指定端口号来启动服务
app.listen(8357, ()=>{
  console.log('express server running at http://127.0.0.1:8357')
})