const express = require("express");

const db = require("./db/nodejs-orm");

const app = express();
const port = 3000;

app.get("/get_data", (req, res)=>{

    // 删除单条数据
    let Students = db.model("students");

    // 删除单条记录
    Students.delete("id =59",(err, result) => {
        console.log(result);
        res.send(result);
    })

    // 删除表格
    // Students.delete((err, result) => {
    //     console.log(result);
    //     res.send(result);
    // })
})

app.listen(port, ()=>{
    console.log(`express serve going at ${port}!`)
})