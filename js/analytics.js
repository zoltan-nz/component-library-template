(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', './analytics/initializer', './analytics/adapters/log', './analytics/adapters/server', './travels'], factory);
  } else {
    $.extend(true, App, {
      Analytics: factory(jQuery, App.Analytics.Initializer, App.Analytics.Adapters.Log, App.Analytics.Adapters.Server, App.Data.Travels)
    });
  }
}(function($, Initializer, LogAdapter, ServerAdapter, Travels) {

  $(function() {

    Initializer({
      adapter1: LogAdapter,
      adapter2: ServerAdapter,
      travels: Travels
    });

    console.log('Analytics initialized');
  })

}));
