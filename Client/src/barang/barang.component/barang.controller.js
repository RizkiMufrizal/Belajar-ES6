import barangDialog from './barang.dialog.html';

export default class BarangController {

  constructor(BarangService, $mdDialog) {
    this._BarangService = BarangService;
    this._mdDialog = $mdDialog;

    this._paging = {
      page: 1
    };

    this._inputBarang = {};

    this.getBarang();

  }

  getBarang() {
    this._BarangService.getBarang(this._paging.page).success((data) => {
      this._barangs = data.docs;
      this._paging.totalPages = data.pagination.totalPages;
    });
  }

  //paging
  nextPage() {
    if (this._paging.page < this._paging.totalPages) {
      this._paging.page++;
      getBarang();
    }
  }

  hasNextPage() {
    if (this._paging.page < this._paging.totalPages) {
      return false;
    }
    return true;
  }

  previousPage() {
    if (this._paging.page > 1) {
      this._paging.page--;
      getBarang();
    }
  }

  hasPreviousPage() {
    if (this._paging.page > 1) {
      return false;
    }
    return true;
  }
  //end paging

  clear() {
    this._inputBarang.idBarang = '';
    this._inputBarang.namaBarang = '';
    this._inputBarang.hargaBarang = '';
    this._inputBarang.tanggalKadaluarsa = '';
  }

  addBarang() {
    this.clear();
    this._mdDialog.show({
      template: '<ng-barang-dialog></ng-barang-dialog>',
      clickOutsideToClose: true
    })
      .then(function(answer) {});
  }

  saveBarang(b) {
    this._BarangService.saveBarang(b).success((data) => {
      alert(data.info);
    });
  }

}

BarangController.$inject = ['BarangService', '$mdDialog'];
