/**
 * @exports App.Analytics.Adapters.Server
 */
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

  /**
   *
   * @constructor
   */
  function Server() {
    console.log('Server Adapter initialized');
  }

  /**
   *
   * @param message
   * @static
   */
  Server.send = function(message) {
    console.log('Sent to server:', message);
  };

  return Server;
}));
