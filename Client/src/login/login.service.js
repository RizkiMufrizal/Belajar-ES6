export default class LoginService {

  constructor($http, $cookies) {
    this._$http = $http;
    this._$cookies = $cookies;
  }

  authenticate(user) {
    return this._$http.post('/authenticate', user);
  }

  isAuthenticate() {
    if (this._$cookies.get('username') === null) {
      return true;
    }
    return false;
  }

}

LoginService.$inject = ['$http', '$cookies'];
