(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([''], factory);
  } else {
    $.extend(true, App, {
      Analytics: {
        Adapters: {
          Server: factory()
        }
      }
    });
  }
}(function() {

  function Server() {
    console.log('Server Adapter initialized');
  }

  Server.send = function(message) {
    console.log('Sent to server:', message);
  };

  return Server;
}));
