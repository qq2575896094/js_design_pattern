/**
 * Created by qq2575896094 on 2017/4/6.
 *
 * 组合模式
 *
 *  组合模式又称部分-整体模式,将对象组合成树形结构以表示"部分整体"的层次结构.组合模式使得用户对单个对象和组合对象的使用具有一致性.
 */

/**
 * 新闻需求
 */

//================每个成员要有祖先====================
var News = function () {
    //子组件容器
    this.children = [];
    //当前组件元素
    this.element = null;
};
News.prototype = {
    init: function () {
        throw new Error("请重写你的方法");
    },
    add: function () {
        throw new Error("请重写你的方法");
    },
    getElement: function () {
        throw new Error("请重写你的方法");
    }
};

//================组合要有容器类====================
//容器类构造类
var Container = function (id, parent) {
    //构造函数继承父类
    News.call(this);
    //模块id
    this.id = id;
    //模块的父容器
    this.parent = parent;
    //构建方法
    this.init();
};

//寄生式继承父类原型方法
inheritPrototype(Container, News);

//构建方法
Container.prototype.init = function () {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = "new-container";
};
//添加子元素方法
Container.prototype.add = function (child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
};

//获取当前元素方法
Container.prototype.getElement = function () {
    return this.element;
};
//显示方法
Container.prototype.show = function () {
    this.parent.appendChild(this.element);
};

//================下一层级的成员集合类====================
var Item = function (classname) {
    News.call(this);
    this.calssname = classname || '';
    this.init();
};
inheritPrototype(Item, News);
Item.prototype.add = function (child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
};

Item.prototype.getElement = function () {
    return this.element;
};
var NewsGroup = function (classname) {
    News.call(this);
    this.classname = classname || '';
    this.init();
};
inheritPrototype(NewsGroup, News);
NewsGroup.prototype.init = function () {
    this.element = document.createElement('div');
    this.element.className = this.classname;
};
NewsGroup.prototype.add = function (child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
};
NewsGroup.prototype.getElement = function () {
    return this.element;
};


//创建一个新闻类
var ImageNews = function (url, href, classname) {
    News.call(this);
    this.url = url || '';
    this.href = href || '';
    this.classname = classname || 'normal';
    this.init();
};

inheritPrototype(ImageNews, News);
ImageNews.prototype.init = function () {
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news ' + this.classname;
    this.element.href = this.href;
};
ImageNews.prototype.add = function () {

};
ImageNews.prototype.getElement = function () {
    return this.element;
};

var IconNews = function (text, href, type) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init();
};
inheritPrototype(IconNews, News);
IconNews.prototype.getElement = function () {
    return this.element;
};
var EasyNews = function (text, href) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.init();
};
inheritPrototype(EasyNews, News);
EasyNews.prototype.init = function () {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = "text";
};
EasyNews.prototype.add = function () {

};
EasyNews.prototype.getElement = function () {
    return this.element;
};

var TypeNews = function (text, href, type, pos) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || '';
    this.pos = pos || 'left';
    this.init();
};
inheritPrototype(TypeNews, News);
TypeNews.prototype.init = function () {
    this.element = document.createElement('a');
    if (this.pos === 'left') {
        this.element.innerHTML = '[' + this.type + ']' + this.text;
    } else {
        this.element.innerHTML = this.text + '[' + this.type + ']';
    }
    this.element.href = this.href;
    this.element.className = 'text';
};
TypeNews.prototype.add = function () {

};
TypeNews.prototype.getElement = function () {
    return this.element;
};