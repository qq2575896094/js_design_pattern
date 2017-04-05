/**
 * Created by qq2575896094 on 2017/4/5.
 *
 * 幽灵工厂---抽象工厂模式
 */



//抽象工厂方法
var VehicleFactory = function (subType, superType) {
    //判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === "function") {
        //缓存类
        function F() {

        }

        F.prototype = new VehicleFactory[superType]();
        //将子类constructor指向子类
        superType.constructor = subType;
        //子类原型继承父类
        subType.prototype = new F();
    } else {
        //不存在该抽象类抛出错误
        throw new Error("未创建该抽象类");
    }
};

//小汽车抽象类
VehicleFactory.Car = function () {
    this.type = "car";
};
VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error("抽象方法不能调用.");
    }
};