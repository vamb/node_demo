const express = require('express')
const app = express()
const { useRouter } = require('./demo2Router')

// 定义一个最简单的中间件
const mw = function (req, res, next) {
  console.log('这是最简单的一个中间件函数')
  req.selfParam = {
    a: 30
  }
  // 把流转关系转交给下一个中间件或路由
  next()
}

const mw2 = function (req, res, next) {
  console.log('this is middleware 2')
  next()
}

const mw3 = function (req, res, next) {
  console.log('this is middleware 3')
  next()
}

const mw4 = function (req, res, next) {
  console.log('this is middleware 4')
  next()
}

// 将 mw 注册为全局生效的中间件
app.use(mw)
/**
 * 多个中间件，共享同一份 req 和 res，因此可以在上游的中间件，
 * 统一为 req 和 res 对象添加自定义的属性或方法，供给下游的中间件方法使用
 */
app.use((req, res, next)=> {
  console.log('这是中间件的简化写法')
  console.log('selfParam', req.selfParam)
  next()
})
app.use('/api', useRouter)

// 可以指定这个 api 调用某一个特定的 中间件
app.get('/api2/user2', mw2, (req, res)=> {
  res.send('pppp')
})

// 下面是多个局部 middleware 在同一个 api 中被使用的写法
app.get('/app2/md3', mw2, mw3, (req, res) => {
  res.send('this is md3 api response')
})
app.get('/app2/md4', [mw4, mw3], (req, res) => {
  res.send('this is md4 api response')
})

app.listen('8358', () => {
  console.log('express server running at http://127.0.0.1:8358')
})