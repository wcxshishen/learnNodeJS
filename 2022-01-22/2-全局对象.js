// 1. node.js 里没有window对象，又global对象，之前所使用的console.log,steTimeout这些都是在global下的属性/成员
// console.log(global);
// console.log(window);

// 2. node下声明的变量，不会挂载到global里
// let a = 30;
// console.log(global.a) // undefined

// 3. 可以向global添加成员，可以在任何地方去使用
// let a = 30;
// global.a = 50;
// console.log(a);
// console.log(global.a)

// 4. 在node.js中执行这个2-全局对象js文件，如果出现this，这个this和global不是相等的。
// 若在交互模式下this和global是相等的
console.log(this === global); //此语句在浏览器中去执行，找不到global对象。
console.log(this);
// this在文件中，其实指向的是这个模块（就是这个js文件）
// 在html中的this为什么指向window，切可以挂在变量/属性/方法？ 因为执行引擎不一样，执行环境不一样，执行原理不一样！！！