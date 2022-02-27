const express = require("express");

const db = require("./db/nodejs-orm");

const app = express();
const port = 3000;

app.get("/get_data", (req, res)=>{
    let Students = db.model("students");
    let result
    (async function(){
        try{
            result = await new Promise((reslove,reject) => {
                Students.find("age > 50",(err, data) => {
                    if(err){
                        reject(err);
                        return;
                    }
                    reslove(data);
                })
            })
        }catch(err){
            console.log(err);
            res.send({errMsg:"数据库查询出错"});
            return;
        }
        res.send(result);
    })();

  
})

app.listen(port, ()=>{
    console.log(`express serve going at ${port}!`)
})