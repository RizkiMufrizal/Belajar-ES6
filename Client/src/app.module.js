import angular from 'angular';
import routing from './app.config.js';
import home from './home/home.module';

export default angular
  .module('app.module', [home])
  .config(routing)
  .name;
