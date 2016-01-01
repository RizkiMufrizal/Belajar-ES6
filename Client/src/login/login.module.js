import angular from 'angular';
import loginConfig from './login.config';
import loginService from './login.service';
import loginComponent from './login.component/login.component';

export default angular
  .module('login', [])
  .config(loginConfig)
  .service('LoginService', loginService)
  .directive('ngLogin', loginComponent)
  .name;
