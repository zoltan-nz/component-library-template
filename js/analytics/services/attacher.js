(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', '../models/stage'], factory);
  } else {
    $.extend(true, App, {
        Analytics: {
          Services: {
            Attacher: factory(jQuery, App.Analytics.Models.Stage)
          }
        }
      }
    );
  }
}(function($, Stage) {

  function Attacher(travels, senderService) {
    console.log('Attacher service called', travels, senderService);

    return {
      attachAll: function() {

        $.each(travels.stages, function(index, stageObject) {
          console.log(stageObject);

          var stageInstance = Stage(stageObject);

          stageInstance.getElement().on(
            stageInstance.getWhen(),
            stageInstance.callbackData(),
            senderService.send);
        })

      }
    }
  }

  return Attacher;
}));
