define('analytics/models/stage', ['analytics/models/travel'], function(Travel) {

  /**
   * A model for a stage
   * @name Stage
   * @memberOf module:Analytics:Models
   * @param {Object} dataObject
   * @param {Number} dataObject.id
   * @param {String} dataObject.name
   * 
   * @constructor
   */
  return function(stageData) {
    var obj = stageData || {};

    var id = obj.id || 0;
    var selector = obj.selector || 'input';
    var when = obj.when || 'onchange';
    var travelId = obj.travel_id|| 0;
    var stageTypeId = obj.stage_type_id || 0;

    var travel = Travel.findById(travelId);

    return {
      getId: function() {
        return id;
      },

      getSelector: function() {
        return selector;
      },
      
      getWhen: function() {
        return when;
      },
      
      getTravel: function() {
        return travel;
      }
    }
  };
});