(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    $.extend(true, App, {
        Analytics: {
          Services: {
            Attacher: factory(jQuery)
          }
        }
      }
    );
  }
}(function($) {

  function Attacher(travels, senderService) {
    console.log('Attacher service called', travels, senderService);

    return {
      attachAll: function() {
        $.each(travels.stages, function(index, stage) {
          console.log(stage);
          $(stage.selector).on(stage.when, {name: travels.name, stage: stage}, senderService.send);
        })
      }
    }
  }

  return Attacher;
}));
