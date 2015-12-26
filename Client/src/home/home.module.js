import angular from 'angular';
import homeComponent from './home.component/home.component';

export default angular
  .module('home', [])
  .directive('ngHome', homeComponent)
  .name;
