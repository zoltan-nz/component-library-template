define('analytics/analytics', ['/adapters/log', '/services/attacher'], function(LogAdapter, AttacherService) {

  /**
   * @namespace Analytics
   * @class Analytics
   * @param {Object} options Optional parameters
   * @param {Analytics.Adapter} options.adapter The Analytics Adapter (ex. GoogleAnalytics)
   * @param {array} options.stages Array of Stage data objects
   * @returns {{init: init}}
   * @constructor
   */
  function Analytics(options) {
    var opt = options || {};

    var adapter = opt.adapter || LogAdapter;
    var stages = opt.stages || {};
    
    var attacherService = AttacherService();
    
    return {

      /**
       * Analytics initialization
       *
       * @method 
       */
      init: function() {
        attacherService.attach(stages[1]);
      }

    };
  }
  
  return Analytics;
});