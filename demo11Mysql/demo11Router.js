const express = require('express')
const { queryDB } = require('./mysqlOpt')

const router = express.Router()

router.get('/user', (req, res)=>{
  const sql = "select * from users"
  const results = queryDB(sql)
  console.log('users results', results)

  res.send(results)
})

module.exports = { router }