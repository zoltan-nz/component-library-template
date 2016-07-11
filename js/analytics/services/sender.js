(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../models/travel'], factory);
  } else {
    $.extend(true, App, {
        Analytics: {
          Services: {
            Sender: factory(App.Analytics.Models.Travel)
          }
        }
      }
    );
  }
}(function() {

  function SenderService() {
    console.log('Sender Service called');

    return {
      send: function(e) {
        console.log('Name: %s, Type: %s', e.data.name, e.data.type);
      }
    }
  }

  return SenderService;
}));
