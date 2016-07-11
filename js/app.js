(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', './analytics'], factory);
  } else {
    var App = factory(jQuery);
  }
}(function ($) {

  $(function() {
    console.log('App initialized');

    $('#submit').on('click', function(e) {
      e.preventDefault();
      console.log('submit clicked');
    });

    var errorEvent = jQuery.Event('error');


    $('#error').click($('body').trigger(errorEvent));
  })

}));
