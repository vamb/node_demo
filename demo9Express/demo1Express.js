const express = require('express')
// 创建 web 服务器
const app = express()

app.get('/user/:id', (req, res)=>{
  console.log('params query', req.params, req.query)
  res.send(JSON.stringify(req.params) + ' ' + JSON.stringify(req.query))
})

app.get('/user', (req, res)=>{
  res.send({name: 'testName', age: '25', gender: 'male'})
})


app.post('/user', (req, res)=>{
  console.log('query', req?.query)
  res.send('请求成功')
})

app.use('/static', express.static('./test')) // 可以加前缀
app.use(express.static('public'))



// 调用 listen 方法并指定端口号来启动服务
app.listen(8356, ()=>{
  console.log('express server running at http://127.0.0.1:8356')
})