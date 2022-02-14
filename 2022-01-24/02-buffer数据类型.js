// 在 Node.js 中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
// Buffer.from() 第一个参数必须是string、Buffer、ArrayBuffer、Array或类似数组的Object类型之一。
let buf1 = Buffer.from([99,100,101]);
console.log(buf1); // <Buffer 63 64 65> 这种方式我们并看不懂
console.log(buf1.toString());

let buf2 = Buffer.from('wcxshishen');
console.log(buf2.toString());

let buf3 = Buffer.from([{a:10}]);
console.log(buf3);
console.log(buf3.toString());

// 当你看到 <Buffer 。。。。。。。。。。。。> 时这是buffer对象，我们秩序用tostring方法进行转换。


// 仅作了解
let buf4 = Buffer.alloc(10); // 创建一个可以存放10哥字符的buffer对象。
buf4.write("wcxshishen"); // 向buffer对象里写入信息，（传2进制再转为16进制存起来）。
console.log(buf4);
console.log(buf4.toString())