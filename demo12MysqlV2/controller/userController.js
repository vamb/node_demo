const mysql = require('mysql')
const { MYSQL_CONFIG } = require('../config/db')
const express = require('express')

const router = express.Router()

// 创建连接对象
const connection = mysql.createConnection(MYSQL_CONFIG)

// 开始连接
connection.connect()

const queryAllUser = () => {
  return new Promise((resolve, reject)=>{
    // 查询
    connection.query('select * from users', (err, results)=>{
      if(err) return console.log('err', err.message)
      // if(err) reject(err?.message)
      resolve(results)
    })
  })
}

const newUser = (user) => {
  return new Promise((resolve, reject)=>{
    // 添加
    const insertSql = 'insert into users (username, age) values(?,?)'
    // const userData = { username: 'testUser3', age: 30 }
    connection.query(insertSql, [user?.username, user?.age], (err, results)=>{
      if(err) return console.log('err', err.message)
      // if(err) reject(err?.message)
      console.log('insertSql results', results?.affectedRows)
      if(results?.affectedRows === 1) {
        console.log('插入成功', results?.insertId)
        resolve(results?.insertId)
      }
    })
  })
}

const simpleNewUser = user => {
  return new Promise((resolve, reject)=>{
    // 添加的简化写法
    const insertSql = 'insert into users set ?'
    // const userData2 = { username: 'testUser4', age: 40 }
    connection.query(insertSql, user, (err, results)=>{
      if(err) return console.log('err', err.message)
      // if(err) reject(err?.message)
      console.log('insertSql results', results?.affectedRows)
      if(results?.affectedRows === 1) {
        console.log('插入成功', results?.insertId)
        resolve()
      }
    })
  })
}

const updateUser = user => {
  return new Promise((resolve, reject) => {
    // 更新操作
    // const updateUser = { id: 1, username: 'testName1-2', age: 15 }
    const updateSql = "update users set username=?, age=? where id=?"
    connection.query(updateSql, [user?.username, user.age, user.id], (err, results)=>{
      if(err) return console.log('err', err.message)
      // if(err) reject(err?.message)
      console.log('updateSql results', results?.affectedRows, results)
      if(results?.affectedRows === 1) {
        console.log('更新成功')
        resolve()
      }
    })
  })
}

const simpleUpdateUser = user => {
  return new Promise((resolve, reject)=>{
    // 简化的更新操作
    // const updateUser2 = { id: 2, username: 'testName2-2', age: 25 }
    const updateSql2 = "update users set ? where id=?"
    connection.query(updateSql2, [user, user?.id], (err, results)=>{
      if(err) return console.log('err', err.message)
      // if(err) reject(err?.message)
      console.log('updateSql2 results', results?.affectedRows, results)
      if(results?.affectedRows === 1) {
        console.log('更新成功')
        resolve()
      }
    })
  })
}

const deleteUser = (ids) => {
  return new Promise((resolve, reject) => {
    // 删除操作
    // 如果 sql 语句有多个参数，需要用数据按照顺序填充参数，如果只有一个参数，可以直接写
    const deleteSql = "delete from users where id=?"
    connection.query(deleteSql,
      // [3, 4]
      ids, (err, results)=>{
        if(err) return console.log('err', err.message)
        // if(err) reject(err?.message)
        console.log('deleteSql results', results?.affectedRows, results)
        if(results?.affectedRows === 1) {
          resolve()
          console.log('删除成功')
        }
      })
  })
}

module.exports = {
  queryAllUser,
  newUser,
  simpleNewUser,
  updateUser,
  simpleUpdateUser,
  deleteUser
}
