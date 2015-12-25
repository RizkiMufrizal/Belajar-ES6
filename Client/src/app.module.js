import angular from 'angular';
import routing from './app.config.js';

export default angular
  .module('app.module', [])
  .config(routing)
  .name;
