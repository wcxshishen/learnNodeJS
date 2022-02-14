// process对象，做一些命令行工具时才用到
console.log(process.argv); // 获取到执行命令行所有参数，作为元素放在这个数组中

// 在cmd命令行中，才能看到！！！

// 求两个参数拼接的结果,拼接成字符串
console.log(process.argv[2]+process.argv[3]);

// 还可以打印系统位数
console.log(process.arch); //本电脑为x64