import homeController from './home.controller';
import homeTemplate from './home.template.html';

export default function () {
  return {
    restrict: 'E',
    scope: {},
    template: homeTemplate,
    controller: homeController,
    controllerAs: 'home'
  };
}
