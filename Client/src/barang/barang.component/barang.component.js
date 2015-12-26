import barangController from './barang.controller';
import barangTemplate from './barang.template.html';

export default function () {
  return {
    restrict: 'E',
    scope: {},
    template: barangTemplate,
    controller: barangController,
    controllerAs: 'barang'
  };
}
