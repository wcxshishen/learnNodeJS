const express = require("express");
const router = express.Router();
const Captcha = require("../utils/captcha/index");
const handleDB = require("../db/handleDB")
// 验证码刷新接口
router.get("/passport/image_code/:nowtime", (req,res) => {
    // :nowtime 在请求页面时，需要传递参数，传递自己的标识ID。
    // 这些参数叫做 pathinfo 参数。
    let captchaObj = new Captcha();
    let captcha = captchaObj.getCode();
    console.log(captcha.text); // 验证码文本
    console.log("pathinfo参数：" ,req.params.nowtime)
    // 保存验证文本到session中
    req.session["imgCode"] = captcha.text;
    console.log(req.session.imgCode.toUpperCase())
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(captcha.data);
});

// 注册接口
router.post("/passport/register", (req,res) => {

    (async function(){
        // 1.获取post参数，判断是否为空，前后端都要去判断，严谨！
        let {username, image_code, password, agree} = req.body;
        if(!username || !password || !image_code || !agree){
            res.send({errmsg:"缺少必传参数。"});
            return;
        }
        // 2.输入验证码是否正确
        if(req.session.imgCode.toUpperCase() != image_code.toUpperCase()){
            res.send({errmsg:"验证码错误！"});
            return;
        }
        // 3.查询数据库，看看用户名是否存在
        let result = await handleDB(res, "info_user", "find", "数据库查询出错", `username = "${username}"`);
        console.log(result)
        // 4.如果已经存在，返回用户名已被注册，并return
        if(result.length>0){
            res.send({errmsg:"用户名已经存在。"});
            return;
        }
        // 5.不存在，注册成功，并在数据库增加一条记录
        let result2 = await handleDB(res, "info_user", "insert", "数据库插入出错", {
            username,
            password_hash: password,
            nick_name: username,
        });
        // result2.insertid

        // 6.保持用户登录状态
        req.session["user_id"] = result2.insertId;

        // 7.返回注册成功给前端
        res.send({errno:'0',errmsg:'注册成功'});
    })()
  



});

router.get("/passport/register", (req,res) => {
    


});

module.exports = router;