```js
/**
* Access-Control-Allow-Origin (允许来自哪儿来访问本地服务)
*
* res.setHeader('Access-Control-Allow-Origin', '*') // 允许来自任何域的请求
*/
```
```js
/**
* Access-Control-Allow-Header
*
* 默认情况下，cors 仅支持9种响应请求头
* Accept，Accept-Language, Content-Language, DPR, Downlink, Save-Data,
* Viewport-Width, Width,
* Content-Type (值仅限 text/plain, multipart/form-data, application/x-www-form-urlencoded 三者之一)
*
* 如果客户端向服务器发送了额外的请求头信息，需要在服务端通过 Access-Control-Allow-Header 对额外的请求头进行申明，否则无效
*/
```

```js
/**
* Access-Control-Allow-Methods
*
* 默认情况下，Cors 仅仅支持客户端发起 GET，POST，HEAD请求
* res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
* res.setHeader('Access-Control-Allow-Methods', '*') // 支持所有请求
  */
```

### 预检请求 
##### 满足以下任何一个条件的，就属于预检请求
#### 1.请求方式为 GET，POST，HEAD 之外的请求 Method 类型
#### 2.请求头中包含自定义头部字段
#### 3.向服务器发送了 application/json 格式的数据

### 预检请求会干什么
#### 在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预见，以获知服务器是否允许该实际请求，服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据