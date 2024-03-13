const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res)=>{
  res.setHeader("content-type", 'text/html; charset=utf-8')

  // if(req?.url?.endsWith('about')) {
  //   const aboutContent = '<div>这是 about 的页面内容</div>'
  //   res.end(aboutContent)
  // }else{
  //   res.end('<div>404 page</div>')
  // }

  const url = req?.url

  const fPath = path.join(__dirname, url, `${req?.url}.html`)

  console.log('fPath', fPath)

  fs.readFile(fPath, 'utf8', (err, dataStr) => {
    if(err) res.end('<div>404 page</div>')
    console.log('dataStr', dataStr)
    res.end(dataStr)
  })
})

server.listen(8356,()=>{
  console.log('http server running at http:127.0.0.1:8356')
})
