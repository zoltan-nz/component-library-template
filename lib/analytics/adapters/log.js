define('log-adapter', function() {
  "use strict";

  /**
   * Console Log Adapter
   *
   * @memberOf Analytics:Adapters
   *
   * @returns {Object} {{send: send}}
   * @constructor
   */
  function LogAdapter() {


    return {
      send: function(message) {
        console.warn('Log Adapter:', message);
      }
    }
  }

  return LogAdapter;
});