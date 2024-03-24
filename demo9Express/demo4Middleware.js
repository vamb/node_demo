const express = require('express')
const app = express()

/**
 * 中间件一般分成 5 类
 * 1. 应用级别的中间件
 *    app.get('/url', md1, (req, res)=> {}) // 局部的
 *    app.post('/url', md2, (req, res) => {}) // 局部的
 *    app.use((req, res, next) {next()}) // 全局生效
 *    绑定到 app 实例上的中间件，叫做应用级别的中间件
 *
 * 2. 路由级别的中间件
 *    const router = express.Router()
 *    router.use(function(res, res, next) { next() } } // 所有这个 router 定义的 api 都会绑定这个 中间件
 *    app.use('/testRouter', router)
 *
 * 3. 错误级别的中间件
 *    app.use((err, req, res, next) => {
 *      console.log('error: ', err?.message)
 *      next()
 *    })
 * 4. express 内置的中间件
 * 5. 第三方的中间件
 */

app.get('/', (req, res) => {
  throw new Error('手动出发报错')
  res.send('Home page')
})

app.use((err, req, res, next) => {
  console.log('错误界别中间件:', err?.message)
  next()
})

app.listen('8358', () => {
  console.log('express server running at http://127.0.0.1:8358')
})