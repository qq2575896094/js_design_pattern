/**
 * Created by qq2575896094 on 2017/4/5.
 *
 *  类是继承
 *      先继承后添加子类的方法,否则子类的共有方法会被覆盖
 *
 *  缺点:
 *      ① 由于子类通过其原型prototype对父类实例化继承父类.所以,父类的共有属性要是引用类型,就会在子类中被所有实例共用.
 *         因此一个子类的实例更改子类原型从父类构造函数中继承来的共有属性就会直接影响到其他子类
 *      ② 由于子类实现的继承是靠其原型prototype对父类的实例化实现的.因此在创建父类的时候无法向父类传递参数的,因此在实例化父类的时候也无法构造函数内的属性进行初始化.
 */


//声明父类
function SuperClass() {
    this.superValue = true;
}

//为父类添加公共方法
SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
};

//声明子类
function SubClass() {
    this.subValue = false;
}

//子类继承父类
SubClass.prototype = new SuperClass();

//为子类添加公共方法
SubClass.prototype.getSubValue = function () {
    return this.subValue;
};

//说明
var instance = new SubClass();
console.log(instance.getSubValue());  //false
console.log(instance.getSuperValue());  //true
