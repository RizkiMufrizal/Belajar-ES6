export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Home', {
      url: '/',
      views: {
        'lazyLoadView@': {
          template: '<ng-home></ng-home>'
        }
      }
    });

}

routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
