(function() {
	angular.module('dire', [])
		.directive('xheader', function() {
			return {
				templateUrl:'reuse/xheader.html'
			}
		})
		.directive('xfooter', function() {
			return {
				templateUrl:'reuse/xfooter.html'
			}
		})
		.directive('xcontent',function(){
			return {
				templateUrl:'reuse/xcontent.html',
				controller:'xcontent',
			}
		})
		.directive('xsearch', function() {
			return {
				templateUrl:'reuse/xsearch.html'
			}
		})
		.directive('xswiper', function() {
			return {
				templateUrl:'reuse/xswiper.html',
				link: function(scope, ele, attr) {
					var swiper = new Swiper('.swiper-container', {
						pagination: '.swiper-pagination',
						paginationClickable: true
					});
				}
			}
		})
		.directive('xlist', function() {
			return {
				templateUrl:'reuse/xlist.html'
			}
		})
		.directive('xloading', function() {
			return {
				templateUrl:'reuse/xloading.html'
			}
		})
		.directive('xpopup', function() {
			return {
				templateUrl:'reuse/xpopup.html'
			}
		})
})();
