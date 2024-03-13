const username = '张三'

console.log('outer 大家好，我是', username)

function sayHello() {
  console.log('function 大家好，我是', username)
}

/**
 * module.exports 永远以 指向的对象为准
 * 如果在 line12 之后 再给 module.exports 赋值一个新对象，将会把原来的内容覆盖
 */
module.exports = {
  username, sayHello
}

exports = {
  nickname: username,
  sayHi: sayHello
}

/**
 * module.exports 和 exports 指向的是同一个对象
 */
module.exports.age = 20
