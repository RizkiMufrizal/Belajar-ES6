export default class BarangService {

  constructor($http) {
    this._$http = $http;
  }

  getBarang(page, size) {
    return this._$http.get('/api/barang?page=' + page + '&size=' + size);
  }

  saveBarang(barang) {
    return this._$http.post('/api/barang', barang);
  }

  updateBarang(barang, idBarang) {
    return this._$http.put('/api/barang/' + idBarang, barang);
  }

  deleteBarang(idBarang) {
    return this._$http.delete('/api/barang/' + idBarang);
  }

}

BarangService.$inject = ['$http'];
