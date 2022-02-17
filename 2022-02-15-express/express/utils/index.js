
// 钩子函数，工具函数
function checkLogin(req, res, next){
    console.log("执行路由接口之前先执行这句代码");

    // 校验是否登录，没有登录的话，就必须阻止向下进行
    // if(true){
    //     res.send("登录矫健没有通过");
    //     return;
    // }
    next();
}

module.exports = {
    checkLogin
}