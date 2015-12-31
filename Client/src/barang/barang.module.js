import angular from 'angular';
import BarangConfig from './barang.config';
import BarangService from './barang.service';
import BarangComponent from './barang.component/barang.component';

export default angular
  .module('barang', [])
  .config(BarangConfig)
  .service('BarangService', BarangService)
  .directive('ngBarang', BarangComponent)
  .name;
