/**
 * Created by qq2575896094 on 2017/4/1.
 *
 *  桥接模式:
 *      在系统沿着多个维度变化的同时,又不增加其复杂度并已达到解耦.
 *
 *  桥接模式只是先抽象提取公共部分,然后将实现与抽象通过桥接方法链接在一起,来实现解耦的作用.
 */

/**
 *  需求:
 *      把页面上面的导航部分添加一些鼠标滑过特效
 *
 *  方案:
 *      1.提取公共部分
 *      2.事件与逻辑之间的桥梁-----对元素绑定事件
 */

function changeColor(dom, color, bg) {
    //设置元素字体
    dom.style.color = color;
    //设置元素背景
    dom.style.background = bg;
}

var spans = document.getElementsByClassName("span");
spans[0].addEventListener("mouseover", function () {
    changeColor(this, "red", "#ddd");
}, false);


//多元对象----多维变量类
//运动单元
function Speed(x, y) {
    this.x = x;
    this.y = y;
}
Speed.prototype.run = function () {
    console.log("运动起来");
};

//着色单元
function Color(cl) {
    this.color = cl;
}
Color.prototype.draw = function () {
    console.log("绘制色彩");
};

//变形单元
function Shape(sp) {
    this.shape = sp;
}
Shape.prototype.change = function () {
    console.log("改变形状");
};

//说话单元
function Speek(wd) {
    this.word = wd;
}
Speed.prototype.say = function () {
    console.log("书写字体");
};

//=================创建一个球类,并且它可以运动,可以着色=========================
function Ball(x, y, c) {
    //实现运动单元
    this.speed = new Speed(x, y);
    //实现着色单元
    this.color = new Color(c);
}
Ball.prototype.init = function () {
    //实现运动
    this.speed.run();
    //实现着色
    this.color.draw();
};

//=================创建一个人物类,他可以运动以及说话=========================
function People(x, y, f) {
    this.speed = new Speed(x, y);
    this.speek = new Speek(f);
}
People.prototype.init = function () {
    this.speed.run();
    this.speek.say();
};

//=================创建一个精灵类,他可以运动,着色以及改变形状=========================
function Spirite(x, y, c, s) {
    this.speed = new Speed(x, y);
    this.color = new Color(c);
    this.shape = new Shape(s);
}
Spirite.prototype.init = function () {
    this.speed.run();
    this.color.draw();
    this.shape.change();
}