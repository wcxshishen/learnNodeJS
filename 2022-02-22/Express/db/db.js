var mysql = require("mysql")
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"wcxshishen.qq123",
    database:"qianduan_test"
})//数据库连接配置

function query(sql,callback){
    // 参数一，sql语句
    // 参数二， 回调函数
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows)
            connection.release()
        })
    })
}//对数据库进行增删改查操作的基础


exports.query = query