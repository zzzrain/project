import $ from "jquery"
window.$ = $

// 加载vue
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 加载UI组件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// 第一层
import hot from "./components/hot.vue"
import find from "./components/find.vue"
import user from "./components/user.vue"

import intro from "./components/intro.vue"

// 第二层
import played from "./components/played.vue"
import prevue from "./components/prevue.vue"

import comments from "./components/comments.vue"
import reviews from "./components/reviews.vue"

var router = new VueRouter({
	routes:[{
		path:"/hot",
		component:hot,
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
			component:played
		}]
	},{
		// 详细介绍
		path:"/intro/:id",
		component:intro,
		children:[{
			// 短评
			path:"comments",
			component:comments
		},{
			// 影评
			path:"reviews",
			component:reviews
		}]
	},{
		path:"/find",
		component:find
	},{
		path:"/user",
		component:user
	},{
		path:"/",
		redirect:"/hot"
	}]
})

new Vue({
	el: "#demo",
	data:{
		test:"ok"
	},
	router,
})
