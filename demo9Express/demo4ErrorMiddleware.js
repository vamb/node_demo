const express = require('express')
const app = express()

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