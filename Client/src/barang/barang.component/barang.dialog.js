export default function BarangDialog($mdDialog, BarangService, _inputBarang, _enable, sweet) {

  let barang = this;

  barang._inputBarang = _inputBarang;
  barang.enable = _enable;

  barang.cancel = () => {
    $mdDialog.cancel();
  };

  barang.saveBarang = (b) => {
    BarangService.saveBarang(b).success((data) => {
      sweet.show('Info', data.info, 'success');
      $mdDialog.hide();
    });
  };

  barang.updateBarang = (b, idBarang) => {
    BarangService.updateBarang(b, idBarang).success((data) => {
      sweet.show('Info', data.info, 'success');
      $mdDialog.hide();
    });
  }

}

BarangDialog.$inject = ['$mdDialog', 'BarangService', '_inputBarang', '_enable', 'sweet'];
