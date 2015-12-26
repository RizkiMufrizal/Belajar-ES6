export default function routing($stateProvider) {

  $stateProvider
    .state('Barang', {
      url: '/barang',
      views: {
        'lazyLoadView@': {
          template: '<ng-barang></ng-barang>'
        }
      }
    });

}

routing.$inject = ['$stateProvider'];
