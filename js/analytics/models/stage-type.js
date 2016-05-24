define('analytics/models/stage-type', function() {

  /**
   * A Type model
   *
   * @memberOf Analytics:Models
   * @param {Object} dataObject
   * @param {Number} dataObject.id
   * @param {String} dataObject.name
   * @returns {{getId: getId, getName: getName}}
   * @constructor
   */
  function StageType(dataObject) {
    var obj = dataObject || {};

    var id = obj.id || 0;
    var name = obj.name || 'Empty';

    return {
      getId: function() {
        return id;
      },

      getName: function() {
        return name;
      }
    }
  }

  return StageType;
});