export default function HttpAuth($q, $cookies) {

  return {
    request: function(config) {
      config.headers = config.headers || {};
      if ($cookies.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookies.get('token');
      }
      return config;
    },
    response: function(response) {
      if (response.status === 401) {
        $cookies.remove('username');
        $cookies.remove('token');
      }
      return response || $q.when(response);
    }
  }
}

HttpAuth.$inject = ['$q', '$cookies'];
