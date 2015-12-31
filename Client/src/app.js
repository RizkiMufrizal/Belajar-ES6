import 'angular-material/angular-material.min.css';
import 'sweetalert/dist/sweetalert.css';
import './material/material.min.css';

import 'sweetalert';
import './material/material.min.js';

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import angularMaterial from 'angular-material';
import angularMaterialIcon from 'angular-material-icons';
import angularLazyLoad from 'oclazyload';
import angularSweetAlert from 'angular-h-sweetalert';

import appModule from './app.module';

angular.element(document).ready(function() {
  let appName = 'BelajarES6';
  let app = angular
    .module(appName, [
      angularAnimate,
      angularAria,
      angularMessages,
      angularMaterial,
      angularMaterialIcon,
      angularUiRouter,
      angularLazyLoad,
      angularSweetAlert,
      appModule
    ]);
  angular.bootstrap(document.getElementsByTagName("body")[0], [appName]);
});
