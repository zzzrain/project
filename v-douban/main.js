// 加载vue
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 加载UI组件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// 加载jq
import $ from "jquery"
window.$ = $

// 第一层
import hots from "./components/hots.vue"
import find from "./components/find.vue"
import user from "./components/user.vue"

import intro from "./components/intro.vue"

// 第二层
import played from "./components/played.vue"
import prevue from "./components/prevue.vue"

// 第三层
import comments from "./components/comments.vue"
import reviews from "./components/reviews.vue"

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
		},{
			path:"/",
			redirect:"/intro/:id/comments"
		}]
	},{
		path:"/find",
		component:find
	},{
		path:"/user",
		component:user
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
