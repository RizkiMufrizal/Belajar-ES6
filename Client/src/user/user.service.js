export default class UserService {

  constructor($http) {
    this._$http = $http;
  }

  register(r) {
    return this._$http.post('/register', r);
  }

}

UserService.$inject = ['$http'];
