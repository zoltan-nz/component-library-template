define('log-adapter', function() {

  function LogAdapter() {

    return {
      send: function(message) {
        console.warn('Log Adapter:', message);
      }
    }
  }

  return LogAdapter;
});