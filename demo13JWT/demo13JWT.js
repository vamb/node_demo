const express = require('express')
// 1. 导入用于生成 JWT 字符串的包
const jwt = require('jsonwebtoken')
// 2. 导入用于将客户端发送过来的 JWT 字符串，解析还原成 JSON 对象的包
const { expressjwt: expressJWT } = require('express-jwt')
// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// 定义 secret 密钥，建议密钥命名为 secretKey，用来给 JWT 加密解密使用
const secretKey = 'this is secretKey'

// 注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 使用 app.use() 来注册中间件
// expressJWT({ secret: secretKey }) 就是用来解析 Token 的中间件
// .unless({ path: [/^\/api\//] }) 用来指定哪些接口不需要访问权限
app.use(expressJWT({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))


// 登录接口
app.post('/api/login', (req, res) => {
  const userinfo = req.body
  if(userinfo?.username !== 'admin' && userinfo?.password !== '000000') {
    res.send({
      status: 400,
      message: '登录失败',
    })
  }else{
    res.send({
      status: 200,
      message: '登录成功',
      /**
       * 调用 jwt.sign() 方法生成 JWT 字符串，三个参数分别是：用户信息对象，加密密匙，配置对象
       * 30s => 30秒
       * 30h => 30小时
       * 7d => 7天
       */
      token: jwt.sign({ username: userinfo?.username }, secretKey, { expiresIn: '30s' })
    })
  }
})

app.listen('8359', ()=>{
  console.log('jwt server running at http://127.0.0.1:8359')
})
