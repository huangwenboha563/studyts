let namereal: string = 'hwb';
let age: number = 19;

// 字符串
let aName: string = "dc"
// 数字
let dAge: number = 89
dAge = 99
// 布尔值
let isFlag: boolean = true
isFlag = false
// undefined和null
let unhh: undefined = undefined
let nuhh: null = null

// 数组两个语法糖
// 需要声明时指定数组里面的数据类型，表示这个数组里面的每个元素都必须是字符串
let arrHeros: string[] = ['1', '2']
let arrHeros2: Array<string> = ['1', '2']
// 数组的每个元素必须是数字
let arrHeros1: number[] = [1, 2]
let arrHeros3: Array<number> = [1, 2]


// 元组（特殊的数组）个数和类型都必须一致
// 第一个元素是字符串 第二个元素是数字，第三个元素是布尔
let yz: [string, number, boolean] = ['a', 1, true]
yz = ['b', 2, false]
console.log(yz[0]);
console.log(yz.length);
// 为什么要有元祖呢


// 枚举类型
enum guntype {
    ad47 = 1,
    ad48 = 2,
    ad49 = 3
}

enum guntype2 { // 自动生成从0开始的
    ad47, // 0
    ad48, // 1
    ad49  // 2
}
// 如何在业务中使用呢？
console.log(guntype.ad47);
console.log(guntype.ad48);
console.log(guntype.ad49);


let realgunt: guntype2 = guntype2.ad47
console.log(realgunt);
if (realgunt == guntype2.ad47) {
    console.log(realgunt);

} else {
    console.log('其他');
}

// any类型

let textName: any = document.getElementById('ss')

// void类型
function sayHi(): string {
    return '你好啊'
}
var res = sayHi();

function sayNo(): void {
    console.log('wo meiyouzhi')
}

// never;never感觉用的不多

function test(): never {
    throw new Error('对不起我错了')
}

function test1(): never {
    while (true) {

    }
}
// .ts文件中的类型推断

let wocao = 55; // 在ts中会认为wocao是number  此时
// wocao = '5555' // 会报错
let wocao2: number = 555;

// 联合类型，为变量声明可能的多个类型
let aini: string | number = 555
let aini222: string | null = prompt('请输入你爱谁')
//输入了就是string没输入就是null类型