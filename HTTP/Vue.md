### 组件注册
#### 组件名
在注册一个组件的时候，我们始终需要给它一个名字。比如在全局注册的时候我们已经看到了：

> Vue.component('my-component-name', { /* ... */ })
该组件名就是 Vue.component 的第一个参数。

你给予组件的名字可能依赖于你打算拿它来做什么。当直接在 DOM 中使用一个组件 (而不是在字符串模板或单文件组件) 的时候，我们强烈推荐遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。
#### 组件名大小写
定义组件名的方式有两种：

使用 kebab-case
Vue.component('my-component-name', { /* ... */ })
当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 <my-component-name>。

使用 PascalCase
Vue.component('MyComponentName', { /* ... */ })
当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-component-name> 和 <MyComponentName> 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。