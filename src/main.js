import Vue from "vue";

//引入根组件
import App from "./App.vue"

import router from "./routers/router.js"
//引入mint-ui插件
import MintUi from "mint-ui"
//引入样式
import "mint-ui/lib/style.css"
//安装
Vue.use(MintUi);
//引入mui
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import "./lib/mui/js/mui.js"

var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {
        App
    }
})