const express = require("express");
const router = express.Router();
const Captcha = require("../utils/captcha/index");

router.get("/passport/image_code", (req,res) => {
    let captchaObj = new Captcha();
    let captcha = captchaObj.getCode();

    console.log(captcha.text); // 验证码文本
    console.log(captcha.data); // 验证码图片信息

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(captcha.data);
});

module.exports = router;