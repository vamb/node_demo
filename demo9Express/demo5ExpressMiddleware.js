const express = require('express')
const app = express()
// 这是第三方的, express.urlencoded 就是基于这个来封装的
const parser = require('body-parser')

// 这里的中间件配置一定要写在 API 请求之前，否之不会起效
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(parser.urlencoded({ extended: false }))

app.post('/book', (req, res)=>{
  // body 里面要选择 x-www-form-urlencoded 并且将参数填入键值对
  console.log('book req.body', req.body)
  res.send('book ok')
})

app.post('/user', (req, res)=>{
  // 这里是 express.urlencoded() 方法的使用demo
  /**
   * post 的请求参数
    {
        "name": "testName",
        "bookList": [
            "book1", "book2", "book3"
        ]
    }
   */
  console.log('user req.body', req.body)
  res.send('user ok')
})

app.listen('8358', ()=>{
  console.log('express server running at http://127.0.0.1:8358')
})
