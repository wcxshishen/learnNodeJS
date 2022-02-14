
var num = 10;
 
function sum(a,b){
    return a + b;
};

class Animal{
    constructor(){
        this.age = 10;
    }
}


// 方式一
// exports.num = num;
// exports.summer = sum;
// exports.Animal = Animal;

// 方式二
module.exports = {
    num,
    summer:sum,
    Animal,   
}

// 方式三，若用this导出
// this.num = 40;
// this.summer = sum;
// this.Animal = Animal;