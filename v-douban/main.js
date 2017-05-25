// 加载vue
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 加载UI组件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
Vue.use(MuseUI)

// 加载jq
import $ from "jquery"
window.$ = $

// 加载封装
//import sb from ""
//window.sb = sb

// 第一层
import hots from "./components/hots.vue"
import find from "./components/find.vue"
import user from "./components/user.vue"

// 第二层
import played from "./components/played.vue"
import prevue from "./components/prevue.vue"

// 详情页
import detail from "./components/detail.vue"

// 评论页
import comments from "./components/comments.vue"
import reviews from "./components/reviews.vue"

// 注册登录
import login from "./components/login.vue"
import register from "./components/register.vue"
import success from "./components/success.vue"

var router = new VueRouter({
	routes:[{
		path:"/hots",
		component:hots,
		children:[{
			// 热影片
			path:"played",
			component:played,
		},{
			// 预影片
			path:"prevue",
			component:prevue
		},{
			path:"/",
			redirect:"/hots/played"
		}]
	},{
		// 详细介绍
		path:"/detail/:id",
		component:detail,
		children:[{
			// 短评
			path:"comments",
			component:comments
		},{
			// 影评
			path:"reviews",
			component:reviews
		},{
			path:"/",
			redirect:"/detail/:id/comments"
		}]
	},{
		path:"/find",
		component:find,
	},{
		path:"/user",
		component:user,
	},{
		// 登录
		path:"/login",
		component:login
	},{
		// 注册
		path:"/register",
		component:register
	},{
		// 成功
		path:"/success",
		component:success
	},{
		path:"/",
		redirect:"/hots"
	}]
})

new Vue({
	el: "#demo",
	data:{
		test:"ok"
	},
	router,
})
