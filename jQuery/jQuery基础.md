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

