# ts基础
# 安装与运行
> 浏览器直接执行不了，需要把ts转换为js所以需要特殊的环境

1. npm install -g typescript
2. tsc -v (tsc的作用就是将ts代码转换成浏览器和node环境能识别的)


> 用vscode来自动编译ts文件

    1.tsc --init
    2.生成tsconfig.json文件。改变这个文件里面的outDir
    3.终端监听这个json文件

# 变量声明
```javascript
let age:number = 18;
let name:string = "huangwenbo";
name = 10 // 此时肯定会报错。
