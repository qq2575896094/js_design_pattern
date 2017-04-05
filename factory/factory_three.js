/**
 * Created by qq2575896094 on 2017/4/5.
 *
 *  安全的工厂模式
 */



//安全模式创建的工厂类
var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
};

//工厂原型中设置创建所有类型对象的基类
Factory.prototype = {
    Java: function (content) {
        console.log(content);
    },
    JavaScript: function (content) {
        console.log(content);
    },
    UI: function (content) {
        console.log(content);
    },
    php: function (content) {
        console.log(content);
    }
    //...
};