const express = require("express");

const db = require("./db/nodejs-orm");

const app = express();
const port = 3000;

app.get("/get_data", (req, res)=>{

    // 使用orm查询
    // 创建模型，需要操作哪一个数据表
    let Students =  db.model("students");
    // Students.find(["name", "age"],(error, results, fields)=>{
    //     res.send(results);
    //     console.log(fields);
    // })
   

    // Students.find("age > 18",(error, results, fields)=>{
    //     res.send(results);
    //     console.log(fields);
    // })

    Students.limit({
        where:"age > 18",
        number:1,
        count:1,
    },(error, results, fields)=>{
        res.send(results);
        console.log(fields);
    })
   
    // res.send("orm的使用")
})

app.listen(port, ()=>{
    console.log(`express serve going at ${port}!`)
})