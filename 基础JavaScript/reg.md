# 正则表达式

### 创建一个正则表达式

```js
var reg = new Regexp("a");  // "/a/"

```

`test` 用于检查字符串是否符合正则表达式规则

```js

reg.test("abc"); // true
reg.test("bc"); // false

```
`Regexp()` 接受两个参数, 第一个是匹配规则, 第二个是匹配模式, 他可以是 `i` , `g`

### 使用字面量创建

```js
var reg = /abc/i;
reg = /abc/;
```
这种方式更加简单. 但很局限
- 他不能传入变量
- 他是固定的

