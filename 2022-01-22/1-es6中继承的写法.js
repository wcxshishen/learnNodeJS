// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”
class Animal { // 父类 基类
    constructor(name) {
        console.log("father comstructor");
        this.name = name;
    }

    showName(){
        console.log(`My name is ${this.name}`);
    }

    static eat(){
        console.log("chi");
    }
}

// 继承类
// class Cat{
//     constructor(name) {
//         this.name = name
//     }

//     showName(){
//         console.log(`My name is ${this.name}`)
//     }

//     static eat(){
//         console.log("chi")
//     }
// 
// 继承的格式
//  class 子类名 extends 父类名
class Cat extends Animal{ // 子类 派生

    constructor(name){
        super(name); // 通过super老调用父类的construstor方法 这里时必须调用super函数来获取this
        console.log(this)

        this.name = name;
        console.log(this)
        this.age = 10;
    }

    catchMouse(){
        console.log('抓老鼠');
    }

    showName(){ // 如果字类方法和父类的方法名一直，就称重写父类方法
        console.log(`wcxshishen is ${this.name}`);
    }
}
let cat = new Cat("wcx")
console.log(cat.name)
cat.showName()
// 可以通过子类名调用父类名的静态方法
Cat.eat()
cat.catchMouse() 
console.log(cat.age)

// 继承的写法
// 1. 在继承的这个子类中，出现和父类方法名一样的方法，这就时重写。这样一来，对象调用的就是子类中的方法。
// 2. 一旦字类中定义了constructor方法，就必须在子类的constructor方法中调用super方法。
// 3. 子类中的this对象，是在调用父类的constructor（super）方法后才起作用的。
// 4. 若在class类中写的方法并没有用到this，可以将此方法写为static静态方法