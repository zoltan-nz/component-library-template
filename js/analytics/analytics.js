define('analytics/analytics', ['analytics/adapters/log', 'analytics/services/attacher'], function(LogAdapter, AttacherService) {

  /**
   *
   * @param {Object} opt Optional parameters
   * @param opt.adapter Used adapter
   * @param opt.travels Travel data
   * @returns {{init: init}}
   * @constructor
   */
  function Analytics(opt) {
    var opt = opt || {};

    var adapter = opt.adapter || LogAdapter;
    var travels = opt.travels || {};
    
    var attacherService = AttacherService();
    
    return {

      /**
       * Analytics initialization
       */
      init: function() {
        attacherService.attach(travels);
      }

    };
  }
  
  return Analytics;
});