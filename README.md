# Onion 的 dev-kit
[![NPM version](https://img.shields.io/npm/v/bigonion-kit)](https://www.npmjs.com/package/bigonion-kit)
![license](https://img.shields.io/github/license/LiWeny16/bigonion-npm-kit)
## 下载(Download)

```js
npm i bigonion-kit
```

## 简介(Introduction)

本 NPM 包提供了  
This NPM package provides

- moveIt
- findId
- findClass
- setCookie
- getCookie
- log
- sleep
- addStyle
- removeAddedStyle
- sound2Word
- getUUID
- ajax
- isFocus
  常用方法（未完待续...）

## 支持 umd，web 请使用 umd 来导入(Support umd, please use umd to import web)

eg：

```js
<script src="https://cdn.jsdelivr.net/npm/bigonion-kit/umd/umd-kit.min.js"></script>
```

ES6 导入

```js
<script type="module">
  import kit from "https://cdn.jsdelivr.net/npm/bigonion-kit/index.min.mjs";
  window.kit = kit; window.moveIt = kit.moveIt; window.findId = kit.findId;
  window.findClass = kit.findClass; window.setCookie = kit.setCookie;
  window.getCookie = kit.getCookie; window.log = kit.log; window.sleep =
  kit.sleep; window.version=kit.version;
</script>
```

## Nodejs

使用.mjs 扩展来支持 import

```js
import kit from "bigonion-kit/index.mjs";
```

或 commonJS 规范

```js
const kit = require("bigonion-kit/umd/umd-kit.js");
```

来快速导入

## 函数详情 (Function details)

web 已经挂载全局变量,可以直接输入`kit`来查看已有的函数
也可以直接控制台输入

```js
log("你好");
```

来使用

### **sleep**

Eg:

```js
/**
 * fast pause some time, just like delay function
 * @param {int} time
 * @return {Promise}
 * @public
 */

sleep(3000).then(() => {
  log("你已经成功导入devKit");
});
```

### **log**

Eg:

```js
/**
 * fast log sth...
 * @param {string} a
 * @public
 */

log("Nihao");
```

### **findId**

Eg:

```js
/**
 * fast find Element by Id
 * @param {string} id
 * @return {Object}
 * @public
 */

findId("id");
```

### **findClass**

Eg:

```js
/**
 * fast find Element by className
 * @param {string} className
 * @return {Array}
 * @public
 */

findClass("className");
```

### **moveIt**

Eg:

```js
/**
 * fast move Sth by holding on "controlEle" to move "movedEle"
 * @param {Object} controlEle
 * @param {Object} movedEle
 * @public
 */
controlEle = findId("controlEle");
movedEle = findId("movedEle");
moveIt(controlEle, movedEle);
```

### **setCookie**

Eg:

```js
/**
 * fast set cookie by Native function
 * @param {string} cname
 * @param {Any} cvalue
 * @param {int} exdays {days}
 * @public
 */

setCookie("cookieName", "cookieValue", 30);
```

### **getCookie**

Eg:

```js
/**
 * fast get cookie value
 * @param {string} cname
 * @return {string} cvalue
 * @public
 */

getCookie("cookieName");
```

### **setClipBoard**

Eg:

```js
/**
 * fast get cookie value
 * @param {string} text
 * @public
 */

setClipBoard("你好");
```

### **isFocus**

```js 
/**
 * Judge whether an element is in focus
 * @param {object} element
 * @return {boolean}
 * @public
 */

isFocus(element);
```

### **ajax**

```js
/**
 * fast send request with ajax
 * @param {string} url
 * @param {string} way
 * @param {boolean} async
 * @param {JSON} header
 * @param {function} onload
 * @return {Object}
 * @public
 */
ajax({
  url: "https://example.com",
  way: "GET",
  async: true,
  header: { "content-type": "json" },
  onload:(data)=>{console.log(data.response)}
});
//注意：不能跨域
```

### **getUUID**
Eg:

```js
/** 
 * fast get cookie value
 * @return {string}
 * @public
 */
kit.getUUID()

```
### **sound2Word**
Eg:
```js
/**
 * 控制台快捷语音识别
 * @return {string}
 */

kit.sound2Word()
```

### **addStyle**
Eg:
```js
/**
 * add some style
 * @param {string}
 */
kit.addStyle(`
body{
    background:pink
    }
`)
```
### **removeAddedStyle**
Eg:
```js
/**
 * remove all the added Cssstyle
 */
kit.removeAddedStyle()
```

## 版本更新日志(Version update log)

v0.4.x demo Ver  
v0.5.3 增加了 esm 和 umd 模块
v0.7.4 增加了 isFocus、ajax、setClipboard、getUUID
v0.8.4 增加了 addStyle、removeAddedStyle

## 开源协议(Open source agreement)

**MIT**

## 作者(Author)

**bigonion**

nameSpace: [bigonion.cn](https://bigonion.cn)  
Email: bigonion@bigonion.cn **&&** olderonion@gmail.com
