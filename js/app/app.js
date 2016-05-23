define('app/app',
  ['jquery', 'analytics/analytics', 'analytics/services/attacher', 'analytics/data/travels/form-usage'],
  function($, Analytics, AttacherService, formUsageData) {

  $('#enterNameForm').on('submit', function(e) {
    console.warn($('form').serialize());
    e.preventDefault();
    $('#respond').append('<p>Submit clicked</p>');
  });

  var ageForm = '' +
    '<label for="age">Name:</label>' +
    '<input id="age" name="age" type="text" placeholder="Age"><br>';

  $('#initial').change(function(e) {
    if (e.target.value === 'mr') {
      $('#enterNameForm #extra').append(ageForm);
    }
  });

  var analytics = Analytics({travels: formUsageData });
  analytics.init();

});