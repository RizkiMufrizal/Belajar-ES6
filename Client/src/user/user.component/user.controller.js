export default class UserController {

  constructor($mdDialog, UserService, sweet) {
    this._$mdDialog = $mdDialog;
    this._UserService = UserService;
    this._sweet = sweet;
  }

  cancel() {
    this._$mdDialog.cancel();
  }

  register(r) {
    this._UserService.register(r).success((data) => {
      this._sweet.show('Info', data.info, 'success');
      this._$mdDialog.hide();
    });
  }

}

UserController.$inject = ['$mdDialog', 'UserService', 'sweet'];
