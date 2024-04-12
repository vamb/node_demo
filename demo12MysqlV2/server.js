const express = require('express')
const serverHandler = require('./index')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use('/api', serverHandler)

app.listen('8359', ()=>{
  console.log('mysqlV2 server running at http://127.0.0.1:8359')
})
