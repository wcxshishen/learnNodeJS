const express = require("express");
const router = express.Router();
const handleDB = require("../db/handleDB");

router.get('/', (req,res) => {
    // 测试设置cookie
    res.cookie("name", "node.js");
    req.session["age"] = 11;
    res.render("news/index")
})

router.get("/get_cookie", (req,res) => {
    res.send(req.cookies["name"]);
})

router.get("/get_session", (req,res) => {
    res.send("wcx"+req.session["age"]);
})


router.get("/get_data", (req,res) => {
    async function(){

    }
})

module.exports = router;