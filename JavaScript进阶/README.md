# 笔记

## 数据类型

### 分类

  * 基本(值)类型
    * String: 任意字符串
    * Number: 任意的数字
    * boolean: true/false
    * undefined: undefined
    * null: null
  * 对象(引用)类型
    * Object: 任意对象
    * Function: 一种特别的对象(可以执行)
    * Array: 一种特别的对象(数值下标, 内部数据是有序的)
    
### 判断

  * typeof:
    * 可以判断: undefined/ 数值 / 字符串 / 布尔值 / function
    * **不能判断: null与object  object与array**
  * instanceof:
    * 判断对象的具体类型
  * ===
    * 可以判断: undefined, null
    
 
 ```js
    var a
    console.log(a, typeof a, typeof a === 'undefined', a === undefined)  // undefined 'undefined' true true
    console.log(undefined === 'undefined')
    a = 4
    console.log(typeof a === 'number')
    a = 'atguigu'
    console.log(typeof a === 'string')
    a = true
    console.log(typeof a === 'boolean')
    a = null
    console.log(typeof a, a === null) // 'object'

```

对象实例

```js
  //2. 对象
    var b1 = {
        b2: [1, 'abc', console.log],
        b3: function () {
            console.log('b3')
            return function () {
                return 'xfzhang'
            }
        }
    }

    console.log(b1 instanceof Object, b1 instanceof Array) // true  false
    console.log(b1.b2 instanceof Array, b1.b2 instanceof Object) // true true
    console.log(b1.b3 instanceof Function, b1.b3 instanceof Object) // true true

    console.log(typeof b1.b2, '-------') // 'object'

    console.log(typeof b1.b3 === 'function') // true

    console.log(typeof b1.b2[2] === 'function')
    b1.b2[2](4)
    console.log(b1.b3()())

```

函数(数组)是对象, 对象不一定是函数(数组). 所以

```js
    console.log(b1 instanceof Object, b1 instanceof Array) // true  false
    console.log(b1.b2 instanceof Array, b1.b2 instanceof Object) // true true
    console.log(b1.b3 instanceof Function, b1.b3 instanceof Object) // true true
```

都是 `true`

### undefined与null的区别?

  * undefined代表定义未赋值
  * null定义并赋值了, 只是值为null
  
### 什么时候给变量赋值为null呢?

  * 初始赋值, 表明将要赋值为对象
  * 结束前, 让对象成为垃圾对象(被垃圾回收器回收)

### 严格区别变量类型与数据类型?

  * 数据的类型
    * 基本类型
    * 对象类型
  * 变量的类型(变量内存值的类型)
    * 基本类型: 保存就是基本类型的数据
    * 引用类型: 保存的是地址值
    
 ## 数据 变量 内存
 
 1. 什么是数据?
 
   * 存储在内存中代表特定信息的'东东', 本质上是0101...
   * 数据的特点: 可传递, 可运算
   * 一切皆数据
   * 内存中所有操作的目标: 数据
     * 算术运算
     * 逻辑运算
     * 赋值
     * 运行函数
     
 2. 什么是内存?
 
   * 内存条通电后产生的可储存数据的空间(临时的)
   * 内存产生和死亡: 内存条(电路版)==>通电==>产生内存空间==>存储数据==>处理数据==>断电==>内存空间和数据都消失
   * 一块小内存的2个数据
      * 内部存储的数据
      * 地址值
   * 内存分类
     * 栈: 全局变量/局部变量
     * 堆: 对象
     
 3. 什么是变量?
 
   * 可变化的量, 由变量名和变量值组成
   * 每个变量都对应的一块小内存, 变量名用来查找对应的内存, 变量值就是内存中保存的数据
   
 4. 内存,数据, 变量三者之间的关系
 
   * 内存用来存储数据的空间
   * 变量是内存的标识
   
问题: 

`var a = xxx`  a 内存中到底保存的是什么?

* xxx是基本数据, 保存的就是这个数据
* xxx是对象, 保存的是对象的地址值
* xxx是一个变量, 保存的xxx的内存内容(可能是基本数据, 也可能是地址值)

关于引用变量赋值问题
  * 2个引用变量指向同一个对象, 通过一个变量修改对象内部数据, 另一个变量看到的是修改之后的数据
  * 2个引用变量指向同一个对象, 让其中一个引用变量指向另一个对象, 另一引用变量依然指向前一个对象
  
问题: 在js调用函数时传递变量参数时, 是值传递还是引用传递
  * 理解1: 都是值(基本/地址值)传递
  * 理解2: 可能是值传递, 也可能是引用传递(地址值)
  
问题: JS引擎如何管理内存?
1. 内存生命周期
  * 分配小内存空间, 得到它的使用权
  * 存储数据, 可以反复进行操作
  * 释放小内存空间
2. 释放内存
  * 局部变量: 函数执行完自动释放
  * 对象: 成为垃圾对象==>垃圾回收器回收

## 对象

1. 什么是对象?
  * 多个数据的封装体
  * 用来保存多个数据的容器
  * 一个对象代表现实中的一个事物
2. 为什么要用对象?
  * 统一管理多个数据
3. 对象的组成
  * 属性: 属性名(字符串)和属性值(任意)组成
  * 方法: 一种特别的属性(属性值是函数)
4. 如何访问对象内部数据?
  * .属性名: 编码简单, 有时不能用
  * ['属性名']: 编码麻烦, 能通用
  
问题: 什么时候必须使用['属性名']的方式?
  1. 属性名包含特殊字符: - 空格
  2. 属性名不确定
  
## 函数

1. 什么是函数?
  * 实现特定功能的n条语句的封装体
  * 只有函数是可以执行的, 其它类型的数据不能执行
2. 为什么要用函数?
  * 提高代码复用
  * 便于阅读交流
3. 如何定义函数?
  * 函数声明
  * 表达式
4. 如何调用(执行)函数?
  * test(): 直接调用
  * obj.test(): 通过对象调用
  * new test(): new调用
  * test.call/apply(obj): 临时让test成为obj的方法进行调用
  
  ## 回调函数

1. 什么函数才是回调函数?
  
- 你定义的
- 你没有调
- 但最终它执行了(在某个时刻或某个条件下)
    
2. 常见的回调函数?
  
- dom事件回调函数 ==>发生事件的dom元素
- 定时器回调函数 ===>window
- ajax请求回调函数(后面讲)
- 生命周期回调函数(后面讲)