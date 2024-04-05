const express = require('express')
const apiRouter = require('./demo1Router')

const cors = require('cors')

const app = express()

// 一定要在 路由之前去配置 cors 中间件，从而解决跨域的问题
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded())

// 导入路由模块
app.use('/api', apiRouter)

app.listen('8358', ()=>{
  console.log('express server running at http://127.0.0.1:8358')
})