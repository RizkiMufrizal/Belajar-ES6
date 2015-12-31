import barangDialog from './barang.dialog.html';
import barangDialogJS from './barang.dialog';

export default class BarangController {

  constructor(BarangService, $mdDialog, sweet) {
    this._BarangService = BarangService;
    this._mdDialog = $mdDialog;
    this._sweet = sweet;

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
    this._sweet.show({
      title: 'Warning',
      text: 'Apakah Data ingin dihapus ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Ya, Dihapus !',
      closeOnConfirm: false
    }, function() {
      this._BarangService.deleteBarang(idBarang).success((data) => {
        this._sweet.show('Terhapus !', data.info, 'success');
        this.getBarang();
      });
    });
  }

}

BarangController.$inject = ['BarangService', '$mdDialog', 'sweet'];
