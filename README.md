##  vue项目实战

## 第一天完成

1. vue init webpack Black-horse-cms cd到此文件夹下 npm install
2. 下载mint-ui 引入并使用 另外加载mui
3. 头部用的插件 mint-ui header组件

```js
import MintUi from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MinUi)
```
4. 底部的tab栏，用mui的tabbar插件，不过，购物车图标于鏊用icon-extra

5. 首页
 5.1 轮播图 mint-ui swipe
 5.2 九宫格 mui 九宫格

6. 新闻页
 6.1 列表页 mui的图文列表
 6.2 详情页 同列表页

7. 品论组件
 7.1 封装一个成一个单页面组件，以便后面多次使用
 7.2 关于获取参数id问题 涉及组件父子通信，父组件添加属性与子组件注册的事件绑定一起，实现通信功能
 7.3加载更多组件 声明变量pageIndex，每次请求数据就执行pageIndex++，每次请求后的数据拼接到旧数据的后面

8. Toast 提示组件

```js
import {Toast} from "mint-ui"
Toast("提示信息")
```



