define('analytics/models/travel', ['..//data/travels', 'lodash'], function(travelsData, _) {

  /**
   * A Travel model
   *
   * @memberOf Analytics:Models
   * @class Travel
   * @param {Object} dataObject
   * @param {Number} dataObject.id
   * @param {String} dataObject.name
   * @returns {{getId: getId, getName: getName}}
   * @constructor
   */
  function Travel(dataObject) {
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

  Travel.findAll = function() {
    return travelsData;
  };
  
  Travel.findById = function(id) {
    return Travel(_.find(travelsData, {id: id}));
  };
    
  return Travel;
});