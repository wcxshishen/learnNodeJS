// 1. Object.assign
// Object.assign 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
// 针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是（可枚举）属性值。忽略enumerable为false的属性（不可枚举）。
// 假如源值是一个对象的引用，它仅仅会复制其引用值。
// let obj1 = {a: 0,b: {c: 0}};
// let obj2 = Object.assign({},obj1);
// obj1.a = 1;
// console.log(obj1,obj2)
// obj1.b.c = 3;
// console.log(obj1,obj2) // c值都发生改变

const obj = Object.create(
    {foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2 , // bar 是个不可枚举属性。enumerable默认为false
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});
console.log(obj);
// const copy = Object.assign({}, obj);
// console.log(copy); // { baz: 3 }


// 2. 箭头函数
// 箭头函数没有自己的作用域，和外层作用域相同
