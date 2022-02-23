const express = require("express");

const db = require("./db/nodejs-orm");

const app = express();
const port = 3000;

app.get("/get_data", (req, res)=>{

    // 使用orm插入数据
    // 创建模型，需要操作哪一个数据表
    const Students = db.model("students");
    // Students.insert({name:"赵云", age:20}, (err, data) => {
    //     console.log(data);
    //     res.send(data);
    // })
    Students.insert([{name:"张飞", age:21},{name:"刘备", age:22},{name:"关羽", age:23}], (data) => {
        console.log(data);
        res.send("wcx");
    })
})

app.listen(port, ()=>{
    console.log(`express serve going at ${port}!`)
})