export default class LoginController {

  constructor(LoginService, sweet, $state, $mdDialog, $cookies) {
    this._LoginService = LoginService;
    this._sweet = sweet;
    this._$state = $state;
    this._$mdDialog = $mdDialog;
    this._$cookies = $cookies;
  }

  authenticate(u) {
    this._LoginService.authenticate(u).success((data) => {
      this._$cookies.put('username', data.nama);
      this._$cookies.put('token', data.token);
      this._sweet.show('Info', 'Anda berhasil login', 'success');
      this._$state.go('Home');
    }).error((status) => {
      this._sweet.show('Warning', 'Username dan password anda masih salah', 'error');
    });
  }

  register() {
    this._$mdDialog.show({
      template: '<ng-user></ng-user>',
      clickOutsideToClose: false,
    })
      .then((answer) => {

      }, () => {
        console.log('cancel');
      });
  }

}

LoginController.$inject = ['LoginService', 'sweet', '$state', '$mdDialog', '$cookies'];
