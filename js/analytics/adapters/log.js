(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([''], factory);
  } else {
    $.extend(true, App, {
      Analytics: {
        Adapters: {
          Log: factory()
        }
      }
    });
  }
}(function() {

  /**
   *
   * @constructor
   */
  function Log() {
    console.log('Log Adapter initialized');
  }

  Log.send = function(message) {
    console.log('Message:', message);
  };

  return Log;
}));
