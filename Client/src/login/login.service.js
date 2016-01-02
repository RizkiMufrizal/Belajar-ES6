export default class LoginService {

  constructor($http, $cookies) {
    this._$http = $http;
    this._$cookies = $cookies;
  }

  authenticate(user) {
    return this._$http.post('/authenticate', user);
  }

  isAuthenticate() {
    if (this._$cookies.get('username')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    return this._$http.post('/logout');
  }

}

LoginService.$inject = ['$http', '$cookies'];
