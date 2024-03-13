#### nodejs 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖

#### CommonJS 规定:
###### 1. 每个模块内部，module 变量代表当前模块
###### 2. module 变量是一个对象，其 exports 属性 -》 module.exports 是对外的接口
###### 3. 加载某个模块，其实是加载该模块的 module.exports 属性。require() 方法用于加载外部模块
