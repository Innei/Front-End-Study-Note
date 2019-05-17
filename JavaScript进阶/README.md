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

## 立即调用函数

  * 隐藏实现
  * 不会污染外部(全局)命名空间
  * 用它来编码js模块
  
```js
(function () { //匿名函数自调用
    var a = 3;
    console.log(a + 3);
  })();
```

## this 是什么

1. this是什么?

  * 任何函数本质上都是通过某个对象来调用的,如果没有直接指定就是window
  * 所有函数内部都有一个变量this
  * 它的值是调用函数的当前对象
  
2. 如何确定this的值?

  * test(): window
  * p.test(): p
  * new test(): 新创建的对象
  * p.call(obj): obj
  
```js
  function Person(color) {
    console.log(this)
    this.color = color;
    this.getColor = function () {
      console.log(this)
      return this.color;
    };
    this.setColor = function (color) {
      console.log(this)
      this.color = color;
    };
  }

  Person("red"); //this是谁? window

  var p = new Person("yello"); //this是谁? p

  p.getColor(); //this是谁? p

  var obj = {};
  p.setColor.call(obj, "black"); //this是谁? obj

  var test = p.setColor;
  test(); //this是谁? window

  function fun1() {
    function fun2() {
      console.log(this);
    }

    fun2(); //this是谁? window
  }
  
```

## 原型

1. 函数的prototype属性(图)
  * 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
  * 原型对象中有一个属性constructor, 它指向函数对象
2. 给原型对象添加属性(一般都是方法)
  * 作用: 函数的所有实例对象自动拥有原型中的属性(方法)
  
```js
  // 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
  console.log(Date.prototype, typeof Date.prototype)
  function Fun () {//alt + shift +r(重命名rename)

  }
  console.log(Fun.prototype)  // 默认指向一个Object空对象(没有我们的属性)

  // 原型对象中有一个属性constructor, 它指向函数对象
  console.log(Date.prototype.constructor===Date)
  console.log(Fun.prototype.constructor===Fun)

  //给原型对象添加属性(一般是方法) ===>实例对象可以访问
  Fun.prototype.test = function () {
    console.log('test()')
  }
  var fun = new Fun()

  fun.test()
```

1. 每个函数function都有一个prototype，即显式原型
2. 每个实例对象都有一个__proto__，可称为隐式原型
3. 对象的隐式原型的值为其对应构造函数的显式原型的值
4. 内存结构(图)
5. 总结:
  * 函数的prototype属性: 在定义函数时自动添加的, 默认值是一个空Object对象
  * 对象的__proto__属性: 创建对象时自动添加的, 默认值为构造函数的prototype属性值
  * 程序员能直接操作显式原型, 但不能直接操作隐式原型(ES6之前)
  
## 原型链

1. 原型链(图解)
  * 访问一个对象的属性时，
    * 先在自身属性中查找，找到返回
    * 如果没有, 再沿着__proto__这条链向上查找, 找到返回
    * 如果最终没找到, 返回undefined
  * 别名: 隐式原型链
  * 作用: 查找对象的属性(方法)
2. 构造函数/原型/实体对象的关系(图解)
3. 构造函数/原型/实体对象的关系2(图解)

![](https://i.loli.net/2019/05/05/5cce7f6d6e616.png)

![](https://i.loli.net/2019/05/05/5cce86d57336f.png)

![](https://i.loli.net/2019/05/05/5cce86eab739c.png)

1. 读取对象的属性值时: 会自动到原型链中查找
2. 设置对象的属性值时: 不会查找原型链, 如果当前对象中没有此属性, 直接添加此属性并设置其值
3. 方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上

## 变量提升与函数提升

1. 变量声明提升
  * 通过var定义(声明)的变量, 在定义语句之前就可以访问到
  * 值: undefined
2. 函数声明提升
  * 通过function声明的函数, 在之前就可以直接调用
  * 值: 函数定义(对象)
3. 问题: 变量提升和函数提升是如何产生的?

* 匿名函数遵循变量提升.

## 执行上下文

1. 代码分类(位置)
  * 全局代码
  * 函数(局部)代码
2. 全局执行上下文
  * 在执行全局代码前将window确定为全局执行上下文
  * 对全局数据进行预处理
    * var定义的全局变量==>undefined, 添加为window的属性
    * function声明的全局函数==>赋值(fun), 添加为window的方法
    * this==>赋值(window)
  * 开始执行全局代码
3. 函数执行上下文
  * 在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)
  * 对局部数据进行预处理
    * 形参变量==>赋值(实参)==>添加为执行上下文的属性
    * arguments==>赋值(实参列表), 添加为执行上下文的属性
    * var定义的局部变量==>undefined, 添加为执行上下文的属性
    * function声明的函数 ==>赋值(fun), 添加为执行上下文的方法
    * this==>赋值(调用函数的对象)
  * 开始执行函数体代码
  
  ## 闭包
  
  1. 如何产生闭包?
    * 当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量(函数)时, 就产生了闭包
  2. 闭包到底是什么?
    * 使用chrome调试查看
    * 理解一: 闭包是嵌套的内部函数(绝大部分人)
    * 理解二: 包含被引用变量(函数)的对象(极少数人)
    * 注意: 闭包存在于嵌套的内部函数中
  3. 产生闭包的条件?
    * 函数嵌套
    * 内部函数引用了外部函数的数据(变量/函数)
    
 ### 常见的闭包
 
  1. 将函数作为另一个函数的返回值
  2. 将函数作为实参传递给另一个函数调用
  
```js
    // 1. 将函数作为另一个函数的返回值
    function fn1() {
      var a = 2
      function fn2() {
        a++
        console.log(a)
      }
      return fn2
    }
    var f = fn1()
    f() // 3
    f() // 4
  
    // 2. 将函数作为实参传递给另一个函数调用
    function showDelay(msg, time) {
      setTimeout(function () {
        alert(msg)
      }, time)
    }
    showDelay('atguigu', 2000)
```


1. 使用函数内部的变量在函数执行完后, 仍然存活在内存中(延长了局部变量的生命周期)
2. 让函数外部可以操作(读写)到函数内部的数据(变量/函数)

问题:
  1. 函数执行完后, 函数内部声明的局部变量是否还存在?  一般是不存在, 存在于闭中的变量才可能存在
  2. 在函数外部能直接访问函数内部的局部变量吗? 不能, 但我们可以通过闭包让外部操作它
  
  
### 闭包的生命周期

1. 产生: 在嵌套内部函数定义执行完时就产生了(不是在调用)
2. 死亡: 在嵌套的内部函数成为垃圾对象时

```js
  function fn1() {
    //此时闭包就已经产生了(函数提升, 内部函数对象已经创建了)
    var a = 2
    function fn2 () {
      a++
      console.log(a)
    }
    return fn2
  }
  var f = fn1()
  f() // 3
  f() // 4
  f = null //闭包死亡(包含闭包的函数对象成为垃圾对象) 
```

### 闭包的缺点

1. 缺点
  * 函数执行完后, 函数内的局部变量没有释放, 占用内存时间会变长
  * 容易造成内存泄露
2. 解决
  * 能不用闭包就不用
  * 及时释放
  
全局变量释放
函数绑定变量,用完及时释放 `a = null`
定时器及时取消