/**
 * Created by qq2575896094 on 2017/3/31.
 *
 * 外观模式
 *  为一组复杂的子系统接口提供一个更高级的统一接口,通过这个接口使得对子系统接口的访问更容易.
 *  解决兼容性问题是一个不错的选择.
 */

/**
 * 添加点击事件(兼容模式)------外观模式实现
 */

function addEvent(dom, type, fn) {
    //对于支持DOM2级事件处理程序addEventListener方法的浏览器
    if (dom.addEventListener)
        dom.addEventListener(type, fn, false);
    //对于不支持addEventListener方法但支持attachEvent方法的浏览器
    else if (dom.addEvent)
        dom.addEvent('on' + type, fn);
    else
        dom['on' + type] = fn;
}