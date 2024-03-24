const express = require('express')
const { useRouter } = require('./demo2Router')

// 创建 web 服务器
const app = express()



app.use('/static', express.static('./test')) // 可以加前缀
app.use(express.static('public'))
app.use(useRouter) // app.use 的作用：用来注册全局中间件



// 调用 listen 方法并指定端口号来启动服务
app.listen(8357, ()=>{
  console.log('express server running at http://127.0.0.1:8357')
})