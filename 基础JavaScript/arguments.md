# arguments

在调用函数时, 浏览器每次都会传递两个隐含的参数:
1. 函数的上下文对象 `this`
2. 封装实参的对象 `arguments`
    - `arguments` 是一个类数组对象, 它也可以通过索引来操作数据, ...
    - 在调用函数时, 传递的参数在 `arguments` 中保存
    - `callee` 这个属性对应一个函数对象, 就是当前正在指向的函数的对象
```js
function fun(){
    console.log(arguments.length);  // 2
    console.log(arguments[0]);  // '1111'
    console.log(arguments.callee == fun);  // true
}
fun('1111',true);  

```