const express = require('express')
const router = express.Router() // 创建路由

router.get('/user/:id', (req, res)=>{
  console.log('params query', req.params, req.query)
  res.send(JSON.stringify(req.params) + ' ' + JSON.stringify(req.query))
})

router.get('/user', (req, res)=>{
  res.send({name: 'testName', age: '25', gender: 'male'})
})


router.post('/user', (req, res)=>{
  console.log('query', req?.query)
  res.send('请求成功')
})

module.exports = {
  useRouter: router
}