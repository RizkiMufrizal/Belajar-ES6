routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Home', {
      url: '/',
      views: {
        'lazyLoadView': {
          templateUrl: './templates/home.ejs'
        }
      }
    })
    .state('oke', {
      url: '/oke',
      views: {
        'lazyLoadView': {
          templateUrl: './templates/oke.ejs'
        }
      }
    });

}
