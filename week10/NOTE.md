# week10学习总结


## 学习


### Range API

```js
var range = new Range();
range.setStart(element, 9);
range.setEnd(element, 4);
var range = document.getSelection().getRangeAt(0);

```
+ Range快捷api
  + range.setStart

```
var fragment = range.extractContents()
range.insertNode(document.createTextNode("aaa"))

```

### CSSOM

#### Rules
+ document.styleSheets[0].cssRules
+ document.styleSheets[0].insertRule("p {}",0)
+ document.styleSheets[0].removeRule(0)

#### Rule


#### getComputedStyle
+

## 作业

## 总结