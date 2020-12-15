// 和js中的普通函数有什么区别呢
// 
function sayHi11(): string {
    return 'nihao'
}
let result: string = sayHi11();
console.log(result);

function box(cityname: string,): void {
    console.log('jjj' + cityname)
}
// 实惨必须和形餐的类型必须一样，实惨和行参的个数也要一样
box('北京'); // box(999) 就会报错

// 可选参数
function box22(cityname?: string,): void {
    console.log('jjj' + cityname)
}
box22();
// 默认值
function box2233(cityname: string = "bj",): void {
    console.log('jjj' + cityname)
}
box2233();
// 默认值2
function hh(cityname: string = "bj", ban: number = 888): void {
    console.log('jjj' + cityname + ban)
}
hh(undefined, 999);
// 剩余参数

function add(x: number, y: number, ...z: number[]): void {
    let res: number = x + y;
    for (let ele of z) {
        res += ele;
    }
    console.log(res);
}
add(1,2)
add(1,2,3,4,5,6)
add(1,2,3)
// 函数传参问题...剩余参数举例
// test demo
