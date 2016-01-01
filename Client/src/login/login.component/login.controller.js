export default class LoginController {

  constructor(LoginService) {
    this._LoginService = LoginService;
  }

}

LoginController.$inject = ['LoginService'];
