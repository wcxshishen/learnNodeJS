const express = require("express");
const handleDB = require("./db/handleDB");

const app = express();
const port = 3000;

app.get("/get_data", (req, res)=>{

    (async function(){

        // 要操作哪一个表
        // 要怎么操作，这些方法名

        let result = await handleDB(res,"students","sql","select name,age from students where age > 50");
        res.send(result);
    })()
})

app.listen(port, ()=>{
    console.log(`express serve going at ${port}!`)
})