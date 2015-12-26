export default class BarangController {
  constructor(BarangService) {
    this._BarangService = BarangService;

    this._paging = {
      page: 1
    };

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

  previousPage() {
    if (this._paging.page > 1) {
      this._paging.page--;
      getBarang();
    }
  }
  //end paging

}

BarangController.$inject = ['BarangService'];
