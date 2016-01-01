export default function running($rootScope, $state, LoginService) {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    if (toState.authenticate && !LoginService.isAuthenticate()) {
      $state.go('Login');
      event.preventDefault();
    }
  });
}

running.$inject = ['$rootScope', '$state', 'LoginService'];
