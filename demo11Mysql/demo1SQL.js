const express = require('express')
const { router} = require('./demo11Router')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.urlencoded())

app.use('/api', router)

app.listen('8359', ()=>{
  console.log('express server running at http://127.0.0.1:8359')
})