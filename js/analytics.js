(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @exports App.Analytics
     */
    define(['jquery', './analytics/initializer', './analytics/adapters/log', './analytics/adapters/server', './data/travels'], factory);
  } else {
    $.extend(true, App, {
      Analytics: factory(jQuery, App.Analytics.Initializer, App.Analytics.Adapters.Log, App.Analytics.Adapters.Server, App.Data.Travels)
    });
  }
}
(
  /**
   *
   * @param {jQuery} $
   * @param {App.Analytics.Initializer} Initializer
   * @param LogAdapter
   * @param ServerAdapter
   * @param travelsData
   */
  function($, Initializer, LogAdapter, ServerAdapter, travelsData) {

  $(function() {

    Initializer({
      adapter1: LogAdapter,
      adapter2: ServerAdapter,
      travels: travelsData
    });

    console.log('Analytics initialized');
  })

}));
