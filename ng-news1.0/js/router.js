(function() {
	// 模块名字，注入模块写在总模块
	angular.module('state', [])
	// 配置参数：声明路由和默认路由
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		console.log('ok')
		
		// 路由层级，常用参数：层级名字url、模板、控制器
		// 在模板文件写入view，路由控制其变化
		
		$stateProvider
		
		// 第一层
		.state('tiyu',{
			url:'/tiyu',
			templateUrl:'html/tiyu.html',
			controller:'tiyuCtrl',
		})
		.state('yule',{
			url:'/yule',
			templateUrl:'html/yule.html',
			controller:'yuleCtrl',
		})
		.state('junshi',{
			url:'/junshi',
			templateUrl:'html/junshi.html',
			controller:'junshiCtrl',
		})
		.state('shehui',{
			url:'/shehui',
			templateUrl:'html/shehui.html',
			controller:'shehuiCtrl',
		})
		
		// 详情页
		.state('detail',{
			url:'/detail',
			templateUrl:'html/detail.html',
			controller:'detailCtrl',
		})
		
		// 默认路由
		$urlRouterProvider.when('','/shehui')
	}])
})();
