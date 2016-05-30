define('analytics/models/stage', ['..//models/travel'], function(Travel) {

  /**
   * A model for a stage
   * @name Stage
   * @memberOf module:Analytics:Models
   * @param {Object} dataObject
   * @param {Number} dataObject.id - Unique id in data model
   * @param {String} dataObject.selector - The selector where the event will be attached
   * @param {String} dataObject.when - Valid DOM event which will trigger the adapter
   * @param {Number} dataObject.stageTypeId - Type id (Begin, Interim, Finished)
   * @constructor
   */
  return function(stageData) {
    var obj = stageData || {};

    var id = obj.id || 0;
    var selector = obj.selector || 'input';
    var when = obj.when || 'onchange';
    var travelId = obj.travel_id || 0;
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
      },
      
      getStage: function() {
        return StageType.findById(stageTypeId);
      }
    }
  };
});