const express = require("express");

const db = require("./db/nodejs-orm");

const app = express();
const port = 3000;

app.get("/get_data", (req, res)=>{

  
})

app.listen(port, ()=>{
    console.log(`express serve going at ${port}!`)
})