# BOM 对象

- `Window` 代表整个浏览器的窗口, 同时window也是网页中的全局对象
- `Navigator` 代表当前浏览器的信息, 可以识别浏览器
- `Location` 代表当前浏览器的地址栏信息, 通过 `Location` 获取地址, 或者跳转地址 
- `History` 代表浏览器的历史记录, 由于隐私原因, 只能操作前进和后退操作
- `Screen` 代表用户的屏幕的信息, 获取显示器的相关信息

### 判断浏览器

```js
ua = window.navigator.userAgent;
if (/chrome/i) {
	console.log('你是Chrome');
}
else if(/msie/i) {
	console.log('你是IE,抓住你了');
}
else if ("ActiveXObject" in window){
	console.log('你是IE11,我要枪毙你');
}
```

### 历史记录

`History` 

- `length`  本次访问网站的数量
- `back()`  后退
- `forward()` 前进
- `go()` 用于跳转几个页面 (前进或后退几次) 接受一个参数 整数前进 负数后退

### Location

> 封装了当前浏览器的地址栏信息

- `assign(url)` 跳转
- `reload()` 重载网页 参数 `true` 可以强制刷新
- `replace()` 用一个新的页面替换当前页面, 不会生成历史记录, 不能后退