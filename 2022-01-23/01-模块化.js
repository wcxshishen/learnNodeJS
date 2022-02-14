// CommonJS的Modules规范：node.js
// es6模块化规范
// 导入
const m1 = require("./modules/m1.js") // 导入数据
 
console.log(m1)

console.log(m1.summer(10,20))

// 创建对象
const obj = new m1.Animal();
console.log(obj.age)
