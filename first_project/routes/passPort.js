const express = require("express");
const router = express.Router();
const Captcha = require("../utils/captcha/index");

router.get("/passport/image_code/:nowtime", (req,res) => {
    // :nowtime 在请求页面时，需要传递参数，传递自己的标识ID。
    // 这些参数叫做 pathinfo 参数。

    let captchaObj = new Captcha();
    let captcha = captchaObj.getCode();

    console.log(captcha.text); // 验证码文本
    console.log("pathinfo参数：" ,req.params.nowtime)
    // 保存验证文本到session中
    req.session["imgCode"] = captcha.text;
    console.log(req.session)
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(captcha.data);
});


router.get("/passport/register", (req,res) => {
    


});

module.exports = router;