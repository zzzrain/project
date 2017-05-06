;
(function() {
	angular.module('directive', [])
		.directive('xhead', function() {
			return {
				templateUrl:'reuse/xhead.html'
			}
		})
		.directive('xcontent', function() {
			return {
				templateUrl:'reuse/xcontent.html'
			}
		})
		.directive('xfooter', function() {
			return {
				templateUrl:'reuse/xfooter.html'
			}
		})
})();