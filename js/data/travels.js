/**
 * @export App.Data.Travels
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    $.extend(true, App, {
      Data: {
        Travels: factory()
      }
    })
  }
}(function() {
  return {
    name: 'Form Travel',
    stages: [
      {
        name: 'name',
        type: 'BEGIN',
        selector: '#name',
        when: 'change'
      },
      {
        name: 'email',
        type: 'STAGE',
        selector: '#email',
        when: 'change'
      },
      {
        name: 'submit',
        type: 'FINISH',
        selector: '#submit',
        when: 'click'
      },
      {
        name: 'cancel',
        type: 'CANCEL',
        selector: '#cancel',
        when: 'click'
      }
    ]
  };
}));


