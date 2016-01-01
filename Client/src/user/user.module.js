import angular from 'angular';
import userService from './user.service';
import userComponent from './user.component/user.component';

export default angular
  .module('user', [])
  .service('UserService', userService)
  .directive('ngUser', userComponent)
  .name;
