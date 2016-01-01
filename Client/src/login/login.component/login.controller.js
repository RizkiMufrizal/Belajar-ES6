export default class LoginController {

  constructor(LoginService, sweet) {
    this._LoginService = LoginService;
    this._sweet = sweet;
  }

  authenticate(u) {
    this._LoginService.authenticate(u).success((data) => {
      console.log('cek');
    }).error((status) => {
      this._sweet.show('Warning', 'Username dan password anda masih salah', 'error');
    });
  }

}

LoginController.$inject = ['LoginService', 'sweet'];
