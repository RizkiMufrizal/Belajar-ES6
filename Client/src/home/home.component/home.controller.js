export default class HomeController {

  constructor(LoginService, $state, $cookies) {
    this._LoginService = LoginService;
    this._$state = $state;
    this._$cookies = $cookies;
  }

  logout() {
    this._$cookies.remove('username');
    this._$cookies.remove('token');
    this._LoginService.logout().success((data) => {
      this._$state.go('Login');
    });
  }

}

HomeController.$inject = ['LoginService', '$state', '$cookies'];
