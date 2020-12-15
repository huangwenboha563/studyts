"use strict";
var namereal = 'hwb';
var age = 19;
// 字符串
var aName = "dc";
// 数字
var dAge = 89;
dAge = 99;
// 布尔值
var isFlag = true;
isFlag = false;
// undefined和null
var unhh = undefined;
var nuhh = null;
// 数组两个语法糖
// 需要声明时指定数组里面的数据类型，表示这个数组里面的每个元素都必须是字符串
var arrHeros = ['1', '2'];
var arrHeros2 = ['1', '2'];
// 数组的每个元素必须是数字
var arrHeros1 = [1, 2];
var arrHeros3 = [1, 2];
// 元组（特殊的数组）个数和类型都必须一致
// 第一个元素是字符串 第二个元素是数字，第三个元素是布尔
var yz = ['a', 1, true];
yz = ['b', 2, false];
console.log(yz[0]);
console.log(yz.length);
// 为什么要有元祖呢
// 枚举类型
var guntype;
(function (guntype) {
    guntype[guntype["ad47"] = 1] = "ad47";
    guntype[guntype["ad48"] = 2] = "ad48";
    guntype[guntype["ad49"] = 3] = "ad49";
})(guntype || (guntype = {}));
var guntype2;
(function (guntype2) {
    guntype2[guntype2["ad47"] = 0] = "ad47";
    guntype2[guntype2["ad48"] = 1] = "ad48";
    guntype2[guntype2["ad49"] = 2] = "ad49"; // 2
})(guntype2 || (guntype2 = {}));
// 如何在业务中使用呢？
console.log(guntype.ad47);
console.log(guntype.ad48);
console.log(guntype.ad49);
var realgunt = guntype2.ad47;
console.log(realgunt);
if (realgunt == guntype2.ad47) {
    console.log(realgunt);
}
else {
    console.log('其他');
}
// any类型
var textName = document.getElementById('ss');
// void类型
function sayHi() {
    return '你好啊';
}
var res = sayHi();
function sayNo() {
    console.log('wo meiyouzhi');
}
// never;never感觉用的不多
function test() {
    throw new Error('对不起我错了');
}
function test1() {
    while (true) {
    }
}
// .ts文件中的类型推断
var wocao = 55; // 在ts中会认为wocao是number  此时
// wocao = '5555' // 会报错
var wocao2 = 555;
// 联合类型，为变量声明可能的多个类型
var aini = 555;
var aini222 = prompt('请输入你爱谁');
//输入了就是string没输入就是null类型
