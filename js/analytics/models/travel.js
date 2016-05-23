define('analytics/models/travel', function() {

  function Travel(obj) {
    var obj = obj || {};
    
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

  return Travel;
});