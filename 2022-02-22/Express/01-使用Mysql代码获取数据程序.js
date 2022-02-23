const express = require("express");

const db = require("./db/db")

const app = express();
const port = 3000;

app.get('/get_data', (req, res)=>{
    // 查询数据库，返回给浏览器
    db.query("select * from students where id = 10", (err, data)=>{

        if(err){
            console.log(err);
            res.send("查询数据库出错");
            return;
        }
        console.log(data);
        res.send(data); // 在页面中展示data
    })

    // res.send('hello word!')
})

app.listen(port,()=>{
    console.log(`express serve going at ${port}!`)
})