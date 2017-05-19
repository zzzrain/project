// 模块化
angular.module('demo', ['ui.router', 'state', 'controller', 'directive']);
// router
;(function() {
	angular.module('state', [])
		.config(function($stateProvider, $urlRouterProvider) {
			console.log('ok')
			$stateProvider
				.state('tiyu', {
					url: '/tiyu',
					template: '<main></main>',
					controller: 'tiyu',
				})
				.state('yule', {
					url: '/yule',
					template: '<main></main>',
					controller: 'yule',
				})
				.state('junshi', {
					url: '/junshi',
					template: '<main></main>',
					controller: 'junshi',
				})
				.state('shehui', {
					url: '/shehui',
					template: '<main></main>',
					controller: 'shehui',
				})
				.state('detail',{
					url: '/detail',
					templateUrl: 'html/detail.html',
					controller: 'detail',
				})
			$urlRouterProvider.when('', '/shehui')
		})
})();

// controller
;(function() {
	angular.module('controller', [])
		.controller('tiyu', function($scope) {
			$scope.item = 0
			$scope.title = '体育'
		})
		.controller('yule', function($scope) {
			$scope.item = 1
			$scope.title = '娱乐'
		})
		.controller('junshi', function($scope) {
			$scope.item = 2
			$scope.title = '军事'
		})
		.controller('shehui', function($scope) {
			$scope.item = 3
			$scope.title = '社会'
		})
		.controller('main',function($scope,$http){
			// search
			$scope.show = false
			$scope.search = function(){
				$scope.show = true
			}
			$scope.clean = function(){
				$scope.show = false
				$scope.val = ''
			}				
			// list
			$scope.news = []
			$scope.loadMore = function(){
				$scope.load = true;
				$http({
					url:'http://route.showapi.com/109-35',
					method:'GET',	
					params:{
						showapi_appid : 36176,
						showapi_sign : '63ebc481852a4a48b59b058238eeb818',
						channelName:$scope.title,
					}
				}).then(function(data){
					console.log(data)
					$scope.news = $scope.news.concat(data.data.showapi_res_body.pagebean.contentlist)
					$scope.load = false;
				})
			}
			$scope.loadMore()
		})
		// detail
		.controller('detail', function($scope,$http,$location) {
			$scope.title = encodeURI($location.search().title),
			console.log($scope.title)
			$http({
				url:'http://route.showapi.com/109-35?title='+ $scope.title,
				method:'GET',	
				params:{
					showapi_appid : 36176,
					showapi_sign : '63ebc481852a4a48b59b058238eeb818',
					needContent:1,
				}
			}).then(function(data){
				console.log(data)
				$scope.news = data.data.showapi_res_body.pagebean.contentlist[0]
			})
			
			// 大图预览
			$scope.show = false;
			$scope.look = function(){
				$scope.show = true;
			}
		})
})();

// directive
;(function() {
	angular.module('directive', [])
		.directive('main', function() {
			return {
				templateUrl: 'html/main.html',
				controller:'main',
				link: function(scope, ele, attr) {
					// swiper
					var swiper = new Swiper('.swiper-container', {
						pagination: '.swiper-pagination',
						paginationClickable: true
					});
				}
			}
		})
})();