/**
 * Created by qq2575896094 on 2017/3/31.
 *
 * 简单的工厂模式(一)
 * 简单的工厂模式:又叫静态工厂方法,由一个工厂对象决定创建某一种产品对象类的实例.
 * 主要用来创建同一类对象.
 */

//篮球基类
var Basketball = function () {
    this.intro = "篮球盛行于美国";
};

Basketball.prototype = {
    getMember: function () {
        console.log("每个队伍需要5名队员");
    },
    getBallSize: function () {
        console.log("篮球很大");
    }
};

//足球基类
var Football = function () {
    this.intro = "足球在世界范围内很流行.";
};
Football.prototype = {
    getMember: function () {
        console.log("每个队伍需要11名队员.");
    },
    getBallSize: function () {
        console.log("足球很大");
    }
};

//网球基类
var Tennis = function () {
    this.intro = "每年有很多网球系列赛.";
};
Tennis.prototype = {
    getMember: function () {
        console.log("每个队伍需要一名队员.");
    },
    getBallSize: function () {
        console.log("网球很小");
    }
};

//运动工厂
var SportsFactory = function (name) {
    switch (name) {
        case "NBA":
            return new Basketball();
        case "worldCup":
            return new Football();
        case "FrenchOpen":
            return new Tennis();
        default:
            return "";
    }
};

/**
 * test
 */

var football = SportsFactory("worldCup");
console.log(football);
console.log(football.intro);
football.getMember();