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
}(function(Travel) {
  function SenderService(adapter) {
    console.log('Sender Service called');

    var travelStore = [];

    return {
      send: function(e) {

        if (e.data.stage.type === "BEGIN") {
          var travel = Travel(e.data.name);
          travelStore.push(travel);
          console.log(travelStore);
          console.log(travel.getId())
        }

        if (e.data.stage.type === "STAGE") {
          console.log(travelStore);
        }

        console.log('Sending...', e.data);
        adapter.send(e.data.stage.type);
      }
    }
  }

  return SenderService;
}));
