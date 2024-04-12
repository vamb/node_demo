const handleUserRoute = require('./router/users')
const queryString = require("querystring")


// 处理 POST 数据
const handlePostData = req => {
  return new Promise((resolve, reject)=>{
    if("post" !== req.method?.toLowerCase()) {
      resolve({})
      return
    }

    if(req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }

    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })

    req.on('end', () => {
      if(!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
}

const serverHandler = (req, res) => {
  req?.setHeader('Content-type', 'application/json')

  const url = req.url

  // 获取 path
  req.path = url.split('?')[0]

  // 解析 query
  req.query = queryString.parse(url.split('?')[1])

  // 处理 POST 数据
  handlePostData(req).then(postData => {
    req.restBody = postData

    const userData = handleUserRoute(req, res)

    if(userData) {
      res.send(JSON.parse(userData))
      return
    }

    // 未匹配到任何路由
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('404 Not Found')
    res.end()
  })
}

module.exports = serverHandler
