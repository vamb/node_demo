const express = require('express')
const {
  queryAllUser,
  newUser, simpleNewUser,
  updateUser, simpleUpdateUser,
  deleteUser
} = require('./mysqlOpt')

const router = express.Router()

router.get('/allUser', async (req, res)=>{
  const results = await queryAllUser()
  res.send({
    status: 0,
    meg: 'GET请求成功',
    data: results
  })
})

router.post('/newUser', async (req, res)=>{
  const user = req.body
  // console.log('router newUser user', user)
  const results = await newUser(user)
  res.send({
    status: 0,
    meg: 'POST请求成功',
    data: results
  })
})

router.post('/simpleNewUser', (req, res)=>{
  const user = req.body
  const results = simpleNewUser(user)
  res.send({
    status: 0,
    meg: 'POST请求成功',
    data: results
  })
})

router.put('/updateUser', (req, res)=>{
  const user = req.body
  const results = updateUser(user)
  res.send({
    status: 0,
    meg: 'PUT请求成功',
    data: results
  })
})

router.put('/simpleUpdateUser', (req, res)=>{
  const user = req.body
  const results = simpleUpdateUser(user)
  res.send({
    status: 0,
    meg: 'PUT请求成功',
    data: results
  })
})

router.delete('/deleteUser', (req, res)=>{
  const idx = req.body
  console.log('delete idx', idx)
  const results = deleteUser(JSON.parse(idx?.['idx']))
  res.send({
    status: 0,
    meg: 'DELETE请求成功',
    data: results
  })
})

module.exports = { router }
