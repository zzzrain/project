// Vuex——状态管理模式，实现组件间的数据交互
var store = new Vuex.Store({
	// 单一状态树，即唯一数据源
	state:{
		val:''
	},
	// 处理数据
	mutations:{
		change(state,data){
			state.val = data
		}
	},
	// 获取数据
	getters:{
		getData(state){
			return state.val
		}
	},
})


// 主页路由
var index = Vue.extend({
	template:`
		<div>
			<xhead></xhead>
			<xsearch></xsearch>
			<xswiper></xswiper>
			<xlist></xlist>
		</div>
	`
})

// 详情页
var detail = Vue.extend({
	template:`
		<div>
			<xhead></xhead>
			<xdetail></xdetail>
		</div>
	`
})

// 创建路由
var router = new VueRouter({
	routes:[{
		path:'/index',
		component:index,
	},{
		path:'/detail/:id',
		component:detail,
	},{
		path:'/',
		redirect:'/index',
	}]
})

new Vue({
	el:'#demo',
	store,
	router,
})