/**
 * Created by qq2575896094 on 2017/4/5.
 *
 *  构造函数继承
 *      SuperClass.call(this,id);这条语句是构造函数式继承的精华,由于call这个方法可以更改函数的作用环境,因此在类中,对superClass调用这个方法就是将子类中的变量在父类中执行一遍.
 */


//声明父类
function SuperClass(id) {
    this.books = ["JavaScript", "html5", "css3"];

    //值类型共有属性
    this.id = id;
}

//父类声明原型的方法
SuperClass.prototype.showBooks = function () {
    console.log(this.books);
};

//声明子类
function SubClass(id) {
    //继承父类
    SuperClass.call(this, id);
}

//创建第一个子类的实例
var instance1 = new SubClass(10);
//创建第二个子类的实例
var instance2 = new SubClass(11);

instance1.books.push("设计模式");
console.log(instance1.books);
console.log(instance1.id);
console.log(instance2.books);
console.log(instance2.id);