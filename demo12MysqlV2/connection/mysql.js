const mysql = require('mysql')
const { MYSQL_CONFIG } = require('../config/db')

// 创建连接对象
const connection = mysql.createConnection(MYSQL_CONFIG)

// 开始连接
connection.connect()

execSQL = (sql, param) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, param, (err, result) => {
      if(err) {
        reject(err)
      }else {
        resolve(result)
      }
    })
  })
}

module.exports = {
  execSQL
}
