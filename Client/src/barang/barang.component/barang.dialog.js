import barangController from './barang.controller';
import barangDialog from './barang.dialog.html';

export default function () {
  return {
    restrict: 'E',
    scope: {},
    template: barangDialog,
    controller: barangController,
    controllerAs: 'barang'
  };
}
