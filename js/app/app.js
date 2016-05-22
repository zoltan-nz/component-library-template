define('app', ['jquery'], function($) {

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
  })
});