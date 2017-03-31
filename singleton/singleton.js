/**
 * Created by qq2575896094 on 2017/3/31.
 *
 * 单例模式
 *  又称为单体模式,是只允许实例化一次的对象类.有时,我们也用一个对象来规划一个命名空间,井井有条的管理对象上的属性和方法.
 */


var Ming = {
    g: function (id) {
        return document.getElementById(id);
    },
    css: function (id, key, value) {
        //通过当前对象this来使用g方法.
        this.g(id).style[key] = value;
    }
};

/**
 * 模块分明
 *
 * 创建小型的代码库
 *
 */

var A = {
    //工具类
    Util: {
        util_method_one: function () {
            console.log("A.Util.util_method_one()");
        },
        util_method_two: function () {
            console.log("A.Util.util_method_two()");
        }
    },
    Tool: {
        tool_method_one: function () {
            console.log("A.Tool.tool_method_one()");
        },
        tool_method_two: function () {
            console.log("A.Tool.tool_method_two()");
        }
    },
    Ajax: {
        get: function () {
            console.log("A.Ajax.get()");
        },
        post: function () {
            console.log("A.Ajax.post()");
        }
    },
    Others: {}
};

/**
 * 设置无法修改的静态变量
 */

var Conf = (function () {
    //私有变量
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 1,
        COUT: 1000
    };
    //返回取值器对象
    return {
        //取值器方法
        get: function (name) {
            return Conf[name] ? Conf[name] : null;
        }
    }
})();

/**
 * 惰性单例
 *
 *  只有在使用的时候才初始化
 */

var LazySingle = (function () {
    //单例实例引入
    var _instance = null;

    function Single() {
        return {
            publicMethod: function () {
                console.log("惰性单例方法");
            },
            publicPrototype: "1.0"
        }
    }

    //获取单例对象接口
    return function () {
        if (!_instance)
            _instance = Single();
        console.log(_instance);
        return _instance;
    }
})();
var int = LazySingle();
console.log(int);