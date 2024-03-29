const qs = require('querystring')

// 这是解析表单数据的中间件
function customerParser(req, res, next) {
  // 定义中间件具体的业务逻辑

  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''

  // 2. 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })

  // 3. 监听 req 的 end 事件，当请求体数据接收完毕后，会自动触发 req 的 end 事件
  // 因此可以在 req 的 end 事件中，拿到并处理完整的请求体数据。
  // next 方法要在 end 方法里面调用，否则，数据没有解析绑定完成就会流转到 api 那里，api 那儿就没办法获取数据
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log('str', str)
    // TODO 把字符串格式的请求体数据，解析成对象格式
    let strObj = JSON.parse(str)
    // console.log('strObj', strObj)
    const selfBody = qs.parse(str)
    console.log('selfBody', selfBody)
    req.selfBody = selfBody
    next()
  })
}

module.exports = customerParser
