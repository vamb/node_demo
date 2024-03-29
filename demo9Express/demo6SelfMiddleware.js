const express = require('express')
const app = express()
const customerParser = require('./demo6CustomerParser')
const qs = require('querystring')

/**
 * 请求数据
  {
    "name": "testName",
    "bookList": [
      "book1", "book2", "book3"
    ]
  }
 */


app.use(customerParser)

app.post('/user', (req, res)=>{
  console.log('req.selfBody', req.selfBody)
  res.send('demo6 self MD: OK')
})

app.listen('8358', () => {
  console.log('express server running at http://127.0.0.1:8358')
})
