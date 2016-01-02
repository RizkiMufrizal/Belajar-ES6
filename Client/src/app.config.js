import HttpAuth from './app.http.auth';

export default function routing($stateProvider, $locationProvider, $urlRouterProvider, $provide, $httpProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Home', {
      url: '/',
      views: {
        'lazyLoadView@': {
          template: '<ng-home></ng-home>'
        }
      },
      authenticate: true
    });

  $provide.factory('authorizeInterceptor', HttpAuth);
  $httpProvider.interceptors.push('authorizeInterceptor');

}

routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$provide', '$httpProvider'];
