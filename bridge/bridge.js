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
spans[0].addEventListener("mouseover",function () {
    changeColor(this,"red","#ddd");
},false);


//多元对象