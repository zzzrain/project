(function() {
	angular.module('ctrl', [])
	.controller('tiyuCtrl', ['$scope','$http',function($scope,$http) {
		$scope.item = 0;
		$scope.title = '体育'
	}])
	.controller('yuleCtrl', ['$scope','$http',function($scope,$http) {
		$scope.item = 1;
		$scope.title = '娱乐';
	}])
	.controller('junshiCtrl', ['$scope','$http',function($scope,$http) {
		$scope.item = 2;
		$scope.title = '军事';
	}])
	.controller('shehuiCtrl', ['$scope','$http',function($scope,$http) {
		$scope.item = 3;
		$scope.title = '社会';
	}])
	.controller('xcontent', ['$scope','$http',function($scope,$http) {
		console.log('ok')
		$scope.news = [];

		// 加载数据&&遮罩层
		$scope.loadmore = function(){
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
				$scope.load = false;
				$scope.news = $scope.news.concat(data.data.showapi_res_body.pagebean.contentlist)
			})
		}
		$scope.loadmore();
		
		// 搜索框
		$scope.show = false;
		$scope.search = function(){
			$scope.show = true;
			console.log($scope.keyword)
		}
		$scope.clean = function(){
			$scope.keyword = '';
		}
		
		// 测试
		/*$scope.arr = [
			{name:'银桑',age:28,chi:'红豆饭'},
			{name:'十四',age:28,chi:'蛋黄酱'},
			{name:'神乐',age:16,chi:'醋海带'},
			{name:'猩猩',age:37,chi:'蛋黄酱'},
			{name:'月月',age:26,chi:'大烟枪'},
			{name:'袁飞',age:26,chi:'红豆饭'},
		];*/
	}])
		
	// 详情页
	.controller('detailCtrl', function($scope,$http,$location) {
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
