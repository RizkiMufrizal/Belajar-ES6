import angular from 'angular';
import routing from './app.config.js';
import home from './home/home.module';
import barang from './barang/barang.module';

export default angular
  .module('app.module', [
    home,
    barang
  ])
  .config(routing)
  .name;
