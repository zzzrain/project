// 模块化
angular.module('demo', ['ui.router', 'router', 'controller', 'directive']);
// router
;(function() {
	angular.module('router', [])
		.config(function($stateProvider, $urlRouterProvider) {
			console.log('ok')
			$stateProvider
				.state('hots', {
					url: '/hots',
					templateUrl: 'html/hots.html',
					controller: 'hots',
				})
				.state('find', {
					url: '/find',
					templateUrl: 'html/find.html',
					controller: 'find',
				})
				.state('user', {
					url: '/user',
					templateUrl: 'html/user.html',
					controller: 'user',
				})
				.state('login',{
					url: '/login',
					templateUrl: 'html/login.html',
					controller: 'login',
				})
				.state('register',{
					url: '/register',
					templateUrl: 'html/register.html',
					controller: 'register',
				})
				.state('hots.played',{
					url: '/played',
					templateUrl: 'html/played.html',
					controller: 'played',
				})
				.state('hots.prevue',{
					url: '/prevue',
					templateUrl: 'html/prevue.html',
					controller: 'prevue',
				})
				.state('detail',{
					url: '/detail/:id',
					templateUrl: 'html/detail.html',
					controller: 'detail',
				})
				/*.state('comments',{
					url: '/comments',
					templateUrl: 'html/comments.html',
					controller: 'comments',
				})
				.state('reviews',{
					url: '/reviews',
					templateUrl: 'html/reviews.html',
					controller: 'reviews',
				})*/
			$urlRouterProvider.when('', '/hots')
		})
})();

// controller
;(function() {
	angular.module('controller', [])
		.controller('hots', function($scope) {
			$scope.item = 0
		})
		.controller('find', function($scope) {
			$scope.item = 1
		})
		.controller('user', function($scope) {
			$scope.item = 2
		})
		.controller('login', function($scope,$http) {
			$scope.login = function(){
				$http({
					url:'http://localhost/project/ng-douban/php/login.php',
					method:'GET',	
					params:{
						username:$scope.username,
						password:$scope.password,
					}
				}).then(function(data){
					console.log(data)
					if(data){
						var now = new Date();
						now.setDate(now.getDate()+3);
						document.cookie = 'username=' + data.data + ';expires=' + now + ';path=/'
						window.location.href = "/project/ng-douban/index.html#/user"
					}else {
						alert('用户名不存在/密码不正确')
					}
				})
			}
		})
		.controller('played', function($scope,$http) {
			$scope.movie = []
			$scope.bool = false
			$scope.start = 0
			$scope.count = 10
			$scope.showmore = function(){
				$http({
					url:"http://localhost/project/ng-douban/php/played.php",
					method:'JSONP',
					params:{city:'广州',start:$scope.start,count:$scope.count,callback:"JSON_CALLBACK"},
				}).then(function(data){
					console.log(data)
					$scope.movie = $scope.movie.concat(data.data.subjects)
					$scope.bool = true
					$scope.start += 10
				})
			}
			$scope.showmore()
		})
		.controller('prevue', function($scope,$http) {
			console.log($scope.item)
		})
		.controller('detail', function($scope,$http) {
			console.log('ok')
			
			// 网上数据
			$scope.src = window.location.hash.substr(8).replace(/\/comments/,'')
			console.log($scope.src)
			$http({
				url:"http://localhost/project/ng-douban/php/detail.php",
				method:'GET',
				params:{src:$scope.src},
			}).then(function(data){
				console.log(data)
				$scope.title = data.data.title
			})
			
			// 获取用户
			/*var cookie = document.cookie.split('; ');
			console.log(cookie)
			cookie.map(function(item) {
				item = item.split('=')
				if(item[0] === 'username')
					this.username = item[1]
			}.bind(this))*/
			
			// 刷新时间
			/*timer(){
				setInterval(function(){
					var date = new Date().toLocaleDateString().replace(/\//gi,'-')
					var time = new Date().toTimeString().slice(0,8)
					this.now = date +' '+ time
				}.bind(this),1000)
			},*/
			
			/*send(){
				$.get(
					'http://localhost/project/v-douban/php/comments.php',
					{username:this.username,text:this.text,now:this.now},
					function(data){
						data = JSON.parse(data)
						console.log(data)
						$('.local').html(data.map(item=>{
							return `
							<div class="info">
								<a class="user"><img src="" alt="" /></a>
								<div class="text">
									<p>${item.username}</p>
									<p>${item.text}</p>
									<p>${item.now}</p>
								</div>
							</div>`
						}).reverse().join(''))
					}.bind(this)
				)
			}*/
		})
})();


// directive
;(function() {
	angular.module('directive', [])
		.directive('main', function() {
			return {
				
			}
		})
})();