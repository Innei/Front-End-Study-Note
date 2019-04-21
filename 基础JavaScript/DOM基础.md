# DOM 操作

### 创建一个节点

```js
var li = document.createElement("li");  // 创建一个 <li> 标签 保存在li变量中

// 创建一个文本节点

var text = document.createTextNode("浙江");

// 把文本节点加入 li 节点
li.appendChild(text);

var ui_node = document.querySelector("ui");
ui_node.appendChild(li);  // 插入到 ui 

```

父节点.insertBefore(新的节点,引用节点)

### 删除节点

从父节点删除子节点

父节点.removeChild(子节点)

从子节点删除子节点 需要从从父节点获取

子节点1.parentNode.removeChild(需要删除的子节点)

### 读取节点内容

节点.innerHTML()

使用innerHTML修改父节点 不推荐使用