# call 和 apply

`call()` 和 `apply()`

- 这两个方法都是调用函数的方法
- 当用函数调用`call` 和 `apply` 都会执行函数
- 在调用`call` 和 `apply` 时可以将一个对象传入, 函数会将这个对象替换掉原来的 `this` 
- `call()` 可以将实参在对象之后传入
- `apply()` 需要在实参之后传入一个数组

`this` 的情况

1. 以函数形式调用, `this` 永远是 `window`
2. 以方法调用, `this` 是调用方法的对象
3. 以构造函数的形式调用, `this` 是新创建的那个对象
4. 使用 `call()` 和 `apply()` , `this` 是传入的对象, 不传则是 `window`