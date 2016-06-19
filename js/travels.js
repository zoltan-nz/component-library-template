(function (factory) {
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
        type: 'BEGIN',
        selector: '#name',
        when: 'change'
      },
      {
        type: 'STAGE',
        selector: '#email',
        when: 'change'
      },
      {
        type: 'FINISH',
        selector: '#submit',
        when: 'click'
      },
      {
        type: 'CANCEL',
        selector: '#cancel',
        when: 'click'
      }
    ]
  };
}));


