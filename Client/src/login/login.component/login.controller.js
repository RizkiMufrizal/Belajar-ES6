export default class LoginController {

  constructor(LoginService, sweet, $state) {
    this._LoginService = LoginService;
    this._sweet = sweet;
    this._$state = $state;
  }

  authenticate(u) {
    this._LoginService.authenticate(u).success((data) => {
      this._sweet.show('Info', 'Anda berhasil login', 'success');
      this._$state.go('Home');
    }).error((status) => {
      this._sweet.show('Warning', 'Username dan password anda masih salah', 'error');
    });
  }

}

LoginController.$inject = ['LoginService', 'sweet', '$state'];
