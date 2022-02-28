function csrfProtect(req,res,next){
     // 转账前验证token是否相同
    // 获取cookie中的token值和请求头中X-CSRFToken的值
    if(req.method == "POST"){
        console.log(req.cookies["srf_token"]);
        console.log(req.headers['x-csrftoken']);
        if(req.cookies["srf_token"] != req.headers['x-csrftoken']){
            console.log("验证不同过");
            return;
        }
    } else {
        // 生成csrf_token 设置保存在cookie中
        let csrf_token = getRandomString(48);
        res.cookie("srf_token",csrf_token);
        console.log('设置srf')
    }
    next();
}

function getRandomString(n){
    var str="";
    while(str.length<n){
      str+=Math.random().toString(36).substr(2);
    }
    return str.substr(str.length-n)
}

module.exports = {
    csrfProtect
}