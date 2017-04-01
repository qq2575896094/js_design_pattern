/**
 * Created by qq2575896094 on 2017/4/1.
 *
 * 适配器模式
 *
 * 将一个类(对象)的接口(方法或是属性)转化成另一个接口,以满足用户需求,使类(对象)之间接口的不兼容问题通过适配器得以解决.
 *
 */

/**
 *  需求:
 *      制作一个简单的学生查询学科成绩的方法
 *          1>目前只有sut_info某一个班级的学生信息
 *          2>一个selectScore方法的主接口
 *          3>查询英语成绩
 */


//一个班级某门学科的整体成绩列表
var sut_info = [
    {name: 'lily', studentId: '0911'},
    {name: 'suny', studentId: '0912'}
];

/**
 *  一个简单的学生查询学科成绩的方法
 * @param name      姓名
 * @param id        学号
 * @param course_id     课程ID
 */
function selectScore(name, id, course_id) {
    //根据学生姓名学号以及课程ID实现查询学科成绩的逻辑
}

//根据上面的信息是没有办法查询出某一学生某一学科的成绩的,需要使用适配器来实现

//方案一:针对具体某一学科来查询某一个人的成绩----------->查询更加具体,实际中会存在多个这样的接口.
function selectEnglishScore(stu_obj) {
    selectScore(stu_obj.name, stu_obj.studentId, 101);
}

//方案二:根据某一个人某一学科查询成绩-------------->一个接口试用多数情况
function queryScore(stu_obj, course_id) {
    selectScore(stu_obj.name, stu_obj.studentId, course_id);
}