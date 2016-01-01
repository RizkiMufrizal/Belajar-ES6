export default function routing($stateProvider) {

  $stateProvider
    .state('Login', {
      url: '/login',
      views: {
        'lazyLoadView@': {
          template: '<ng-login></ng-login>'
        }
      },
      authenticate: false
    });

}

routing.$inject = ['$stateProvider'];
