// 引入安装的模块  jquery、vue、vuerouter。。。

// commonjs(es5)写法  require引入  exports输出
// var $ = require("jquery")

// 以下都是es6写法
import $ from "jquery"
window.$ = $

import Vue from "vue"
import VueRouter from "vue-router"

// 官方写法
Vue.use(VueRouter)

// 引入自定义组件	名字+路径
import index from "./vue/index.vue"
import home from "./vue/home.vue"
// var index = require("./vue/index.vue")
// var home = require("./vue/home.vue")

// vue 路由
var router = new VueRouter({
	routes: [{
		path: "/index",
		component: index
	}, {
		path: "/home",
		component: home
	}]
})

new Vue({
	el: "#demo",
	data: {
		name: "Banana·James"
	},
	template: `
		<div>
			<h1>{{name}}</h1>
			<a href="#/index">index</a>
			<a href="#/home">home</a>
			<router-view></router-view>
		</div>
	`,
	methods:{
		
	},
	mounted(){  // ==> ready(){}
		$('h1').css('color','yellow')
	},
	router,
})
