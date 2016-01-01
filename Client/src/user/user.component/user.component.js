import userController from './user.controller';
import userTemplate from './user.template.html';

export default function () {
  return {
    restrict: 'E',
    scope: {},
    template: userTemplate,
    controller: userController,
    controllerAs: 'user'
  };
}
