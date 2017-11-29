import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

import CartContainer from "../components/tabcontainers/CartContainer.vue"
import HomeContainer from "../components/tabcontainers/HomeContainer.vue"
import MemberContainer from "../components/tabcontainers/MemberContainer.vue"
import SearchContainer from "../components/tabcontainers/SearchContainer.vue"
import NewsInfo from "../components/news/NewsInfo.vue"
import NewsList from "../components/news/NewsList.vue"

export default new VueRouter({
    routes: [
       {path: "/home",  component: HomeContainer},
       {path: "/cart",  component: CartContainer},
       {path: "/member",  component: MemberContainer},
       {path: "/search",  component: SearchContainer},
       {path: "/",  redirect: "/home"},
       {path: "/home/newslist",  component: NewsList},
       {path: "/home/newsinfo/:id",  component: NewsInfo},
    ]
});

