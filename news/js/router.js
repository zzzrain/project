;
(function() {
	angular.module('state', [])
		.config(function($stateProvider, $urlRouterProvider) {
			console.log('ok')
			$stateProvider
				.state('shehui', {
					url: '/shehui',
					templateUrl: 'html/shehui.html',
					controller: 'indexCtrl',
				})
			$urlRouterProvider.when('', '/shehui')
		})
})();