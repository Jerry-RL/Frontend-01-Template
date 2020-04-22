# week02学习总结




## 学习
### 1.重学JavaScript | 编程语言通识与JavaScript语言设计

#### 语言按语法分类
+ 非形式语言
  + 中文，英文
+ 形式语言(乔姆斯基谱系)[https://zh.wikipedia.org/wiki/%E4%B9%94%E5%A7%86%E6%96%AF%E5%9F%BA%E8%B0%B1%E7%B3%BB]
  + 0型 无限制文法
  + 1型 上下文相关文法
  + 2型 上下文无关文法
  + 3型 正则文法

#### 产生式(BNF)
+ 用将括号扩起来的名称来表示语法结构名
+ 语法结构分成基础结构和需要用其它语法结构定义的复合结构
  + 基础结构称终结符
  + 复合结构称非终结符

```
<MultiplicativeExpression> = <PrimaryExpression> |
<MultiplicativeExpression> "*" <PrimaryExpression>|
<MultiplicativeExpression> "/" <PrimaryExpression>


<AdditiveExpression> = <MultiplicativeExpression> |
<AdditiveExpression> "+" <MultiplicativeExpression>|
<AdditiveExpression> "-" <MultiplicativeExpression>

```




### 2. 重学JavaScript | 词法，类型

+ JavaScript
  + Atom
  + Expression
  + Statement
  + Structure

#### Types
+ Number
+ String
+ Boolean
+ Object
+ Null
+ Undefined
+ Symbol



## 作业
+ 匹配所有 Number 直接量
```
let numberRegex = /^(\.\d+|(0|[1-9]\d*)(\.\d*)?)([eE][-\+]?\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/

```
+ 写一个 UTF-8 Encoding 的函数

```
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}
```
+ 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
> 暂时没思路
```
var reg = //
```

## 总结

关于词法和语法的确触及到来我的盲区，不理解的地方还需反复思考研究