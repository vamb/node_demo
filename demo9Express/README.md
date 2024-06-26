## 什么是 Express
#### express 是基于 Node.js 平台，快速，开放，极简的 web 框架
#### express 的作用和 Node.js 内置的 http 模块类似，是专门用来创建 Web 服务器的
#### express 的本质，就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方式

### 使用 Express 可以方便的快速的创建 web 网站 或者 API 接口服务器
=================================== <br/>
### 可以创建一个静态资源服务器，可以将 public 目录下的 图片，css 文件，JavaScript 文件对外开放
```js
app.use(express.static('public'))
```


### 中间件一般分成 5 类
1. 应用级别的中间件
```js
    app.get('/url', md1, (req, res)=> {}) // 局部的
    app.post('/url', md2, (req, res) => {}) // 局部的
    app.use((req, res, next) {next()}) // 全局生效
```
#### 绑定到 app 实例上的中间件，叫做应用级别的中间件
### 2. 路由级别的中间件
```js
    const router = express.Router()
    router.use(function(res, res, next) { next() } } // 所有这个 router 定义的 api 都会绑定这个 中间件
    app.use('/testRouter', router)
```
###3. 错误级别的中间件
```js
    app.use((err, req, res, next) => {
        console.log('error: ', err?.message)
        next()
    })
```
####!important 错误级别的中间件必须注册在所有 api 请求之后，否则会报错
   
###4. express 内置的中间件

```js
express.static('public') // 快速托管静态资源的内置中间件，例如：HTML 文件、图片、CSS 样式（无兼容性）
express.json() // 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可以使用）
express.urlencoded() // 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可以使用）
```
```js
/**
 * 这些中间件一定要在所有 api 请求定义之前定义好，不然不会被执行
 */

// 配置解析 application/json 格式数据的内置中间件
app.use(express.json())

// 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({ extended: false }))
```
###5. 第三方的中间件
