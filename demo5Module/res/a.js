const username = '张三'

console.log('outer 大家好，我是', username)

function sayHello() {
  console.log('function 大家好，我是', username)
}

/**
 * 永远以 module.exports 指向的对象为最终导出对象
 * 如果在 line12 之后 再给 module.exports 赋值一个新对象，将会把原来的内容覆盖
 */
module.exports = {
  username, sayHello
}

/**
 * 虽然 exports 和 module.exports 最开始都是指向同一个对象
 * 但是一旦赋值 后，那他们就不再 指向 相同的对象了
 */
exports = {
  nickname: username,
  sayHi: sayHello
}

/**
 * 因为 exports 已经和 module.exports 指向不同的对象
 * 所以 导出内容为 { username: '张三', sayHello: [Function: sayHello], age: 20 }
 */
module.exports.age = 20
