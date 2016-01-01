import loginController from './login.controller';
import loginTemplate from './login.template.html';

export default function () {
  return {
    restrict: 'E',
    scope: {},
    template: loginTemplate,
    controller: loginController,
    controllerAs: 'login'
  };
}
