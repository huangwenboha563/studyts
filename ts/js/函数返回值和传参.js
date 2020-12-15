"use strict";
// 和js中的普通函数有什么区别呢
// 
function sayHi11() {
    return 'nihao';
}
var result = sayHi11();
console.log(result);
function box(cityname) {
    console.log('jjj' + cityname);
}
// 实惨必须和形餐的类型必须一样，实惨和行参的个数也要一样
box('北京'); // box(999) 就会报错
// 可选参数
function box22(cityname) {
    console.log('jjj' + cityname);
}
box22();
// 默认值
function box2233(cityname) {
    if (cityname === void 0) { cityname = "bj"; }
    console.log('jjj' + cityname);
}
box2233();
// 默认值2
function hh(cityname, ban) {
    if (cityname === void 0) { cityname = "bj"; }
    if (ban === void 0) { ban = 888; }
    console.log('jjj' + cityname + ban);
}
hh(undefined, 999);
// 剩余参数
function add(x, y) {
    var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
    var res = x + y;
    for (var _a = 0, z_1 = z; _a < z_1.length; _a++) {
        var ele = z_1[_a];
        res += ele;
    }
    console.log(res);
}
add(1, 2);
add(1, 2, 3, 4, 5, 6);
add(1, 2, 3);
