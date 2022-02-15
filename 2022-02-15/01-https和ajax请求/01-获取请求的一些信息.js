
const http = require('http')
// url 模块解析参数
const url = require('url')
const port = 8081;


const server = http.createServer((requset, response)=>{
    // 想要获取获取请求对象相关的一些信息

    // 获取请求路径
    // 请求一次就执行一次这里的代码
    let reqUrl = requset.url; // 获取请求路径（请求报文中第一行第二个信息）
    // 如果请求的是http://localhost:8081/ 那么打印出来就是 / 

    // 请求方式
    let reqMethod = requset.method;

    // 获取请求参数
    let obj = url.parse(reqUrl, true)
    console.log(obj.query.wcx);
    // console.log(reqUrl, reqMethod);

    response.write('wcxshishen6666');
    response.end();
})


server.listen(port,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(`webserver is listerning at port ${port}!`)
})