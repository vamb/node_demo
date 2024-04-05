// 1. 导入 mysql 模块
const mysql = require('mysql')

// 2. 建立 mysql 数据库的连接
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'self',
  password: '123456',
  database: 'world'
})

// 查询
// db.query('select * from users', (err, results)=>{
//   if(err) return console.log('err', err.message)
//   console.log('users results', results)
// })

// 添加
// const insertSql = 'insert into users (username, age) values(?,?)'
// const userData = { username: 'testUser3', age: 30 }
// db.query(insertSql, [userData.username, userData.age], (err, results)=>{
//   if(err) return console.log('err', err.message)
//   console.log('insertSql results', results?.affectedRows)
//   if(results?.affectedRows === 1) {
//     console.log('插入成功', results?.insertId)
//   }
// })

// 添加的简化写法
// const insertSql = 'insert into users set ?'
// const userData2 = { username: 'testUser4', age: 40 }
// db.query(insertSql, userData2, (err, results)=>{
//   if(err) return console.log('err', err.message)
//   console.log('insertSql results', results?.affectedRows)
//   if(results?.affectedRows === 1) {
//     console.log('插入成功', results?.insertId)
//   }
// })

// 更新操作
// const updateUser = { id: 1, username: 'testName1-2', age: 15 }
// const updateSql = "update users set username=?, age=? where id=?"
// db.query(updateSql, [updateUser?.username, updateUser.age, updateUser.id], (err, results)=>{
//   if(err) return console.log('err', err.message)
//   console.log('updateSql results', results?.affectedRows, results)
//   if(results?.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })

// 简化的更新操作
// const updateUser2 = { id: 2, username: 'testName2-2', age: 25 }
// const updateSql2 = "update users set ? where id=?"
// db.query(updateSql2, [updateUser2, updateUser2.id], (err, results)=>{
//   if(err) return console.log('err', err.message)
//   console.log('updateSql2 results', results?.affectedRows, results)
//   if(results?.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })

// 删除操作
// 如果 sql 语句有多个参数，需要用数据按照顺序填充参数，如果只有一个参数，可以直接写
// const deleteSql = "delete from users where id=?"
// db.query(deleteSql, [3, 4], (err, results)=>{
//   if(err) return console.log('err', err.message)
//   console.log('deleteSql results', results?.affectedRows, results)
//   if(results?.affectedRows === 1) {
//     console.log('删除成功')
//   }
// })


// const queryDB = sql => {
//   db.query(sql, (err, results)=>{
//     if(err) return console.log('err', err.message)
//     console.log('queryDB results', results)
//     return results
//   })
// }
//
// const insertDB = sql => {
//   db.
// }

// module.exports = { queryDB }