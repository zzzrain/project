// 以下都是es6写法
import $ from "jquery"
window.$ = $

import Vue from "vue"
import VueRouter from "vue-router"

// 官方引入路由写法
Vue.use(VueRouter)

// 更改过的mui
window.mui = require("mui")

// 引入自定义组件	名字+路径
import index from "./vue/index.vue"
import detail from "./vue/detail.vue"

// vue 路由
var router = new VueRouter({
	routes: [{
		path: "/index",
		component: index
	}, {
		path: "/detail",
		component: detail
	},{
		path:"/",
		redirect:"/index"
	}]
})

new Vue({
	el: "#demo",
	template:"<router-view></router-view>",
	router,
})
