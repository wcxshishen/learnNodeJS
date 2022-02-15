// IP地址和端口号
// ip地址标识网络上的不同的设备。
// 端口号是标识同一台设备上不同的网络进程（可联网，运行起来的程序）。

// 服务器（远程主机，配置相当高）
// 通过域名找到对应的服务器

// 1.引入http模块
const http = require('http')

// 2.配置服务器程序的端口号
const port = 8081;

// 3.创建服务器对象
const server = http.createServer((requset, response)=>{
    // requset请求对象 response响应对象
    

    // 这里代码什么时候执行？
    // 没接收到一次请求就来执行一次这里的代码！！！！！
    response.write('wcxshishen');
    response.end('hello node.js http'); // 标识响应工作已经结束，end方法后不要去处理其余操作，放在最后。

    // write 和 end 都可以传入参数往浏览器书写一定内容。
    // 
})

// 4.调用服务器对象的监听方法，让服务器监听浏览器请求
// 监听端口
server.listen(port,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(`webserver is listerning at port ${port}!`)
})