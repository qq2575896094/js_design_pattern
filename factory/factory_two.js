/**
 * Created by qq2575896094 on 2017/3/31.
 *
 * 简单工厂模式(二)
 *
 * 简单工厂模式的理念就是创建对象.
 */

//工厂模式
function createBook(name, time, type) {
    //创建一个对象,并对对象拓展属性和方法
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;

    //根据Type的值的不同,添加不同的逻辑 eg: 1:数学书 2:语文书 3:英语书
    if (type == "1") {
        o.description = "This is a Math Book!";
    } else if (type == "2") {
        o.description = "This is a Chinese Book!";
    } else if (type == "3") {
        o.description = "This is an English Book!";
    } else {
        o.description = "This is an unknow book";
    }

    o.geName = function () {
        console.log(this.name);
    };
    //将对象返回
    return o;
}

/**
 * test
 */
var mathBook = createBook("math book", '1990', "1");
var chineseBook = createBook("Chinese book", "2000", "2");
console.log(mathBook.description);
console.log(chineseBook.description);