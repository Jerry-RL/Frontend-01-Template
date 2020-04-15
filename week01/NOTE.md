# week01总结

## 预习
> 阅读winter老师的"重新前端"专栏

### 明确你的前端学习路线和方法

1. 建立知识架构
2. 追本溯源

## 学习

### 1. 重学|学习方法与构建知识体系

> 1. 反问自己，自己的知识是否成体系？
> 2. 反问自己，关于前端自己都会些什么？

#### 前端三大能力

* 编程能力-解决难的问题
* 架构能力-解决大（系统规模大）的问题，对复杂系统分析，软件设计
* 工程能力-解决人的问题，解决人多如何协作

反面示例：统计代码行数，统计bug数等 =>工程能力不行=>软件质量不行（即使编程能力和架构能力再好）

* 前端知识
* 领域知识


#### 学习方法

1. 整理法
2. 追溯法

### 2. 重学|工程体系
#### 职业规划

自己要做职业规划

#### 数据驱动的思考方式
...->目标->现状->方案->实施->结果->目标->...
* 目标：分析业务目标，定数据指标
* 现状：采集数据，建立数据展示系统
* 方案：设计技术方案，预估数据
* 实施：小规模实验，推广全公司落地，形成制度
* 结果：统计最终效果汇报
  

#### 工具链
> init->run->test->publish

* 工具链的作用
* 工具的分类
  * 脚手架
  * 本地调试
  * 单元测试
  * 发布
* 工具链体系的设计
  * 版本问题
  * 数据统计

#### 持续集成
+ 客户端软件持续集成
  + Daliy build
  + BVT
+ 前端持续集成
  + Check-in build
  + Lint + Rule Check

#### 技术架构
+ 客户端架构：解决软件需求规模带来的复杂性
+ 服务端架构：解决大量用户访问带来的复杂性
+ 前端架构：解决大量页面需求带来的重复劳动问题（复用）

* 库：有复用价值的代码
  * URL
  * AJAX
  * ENV
* 组件：UI上多次出现的元素
  * 轮播
  * Tab
* 模块：经常被使用的业务区块
  * 登录

## 作业

### URL解析
> 思路1：使用正则表达式解析
> 思路2：使用a标签获取属性
```javascript
function parseUrl(url) {
// 创建a标签
  let aTag = document.createElement('a')
  aTag.href = url;

// 获取所需url的属性
  let {
    protocol, 
    host, 
    hostname, 
    pathname,
    port,
    search,
    hash
  } = aTag

// 获取url参数 
  let urlParams = {};
  let queries = search.replace(/^\?/, '').split('&')
  queries.forEach((query, index) => {
    let kv = query.split('=')
    urlParams[kv[0]] = kv[1]
  })

// 返回解析数据
  return {
    protocol, 
    host, 
    hostname, 
    pathname,
    port,
    search,
    urlParams,
    hash
  }
}

```


## 总结及收获

通过两节课的学习，对前端知识体系有了更全面的认识，同时也对之后的前端学习有了方向。