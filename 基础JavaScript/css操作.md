# CSS 操作

语法: 元素.style.样式名 = "样式值"  (内联样式 优先级高)

```js
var box = document.querySelector('.box');
box.style.width = '200px';
```

**如果 CSS 中有连接符 '-' 需要将去掉 '-' -后的字母大写 ( border-top => borderTop )**

读取样式

`console.log(元素.style.样式名)`  通过这种读取只是读取**内联样式**, 全局样式, 无法读取.

### 读取样式

获取当前元素的**当前正在显示**的样式, 如果样式不存在则获取默认参数 (仅IE支持)
    语法: `元素.currentStyle.样式名`

其他浏览器使用 `getComputedStyle()` 这个方法是window的方法,可以直接使用

参数:   
- 第一个: 要获取的元素
- 第二个: 可以传递一个伪元素, 一般传入 null

他会返回一个对象. 将属性封装在对象中.

```js
var obj = getComputedStyle(box, null);
console.log(obj.width);
```

他与 `currentStyle` 的不同, 他不会返回默认值, 而是真实值

**这两种方法是只读样式 不能修改**

_____________

`clientWidth` 和 `clientHeight` 可以获取到可见高度 [内容区和内边距] (+ padding), 不带单位(px..)  这些属性都是只读的

改只能通过 `元素.style.属性` 改

`offsetWidth` 和 `offsetHeight` 可以获取到可见高度 [内容区, 内边距, 边框] (+ padding + border), 不带单位(px..)  这些属性都是只读的

### 滚动条

`scrollHeight` 和 `scrollWidth` 整个元素的高度和宽度

`scrollTop` 和 `scrollLeft` 可以获取垂直(水平)滚动条滚动的距离

当满足 `scrollHeight - scrollTop == clientHeight` 时, 说明滚动到底了.