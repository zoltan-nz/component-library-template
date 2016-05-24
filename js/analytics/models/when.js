define('analytics/models/when', function() {

  /**
   * The When enum
   *
   * @memberOf Analytics:Models
   * @readonly
   * @enum {string}
   */
  var when;

  when = {
    ONLOAD: 'onload',
    ONUNLOAD: 'onunload',
    ONCLICK: 'onclick',
    CHANGE: 'onchange'
  };

  return when;
});