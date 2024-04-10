### JWT 的组成部分
#### JWT 通常由三部分组成，分别是 Header （头部），Payload（有效荷载），Signature（签名）。
#### 三者之间通常使用"."分隔.
#### Payload 部分是经过加密后的用户的真正信息
#### Header 和 Signature 是安全性相关的部分，只是为了保证 token 的安全性


#### jsonwebtoken 用于生成 JWT 字符串
#### express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
