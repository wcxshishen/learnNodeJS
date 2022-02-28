const express = require('express');
const router = express.Router();
const app = express();
const path = require("path");
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const Utils = require('./utils/index')

app.use(cookieSession({
    name:"my_session",  //name为session名，自己起一个字符串就行
    keys:["$^%%&^&%$RT%&TYGSGSFRR554785432$#@$$#%$@#%"],  // 内部加密需要的keys， keys为随机字符串
    maxAge: 1000 * 60 * 60 * 24   // 过期时间
}))
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

router.all('/', (req, res) => {
    if(req.method == "GET"){
        res.render('temp_login')
    }else if(req.method == "POST"){
        let {username, password} = req.body;
        if(username=="wangchaoxing"&&password=="123456"){
            // 状态保持，在session中保存登录用户名代表用户登录
            req.session["username"] = username;
            // 跳转到转账页面
            res.redirect("/transfer");
        }else{
            console.log("密码错误");
            res.json({ code: 10001, message: "密码错误"})
        }
    }
});

router.all('/transfer', (req, res) => {
    // 看看能不能获取到这个username，
    let username = req.session["username"];
    if(!username){ //获取不到表示没有登录, 要跳转到首页
        res.redirect("/");
    }
    if(req.method == "GET"){
        res.render('temp_transfer')
    }else if(req.method == "POST"){
        let {to_account, money} = req.body;
        console.log(to_account, money);
        //执行转账功能： ....此处省略
        console.log("假装执行转账操作，将当前登录用户的钱转账到指定账户");
        console.log(`已经完成转账${money}元到账户${to_account}`);
        res.json({to_account,money});
    }
});

app.use(Utils.csrfProtect,router);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});