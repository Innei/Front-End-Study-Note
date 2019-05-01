# jQuery 笔记

## 释放 $ 符

> 避免与其他框架的 $ 冲突

1. 释放 $ 使用权

```js
jQuery.noConflict();

```

必须在jQuery代码之前使用

2. 更换 $ 符

```js
var nj = jQuery.noConflict(); // nj == $
```

## 核心函数

$(): 核心函数

1. 接受一个函数
2. 接受一个字符串
3. 接受一个字符串选择器
4. 接受一个DOM元素, 包装成jQuery对象
5. 接受代码片段

## jQuery对象

jQuery 对象是一个伪数组, 指有 0 - length-1 属性, 并且有 `length` 方法

## 静态方法和实例方法

### 构造函数

```js
// 创建函数

function f(item1,item2) {
    this.item1 = item1;
    this.item2 = item2;
  
}

var obj = new f(1,2);  // 对象

```

### 隐式变量和实例方法

```js
function AClass() {
  
}
// 添加一个静态方法
AClass.staticMethod = function() {
  alert('staticMethod');
  
}
// 静态方法使用类名调用

AClass.staticMethod()

// 给这个类添加一个实例方法
AClass.prototype.instanceMethod = function() {
  alert('instanceMethod');
}

// 创建一个实例

let a = new AClass();

// 实例调用
a.instanceMethod();
```

### 静态方法 each 方法

```js
let arr = [1,3,5,7,9];

arr.forEach(function(value,index) {
  console.log(index,value);
})

// 原生的 each 只能遍历数组, 不能遍历伪数组
```
### 使用 jQuery 遍历数组

```js
let arr = [1,3,5,7,9];

$.forEach(arr, function(index,value) {
  console.log(index,value);
})
```
1. 第一个参数: 当前遍历的索引
2. 第二个参数: 遍历到的元素

### 使用 jQuery 遍历伪数组

```js
let obj = {
    0:1,
    1:2,
    2:3,
}
$.each(obj,function(index, value) {
    console.log(index,value);
})
```