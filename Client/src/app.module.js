import angular from 'angular';
import routing from './app.config';
import running from './run.config';
import home from './home/home.module';
import barang from './barang/barang.module';
import login from './login/login.module';
import user from './user/user.module';

export default angular
  .module('app.module', [
    home,
    barang,
    login,
    user
  ])
  .config(routing)
  .run(running)
  .name;
