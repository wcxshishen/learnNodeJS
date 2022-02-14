// 导出方式优先级：modules.exports > exports = this 

// 方式一
// exports.a = 10;


// 方式二
// module.exports = {
//     a: 10
// }
// exports = module.exports; // 若用module.exports导出，exports则会跟丢。

// 方式三
// this.b = 30;


console.log(exports); // {}
console.log(module.exports); // {}
console.log(exports === module.exports); // true
console.log("-----------------------------");
console.log(exports === this); 
console.log(this);

// exports是module.exports的引用，文件中才有exports，在交互模式下并没有exports，真正有意义的是module.exports。
// 在js文件中，this是指向这个模块的（这个js文件）,而exports默认是是指向module.exports。若不引用第二中方式进行导出，可以理解 this 指向 module.exports
// 在交互模式下，this是指向global全局对象。 