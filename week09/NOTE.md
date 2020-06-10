# Week 09 学习总结
## css属性分类
* layout
    * 会引起重排或重新计算的属性
* interactive
    * 和鼠标等有交互才会显示出来效果的属性
* render/drawer
    * 会引起重绘的元素
* svg
    * svg元素
* Animation
    * @keyframes
    * animation
    * animation-name
    * animation-duration
    * animation-timing-function
    * animation-delay
    * animation-iteration-count
    * animation-direction
* Transition
    * transition-property
    * transition-duration
    * transition-timing-function
    * transition-delay
* 颜色
    * CMYK：Cyan-青色，Magenta-品红，Yellow-黄色，blacK-黑色
    * RGB：Red-红色，Green-绿色，Blue-蓝色
    * HSL：Hue-颜色（0-360），Saturation-饱和度（0-100%），Lightness-亮度（0-100%，黑-白）
    * HSV：Hue-颜色（0-360），Saturation-饱和度（0-100%），Value-明度（0-100%，黑-白）
## html
* 定义：XML与SGML
    * dtd文件里定义了html能写的属性，标签等
    * &nbsp替换空格操作不可取，可用css属性white-space: pre-wrap代替
* 合法元素
    * Element: <tagname>...</tagname>
    * Text: text
    * Comment: <!--comment--->
    * DocumentType: <!Document html>
    * ProcessingInstruction(处理信息):
    * CDATA: <![CDATA[]]>
* 字符引用
    * &#161; = !
    * &amp; = &
    * &lt; = <
    * &gt; = >
    * &quot; = "
## DOM
* 导航类操作
    * parentNode
    * childNodes
    * firstChild
    * lastChild
    * nextSibling
    * previousSibling
* 修改操作
    * appendChild
    * insertBefore
    * removeChild
    * replaceChild
* 高级操作
    * compareDocumentPosition：比较两个节点的位置关系
    * contains：是否包含另一个节点
    * isEqualNode：两个节点是否完全相同
    * cloneNode(deep)：拷贝一个节点，支持深度拷贝
* 事件
    * 捕获
    * 冒泡