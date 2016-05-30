define('app/app',
  ['jquery', '../../lib/analytics/analytics', '../../lib/analytics/services/attacher', '../../lib/analytics/data/stages'],
  function($, Analytics, AttacherService, stagesData) {

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

  var analytics = Analytics({stages: stagesData});
  analytics.init();

});