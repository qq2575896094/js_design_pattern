/**
 * Created by qq2575896094 on 2017/4/5.
 *
 *  抽象工厂模式
 *
 *  抽象工厂:通过对类的加工抽象使其业务用于对产品类簇的创建,而不负责创建某一类产品的实例.
 *
 *  带头模范---抽象类
 */


//汽车抽象类,当使用其实例对象的方法时会抛出错误.
var Car = function () {

};
Car.prototype = {
    getPrice: function () {
        return new Error("抽象方法不能调用");
    },
    getSpeed: function () {
        return Error("抽象方法不能调用");
    }
};
