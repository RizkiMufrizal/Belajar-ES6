import barangDialog from './barang.dialog.html';
import barangDialogJS from './barang.dialog';

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

  addBarang() {
    this._mdDialog.show({
      templateUrl: '../../barang/barang.component/barang.dialog.html',
      controller: barangDialogJS,
      controllerAs: 'barang',
      clickOutsideToClose: false,
      locals: {
        _inputBarang: null,
        _enable: false
      }
    })
      .then((answer) => {
        this.getBarang();
      }, () => {
        console.log('cancel');
      });
  }

  editBarang(b) {
    b.tanggalKadaluarsa = new Date(b.tanggalKadaluarsa);
    this._mdDialog.show({
      templateUrl: '../../barang/barang.component/barang.dialog.html',
      controller: barangDialogJS,
      controllerAs: 'barang',
      clickOutsideToClose: false,
      locals: {
        _inputBarang: b,
        _enable: true
      }
    })
      .then((answer) => {
        this.getBarang();
      }, () => {
        console.log('cancel');
      });
  }

  deleteBarang(idBarang) {
    this._BarangService.deleteBarang(idBarang).success((data) => {
      alert(data.info);
      this.getBarang();
    });
  }

}

BarangController.$inject = ['BarangService', '$mdDialog'];
