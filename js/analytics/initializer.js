(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['./services/attacher', './services/sender'], factory);
  } else {
    $.extend(true, App, {
        Analytics: {
          Initializer: factory(App.Analytics.Services.Attacher, App.Analytics.Services.Sender)
        }
      }
    );
  }
}(function(AttacherService, SenderService) {
  function Initializer(options) {

    console.log('Initializer called', options);

    var adapter1 = options.adapter1;
    var adapter2 = options.adapter2;

    var travels = options.travels;

    var senderService = SenderService(adapter1);
    var attacherService = AttacherService(travels, senderService);

    attacherService.attachAll();
  }

  return Initializer;
}));
