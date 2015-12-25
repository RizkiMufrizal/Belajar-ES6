import 'angular-material/angular-material.min.css';

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import angularMaterial from 'angular-material';
import angularMaterialIcons from 'angular-material-icons';
import angularLazyLoad from 'oclazyload';

import appModule from './app.module';

angular.element(document).ready(function() {
  let appName = 'BelajarES6';
  let app = angular
    .module(appName, [
      angularAnimate,
      angularAria,
      angularMessages,
      angularMaterial,
      angularMaterialIcons,
      angularUiRouter,
      angularLazyLoad,
      appModule
    ]);
  angular.bootstrap(document.getElementsByTagName("body")[0], [appName]);
});
